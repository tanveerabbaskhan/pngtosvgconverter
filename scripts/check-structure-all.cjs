// Like check-structure.cjs but merges all <loc>-content-*.js files first, so locales that split pages across files differently
// (es, fr, de) can be compared page by page with the reference locale. Usage: node scripts/check-structure-all.cjs [ref=ko] [loc ...]
const fs = require('fs'), path = require('path');
const d = path.resolve(__dirname, '../src/data/i18n/tools') + path.sep;
const load = (l) => { const o = {}; fs.readdirSync(d).filter((f) => f.startsWith(l + '-content') && f.endsWith('.js')).sort().forEach((f) => Object.assign(o, require(d + f))); return o; };
const ref = process.argv[2] || 'ko';
const locs = process.argv.slice(3).length ? process.argv.slice(3) : ['es', 'fr', 'de', 'it', 'pl', 'tr', 'pt', 'sv', 'id', 'ms', 'ru', 'bg', 'ja', 'hi', 'ar'];
const R = load(ref);
const digits = (s) => (JSON.stringify(s).match(/\d+(\.\d+)?/g) || []).join(',');
const links = (s) => (JSON.stringify(s).match(/href=\\"[^"\\]*/g) || []).join('|');
const shape = (p) => [p.how.length, p.why[1].length, p.steps.length, p.table.rows.length, p.table.cols.length, p.bars.rows.length, p.faq.length].join('/');
for (const l of locs) {
  const A = load(l), out = { missing: [], extra: Object.keys(A).filter((s) => !R[s]), shape: [], links: [], bars: [], art: [], tbl: [] };
  for (const s of Object.keys(R)) {
    const x = R[s], y = A[s]; if (!y) { out.missing.push(s); continue; }
    if (shape(x) !== shape(y)) out.shape.push(s);
    if (links(x) !== links(y)) out.links.push(s);
    if (JSON.stringify(x.bars.rows.map((r) => r[1])) !== JSON.stringify(y.bars.rows.map((r) => r[1])) || x.bars.max !== y.bars.max) out.bars.push(s);
    if (x.how.some((h, j) => !y.how[j] || h[3].split(':')[0] !== y.how[j][3].split(':')[0] || (/^(dims|code)/.test(h[3]) && h[3] !== y.how[j][3]))) out.art.push(s);
    if (digits(x.table) !== digits(y.table)) out.tbl.push(s);
  }
  console.log(`${l}: pages ${Object.keys(A).length} | missing ${out.missing.length} extra ${out.extra.length} shape ${out.shape.length} links ${out.links.length} bars ${out.bars.length} art ${out.art.length} tableNumbers ${out.tbl.length}`);
  for (const k of ['missing', 'extra', 'shape', 'links', 'bars', 'art']) if (out[k].length) console.log(`   ${k}: ${out[k].join(', ')}`);
}
