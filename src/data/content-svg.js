// Per-page authored content: 5 SVG exporters + 13 SVG tools.
// art kinds: pix, grid, pal, wire, vec, mono, blur, alpha, code[lines], file[label,size], dims[w,h], crop, swap, compare[before,after], badge[text]
const C={};

/* ------------------------------------------------------------------ EXPORTERS */
C['svg-to-png-converter']={
 def:'An SVG to PNG converter renders vector shapes into a grid of pixels and saves them as a lossless PNG. Because the SVG is resolution-independent, you choose the output size and keep transparency.',
 how:[
  ['Read the SVG','The converter parses your SVG, reads its width, height and viewBox, and works out the natural size of the artwork.','DOMParser · viewBox','code:<svg viewBox="0 0 400 300">|<path fill="#6366f1" d="…"/>|</svg>'],
  ['Choose the output size','The Scale slider multiplies the natural size from 0.25× to 16×. A 400×300 SVG at 2.5× becomes a 1000×750 PNG.','Scale × natural size','dims:1000|750'],
  ['Rasterize in your browser','The browser’s own SVG renderer draws the artwork onto a canvas at the exact output size, so curves are anti-aliased at full resolution.','Canvas · drawImage','pix'],
  ['Encode a lossless PNG','The canvas is saved as PNG with its alpha channel, or filled with white, black or a custom color first if you prefer.','Canvas · toBlob PNG','file:PNG|lossless']],
 why:['Why export from SVG to PNG',[['Any resolution','You can render the same SVG at 64 px for a thumbnail or at 4096 px for print, with identical sharpness.'],['Transparency is kept','Empty areas of the SVG stay transparent unless you choose a background fill.'],['A pixel inspector','Hover the preview to see the exact color and alpha of any pixel.']]],
 pdef:'Four steps turn an SVG into a PNG. The scale you choose decides the pixel size.',
 steps:[['Add your SVG','Drop an .svg file, paste SVG code anywhere on the page, or press the sample button.','You can also edit the code in the box.'],['Set the scale','Pick 1× for the natural size, 2× for retina screens, or 4× and above for print.','The pixel dimensions update live.'],['Choose the background','Leave it transparent, or fill with white, black or a custom color.','Transparent PNGs work on any page color.'],['Download the PNG','Press Download PNG to save the file.','The file is rendered on your device.']],
 cdef:'The table lists common PNG export targets. The chart shows that pixel count grows with the square of the scale, which is why large scales make large files.',
 table:{cap:'SVG to PNG Converter settings by use',cols:['Use','Scale','Background','Typical output'],rows:[['Web icon','1×','Transparent','Natural size, e.g. 64×64'],['Retina or high-density screens','2×','Transparent','Twice the natural size'],['Social media post image','To 1200 px wide','White','1200×630 target'],['App store icon','To 1024 px','Opaque','1024×1024'],['Print or poster','4×–8×','White','Very large, check file size']]},
 bars:{title:'Relative pixel count by scale',cap:'Pixels grow with the square of the scale: 4× has 16 times the pixels of 1×.',rows:[['1×',1],['2×',4],['4×',16],['8×',64]],max:64,unit:'×'},
 faq:[['What size should I export an SVG to PNG at?','Use 1× for the natural size, 2× for retina screens and 4× or more for print. The exact pixel dimensions are shown under the Scale slider.'],['Will the PNG keep a transparent background?','Yes, by default. Choose White, Black or Custom if you want a solid fill instead.'],['Why is my PNG much larger than the SVG?','An SVG stores shapes, while a PNG stores every pixel. A 1000×750 PNG contains 750,000 pixels, so it is almost always larger than the SVG source.'],['Are my files uploaded?','No. The SVG is rendered by your own browser, and the PNG is created locally.'],['What if my SVG renders blank?','Make sure it has a valid width, height or viewBox and no external resources such as linked images, which browsers do not load inside a standalone SVG image.']]
};

C['svg-to-jpg-converter']={
 def:'An SVG to JPG converter renders vector artwork as a compressed photo-style image. JPG has no transparency, so the converter fills the background and lets you trade quality against file size.',
 how:[
  ['Read the SVG','The converter parses the SVG and finds its natural size from the width, height or viewBox.','DOMParser · viewBox','code:<svg viewBox="0 0 400 300">|<rect fill="url(#sky)"/>|</svg>'],
  ['Fill the background','JPG cannot store transparency, so the canvas is filled with white, black or your custom color before the artwork is drawn.','Canvas · fillRect','alpha'],
  ['Rasterize at your scale','The artwork is drawn at the chosen scale from 0.25× to 16×, anti-aliased by the browser.','Canvas · drawImage','pix'],
  ['Compress as JPG','The canvas is encoded with the quality you set, from 10% to 100%. Lower quality gives a smaller file with more blocky artifacts.','Canvas · toBlob JPEG','file:JPG|quality 92%']],
 why:['Why export an SVG as a JPG',[['Smaller than PNG for photos','Gradient-heavy artwork compresses well as JPG, which suits web pages and email.'],['Works everywhere','JPG is accepted by every upload form and editor.'],['Quality is adjustable','Drag the quality slider and watch the file size change instantly.']]],
 pdef:'Four steps turn an SVG into a JPG. Because JPG is opaque, the background matters.',
 steps:[['Add your SVG','Drop a file, paste code or press the sample button.','Check the preview for the right crop.'],['Pick the background','White is the usual choice. Use black or a custom color to match your page.','Transparent areas cannot exist in JPG.'],['Set scale and quality','Use 2× for sharper screens and quality 85–92% for a good balance.','Watch the size tile as you move the slider.'],['Download the JPG','Press Download JPG to save the file.','Rendered on your device.']],
 cdef:'The table lists JPG export targets. The chart shows how quality affects file size.',
 table:{cap:'SVG to JPG Converter settings by use',cols:['Use','Scale','Quality','Background'],rows:[['Web hero image','1×–2×','80–85%','White or brand color'],['Email attachment','1×','75–85%','White'],['Print proof','4×','92–100%','White'],['Social sharing','To 1200 px wide','85–90%','White'],['Thumbnail','0.5×','70–80%','White']]},
 bars:{title:'Relative file size by JPG quality',cap:'Guide: higher quality keeps more detail and creates a larger file.',rows:[['Quality 100%',5],['Quality 92%',4],['Quality 75%',3],['Quality 50%',2]]},
 faq:[['Why does my SVG get a white background as JPG?','JPG does not support transparency, so transparent areas must be filled. Choose a different fill color if white does not suit you.'],['What JPG quality should I choose?','85–92% is a good balance for most artwork. Go lower to save space or higher for print proofs.'],['Is JPG better than PNG for SVG exports?','JPG is smaller for gradients and photo-like art. PNG is better for sharp edges, text and transparency.'],['Why do I see fuzzy edges around text?','JPG compression blurs sharp edges. Use a higher quality or export PNG for line art and text.'],['Are my files uploaded?','No. Everything is rendered and compressed in your browser.']]
};

C['svg-to-webp-converter']={
 def:'An SVG to WebP converter renders vector artwork into a modern, compact image format that supports both quality control and transparency.',
 how:[
  ['Read the SVG','The converter parses the SVG and reads its natural size from the width, height or viewBox.','DOMParser · viewBox','code:<svg viewBox="0 0 400 300">|<path fill="#35b36d" d="…"/>|</svg>'],
  ['Pick a background','WebP can keep transparency, so you can leave the background empty or fill it with white, black or a custom color.','Canvas · optional fill','alpha'],
  ['Rasterize at the chosen scale','The browser draws the artwork at the scale you set, from 0.25× to 16×.','Canvas · drawImage','pix'],
  ['Encode as WebP','The canvas is encoded at your quality setting. WebP reaches the same visual quality as JPG or PNG at a smaller size for many images.','Canvas · toBlob WebP','file:WebP|quality 92%']],
 why:['Why export an SVG as WebP',[['Small files','WebP is typically lighter than PNG and JPG for web graphics.'],['Transparency and quality','Unlike JPG, WebP can keep an alpha channel while still using adjustable quality.'],['Modern browsers','All current browsers display WebP, so it is a safe choice for websites.']]],
 pdef:'Four steps turn an SVG into a WebP. Start at quality 90% and lower it until the size is right.',
 steps:[['Add your SVG','Drop a file, paste code, or press the sample button.','Use a clean, valid SVG.'],['Choose the background','Keep it transparent for stickers and logos, or fill it for page backgrounds.','Transparent WebP works on any color.'],['Set scale and quality','Use 2× for retina screens and 80–92% quality as a starting point.','The size tile updates live.'],['Download the WebP','Press Download WebP to save the file.','Rendered locally.']],
 cdef:'The table lists WebP export uses. The chart shows how quality affects size.',
 table:{cap:'SVG to WebP Converter settings by use',cols:['Use','Scale','Quality','Background'],rows:[['Website graphic','1×–2×','80–90%','Transparent'],['Sticker or logo','2×','90–100%','Transparent'],['Blog image','1×','80%','White'],['App asset','2×–3×','90%','Transparent'],['Thumbnail','0.5×','70–80%','White']]},
 bars:{title:'Relative file size by WebP quality',cap:'Guide: higher quality creates a larger file.',rows:[['Quality 100%',5],['Quality 92%',4],['Quality 75%',3],['Quality 50%',2]]},
 faq:[['Does WebP keep transparency?','Yes. Leave the background set to None and the exported WebP keeps its alpha channel.'],['Is WebP smaller than PNG?','Often, especially for gradients and photo-like art. For tiny flat icons the difference may be small.'],['Which browsers support WebP?','All modern browsers do. For very old systems export PNG or JPG instead.'],['What quality should I use?','80–92% is a good balance. Lower it until the size tile reaches your target.'],['Are my files uploaded?','No. The SVG is rendered and encoded in your browser.']]
};

C['svg-to-pdf-converter']={
 def:'An SVG to PDF converter places your artwork on a PDF page. This tool embeds a high-resolution image of the SVG, so it is best for sharing, printing and attaching rather than for editing the paths.',
 how:[
  ['Read the SVG','The converter parses the SVG and finds its natural size from the width, height or viewBox.','DOMParser · viewBox','code:<svg viewBox="0 0 400 300">|<rect x="90" y="16" …/>|</svg>'],
  ['Rasterize at high resolution','The artwork is drawn on a canvas at your chosen scale and filled with white, because PDF images in this tool are opaque.','Canvas · white fill','pix'],
  ['Lay out the page','You choose Fit image, A4 or Letter and a margin in millimeters. The image is scaled to fit and centered on the page.','Page size · margin','dims:595|842'],
  ['Write the PDF','The image is stored as a 95%-quality JPEG inside a valid one-page PDF that opens in any reader.','PDF 1.4 · DCTDecode','file:PDF|1 page']],
 why:['What to expect from this PDF',[['A real PDF file','It opens in every PDF reader and can be attached, printed or shared.'],['Raster inside','The artwork is embedded as a sharp image, not as editable paths. Raise the scale for sharper print.'],['Standard page sizes','Choose A4 (595×842 pt), US Letter (612×792 pt) or a page that exactly fits the artwork.']]],
 pdef:'Four steps turn an SVG into a PDF. Choose the page size first, then the scale.',
 steps:[['Add your SVG','Drop a file, paste code or press the sample button.','Check the preview shows the right area.'],['Choose the page','Pick Fit image for an exact-size page, or A4 or Letter for standard paper.','Set a margin for printing.'],['Set the scale for print','Use 3× or higher for sharp print. See the table for the pixel size needed per resolution.','Higher scale makes a larger file.'],['Download the PDF','Press Download PDF to save a one-page document.','Rendered locally.']],
 cdef:'The table gives the pixel size an A4 page needs at common print resolutions. The chart shows relative pixel counts.',
 table:{cap:'SVG to PDF Converter pixel sizes for an A4 page',cols:['Print resolution','Pixels for A4','Use'],rows:[['72 dpi','595 × 842','Screen viewing'],['150 dpi','1240 × 1754','Draft printing'],['300 dpi','2480 × 3508','Standard print quality'],['600 dpi','4960 × 7016','Fine art or large prints']]},
 bars:{title:'Relative pixel count by print resolution',cap:'Pixels grow with the square of the resolution: 300 dpi has about 17 times the pixels of 72 dpi.',rows:[['72 dpi',1],['150 dpi',4.3],['300 dpi',17.3],['600 dpi',69.3]],max:70,unit:'×'},
 faq:[['Is the PDF vector or raster?','This converter embeds a high-resolution image of your SVG, so the PDF is raster. Increase the scale for sharper print output.'],['Which page sizes are supported?','Fit image, A4 (595×842 pt) and US Letter (612×792 pt), with an adjustable margin.'],['Why is my PDF large?','A higher scale means more pixels. Lower the scale until the file size is right for sharing.'],['Is the background transparent?','No. PDF images here are drawn on white, because a JPEG inside the PDF has no alpha channel.'],['Are my files uploaded?','No. The PDF is built in your browser.']]
};

C['svg-to-ico-converter']={
 def:'An SVG to ICO converter turns an SVG into a multi-size icon file for favicons and Windows shortcuts. Each size is rendered separately from the vector, so every size is sharp.',
 how:[
  ['Read the SVG','The converter parses the SVG and works out its natural proportions.','DOMParser · viewBox','code:<svg viewBox="0 0 400 300">|<rect rx="60" fill="#ffb703"/>|</svg>'],
  ['Render each icon size','Every size you tick, from 16 to 256 px, is rendered from the vector on its own canvas, scaled to fit a square with transparent margins.','Canvas · one per size','grid'],
  ['Encode each as PNG','Each size is compressed as a PNG, which keeps transparency and is supported by modern Windows and browsers.','Canvas · toBlob PNG','pix'],
  ['Pack into one ICO','The PNG images are combined into a single ICO file with a directory that lists every embedded size.','ICO directory · PNG payload','file:ICO|multi-size']],
 why:['Why export an SVG as ICO',[['Sharp at every size','Each size is drawn from the vector, not shrunk from one big bitmap.'],['One file','A single favicon.ico carries 16, 32, 48 and larger sizes.'],['See every size','The preview shows each embedded size pixel-for-pixel before you download.']]],
 pdef:'Four steps turn an SVG into an ICO. Choose the sizes your target needs.',
 steps:[['Add your SVG','Drop a file, paste code or press the sample button. Square artwork works best.','Non-square art is centered.'],['Tick the sizes','16, 32 and 48 px cover browsers. Add 64, 128 and 256 for Windows shortcuts.','Each size adds to the file.'],['Check the previews','Look at each rendered size. Small sizes may need simpler artwork.','16 px loses fine detail.'],['Download the ICO','Press Download ICO to save the file.','Rendered locally.']],
 cdef:'The table shows what each ICO size is used for. The chart shows how pixel counts grow with size.',
 table:{cap:'SVG to ICO Converter sizes and where they are used',cols:['Size','Typical use','Note'],rows:[['16×16','Browser tab favicon','Keep artwork very simple'],['32×32','Retina tab, taskbar','Common second size'],['48×48','Windows desktop icon','Used in older Windows views'],['64×64','Medium icon','Optional'],['128×128','Large icon','Optional'],['256×256','Windows large icon','Stored as PNG']]},
 bars:{title:'Relative pixel count by icon size',cap:'Pixels grow with the square of the size: 256 px has 256 times the pixels of 16 px.',rows:[['16 px',1],['32 px',4],['64 px',16],['128 px',64],['256 px',256]],max:256,unit:'×'},
 faq:[['Which sizes should I include in a favicon?','16, 32 and 48 px cover browsers. Add 256 px if the icon will also be used as a Windows shortcut.'],['Can I use the SVG directly as a favicon?','Modern browsers support SVG favicons, but an ICO still works everywhere, including older systems.'],['Why does my 16 px icon look rough?','At 16 pixels there is very little room. Simplify the artwork and use thicker shapes.'],['Is transparency kept?','Yes. Each size is stored as a PNG with alpha.'],['Are my files uploaded?','No. The ICO is built in your browser.']]
};

/* ------------------------------------------------------------------ SVG TOOLS */
C['svg-compressor']={
 def:'An SVG compressor makes an SVG file smaller by removing hidden data and rounding numbers. This one starts at an aggressive 1-decimal precision, so it is aimed at the smallest possible file.',
 how:[
  ['Measure the original','The converter reads the SVG and records its size, so every saving can be measured against it.','String length · bytes','code:<svg xmlns:inkscape="…">|<metadata>…</metadata>|<path d="M200.000000 …"/>'],
  ['Strip hidden data','The XML declaration, DOCTYPE, metadata block, editor attributes, comments and the title and description are removed.','Regex passes','compare:Before|After'],
  ['Round the numbers','Path and shape coordinates are rounded to 1 decimal place by default. For most artwork the change is invisible, and it shortens every number.','Precision 1 · round','code:d="M200.000000 150.000000"|d="M200 150"'],
  ['Report real savings','The result is shown with a bytes-saved chart per step and the true gzip size, which is what browsers receive over the network.','CompressionStream · gzip','file:SVG|smaller']],
 why:['What makes compression aggressive',[['Number precision','Dropping to 1 decimal saves the most bytes, but very fine geometry can shift slightly.'],['Title and description removed','These are removed here for size. Keep them if screen readers need them.'],['Gzip estimate','The gzip figure shows what visitors actually download.']]],
 pdef:'Four steps compress an SVG. Compare the before and after previews to make sure it still looks identical.',
 steps:[['Add your SVG','Drop a file, paste code or press the sample button. Editor exports such as Inkscape and Illustrator shrink the most.','The sample is full of editor data.'],['Check the precision','Keep Number precision at 1 for maximum compression, or raise it for detailed art.','Watch the preview for shifts.'],['Choose what to remove','Keep the toggles for comments, metadata and colors on. Turn title and desc off if you need accessibility text.','Each toggle changes the chart.'],['Download the compressed SVG','Press Download to save the smaller file.','Everything runs locally.']],
 cdef:'The table lists the compression levels and what each removes. The chart shows how much each step typically contributes to an editor-exported SVG.',
 table:{cap:'SVG Compressor settings by goal',cols:['Goal','Number precision','Title and desc','Risk'],rows:[['Smallest possible file','0–1 decimals','Removed','Fine detail may shift'],['Web icons','1–2 decimals','Removed','Very low'],['Illustrations','2–3 decimals','Kept','Low'],['Technical drawings','4+ decimals or off','Kept','None']]},
 bars:{title:'Typical contribution to the savings (editor-exported SVG)',cap:'Guide: precision rounding and editor data tend to save the most; the exact split is shown for your file.',rows:[['Number precision',5],['Editor data and metadata',4],['Whitespace',3],['Comments',2],['Color shortening',1]]},
 faq:[['How much smaller can an SVG get?','Editor-exported files commonly shrink by half or more. The exact saving for your file is shown in the Result tile and the savings chart.'],['Will compression change how my SVG looks?','At 1-decimal precision, simple artwork looks identical. Check the before and after previews, and raise precision if fine detail shifts.'],['What is the gzipped size?','It is the size after gzip compression, which is what most web servers send. It is usually much smaller than the raw size.'],['Should I remove the title and description?','Only if you do not need accessibility text. Screen readers use them to describe the image.'],['What is the difference between the SVG Compressor and the SVG Optimizer?','This compressor starts at a more aggressive precision and removes the title and description. The <a href="../svg-optimizer/">SVG Optimizer</a> is gentler by default.']]
};

C['svg-optimizer']={
 def:'An SVG optimizer cleans an SVG of everything a browser does not need, shrinking the file while keeping the artwork identical. This one defaults to 3-decimal precision, which is safe for nearly all graphics.',
 how:[
  ['Parse and measure','The SVG is read and its size is recorded so each step’s saving can be calculated exactly.','String length · bytes','code:<?xml version="1.0"?>|<!-- Created with Inkscape -->|<svg …>'],
  ['Remove what browsers ignore','The XML declaration, DOCTYPE, metadata, editor attributes and comments are stripped, along with empty defs.','Regex passes','compare:Before|After'],
  ['Shorten the values','Hex colors such as #ffffff become #fff, rgb() values become hex, and numbers are rounded to 3 decimals.','Color shortening · precision 3','swap'],
  ['Collapse whitespace and report','Whitespace between tags is removed, and a chart shows where every saved byte came from.','Whitespace · gzip estimate','bars:Metadata|Numbers|Whitespace']],
 why:['Why this optimizer is the safe default',[['3-decimal precision','Three decimals keep geometry accurate for almost all artwork while still shortening long numbers.'],['Titles kept','The title and description are kept by default so accessibility is not harmed.'],['Visible proof','Original and optimized previews sit side by side so you can see they match.']]],
 pdef:'Four steps optimize an SVG. The default settings are safe, so you can often just download the result.',
 steps:[['Add your SVG','Drop a file, paste code or press the sample button.','Editor exports shrink the most.'],['Compare the previews','Look at the Original and Optimized previews. They should look identical.','If they differ, raise precision.'],['Adjust the options','Toggle comments, metadata, color shortening and whitespace, and set precision from 0 to off.','The savings chart updates with every change.'],['Download the optimized SVG','Press Download to save the cleaned file.','Rendered locally.']],
 cdef:'The table lists optimization options and their safety. The chart shows the typical contribution of each.',
 table:{cap:'SVG Optimizer options and what they do',cols:['Option','What it removes or changes','Visual risk'],rows:[['Strip metadata and editor data','XML declaration, DOCTYPE, metadata, editor attributes','None'],['Remove comments','HTML-style comments','None'],['Shorten colors','#aabbcc to #abc, rgb() to hex','None'],['Number precision','Extra decimals in coordinates','Low at 2–3 decimals'],['Collapse whitespace','Spaces and line breaks between tags','None'],['Remove title and desc','Accessibility text','None visually, hurts accessibility']]},
 bars:{title:'Typical contribution to the savings (editor-exported SVG)',cap:'Guide: the exact split for your file is shown in the chart.',rows:[['Editor data and metadata',5],['Number precision',4],['Whitespace',3],['Comments',2],['Color shortening',1]]},
 faq:[['Will optimizing change how my SVG looks?','With the default settings it should look identical. Compare the Original and Optimized previews to be sure.'],['What does the optimizer remove?','The XML declaration, DOCTYPE, metadata, editor-specific attributes, comments and extra whitespace, and it shortens colors and rounds numbers.'],['What number precision is safe?','Three decimals are safe for almost all artwork. Use more for technical drawings and fewer for simple icons.'],['Does it keep the title and description?','Yes by default, because they help accessibility. You can switch the option on to remove them.'],['How is this different from the SVG Minifier?','The <a href="../svg-minifier/">SVG Minifier</a> is lossless by default and leaves numbers untouched. The optimizer also rounds numbers for extra savings.']]
};

C['svg-resizer']={
 def:'An SVG resizer changes the width and height of an SVG without changing its shapes. Because SVG is vector, enlarging or shrinking it never loses quality.',
 how:[
  ['Read the natural size','The resizer parses the SVG and reads its width, height and viewBox to find the starting size.','DOMParser · viewBox','dims:400|300'],
  ['Calculate the new size','You set a width, a height or a scale percentage from 5% to 800%. With aspect lock on, changing one value updates the other.','Aspect ratio lock','dims:800|600'],
  ['Write the dimensions','Only the width and height attributes change. If the SVG had no viewBox, one is added so the artwork scales instead of being cropped.','width · height · viewBox','code:<svg width="400" height="300">|<svg width="800" height="600" viewBox="0 0 400 300">'],
  ['Show the comparison','A diagram draws the original size as a dashed box and the new size as a filled box so you can see the change at a glance.','Proportional preview','compare:Original|Resized']],
 why:['Why resizing SVG is lossless',[['Shapes are untouched','Only two attributes change, so there is no resampling and no quality loss.'],['The viewBox does the scaling','The viewBox maps the drawing to whatever size you choose.'],['Quick sizes','Preset widths from 16 to 1024 px are one click away.']]],
 pdef:'Four steps resize an SVG. Lock the aspect ratio unless you intend to stretch it.',
 steps:[['Add your SVG','Drop a file, paste code or press the sample button.','The original size is shown.'],['Set the new size','Type a width or height, drag the scale slider, or press a quick-size button.','Aspect lock keeps proportions.'],['Check the preview','The dashed box is the original; the filled box is the new size.','The numbers in the tiles update.'],['Download the resized SVG','Press Download to save it.','Rendered locally.']],
 cdef:'The table lists common target sizes. The chart shows how the scale relates to the original area.',
 table:{cap:'SVG Resizer common target sizes',cols:['Use','Width','Note'],rows:[['Favicon','32 or 48 px','Keep the shape simple'],['Toolbar icon','24–32 px','Often with 2× for retina'],['App icon','512 or 1024 px','Store listing sizes'],['Open Graph image','1200 px','Social sharing width'],['Print','Any','Vectors scale without limit']]},
 bars:{title:'Relative area by scale',cap:'Area grows with the square of the scale: 200% has four times the area of 100%.',rows:[['50%',0.25],['100%',1],['200%',4],['400%',16]],max:16,unit:'×'},
 faq:[['Does resizing an SVG reduce quality?','No. Only the width and height change. The shapes stay mathematically exact at any size.'],['What if my SVG has no viewBox?','The resizer adds a viewBox based on the original size so the artwork scales instead of being clipped.'],['How do I keep the proportions?','Leave Lock aspect ratio on. Changing the width updates the height and vice versa.'],['Can I set an exact pixel size?','Yes. Type the width and height, or press a quick-size button such as 64 or 512.'],['Why doesn’t the file size change much?','SVG size depends on the shapes, not the display size. Use the <a href="../svg-optimizer/">SVG Optimizer</a> to reduce bytes.']]
};

C['svg-cropper']={
 def:'An SVG cropper changes the visible area of an SVG by editing its viewBox. You drag a crop box over the artwork, and the SVG instantly shows only the part you chose.',
 how:[
  ['Read the viewBox','The cropper parses the SVG and reads its viewBox, which defines the drawing area in SVG units.','DOMParser · viewBox','crop'],
  ['Position the crop box','Drag the box to move it and drag its corners to resize. You can also type exact X, Y, width and height, or lock a 1:1, 4:3 or 16:9 aspect ratio.','Pointer events · aspect lock','crop'],
  ['Crop to content','One click measures the artwork, ignores any full-canvas background, adds a small margin and fits the crop box around what remains.','getBoundingClientRect','wire'],
  ['Rewrite the viewBox','The new viewBox is written, and the width and height are scaled to match so the SVG keeps its display scale.','viewBox · width · height','code:viewBox="0 0 400 300"|viewBox="115 80 170 140"']],
 why:['How SVG cropping works',[['Non-destructive','Shapes outside the crop are not deleted. They are simply hidden by the new viewBox.'],['Exact numbers','The crop is expressed in SVG units, so it is precise.'],['Aspect ratios','Lock 1:1 for avatars, 16:9 for banners and 4:3 for slides.']]],
 pdef:'Four steps crop an SVG. Crop to content is the fastest way to remove empty space.',
 steps:[['Add your SVG','Drop a file, paste code or press the sample button. The sample has plenty of empty space.','The crop box starts at the full canvas.'],['Crop to content','Press Crop to content to trim the empty space automatically.','Or drag the box yourself.'],['Fine-tune the box','Drag the corners, or type exact values. Choose an aspect ratio if you need one.','The kept-area tile shows the percentage kept.'],['Download the cropped SVG','Press Download to save it.','Rendered locally.']],
 cdef:'The table lists aspect ratios and where to use them. The chart shows how much area is kept at different crop sizes.',
 table:{cap:'SVG Cropper aspect ratios and uses',cols:['Aspect ratio','Shape','Common use'],rows:[['Free','Any','Trim to content'],['1:1','Square','Avatars and app icons'],['4:3','Landscape','Slides and thumbnails'],['16:9','Wide','Banners and video thumbnails']]},
 bars:{title:'Share of canvas kept by crop width',cap:'Cropping both width and height shrinks the kept area quickly: half the width and half the height keeps a quarter of the canvas.',rows:[['100% × 100%',1],['75% × 75%',0.56],['50% × 50%',0.25],['25% × 25%',0.06]],max:1,unit:''},
 faq:[['Does cropping delete parts of my SVG?','No. It changes the viewBox, so shapes outside the crop are hidden but remain in the file.'],['How do I remove empty space around a drawing?','Press Crop to content. It fits the crop box around the artwork and ignores a full-canvas background.'],['Can I type exact crop values?','Yes. The X, Y, Width and Height boxes use SVG units.'],['Why does my crop look different in another app?','Some apps ignore the viewBox. Test the cropped file in your target app.'],['Can I keep a specific aspect ratio?','Yes. Choose 1:1, 4:3 or 16:9 and the box keeps that ratio while you resize.']]
};

C['svg-color-changer']={
 def:'An SVG color changer finds every fill, stroke and gradient color in an SVG and lets you replace them. You can recolor one color at a time or apply a hue shift, invert or grayscale to the whole file.',
 how:[
  ['Scan for colors','The tool reads fill, stroke, stop-color, flood-color and lighting-color from attributes, inline styles and style blocks, and counts how often each color is used.','DOM walk · style parsing','swap'],
  ['Build the color list','Every unique color is listed with its usage count. Named colors, rgb() and hex are all normalised to hex.','Color normalisation','pal'],
  ['Remap colors','Pick a new color for any entry, or apply a global effect: a hue shift from 0° to 360°, invert or grayscale. Your own picks override the effect.','Hue shift · invert · gray','compare:Original|Recolored'],
  ['Write the new SVG','The remapped colors are written back to the same attributes, so the structure of the SVG is unchanged.','DOM serialize','code:fill="#f97316"|fill="#16a34a"']],
 why:['What the color changer covers',[['Gradients too','Gradient stops are recolored like any other color.'],['Global effects','A hue shift recolors an entire palette consistently in one move.'],['Per-color control','Change a single color without touching the others.']]],
 pdef:'Four steps recolor an SVG. Start with a global effect, then fine-tune individual colors.',
 steps:[['Add your SVG','Drop a file, paste code or press the sample button.','The color list appears at once.'],['Try a quick effect','Drag Hue shift, switch on Invert, or turn on Grayscale.','The recolored preview updates instantly.'],['Fine-tune single colors','Click a color’s swatch to pick a replacement.','Changes override the global effect.'],['Download the recolored SVG','Press Download to save it.','Rendered locally.']],
 cdef:'The table lists the color properties the tool changes. The chart compares how many places each property typically appears.',
 table:{cap:'SVG Color Changer properties that are recolored',cols:['Property','Where it appears','Recolored'],rows:[['fill','Shapes and text','Yes'],['stroke','Outlines and lines','Yes'],['stop-color','Gradient stops','Yes'],['flood-color and lighting-color','Filters','Yes'],['Colors in style attributes and style blocks','CSS inside the SVG','Yes'],['Colors from external CSS','Outside the file','No']]},
 bars:{title:'Where colors usually live in an SVG',cap:'Guide: fills are the most common place, followed by strokes and gradient stops.',rows:[['fill',5],['stroke',3],['stop-color',2],['filters',1]]},
 faq:[['Can I recolor gradients?','Yes. Gradient stop colors are detected and remapped like any other color.'],['What does the hue shift do?','It rotates every color around the color wheel by the number of degrees you set, which keeps the relationships between colors.'],['Does it change CSS in a style block?','Yes. Colors in inline style attributes and in style blocks inside the SVG are updated.'],['Why was a color not listed?','Colors from external stylesheets, currentColor and url() references are not detected.'],['How do I undo my changes?','Press Reset colors in the list, or press Reset at the top to reload the sample.']]
};

C['svg-background-remover']={
 def:'An SVG background remover finds the full-canvas shape that acts as a background and deletes it, so the SVG becomes transparent.',
 how:[
  ['Mount and measure','The SVG is placed off-screen so the browser can measure the real size of every shape.','getBBox · viewBox','code:<svg viewBox="0 0 400 300">|<rect width="400" height="300" fill="#fff"/>'],
  ['Find background candidates','A shape counts as a background if it is filled, sits near the top level and covers at least 85% of the canvas.','Coverage ≥ 85%','crop'],
  ['Choose what to remove','The first candidate is selected by default. You can tick or untick each, and clear a background set in the root style attribute.','Checkbox list','swap'],
  ['Show before and after','The before view sits on a backdrop color of your choice, and the after view sits on a transparency checkerboard.','Backdrop · checkerboard','compare:Before|After']],
 why:['How detection works',[['Measured, not guessed','Real bounding boxes are used, so rotated and transformed shapes are handled.'],['You stay in control','Every detected background is listed, and removal is optional per shape.'],['Root styles','A background set through style="background:…" on the svg tag is cleared too.']]],
 pdef:'Four steps remove an SVG background. The preview shows exactly what will go.',
 steps:[['Add your SVG','Drop a file, paste code or press the sample button. The sample has a white rectangle behind a logo.','The list of candidates appears.'],['Review the candidates','Each is shown with its tag, fill and coverage. Untick any you want to keep.','The first is ticked by default.'],['Compare before and after','Change the backdrop color to see the background clearly.','The after view shows transparency.'],['Download the transparent SVG','Press Download to save it.','Rendered locally.']],
 cdef:'The table lists the kinds of background the tool handles. The chart shows how coverage decides a candidate.',
 table:{cap:'SVG Background Remover: what is detected',cols:['Background type','Detected','Note'],rows:[['Full-canvas rect','Yes','The most common case'],['Full-canvas path','Yes','Common in exported files'],['Full-canvas circle or ellipse','If it covers 85%+','Rare'],['style="background:…" on svg','Yes','Cleared with one switch'],['Gradient background','Yes if it covers the canvas','Removed like a solid one'],['Backgrounds from external CSS','No','Not inside the SVG']]},
 bars:{title:'Coverage needed for detection',cap:'A shape counts as a background only above the coverage threshold.',rows:[['Small shape (20%)',0.2],['Large shape (60%)',0.6],['Detected (85%)',0.85],['Full canvas (100%)',1]],max:1,unit:''},
 faq:[['What counts as a background?','A filled shape near the top level that covers at least 85% of the canvas.'],['What if no background is found?','The SVG may already be transparent. You can also edit the code in the input box.'],['Can I keep part of the background?','Yes. Untick any candidate you want to keep.'],['Does it remove shapes that only look like a background?','Only the shapes you tick. Review the list before you download.'],['Will the logo itself be affected?','No. Only the checked background shapes are removed.']]
};

C['svg-viewer']={
 def:'An SVG viewer shows an SVG exactly as a browser renders it, with zoom, pan, background options and a breakdown of what is inside the file.',
 how:[
  ['Parse the SVG','The viewer reads your SVG, strips anything unsafe such as scripts and event handlers, and prepares it for display.','DOMParser · sanitize','code:<svg viewBox="0 0 400 300">|<path d="…"/>|</svg>'],
  ['Render it','The artwork is drawn by the browser, so what you see matches what a web page would show.','Browser SVG renderer','vec'],
  ['Zoom and pan','Scroll to zoom up to 40× and drag to move around. The artwork stays sharp because it is vector.','Wheel zoom · drag pan','wire'],
  ['Report the contents','Dimensions, viewBox, element counts by type, colors and file size are shown alongside the preview.','Element census','bars:path|g|rect|circle']],
 why:['What the viewer shows you',[['The real render','It uses your browser’s renderer, not a guess.'],['Four backgrounds','Switch between checkerboard, white, gray and black to check contrast.'],['A content census','See how many paths, groups and shapes the file has.']]],
 pdef:'Four steps inspect an SVG. Zoom in to check fine details.',
 steps:[['Open your SVG','Drop a file, paste code or press the sample button.','Nothing is uploaded.'],['Choose a background','Use Checker for transparency, White or Black for contrast, or Gray for neutral.','The viewer updates immediately.'],['Zoom and pan','Scroll to zoom, drag to pan, or press Fit or Actual size.','Zoom to 40× to inspect curves.'],['Read the details','Check dimensions, viewBox, elements and colors.','Copy the code if you need it.']],
 cdef:'The table explains each detail the viewer reports. The chart compares typical element counts.',
 table:{cap:'SVG Viewer details and what they mean',cols:['Detail','What it tells you','Why it matters'],rows:[['Size','Declared width and height','The natural display size'],['viewBox','The drawing coordinate system','Controls scaling'],['Elements','Total nodes in the SVG','A rough complexity measure'],['Colors','Fills and strokes found','Palette overview'],['File size','Bytes of the SVG source','Page weight']]},
 bars:{title:'Typical elements in an SVG',cap:'Guide: most graphics are mostly paths and groups.',rows:[['path',5],['g',3],['rect',2],['circle',1]]},
 faq:[['Is my SVG uploaded?','No. The viewer runs entirely in your browser.'],['Why does the SVG look different in another app?','Apps differ in how they handle features such as filters and fonts. The viewer shows how a browser renders it.'],['How far can I zoom?','Up to 40×. Vector artwork stays sharp at any zoom level.'],['Does it run scripts in the SVG?','No. Scripts and event handlers are stripped before display for safety.'],['Can I edit the SVG here?','You can edit the code in the input box and the viewer updates. For editing shapes use a vector editor.']]
};

C['svg-to-base64-converter']={
 def:'An SVG to Base64 converter turns SVG code into a Base64 string you can embed directly in CSS, HTML or JSON. It also shows how much larger Base64 is than the original.',
 how:[
  ['Minify first (optional)','If enabled, comments, metadata and whitespace are removed before encoding, which shrinks the output.','Minify pass','compare:SVG|Minified'],
  ['Encode to Base64','The SVG text is converted to UTF-8 bytes and then to Base64, which uses 4 characters for every 3 bytes.','UTF-8 · btoa','code:<svg …>|PHN2ZyB4bWxucz0i…'],
  ['Wrap as you need','Choose raw output, a CSS background-image rule or an <img> tag, each with the data URI prefix.','data:image/svg+xml;base64,','code:background-image: url("data:image/svg+xml;base64,…")'],
  ['Compare the sizes','A chart shows the SVG, URL-encoded and Base64 sizes so you can choose the smallest option.','Size comparison','bars:SVG|URL-encoded|Base64']],
 why:['What to know about Base64 SVG',[['33% overhead','Base64 is always about a third bigger than the source.'],['Not human-readable','Unlike URL-encoded SVG, Base64 cannot be edited by eye.'],['Works everywhere','Base64 data URIs work in CSS, HTML, JSON and many tools.']]],
 pdef:'Four steps convert an SVG to Base64. Minifying first keeps the output small.',
 steps:[['Add your SVG','Drop a file, paste code or press the sample button.','The sample is a small icon.'],['Choose the wrapper','Pick Raw, CSS or <img> depending on where you will use it.','The output updates immediately.'],['Check the sizes','Look at the Base64 overhead tile.','Switch to URL-encoded if smaller.'],['Copy or download','Press Copy code to put it on the clipboard, or Download to save it as a text file.','Copying from the preview gives the full output.']],
 cdef:'The table lists where each wrapper is used. The chart compares the encodings.',
 table:{cap:'SVG to Base64 Converter output wrappers',cols:['Wrapper','Looks like','Use it in'],rows:[['Raw','data:image/svg+xml;base64,…','Any URL field'],['CSS','background-image: url("…");','Stylesheets'],['<img>','<img src="…" alt="">','HTML pages'],['Minify first','Smaller input','All of the above']]},
 bars:{title:'Relative size by encoding',cap:'Base64 is about 33% larger than the source; URL-encoded is usually smaller.',rows:[['SVG source',1],['URL-encoded',1.2],['Base64',1.33]],max:1.4,unit:'×'},
 faq:[['Why is the Base64 output larger?','Base64 turns every 3 bytes into 4 characters, so the output is about 33% larger than the SVG.'],['Is Base64 the best way to embed an SVG?','URL-encoded data URIs are often smaller and compress better. Compare the sizes shown.'],['Can I use the output in CSS?','Yes. Choose the CSS wrapper to get a ready-to-paste background-image rule.'],['Does it handle non-English characters?','Yes. The SVG is encoded as UTF-8 before Base64, so special characters are preserved.'],['Is my SVG uploaded?','No. The encoding happens in your browser.']]
};

C['svg-code-formatter']={
 def:'An SVG code formatter turns minified or messy SVG into neatly indented, readable markup. Only whitespace changes, so the SVG renders exactly the same.',
 how:[
  ['Tokenize the markup','The SVG text is split into tags, comments, text nodes and declarations without altering their content.','Regex tokenizer','code:<svg><g><path d="…"/></g></svg>'],
  ['Indent by nesting depth','Each opening tag increases the depth and each closing tag decreases it. You choose 2 spaces, 4 spaces or tabs.','Depth counter','code:<svg>|  <g>|    <path d="…"/>|  </g>|</svg>'],
  ['Wrap attributes (optional)','Elements with three or more attributes, or long lines, can have one attribute per line for easy diffing.','Attribute splitter','compare:One line|Wrapped'],
  ['Show the structure','A chart counts lines at each nesting depth, giving you a quick picture of how deep the SVG goes.','Depth histogram','bars:depth 1|depth 2|depth 3']],
 why:['Why format SVG code',[['Easier reading and diffs','Indented code makes structure and changes obvious.'],['Rendering is unchanged','Whitespace between tags does not affect how SVG renders.'],['Your style','Pick 2 spaces, 4 spaces or tabs to match your project.']]],
 pdef:'Four steps format an SVG. The preview confirms nothing changed visually.',
 steps:[['Paste your SVG code','Drop a file or paste code. A one-line export is a great test.','The input box shows your code.'],['Choose indentation','Pick 2 spaces, 4 spaces or tabs.','The output reformats instantly.'],['Wrap attributes if needed','Switch on One attribute per line for long tags.','Helps code review.'],['Copy or download','Press Copy code or Download.','Copying from the preview gives the full output.']],
 cdef:'The table lists formatting options. The chart explains the depth histogram.',
 table:{cap:'SVG Code Formatter options',cols:['Option','Values','Effect'],rows:[['Indentation','2 spaces, 4 spaces, tabs','Width of each nesting level'],['One attribute per line','Off or on','Splits long tags for readability'],['Text nodes','Kept inline when short','Keeps <text> readable'],['Comments','Kept','Formatting never deletes them']]},
 bars:{title:'Lines per nesting depth (example)',cap:'Most SVG lines sit at depth 2–3, inside groups.',rows:[['Depth 1',2],['Depth 2',5],['Depth 3',4],['Depth 4',1]]},
 faq:[['Does formatting change how my SVG renders?','No. Only whitespace between tags changes.'],['Can I choose tabs instead of spaces?','Yes. Pick Tabs in the Indentation control.'],['Will it fix invalid SVG?','No. Use the <a href="../svg-validator/">SVG Validator</a> to find problems.'],['Does it keep my comments?','Yes. Comments are left in place.'],['Is my code uploaded?','No. Formatting runs in your browser.']]
};

C['svg-minifier']={
 def:'An SVG minifier shrinks an SVG by removing whitespace, comments and metadata without changing any numbers. It is lossless by default, so the artwork stays exactly the same.',
 how:[
  ['Read the formatted SVG','The minifier reads indented SVG with spaces, line breaks and comments that browsers do not need.','String length','code:<svg>|  <!-- sky -->|  <rect …/>|</svg>'],
  ['Remove comments and metadata','Comments, the XML declaration, DOCTYPE, metadata and editor data are stripped.','Regex passes','compare:Before|Minified'],
  ['Collapse whitespace','Spaces and line breaks between tags are removed and repeated spaces are reduced, putting the whole SVG on one line.','Whitespace collapse','code:<svg><rect …/></svg>'],
  ['Leave the numbers alone','Number precision is off by default, so coordinates are not touched. You can switch it on for more savings.','Precision off','file:SVG|lossless']],
 why:['Why minify without rounding',[['Lossless','Nothing visual can change because no numbers are altered.'],['Predictable','The result is the same artwork, just fewer bytes.'],['Optional rounding','You can turn on precision if you accept tiny changes.']]],
 pdef:'Four steps minify an SVG. Lossless is the default.',
 steps:[['Add your SVG','Drop a file, paste code or press the sample button. The sample is a pretty-printed SVG with comments.','Formatted files shrink the most.'],['Check the previews','Original and minified previews should look identical.','They will, unless you round numbers.'],['Add rounding if you want','Lower Number precision for extra savings.','Off means lossless.'],['Download the minified SVG','Press Download to save it.','Rendered locally.']],
 cdef:'The table compares minifying with other options. The chart shows typical contributions.',
 table:{cap:'SVG Minifier compared with other options',cols:['Tool','Whitespace','Comments and metadata','Numbers'],rows:[['SVG Minifier (default)','Removed','Removed','Untouched'],['SVG Optimizer','Removed','Removed','Rounded to 3 decimals'],['SVG Compressor','Removed','Removed','Rounded to 1 decimal'],['SVG Code Formatter','Added','Kept','Untouched']]},
 bars:{title:'Typical contribution of lossless steps',cap:'Guide: whitespace is the largest saving in pretty-printed files.',rows:[['Whitespace',5],['Comments',3],['Metadata',2],['Color shortening',1]]},
 faq:[['Is minifying lossless?','Yes by default. Whitespace, comments and metadata are removed but numbers are not changed.'],['What is the difference between minifying and optimizing?','Minifying removes only what is unnecessary. The <a href="../svg-optimizer/">SVG Optimizer</a> also rounds numbers for extra savings.'],['Can I make the result even smaller?','Yes. Lower Number precision or use the <a href="../svg-compressor/">SVG Compressor</a>.'],['Will it break my SVG?','No. The previews should match, and you can compare them before downloading.'],['Is my SVG uploaded?','No. Minifying runs in your browser.']]
};

C['svg-metadata-remover']={
 def:'An SVG metadata remover finds and deletes the hidden data editors leave in SVG files, such as author names, software versions and file paths. It shows exactly what it found.',
 how:[
  ['Scan for hidden data','The tool counts XML declarations, metadata blocks, editor attributes, comments, titles and data attributes in your SVG.','Pattern counts','code:<metadata>…</metadata>|inkscape:version="1.2"|<!-- note -->'],
  ['Choose what to remove','Six switches control the removal: metadata, editor data, comments, XML declaration and DOCTYPE, title and desc, and data-* attributes.','Option switches','swap'],
  ['Strip the data','Each enabled category is removed in turn, and the size saved by each is measured.','Regex passes','compare:Before|Clean'],
  ['Show the findings','A table lists every category with how many items were found and how many bytes were saved.','Per-category report','bars:metadata|editor|comments']],
 why:['Why remove SVG metadata',[['Privacy','Editors can embed names, dates, project notes and file paths.'],['Smaller files','Hidden data adds bytes with no visual benefit.'],['Cleaner code','The file contains only what draws the picture.']]],
 pdef:'Four steps clean an SVG of metadata. Review the table to see what was hiding.',
 steps:[['Add your SVG','Drop a file, paste code or press the sample button. The sample contains an author, comments and editor data.','See what is found.'],['Pick what to remove','Leave the first four switches on. Turn on title and desc or data-* attributes if needed.','Title removal hurts accessibility.'],['Read the report','The table shows each category and how many items were removed.','The before and after previews match.'],['Download the clean SVG','Press Download to save it.','Rendered locally.']],
 cdef:'The table lists categories and what each contains. The chart shows typical weights.',
 table:{cap:'SVG Metadata Remover categories',cols:['Category','What it contains','Removed by default'],rows:[['XML declaration and DOCTYPE','XML version and DTD reference','Yes'],['<metadata> block','RDF data, creator, license, dates','Yes'],['Editor data','Inkscape, Sodipodi, Illustrator and Sketch attributes','Yes'],['Comments','Notes and generator tags','Yes'],['Title and desc','Accessibility text','No'],['data-* attributes','Custom data from tools','No']]},
 bars:{title:'Typical share of hidden data',cap:'Guide: editor data and metadata are usually the heaviest.',rows:[['Editor data',5],['Metadata block',4],['Comments',2],['Declaration',1]]},
 faq:[['What hidden data does an SVG contain?','Editors such as Inkscape, Illustrator and Sketch can embed author names, software versions, project notes, dates and file paths.'],['Will removing metadata change how my SVG looks?','No. Metadata does not draw anything.'],['Should I remove the title and desc?','Only if you do not need accessibility text. Screen readers use them.'],['Does it remove ids?','No. IDs are kept because shapes and gradients may refer to them.'],['Is my file uploaded?','No. The cleaning runs in your browser.']]
};

C['svg-validator']={
 def:'An SVG validator checks an SVG for the most common real-world problems and gives a score. It runs locally in your browser and explains each issue in plain language.',
 how:[
  ['Parse as XML','The SVG is parsed as strict XML. If it is not well-formed, the parser error is shown and the checks stop.','DOMParser · image/svg+xml','code:<svg viewBox="0 0 400 300">|<path d="M0 0 …"/>'],
  ['Run structure checks','The tool looks for a correct xmlns, a viewBox, a size, a title, duplicate ids and broken url(#…) references.','Structure rules','bars:errors|warnings|notes'],
  ['Run safety checks','Scripts, inline event handlers and external resources are flagged because many platforms block them.','Safety rules','swap'],
  ['Score and explain','Errors cost 30 points, warnings 10 and notes 2. Each issue is explained with how to fix it.','Score ring','badge:100']],
 why:['What the validator checks',[['Errors','Invalid XML, wrong namespace, duplicate ids, broken references and invalid path data.'],['Warnings','Missing viewBox, inline event handlers, external resources and empty paths.'],['Notes','Missing size or title, and content before the svg tag.']]],
 pdef:'Four steps validate an SVG. Fix errors first, then warnings.',
 steps:[['Paste your SVG','Drop a file or paste code. The sample is full of deliberate problems.','Results appear as you type.'],['Read the score','The ring shows your score, and the label says Invalid, Valid with warnings or Valid SVG.','Errors drop the score fastest.'],['Fix the issues','Work through the list. Use Format the code to make the markup easier to read.','The score updates live.'],['Copy the corrected code','Copy or download your fixed SVG from the input box.','Everything runs locally.']],
 cdef:'The table lists each check, its severity and how to fix it. The chart shows the scoring weights.',
 table:{cap:'SVG Validator checks, severity and fixes',cols:['Check','Severity','How to fix'],rows:[['Not well-formed XML','Error','Close tags and quote attributes'],['Missing or wrong xmlns','Error','Add xmlns="http://www.w3.org/2000/svg"'],['Duplicate ids','Error','Make every id unique'],['Broken url(#id) reference','Error','Add the missing element or remove the reference'],['Missing viewBox','Warning','Add a viewBox for scaling'],['Script or event handler','Error or warning','Remove it'],['No title','Note','Add a <title> element']]},
 bars:{title:'Points deducted per issue',cap:'The score starts at 100. Each error removes 30 points, each warning 10 and each note 2.',rows:[['Error',30],['Warning',10],['Note',2]],max:30,unit:' pts'},
 faq:[['Is this an official W3C validator?','No. It checks the most common real-world problems locally in your browser. It is not a full schema validator.'],['What does the score mean?','It starts at 100 and drops by 30 per error, 10 per warning and 2 per note.'],['Why is a missing xmlns an error?','Without the SVG namespace, browsers may not treat the file as an SVG image.'],['Why are scripts flagged?','Many platforms block scripts in SVGs for security, so uploads may be rejected.'],['Are my files uploaded?','No. All checks run in your browser.']]
};

C['svg-to-data-uri-converter']={
 def:'An SVG to Data URI converter turns SVG code into a data: URL you can use anywhere a URL is accepted. This one defaults to the compact URL-encoded form rather than Base64.',
 how:[
  ['Minify first (optional)','Comments, metadata and whitespace are removed so the data URI is as short as possible.','Minify pass','compare:SVG|Minified'],
  ['URL-encode the SVG','The SVG is percent-encoded with only the necessary characters escaped. Quotes become single quotes so it fits inside CSS url("…").','encodeURIComponent · tidy','code:data:image/svg+xml,%3Csvg …|data:image/svg+xml,<svg …'],
  ['Choose the form','Switch between URL-encoded and Base64, and wrap the result as raw text, a CSS rule or an <img> tag.','Raw · CSS · img','code:background-image: url("data:image/svg+xml,…")'],
  ['Compare the sizes','A chart shows how the URL-encoded and Base64 forms compare to the original SVG.','Size comparison','bars:SVG|URL-encoded|Base64']],
 why:['Why use a data URI',[['No extra request','The image is part of the CSS or HTML, so the browser needs no separate file.'],['Compact when URL-encoded','URL-encoded SVG is usually smaller than Base64 and compresses better with gzip.'],['Works in CSS and HTML','Use it in background-image, img src and many other places.']]],
 pdef:'Four steps convert an SVG to a data URI. Keep Minify on for the shortest result.',
 steps:[['Add your SVG','Drop a file, paste code or press the sample button.','The sample is a small icon.'],['Pick the encoding','Keep URL-encoded for the smallest result, or switch to Base64 if a tool requires it.','Both show their size.'],['Choose the wrapper','Raw, CSS rule or <img> tag.','The output is ready to paste.'],['Copy the result','Press Copy code, or Download as a text file.','Copying from the preview gives the full output.']],
 cdef:'The table compares the encodings. The chart shows relative sizes.',
 table:{cap:'SVG to Data URI Converter encodings compared',cols:['Encoding','Typical size','Readable','Best for'],rows:[['URL-encoded','Close to the SVG','Mostly','CSS and HTML'],['Base64','About 33% larger','No','Tools that require Base64'],['Minified first','Smaller input','Mostly','Both']]},
 bars:{title:'Relative size by encoding',cap:'Base64 adds about a third; URL-encoded is usually smaller.',rows:[['SVG source',1],['URL-encoded',1.2],['Base64',1.33]],max:1.4,unit:'×'},
 faq:[['What is a data URI?','A data URI is a URL that contains the file itself, so no separate request is needed.'],['URL-encoded or Base64?','URL-encoded is usually smaller and compresses better. Use Base64 only if a tool requires it.'],['Where can I use a data URI?','In CSS background-image, in <img src>, and in any place that accepts a URL.'],['Why are the quotes single quotes?','So the URI can sit safely inside a double-quoted CSS url() or HTML attribute.'],['Is my SVG uploaded?','No. Encoding happens in your browser.']]
};

module.exports=C;
