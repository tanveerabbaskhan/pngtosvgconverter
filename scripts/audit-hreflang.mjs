// Strict hreflang / canonical / sitemap audit of dist/. Run after a build: node scripts/audit-hreflang.mjs
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const DIST = path.resolve(process.cwd(), 'dist');
const S = require(path.resolve(process.cwd(), 'src/data/site.js'));
const DOMAIN = S.DOMAIN.replace(/\/$/, '');
const codes = S.LOCALES.map((l) => l.code);
const ogOf = Object.fromEntries(S.LOCALES.map((l) => [l.code, l.og]));
const problems = {}; const add = (k, m) => (problems[k] ||= []).push(m);

const walk = (d, o = []) => { for (const e of fs.readdirSync(d, { withFileTypes: true })) { const p = path.join(d, e.name); e.isDirectory() ? walk(p, o) : o.push(p); } return o; };
const pages = walk(DIST).filter((f) => f.endsWith('index.html')).map((f) => {
  const h = fs.readFileSync(f, 'utf8');
  const url = DOMAIN + '/' + path.relative(DIST, f).split(path.sep).join('/').replace(/index\.html$/, '');
  return { f, url, h, redirect: /http-equiv="refresh"/.test(h.slice(0, 500)) };
});
const real = pages.filter((p) => !p.redirect);
const byUrl = new Map(real.map((p) => [p.url, p]));
const locOf = (u) => { const s = u.slice(DOMAIN.length + 1).split('/')[0]; return codes.includes(s) && s !== 'en' ? s : 'en'; };
const slugOf = (u) => { const r = u.slice(DOMAIN.length + 1); return codes.includes(r.split('/')[0]) && r.split('/')[0] !== 'en' ? r.split('/').slice(1).join('/') : r; };

const sets = new Map(); // slug -> JSON of hreflang map, to compare across versions
for (const p of real) {
  const loc = locOf(p.url), slug = slugOf(p.url);
  const alts = [...p.h.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)].map((m) => [m[1], m[2]]);
  const map = Object.fromEntries(alts);
  if (alts.length !== Object.keys(map).length) add('duplicate hreflang value', p.url);
  const canon = (p.h.match(/<link rel="canonical" href="([^"]+)"/) || [])[1];
  if (canon !== p.url) add('canonical is not the page URL', `${p.url} -> ${canon}`);
  if (map[loc] !== p.url) add('no self-referencing hreflang', `${p.url} (${loc} -> ${map[loc]})`);
  const expected = [...codes, 'x-default'].sort().join(',');
  if (Object.keys(map).sort().join(',') !== expected) add('hreflang set differs from site languages', `${p.url}: ${Object.keys(map).sort().join(',')}`);
  const en = DOMAIN + '/' + slug;
  if (map['x-default'] !== en) add('x-default is not the English URL', `${p.url} -> ${map['x-default']}`);
  for (const c of codes) { const want = DOMAIN + '/' + (c === 'en' ? '' : c + '/') + slug; if (map[c] !== want) add('hreflang URL wrong', `${p.url}: ${c} -> ${map[c]} (want ${want})`); }
  for (const [c, u] of alts) { if (!u.startsWith('https://')) add('hreflang not absolute https', p.url); if (!u.endsWith('/')) add('hreflang no trailing slash', `${p.url} ${u}`); if (!byUrl.has(u)) add('hreflang target not built (or redirect)', `${p.url} -> ${u}`); }
  const key = slug; const val = JSON.stringify(map);
  if (!sets.has(key)) sets.set(key, val); else if (sets.get(key) !== val) add('hreflang set differs between language versions', `${slug} (${p.url})`);
  // lang attrs and og:locale
  const lang = (p.h.match(/<html[^>]*\slang="([^"]+)"/) || [])[1];
  if (lang !== loc) add('html lang mismatch', `${p.url}: ${lang}`);
  const og = (p.h.match(/property="og:locale" content="([^"]+)"/) || [])[1];
  if (og !== ogOf[loc]) add('og:locale mismatch', `${p.url}: ${og} (want ${ogOf[loc]})`);
  const ogAlt = [...p.h.matchAll(/property="og:locale:alternate" content="([^"]+)"/g)].map((m) => m[1]);
  if (ogAlt.includes(og) || ogAlt.length !== codes.length - 1) add('og:locale:alternate wrong', p.url);
  if (/name="robots" content="[^"]*noindex/.test(p.h)) add('real page is noindex', p.url);
  if (!/name="viewport"/.test(p.h)) add('no viewport meta', p.url);
}

// redirect stubs: noindex, canonical = target, never listed in sitemap
for (const p of pages.filter((x) => x.redirect)) {
  const t = (p.h.match(/url=([^"]+)"/) || [])[1];
  const canon = (p.h.match(/rel="canonical" href="([^"]+)"/) || [])[1];
  if (!/noindex/.test(p.h)) add('redirect stub is not noindex', p.url);
  if (canon !== DOMAIN + t) add('redirect stub canonical != target', `${p.url}: ${canon}`);
  if (!byUrl.has(DOMAIN + t)) add('redirect stub target missing', `${p.url} -> ${t}`);
}

// sitemaps
const smFiles = walk(DIST).filter((f) => /sitemap-(pages|tools)\.xml$/.test(f));
const smUrls = new Map();
for (const f of smFiles) {
  const x = fs.readFileSync(f, 'utf8');
  for (const blk of x.split('<url>').slice(1)) {
    const loc = (blk.match(/<loc>([^<]+)<\/loc>/) || [])[1];
    if (smUrls.has(loc)) add('url in sitemap twice', loc);
    const alts = Object.fromEntries([...blk.matchAll(/hreflang="([^"]+)" href="([^"]+)"/g)].map((m) => [m[1], m[2]]));
    smUrls.set(loc, alts);
    const p = byUrl.get(loc);
    if (!p) { add('sitemap url not a real built page', loc); continue; }
    const pageAlts = Object.fromEntries([...p.h.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)].map((m) => [m[1], m[2]]));
    if (JSON.stringify(alts) !== JSON.stringify(pageAlts)) add('sitemap hreflang differs from page', loc);
  }
}
const noindexSkip = (p) => p.url.endsWith('/404.html/') || /\/404\//.test(p.url);
for (const p of real) if (!smUrls.has(p.url) && !noindexSkip(p)) add('built page missing from sitemap', p.url);

const idx = fs.readFileSync(path.join(DIST, 'sitemap-index.xml'), 'utf8');
for (const m of idx.matchAll(/<loc>([^<]+)<\/loc>/g)) if (!fs.existsSync(path.join(DIST, m[1].replace(DOMAIN, '')))) add('sitemap-index entry missing', m[1]);
const robots = fs.readFileSync(path.join(DIST, 'robots.txt'), 'utf8');
if (!robots.includes(DOMAIN + '/sitemap-index.xml')) add('robots.txt does not point to sitemap-index', '');

let n = 0;
for (const [k, v] of Object.entries(problems)) { n += v.length; console.log(`\n[${k}] ${v.length}`); v.slice(0, 6).forEach((x) => console.log('  ' + x)); }
console.log(`\nreal pages ${real.length}, redirect stubs ${pages.length - real.length}, sitemap urls ${smUrls.size}, language groups ${sets.size}, problems ${n}`);
process.exit(n ? 1 : 0);
