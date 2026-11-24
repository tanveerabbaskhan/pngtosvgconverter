// Visual + semantic directory ("Every free converter and SVG tool")
const {all,main,raster,exportPages,util}=require('./pages');
const translations=require('./tool-translations');
const NMN=require('./i18n/tool-names');const nameCache={};const names=new Proxy({},{get:(_,loc)=>nameCache[loc]||(nameCache[loc]=NMN.names(loc))});
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const DOMAIN='https://pngtosvgconverter.com';
const uniq=(svg,k)=>svg.replace(/\bid="([^"]+)"/g,`id="${k}$1"`).replace(/url\(#([^)]+)\)/g,`url(#${k}$1)`);

const BLURB={
 '':'Trace any PNG into clean, scalable SVG with a live preview.',
 'jpg-to-svg-converter':'Re-draw JPEG art as vectors after cleaning compression noise.',
 'webp-to-svg-converter':'Convert WebP graphics and stickers with transparency kept.',
 'gif-to-svg-converter':'Turn a GIF frame into flat-color vector layers.',
 'bmp-to-svg-converter':'Shrink huge bitmaps into sharp, tiny vector shapes.',
 'avif-to-svg-converter':'Vectorize modern AVIF images right in your browser.',
 'ico-to-svg-converter':'Rescue favicons and icons as scalable vectors.',
 'image-to-svg-converter':'Any raster format in, clean SVG out.',
 'logo-to-svg-converter':'Rebuild a logo with sharp corners and true curves.',
 'sketch-to-svg-converter':'Pencil sketches to clean, transparent line work.',
 'drawing-to-svg-converter':'Inked drawings to editable outline and fill layers.',
 'icon-to-svg-converter':'One scalable SVG instead of a set of PNG sizes.',
 'signature-to-svg-converter':'Signatures as a smooth, transparent vector stroke.',
 'scanned-image-to-svg-converter':'Clean scanner noise and trace the page as shapes.',
 'clipart-to-svg-converter':'Layered vector clipart with clean outlines.',
 'black-and-white-image-to-svg-converter':'Two-tone vectors for stamps, stencils and cutters.',
 'color-image-to-svg-converter':'Up to 64 stacked color layers from any picture.',
 'line-art-to-svg-converter':'Hairline strokes kept intact as single-color vector.',
 'pixel-art-to-svg-converter':'Perfect square pixels as tiny, crisp rectangles.',
 'transparent-image-to-svg-converter':'Respects alpha, so there is no background box.',
 'outline-image-to-svg-converter':'Stroke-only outlines for laser and vinyl cutting.',
 'monochrome-image-to-svg-converter':'One ink color on a transparent background.',
 'hand-drawing-to-svg-converter':'Smooth pen wobble into clean, flowing curves.',
 'photo-to-vector-converter':'Stylised, posterized vector art from photographs.',
 'raster-to-vector-converter':'Rebuild blurry pixels as sharp, scalable shapes.',
 'svg-to-png-converter':'Render SVG to a lossless PNG at any scale.',
 'svg-to-jpg-converter':'Export SVG as a compact JPG with adjustable quality.',
 'svg-to-webp-converter':'Compact WebP export with optional transparency.',
 'svg-to-pdf-converter':'Place SVG artwork on an A4, Letter or fit-size PDF.',
 'svg-to-ico-converter':'Pack several icon sizes into one favicon.ico.',
 'svg-compressor':'Shrink SVG files aggressively and see the gzip size.',
 'svg-optimizer':'Safe cleanup that keeps the artwork identical.',
 'svg-resizer':'Change SVG width and height without any quality loss.',
 'svg-cropper':'Crop the visible area with a draggable box.',
 'svg-color-changer':'Recolor fills, strokes and gradients, or shift the hue.',
 'svg-background-remover':'Detect and delete full-canvas background shapes.',
 'svg-viewer':'Zoom, pan and inspect what is inside any SVG.',
 'svg-to-base64-converter':'Encode SVG as Base64 for CSS, HTML or JSON.',
 'svg-code-formatter':'Pretty-print minified SVG with your indentation.',
 'svg-minifier':'Lossless whitespace and comment removal.',
 'svg-metadata-remover':'Strip hidden author, editor and file-path data.',
 'svg-validator':'Check an SVG for errors, warnings and a score.',
 'svg-to-data-uri-converter':'Compact URL-encoded data: URIs for CSS and HTML.'
};
const hueOf=p=>p.hue;
const ICONS=['<path d="M3 17l5-6 4 4 3-3 6 5"/><circle cx="8" cy="7" r="2"/><rect x="3" y="3" width="18" height="18" rx="3"/>','<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 12h8m-3-3 3 3-3 3"/>','<path d="m14.7 6.3 3 3-9.4 9.4H5.3v-3z"/><path d="m13 8 3 3"/>'];
const GROUP_META=[{key:'raster',id:'dx-raster',list:()=>[main,...raster]},{key:'export',id:'dx-export',list:()=>exportPages},{key:'util',id:'dx-util',list:()=>util}];
const fill=(s,o)=>String(s).replace(/\{(\w+)\}/g,(m,k)=>o[k]!==undefined?o[k]:m);
let n=0;
function data(cur,base,T,showBlurb,locale='en'){
  const total=1+raster.length+exportPages.length+util.length;
  const groups=GROUP_META.map((gm,gi)=>{
    const list=gm.list(),g=T.dir.groups[gi];
    return {key:gm.key,id:gm.id,title:g[0],desc:g[1],count:list.length,icon:ICONS[gi],items:list.map(p=>{
      const isCur=!!(cur&&p===cur),title=names[locale]?.[p.slug||'']||p.kw,blurb=showBlurb?(BLURB[p.slug||'']||''):'';
      const translated=!p.main&&translations.get(locale,p.slug);
      const href=p.main?(locale==='en'?'/':'/'+locale+'/'):translated?'/'+locale+'/'+p.slug+'/':base+p.slug+'/';
      return {key:gm.key,kind:g[0],title,blurb,hue:p.hue,href,hreflang:(translated||p.main)?locale:'en',cur:isCur,search:(title+' '+p.kw+' '+blurb).toLowerCase()};
    })};
  });
  return {total,groups,d:T.dir,lead:fill(T.dir.lead,{n:total})};
}
function itemList(){
  const items=[main,...raster,...exportPages,...util];
  return {"@type":"ItemList","@id":DOMAIN+"/#directory",name:"Every free converter and SVG tool",numberOfItems:items.length,itemListElement:items.map((p,i)=>({"@type":"ListItem",position:i+1,name:p.kw,url:DOMAIN+'/'+(p.slug?p.slug+'/':'')}))};
}
module.exports={data,itemList};
