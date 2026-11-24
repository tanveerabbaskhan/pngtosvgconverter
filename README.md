# pngtosvgconverter.com (Astro)

Static Astro site in 17 languages, 816 pages (17 locales × 48: the home page, 42 tool pages and 5 static pages per language), plus 404, robots, llms and the sitemaps. English is the default (no URL prefix); other languages live under `/<locale>/`.

Languages: en, hi, es, ru, fr, de, it, pt, ja, ko, ms, pl, id, ar (right-to-left), bg, tr, sv.
Bengali (`bn`) was removed from the site and its data files were deleted (see "Bengali").

## Commands

```
npm install
npm run build      # -> dist/
npm run preview    # serve dist/
npm run verify     # per-locale pages / tools / long-form / missing keys / English-heavy pages / switcher fallbacks / rtl
npm run check:redirects  # every old-site URL resolves to a real new page in one hop
npm run audit      # in-depth audit of dist/: links, head, placeholders, h1, ids, JSON-LD, untranslated text, script mix, sitemaps
npm run check:hreflang   # strict hreflang / canonical / og:locale / sitemap-alternates audit (every page, every language group)
npm run check      # verify + audit + check:hreflang + check:redirects in one go
npm run compare    # compare dist/ with the previous generator's output in the repo root (title, canonical, lang, H1, main, footer)
node scripts/check-structure.cjs <loc> [ref=ko]   # long-form files of <loc> vs the reference locale: keys, array lengths, art specs, numbers, links
```

Run `npm run build` before `verify` / `audit`; both read `dist/`. `audit` also writes `audit-deep-report.json`.

## How it is organised

| Path | Role |
| --- | --- |
| `astro.config.mjs` | site URL, trailing slashes, i18n (locales, default locale) |
| `src/data/site.js` | `LOCALES` (code, native name, og:locale, dir) - the list the site and `verify` use |
| `src/pages/[...route].astro` | one static route per (locale, page); `404.astro`, `[file].txt.ts`, `[file].xml.ts` for robots/llms/sitemaps |
| `src/layouts/Base.astro` | `<html lang dir>`, SEO head, header, footer, slot |
| `src/components/` | `SeoHead`, `Header`, `Footer`, `LangLinks`, `Crumbs`, `Hero`, `RasterTool`, `SvgTool`, `HomeSections`, `ToolSections`, `Directory`, `StaticPage`, `PageBody` |
| `src/data/page-model.js` | builds one model per page: locale, SEO fields, JSON-LD inputs, ordered `blocks` |
| `src/data/i18n/<loc>.js` | homepage and interface dictionary per locale |
| `src/data/i18n/svg/<loc>.js`, `<loc>-copy.js` | labels and copy for the 18 SVG tools |
| `src/data/i18n/static/<loc>.js` | about, contact, terms, privacy, sitemap |
| `src/data/i18n/tools/<loc>-content-1..9.js` | long-form text for the 42 tool pages (auto-loaded by `tool-translations.js`) |
| `src/data/i18n/sub-ui.js`, `sub-ui-<loc>.js` | section headings, chart labels and control labels used inside the long-form sections |
| `src/data/*.js` | tool list (`pages.js`), English long-form content, directory, hero copy, JSON-LD graph helpers |
| `public/assets/` | browser scripts and CSS (`trace.js`, `svgtools.js`, `site.js`, `dir.js`, `hero.js`, `style.css`) |

## Translation status

All 17 languages are complete on every layer: homepage, tool names and interface, the 18 SVG tools, static pages, and long-form content for all 42 tools. `npm run verify` reports 0 missing keys, 0 English-heavy pages and 0 switcher fallbacks for every locale, and `npm run audit` finds no broken links, missing hreflang, leftover placeholders or untranslated blocks.

Who wrote what: Spanish and Polish tool content came from Codex/GPT first (Polish was merged after fixes); the other languages' long-form text was written by Claude. Codex drafts of Turkish were rejected and are kept in `_drafts/tr/` (unused).

Browser check done in the preview pane: Arabic right-to-left layout and the language switcher, plus an overflow test of 5 page types x 17 languages at phone (390 px) and desktop (1280 px) width (one long Bulgarian button overflowed on phones and was fixed). Not done: review of the wording by native speakers, and a review of the Codex Spanish text.

### Adding a language

1. Add the locale to `astro.config.mjs` (`locales`) and to `LOCALES` in `src/data/site.js`.
2. Add `i18n/<loc>.js`, `i18n/svg/<loc>.js` (+ `-copy.js`), `i18n/static/<loc>.js`, plus entries in `tool-names.js` and `crumb-label.js`.
3. Add `i18n/sub-ui-<loc>.js` (40 keys, same shape as `sub-ui-ko.js`) and add the code to the loader line in `sub-ui.js`.
4. Add `i18n/tools/<loc>-content-1..9.js`. File split is in `TRANSLATION-BRIEF.md`. Check with `node scripts/check-structure.cjs <loc>`.
5. `npm run build && npm run verify && npm run audit`.

### Bengali

Removed from the site on request and its data files deleted. To add it back, follow "Adding a language" (it needs every file listed there, from scratch).

## Known gaps

- The data modules are still CommonJS and are loaded through `src/lib/site.mjs`.
- A few illustrations (pipeline stage art, privacy diagram, chart SVGs) are generated as SVG strings and inserted with `set:html`.
- The previous generator in the repo root has the same `{n}` placeholder bug in the directory section that was fixed in `src/data/directory.js`.

## Redirects from the old site

The old site (`/convert/…`, `/guides/…`, `/compare/…`, `/svg/…`, `/contact/`, plus `/de /es /fr /ja /nl` copies) is mapped to the new URLs by semantic rules in `src/data/redirects.js` (123 redirects):

| Old | New |
| --- | --- |
| `/convert/<fmt>-to-svg/` | `/<fmt>-to-svg-converter/` (avif, bmp, gif, image, jpg, webp) |
| `/convert/`, `/compare/`, `/guides/`, `/svg/` (hubs) | `/sitemap/` |
| `/bulk-png-to-svg/`, `/compare/png-vs-svg/`, `/guides/how-to-convert-png-to-svg/` | `/` (the PNG to SVG tool) |
| `/compare/raster-vs-vector/`, `/svg/what-is-image-vectorization/` | `/raster-to-vector-converter/` |
| `/guides/how-to-vectorize-an-image/`, `/svg/what-is-image-tracing/` | `/image-to-svg-converter/` |
| `/guides/how-to-reduce-svg-nodes/` | `/svg-optimizer/` |
| `/svg/what-is-svg/` | `/svg-viewer/` |
| `/contact/` | `/contact-us/` |
| `/privacy/`, `/terms/`, `/<loc>/` | unchanged |

`de`, `es`, `fr`, `ja` keep their locale prefix. Dutch (`/nl/…`) has no counterpart on the new site and goes to the English target.

Two outputs come from the one list: Astro emits a redirect page (meta refresh + canonical) for every rule, which works on any static host, and `npm run build` first writes `public/_redirects` (real 301s on Netlify and Cloudflare Pages). On any other host (Vercel, nginx, Apache) copy the rules from `public/_redirects` into that host's own redirect config. The old live site is on `www.`, the new canonical is the bare domain, so also redirect `www.pngtosvgconverter.com/*` to `https://pngtosvgconverter.com/:splat` at the host or DNS level.

`npm run check:redirects` (after a build) checks that every old sitemap URL resolves in at most one hop to a real page.

## Deploying on Cloudflare Pages

- Project settings (repo root is this folder): root directory `/` (blank), build command `npm run build`, output directory `dist`, Node 20 or newer (set `NODE_VERSION` if needed).
- `npm run build` writes `public/_redirects` first, so it ends up in `dist/_redirects`; Pages applies it as 301s. The 123 rules are static redirects (Pages allows 2000), and absolute-host rules are not supported in `_redirects`.
- `www` → apex: Pages cannot do this in `_redirects`. Add the `www` custom domain to the project (or a proxied DNS record for `www`) and create a Redirect Rule in Cloudflare (Rules → Redirect Rules): when hostname equals `www.pngtosvgconverter.com`, redirect with dynamic expression `concat("https://pngtosvgconverter.com", http.request.uri.path)` (preserve query string), status 301.
- After the first deploy, spot-check with `curl -sI https://pngtosvgconverter.com/convert/avif-to-svg/` (expect `301` and `location: /avif-to-svg-converter/`), then submit `https://pngtosvgconverter.com/sitemap.xml` in Search Console.
