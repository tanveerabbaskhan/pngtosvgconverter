// Every URL of the old site's sitemap must resolve to a real, non-redirect page of the new build in at most one hop.
// Run after `npm run build`. Old URL list is rebuilt from the old site's structure (en, de, es, fr, ja, nl).
import fs from 'node:fs';
import path from 'node:path';
const DIST = path.resolve(process.cwd(), 'dist');
const locs = ['', 'de', 'es', 'fr', 'ja', 'nl'];
const paths = ['/', '/bulk-png-to-svg/', '/compare/', '/compare/png-vs-svg/', '/compare/raster-vs-vector/', '/contact/', '/convert/', ...['avif', 'bmp', 'gif', 'image', 'jpg', 'webp'].map((f) => `/convert/${f}-to-svg/`), '/guides/', '/guides/how-to-convert-png-to-svg/', '/guides/how-to-reduce-svg-nodes/', '/guides/how-to-vectorize-an-image/', '/privacy/', '/svg/', '/svg/what-is-image-tracing/', '/svg/what-is-image-vectorization/', '/svg/what-is-svg/', '/terms/'];
const urls = locs.flatMap((l) => paths.map((p) => (l ? '/' + l : '') + p)).filter((u) => u !== '//');
const file = (u) => path.join(DIST, u, 'index.html');
const redirectTarget = (h) => (h.match(/http-equiv="refresh" content="0;url=([^"]+)"/) || [])[1];
let ok = 0, redirected = 0; const bad = [];
for (const u of urls) {
  if (!fs.existsSync(file(u))) { bad.push(`${u}: no page`); continue; }
  let h = fs.readFileSync(file(u), 'utf8'), t = redirectTarget(h);
  if (!t) { ok++; continue; }
  redirected++;
  if (!fs.existsSync(file(t))) { bad.push(`${u} -> ${t}: target missing`); continue; }
  if (redirectTarget(fs.readFileSync(file(t), 'utf8'))) bad.push(`${u} -> ${t}: redirect chain`);
}
const shell = fs.existsSync(path.join(DIST, '_redirects'));
console.log(`old URLs ${urls.length}: unchanged ${ok}, redirected ${redirected}, problems ${bad.length}; dist/_redirects ${shell ? 'present' : 'MISSING'}`);
bad.forEach((b) => console.log('  ' + b));
process.exit(bad.length || !shell ? 1 : 0);
