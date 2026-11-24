// In-depth audit of dist/: links, head/hreflang, placeholders, structure, untranslated text, script mix, JSON-LD, sitemaps.
// Run: npm run build && node scripts/audit-deep.mjs
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const ROOT = process.cwd(), DIST = path.join(ROOT, 'dist');
const S = require(path.join(ROOT, 'src/data/site.js'));
const locales = S.LOCALES.map((l) => l.code);
const dirOf = Object.fromEntries(S.LOCALES.map((l) => [l.code, l.dir]));
const SITE = (S.DOMAIN || '').replace(/\/$/, '');

const walk = (d, o = []) => { for (const e of fs.readdirSync(d, { withFileTypes: true })) { const p = path.join(d, e.name); e.isDirectory() ? walk(p, o) : o.push(p); } return o; };
const files = walk(DIST);
const htmls = files.filter((f) => f.endsWith('.html') && !f.endsWith('404.html') && !/http-equiv="refresh"/.test(fs.readFileSync(f, 'utf8').slice(0, 400)));
const rel = (f) => path.relative(DIST, f).split(path.sep).join('/');
const locOf = (r) => { const s = r.split('/')[0]; return locales.includes(s) && s !== 'en' ? s : 'en'; };
const issues = {}; const add = (k, m) => { (issues[k] ||= []).push(m); };

const exists = (u) => { // u is a site path starting with /
  u = decodeURIComponent(u.split('#')[0].split('?')[0]);
  const p = path.join(DIST, u);
  if (u.endsWith('/')) return fs.existsSync(path.join(p, 'index.html'));
  return fs.existsSync(p) || fs.existsSync(p + '.html') || fs.existsSync(path.join(p, 'index.html'));
};
const stripTags = (h) => h.replace(/<(script|style|svg)[\s\S]*?<\/\1>/gi, ' ').replace(/<[^>]+>/g, ' ');
const segs = (h) => {
  const out = [];
  const re = /<(h1|h2|h3|h4|p|li|td|th|button|summary|figcaption|label|caption)\b[^>]*>([\s\S]*?)<\/\1>/gi; let m;
  while ((m = re.exec(h))) { const t = stripTags(m[2]).replace(/&[a-z#0-9]+;/gi, ' ').replace(/\s+/g, ' ').trim(); if (t) out.push(t); }
  return out;
};
const SCRIPT = { hi: /[ऀ-ॿ]/, ar: /[؀-ۿ]/, ru: /[Ѐ-ӿ]/, bg: /[Ѐ-ӿ]/, ja: /[぀-ヿ一-鿿]/, ko: /[가-힯]/ };
const OTHER = { hi: /[؀-ۿЀ-ӿ぀-ヿ一-鿿가-힯]/, ar: /[ऀ-ॿЀ-ӿ぀-ヿ一-鿿가-힯]/, ru: /[ऀ-ॿ؀-ۿ぀-ヿ一-鿿가-힯]/, bg: /[ऀ-ॿ؀-ۿ぀-ヿ一-鿿가-힯]/, ja: /[ऀ-ॿ؀-ۿЀ-ӿ가-힯]/, ko: /[ऀ-ॿ؀-ۿЀ-ӿ぀-ヿ]/ };
const LATIN_OTHER = /[ऀ-ॿ؀-ۿЀ-ӿ぀-ヿ一-鿿가-힯]/; // foreign scripts inside latin-script locales

const enHtml = {};
for (const f of htmls) { const r = rel(f); if (locOf(r) === 'en') enHtml[r] = fs.readFileSync(f, 'utf8'); }

const idsPerLocalePage = {};
let linkCount = 0, checkedSegs = 0;
for (const f of htmls) {
  const r = rel(f), loc = locOf(r), h = fs.readFileSync(f, 'utf8');
  const slug = loc === 'en' ? r : r.split('/').slice(1).join('/');
  const tag = `${loc}:${slug.replace(/index\.html$/, '')}`;

  // head
  const title = (h.match(/<title>([^<]*)<\/title>/) || [])[1] || '';
  const desc = (h.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '';
  const canon = (h.match(/rel="canonical" href="([^"]*)"/) || [])[1] || '';
  const lang = (h.match(/<html[^>]*lang="([^"]*)"/) || [])[1];
  const dir = (h.match(/<html[^>]*dir="([^"]*)"/) || [])[1];
  if (!title.trim()) add('head: empty title', tag); else if (title.length > 75) add('head: title >75', `${tag} (${title.length})`);
  if (!desc.trim()) add('head: empty description', tag); else if (desc.length > 175) add('head: description >175', `${tag} (${desc.length})`);
  if (!canon) add('head: no canonical', tag);
  if (lang !== loc) add('head: html lang mismatch', `${tag} lang=${lang}`);
  if ((dir || 'ltr') !== dirOf[loc]) add('head: dir mismatch', `${tag} dir=${dir}`);
  const hl = [...h.matchAll(/rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)].map((m) => m[1]);
  const expectHl = locales.length + 1;
  if (new Set(hl).size !== expectHl) add('head: hreflang count', `${tag} has ${new Set(hl).size}, expected ${expectHl}`);
  if (hl.includes('bn')) add('head: bn hreflang', tag);
  const h1 = (h.match(/<h1\b/g) || []).length;
  if (h1 !== 1) add('structure: h1 count', `${tag} h1=${h1}`);

  // placeholders / garbage
  const body = stripTags((h.match(/<main[\s\S]*<\/main>/) || [h])[0]);
  for (const [re, name] of [[/\[\[[a-z0-9-]+\]\]/, '[[link]]'], [/\{[a-z]+\}/, '{placeholder}'], [/\bundefined\b/, 'undefined'], [/\bNaN\b/, 'NaN'], [/\[object /, '[object]'], [/�/, 'U+FFFD'], [/Ã.|â€/, 'mojibake'], [/\$\{/, '${}']]) if (re.test(body) || re.test(title + desc)) add('text: ' + name, tag);

  // duplicate ids
  const ids = [...h.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]); const seen = new Set();
  for (const i of ids) { if (seen.has(i)) add('structure: duplicate id', `${tag} #${i}`); seen.add(i); }
  // anchors resolve within page
  for (const m of h.matchAll(/href="#([^"]+)"/g)) if (m[1] && !seen.has(m[1]) && !seen.has(decodeURIComponent(m[1]))) add('links: dead #anchor', `${tag} #${m[1]}`);

  // JSON-LD
  for (const m of h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) { try { JSON.parse(m[1]); } catch (e) { add('jsonld: invalid', tag); } }

  // links
  for (const m of h.matchAll(/<(a|link|img|script|source)\b[^>]*?\s(href|src)="([^"]*)"/g)) {
    let u = m[3]; if (!u || u.startsWith('#') || /^(mailto:|tel:|data:|javascript:)/.test(u)) continue;
    if (/^https?:\/\//.test(u)) { if (SITE && u.startsWith(SITE)) u = u.slice(SITE.length) || '/'; else continue; }
    if (!u.startsWith('/')) u = '/' + path.posix.join(path.posix.dirname('/' + r), u);
    linkCount++;
    if (!exists(u)) add('links: broken', `${tag} -> ${m[3]}`);
    if (m[1] === 'a' && !/hreflang=/.test(h.slice(m.index, m.index + m[0].length + 80)) && loc !== 'en' && u.endsWith('/') && u !== '/' && !locales.some((c) => u.startsWith('/' + c + '/')) && exists('/' + loc + u)) add('links: points to English though localized page exists', `${tag} -> ${m[3]}`);
    if (/\/bn\//.test(u)) add('links: bn link', tag);
  }

  // untranslated text vs English twin
  if (loc !== 'en') {
    const en = enHtml[slug]; if (en) {
      const a = new Set(segs(en).filter((t) => t.length > 28));
      const bad = segs(h).filter((t) => t.length > 28 && a.has(t));
      checkedSegs += a.size;
      if (bad.length) add('i18n: identical-to-English text', `${tag} (${bad.length}) e.g. "${bad[0].slice(0, 60)}"`);
    }
    // script mix
    const t = body.replace(/&[a-z#0-9]+;/gi, ' ');
    if (/(^|\/)sitemap\//.test(slug)) { /* lists native language names */ } else if (SCRIPT[loc]) {
      const n = (t.match(new RegExp(SCRIPT[loc].source, 'g')) || []).length;
      if (n < 200 && /tool|converter/.test(slug) === false && slug !== '') {} // statics are short
      const o = (t.match(new RegExp(OTHER[loc].source, 'g')) || []).length;
      if (o > 0) add('i18n: foreign script chars', `${tag} (${o})`);
    } else if (LATIN_OTHER.test(t) && !/(^|\/)sitemap\//.test(slug)) add('i18n: foreign script chars', `${tag}`);
  }
}

// reciprocal hreflang + sitemap
const urlOf = (loc, slug) => `${SITE}/${loc === 'en' ? '' : loc + '/'}${slug}`;
for (const sm of files.filter((f) => /sitemap.*\.xml$/.test(f))) {
  const x = fs.readFileSync(sm, 'utf8');
  for (const m of x.matchAll(/<loc>([^<]+)<\/loc>/g)) { let u = m[1]; if (/\.xml$/.test(u)) continue; if (SITE && u.startsWith(SITE)) u = u.slice(SITE.length); if (!exists(u || '/')) add('sitemap: url not built', `${rel(sm)} ${m[1]}`); if (/\/bn\//.test(u)) add('sitemap: bn url', m[1]); }
}

// output
let total = 0;
for (const [k, v] of Object.entries(issues).sort()) { total += v.length; console.log(`\n[${k}] ${v.length}`); for (const x of v.slice(0, 8)) console.log('  ' + x); if (v.length > 8) console.log(`  … +${v.length - 8} more`); }
console.log(`\npages ${htmls.length}, links checked ${linkCount}, english segments compared ${checkedSegs}, issue lines ${total}`);
fs.writeFileSync(path.join(ROOT, 'audit-deep-report.json'), JSON.stringify({ pages: htmls.length, linkCount, issues }, null, 1));
