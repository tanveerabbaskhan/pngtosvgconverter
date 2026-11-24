// Redirects from the old site's URLs to the new Astro site, by semantic rule.
// Old locales: en (no prefix), de, es, fr, ja, nl. Dutch (nl) has no counterpart on the new site, so /nl/* goes to the English target.
// New site: tools at /<slug>/, statics at /about-us/ /contact-us/ /privacy/ /terms/ /sitemap/, locales under /<loc>/.

const OLD_LOCALES = ['', 'de', 'es', 'fr', 'ja', 'nl'];       // '' = English
const NEW_LOCALES = new Set(['', 'de', 'es', 'fr', 'ja']);   // locales that still exist on the new site

// old path (without locale, with leading and trailing slash) -> new path (same form). Rules:
//  /convert/<fmt>-to-svg/  -> /<fmt>-to-svg-converter/        (same tool, new slug)
//  hub pages (/convert/, /compare/, /guides/, /svg/) -> /sitemap/ (the directory of all converters and tools)
//  guides and explainers -> the tool that does what the article explains
//  blog hub + posts -> the home page (the live site already 301s every /blog/* URL to its locale home; /nl/* -> English home)
const RULES = {
  '/blog/': '/',                                                 // live site 301s /blog/* to the locale home; keep that behaviour
  '/blog/best-png-to-svg-converters/': '/',
  '/blog/common-png-to-svg-mistakes/': '/',
  '/blog/svg-vs-png-for-icons/': '/',
  '/blog/vinyl-decal-from-photo-tutorial/': '/',
  '/blog/why-is-my-svg-blurry/': '/',
  '/bulk-png-to-svg/': '/',                                     // PNG to SVG tool lives on the home page
  '/compare/': '/sitemap/',
  '/compare/png-vs-svg/': '/',                                  // PNG vs SVG -> the PNG to SVG converter
  '/compare/raster-vs-vector/': '/raster-to-vector-converter/',
  '/contact/': '/contact-us/',
  '/convert/': '/sitemap/',
  '/convert/avif-to-svg/': '/avif-to-svg-converter/',
  '/convert/bmp-to-svg/': '/bmp-to-svg-converter/',
  '/convert/gif-to-svg/': '/gif-to-svg-converter/',
  '/convert/image-to-svg/': '/image-to-svg-converter/',
  '/convert/jpg-to-svg/': '/jpg-to-svg-converter/',
  '/convert/webp-to-svg/': '/webp-to-svg-converter/',
  '/guides/': '/sitemap/',
  '/guides/how-to-convert-png-to-svg/': '/',
  '/guides/how-to-reduce-svg-nodes/': '/svg-optimizer/',        // fewer nodes = simplify / optimise the SVG
  '/guides/how-to-vectorize-an-image/': '/image-to-svg-converter/',
  '/svg/': '/sitemap/',
  '/svg/what-is-image-tracing/': '/image-to-svg-converter/',    // tracing is what the converter does
  '/svg/what-is-image-vectorization/': '/raster-to-vector-converter/',
  '/svg/what-is-svg/': '/svg-viewer/',                          // inspect an SVG
  // /privacy/ and /terms/ keep the same path; /<loc>/ homes keep the same path, except /nl/ below
};

const withLoc = (loc, p) => (loc ? '/' + loc : '') + p;

// -> [{from, to, status}] ; entries whose from === to are skipped
function build() {
  const out = [];
  for (const loc of OLD_LOCALES) {
    const target = NEW_LOCALES.has(loc) ? loc : '';
    for (const [from, to] of Object.entries(RULES)) out.push({ from: withLoc(loc, from), to: withLoc(target, to), status: 301 });
    if (!NEW_LOCALES.has(loc)) {
      out.push({ from: withLoc(loc, '/'), to: '/', status: 301 });
      out.push({ from: withLoc(loc, '/privacy/'), to: '/privacy/', status: 301 });
      out.push({ from: withLoc(loc, '/terms/'), to: '/terms/', status: 301 });
    }
  }
  return out.filter((r) => r.from !== r.to);
}

module.exports = { build, RULES, OLD_LOCALES, NEW_LOCALES: [...NEW_LOCALES] };
