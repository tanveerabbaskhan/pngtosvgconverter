// Compares the Astro output (dist/) with the current generator output (repo root): same pages, same head data, same body.
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(process.cwd(), '..');
const DIST = path.resolve(process.cwd(), 'dist');
const skip = new Set(['astro', 'src', 'assets', 'node_modules']);

function* walk(dir, base = '') {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!base && skip.has(e.name)) continue;
    const rel = path.posix.join(base, e.name);
    if (e.isDirectory()) yield* walk(path.join(dir, e.name), rel);
    else if (e.name.endsWith('.html')) yield rel;
  }
}
const norm = (h) => h.replace(/<!--[\s\S]*?-->/g, '').replace(/\s*\n\s*/g, '').replace(/>\s+</g, '><').replace(/<(circle|path|rect|line|polyline|polygon|ellipse|stop|use)([^>]*?)><\/\1>/g, (m, t, at) => '<' + t + at + '/>').replace(/ ?\/>/g, '>').replace(/\s+/g, ' ').trim();
const pick = (h, re) => (h.match(re) || [])[1] || '';

let same = 0, headDiff = 0, bodyDiff = 0, missing = [];
const diffs = [];
for (const rel of walk(ROOT)) {
  const b = path.join(DIST, rel);
  if (!fs.existsSync(b)) { missing.push(rel); continue; }
  const A = fs.readFileSync(path.join(ROOT, rel), 'utf8'), B = fs.readFileSync(b, 'utf8');
  const hA = ['<title>([^<]*)', 'rel="canonical" href="([^"]*)"', '<html lang="([^"]*)"', '<h1[^>]*>([\\s\\S]*?)</h1>'].map((r) => pick(A, new RegExp(r)));
  const hB = ['<title>([^<]*)', 'rel="canonical" href="([^"]*)"', '<html lang="([^"]*)"', '<h1[^>]*>([\\s\\S]*?)</h1>'].map((r) => pick(B, new RegExp(r)));
  if (JSON.stringify(hA) !== JSON.stringify(hB)) { headDiff++; diffs.push(rel + ' HEAD'); continue; }
  const mA = pick(A, /<main id="main">([\s\S]*?)<\/main>/), mB = pick(B, /<main id="main">([\s\S]*?)<\/main>/);
  if (norm(mA) !== norm(mB)) { bodyDiff++; diffs.push(rel + ' MAIN'); continue; }
  const fA = pick(A, /<footer[\s\S]*?<\/footer>/) || (A.match(/<footer[\s\S]*?<\/footer>/) || [''])[0];
  const fB = (B.match(/<footer[\s\S]*?<\/footer>/) || [''])[0];
  if (norm(fA) !== norm(fB)) { bodyDiff++; diffs.push(rel + ' FOOTER'); continue; }
  same++;
}
console.log(JSON.stringify({ same, headDiff, bodyDiff, missing: missing.length, missingSample: missing.slice(0, 5), diffSample: diffs.slice(0, 8) }, null, 1));
