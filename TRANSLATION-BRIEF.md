# Translation brief for Codex/GPT (long-form tool text)

## Status
Historical brief. All 17 site languages now have long-form content. Claude wrote pt, ru, bg, ja, ko, hi, ar, tr and the rest; Codex/GPT wrote the Spanish and Polish text (Polish merged after fixes) and the first sub-ui files for pl, tr, sv, id, ms. Bengali (`bn`) was dropped from the site. Codex is now limited to reviewing wording, not writing files.

## Original assignment
Latin-script batch: **pl, tr, sv, id, ms** (Claude did pt, ru, bg, ja, ko, hi, ar).

## Rules (strict)
1. Write ONLY these files per language `<loc>`:
   - `src/data/i18n/tools/<loc>-content-1.js` … `<loc>-content-9.js`
   - `src/data/i18n/sub-ui-<loc>.js` (one object, same keys as the `it:` entry in `src/data/i18n/sub-ui.js`). Do NOT edit `sub-ui.js`; Claude merges it.
2. Do not touch any other file. Do not run `git` commands that change other files.
3. Copy the exact structure of `it-content-1..9.js` (same slugs per file, same keys: def, how, why, pdef, steps, cdef, table, bars, faq).
   File split: 1 jpg,webp,gif,bmp | 2 avif,ico,image,logo | 3 sketch,drawing,icon,signature,scanned | 4 clipart,black-and-white,color-image,line-art,pixel-art | 5 transparent,outline,monochrome,hand-drawing,photo-to-vector,raster-to-vector | 6 svg-to-png,jpg,webp,pdf,ico | 7 compressor,optimizer,resizer,cropper | 8 color-changer,background-remover,viewer,base64 | 9 code-formatter,minifier,metadata-remover,validator,data-uri.
4. English source: `src/data/content-raster.js`, `content-raster2.js` (wins over raster.js), `content-svg.js`.
5. Keep unchanged: brand/tech names (PNG, SVG, JPG, WebP, AVIF, Figma, viewBox, gzip, Base64, Bézier, k-means), code snippets, numbers, `<a href="...">` links (translate only the link text), art keys (`pix`, `pal`, `code:`, `compare:`, `bars:`, `file:`, `dims:`, `badge:`).
6. DO translate the labels inside art specs: `compare:Before|After`, `bars:a|b|c`, `file:PNG|lossless`, and the `unit` of bars (e.g. ' pts').
7. Natural wording, not literal. No English left except the names above. Use the glossary below consistently.
8. Use the decimal/percent style of the language (e.g. German "92 %", Italian "0,5 px").

## Glossary (use the same term everywhere; fill the UI words from your language's sub-ui entry)
Colors, Detail, Smoothness, Denoise, Remove specks, Remove background, Threshold, Mono, Layers, Palette, Scale, Quality, Background, Transparent, Before/After, Download.

## Check before reporting done
```
node -e "require('./src/data/i18n/tools/<loc>-content-N.js')"   # for N=1..9, no errors
```
Report: files written, any slug skipped. Claude runs build + `npm run verify`.
