// English master dictionary for the homepage. Every locale file mirrors this exact shape.
// Tokens: {n},{pct},{size},{w},{h},{a},{b},{year} are filled at runtime; [[slug]] becomes a link to that (English) page.
module.exports={
 meta:{title:'pngtosvgconverter.com: Free PNG to SVG Converter',desc:'Free PNG to SVG converter that runs in your browser. Trace any PNG into clean, scalable vector paths with a live preview. No upload, no signup.',alt:'pngtosvgconverter.com: free PNG to SVG converter with a live preview'},
 h1:{kw:'PNG to SVG Converter',tail:'Turn Any PNG into a Scalable SVG'},
 lead:'Convert PNG to SVG online in seconds. This free PNG to SVG converter traces your image into clean vector paths in your browser, with no upload, signup or watermark.',
 skip:'Skip to main content',
 nav:{converter:'Converter',all:'All converters',faq:'FAQ',about:'About us',contact:'Contact us',menu:'Menu',theme:'Toggle theme',upload:'Upload image',main:'Main navigation',toc:'On this page'},
 toc:{how:'How it works',proc:'Conversion process',chart:'Chart and features',faq:'FAQ',all:'All converters'},
 ui:{
  toolH2:'PNG to SVG converter tool',step1:'Add your image',dropAria:'Upload an image',drop:'Drop your PNG here, or click to browse',paste:'You can also paste with Ctrl+V. Nothing is uploaded.',
  sample:'No image? Try a sample:',sLogo:'Logo',sScene:'Landscape',sIcon:'Icon',choose:'Choose image',
  step2:'Adjust the result',reset:'Reset',startFrom:'Start from',pLogo:'Logo',pIllus:'Illustration',pPhoto:'Photo',pLine:'Line art',
  style:'Style',mColor:'Color',mGray:'Gray',mMono:'Mono',rmbg:'Remove background',rmbgSub:'Clears white / transparent edges',
  colors:'Colors',thresh:'Threshold',ink:'Ink color',smooth:'Smoothness',more:'More options',detail:'Detail',specks:'Remove specks',denoise:'Denoise',
  step3:'Preview and download',live:'Live preview',loading:'Loading…',copy:'Copy SVG code',download:'Download SVG',
  chipL:'Original · PNG',chipR:'Vector · SVG',handle:'Compare original and SVG',hint:'Drag the handle to compare · scroll to zoom',zoomOut:'Zoom out',zoomIn:'Zoom in',fit:'Fit',
  veil:'Drop image to convert',veilSub:'PNG, JPG, WebP, GIF',fileSize:'SVG file size',tColors:'Colors',time:'Time',
  moreD:'More details',moreDSub:'Color layers, size history, SVG code',shapes:'Shapes',shapesSub:'closed outlines',nodes:'Nodes',nodesSub:'path points',
  p1:'Decode',p2:'Quantize',p3:'Trace',p4:'Simplify',p5:'Render',
  layers:'Color layers',layersSub:'Hover to isolate · click to hide',trace:'Live size trace',traceSub:'SVG size per adjustment',legSvg:'SVG size',legPng:'Original PNG',src:'SVG source'
 },
 js:{
  needImage:'Please choose an image file',readFail:'Could not read that image',tracedAt:'traced at {w}×{h}',
  smaller:'<span class="delta good">{pct}% smaller</span> than the {size} PNG',larger:'<span class="delta warn">{pct}% larger</span> than the {size} PNG',
  noShapes:'No visible shapes — try lowering “Remove specks”.',pts:'pts',moreChars:'… {n} more characters',lines:'{n} lines',previewOnly:'preview only — Copy or Download gives the full file',
  runs:'{n} runs · now {size}',run1:'1 run · now {size}',fullCopied:'Full SVG copied',downloaded:'SVG downloaded · {size}',copied:'SVG code copied',
  dirStatus:'Showing {a} of {b} tools'
 },
 how:{
  eyebrow:'Under the hood',title:'How the PNG to SVG converter works',
  def:'<strong>A PNG to SVG converter</strong> turns a grid of colored pixels into a set of filled vector shapes. This one does it in five automatic stages, entirely inside your browser, and redraws the result every time you move a slider.',
  stages:[
   ['Decode','Your browser reads the PNG with the Canvas API and turns it into a grid of RGBA pixels. Large files are resampled to a working size set by the Detail slider, and an optional Denoise blur removes grain.','Canvas · getImageData'],
   ['Quantize','A median-cut palette of 2–64 colors is refined with k-means. Near-duplicate colors are merged, anti-aliased edge pixels are snapped to the nearest real color, and tiny specks are absorbed into their neighbors.','Median cut · k-means'],
   ['Trace','Each color becomes a stacked layer. The layer mask is softened and its outline is extracted with marching squares, giving sub-pixel contours that follow the true edge instead of pixel stair-steps.','Marching squares'],
   ['Fit curves','Corners are detected, then every smooth run is fitted with cubic Bézier curves. Straight edges stay straight lines, so the result needs far fewer nodes than a raw pixel trace.','Schneider Bézier fit'],
   ['Render','The paths are written as one filled SVG path per color, with the original viewBox preserved. The preview, file size, palette and source code all update live as you move a slider.','SVG · fill-rule evenodd']],
  cap:'The five stages of PNG to SVG conversion: decode, quantize, trace, fit curves and render.',
  privTitle:'Where your file goes',privCap:'The PNG is processed on your device. No upload happens, so the file never reaches a server.',privAlt:'Your PNG stays on your device',privAltDesc:'The PNG moves through the converter inside your browser and becomes an SVG. No arrow leaves your device toward a server.',
  privBrowser:'YOUR BROWSER',privEngine:'Tracing engine',privServer:'Server',privNot:'not involved',
  whyTitle:'Why the result stays small and clean',
  why:[['Stacked layers','Each color sits on top of the one beneath it, so there are no hairline gaps and far fewer holes to describe.'],['Sub-pixel contours','Edges are placed between pixels, not on them, so diagonals and curves stay smooth.'],['Curve fitting','One Bézier segment can replace dozens of pixel steps, so a typical logo needs only a few hundred nodes.'],['Cleanup before tracing','Anti-aliasing fringes and specks are merged first, so they never become extra shapes.']]
 },
 proc:{
  eyebrow:'Step by step',title:'PNG to SVG conversion process',
  def:'Converting a PNG to SVG takes five steps and usually less than a minute. You can stop after any step: the SVG is ready to download as soon as the preview looks right.',
  steps:[
   ['Add your PNG','Drop a PNG onto the upload box, click “Choose image”, or paste one from your clipboard with Ctrl+V. Not ready yet? Press a sample button to see the converter work first.','Also accepts JPG, WebP, GIF and BMP.'],
   ['Pick a preset','Choose Logo, Illustration, Photo or Line art. Each preset sets sensible values for colors, detail, smoothness and speck removal, so the first preview is usually already close.','Logos: 4–8 colors. Photos: 32–48 colors.'],
   ['Fine-tune the trace','Adjust the number of colors (2–64), Detail, Smoothness, Remove specks and Denoise. Switch between Color, Gray and Mono modes, and turn on Remove background for white or transparent edges.','Every slider updates the preview instantly.'],
   ['Compare and inspect','Drag the handle to compare the original PNG with the SVG. Scroll to zoom, drag to pan, and hover a color layer to isolate it or click it to hide it before you export.','Zoom to 3200% to see the SVG stay sharp.'],
   ['Download or copy the SVG','Press “Download SVG” to save the file, or “Copy code” to paste the markup straight into your project, Figma, Illustrator, Inkscape or a web page.','The file never leaves your device.']],
  cta:'Convert a PNG now',tipLabel:'Tip:',
  mock:{dropLabel:'Drop PNG',presets:['Logo','Illustration','Photo','Line art'],sliders:['Colors','Detail','Smoothness'],dlBtn:'Download SVG'}
 },
 chart:{
  eyebrow:'Reference',title:'PNG to SVG conversion chart / features',
  def:'Use this chart to pick the right settings for your PNG type, see how well each type converts, and compare PNG with SVG. The values match the presets built into the converter.',
  barsTitle:'How well each PNG type converts',barsCap:'Vector fit from 1 (poor) to 5 (excellent). Flat, high-contrast artwork converts best; photographs convert least well.',
  barsAlt:'How well each type of PNG converts to SVG',
  bars:['Logo','Icon','Pixel art','Flat illustration','Line art','Signature','Scanned document','Photograph'],
  quickTitle:'Quick answers',
  quick:[['Best results:','logos, icons, pixel art and flat illustrations.'],['Good results:','line art, sketches and signatures in Mono mode.'],['Needs care:','scanned pages, which need Denoise and a higher speck filter.'],['Stylized only:','photographs and smooth gradients become posterized art.']],
  note:'Tip: start with the closest preset, then change only one slider at a time.',
  t1:{cap:'Recommended converter settings by PNG type',cols:['PNG type','Preset or mode','Colors','Detail','Smoothness','Remove specks','Vector fit'],
   rows:[['Logo','Logo preset'],['Icon','Logo preset'],['Flat illustration or cartoon','Illustration preset'],['Line art or sketch','Line art preset · Mono'],['Signature','Mono · threshold 160'],['Pixel art','Pixel mode'],['Scanned document','Mono · Denoise 1.5'],['Photograph','Photo preset']],
   words:{ink:'ink',auto:'auto pixel size',na:'not used',up:'up to'}},
  t2:{cap:'PNG vs SVG at a glance',cols:['Feature','PNG (raster)','SVG (vector)'],
   rows:[['Scaling','Pixels blur or break up when enlarged','Scales to any size with no loss of sharpness'],['File size','Grows with the pixel count','Grows with shape complexity — tiny for flat art'],['Editing','Edit pixels in a raster editor','Edit shapes, curves and colors in any vector editor'],['Best for','Photographs and detailed textures','Logos, icons, illustrations, diagrams and line art'],['Transparency','Alpha channel','Native — empty space is simply transparent'],['Styling with CSS','Not possible','Possible when the SVG is inlined in a page'],['Print and signage','Needs a high-resolution original','Resolution-independent for any print size']]},
  featTitle:'Converter features',
  feats:[['Live preview','Every slider re-traces the image and updates the split view, size chart, palette and node count together.'],['Sub-pixel tracing','Outlines follow the true edge between colors rather than pixel boundaries, so curves stay smooth.'],['Bézier curve fitting','Smooth runs become cubic Béziers and straight edges stay lines, which keeps node counts low.'],['Stacked color layers','Layers sit on top of each other, so there are no hairline gaps or seams between colors.'],['2–64 colors','Choose how many colors to keep, or switch to Gray or Mono. Hover or hide any layer before exporting.'],['Pixel mode','Trace pixel art to crisp square rectangles at the detected pixel size, with no smoothing.'],['Transparent backgrounds','Transparent pixels never become shapes. Remove background clears a solid white backdrop in one click.'],['Zoom and compare','Drag the handle to compare, then zoom to 3200% to see the PNG pixelate while the SVG stays sharp.'],['Private by design','Conversion runs in your browser. Your PNG is never uploaded, stored or shared.'],['Free, no limits','No account, no watermark and no daily quota. Convert as many images as you like.']]
 },
 faq:{
  eyebrow:'Answers',title:'FAQ',def:'Frequently asked questions about the PNG to SVG converter: how it works, what to expect, and how to get the best result. {n} answers in four topics.',
  groups:[
   ['The basics',[
    ['What is a PNG to SVG converter?','A PNG to SVG converter turns a pixel-based PNG image into a vector SVG made of mathematical shapes and curves. Because an SVG describes shapes instead of pixels, it can be scaled to any size without blurring, and it is often much smaller than the PNG for flat artwork such as logos and icons.'],
    ['Is this PNG to SVG converter free?','Yes. It is completely free with no account, no watermark and no daily limit. The only practical limit is your device: images are processed at up to 3000 px on the longest side, and very large or very detailed files simply take a little longer.'],
    ['Are my PNG files uploaded to a server?','No. The conversion runs entirely in your browser using JavaScript and the Canvas API. Your PNG is never uploaded, stored or shared, so confidential artwork stays on your device.'],
    ['What is the difference between PNG and SVG?','PNG is a raster format that stores a grid of colored pixels, so it loses sharpness when enlarged. SVG is a vector format that stores shapes, curves and fills, so it stays sharp at any size and can be edited in vector tools. PNG suits photographs; SVG suits logos, icons, diagrams and line art.']]],
   ['Quality and settings',[
    ['Will the SVG look exactly like my PNG?','Not pixel for pixel. Conversion traces the shapes it finds and approximates them with curves, so the result is a clean, scalable version of the artwork. Flat, high-contrast images match very closely, while photographs become a stylized, posterized version.'],
    ['Which PNG images convert best?','Logos, icons, flat illustrations, cartoons, line art, signatures and pixel art convert best because they are made of clear shapes and a limited set of colors. Photographs and soft gradients convert least well (try the [[photo-to-vector-converter]] for stylized results). See the chart above for settings by image type.'],
    ['How many colors should I choose?','Match the number of flat colors in your artwork. Most logos need 4–8, icons 3–6 and illustrations 12–20. Photographs may need 32–48 or more. Extra colors add layers and file size without improving a flat design, and the color layer list shows exactly what each one contributes.'],
    ['How do I get smoother lines or sharper corners?','Use the Smoothness slider. Lower values keep corners sharp and edges close to the original; higher values round off pixel stair-steps and wobble. Raise Detail for finer features and lower Remove specks if thin lines disappear.'],
    ['Why does my photo look posterized or banded?','Vectors store flat color regions, so a smooth gradient has to be approximated with bands. Increase the number of colors and Detail, add a little Denoise, or accept the bold, graphic look. For true photographic detail, keep the PNG or use a photo format instead.']]],
   ['Transparency, text and editing',[
    ['How do I keep a transparent background?','Transparent pixels in your PNG are respected automatically and never become shapes, so the SVG has no background box. If your PNG has a solid white background, switch on Remove background to clear it. Mono mode also drops the paper tone and keeps only the ink, which the [[transparent-image-to-svg-converter]] page is tuned for.'],
    ['Does it recognize text in my PNG?','No. The converter does not perform OCR. Letters are traced as vector outlines, so they scale perfectly but are not editable as text. If you need live text, retype it in a design tool or run OCR separately.'],
    ['Why is my SVG larger than my PNG?','Photographs and gradients need many shapes, and that can outweigh a well-compressed PNG. Reduce the number of colors, lower Detail, raise Remove specks or increase Smoothness. The file-size card and live size trace show the effect of every change as you make it.'],
    ['Can I edit the SVG in Figma, Illustrator, Inkscape or Canva?','Yes. The output is standard SVG with one filled path per color, so any vector editor can open, recolor and reshape it. Layers are stacked in order, and you can hide a layer in the converter before you download.']]],
   ['Compatibility',[
    ['What PNG size and formats are supported?','You can upload PNG, JPG, WebP, GIF and BMP files (each also has its own page, such as the [[jpg-to-svg-converter]] and [[webp-to-svg-converter]]) that your browser can open. For performance, very large images are scaled down to a maximum of 3000 px on the longest side before tracing, and the exported SVG keeps the original aspect ratio.'],
    ['Does it work on phones and tablets?','Yes. It runs in current versions of Chrome, Edge, Firefox and Safari on desktop and mobile. Very large images may be slower on older phones, so try a smaller image or lower Detail if the preview feels slow.']]]
  ],
  ctaTitle:'Ready to vectorize?',ctaText:'Your PNG is one drop away from a scalable SVG.',ctaBtn:'Open the PNG to SVG converter'
 },
 dir:{
  eyebrow:'All converters',title:'Every free converter and SVG tool',lead:'{n} free tools that run in your browser. Pick a converter below, or search by format or task.',
  search:'Search, e.g. “logo”, “PDF”, “minify”',searchLabel:'Search converters',filter:'Filter by type',all:'All',empty:'No converter matches that search. Try “SVG”, “logo” or “PNG”.',
  groups:[['Image to SVG','Trace raster images into scalable vector shapes.'],['SVG to image','Render an SVG into PNG, JPG, WebP, PDF or ICO.'],['SVG tools','Compress, edit, inspect and validate SVG code.']],
  here:'You are here',nav:'All converters and SVG tools'
 },
 foot:{
  blurb:'Free PNG to SVG converter and SVG tools that run entirely in your browser.',colExplore:'Explore',colCompany:'Company',colLegal:'Legal',lang:'Language',
  home:'Home',about:'About us',contact:'Contact us',terms:'Terms & Conditions',privacy:'Privacy Policy',sitemap:'Sitemap',
  copy:'© {year} pngtosvgconverter.com',made:'Made for designers & developers · Processed locally'
 }
};
