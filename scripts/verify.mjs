// Multilingual audit + verification over the built site (dist/). Run: npm run build && npm run verify
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const ROOT = process.cwd();
const DIST = path.join(ROOT, 'dist');
const data = (f) => require(path.join(ROOT, 'src', 'data', f));
const S = data('site.js');
const EN = data('i18n/en.js');
const NM = data('i18n/tool-names.js');
const locales = S.LOCALES.map((l) => l.code);
const rtl = new Set(S.LOCALES.filter((l) => l.dir === 'rtl').map((l) => l.code));
const slugs = NM.slugs; // '' = home + 42 tools
const statics = ['about-us', 'contact-us', 'terms', 'privacy', 'sitemap'];

const fileOf = (loc, slug) => path.join(DIST, loc === 'en' ? '' : loc, slug, 'index.html');
const read = (f) => (fs.existsSync(f) ? fs.readFileSync(f, 'utf8') : null);
const text = (h) => h.replace(/<(script|style|svg|pre|textarea)[\s\S]*?<\/\1>/gi, ' ').replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/gi, ' ').replace(/\s+/g, ' ');
const EN_WORDS = new Set('the and your with from for are not this that you can how what why when into more most free file files convert tool tools size download upload preview result results settings step steps use used using add choose drop click browse open close live copy reset presets output input quality scale background'.split(' '));
const englishRatio = (h) => {
  const w = text(h).toLowerCase().match(/[a-z]{3,}/g) || [];
  const all = text(h).match(/\p{L}{3,}/gu) || [];
  if (!all.length) return 0;
  return w.filter((x) => EN_WORDS.has(x)).length / all.length;
};

// shape check against en.js
const shape = (o, p = '', out = {}) => {
  if (Array.isArray(o)) { out[p] = 'A' + o.length; o.forEach((v, i) => shape(v, p + '[' + i + ']', out)); }
  else if (o && typeof o === 'object') for (const k of Object.keys(o)) shape(o[k], p ? p + '.' + k : k, out);
  else out[p] = typeof o;
  return out;
};
const enShape = shape(EN);

const report = { locales: {}, totals: {} };
const failures = [];
for (const loc of locales) {
  const r = { pages: 0, tools: 0, toolsMissing: [], longForm: 0, longFormMissing: 0, svgToolsTranslatedUi: 0, staticTranslated: 0, keysMissing: 0, rtlOk: null, englishHeavy: [], switcherFallbacks: 0 };
  // dictionary keys
  if (loc !== 'en') {
    try {
      const T = data('i18n/' + loc + '.js');
      const s = shape(T);
      r.keysMissing = Object.keys(enShape).filter((k) => !(k in s)).length;
    } catch { r.keysMissing = -1; }
  }
  for (const slug of slugs) {
    const h = read(fileOf(loc, slug));
    if (!h) { if (slug) r.toolsMissing.push(slug); continue; }
    r.pages++;
    if (!slug) continue;
    r.tools++;
    const hasLong = h.includes('id="how-it-works"');
    hasLong ? r.longForm++ : r.longFormMissing++;
    if (loc !== 'en') {
      if (englishRatio(h) > 0.08) r.englishHeavy.push(slug);
      // switcher: does every other locale link resolve to the same tool?
      const m = [...h.matchAll(/<nav class="foot-lang"[\s\S]*?<\/nav>/g)][0]?.[0] || '';
      for (const l of locales) {
        const href = (m.match(new RegExp('href="([^"]*)" lang="' + l + '"')) || [])[1];
        const expect = (l === 'en' ? '' : '/' + l) + '/' + slug + '/';
        if (href !== expect) r.switcherFallbacks++;
      }
    }
  }
  for (const s of statics) {
    const h = read(fileOf(loc, s));
    if (h && (loc === 'en' || englishRatio(h) < 0.05)) r.staticTranslated++;
  }
  const home = read(fileOf(loc, ''));
  r.rtlOk = home ? (rtl.has(loc) ? /<html lang="[a-z-]+" dir="rtl"/.test(home) : /dir="ltr"/.test(home)) : false;
  // tool UI: SVG tool pages should carry the locale dictionary for runtime labels
  for (const slug of slugs.filter((x) => x.startsWith('svg'))) {
    const h = read(fileOf(loc, slug));
    if (h && (loc === 'en' || /"svg":\{/.test(h))) r.svgToolsTranslatedUi++;
  }
  report.locales[loc] = r;
  if (loc !== 'en' && (r.toolsMissing.length || r.keysMissing || !r.rtlOk)) failures.push(loc);
}

// hreflang reciprocity (sampled on every tool page that exists in several locales)
let hreflangBad = 0;
for (const slug of slugs) {
  const present = locales.filter((l) => read(fileOf(l, slug)));
  for (const l of present) {
    const h = read(fileOf(l, slug));
    const got = new Set([...h.matchAll(/rel="alternate" hreflang="([^"]+)"/g)].map((m) => m[1]));
    for (const p of present) if (!got.has(p)) hreflangBad++;
  }
}
report.totals = { locales: locales.length, pagesExpected: locales.length * slugs.length, hreflangMissing: hreflangBad };

// console summary
const cols = ['pages', 'tools', 'longForm', 'svgToolsTranslatedUi', 'staticTranslated', 'switcherFallbacks'];
console.log('locale  pages  tools  longForm  svgUI  statics  keysMissing  englishHeavy  switcherFallbacks  rtl');
for (const loc of locales) {
  const r = report.locales[loc];
  console.log([loc.padEnd(6), String(r.pages).padStart(5), String(r.tools).padStart(6), String(r.longForm).padStart(9), String(r.svgToolsTranslatedUi).padStart(6), String(r.staticTranslated).padStart(8), String(r.keysMissing).padStart(12), String(r.englishHeavy.length).padStart(13), String(r.switcherFallbacks).padStart(18), r.rtlOk ? 'ok' : 'FAIL'].join('  '));
}
console.log('\ntotals', report.totals);
fs.writeFileSync(path.join(ROOT, 'verify-report.json'), JSON.stringify(report, null, 1));
if (failures.length) { console.log('\nFAIL locales:', failures.join(', ')); process.exitCode = 1; }
