// Per-page authored content for the 24 raster -> SVG converters.
// Shape: {def, how:[[title,text,tech,art]x4], why:[title,[[dt,dd]...]], pdef, steps:[[title,text,tip]x4],
//         cdef, table:{cap,cols,rows}, bars:{title,cap,rows}, faq:[[q,a]...]}
const C={};

C['jpg-to-svg-converter']={
 def:'A JPG to SVG converter re-draws a JPEG image as vector shapes. JPEGs carry compression noise around every edge, so this converter cleans that noise first and only then traces clean, scalable outlines.',
 how:[
  ['Decode the JPEG','Your browser decodes the JPG into pixels. JPEG has no transparency, so every pixel is opaque and the whole canvas becomes part of the trace.','Canvas · getImageData','pix'],
  ['Calm the compression noise','JPEG saves space by blurring detail into 8×8 blocks, which leaves halos and ringing near edges. Denoise and edge-pixel snapping merge those stray in-between colors back into the shapes they belong to.','Denoise blur · edge snapping','blur'],
  ['Pick the colors','A palette of up to 64 colors is chosen. Photo mode starts at 24 colors, enough to keep soft shading as bands without creating hundreds of layers.','Median cut · k-means','pal'],
  ['Trace, fit and render','Each color becomes a stacked layer, its sub-pixel outline is fitted with Bézier curves, and the layers are written as a compact SVG.','Marching squares · Bézier fit','vec']],
 why:['What is different about a JPG',[['Always opaque','There is no alpha channel, so a white or colored background is traced like any other shape. Turn on Remove background to clear a white backdrop.'],['Noise around edges','Lower-quality JPGs trace worse because ringing creates extra tiny shapes. Raise Remove specks or Denoise to absorb them.'],['Gradients become bands','Smooth skies and skin tones turn into stacked color steps. More colors give finer steps and a larger file.']]],
 pdef:'Converting a JPG to SVG takes four steps. The key choice is whether your JPG is flat artwork or a photograph, because that decides how many colors you need.',
 steps:[['Add your JPG','Drop the file, pick it with “Choose image”, or paste it. The sample is a deliberately compressed JPEG so you can see the clean-up at work.','A JPG saved at high quality traces best.'],['Choose flat or photo settings','Logos and icons saved as JPG need 4–8 colors. Photographs and scenes start at 24 colors and go up from there.','Use the Logo preset for flat art, Photo for pictures.'],['Reduce the noise','Increase Denoise to 1–2 px and Remove specks to 15–30 px² until stray flecks disappear while real details stay.','Compare with the split handle at 400% zoom.'],['Download the SVG','Save the SVG or copy its code. Flat artwork usually ends up far smaller than the JPG; photographs may not.','Check the size tile before you download.']],
 cdef:'The table lists starting values by what your JPG contains. The chart shows why the original JPEG quality matters so much for the trace.',
 table:{cap:'JPG to SVG Converter settings by JPG content',cols:['JPG content','Colors','Detail','Smoothness','Denoise','Remove specks','Result'],rows:[['Flat logo saved as JPG','4–8','70%','25–30%','1 px','20 px²','Crisp shapes'],['Cartoon or illustration','12–20','75%','45%','0.5–1 px','12 px²','Clean layers'],['Screenshot or diagram','6–12','80%','15–25%','0.5 px','8 px²','Sharp edges'],['Photograph','24–48','55–70%','50–60%','1 px','16–24 px²','Posterized art'],['Heavily compressed JPG','8–16','60%','60%','2 px','30 px²','Simplified shapes']]},
 bars:{title:'Trace quality by original JPEG quality',cap:'Guide, 1 (poor) to 5 (excellent): less compression noise gives a cleaner trace.',rows:[['Quality 90–100',5],['Quality 70–89',4],['Quality 40–69',3],['Below 40',2]]},
 faq:[['Why does my JPG have a white box around it in the SVG?','JPG cannot store transparency, so the white background is part of the picture and is traced as a shape. Switch on Remove background to clear a plain white backdrop, or use Mono mode to keep only dark ink.'],['Why do I see tiny blobs or speckles after converting?','They are JPEG compression artifacts. Raise Remove specks, add 1–2 px of Denoise, or lower the color count so near-identical shades merge into one layer.'],['Is a JPG or a PNG better as the source?','A PNG is better because it is lossless. If you only have a JPG, use the highest-quality copy available. See the main <a href="../">PNG to SVG Converter</a> for lossless sources.'],['Can I convert a photo JPG into a realistic SVG?','Not realistically. Vectors store flat color regions, so photographs become posterized artwork. Use 32–48 colors for more detail, or try the <a href="../photo-to-vector-converter/">Photo to Vector Converter</a>.'],['Will the SVG be smaller than my JPG?','For logos, icons and flat illustrations, usually yes. For photographs, often not, because many shapes are needed to approximate gradients. The size tile shows the exact result before you download.']]
};

C['webp-to-svg-converter']={
 def:'A WebP to SVG converter turns a WebP image into vector shapes. WebP can be lossy or lossless and can include transparency, and this converter reads both so the SVG keeps the same silhouette.',
 how:[
  ['Open the WebP','Current browsers decode WebP natively, so the file is read straight into the canvas without any upload. Animated WebP files use their first frame.','Canvas · native WebP decode','pix'],
  ['Respect the alpha channel','WebP can hold transparency. Pixels that are mostly transparent never become shapes, so the SVG has no background box.','Alpha threshold','alpha'],
  ['Reduce to a palette','Lossy WebP creates soft color halos like JPEG. The palette step merges those near-duplicate shades into a short list of real colors.','Median cut · color merge','pal'],
  ['Trace and render','Layers are stacked, outlines are traced at sub-pixel accuracy and fitted with Béziers, then written as clean SVG paths.','Marching squares · Bézier fit','vec']],
 why:['What is different about WebP',[['Transparency is common','Lossless WebP stickers and logos often have no background, which makes them ideal for tracing.'],['Lossy halos','Lossy WebP can leave faint color fringes. Remove specks and a slightly lower color count tidy them up.'],['Small sources, small SVGs','Flat WebP artwork usually becomes a very small SVG with only a few paths.']]],
 pdef:'Converting a WebP to SVG is a four-step job. Because WebP often has transparency, check the preview on the checkerboard before you download.',
 steps:[['Add your WebP','Drop it in the box, choose it from disk or paste it. If the browser can display it, the converter can trace it.','Use a still WebP, not an animated one.'],['Start from Illustration','Illustration mode with 12 colors suits most WebP graphics. Use Logo for 2–6 color marks.','Fewer colors give smaller, cleaner SVGs.'],['Check transparency','Look at the checkerboard behind the vector. If a solid backdrop remains, switch on Remove background.','Transparent pixels never become shapes.'],['Download the SVG','Save the file or copy the code. The viewBox matches your WebP so it drops in at the right proportions.','Compare sizes in the file-size tile.']],
 cdef:'These settings cover the WebP types people convert most. The chart shows how the WebP compression mode affects the trace.',
 table:{cap:'WebP to SVG Converter settings by WebP type',cols:['WebP type','Colors','Detail','Smoothness','Remove specks','Background','Result'],rows:[['Lossless logo or sticker','4–8','70%','30%','10 px²','Transparent kept','Very small SVG'],['Lossy illustration','10–16','75%','45%','12 px²','Keep or remove','Clean layers'],['Photo saved as WebP','24–40','55%','60%','24 px²','Opaque','Posterized art'],['Icon with soft shadow','4–6','70%','25%','15 px²','Transparent kept','Solid shapes only']]},
 bars:{title:'Trace quality by WebP mode',cap:'Guide, 1 to 5: lossless files carry no compression halos.',rows:[['Lossless',5],['Lossy, high quality',4],['Lossy, medium',3],['Lossy, low',2]]},
 faq:[['Does this WebP to SVG converter keep transparency?','Yes. Transparent pixels never become shapes, so the SVG has no background rectangle. Check the preview on the checkerboard to confirm.'],['Can I convert an animated WebP?','Only the first frame is converted. Export the frame you want as a still image if you need a different one.'],['Why is my WebP result so small?','Flat WebP graphics need only a few filled paths. The same image as a raster uses thousands of pixels, so the vector is often a fraction of the size.'],['My browser cannot open this WebP.','Use a current version of Chrome, Edge, Firefox or Safari. If it still fails, convert the image to PNG first and use the main <a href="../">PNG to SVG Converter</a>.'],['Do lossy WebP files need special settings?','A little Remove specks and a modest color count absorb the faint halos lossy WebP leaves around edges.']]
};

C['gif-to-svg-converter']={
 def:'A GIF to SVG converter turns one frame of a GIF into vector shapes. GIFs use at most 256 colors, so they map naturally onto the flat color layers an SVG is built from.',
 how:[
  ['Read the first frame','The browser draws the GIF onto a canvas. Only the first frame is traced; animation is not carried into the SVG.','Canvas · frame 0','pix'],
  ['Find the real palette','A GIF already has a limited palette. The converter picks the dominant colors and merges dithering noise into them.','Median cut · dither merge','pal'],
  ['Clean up dithering','Dithered gradients create checkerboard speckles. Remove specks and a touch of Denoise melt them into solid areas.','Speck merge · Denoise','blur'],
  ['Trace and render','Each color becomes a stacked layer with Bézier outlines, ready to scale to any size.','Stacked layers · Bézier fit','vec']],
 why:['What is different about a GIF',[['Few colors','A 6-color GIF traces to about 6 layers, so results are small and clean.'],['One frame only','Animated GIFs convert as a still. Pick the frame you want before converting.'],['Dither patterns','Dithering imitates gradients with dots. Higher Remove specks turns it into flat color.']]],
 pdef:'Converting a GIF to SVG needs four steps. The main decision is how aggressively to remove dither dots.',
 steps:[['Add your GIF','Drop the GIF or paste it. The first frame appears in the original pane.','For an animation, export the frame you want first.'],['Match the palette','Set Colors close to the real count in the GIF, usually 4–8.','The layer list shows how much each color is used.'],['Remove dither dots','Raise Remove specks until checkerboard dots vanish but small details stay.','Zoom to 400% to inspect the result.'],['Download the SVG','Save or copy the SVG. Flat GIF art often becomes only a few kilobytes.','The SVG scales to any size without dithering.']],
 cdef:'GIF content varies from logos to dithered photos. The table gives starting values and the chart shows the effect of dithering.',
 table:{cap:'GIF to SVG Converter settings by GIF content',cols:['GIF content','Colors','Detail','Smoothness','Remove specks','Denoise','Result'],rows:[['Flat logo or icon','3–6','70%','25%','8 px²','0','Crisp layers'],['Cartoon frame','6–10','75%','35%','12 px²','0.5 px','Clean shapes'],['Dithered gradient','8–12','60%','50%','30 px²','1 px','Banded gradient'],['Photo GIF','16–32','55%','60%','24 px²','1 px','Posterized art']]},
 bars:{title:'Trace quality by amount of dithering',cap:'Guide, 1 to 5: less dithering gives cleaner layers.',rows:[['No dithering',5],['Light dithering',4],['Heavy dithering',3],['Photo dithering',2]]},
 faq:[['Does the SVG keep the GIF animation?','No. Only one frame is traced. SVG animation needs separate animation code, which this converter does not create.'],['Why are there tiny dots in my result?','Dithering. Raise Remove specks and add a little Denoise so the dots merge into flat color.'],['How many colors should I use for a GIF?','Use roughly the number of distinct colors in the GIF, typically 4–8. More colors only add near-duplicate layers.'],['Will my GIF’s transparency be kept?','Yes. GIF transparent pixels stay transparent, so the SVG has no background box.'],['Can I turn a GIF meme into a vector?','Yes, but compression and text overlays create noise. Use 8–12 colors and a higher speck filter for a cleaner graphic.']]
};

C['bmp-to-svg-converter']={
 def:'A BMP to SVG converter turns an uncompressed bitmap into compact vector shapes. BMP files are large because they store every pixel, so the vector is often a tiny fraction of the size.',
 how:[
  ['Read the bitmap','The browser loads the BMP exactly as stored. Because BMP is uncompressed, there are no compression artifacts to clean up.','Canvas · lossless pixels','pix'],
  ['Find hard edges','BMP screenshots and old Windows graphics have crisp, unsmoothed edges. A low Smoothness setting keeps corners square.','Low smoothness','grid'],
  ['Extract the colors','Flat UI colors form a short palette. Each distinct color becomes one layer.','Median cut','pal'],
  ['Trace and render','Layers are traced at sub-pixel accuracy. Straight edges stay straight lines instead of becoming curves.','Line detection · Bézier fit','vec']],
 why:['What is different about a BMP',[['Huge but lossless','A BMP can be many megabytes. The SVG of a flat BMP is usually only a few kilobytes.'],['Hard edges','Old BMP art has no anti-aliasing, so staircases appear. A little Smoothness rounds them.'],['No transparency','Standard BMP has no alpha, so backgrounds are traced as shapes.']]],
 pdef:'Four steps convert a BMP to SVG. For pixel-exact artwork, consider the Pixel mode on the Pixel Art converter instead.',
 steps:[['Add your BMP','Drop the file or pick it from disk. Very large BMPs are scaled down to a maximum of 3000 px for processing.','Screenshots convert especially well.'],['Keep edges sharp','Set Smoothness low (10–15%) so window frames and buttons keep square corners.','Raise it only if you see jagged diagonals.'],['Match the palette','Use 6–10 colors for UI graphics. Remove specks at about 6 px² removes stray pixels.','Check the layer list for unwanted extra colors.'],['Download the SVG','Save the SVG. Compare it with the BMP size to see the saving.','SVG scales without any pixel blocks.']],
 cdef:'Use the table for common BMP sources. The chart explains how smoothing trades sharp corners against clean diagonals.',
 table:{cap:'BMP to SVG Converter settings by BMP type',cols:['BMP type','Colors','Detail','Smoothness','Remove specks','Result'],rows:[['Windows UI screenshot','6–10','80%','10–15%','6 px²','Sharp rectangles'],['Retro game art','8–16','75%','15%','4 px²','Blocky shapes'],['Scanned drawing','Mono 2','85%','40%','20 px²','Clean lines'],['Photo BMP','24–40','55%','60%','24 px²','Posterized art']]},
 bars:{title:'Corner sharpness by Smoothness setting',cap:'Guide, 1 to 5: lower Smoothness keeps corners sharper.',rows:[['0–10%',5],['10–30%',4],['30–60%',3],['60–100%',2]]},
 faq:[['Why is the SVG so much smaller than my BMP?','BMP stores every pixel without compression. The SVG stores only the outlines of color regions, which is far less data for flat graphics.'],['Can I keep square pixel edges from the BMP?','For true pixel art use the <a href="../pixel-art-to-svg-converter/">Pixel Art to SVG Converter</a>, which outputs exact squares.'],['Does BMP transparency work?','Standard BMP has no transparency. Use Remove background to clear a plain white backdrop.'],['What if my BMP is huge?','Images over 3000 px on the longest side are scaled down for tracing. The exported SVG keeps the original proportions.'],['Is a BMP a good source for tracing?','Yes, because it is lossless. There are no compression halos, so results are clean.']]
};

C['avif-to-svg-converter']={
 def:'An AVIF to SVG converter turns a modern AV1-based image into vector shapes. Your browser decodes the AVIF, so no software is installed and the file never leaves your device.',
 how:[
  ['Decode the AVIF','Current browsers decode AVIF natively, including transparency and wide color. The pixels are drawn onto a canvas.','Native AVIF decode','pix'],
  ['Handle soft gradients','AVIF compresses smooth areas efficiently, leaving subtle gradients. The palette step groups them into a manageable set of colors.','Median cut · k-means','pal'],
  ['Trace the shapes','Each color layer is outlined at sub-pixel accuracy so edges follow the true boundary, not pixel stair-steps.','Marching squares','wire'],
  ['Fit curves and render','Outlines are fitted with Bézier curves and exported as one filled path per color.','Bézier fit · SVG','vec']],
 why:['What is different about AVIF',[['Smooth gradients','Landscape and sky AVIFs become banded layers. More colors mean finer bands.'],['Alpha support','Transparent AVIF graphics keep their transparency in the SVG.'],['Browser dependent','If your browser cannot display the AVIF, it cannot convert it. Update the browser or export a PNG.']]],
 pdef:'Converting an AVIF to SVG takes four steps and works best on illustrations and graphics rather than photographs.',
 steps:[['Add your AVIF','Drop the AVIF into the box or pick it from disk.','If it will not load, update your browser.'],['Choose Illustration','16 colors is a good default for AVIF artwork. Use fewer for logos.','Watch the palette panel for unused colors.'],['Tune smoothness','Raise Smoothness for rounded shapes, lower it for geometric art.','Zoom in to check curve quality.'],['Download the SVG','Save or copy the SVG and open it in any vector editor.','The SVG is resolution-independent.']],
 cdef:'The table shows starting values for common AVIF content. The chart ranks how well different AVIF subjects convert.',
 table:{cap:'AVIF to SVG Converter settings by AVIF content',cols:['AVIF content','Colors','Detail','Smoothness','Remove specks','Result'],rows:[['Flat illustration','10–16','75%','40%','8 px²','Clean layers'],['Landscape with sky','16–28','65%','55%','16 px²','Banded gradients'],['Logo or icon','4–8','70%','25%','12 px²','Crisp shapes'],['Photograph','32–48','55%','60%','24 px²','Posterized art']]},
 bars:{title:'Vector fit by AVIF subject',cap:'Guide, 1 to 5: flat graphics convert best.',rows:[['Logo',5],['Illustration',4],['Landscape',3],['Photograph',2]]},
 faq:[['Why can’t I open my AVIF here?','Your browser must support AVIF. Chrome, Edge, Firefox and recent Safari do. Otherwise export the image as PNG first.'],['Does AVIF transparency carry over?','Yes. Transparent pixels never become shapes.'],['Are my AVIF files uploaded?','No. Decoding and tracing happen entirely in your browser.'],['Why does my AVIF landscape look banded?','Vector layers are flat colors. Raise the color count for finer bands.'],['Is AVIF better than PNG as a source?','Lossless AVIF is as good as PNG. Lossy AVIF can add faint noise, which Remove specks smooths.']]
};

C['ico-to-svg-converter']={
 def:'An ICO to SVG converter turns a favicon or Windows icon into a scalable vector. Icons are tiny, so the converter upsamples and smooths them before tracing.',
 how:[
  ['Read the icon','The browser displays the ICO at its largest embedded size, typically 16–256 px.','Canvas · largest ICO size','pix'],
  ['Upsample smoothly','Tracing 16 px of data directly gives jagged shapes. The image is enlarged with smoothing so curves can be recovered.','Upsample · Denoise','blur'],
  ['Reduce to few colors','Icons use flat colors. Four to six layers capture most designs without noise.','Median cut','pal'],
  ['Trace and render','Outlines are fitted with Béziers so the icon scales cleanly to any size.','Bézier fit','vec']],
 why:['What is different about an ICO',[['Very little data','A 16×16 icon has only 256 pixels. Detail that was never there cannot be invented.'],['Largest size wins','Use the largest size stored in the ICO for the best vector.'],['Smoothness matters','Higher Smoothness rounds pixel stair-steps into curves.']]],
 pdef:'Converting an ICO to SVG takes four steps. The larger the original icon, the better the result.',
 steps:[['Add your ICO','Drop the .ico file or paste the image. The browser shows the largest embedded image.','Extract a 256 px size if you have one.'],['Use few colors','Set Colors to 4–6 for flat icons.','Fewer colors avoid fringing.'],['Smooth the shapes','Raise Smoothness to 40–50% and add 1 px Denoise to round pixel steps.','Zoom in to check curves.'],['Download the SVG','Save the SVG. It can be used as a favicon.svg in modern browsers.','Use the SVG to Icon tools for other sizes.']],
 cdef:'Use the table to match settings to icon size. The chart shows how original resolution affects the vector.',
 table:{cap:'ICO to SVG Converter settings by icon size',cols:['Icon size','Colors','Detail','Smoothness','Denoise','Result'],rows:[['16×16','3–4','80%','55%','1.5 px','Rough, simplified'],['32×32','4–5','80%','50%','1 px','Recognisable'],['64×64','4–6','75%','45%','1 px','Clean'],['128–256 px','4–8','70%','35%','0.5 px','Very clean']]},
 bars:{title:'Vector quality by icon resolution',cap:'Guide, 1 to 5: more source pixels give better curves.',rows:[['256 px',5],['128 px',4],['64 px',3],['16–32 px',2]]},
 faq:[['Will a 16×16 favicon look sharp as SVG?','It will scale cleanly, but detail that was never in the 16 px original cannot be recovered. Use the largest size you have.'],['Can I use the SVG as a favicon?','Yes. Modern browsers support SVG favicons.'],['Why is my icon blurry before tracing?','Small icons are upsampled with smoothing. This is intentional so curves can be recovered.'],['Does ICO transparency carry over?','Yes. Transparent pixels never become shapes.'],['What if my ICO contains many sizes?','The browser shows the largest. If you need another, export that size as PNG first.']]
};

C['image-to-svg-converter']={
 def:'An image to SVG converter turns any raster picture into vector shapes. It accepts PNG, JPG, WebP, GIF, BMP and AVIF, so you do not need to know the source format.',
 how:[
  ['Open any image','Whatever your browser can display is drawn onto a canvas and read as pixels.','Canvas · any format','pix'],
  ['Choose how to simplify','You decide the number of colors, from 2 up to 64, or switch to Gray or Mono mode.','Median cut · k-means','pal'],
  ['Trace each color','Layers are stacked and traced at sub-pixel accuracy.','Marching squares','wire'],
  ['Fit and export','Curves are fitted with Béziers and written as a compact SVG.','Bézier fit · SVG','vec']],
 why:['Why a general image converter',[['Format agnostic','Use it when you are unsure of the format, or have a mix of files.'],['Four presets','Logo, Illustration, Photo and Line art cover most images.'],['Live comparison','The split view shows the SVG against the original as you tune.']]],
 pdef:'Converting any image to SVG takes four steps. Pick the preset that matches the picture, then adjust.',
 steps:[['Add your image','Drop any image, paste it, or press the sample button.','PNG, JPG, WebP, GIF, BMP and AVIF are supported.'],['Pick the closest preset','Logo for marks, Illustration for flat art, Photo for pictures, Line art for drawings.','Presets only set starting slider values.'],['Adjust colors and detail','Move one slider at a time and watch the preview and size.','Zoom in to check edges.'],['Download the SVG','Save or copy the SVG.','Open it in Figma, Illustrator or Inkscape.']],
 cdef:'This chart shows which preset suits which kind of image.',
 table:{cap:'Image to SVG Converter settings by image type',cols:['Image type','Preset','Colors','Smoothness','Result'],rows:[['Logo','Logo','4–8','25–30%','Crisp'],['Illustration','Illustration','12–20','45%','Clean'],['Drawing','Line art','Mono','35%','Single ink'],['Photograph','Photo','32–48','60%','Posterized']]},
 bars:{title:'Vector fit by image type',cap:'Guide, 1 to 5.',rows:[['Logo',5],['Illustration',4],['Line drawing',4],['Photograph',2]]},
 faq:[['Which image formats are supported?','PNG, JPG, WebP, GIF, BMP and AVIF, anything your browser can open.'],['Which preset should I start with?','Match the preset to the image: Logo, Illustration, Photo or Line art.'],['Is my image uploaded?','No. Everything runs in your browser.'],['Why does my result look different?','Vectors approximate colors with flat regions. Adjust colors and detail.'],['Is there a size limit?','Images are processed up to 3000 px on the longest side.']]
};

C['logo-to-svg-converter']={
 def:'A logo to SVG converter rebuilds a raster logo as exact vector shapes. The goal is razor-sharp corners and true curves so the logo can be used at any size, from a favicon to a billboard.',
 how:[
  ['Read the logo','The logo is decoded and the background is detected. A plain white background is traced as a rectangle so you can remove it.','Canvas · background detect','pix'],
  ['Find the flat colors','A logo has few colors. The converter finds each and merges anti-aliasing edge pixels into the right one.','Median cut · edge snapping','pal'],
  ['Trace sharp shapes','Low smoothness keeps corners square. Layers are traced with sub-pixel outlines.','Corner detection','wire'],
  ['Fit curves and render','Curves are fitted with Béziers and straight edges become lines, giving a compact SVG.','Bézier fit','vec']],
 why:['What makes logos special',[['Few colors','2–6 colors is typical. More only adds noise.'],['Sharp corners','Keep Smoothness low for geometric logos.'],['Text is outlined','Letters become shapes. They scale perfectly but are not editable text.']]],
 pdef:'Four steps convert a logo to SVG. Start with the real number of colors in your logo.',
 steps:[['Add your logo','Drop the logo file or paste it. The highest-resolution version gives the best result.','Avoid screenshots of logos.'],['Set the colors','Count the flat colors in the logo and set that number.','The layer list shows what was found.'],['Tune corners and curves','Lower Smoothness for sharp corners, higher for friendly curves.','Zoom to 400% to inspect edges.'],['Download the SVG','Save and use it for print, web and apps.','Remove the white background if needed.']],
 cdef:'Settings for common logo styles.',
 table:{cap:'Logo to SVG Converter settings by logo style',cols:['Logo style','Colors','Detail','Smoothness','Remove specks','Result'],rows:[['Geometric badge','3–5','70%','15–25%','12 px²','Sharp'],['Wordmark','2–3','80%','25%','6 px²','Outlined letters'],['Gradient logo','8–16','65%','45%','12 px²','Banded'],['Detailed emblem','6–12','80%','30%','6 px²','Intricate']]},
 bars:{title:'Vector fit by logo style',cap:'Guide, 1 to 5.',rows:[['Flat geometric',5],['Wordmark',5],['Detailed emblem',4],['Gradient logo',3]]},
 faq:[['How many colors should I use for a logo?','Match the flat colors in your logo, usually 2–6.'],['Will the text stay editable?','No. Letters become vector outlines.'],['How do I get a transparent logo?','Switch on Remove background to clear a white backdrop.'],['Why are my corners rounded?','Lower the Smoothness slider.'],['Can I print the SVG?','Yes. It scales to any size without losing sharpness.']]
};

C['sketch-to-svg-converter']={
 def:'A sketch to SVG converter turns a pencil or pen sketch into clean vector line work. The paper is removed so only the strokes remain, on a transparent background.',
 how:[
  ['Read the sketch','A photo or scan of a sketch is read as pixels. Paper tone and pencil strokes are separated by brightness.','Canvas · luminance','pix'],
  ['Apply the threshold','Mono mode keeps pixels darker than a threshold as ink. Raising it includes fainter pencil lines.','Threshold','mono'],
  ['Trace the strokes','The ink region is traced at sub-pixel accuracy so thin lines follow the true stroke.','Marching squares','wire'],
  ['Smooth and render','Wobbly hand strokes are fitted with smooth Béziers and exported as one ink path.','Bézier fit','vec']],
 why:['What is different about sketches',[['Paper disappears','The paper tone is dropped, leaving transparency.'],['Faint lines','Light pencil needs a higher threshold.'],['Shading','Hatching becomes dense line shapes, which can increase file size.']]],
 pdef:'Four steps convert a sketch to SVG. Good lighting before scanning makes the biggest difference.',
 steps:[['Add your sketch','Drop a scan or a flat, evenly lit photo.','Avoid shadows across the paper.'],['Set the threshold','Slide Threshold until all the lines you want are included.','Lower it to ignore smudges.'],['Clean and smooth','Add Denoise 0.5 px and Remove specks 10 px² to drop dust.','Raise Smoothness to soften wobble.'],['Download the SVG','Choose an ink color and download.','The SVG is transparent.']],
 cdef:'Settings by sketch style.',
 table:{cap:'Sketch to SVG Converter settings by sketch style',cols:['Sketch style','Mode','Threshold','Smoothness','Remove specks','Result'],rows:[['Light pencil','Mono','180–200','40%','10 px²','Fine lines'],['Dark pencil','Mono','150–170','40%','10 px²','Bold lines'],['Ink pen','Mono','130–150','30%','6 px²','Crisp lines'],['Shaded sketch','Gray','n/a','50%','20 px²','Tonal layers']]},
 bars:{title:'Line quality by sketch medium',cap:'Guide, 1 to 5.',rows:[['Ink pen',5],['Dark pencil',4],['Light pencil',3],['Charcoal',2]]},
 faq:[['Can I trace a photo of a sketch?','Yes. Use even lighting and raise the threshold.'],['How do I remove the paper?','Mono mode already drops it. Turn on Remove background for a stubborn tint.'],['Why are my lines broken?','Raise the threshold or lower Remove specks.'],['Can I change the ink color?','Yes, in Mono mode pick an ink color.'],['What about shading?','Use Gray mode for tonal layers.']]
};

C['drawing-to-svg-converter']={
 def:'A drawing to SVG converter turns an inked or colored drawing into editable vector layers. Outlines and fills stay as separate shapes you can recolor.',
 how:[
  ['Read the drawing','The picture is decoded and the paper background is detected.','Canvas','pix'],
  ['Separate ink from fill','A few color layers separate black outlines from colored fills.','Median cut · 4 colors','pal'],
  ['Trace each layer','Each layer is traced at sub-pixel accuracy so thin outlines are preserved.','Marching squares','wire'],
  ['Fit curves and render','Strokes become smooth Bézier shapes.','Bézier fit','vec']],
 why:['What is different about drawings',[['Outlines plus fills','Four to six colors capture both.'],['Thin lines','High detail keeps hairlines.'],['Hand wobble','Smoothness evens it out.']]],
 pdef:'Four steps convert a drawing to SVG.',
 steps:[['Add your drawing','Drop a scan or flat photo.','Use even light.'],['Set four colors','Start with 4 colors: ink, paper and two fills.','Add more only if needed.'],['Raise detail','Detail 80% and Remove specks 10 px² keep fine lines.','Zoom to check.'],['Download the SVG','Save and recolor layers in your editor.','Hide paper layer if needed.']],
 cdef:'Settings by drawing type.',
 table:{cap:'Drawing to SVG Converter settings by drawing type',cols:['Drawing type','Colors','Detail','Smoothness','Remove specks'],rows:[['Black ink','2 (Mono)','85%','35%','6 px²'],['Ink and flat color','4–6','80%','40%','10 px²'],['Colored pencil','8–12','70%','50%','16 px²'],['Marker art','6–10','75%','40%','10 px²']]},
 bars:{title:'Vector fit by drawing medium',cap:'Guide, 1 to 5.',rows:[['Black ink',5],['Marker',4],['Colored pencil',3],['Watercolor',2]]},
 faq:[['Can I keep colors from my drawing?','Yes. Use Color mode with 4–8 colors.'],['Why do thin lines disappear?','Raise Detail and lower Remove specks.'],['Can I edit layers later?','Yes. Each color is a separate path.'],['What about paper texture?','Denoise and speck removal absorb it.'],['Is it suitable for kids’ drawings?','Yes, bold marker works well.']]
};

C['icon-to-svg-converter']={
 def:'An icon to SVG converter rebuilds a raster icon as scalable vector shapes so one file replaces a whole set of PNG sizes.',
 how:[
  ['Read the icon','The icon is decoded and transparency is preserved.','Canvas · alpha','alpha'],
  ['Find the flat colors','Icons use 2–4 colors. Edge pixels are merged.','Median cut','pal'],
  ['Trace precisely','Low smoothness keeps rounded rectangles accurate.','Marching squares','wire'],
  ['Fit curves and render','Compact paths, often just a couple of kilobytes.','Bézier fit','vec']],
 why:['What is special about icons',[['Replace PNG sets','One SVG replaces 16, 32, 64 and 128 px exports.'],['Tiny files','A few paths.'],['Consistent corners','Smoothness 20%.']]],
 pdef:'Four steps convert an icon to SVG.',
 steps:[['Add your icon','Use the largest PNG you have.','256 px or larger is ideal.'],['Set colors','2–4 colors.','Fewer is cleaner.'],['Check corners','Smoothness 20%.','Zoom to inspect.'],['Download','Save the SVG.','Use in apps and sites.']],
 cdef:'Settings by icon style.',
 table:{cap:'Icon to SVG Converter settings by icon style',cols:['Icon style','Colors','Smoothness','Remove specks'],rows:[['Flat glyph','2','20%','8 px²'],['Two-tone','3–4','20%','8 px²'],['Rounded app icon','4–6','25%','10 px²'],['Gradient icon','8–12','45%','12 px²']]},
 bars:{title:'Vector fit by icon style',cap:'Guide, 1 to 5.',rows:[['Flat glyph',5],['Two-tone',5],['App icon',4],['Gradient',3]]},
 faq:[['Will rounded corners stay round?','Yes, they are fitted as curves.'],['How big should the source be?','256 px or larger.'],['Can I keep transparency?','Yes.'],['How small is the SVG?','Often 2–6 KB.'],['Can I recolor it?','Yes in any editor.']]
};

C['signature-to-svg-converter']={
 def:'A signature to SVG converter turns a photographed or scanned signature into a single smooth vector stroke shape with a transparent background.',
 how:[
  ['Read the signature','Ink is separated from paper by brightness.','Luminance','pix'],
  ['Threshold the ink','Mono mode keeps ink only.','Threshold 160','mono'],
  ['Trace the strokes','Sub-pixel outlines follow pen width.','Marching squares','wire'],
  ['Smooth and render','High smoothness removes pen shake.','Bézier fit','vec']],
 why:['What is special about signatures',[['Transparent result','Place it on any document.'],['Ink color','Choose blue or black.'],['Smooth strokes','Smoothness 55%.']]],
 pdef:'Four steps convert a signature to SVG.',
 steps:[['Add your signature','Sign with dark pen on white paper.','Shoot straight on in good light.'],['Set the threshold','Raise until strokes are solid.','Avoid including paper grain.'],['Smooth','Smoothness 55%.','Remove specks 3 px².'],['Download','Choose ink color and save.','Use in e-sign templates.']],
 cdef:'Settings by capture method.',
 table:{cap:'Signature to SVG Converter settings by capture method',cols:['Capture','Threshold','Smoothness','Denoise','Remove specks'],rows:[['Flatbed scan','150–170','50%','0','3 px²'],['Phone photo','160–185','55%','0.5 px','5 px²'],['Tablet drawing','128','45%','0','2 px²'],['Faint pen','190–210','55%','0.5 px','4 px²']]},
 bars:{title:'Result quality by capture method',cap:'Guide, 1 to 5.',rows:[['Tablet',5],['Flatbed scan',5],['Phone photo',4],['Faint pen',3]]},
 faq:[['Is the signature background transparent?','Yes.'],['Can I pick the ink color?','Yes.'],['Is a vector signature legally valid?','Convert only your own signature. Legal validity depends on your jurisdiction and the document; this tool does not provide legal advice.'],['Why are strokes thin?','Lower the threshold.'],['How do I use it in documents?','Insert the SVG or export a PNG.']]
};

C['scanned-image-to-svg-converter']={
 def:'A scanned image to SVG converter cleans scanner noise and converts the content into vector shapes. It does not read text; it traces shapes.',
 how:[
  ['Read the scan','Pixels are read; paper grain and dust are present.','Canvas','pix'],
  ['Denoise','A blur plus speck removal absorbs grain.','Denoise 1.5 px','blur'],
  ['Threshold','Mono mode separates ink from paper.','Threshold 150','mono'],
  ['Trace and render','Letters become outlines.','Bézier fit','vec']],
 why:['What is special about scans',[['Noise','Grain creates specks.'],['Tilt','Straighten first.'],['No OCR','Text becomes outlines.']]],
 pdef:'Four steps convert a scan.',
 steps:[['Add your scan','200–300 dpi is ideal.','Straighten first.'],['Denoise','1–2 px and specks 30–50.','Watch for lost punctuation.'],['Set threshold','150 typical.','Raise for faint print.'],['Download','Save the SVG.','Not editable text.']],
 cdef:'Settings by scan quality.',
 table:{cap:'Scanned Image to SVG Converter settings by scan quality',cols:['Scan quality','Threshold','Denoise','Remove specks','Result'],rows:[['Clean 300 dpi','150','0.5 px','20 px²','Crisp'],['Noisy 200 dpi','150','1.5 px','40 px²','Clean'],['Faded print','180','1 px','30 px²','Readable'],['Photocopy','140','2 px','50 px²','Simplified']]},
 bars:{title:'Result quality by scan quality',cap:'Guide, 1 to 5.',rows:[['Clean 300 dpi',5],['Noisy 200 dpi',4],['Faded print',3],['Photocopy',2]]},
 faq:[['Is this OCR?','No.'],['Why do tiny dots vanish?','Speck filter.'],['Can I scan color?','Yes, Color mode.'],['How do I straighten?','Rotate before uploading.'],['Is the output editable text?','No, outlines.']]
};

C['clipart-to-svg-converter']={
 def:'A clipart to SVG converter turns raster clipart into layered vector shapes with clean outlines and flat fills.',
 how:[
  ['Read the clipart','Transparent backgrounds preserved.','Canvas · alpha','alpha'],
  ['Separate fills and outlines','10 colors.','Median cut','pal'],
  ['Trace','Outlines accurate.','Marching squares','wire'],
  ['Render','Layers.','Bézier fit','vec']],
 why:['What is special about clipart',[['Outlines','Black outlines separate.'],['Transparent PNG','Kept.'],['Halos','Remove specks.']]],
 pdef:'Four steps convert clipart.',
 steps:[['Add','Drop clipart.','Transparent PNG best.'],['Colors','10.','Reduce if halos.'],['Smooth','35%.','Zoom.'],['Download','Save.','Recolor.']],
 cdef:'Settings by clipart style.',
 table:{cap:'Clipart to SVG Converter settings by clipart style',cols:['Clipart style','Colors','Smoothness','Remove specks'],rows:[['Outlined cartoon','8–12','35%','10 px²'],['Flat icon clipart','4–6','25%','8 px²'],['Shaded clipart','12–20','45%','12 px²'],['Vintage clipart','6–10','40%','14 px²']]},
 bars:{title:'Vector fit by clipart style',cap:'Guide, 1 to 5.',rows:[['Flat',5],['Outlined',4],['Shaded',3],['Photo-real',2]]},
 faq:[['Why halos?','Anti-aliasing.'],['Keep transparency?','Yes.'],['Can I recolor?','Yes.'],['Colors?','8–12.'],['Printing?','Yes.']]
};

C['black-and-white-image-to-svg-converter']={
 def:'A black and white image to SVG converter produces a two-tone vector: one black shape layer on a transparent background, ideal for stamps, stencils and cutting machines.',
 how:[
  ['Read','Pixels read.','Canvas','pix'],
  ['Threshold','Gray to black or white.','Threshold 128','mono'],
  ['Trace','Black region outlined.','Marching squares','wire'],
  ['Render','One path.','Bézier fit','vec']],
 why:['What is special about two-tone',[['One layer','Small file.'],['Cutting machines','Cricut, laser.'],['Contrast','Threshold.']]],
 pdef:'Four steps.',
 steps:[['Add','Drop.','High contrast.'],['Threshold','128.','Adjust.'],['Clean','Specks.','Smooth.'],['Download','Save.','Cut.']],
 cdef:'Settings.',
 table:{cap:'Black and White Image to SVG Converter settings by image type',cols:['Image type','Threshold','Smoothness','Remove specks'],rows:[['Poster','128','40%','20 px²'],['Stamp','140','30%','10 px²'],['Stencil','128','25%','30 px²'],['Photo','110–140','50%','24 px²']]},
 bars:{title:'Result by contrast',cap:'Guide.',rows:[['High contrast',5],['Medium',4],['Low',3],['Photo',2]]},
 faq:[['One color?','Yes.'],['Cutting machines?','Yes.'],['Threshold?','128.'],['Photos?','Posterized.'],['Transparent?','Yes.']]
};

C['color-image-to-svg-converter']={
 def:'A color image to SVG converter keeps up to 64 colors as stacked layers, producing a full-color vector.',
 how:[
  ['Read','Pixels.','Canvas','pix'],
  ['Palette','20 colors.','Median cut','pal'],
  ['Trace','Layers.','Marching squares','wire'],
  ['Render','Hide/isolate.','Bézier fit','vec']],
 why:['Color',[['Up to 64','Layers.'],['Isolate','Hover.'],['Merge','Near.']]],
 pdef:'Four steps.',
 steps:[['Add','Drop.','Color.'],['Colors','20.','More.'],['Smooth','40%.','Zoom.'],['Download','Save.','Edit.']],
 cdef:'Settings.',
 table:{cap:'Color Image to SVG Converter settings by image type',cols:['Image type','Colors','Smoothness'],rows:[['Flat','6–12','35%'],['Illustration','16–24','40%'],['Gradient','28–40','55%'],['Photo','40–64','60%']]},
 bars:{title:'Fit',cap:'Guide.',rows:[['Flat',5],['Illustration',4],['Gradient',3],['Photo',2]]},
 faq:[['How many colors?','Up to 64.'],['Choose colors?','Auto.'],['Hide layers?','Yes.'],['Bands?','Yes.'],['File size?','Grows.']]
};

C['line-art-to-svg-converter']={
 def:'A line art to SVG converter keeps hairline strokes intact and outputs a single-color vector ideal for coloring pages, tattoos and plotters.',
 how:[
  ['Read','Pixels.','Canvas','pix'],
  ['Threshold','Ink.','Threshold 150','mono'],
  ['Trace','Thin lines.','Marching squares','wire'],
  ['Render','Smooth.','Bézier fit','vec']],
 why:['Line art',[['Thin lines','Detail 92%.'],['Single color','Ink.'],['Plotters','Clean.']]],
 pdef:'Four steps.',
 steps:[['Add','Drop.','White bg.'],['Threshold','150.','Adjust.'],['Specks','2.','Detail.'],['Download','Save.','Plot.']],
 cdef:'Settings.',
 table:{cap:'Line Art to SVG Converter settings by line weight',cols:['Line weight','Threshold','Detail','Remove specks'],rows:[['Hairline','170','95%','1 px²'],['Fine','150','92%','2 px²'],['Medium','140','85%','4 px²'],['Bold','128','75%','8 px²']]},
 bars:{title:'Fit',cap:'Guide.',rows:[['Bold',5],['Medium',5],['Fine',4],['Hairline',3]]},
 faq:[['Thin lines vanish?','Lower specks.'],['Single color?','Yes.'],['Tattoo?','Yes.'],['Colors?','Mono.'],['Plotter?','Yes.']]
};

C['pixel-art-to-svg-converter']={
 def:'A pixel art to SVG converter keeps every pixel as a perfectly square rectangle. It detects the original pixel size, so an upscaled sprite becomes a tiny, crisp vector.',
 how:[
  ['Read pixels','Natural size.','Canvas · nearest','pix'],
  ['Detect the grid','Finds pixel size.','Run-length gcd','grid'],
  ['Group by color','Palette.','Exact colors','pal'],
  ['Merge runs','Rectangles.','Run merging','vec']],
 why:['Pixel mode',[['No smoothing','Exact.'],['Auto grid','Detected.'],['Tiny files','Rects.']]],
 pdef:'Four steps.',
 steps:[['Add','Drop sprite.','Nearest-neighbor upscale best.'],['Check size','Auto.','Override.'],['Colors','16.','Exact.'],['Download','Save.','crispEdges.']],
 cdef:'Settings.',
 table:{cap:'Pixel Art to SVG Converter settings by sprite type',cols:['Sprite','Pixel size','Colors','Result'],rows:[['8×8 icon','Auto','up to 8','Tiny'],['16×16 sprite','Auto','up to 16','Tiny'],['32×32 character','Auto','up to 32','Small'],['Upscaled blurry','Manual','16','Imperfect']]},
 bars:{title:'Fit',cap:'Guide.',rows:[['Clean upscale',5],['Exact 1:1',5],['Smoothed',3],['JPEG',2]]},
 faq:[['Why SVG?','Sharp.'],['Pixel size?','Auto.'],['Smooth?','No.'],['Colors?','Up to 64.'],['Blurry?','Use manual.']]
};

C['transparent-image-to-svg-converter']={
 def:'A transparent image to SVG converter respects alpha, so only the visible shapes become paths and the SVG has no background box.',
 how:[
  ['Read alpha','Alpha channel.','Canvas · RGBA','alpha'],
  ['Skip empty','No shapes for transparent.','Alpha threshold','alpha'],
  ['Palette','Colors.','Median cut','pal'],
  ['Render','Paths.','Bézier fit','vec']],
 why:['Transparency',[['No box','Clean.'],['Shadows','Dropped.'],['White bg','Remove.']]],
 pdef:'Four steps.',
 steps:[['Add','PNG.','Transparent.'],['Check','Checker.','Verify.'],['Remove bg','Switch.','White.'],['Download','Save.','Place.']],
 cdef:'Settings.',
 table:{cap:'Transparent Image to SVG Converter settings by source',cols:['Source','Remove background','Colors'],rows:[['Transparent PNG','Off','4–8'],['White background','On','4–8'],['Soft shadow','Off','4–6'],['Cutout photo','Off','24+']]},
 bars:{title:'Edge cleanliness',cap:'Guide.',rows:[['Hard edges',5],['Soft',4],['Shadow',3],['Hair',2]]},
 faq:[['Shadows?','Mostly dropped.'],['White?','Remove.'],['Semi?','Threshold.'],['Box?','No.'],['Print?','Yes.']]
};

C['outline-image-to-svg-converter']={
 def:'An outline image to SVG converter can output strokes only, with no fill, ideal for laser and vinyl cutting or outline icons.',
 how:[
  ['Read','Pixels.','Canvas','pix'],
  ['Threshold','Shape.','Threshold','mono'],
  ['Trace','Outline.','Marching squares','wire'],
  ['Strokes','Outline only.','stroke','vec']],
 why:['Outline',[['No fill','Strokes.'],['Cutting','Laser.'],['Width','Editable.']]],
 pdef:'Four steps.',
 steps:[['Add','Drop.','Bold shapes.'],['Threshold','150.','Adjust.'],['Outline only','Toggle.','Fill off.'],['Download','Save.','Stroke.']],
 cdef:'Settings.',
 table:{cap:'Outline Image to SVG Converter settings by use',cols:['Use','Outline only','Smoothness'],rows:[['Laser','On','30%'],['Vinyl','On','35%'],['Icon','On','25%'],['Filled shape','Off','30%']]},
 bars:{title:'Fit',cap:'Guide.',rows:[['Bold',5],['Icon',4],['Detailed',3],['Photo',2]]},
 faq:[['Filled?','Toggle.'],['Stroke width?','Editor.'],['Cutting?','Yes.'],['Closed paths?','Yes.'],['Inner?','Holes.']]
};

C['monochrome-image-to-svg-converter']={
 def:'A monochrome image to SVG converter outputs one ink color on a transparent background. The ink can be any color, not just black.',
 how:[
  ['Read','Pixels.','Canvas','pix'],
  ['Threshold','Tones.','Threshold 140','mono'],
  ['Ink color','Pick.','Ink','pal'],
  ['Render','One path.','Bézier fit','vec']],
 why:['Monochrome',[['One ink','Any color.'],['Transparent','Yes.'],['Tones','Threshold.']]],
 pdef:'Four steps.',
 steps:[['Add','Drop.','Tonal image.'],['Threshold','140.','Adjust.'],['Ink','Pick.','Navy.'],['Download','Save.','Use.']],
 cdef:'Settings.',
 table:{cap:'Monochrome Image to SVG Converter settings by image',cols:['Image','Threshold','Ink'],rows:[['Logo','128','Brand'],['Photo','110–150','Black'],['Pattern','140','Any'],['Scan','150','Black']]},
 bars:{title:'Fit',cap:'Guide.',rows:[['Logo',5],['Pattern',4],['Scan',3],['Photo',2]]},
 faq:[['Same as B&W?','One ink.'],['Color?','Any.'],['Tones?','Threshold.'],['Transparent?','Yes.'],['Size?','Small.']]
};

C['hand-drawing-to-svg-converter']={
 def:'A hand drawing to SVG converter smooths pen wobble into clean curves while keeping the character of your drawing.',
 how:[
  ['Read','Pixels.','Canvas','pix'],
  ['Threshold','Ink.','Threshold 175','mono'],
  ['Trace','Strokes.','Marching squares','wire'],
  ['Smooth','Béziers.','Bézier fit','vec']],
 why:['Hand drawing',[['Wobble','Smoothed.'],['Style','Kept.'],['Photos','OK.']]],
 pdef:'Four steps.',
 steps:[['Add','Photo.','Overhead.'],['Threshold','175.','Adjust.'],['Smooth','50%.','Lower to keep wobble.'],['Download','Save.','Use.']],
 cdef:'Settings.',
 table:{cap:'Hand Drawing to SVG Converter settings by drawing',cols:['Drawing','Threshold','Smoothness'],rows:[['Doodle','175','50%'],['Lettering','160','55%'],['Cartoon','150','40%'],['Pencil','190','45%']]},
 bars:{title:'Fit',cap:'Guide.',rows:[['Pen',5],['Marker',4],['Pencil',3],['Crayon',2]]},
 faq:[['Keep feel?','Lower smoothness.'],['Photo?','Yes.'],['Color?','Mono.'],['Paper?','Removed.'],['Edit?','Yes.']]
};

C['photo-to-vector-converter']={
 def:'A photo to vector converter turns a photograph into stylized posterized vector art made of stacked color layers.',
 how:[
  ['Read','Pixels.','Canvas','pix'],
  ['Palette','40 colors.','k-means','pal'],
  ['Trace','Layers.','Marching squares','wire'],
  ['Render','Art.','Bézier fit','vec']],
 why:['Photos',[['Posterized','Bands.'],['Control','Colors.'],['Size','Large.']]],
 pdef:'Four steps.',
 steps:[['Add','Photo.','Portrait.'],['Colors','40.','Adjust.'],['Denoise','1.','Smooth.'],['Download','Save.','Art.']],
 cdef:'Settings.',
 table:{cap:'Photo to Vector Converter settings by photo type',cols:['Photo','Colors','Smoothness'],rows:[['Portrait','32–48','60%'],['Landscape','24–40','55%'],['Product','16–32','45%'],['Pop-art','6–10','50%']]},
 bars:{title:'Fit',cap:'Guide.',rows:[['Pop-art',4],['Product',3],['Portrait',3],['Landscape',2]]},
 faq:[['Perfect?','No.'],['Colors?','40.'],['Size?','Large.'],['Bands?','Yes.'],['Style?','Art.']]
};

C['raster-to-vector-converter']={
 def:'A raster to vector converter rebuilds blurry or low-resolution pixel art as sharp, resolution-independent shapes.',
 how:[
  ['Read','Pixels.','Canvas','pix'],
  ['Smooth','Upsample.','Denoise','blur'],
  ['Palette','10.','Median cut','pal'],
  ['Render','Vector.','Bézier fit','vec']],
 why:['Raster',[['Blur','Fixed.'],['Smoothing','High.'],['Scales','Any.']]],
 pdef:'Four steps.',
 steps:[['Add','Raster.','Any.'],['Colors','10.','Adjust.'],['Smooth','60%.','Zoom.'],['Download','Save.','Scale.']],
 cdef:'Settings.',
 table:{cap:'Raster to Vector Converter settings by raster',cols:['Raster','Colors','Smoothness'],rows:[['Low-res logo','4–8','60%'],['Blurry icon','4–6','60%'],['Screenshot','8–12','20%'],['Photo','32+','60%']]},
 bars:{title:'Fit',cap:'Guide.',rows:[['Logo',4],['Icon',4],['Screenshot',4],['Photo',2]]},
 faq:[['Raster vs vector?','Pixels vs shapes.'],['Blurry?','Smoothing.'],['Quality?','Depends.'],['Size?','Small.'],['Scales?','Yes.']]
};

module.exports=C;
