// Post-build: minify the static CSS/JS in dist/assets (public/ files are copied
// verbatim by Astro, so they ship unminified otherwise). Uses esbuild, which
// Astro already depends on — no new dependency. Run via `npm run build`.
import { createRequire } from 'node:module';
import { readdir, readFile, writeFile, stat } from 'node:fs/promises';
import { join } from 'node:path';

const require = createRequire(import.meta.url);
const { transform } = require('esbuild');

const DIR = new URL('../dist/assets/', import.meta.url).pathname;

const files = (await readdir(DIR)).filter((f) => f.endsWith('.css') || f.endsWith('.js'));
let saved = 0;
for (const f of files) {
  const p = join(DIR, f);
  const src = await readFile(p, 'utf8');
  const loader = f.endsWith('.css') ? 'css' : 'js';
  const out = await transform(src, { loader, minify: true });
  await writeFile(p, out.code);
  saved += src.length - out.code.length;
  console.log(`minified assets/${f}: ${src.length} -> ${out.code.length} bytes`);
}
console.log(`minify-assets: saved ${saved} bytes across ${files.length} files`);
