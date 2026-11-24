import { defineConfig } from 'astro/config';
import { createRequire } from 'node:module';

// Old-site URLs -> new URLs (semantic rules live in src/data/redirects.js; public/_redirects is generated from the same list).
const redirects = Object.fromEntries(createRequire(import.meta.url)('./src/data/redirects.js').build().map((r) => [r.from, { status: r.status, destination: r.to }]));

// 17 locales; English is the default and has no URL prefix (/ and /svg-viewer/), others live under /<locale>/.
export default defineConfig({
  site: 'https://pngtosvgconverter.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
  compressHTML: false,
  redirects,
  i18n: {
    defaultLocale: 'en',
    locales: ['en','hi','es','ru','fr','de','it','pt','ja','ko','ms','pl','id','ar','bg','tr','sv'],
    routing: { prefixDefaultLocale: false },
  },
});
