const {S,T,wrap}=require('./subjects');
const {M}=require('./motifs');
S.butterfly=`<rect width="400" height="300" fill="#f4f1ff"/><g><path d="M200 150C150 60 60 50 56 110C52 160 110 170 200 150Z" fill="#8b7bff"/><path d="M200 150C250 60 340 50 344 110C348 160 290 170 200 150Z" fill="#6d5df0"/><path d="M200 150C140 190 100 250 150 262C190 270 200 210 200 150Z" fill="#4ff0c0"/><path d="M200 150C260 190 300 250 250 262C210 270 200 210 200 150Z" fill="#2dd4a8"/><circle cx="110" cy="108" r="16" fill="#fff" opacity=".85"/><circle cx="290" cy="108" r="16" fill="#fff" opacity=".85"/><rect x="194" y="96" width="12" height="130" rx="6" fill="#241b52"/><path d="M200 98C190 70 176 60 168 52M200 98C210 70 224 60 232 52" fill="none" stroke="#241b52" stroke-width="5" stroke-linecap="round"/></g>`;

const D={ // hero decorations (right pane, viewBox 400x300)
 optimizer:`<g transform="translate(246 18)"><rect width="136" height="44" rx="22" style="fill:var(--accent)"/><text x="68" y="29" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="800" font-size="20" fill="#08090e">−68%</text></g>`,
 compressor:`<g style="stroke:var(--accent)" fill="none" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"><path d="M96 150h38m-14-14 14 14-14 14"/><path d="M304 150h-38m14-14-14 14 14 14"/></g>`,
 minifier:`<g transform="translate(250 18)"><rect width="130" height="36" rx="18" style="fill:var(--accent)"/><text x="65" y="24" text-anchor="middle" font-family="ui-monospace,monospace" font-weight="700" font-size="16" fill="#08090e">.min.svg</text></g>`,
 resizer:`<g style="stroke:var(--accent)" fill="none" stroke-width="5" stroke-linecap="round"><path d="M170 272H372M170 262v20M372 262v20M388 30V232M378 30h20M378 232h20"/></g><g font-family="system-ui,sans-serif" font-weight="800" font-size="18" style="fill:var(--accent)"><text x="270" y="262" text-anchor="middle">1024 px</text></g>`,
 cropper:`<g transform="translate(14 14)"><rect width="104" height="34" rx="17" style="fill:var(--accent)"/><text x="52" y="23" text-anchor="middle" font-family="ui-monospace,monospace" font-weight="700" font-size="15" fill="#08090e">viewBox</text></g>`,
 colors:`<g transform="translate(262 226)"><circle r="22" fill="#ef4444"/><circle cx="34" r="22" fill="#22c55e"/><circle cx="68" r="22" fill="#3b82f6"/></g><path d="M278 262l18 12 18-12" fill="none" stroke="#111" stroke-width="5" stroke-linecap="round"/>`,
 bg:`<ellipse cx="200" cy="156" rx="132" ry="136" fill="none" stroke-dasharray="12 9" stroke-width="6" stroke-linecap="round" style="stroke:var(--accent)"/>`,
 viewer:`<g transform="translate(268 168)"><circle r="58" fill="rgba(255,255,255,.1)" stroke-width="10" style="stroke:var(--accent)"/><path d="M42 42L96 96" stroke-width="16" stroke-linecap="round" style="stroke:var(--accent)"/></g>`,
 base64:`<g transform="translate(220 20)"><rect width="162" height="38" rx="19" style="fill:var(--accent)"/><text x="81" y="25" text-anchor="middle" font-family="ui-monospace,monospace" font-weight="700" font-size="16" fill="#08090e">PHN2Zy4uLj4=</text></g>`,
 datauri:`<g transform="translate(70 238)"><rect width="260" height="36" rx="18" style="fill:var(--accent)"/><text x="130" y="24" text-anchor="middle" font-family="ui-monospace,monospace" font-weight="700" font-size="15" fill="#08090e">data:image/svg+xml,…</text></g>`,
 format:`<g font-family="ui-monospace,monospace" font-weight="800" font-size="46" style="fill:var(--accent)"><text x="300" y="70">{ }</text></g>`,
 validate:`<g transform="translate(262 18)"><rect width="122" height="42" rx="21" style="fill:var(--accent)"/><text x="61" y="28" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="800" font-size="18" fill="#08090e">✓ valid</text></g>`,
 metadata:`<g transform="translate(250 226)"><rect width="132" height="40" rx="20" style="fill:var(--accent)"/><text x="66" y="26" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="800" font-size="16" fill="#08090e">0 hidden tags</text></g>`
};

// ---------- raster -> SVG pages
const R=(kw,o)=>({kw,group:'raster',...o});
const raster=[
 R('JPG to SVG Converter',{hue:24,subj:'sunsetPhoto',post:['jpeg'],preset:'photo',params:{colors:24,detail:70,smooth:50,speckle:16,blur:1},inL:'JPG',sampleL:'a JPG photo',sampleName:'sunset.jpg',
  tips:[['Handles JPEG noise','Compression blocks and halos are smoothed out before tracing, so edges stay clean.'],['Made for flat artwork','Logos, icons and illustrations saved as JPG convert best — photos become stylised vector art.']],
  faq:['Why does my JPG look posterised as SVG?','Vectors store flat color regions. Raise the color count and detail sliders to keep more shading, or lower them for a bold, graphic look.']}),
 R('WebP to SVG Converter',{hue:152,subj:'leaf',post:['webp'],preset:'illus',params:{colors:12},inL:'WebP',sampleL:'a WebP image',sampleName:'leaf.webp',
  tips:[['Reads WebP natively','Your browser decodes WebP directly, including transparent WebP images.'],['Keeps alpha cleanly','Transparent areas stay transparent in the SVG — no white box around your shape.']],
  faq:['Does it support animated WebP?','Only the first frame is converted. Export the frame you want as a still image first.']}),
 R('GIF to SVG Converter',{hue:292,subj:'gifFace',post:['posterize'],preset:'logo',params:{colors:6,smooth:25},inL:'GIF',sampleL:'a GIF frame',sampleName:'smile.gif',
  tips:[['Limited palettes shine','GIFs already use few colors, so the trace maps almost one-to-one to clean color layers.'],['First frame is converted','Animated GIFs use their first frame; extract another frame if you need it.']],
  faq:['Can I convert an animated GIF to an animated SVG?','No — this tool vectorizes a single frame. Convert each frame separately if you need to rebuild an animation.']}),
 R('BMP to SVG Converter',{hue:196,subj:'retroWindow',post:[],preset:'logo',params:{colors:8,smooth:12,speckle:6},inL:'BMP',sampleL:'a BMP screenshot',sampleName:'retro.bmp',
  tips:[['Crisp UI graphics','BMP screenshots and old Windows art have hard edges; low smoothing keeps corners sharp.'],['Huge BMPs shrink a lot','Uncompressed bitmaps are big — their SVG is usually a tiny fraction of the size.']],
  faq:['Why is BMP so large and SVG so small?','BMP stores every pixel. SVG stores only the shapes, so flat graphics shrink dramatically.']}),
 R('AVIF to SVG Converter',{hue:208,subj:'mountains',post:[],preset:'illus',params:{colors:16},inL:'AVIF',sampleL:'an AVIF image',sampleName:'peaks.avif',
  tips:[['Modern format support','Browsers that can display AVIF can convert it — nothing is installed or uploaded.'],['Great for flat art','AVIF illustrations trace into compact layered shapes.']],
  faq:['My browser cannot open this AVIF.','Use a current version of Chrome, Edge, Firefox or Safari. If it still fails, export the image as PNG first.']}),
 R('ICO to SVG Converter',{hue:46,subj:'favicon',post:['lowres'],preset:'logo',params:{colors:6,detail:80,smooth:45,blur:1},inL:'ICO',sampleL:'a favicon',sampleName:'favicon.ico',
  tips:[['Rescue tiny icons','Favicons are 16–64 px. The tracer upsamples and smooths them into scalable shapes.'],['Smoothing helps small art','Increase smoothness to round off the pixel stair-steps of low-res icons.']],
  faq:['Will a 16×16 icon look sharp as SVG?','It will scale cleanly, but detail that was never in the 16 px original cannot be invented. Use the largest ICO size you have.']}),
 R('Image to SVG Converter',{hue:262,subj:'landscape',post:[],preset:'illus',params:{colors:16},inL:'image',sampleL:'a sample image',sampleName:'landscape.png',
  tips:[['Any raster image','PNG, JPG, WebP, GIF, BMP or AVIF — if your browser can open it, we can trace it.'],['Four presets to start','Pick Logo, Illustration, Photo or Line art, then fine-tune with the live sliders.']],
  faq:['What kind of images convert best?','Flat, high-contrast artwork with clear shapes — logos, icons, cartoons and diagrams.']}),
 R('Logo to SVG Converter',{hue:250,subj:'logoMark',post:[],preset:'logo',params:{colors:6,smooth:25},inL:'logo',sampleL:'a logo',sampleName:'logo.png',
  tips:[['Sharp corners, exact curves','Low smoothing keeps logo corners crisp while curves are fitted with clean Béziers.'],['Print-ready scaling','Use the SVG for signage, merch and embroidery without any pixelation.']],
  faq:['How many colors should I use for a logo?','Match the number of flat colors in your logo — usually 2–6. Extra colors only add noise.']}),
 R('Sketch to SVG Converter',{hue:222,subj:'sketchHouse',post:[],preset:'line',params:{mode:'mono',thresh:170,blur:.5,speckle:10,smooth:40,ink:'#2b2b2b'},inL:'sketch',sampleL:'a pencil sketch',sampleName:'sketch.png',
  tips:[['Paper disappears','Mono mode keeps only the pencil strokes and drops the paper tone, leaving a transparent background.'],['Tune the threshold','Slide the threshold to include faint pencil lines or ignore smudges.']],
  faq:['Can I trace a photo of a sketch?','Yes. Use even lighting, raise the threshold slightly and add a little denoise for a cleaner line.']}),
 R('Drawing to SVG Converter',{hue:12,subj:'drawingCat',post:[],preset:null,params:{mode:'color',colors:4,detail:80,smooth:40,speckle:10},inL:'drawing',sampleL:'an inked drawing',sampleName:'cat-drawing.png',
  tips:[['Ink and color together','A few color layers keep fills and outlines as separate editable shapes.'],['Edit anywhere','Open the SVG in Figma, Illustrator or Inkscape and recolor each layer.']],
  faq:['How do I keep thin ink lines?','Raise Detail, lower Remove specks and use 4–6 colors so line work gets its own layer.']}),
 R('Icon to SVG Converter',{hue:172,subj:'gearIcon',post:[],preset:'logo',params:{colors:4,smooth:20},inL:'icon',sampleL:'an icon',sampleName:'gear-icon.png',
  tips:[['Pixel-perfect scaling','One SVG icon replaces a whole set of 16/32/64/128 px PNG exports.'],['Few colors, tiny files','Flat icons trace into a few paths — often just a couple of kilobytes.']],
  faq:['Will my icon keep its rounded corners?','Yes. Rounded shapes are fitted as smooth curves, and straight edges stay straight.']}),
 R('Signature to SVG Converter',{hue:236,subj:'signature',post:[],preset:'line',params:{mode:'mono',thresh:160,smooth:55,speckle:3,detail:85,ink:'#1b2a6b'},inL:'signature',sampleL:'a signature',sampleName:'signature.png',
  tips:[['Transparent signature','Strip the paper and keep just the ink — perfect for documents and e-sign templates.'],['Choose your ink','Pick any ink color; the stroke is a single smooth vector shape.']],
  faq:['Can I use a photo of my signature?','Yes. Sign with a dark pen on white paper in good light, then raise the threshold until the strokes are solid.']}),
 R('Scanned Image to SVG Converter',{hue:40,subj:'scannedDoc',post:['noise'],preset:'line',params:{mode:'mono',thresh:150,blur:1.5,speckle:40,detail:85,smooth:40},inL:'scan',sampleL:'a noisy scan',sampleName:'scan.png',
  tips:[['Cleans scanner noise','Denoise and speck removal wipe out paper grain and dust before tracing.'],['Keeps the text shapes','Letters become vector outlines you can scale or edit.']],
  faq:['Is this OCR?','No. It converts the scan into vector shapes; it does not recognise text. Use OCR separately if you need editable text.']}),
 R('Clipart to SVG Converter',{hue:340,subj:'clipart',post:[],preset:'illus',params:{colors:10,smooth:35},inL:'clipart',sampleL:'clipart',sampleName:'balloon-clipart.png',
  tips:[['Outlines stay clean','Black outlines and flat fills separate into neat layers.'],['Transparent PNG clipart','Transparent backgrounds are preserved automatically.']],
  faq:['Why do I see halos around my clipart?','Anti-aliased edges create in-between colors. Reduce colors or raise Remove specks to merge them away.']}),
 R('Black and White Image to SVG Converter',{hue:268,subj:'bwPortrait',post:[],preset:'line',params:{mode:'mono',thresh:128,smooth:40,speckle:20,detail:75},inL:'black and white image',sampleL:'a black and white poster',sampleName:'poster-bw.png',
  tips:[['True two-tone output','Mono mode produces a single black shape layer — ideal for cutting machines and stamps.'],['Threshold is your contrast','Drag the threshold to decide which grays become black and which become white.']],
  faq:['Can I trace a grayscale photo?','Yes. Raise the threshold for brighter results, lower it for bolder, darker ones.']}),
 R('Color Image to SVG Converter',{hue:322,subj:'colorBird',post:[],preset:'illus',params:{colors:20,smooth:40},inL:'color image',sampleL:'a color illustration',sampleName:'bird.png',
  tips:[['Up to 64 colors','Choose how many color layers to keep — the palette panel shows each one.'],['Hide or isolate layers','Hover a color in the layer list to isolate it, click to hide it before downloading.']],
  faq:['How are the colors chosen?','A median-cut palette is refined with k-means, then near-duplicate colors are merged automatically.']}),
 R('Line Art to SVG Converter',{hue:160,subj:'lineArtFlower',post:[],preset:'line',params:{mode:'mono',thresh:150,detail:92,smooth:30,speckle:2},inL:'line art',sampleL:'line art',sampleName:'flower-line-art.png',
  tips:[['Thin lines preserved','High detail and a low speck filter keep hairline strokes intact.'],['Single-color result','Ideal for coloring pages, tattoos, engraving and plotter paths.']],
  faq:['My thin lines disappear — why?','Lower Remove specks and raise Detail. If lines are very faint, increase the threshold.']}),
 R('Pixel Art to SVG Converter',{hue:128,subj:'pixelSprite',post:[],preset:null,params:{mode:'pixel',colors:16,cell:0},inL:'pixel art',sampleL:'pixel art',sampleName:'sprite.png',
  tips:[['Every pixel stays square','Pixel mode snaps to the original pixel grid and outputs crisp rectangles — no smoothing.'],['Auto-detects pixel size','Upscaled sprites are detected automatically; override the pixel size if needed.']],
  faq:['Why use SVG for pixel art?','Pixel art scales to any size without blurring, and SVG rectangles stay perfectly sharp.']}),
 R('Transparent Image to SVG Converter',{hue:194,subj:'transparentStar',post:[],preset:'logo',params:{colors:6,rmbg:true},inL:'transparent image',sampleL:'a transparent PNG',sampleName:'star-transparent.png',
  tips:[['Alpha is respected','Fully transparent pixels never become shapes, so the SVG has no background box.'],['Remove white backgrounds too','Turn on Remove background to clear a solid white backdrop in one click.']],
  faq:['What happens to semi-transparent shadows?','Pixels that are mostly transparent are dropped; mostly opaque ones become solid shapes.']}),
 R('Outline Image to SVG Converter',{hue:100,subj:'outlineShape',post:[],preset:'line',params:{mode:'mono',thresh:150,smooth:30,outline:true,speckle:10},inL:'outline image',sampleL:'an outlined shape',sampleName:'outline.png',outlineSwitch:true,
  tips:[['Outline-only output','Toggle Outline only to export strokes with no fill — perfect for laser and vinyl cutting.'],['Adjust the stroke later','The SVG uses a real stroke you can change in any editor.']],
  faq:['Can I get filled shapes instead?','Yes — turn Outline only off and the same trace becomes solid filled shapes.']}),
 R('Monochrome Image to SVG Converter',{hue:204,subj:'monoWave',post:[],preset:'line',params:{mode:'mono',thresh:140,ink:'#0b3d66',smooth:45,speckle:8,detail:75},inL:'monochrome image',sampleL:'a monochrome image',sampleName:'waves-mono.png',
  tips:[['One ink, any color','Trace to a single shape layer and pick the ink color you want.'],['Tonal images simplified','Use the threshold to choose which tones become ink.']],
  faq:['Is monochrome the same as black and white?','Monochrome is one ink color on a transparent background — it can be navy, red or anything else, not just black.']}),
 R('Hand Drawing to SVG Converter',{hue:18,subj:'handDoodle',post:[],preset:'line',params:{mode:'mono',thresh:175,ink:'#222222',smooth:50,speckle:6,blur:.5},inL:'hand drawing',sampleL:'a hand drawing',sampleName:'doodle.png',
  tips:[['Wobble becomes smooth','Pen shake is smoothed into clean curves while keeping your drawing style.'],['Photos of paper work','Shoot from above in even light, then tune the threshold.']],
  faq:['Will it keep my hand-drawn feel?','Yes. Lower the Smoothness slider to keep more of the original wobble.']}),
 R('Photo to Vector Converter',{hue:352,subj:'photoPortrait',post:[],preset:'photo',params:{colors:40},inL:'photo',sampleL:'a portrait photo',sampleName:'portrait.jpg',
  tips:[['Posterised vector art','Up to 64 stacked color layers turn a photo into a stylised vector illustration.'],['Control the style','Fewer colors give a bold poster look; more colors keep subtle gradients.']],
  faq:['Can a photo become a perfect vector?','Photos contain smooth gradients that vectors approximate with bands. Expect an artistic, posterised result rather than an exact copy.']}),
 R('Raster to Vector Converter',{hue:88,subj:'rasterBlobs',post:['lowres'],preset:'illus',params:{colors:10,smooth:60,blur:1.5},inL:'raster image',sampleL:'a blurry raster',sampleName:'raster.png',
  tips:[['Rebuild from pixels','Blurry or low-res raster art is re-drawn as sharp, resolution-independent shapes.'],['Smoothing recovers edges','High smoothness rounds pixel stair-steps into clean curves.']],
  faq:['What is the difference between raster and vector?','Raster images are grids of pixels; vectors are shapes defined by math. Vectors scale infinitely without losing quality.']})
];

// ---------- SVG -> image exporters
const E=(kw,o)=>({kw,group:'export',...o});
const exportPages=[
 E('SVG to PNG Converter',{hue:244,subj:M.png,format:'png',fmt:'PNG',sample:wrap(M.png),
  tips:[['Any resolution','Export at 1× to 16× — crisp PNGs from tiny icons to print-size artwork.'],['Transparent by default','Keep the alpha channel or fill with white, black or any color.']],
  faq:['What size should I export?','Use 2× for retina screens and 4× or more for print. Dimensions are shown live under the scale slider.']}),
 E('SVG to JPG Converter',{hue:30,subj:M.jpg,format:'jpg',fmt:'JPG',sample:wrap(S.sunsetPhoto),
  tips:[['Smaller files','JPG compresses photos and gradients well — pick the quality that balances size and clarity.'],['No transparency','JPG has no alpha, so transparent areas are filled with your chosen background.']],
  faq:['Why is my JPG background white?','JPG cannot store transparency. Pick another fill color or use PNG or WebP to keep transparent areas.']}),
 E('SVG to WebP Converter',{hue:160,subj:M.webp,format:'webp',fmt:'WebP',sample:wrap(S.leaf),
  tips:[['Smaller than PNG','WebP delivers the same look at a fraction of the weight, with optional transparency.'],['Quality slider','Trade size against fidelity and watch the file size update instantly.']],
  faq:['Is WebP supported everywhere?','All modern browsers display WebP. For legacy systems, export PNG or JPG instead.']}),
 E('SVG to PDF Converter',{hue:350,subj:M.pdf,format:'pdf',fmt:'PDF',sample:T.docInvoice(),
  tips:[['Fit, A4 or Letter','Place your artwork on a page that matches the image or a standard paper size.'],['High-resolution embed','The artwork is embedded as a sharp 95%-quality image — raise the scale for print.']],
  faq:['Is the PDF vector?','This tool embeds a high-resolution image of your SVG in the PDF. Increase the scale for sharper print output.']}),
 E('SVG to ICO Converter',{hue:42,subj:M.ico,format:'ico',fmt:'ICO',sample:wrap(S.favicon),
  tips:[['Multi-size in one file','Bundle 16, 32, 48, 64 and 256 px sizes into a single favicon.ico.'],['Check every size','See each embedded size rendered pixel-for-pixel before you download.']],
  faq:['Which sizes does a favicon need?','16, 32 and 48 px cover browsers; add 256 px for Windows shortcuts.']})
];

// ---------- SVG utilities
const U=(kw,o)=>({kw,group:'util',...o});
const util=[
 U('SVG Compressor',{hue:190,subj:M.compressor,deco:'compressor',tool:'optimize',variant:'compressor',sample:T.optimizeBloated(),dl:'Download compressed SVG',
  tips:[['Aggressive but safe','Lower number precision and strip hidden data for the smallest possible SVG.'],['See the gzip size','We show the real gzipped size — what visitors actually download.']],
  faq:['How small can an SVG get?','Editor-exported files often shrink 50–80%. Lower the precision slider for more savings.']}),
 U('SVG Optimizer',{hue:140,subj:M.optimizer,deco:'optimizer',tool:'optimize',variant:'optimizer',sample:T.optimizeBloated(),dl:'Download optimized SVG',
  tips:[['One-click cleanup','Removes comments, metadata, editor data and extra whitespace while shortening colors.'],['Bytes saved, by step','A chart shows exactly how much each optimization saved.']],
  faq:['Will optimizing change how my SVG looks?','With default settings it should look identical. Compare the before and after previews to be sure.']}),
 U('SVG Resizer',{hue:22,subj:M.resizer,deco:'resizer',tool:'resizer',sample:T.resizeIcon(),dl:'Download resized SVG',
  tips:[['Resize without quality loss','SVG is vector — enlarge or shrink it to any size and it stays sharp.'],['Lock the aspect ratio','Change width or height and the other follows, or set an exact scale percentage.']],
  faq:['Does resizing change the file quality?','No. Only the width and height attributes change; the shapes are untouched.']}),
 U('SVG Cropper',{hue:286,subj:M.cropper,deco:'cropper',tool:'cropper',sample:T.cropWhitespace(),dl:'Download cropped SVG',
  tips:[['Visual crop box','Drag the box over your artwork and the SVG viewBox updates live.'],['Crop to content','One click trims empty space around the drawing.']],
  faq:['Does cropping delete shapes?','No. Cropping changes the visible area (viewBox); shapes outside it remain in the file but are hidden.']}),
 U('SVG Color Changer',{hue:330,subj:M.colors,deco:'colors',tool:'colors',sample:T.colorBadge(),dl:'Download recolored SVG',
  tips:[['Every color listed','Fills, strokes and gradient stops are detected and listed with how often each is used.'],['Effects in one move','Shift the hue, invert or convert the whole SVG to grayscale instantly.']],
  faq:['Does it recolor gradients?','Yes — gradient stop colors are detected and remapped like any other color.']}),
 U('SVG Background Remover',{hue:200,subj:M.bg,deco:'bg',tool:'bg',sample:T.logoOnWhite(),dl:'Download transparent SVG',
  tips:[['Finds the backdrop','Detects full-canvas rectangles and shapes that act as the background.'],['Before and after','See your SVG on a backdrop and on a transparency checkerboard side by side.']],
  faq:['What if no background is found?','The SVG may already be transparent. You can also edit the code box to remove a background shape manually.']}),
 U('SVG Viewer',{hue:216,subj:M.viewer,deco:'viewer',tool:'viewer',sample:T.viewerScene(),dl:'Download SVG',
  tips:[['Zoom and pan','Scroll to zoom and drag to pan — inspect every curve at 40× if you like.'],['Element breakdown','See how many paths, groups and shapes your SVG contains, plus its colors.']],
  faq:['Is my file uploaded?','No. The viewer runs entirely in your browser.']}),
 U('SVG to Base64 Converter',{hue:262,subj:M.base64,deco:'base64',tool:'b64',variant:'base64',sample:T.encodeIcon(),dl:'Download Base64',
  tips:[['Copy-ready output','Get raw Base64, a CSS background-image rule or an <img> tag in one click.'],['Know the overhead','See exactly how much bigger Base64 is than your SVG source.']],
  faq:['Is Base64 the best way to embed SVG?','URL-encoded data URIs are usually smaller. Compare the sizes shown above and pick the best.']}),
 U('SVG Code Formatter',{hue:48,subj:M.format,deco:'format',tool:'format',sample:T.minifiedOneLine(),dl:'Download formatted SVG',
  tips:[['Readable in a click','Turns a one-line export into neatly indented, human-readable markup.'],['Attribute wrapping','Optionally put each attribute on its own line for long tags.']],
  faq:['Does formatting change the image?','No. Only whitespace changes, so the SVG renders identically.']}),
 U('SVG Minifier',{hue:270,subj:M.minifier,deco:'minifier',tool:'optimize',variant:'minifier',sample:T.minifySpaced(),dl:'Download minified SVG',
  tips:[['Lossless by default','Strips whitespace, comments and metadata without touching your numbers.'],['Optional precision','Turn on number rounding for extra savings when you can accept tiny changes.']],
  faq:['Minifier or optimizer — which one?','The minifier is lossless by default. The optimizer and compressor also round numbers for bigger savings.']}),
 U('SVG Metadata Remover',{hue:325,subj:M.meta,deco:'metadata',tool:'meta',sample:T.metaDirty(),dl:'Download clean SVG',
  tips:[['See what was hiding','Counts the metadata blocks, editor data, comments and tags found in your file.'],['Privacy first','Remove creator names, file paths and software fingerprints before you share a file.']],
  faq:['What kind of metadata do SVGs contain?','Editors such as Inkscape, Illustrator and Sketch can embed author names, project notes, software versions and file paths.']}),
 U('SVG Validator',{hue:168,subj:M.validate,deco:'validate',tool:'validate',sample:T.invalid(),dl:'Download SVG',
  tips:[['Instant checks','Well-formedness, namespace, viewBox, duplicate ids, broken references and more.'],['Security hints','Flags scripts, event handlers and external resources.']],
  faq:['Is this an official W3C validator?','It checks the most common real-world problems locally in your browser; it is not a full schema validator.']}),
 U('SVG to Data URI Converter',{hue:222,subj:M.datauri,deco:'datauri',tool:'b64',variant:'datauri',sample:T.encodeIcon2(),dl:'Download Data URI',
  tips:[['Compact URL-encoded URIs','Defaults to the smaller URL-encoded form that works in CSS and HTML.'],['Base64 on demand','Switch to Base64 when a tool requires it.']],
  faq:['Where can I use a data URI?','In CSS background-image, <img src>, and anywhere a URL is accepted — no extra file request needed.']})
];

const main={kw:'PNG to SVG Converter',group:'raster',main:true,hue:258,subj:'butterfly',post:[],preset:'logo',params:{},inL:'PNG',sampleL:'a sample',sampleName:'sample.png'};
const all=[...raster,...exportPages,...util];
all.forEach(p=>{
  p.slug=p.kw.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
  if(p.group==='raster'){p.subject=S[p.subj]}else p.subject=p.subj;
});
main.subject=S.butterfly;main.slug='';
module.exports={all,main,raster,exportPages,util,D,S};
