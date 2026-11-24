// Semantic content sections for the 42 specialised pages. Everything is generated from each page's own authored data.
const subUi=require('./i18n/sub-ui');
const raster=Object.assign({},require('./content-raster'),require('./content-raster2'));
const svgc=require('./content-svg');
const CONTENT=Object.assign({},raster,svgc);

const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
// escape text but keep our own <a href> links
const rich=s=>esc(s).replace(/&lt;a href=&quot;([^&]*)&quot;&gt;(.*?)&lt;\/a&gt;/g,'<a href="$1">$2</a>');
const plain=s=>String(s).replace(/<a [^>]*>/g,'').replace(/<\/a>/g,'');
const uniq=(svg,k)=>svg.replace(/\bid="([^"]+)"/g,`id="${k}$1"`).replace(/url\(#([^)]+)\)/g,`url(#${k}$1)`);
let UID=0;

/* ------------------------------------------------------------ art (illustrations drawn from each page's own subject) */
const sv=inner=>`<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">${inner}</svg>`;
function colorsOf(subject){
  const set=[];(subject.match(/#[0-9a-fA-F]{6}\b/g)||[]).forEach(c=>{c=c.toLowerCase();if(!set.includes(c))set.push(c)});
  return set.slice(0,6);
}
function lum(h){const n=parseInt(h.slice(1),16);return ((n>>16)*.299+((n>>8)&255)*.587+(n&255)*.114)}
function art(spec,p){
  const [kind,rest]=spec.split(/:(.+)/),args=(rest||'').split('|');
  const subj=()=>uniq(p.subject,'a'+(++UID)+'_');
  switch(kind){
    case 'pix':return `<canvas data-pix="28" role="img" aria-label="${esc(p.kw)} pixels"></canvas>`;
    case 'grid':return `<div class="ax-grid"><canvas data-pix="22" role="img" aria-label="pixel grid"></canvas></div>`;
    case 'pal':{const cs=colorsOf(p.subject);return `<div class="ax-pal" role="img" aria-label="Palette extracted from the artwork">${cs.map(c=>`<span style="background:${c};color:${lum(c)>140?'#08090e':'#fff'}">${c}</span>`).join('')}</div>`}
    case 'wire':return `<div class="ax-wire">${sv(subj())}</div>`;
    case 'vec':return `<div class="ax-vec">${sv(subj())}</div>`;
    case 'mono':return `<div class="ax-mono">${sv(subj())}</div>`;
    case 'blur':return `<div class="ax-blur">${sv(subj())}</div>`;
    case 'alpha':return `<div class="chk ax-alpha">${sv(subj())}</div>`;
    case 'crop':return `<div class="ax-crop">${sv(subj())}<i></i></div>`;
    case 'swap':{const cs=colorsOf(p.subject).slice(0,3);const sh=c=>{const n=parseInt(c.slice(1),16);return '#'+[(n&255),(n>>16),((n>>8)&255)].map(v=>v.toString(16).padStart(2,'0')).join('')};return `<div class="ax-swap" role="img" aria-label="Colors being replaced">${cs.map(c=>`<div><span style="background:${c}"></span><b>→</b><span style="background:${sh(c)}"></span></div>`).join('')}</div>`}
    case 'compare':return `<div class="ax-cmp" role="img" aria-label="${esc(args[0])} compared with ${esc(args[1]||'result')}"><div class="ax-cmp-b">${sv(subj())}<em>${esc(args[0]||'Before')}</em></div><div class="ax-cmp-a">${sv(subj())}<em>${esc(args[1]||'After')}</em></div></div>`;
    case 'code':{const L=(args.length?args:['<svg>','</svg>']).slice(0,5);return `<svg viewBox="0 0 240 150" role="img" aria-label="SVG code excerpt"><rect x="6" y="8" width="228" height="134" rx="12" style="fill:var(--surface-3)"/><g font-family="ui-monospace,Menlo,Consolas,monospace" font-size="9.4">${L.map((l,i)=>`<text x="16" y="${30+i*21}" style="fill:${i%2?'var(--accent-2)':'var(--accent)'}">${esc(l.length>34?l.slice(0,33)+'…':l)}</text>`).join('')}</g></svg>`}
    case 'file':return `<svg viewBox="0 0 240 150" role="img" aria-label="${esc(args[0])} file"><path d="M72 14h70l32 32v90H72z" style="fill:var(--surface-3);stroke:var(--accent)" stroke-width="4" stroke-linejoin="round"/><path d="M142 14v32h32" fill="none" style="stroke:var(--accent)" stroke-width="4" stroke-linejoin="round"/><rect x="62" y="82" width="116" height="34" rx="9" style="fill:var(--accent)"/><text x="120" y="105" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="800" font-size="18" fill="#08090e">${esc(args[0]||'SVG')}</text><text x="120" y="132" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" style="fill:var(--muted)">${esc(args[1]||'')}</text></svg>`;
    case 'dims':{const w=args[0]||'400',h=args[1]||'300';return `<div class="ax-dims"><div class="ax-dbox">${sv(subj())}</div><span class="ax-dw">${esc(w)} px</span><span class="ax-dh">${esc(h)} px</span></div>`}
    case 'badge':return `<svg viewBox="0 0 240 150" role="img" aria-label="Score ${esc(args[0])}"><circle cx="120" cy="75" r="52" fill="none" style="stroke:var(--track)" stroke-width="12"/><circle cx="120" cy="75" r="52" fill="none" style="stroke:var(--accent)" stroke-width="12" stroke-linecap="round" stroke-dasharray="326 326" transform="rotate(-90 120 75)"/><text x="120" y="86" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="800" font-size="34" style="fill:var(--text)">${esc(args[0]||'100')}</text></svg>`;
    case 'bars':{const L=args.length?args:['a','b','c'];return `<svg viewBox="0 0 240 150" role="img" aria-label="Relative amounts"><g font-family="system-ui,sans-serif" font-size="10" font-weight="700">${L.slice(0,4).map((l,i)=>{const w=170-i*34;return `<text x="12" y="${32+i*30}" style="fill:var(--muted)">${esc(l)}</text><rect x="86" y="${22+i*30}" width="${w*.8}" height="14" rx="7" style="fill:var(--accent);opacity:${1-i*.18}"/>`}).join('')}</g></svg>`}
  }
  return art('vec',p);
}

/* ------------------------------------------------------------ process mock visuals (labelled per page) */
const CTL={
 'svg-compressor':['Precision','Whitespace','Metadata'],'svg-optimizer':['Precision','Comments','Colors'],'svg-minifier':['Whitespace','Comments','Precision'],
 'svg-resizer':['Width','Height','Scale'],'svg-cropper':['X / Y','Width','Aspect'],'svg-color-changer':['Hue shift','Invert','Grayscale'],
 'svg-background-remover':['Candidates','Root style','Backdrop'],'svg-viewer':['Zoom','Background','Pan'],'svg-to-base64-converter':['Encoding','Wrapper','Minify'],
 'svg-to-data-uri-converter':['Encoding','Wrapper','Minify'],'svg-code-formatter':['Indent','Wrap','Depth'],'svg-metadata-remover':['Metadata','Editor data','Comments'],
 'svg-validator':['Errors','Warnings','Notes'],'svg-to-png-converter':['Scale','Background','Size'],'svg-to-jpg-converter':['Scale','Background','Quality'],
 'svg-to-webp-converter':['Scale','Background','Quality'],'svg-to-pdf-converter':['Scale','Page','Margin'],'svg-to-ico-converter':['Sizes','16 px','256 px']
};
const mDrop=(label)=>`<svg viewBox="0 0 220 120" role="img" aria-label="Upload box"><rect x="14" y="14" width="192" height="92" rx="14" fill="none" style="stroke:var(--accent)" stroke-width="3" stroke-dasharray="8 6"/><circle cx="110" cy="46" r="17" style="fill:var(--accent)"/><path d="M110 54V38m-8 8 8-8 8 8" fill="none" stroke="#08090e" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/><text x="110" y="86" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" style="fill:var(--muted)">${esc(label)}</text></svg>`;
const mTune=(labels)=>`<svg viewBox="0 0 220 120" role="img" aria-label="Controls">${labels.map((l,i)=>{const v=[.35,.7,.5][i];return `<text x="16" y="${27+i*34}" font-family="system-ui,sans-serif" font-size="10" font-weight="700" style="fill:var(--muted)">${esc(l)}</text><rect x="16" y="${33+i*34}" width="188" height="5" rx="2.5" style="fill:var(--track)"/><rect x="16" y="${33+i*34}" width="${188*v}" height="5" rx="2.5" style="fill:var(--accent)"/><circle cx="${16+188*v}" cy="${35.5+i*34}" r="8" fill="#fff" style="stroke:var(--accent)" stroke-width="4"/>`}).join('')}</svg>`;
const mFile=(fmt,kw)=>`<svg viewBox="0 0 220 120" role="img" aria-label="Download ${esc(fmt)}"><rect x="26" y="18" width="168" height="40" rx="12" style="fill:var(--accent)"/><path d="M80 30v14m-6-6 6 6 6-6" fill="none" stroke="#08090e" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><text x="106" y="43" font-family="system-ui,sans-serif" font-size="13" font-weight="800" fill="#08090e">Download ${esc(fmt)}</text><rect x="26" y="72" width="168" height="30" rx="10" style="fill:var(--surface-3)"/><text x="40" y="92" font-family="ui-monospace,monospace" font-size="11" style="fill:var(--muted)">${esc(kw)}</text></svg>`;

/* ------------------------------------------------------------ section builders */
function barsFig(p,b){
  const max=b.max||5,unit=b.unit===undefined?'/5':b.unit;
  const fmt=v=>unit==='/5'?v+'/5':(''+(Math.round(v*100)/100)).replace(/^0\./,'0.')+unit;
  const rows=b.rows.map(([l,v],i)=>{const y=12+i*34,w=Math.max(4,v/max*290);return `<text x="0" y="${y+15}" font-family="system-ui,sans-serif" font-size="12.5" font-weight="600" style="fill:var(--text)">${esc(l)}</text><rect x="150" y="${y}" width="290" height="20" rx="10" style="fill:var(--track)"/><rect x="150" y="${y}" width="${w}" height="20" rx="10" style="fill:url(#cg${p.slug.length})"/><text x="${Math.min(150+w+8,470)}" y="${y+15}" font-family="system-ui,sans-serif" font-size="12" font-weight="800" style="fill:var(--accent)">${fmt(v)}</text>`}).join('');
  const id=`cg${p.slug.length}`;
  return `<svg viewBox="0 0 520 ${12+b.rows.length*34}" role="img" aria-labelledby="ch-t ch-d" class="sx-chart"><title id="ch-t">${esc(b.title)}</title><desc id="ch-d">${b.rows.map(([l,v])=>`${esc(l)}: ${fmt(v)}`).join('; ')}.</desc><defs><linearGradient id="${id}" x1="0" x2="1"><stop offset="0" style="stop-color:var(--accent)"/><stop offset="1" style="stop-color:var(--accent-2)"/></linearGradient></defs>${rows}</svg>`;
}
function parts(p,translated,locale='en'){
  const c=translated||CONTENT[p.slug];if(!c)throw new Error('missing content for '+p.slug);
  const kw=p.kw;
  const ctl=CTL[p.slug]||['Colors','Detail','Smoothness'];
  const badge=p.group==='raster'?(/^[A-Z]{3,4}$|^WebP$/.test(p.inL)?p.inL:(translated&&subUi.has(locale)?require('./i18n/tool-names').img[locale]:p.kw.replace(/ to .*/,''))):'';
  const loc=!!(translated&&locale!=='en'&&subUi.has(locale));
  const dropLabel=loc?(p.group==='raster'?subUi.drop(locale,badge):subUi.dropSvg(locale)):(p.group==='raster'?'Drop '+kw.replace(/ to .*/,''):'Drop SVG');
  const outFmt=p.group==='raster'?'SVG':(p.fmt||'SVG');
  const L10=x=>loc?subUi.apply(x,locale,kw):x;
  const procArts=[mDrop(dropLabel),mTune(ctl),art(p.group==='raster'?'compare:Original|SVG':'compare:Before|After',p),mFile(outFmt,p.slug.replace(/-converter$/,'')+'.'+(outFmt.toLowerCase()))].map(L10);
  const best=[...c.bars.rows].sort((a,b)=>b[1]-a[1]),isRating=(c.bars.unit===undefined);
  return {kw,c,L:loc?subUi.map(locale,kw):{},stages:c.how.map(([h,d,tech,a])=>({h,d,tech,art:L10(art(a,p))})),procArts,bars:L10(barsFig(p,c.bars)),isRating,bestFirst:best[0][0],bestLast:best[best.length-1][0],faq:c.faq.map(([q,a])=>[q,rich(a)])};
}
function graph(p,url,desc){
  const c=CONTENT[p.slug];
  return {"@context":"https://schema.org","@graph":[
    {"@type":"WebApplication","@id":url+"#app",name:p.kw,url,applicationCategory:"MultimediaApplication",operatingSystem:"Any",browserRequirements:"Requires JavaScript and a current web browser",offers:{"@type":"Offer",price:"0",priceCurrency:"USD"},description:desc},
    {"@type":"HowTo","@id":url+"#howto",name:`How to use the ${p.kw}`,description:c.pdef,totalTime:"PT1M",step:c.steps.map(([h,d],i)=>({"@type":"HowToStep",position:i+1,name:h,text:d,url:url+"#process"}))},
    {"@type":"FAQPage","@id":url+"#faq",mainEntity:c.faq.map(([q,a])=>({"@type":"Question",name:q,acceptedAnswer:{"@type":"Answer",text:plain(a)}}))}
  ]};
}
module.exports={parts,graph,CONTENT};
