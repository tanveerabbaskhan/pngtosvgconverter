// Structure check: compares <loc>-content-N.js against ko-content-N.js (same keys, array lengths, art specs, numbers, links).
// Usage: node scripts/check-structure.cjs <loc> [ref=ko]
const path = require('path');
const d = path.resolve(__dirname, '../src/data/i18n/tools') + path.sep;
const loc = process.argv[2], ref = process.argv[3] || 'ko';
let bad = 0, pages = 0;
const digits = (s) => (JSON.stringify(s).match(/\d+(\.\d+)?/g) || []).join(',');
const links = (s) => (JSON.stringify(s).match(/href=\\"[^"\\]*/g) || []).join('|');
const shape = (p) => [p.how.length, p.why[1].length, p.steps.length, p.table.rows.length, p.table.cols.length, p.bars.rows.length, p.faq.length, Object.keys(p).sort().join()].join('/');
for (let i = 1; i <= 9; i++) {
  const k = require(d + ref + '-content-' + i + '.js'), a = require(d + loc + '-content-' + i + '.js');
  if (Object.keys(k).join() !== Object.keys(a).join()) { console.log('KEYS', i); bad++; }
  for (const s in k) {
    pages++;
    const x = k[s], y = a[s];
    if (!y) { console.log('missing', s); bad++; continue; }
    if (shape(x) !== shape(y)) { console.log('SHAPE', s, shape(x), shape(y)); bad++; }
    if (links(x) !== links(y)) { console.log('LINKS', s); bad++; }
    x.how.forEach((h, j) => {
      const g = y.how[j]; if (!g) return;
      const kx = h[3].split(':')[0], ky = g[3].split(':')[0];
      if (kx !== ky) { console.log('ART', s, j, kx, ky); bad++; }
      if (/^(dims|code)/.test(h[3]) && h[3] !== g[3]) { console.log('ARTVAL', s, j); bad++; }
      if (/^(compare|bars)/.test(h[3]) && h[3].split('|').length !== g[3].split('|').length) { console.log('ARTN', s, j); bad++; }
    });
    if (digits(x.table) !== digits(y.table)) { console.log('TBLNUM', s); bad++; }
    if (JSON.stringify(x.bars.rows.map((r) => r[1])) !== JSON.stringify(y.bars.rows.map((r) => r[1])) || x.bars.max !== y.bars.max) { console.log('BARS', s); bad++; }
  }
}
console.log('pages', pages, 'problems', bad);
