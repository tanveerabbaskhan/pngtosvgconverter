(()=>{
'use strict';
const PG=window.PAGE||{};
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const fmtBytes=b=>{b=Math.round(b);return b<1024?b+' B':b<1048576?(b/1024).toFixed(b<10240?2:1)+' KB':(b/1048576).toFixed(2)+' MB'};
const nz=v=>+(+v).toFixed(2);
$('#yr').textContent=new Date().getFullYear();
function toast(m){const t=$('#toast');t.textContent=m;t.classList.add('show');clearTimeout(toast.id);toast.id=setTimeout(()=>t.classList.remove('show'),2200)}
const gz=async s=>{try{if(!window.CompressionStream)return null;const st=new Blob([s]).stream().pipeThrough(new CompressionStream('gzip'));return (await new Response(st).arrayBuffer()).byteLength}catch(e){return null}};
const download=(name,blob)=>{const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(a.href),1500)};
const toBlob=(c,t,q)=>new Promise(r=>c.toBlob(r,t,q));

/* ---------------------------------------------------------------- SVG helpers */
function parse(text){
  const doc=new DOMParser().parseFromString(text,'image/svg+xml');
  const err=doc.querySelector('parsererror');
  const root=doc.documentElement;
  if(err||!root||root.nodeName.toLowerCase()!=='svg')return {err:err?err.textContent.split('\n')[0].slice(0,160):'Root element is not <svg>',doc:null};
  return {doc,root};
}
function num(v){const n=parseFloat(v);return isFinite(n)?n:NaN}
function dims(root){
  const vb=(root.getAttribute('viewBox')||'').trim().split(/[\s,]+/).map(Number);
  const hasVB=vb.length===4&&vb.every(isFinite);
  let w=num(root.getAttribute('width')),h=num(root.getAttribute('height'));
  if(String(root.getAttribute('width')||'').includes('%'))w=NaN;
  if(String(root.getAttribute('height')||'').includes('%'))h=NaN;
  if(hasVB){if(!isFinite(w)&&!isFinite(h)){w=vb[2];h=vb[3]}else if(!isFinite(w))w=h*vb[2]/vb[3];else if(!isFinite(h))h=w*vb[3]/vb[2]}
  if(!isFinite(w))w=300;if(!isFinite(h))h=150;
  return {w,h,vb:hasVB?vb:[0,0,w,h],hasVB};
}
function sanitize(root){
  root.querySelectorAll('script,foreignObject').forEach(n=>n.remove());
  root.querySelectorAll('*').forEach(n=>{[...n.attributes].forEach(a=>{if(/^on/i.test(a.name)||/^\s*javascript:/i.test(a.value))n.removeAttribute(a.name)})});
}
function previewMarkup(text){
  const p=parse(text);if(!p.doc)return null;
  const r=p.root;sanitize(r);
  const d=dims(r);
  if(!d.hasVB)r.setAttribute('viewBox',`0 0 ${d.w} ${d.h}`);
  r.setAttribute('width','100%');r.setAttribute('height','100%');
  if(!r.getAttribute('xmlns'))r.setAttribute('xmlns','http://www.w3.org/2000/svg');
  const k='p'+(++previewMarkup.n)+'_';
  return new XMLSerializer().serializeToString(r).replace(/id="([^"]+)"/g,'id="'+k+'$1"').replace(/url(#([^)]+))/g,'url(#'+k+'$1)').replace(/href="#([^"]+)"/g,'href="#'+k+'$1"');
}
previewMarkup.n=0;
const ser=(doc)=>new XMLSerializer().serializeToString(doc.documentElement);

/* ---------------------------------------------------------------- string optimizers */
const stripComments=s=>s.replace(/<!--[\s\S]*?-->/g,'');
const stripXmlDecl=s=>s.replace(/<\?xml[\s\S]*?\?>\s*/g,'').replace(/<!DOCTYPE[\s\S]*?>\s*/gi,'');
const stripMetadataEl=s=>s.replace(/<metadata[\s\S]*?<\/metadata>/gi,'');
const stripEditor=s=>s.replace(/<sodipodi:namedview[\s\S]*?(\/>|<\/sodipodi:namedview>)/gi,'')
  .replace(/\s(?:inkscape|sodipodi|serif|sketch|i|x|adobe)\s*:[\w-]+\s*=\s*("[^"]*"|'[^']*')/g,'')
  .replace(/\sxmlns:(?:inkscape|sodipodi|dc|cc|rdf|serif|sketch|i|x|svg|adobe)\s*=\s*("[^"]*"|'[^']*')/g,'')
  .replace(/<defs\s*\/>|<defs>\s*<\/defs>/gi,'');
const stripTitleDesc=s=>s.replace(/<title[\s\S]*?<\/title>/gi,'').replace(/<desc[\s\S]*?<\/desc>/gi,'');
const stripData=s=>s.replace(/\sdata-[\w-]+\s*=\s*("[^"]*"|'[^']*')/g,'');
const minWS=s=>s.replace(/>\s+</g,'><').replace(/\s{2,}/g,' ').replace(/\s*\n\s*/g,' ').replace(/\s+\/>/g,'/>').replace(/\s+>/g,'>').trim();
function shortColors(s){
  s=s.replace(/rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/gi,(m,r,g,b)=>'#'+[r,g,b].map(v=>Math.min(255,+v).toString(16).padStart(2,'0')).join(''));
  return s.replace(/#([0-9a-f])\1([0-9a-f])\2([0-9a-f])\3(?![0-9a-f])/gi,'#$1$2$3');
}
const NUMATTR=/(\s(?:d|points|transform|viewBox|x|y|cx|cy|r|rx|ry|width|height|x1|y1|x2|y2|stroke-width)=")([^"]*)"/g;
function roundNums(s,p){
  return s.replace(NUMATTR,(m,a,v)=>a+v.replace(/-?\d*\.\d+/g,n=>{let t=(+n).toFixed(p);if(t.indexOf('.')>=0)t=t.replace(/0+$/,'').replace(/\.$/,'');return t.replace(/^(-?)0\./,'$1.')||'0'})+'"');
}
function optimize(src,o){
  const steps=[];let s=src,prev=s.length;
  const step=(name,fn)=>{const n=fn(s);steps.push({name,saved:prev-n.length});s=n;prev=n.length};
  if(o.meta){step('XML declaration',stripXmlDecl);step('Metadata',stripMetadataEl);step('Editor data',stripEditor)}
  if(o.comments)step('Comments',stripComments);
  if(o.title)step('Title & desc',stripTitleDesc);
  if(o.colors)step('Color shortening',shortColors);
  if(o.precision<6)step('Number precision',x=>roundNums(x,o.precision));
  if(o.ws)step('Whitespace',minWS);
  return {out:s,steps};
}

/* ---------------------------------------------------------------- UI builders */
function ctlHTML(items){
  return items.map(it=>{
    if(it.t==='h')return `<h4>${esc(it.l)}</h4>`;
    if(it.t==='slider')return `<div class="row"><label>${esc(it.l)} <output data-o="${it.k}">${esc((it.f||String)(it.v))}</output></label><input type="range" data-k="${it.k}" min="${it.min}" max="${it.max}" step="${it.step||1}" value="${it.v}"></div>`;
    if(it.t==='switch')return `<div class="row inline"><label style="margin:0">${esc(it.l)}${it.s?`<small>${esc(it.s)}</small>`:''}</label><span class="switch"><input type="checkbox" data-k="${it.k}" ${it.v?'checked':''}><i></i></span></div>`;
    if(it.t==='seg')return `<div class="row"><label>${esc(it.l)}</label><div class="seg" style="--n:${it.opts.length}" data-seg="${it.k}"><span class="thumb"></span>${it.opts.map(([v,l])=>`<button type="button" data-k="${it.k}" data-v="${v}" class="${String(it.v)===String(v)?'on':''}">${esc(l)}</button>`).join('')}</div></div>`;
    if(it.t==='color')return `<div class="row inline"><label style="margin:0">${esc(it.l)}</label><input type="color" data-k="${it.k}" value="${it.v}"></div>`;
    if(it.t==='num')return `<div class="row inline"><label style="margin:0">${esc(it.l)}</label><input class="numin" type="number" data-k="${it.k}" value="${it.v}" ${it.min!=null?`min="${it.min}"`:''} step="${it.step||1}"></div>`;
    if(it.t==='btns')return `<div class="qbtns">${it.items.map(([id,l])=>`<button type="button" class="btn" data-act="${id}">${esc(l)}</button>`).join('')}</div>`;
    if(it.t==='html')return it.h;
    return '';
  }).join('');
}
function moveThumbs(){$$('[data-seg]').forEach(sg=>{const i=[...sg.querySelectorAll('button')].findIndex(b=>b.classList.contains('on'));sg.querySelector('.thumb').style.transform=`translateX(${Math.max(0,i)*100}%)`})}
function fillRanges(){$$('#ctl input[type=range]').forEach(i=>i.style.setProperty('--p',((i.value-i.min)/(i.max-i.min)*100)+'%'))}
function metricsHTML(list){return list.map(m=>`<div class="tile"><div class="k">${esc(m.k)}</div><div class="v">${m.v}</div><div class="s">${m.s||'&nbsp;'}</div></div>`).join('')}
function barsHTML(rows,fmt){const mx=Math.max(1,...rows.map(r=>Math.abs(r.v)));return `<div class="bars">${rows.map(r=>`<div class="bar-row"><span>${esc(r.l)}</span><span class="tr"><i style="width:${Math.max(r.v?2:0,Math.abs(r.v)/mx*100)}%;${r.c?`background:${r.c}`:''}"></i></span><b>${fmt?fmt(r.v):r.v}</b></div>`).join('')}</div>`}
const chk=h=>`<div class="pv chk">${h}</div>`;

/* ---------------------------------------------------------------- core app */
const A={fname:"image",S:{},src:'',tool:null,timer:0};
const SAMPLE=PG.sample||'';
function setSrc(text,name){
  A.src=text;A.fname=name||'image';$('#inCode').value=text;
  $('#fname').textContent=name||'sample.svg';
  $('#inMeta').textContent=fmtBytes(text.length);
  if(A.tool&&A.tool.onSrc)A.tool.onSrc();
  rerun(true);
}
function rerun(now){clearTimeout(A.timer);const go=()=>{try{A.tool.run()}catch(e){console.error(e);$('#stage').innerHTML=`<div class="empty">Could not process this SVG: ${esc(e.message)}</div>`}};if(now)go();else A.timer=setTimeout(go,60)}
function setStage(h){$('#stage').innerHTML=h}
function setMetrics(l){$('#metrics').innerHTML=metricsHTML(l)}
function setOut(text,title,meta){A.out=text;$('#outTitle').textContent=title||'Output SVG';$('#outMeta').textContent=meta||fmtBytes(text.length);
  const LIM=6000;const v=text.length>LIM?text.slice(0,LIM)+`\n… ${(text.length-LIM).toLocaleString()} more characters (Copy or Download gives the full file)`:text;
  $('#outCode').textContent=v}
function bindCtl(items){
  $('#ctl').innerHTML=ctlHTML(items);fillRanges();moveThumbs();
}
$('#ctl').addEventListener('input',e=>{
  const t=e.target,k=t.dataset.k;if(!k)return;
  if(t.type==='range'){A.S[k]=+t.value;const o=$(`[data-o="${k}"]`);const it=A.fmt&&A.fmt[k];if(o)o.textContent=it?it(+t.value):t.value;fillRanges()}
  else if(t.type==='checkbox')A.S[k]=t.checked;
  else if(t.type==='number'){A.S[k]=+t.value}
  else A.S[k]=t.value;
  if(A.tool.onCtl)A.tool.onCtl(k);
  rerun();
});
$('#ctl').addEventListener('change',e=>{const t=e.target,k=t.dataset.k;if(!k)return;if(t.type==='checkbox'){A.S[k]=t.checked;if(A.tool.onCtl)A.tool.onCtl(k);rerun()}});
$('#ctl').addEventListener('click',e=>{
  const b=e.target.closest('button');if(!b)return;
  if(b.dataset.v!==undefined){const k=b.dataset.k;A.S[k]=b.dataset.v;b.parentElement.querySelectorAll('button').forEach(x=>x.classList.toggle('on',x===b));moveThumbs();if(A.tool.onCtl)A.tool.onCtl(k);rerun()}
  else if(b.dataset.act&&A.tool.act)A.tool.act(b.dataset.act);
});
/* inputs */
$('#inCode').addEventListener('input',()=>{A.src=$('#inCode').value;$('#inMeta').textContent=fmtBytes(A.src.length);if(A.tool.onSrc)A.tool.onSrc();rerun()});
async function loadFile(f){if(!f)return;if(!/svg|xml|text/.test(f.type)&&!/\.svg$/i.test(f.name)){toast('Please choose an .svg file');return}setSrc(await f.text(),f.name)}
$('#drop').addEventListener('click',()=>$('#file').click());
$('#drop').addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();$('#file').click()}});
$('#file').addEventListener('change',e=>{loadFile(e.target.files[0]);e.target.value=''});
$$('[data-sample]').forEach(b=>b.addEventListener('click',()=>setSrc(SAMPLE,'sample.svg')));
let dn=0;
addEventListener('dragenter',e=>{e.preventDefault();dn++;document.body.classList.add('dragging')});
addEventListener('dragleave',()=>{dn=Math.max(0,dn-1);if(!dn)document.body.classList.remove('dragging')});
addEventListener('dragover',e=>e.preventDefault());
addEventListener('drop',e=>{e.preventDefault();dn=0;document.body.classList.remove('dragging');loadFile(e.dataTransfer.files[0]);$('#converter').scrollIntoView({behavior:'smooth'})});
addEventListener('paste',e=>{if(e.target.id==='inCode')return;const t=e.clipboardData&&e.clipboardData.getData('text');if(t&&/<svg/i.test(t)){setSrc(t,'pasted.svg')}});
$('#navUpload').addEventListener('click',()=>{$('#converter').scrollIntoView({behavior:'smooth'});setTimeout(()=>$('#file').click(),350)});
$('#ctaBtn')&&$('#ctaBtn').addEventListener('click',()=>setTimeout(()=>$('#drop').focus({preventScroll:true}),500));
$('#btnReset').addEventListener('click',()=>{if(A.tool.reset)A.tool.reset();else setSrc(SAMPLE,'sample.svg')});
$('#btnCopy').addEventListener('click',async()=>{const t=A.out!=null?A.out:A.src;try{await navigator.clipboard.writeText(t)}catch(e){const x=document.createElement('textarea');x.value=t;document.body.appendChild(x);x.select();document.execCommand('copy');x.remove()}toast('Copied')});
$('#outCode').addEventListener('copy',e=>{if(A.out!=null){e.clipboardData.setData('text/plain',A.out);e.preventDefault();toast('Full output copied')}});
$('#btnDownload').addEventListener('click',()=>{if(A.tool.download)A.tool.download();else if(A.out!=null)download(A.dlName||'output.svg',new Blob([A.out],{type:'image/svg+xml'}))});

/* ================================================================ TOOLS */
const TOOLS={};

/* ---------- optimizer / compressor / minifier */
TOOLS.optimize=()=>{
  const V=PG.variant||'optimizer';
  const D={optimizer:{meta:true,comments:true,title:false,colors:true,ws:true,precision:3},compressor:{meta:true,comments:true,title:true,colors:true,ws:true,precision:1},minifier:{meta:true,comments:true,title:false,colors:true,ws:true,precision:6}}[V];
  Object.assign(A.S,D);
  A.fmt={precision:v=>v>=6?'Off (lossless)':v+(v===1?' decimal':' decimals')};
  A.dlName=V+'.svg';
  bindCtl([{t:'h',l:V==='minifier'?'Minify':V==='compressor'?'Compression level':'Optimization'},
    {t:'slider',k:'precision',l:'Number precision',min:0,max:6,v:D.precision,f:A.fmt.precision},
    {t:'switch',k:'ws',l:'Collapse whitespace',v:D.ws},{t:'switch',k:'comments',l:'Remove comments',v:D.comments},
    {t:'switch',k:'meta',l:'Strip metadata & editor data',v:D.meta},{t:'switch',k:'colors',l:'Shorten colors',s:'#aabbcc → #abc',v:D.colors},
    {t:'switch',k:'title',l:'Remove title & desc',s:'Hurts accessibility',v:D.title}]);
  return {async run(){
    const s=A.src,r=optimize(s,A.S),pa=previewMarkup(s),pb=previewMarkup(r.out);
    const saved=s.length-r.out.length,pct=s.length?saved/s.length*100:0;
    setStage(`<div class="pv2"><div class="pvw"><div class="pv chk">${pa||''}<span class="tag">Original · ${fmtBytes(s.length)}</span></div></div><div class="pvw"><div class="pv chk">${pb||''}<span class="tag ok">${V==='minifier'?'Minified':V==='compressor'?'Compressed':'Optimized'} · ${fmtBytes(r.out.length)}</span></div></div></div>
      <h4 class="sh">Where the bytes went</h4>${barsHTML(r.steps.map((x,i)=>({l:x.name,v:x.saved,c:`hsl(${(i*47+170)%360} 80% 62%)`})),v=>'−'+fmtBytes(v))}`);
    setMetrics([{k:'Original',v:fmtBytes(s.length),s:'input size'},{k:'Result',v:fmtBytes(r.out.length),s:`<span class="delta ${saved>=0?'good':'warn'}">${pct.toFixed(1)}% ${saved>=0?'smaller':'larger'}</span>`},{k:'Bytes saved',v:fmtBytes(Math.max(0,saved)),s:'before gzip'},{k:'Gzipped',v:'…',s:'what servers send',id:'gzv'}]);
    setOut(r.out,V==='minifier'?'Minified SVG':V==='compressor'?'Compressed SVG':'Optimized SVG');
    const g=await gz(r.out),g0=await gz(s);
    if(g!=null){const t=$('#metrics .tile:last-child');t.querySelector('.v').textContent=fmtBytes(g);t.querySelector('.s').textContent=`from ${fmtBytes(g0)} gzipped`}
  }};
};

/* ---------- resizer */
TOOLS.resizer=()=>{
  let ow=300,oh=150;
  Object.assign(A.S,{w:300,h:150,lock:true,scale:100});A.dlName='resized.svg';
  A.fmt={scale:v=>v+'%'};
  const build=()=>bindCtl([{t:'h',l:'Output size'},{t:'num',k:'w',l:'Width (px)',v:A.S.w,min:1},{t:'num',k:'h',l:'Height (px)',v:A.S.h,min:1},
    {t:'switch',k:'lock',l:'Lock aspect ratio',v:A.S.lock},{t:'slider',k:'scale',l:'Scale',min:5,max:800,step:5,v:A.S.scale,f:A.fmt.scale},
    {t:'h',l:'Quick sizes'},{t:'btns',items:[[16,'16'],[32,'32'],[64,'64'],[128,'128'],[256,'256'],[512,'512'],[1024,'1024'],['orig','Original']]}]);
  return {
    onSrc(){const p=parse(A.src);if(!p.doc)return;const d=dims(p.root);ow=d.w;oh=d.h;A.S.w=Math.round(ow);A.S.h=Math.round(oh);A.S.scale=100;build()},
    onCtl(k){
      if(k==='scale'){A.S.w=Math.round(ow*A.S.scale/100);A.S.h=Math.round(oh*A.S.scale/100);build();return}
      if(A.S.lock){if(k==='w')A.S.h=Math.max(1,Math.round(A.S.w*oh/ow));if(k==='h')A.S.w=Math.max(1,Math.round(A.S.h*ow/oh))}
      if(k==='w'||k==='h'){A.S.scale=Math.round(A.S.w/ow*100)}
      if(k==='lock'||k==='w'||k==='h'){const f=document.activeElement;const key=f&&f.dataset&&f.dataset.k;build();if(key){const el=$(`#ctl [data-k="${key}"]`);if(el){el.focus();try{el.setSelectionRange(99,99)}catch(e){}}}}
    },
    act(id){if(id==='orig'){A.S.w=Math.round(ow);A.S.h=Math.round(oh)}else{A.S.w=+id;A.S.h=Math.max(1,Math.round(+id*oh/ow))}A.S.scale=Math.round(A.S.w/ow*100);build();rerun(true)},
    run(){
      const p=parse(A.src);if(!p.doc){setStage(`<div class="empty">${esc(p.err)}</div>`);return}
      const r=p.root,d=dims(r);if(!d.hasVB)r.setAttribute('viewBox',`0 0 ${d.w} ${d.h}`);
      r.setAttribute('width',A.S.w);r.setAttribute('height',A.S.h);
      const out=ser(p.doc);setOut(out,'Resized SVG');A.out=out;
      const W=Math.max(ow,A.S.w),H=Math.max(oh,A.S.h),box=300,f=Math.min(box/W,box/H);
      const bw=A.S.w*f,bh=A.S.h*f,cw=ow*f,ch=oh*f;
      setStage(`<div class="rz"><div class="rz-o" style="width:${cw}px;height:${ch}px"><span>Original ${nz(ow)}×${nz(oh)}</span></div><div class="rz-n chk" style="width:${bw}px;height:${bh}px">${previewMarkup(out)||''}<span class="tag ok">${A.S.w} × ${A.S.h} px</span></div></div>`);
      setMetrics([{k:'Original',v:`${nz(ow)}×${nz(oh)}`,s:'pixels'},{k:'New size',v:`${A.S.w}×${A.S.h}`,s:'pixels'},{k:'Scale',v:Math.round(A.S.w/ow*100)+'%',s:A.S.w>=ow?'enlarged':'reduced'},{k:'File size',v:fmtBytes(out.length),s:'resizing never loses quality'}]);
    }};
};

/* ---------- cropper */
TOOLS.cropper=()=>{
  let vb=[0,0,100,100];const C={x:0,y:0,w:100,h:100};A.dlName='cropped.svg';
  Object.assign(A.S,{aspect:'free'});
  const build=()=>bindCtl([{t:'h',l:'Crop area (SVG units)'},{t:'num',k:'cx',l:'X',v:nz(C.x),step:1},{t:'num',k:'cy',l:'Y',v:nz(C.y),step:1},{t:'num',k:'cw',l:'Width',v:nz(C.w),min:1},{t:'num',k:'ch',l:'Height',v:nz(C.h),min:1},
    {t:'seg',k:'aspect',l:'Aspect ratio',opts:[['free','Free'],['1','1:1'],['1.3333','4:3'],['1.7778','16:9']],v:A.S.aspect},
    {t:'btns',items:[['auto','Crop to content'],['reset','Reset']]}]);
  const apply=()=>{const o=$('#cropbox');if(!o)return;const [x0,y0,w0,h0]=vb;o.style.left=(C.x-x0)/w0*100+'%';o.style.top=(C.y-y0)/h0*100+'%';o.style.width=C.w/w0*100+'%';o.style.height=C.h/h0*100+'%'};
  const out=()=>{const p=parse(A.src);if(!p.doc)return '';const r=p.root;r.setAttribute('viewBox',`${nz(C.x)} ${nz(C.y)} ${nz(C.w)} ${nz(C.h)}`);const d=dims(parse(A.src).root);const sc=d.w/vb[2];r.setAttribute('width',nz(C.w*sc));r.setAttribute('height',nz(C.h*sc));return ser(p.doc)};
  const update=()=>{const o=out();setOut(o,'Cropped SVG');return o};
  const metrics=o=>setMetrics([{k:'Crop size',v:`${nz(C.w)}×${nz(C.h)}`,s:'SVG units'},{k:'Kept area',v:Math.round(C.w*C.h/(vb[2]*vb[3])*100)+'%',s:'of the original'},{k:'Offset',v:`${nz(C.x)}, ${nz(C.y)}`,s:'from top-left'},{k:'File size',v:fmtBytes(o.length),s:'cropped SVG'}]);
  const syncInputs=()=>{[['cx','x'],['cy','y'],['cw','w'],['ch','h']].forEach(([k,p])=>{const el=$(`#ctl [data-k="${k}"]`);if(el&&document.activeElement!==el)el.value=nz(C[p])})};
  let drag=null;
  const stageEvents=()=>{
    const bx=$('#cropbox'),wrap=$('#cropwrap');if(!bx)return;
    wrap.onpointerdown=e=>{const h=e.target.dataset.h,isBox=e.target===bx||e.target.closest('#cropbox');if(!isBox)return;const r=wrap.getBoundingClientRect();drag={h:h||'move',sx:e.clientX,sy:e.clientY,c:{...C},r};wrap.setPointerCapture(e.pointerId);e.preventDefault()};
    wrap.onpointermove=e=>{if(!drag)return;const dx=(e.clientX-drag.sx)/drag.r.width*vb[2],dy=(e.clientY-drag.sy)/drag.r.height*vb[3],o=drag.c,h=drag.h;
      let x=o.x,y=o.y,w=o.w,hh=o.h;
      if(h==='move'){x=o.x+dx;y=o.y+dy}else{if(h.includes('w')){x=o.x+dx;w=o.w-dx}if(h.includes('e'))w=o.w+dx;if(h.includes('n')){y=o.y+dy;hh=o.h-dy}if(h.includes('s'))hh=o.h+dy}
      if(h!=='move'&&A.S.aspect!=='free'){const a=+A.S.aspect;hh=w/a}
      w=Math.max(1,w);hh=Math.max(1,hh);
      if(h==='move'){x=Math.min(vb[0]+vb[2]-w,Math.max(vb[0],x));y=Math.min(vb[1]+vb[3]-hh,Math.max(vb[1],y))}
      Object.assign(C,{x,y,w,h:hh});apply();syncInputs();metrics(update())};
    wrap.onpointerup=wrap.onpointercancel=()=>{drag=null};
  };
  return {
    onSrc(){const p=parse(A.src);if(!p.doc)return;const d=dims(p.root);vb=d.vb;Object.assign(C,{x:vb[0],y:vb[1],w:vb[2],h:vb[3]});build()},
    onCtl(k){const m={cx:'x',cy:'y',cw:'w',ch:'h'};if(m[k]){C[m[k]]=A.S[k];if(A.S.aspect!=='free'&&(k==='cw'))C.h=C.w/+A.S.aspect}if(k==='aspect'&&A.S.aspect!=='free'){C.h=C.w/+A.S.aspect}},
    act(id){
      if(id==='reset'){Object.assign(C,{x:vb[0],y:vb[1],w:vb[2],h:vb[3]})}
      else{
        const g=$('#cropwrap svg');
        if(g){
          const sr=g.getBoundingClientRect();let x0=1e9,y0=1e9,x1=-1e9,y1=-1e9;
          [...g.querySelectorAll('*')].filter(e=>/^(path|rect|circle|ellipse|polygon|polyline|line|text|image|use)$/i.test(e.nodeName)).forEach(e=>{
            const r=e.getBoundingClientRect();if(!r.width&&!r.height)return;
            if(r.width*r.height>=sr.width*sr.height*.85)return;
            x0=Math.min(x0,r.left);y0=Math.min(y0,r.top);x1=Math.max(x1,r.right);y1=Math.max(y1,r.bottom)});
          if(x1>x0){
            const px=Math.max(x1-x0,y1-y0)*.03;
            const cx=vb[0]+(x0-px-sr.left)/sr.width*vb[2],cy=vb[1]+(y0-px-sr.top)/sr.height*vb[3],cw=(x1-x0+px*2)/sr.width*vb[2],ch=(y1-y0+px*2)/sr.height*vb[3];
            const nx=Math.max(vb[0],cx),ny=Math.max(vb[1],cy);
            Object.assign(C,{x:nx,y:ny,w:Math.min(vb[0]+vb[2],cx+cw)-nx,h:Math.min(vb[1]+vb[3],cy+ch)-ny});
          }
        }
      }
      build();rerun(true)},
    run(){
      const m=previewMarkup(A.src);if(!m){setStage(`<div class="empty">${esc(parse(A.src).err)}</div>`);return}
      const ratio=vb[2]/vb[3];
      setStage(`<div class="cropwrap chk" id="cropwrap" style="aspect-ratio:${ratio};max-height:420px;max-width:${420*ratio}px">${m}<div class="cropbox" id="cropbox"><i data-h="nw"></i><i data-h="ne"></i><i data-h="sw"></i><i data-h="se"></i></div></div><p class="hint2">Drag the box to move it, drag the corners to resize.</p>`);
      apply();stageEvents();const o=update();metrics(o);
    }};
};

/* ---------- color changer */
TOOLS.colors=()=>{
  Object.assign(A.S,{hue:0,invert:false,gray:false,map:{}});A.dlName='recolored.svg';
  const cv=document.createElement('canvas').getContext('2d');
  const norm=c=>{if(!c)return null;c=c.trim();if(/^(none|transparent|currentcolor|inherit|context-fill|context-stroke)$/i.test(c)||c.startsWith('url('))return null;cv.fillStyle='#010203';cv.fillStyle=c;const r=cv.fillStyle;if(r==='#010203'&&!/^#010203$/i.test(c))return null;if(/^rgba/.test(r))return null;return r};
  const hex2=h=>[1,3,5].map(i=>parseInt(h.slice(i,i+2),16));
  const rgb2hex=a=>'#'+a.map(v=>Math.max(0,Math.min(255,Math.round(v))).toString(16).padStart(2,'0')).join('');
  const hsl=([r,g,b])=>{r/=255;g/=255;b/=255;const mx=Math.max(r,g,b),mn=Math.min(r,g,b);let h=0,s=0,l=(mx+mn)/2;if(mx!==mn){const d=mx-mn;s=l>.5?d/(2-mx-mn):d/(mx+mn);h=mx===r?(g-b)/d+(g<b?6:0):mx===g?(b-r)/d+2:(r-g)/d+4;h*=60}return [h,s,l]};
  const fromHsl=([h,s,l])=>{h=((h%360)+360)%360/360;const f=(p,q,t)=>{t<0&&(t+=1);t>1&&(t-=1);return t<1/6?p+(q-p)*6*t:t<1/2?q:t<2/3?p+(q-p)*(2/3-t)*6:p};if(!s)return [l*255,l*255,l*255];const q=l<.5?l*(1+s):l+s-l*s,p=2*l-q;return [f(p,q,h+1/3)*255,f(p,q,h)*255,f(p,q,h-1/3)*255]};
  const mapC=hx=>{if(A.S.map[hx])return A.S.map[hx];let a=hex2(hx);if(A.S.invert)a=a.map(v=>255-v);if(A.S.gray){const y=.299*a[0]+.587*a[1]+.114*a[2];a=[y,y,y]}if(+A.S.hue){const h=hsl(a);h[0]+=+A.S.hue;a=fromHsl(h)}return rgb2hex(a)};
  const PROPS=['fill','stroke','stop-color','flood-color','lighting-color'];
  const walk=(doc,fn)=>{doc.querySelectorAll('*').forEach(el=>{PROPS.forEach(p=>{const v=el.getAttribute(p);if(v!=null){const n=norm(v);if(n)fn(el,p,n,false)}});const st=el.getAttribute('style');if(st){let ch=false;const ns=st.replace(/(fill|stroke|stop-color|flood-color|lighting-color)\s*:\s*([^;]+)/gi,(m,p,v)=>{const n=norm(v);if(!n)return m;ch=true;return fn(el,p,n,true)||m});if(ch)el.setAttribute('style',ns)}});
    doc.querySelectorAll('style').forEach(st=>{st.textContent=st.textContent.replace(/(fill|stroke|stop-color)\s*:\s*([^;}\n]+)/gi,(m,p,v)=>{const n=norm(v);if(!n)return m;const r=fn(null,p,n,true);return r||m})})};
  let list=[];
  const scan=()=>{const p=parse(A.src);if(!p.doc){list=[];return}const cnt=new Map();walk(p.doc,(el,p2,n)=>{cnt.set(n,(cnt.get(n)||0)+1)});list=[...cnt].sort((a,b)=>b[1]-a[1])};
  const build=()=>bindCtl([{t:'h',l:'Quick effects'},{t:'slider',k:'hue',l:'Hue shift',min:0,max:360,v:A.S.hue,f:v=>v+'°'},{t:'switch',k:'invert',l:'Invert colors',v:A.S.invert},{t:'switch',k:'gray',l:'Grayscale',v:A.S.gray},
    {t:'h',l:`Colors found (${list.length})`},{t:'html',h:`<div class="clist">${list.map(([c,n])=>`<label class="crow"><span class="sw" style="background:${c}"></span><span class="mono">${c}</span><em>×${n}</em><span class="arr">→</span><input type="color" data-cc="${c}" value="${mapC(c)}"></label>`).join('')||'<div class="empty">No colors found</div>'}</div>`},{t:'btns',items:[['reset','Reset colors']]}]);
  A.fmt={hue:v=>v+'°'};
  $('#ctl').addEventListener('input',e=>{const c=e.target.dataset&&e.target.dataset.cc;if(c){A.S.map[c]=e.target.value;rerun()}});
  return {
    onSrc(){A.S.map={};scan();build()},
    act(){A.S.map={};A.S.hue=0;A.S.invert=false;A.S.gray=false;build();rerun(true)},
    run(){
      const p=parse(A.src);if(!p.doc){setStage(`<div class="empty">${esc(p.err)}</div>`);return}
      const ch=[];walk(p.doc,(el,p2,n,inStyle)=>{const nn=mapC(n);if(el&&!inStyle)el.setAttribute(p2,nn);return inStyle?`${p2}:${nn}`:null});
      list.forEach(([c])=>ch.push([c,mapC(c)]));
      const out=ser(p.doc);setOut(out,'Recolored SVG');
      $$('#ctl .crow .arr').forEach(a=>{});
      setStage(`<div class="pv2"><div class="pvw"><div class="pv chk">${previewMarkup(A.src)||''}<span class="tag">Original</span></div></div><div class="pvw"><div class="pv chk">${previewMarkup(out)||''}<span class="tag ok">Recolored</span></div></div></div>
        <h4 class="sh">Palette</h4><div class="pal">${ch.map(([a,b])=>`<div class="pchip"><i style="background:${a}"></i><b>→</b><i style="background:${b}"></i></div>`).join('')||'<div class="empty">No fill or stroke colors detected.</div>'}</div>`);
      const changed=ch.filter(([a,b])=>a!==b).length;
      setMetrics([{k:'Colors found',v:list.length,s:'unique fills & strokes'},{k:'Changed',v:changed,s:'colors remapped'},{k:'Elements',v:p.doc.querySelectorAll('*').length,s:'in the SVG'},{k:'File size',v:fmtBytes(out.length),s:'recolored SVG'}]);
    }};
};

/* ---------- background remover */
TOOLS.bg=()=>{
  A.dlName='no-background.svg';Object.assign(A.S,{show:'#ffffff',cand:{},root:true});
  let cands=[];
  const detect=()=>{
    cands=[];const m=previewMarkup(A.src);if(!m)return;
    const host=document.createElement('div');host.style.cssText='position:absolute;left:-9999px;top:0;width:400px;height:400px';host.innerHTML=m;document.body.appendChild(host);
    const svg=host.querySelector('svg');
    try{
      const vb=svg.viewBox.baseVal,all=[...svg.querySelectorAll('*')];
      all.forEach((el,i)=>{
        if(!/^(rect|path|circle|ellipse|polygon)$/i.test(el.nodeName))return;
        let depth=0,n=el;while(n.parentNode&&n.parentNode!==svg){n=n.parentNode;depth++}if(depth>2)return;
        const fill=(el.getAttribute('fill')||(el.getAttribute('style')||'').match(/fill\s*:\s*([^;]+)/)?.[1]||'black').trim();if(fill==='none')return;
        let b;try{b=el.getBBox()}catch(e){return}
        const cover=(b.width*b.height)/(vb.width*vb.height);
        if(cover>=.85&&b.width>=vb.width*.9&&b.height>=vb.height*.9)cands.push({i,tag:el.nodeName,fill,cover,first:cands.length===0});
      });
    }catch(e){}
    host.remove();
    cands.forEach((c,k)=>{if(A.S.cand[c.i]===undefined)A.S.cand[c.i]=k===0});
  };
  const build=()=>bindCtl([{t:'h',l:'Detected background shapes'},{t:'html',h:cands.length?`<div class="clist">${cands.map(c=>`<label class="crow"><span class="switch"><input type="checkbox" data-cand="${c.i}" ${A.S.cand[c.i]?'checked':''}><i></i></span><span><b>&lt;${esc(c.tag)}&gt;</b> <span class="mono">${esc(c.fill)}</span></span><em>${Math.round(c.cover*100)}% of canvas</em></label>`).join('')}</div>`:'<div class="empty">No full-canvas background shape was found. The SVG may already be transparent.</div>'},
    {t:'switch',k:'root',l:'Clear root background style',s:'style="background:…"',v:A.S.root},{t:'h',l:'Preview behind “before”'},{t:'color',k:'show',l:'Backdrop',v:A.S.show}]);
  $('#ctl').addEventListener('change',e=>{const i=e.target.dataset&&e.target.dataset.cand;if(i!==undefined){A.S.cand[i]=e.target.checked;rerun(true)}});
  return {
    onSrc(){A.S.cand={};detect();build()},
    run(){
      const p=parse(A.src);if(!p.doc){setStage(`<div class="empty">${esc(p.err)}</div>`);return}
      const all=[...p.root.querySelectorAll('*')];let removed=0;
      cands.forEach(c=>{if(A.S.cand[c.i]&&all[c.i]){all[c.i].remove();removed++}});
      if(A.S.root){const st=p.root.getAttribute('style');if(st&&/background/i.test(st)){p.root.setAttribute('style',st.replace(/background[^;]*;?/gi,'').trim());removed++}}
      const out=ser(p.doc);setOut(out,'Transparent SVG');
      setStage(`<div class="pv2"><div class="pvw"><div class="pv" style="background:${A.S.show}">${previewMarkup(A.src)||''}<span class="tag">Before</span></div></div><div class="pvw"><div class="pv chk">${previewMarkup(out)||''}<span class="tag ok">After · transparent</span></div></div></div>`);
      setMetrics([{k:'Shapes found',v:cands.length,s:'full-canvas candidates'},{k:'Removed',v:removed,s:'background elements'},{k:'Original',v:fmtBytes(A.src.length),s:'input size'},{k:'Result',v:fmtBytes(out.length),s:'transparent SVG'}]);
    }};
};

/* ---------- viewer */
TOOLS.viewer=()=>{
  const V={z:1,x:0,y:0,bg:'chk'};A.out=null;$('#outPanel').hidden=true;
  const apply=()=>{const t=$('#vz');if(t)t.style.transform=`translate(${V.x}px,${V.y}px) scale(${V.z})`;const z=$('#vzv');if(z)z.textContent=Math.round(V.z*100)+'%'};
  Object.assign(A.S,{bg:'chk'});
  bindCtl([{t:'h',l:'Background'},{t:'seg',k:'bg',l:'Show on',opts:[['chk','Checker'],['w','White'],['g','Gray'],['k','Black']],v:'chk'},{t:'btns',items:[['fit','Fit to view'],['z1','Actual size']]}]);
  return {
    act(id){if(id==='fit'){V.z=1;V.x=0;V.y=0}else{const s=$('#vz svg');const d=dims(parse(A.src).root);const w=$('#vw').clientWidth;V.z=Math.max(.1,d.w/Math.max(1,Math.min(w,$('#vw').clientHeight*d.w/d.h)));V.x=0;V.y=0}apply()},
    run(){
      const m=previewMarkup(A.src);if(!m){setStage(`<div class="empty">${esc(parse(A.src).err)}</div>`);setMetrics([]);return}
      const p=parse(A.src),r=p.root,d=dims(r),els=[...r.querySelectorAll('*')],cnt={};els.forEach(e=>{const n=e.nodeName.toLowerCase();cnt[n]=(cnt[n]||0)+1});
      const top=Object.entries(cnt).sort((a,b)=>b[1]-a[1]).slice(0,7);
      const cols=new Set();els.forEach(e=>['fill','stroke'].forEach(a=>{const v=e.getAttribute(a);if(v&&/^#|^rgb/i.test(v))cols.add(v.toLowerCase())}));
      const bgc={chk:'',w:'background:#fff',g:'background:#8d92a8',k:'background:#000'}[A.S.bg];
      setStage(`<div class="vwrap ${A.S.bg==='chk'?'chk':''}" id="vw" style="${bgc}"><div class="vz" id="vz">${m}</div><div class="zoombar"><button data-vz="out">−</button><output id="vzv">100%</output><button data-vz="in">+</button></div></div>
        <div class="vinfo"><div><h4 class="sh">Elements</h4>${barsHTML(top.map(([l,v],i)=>({l:'<'+l+'>',v,c:`hsl(${i*40+200} 75% 62%)`})))}</div><div><h4 class="sh">Details</h4><table class="kv"><tr><td>Size</td><td>${nz(d.w)} × ${nz(d.h)}</td></tr><tr><td>viewBox</td><td>${d.hasVB?d.vb.map(nz).join(' '):'none'}</td></tr><tr><td>Elements</td><td>${els.length}</td></tr><tr><td>File size</td><td>${fmtBytes(A.src.length)}</td></tr></table><div class="pal" style="margin-top:10px">${[...cols].slice(0,12).map(c=>`<div class="pchip"><i style="background:${c}"></i></div>`).join('')}</div></div></div>`);
      setMetrics([{k:'Dimensions',v:`${nz(d.w)}×${nz(d.h)}`,s:'declared size'},{k:'Elements',v:els.length,s:'total nodes'},{k:'Paths',v:cnt.path||0,s:'<path> shapes'},{k:'Colors',v:cols.size,s:'fills & strokes'}]);
      const w=$('#vw');V.z=1;V.x=0;V.y=0;apply();
      w.onwheel=e=>{e.preventDefault();const r=w.getBoundingClientRect(),cx=e.clientX-r.left-r.width/2,cy=e.clientY-r.top-r.height/2,nz2=Math.min(40,Math.max(.2,V.z*Math.exp(-e.deltaY*.0015))),k=nz2/V.z;V.x=cx-(cx-V.x)*k;V.y=cy-(cy-V.y)*k;V.z=nz2;apply()};
      let dr=null;w.onpointerdown=e=>{if(e.target.closest('.zoombar'))return;dr={x:e.clientX,y:e.clientY,vx:V.x,vy:V.y};w.setPointerCapture(e.pointerId)};
      w.onpointermove=e=>{if(!dr)return;V.x=dr.vx+e.clientX-dr.x;V.y=dr.vy+e.clientY-dr.y;apply()};w.onpointerup=()=>dr=null;
      w.querySelectorAll('[data-vz]').forEach(b=>b.onclick=()=>{V.z=Math.min(40,Math.max(.2,V.z*(b.dataset.vz==='in'?1.4:1/1.4)));apply()});
    },
    download(){download('view.svg',new Blob([A.src],{type:'image/svg+xml'}))}
  };
};

/* ---------- base64 / data URI */
TOOLS.b64=()=>{
  const V=PG.variant||'base64';
  Object.assign(A.S,{fmt:V==='datauri'?'uri':'b64',min:true});A.dlName='encoded.txt';
  bindCtl([{t:'h',l:'Output format'},{t:'seg',k:'fmt',l:'Encoding',opts:[['b64','Base64'],['uri','URL-encoded']],v:A.S.fmt},
    {t:'seg',k:'wrap',l:'Wrap as',opts:[['raw','Raw'],['css','CSS'],['img','<img>']],v:'raw'},
    {t:'switch',k:'min',l:'Minify before encoding',s:'Smaller output',v:true}]);
  A.S.wrap='raw';
  const enc=s=>{const b64=btoa(unescape(encodeURIComponent(s)));const uri=encodeURIComponent(s).replace(/%20/g,' ').replace(/%3D/g,'=').replace(/%3A/g,':').replace(/%2F/g,'/').replace(/%22/g,"'");return {b64,uri}};
  return {run(){
    const s=A.S.min?optimize(A.src,{meta:true,comments:true,title:false,colors:true,ws:true,precision:6}).out:A.src;
    const e=enc(s),uri='data:image/svg+xml,'+e.uri,b64='data:image/svg+xml;base64,'+e.b64;
    const main=A.S.fmt==='b64'?b64:uri;
    const out=A.S.wrap==='css'?`background-image: url("${main}");`:A.S.wrap==='img'?`<img src="${main.replace(/"/g,'&quot;')}" alt="">`:main;
    setOut(out,A.S.fmt==='b64'?'Base64 data URI':'URL-encoded data URI');A.dlName=(A.S.fmt==='b64'?'base64':'data-uri')+'.txt';
    const m=previewMarkup(A.src);
    setStage(`<div class="pv2"><div class="pvw"><div class="pv chk">${m||''}<span class="tag">Rendered from the data URI</span></div></div><div class="pvw"><h4 class="sh" style="margin-top:0">Size by encoding</h4>${barsHTML([{l:'SVG source',v:s.length,c:'var(--accent-2)'},{l:'URL-encoded',v:uri.length},{l:'Base64',v:b64.length,c:'var(--warn)'}],fmtBytes)}<p class="hint2">Base64 adds ~33% overhead. URL-encoded data URIs are usually smaller for SVG and compress better with gzip.</p></div></div>`);
    setMetrics([{k:'SVG source',v:fmtBytes(s.length),s:A.S.min?'after minify':'as pasted'},{k:'URL-encoded',v:fmtBytes(uri.length),s:`${((uri.length/s.length-1)*100).toFixed(0)}% vs source`},{k:'Base64',v:fmtBytes(b64.length),s:`+${((b64.length/s.length-1)*100).toFixed(0)}% overhead`},{k:'Output',v:fmtBytes(out.length),s:'copy-ready'}]);
  },download(){download(A.dlName,new Blob([A.out],{type:'text/plain'}))}};
};

/* ---------- formatter */
function pretty(s,o){
  s=s.replace(/>\s+</g,'><').trim();
  const tk=s.match(/<!--[\s\S]*?-->|<\?[\s\S]*?\?>|<!\[CDATA\[[\s\S]*?\]\]>|<![^>]*>|<[^>]+>|[^<]+/g)||[];
  const I=o.indent==='tab'?'\t':' '.repeat(+o.indent);let d=0;const out=[];
  const fmtTag=(t,dep)=>{if(!o.wrap)return t;const m=t.match(/^<([\w:.-]+)((?:\s+[\w:.-]+\s*=\s*(?:"[^"]*"|'[^']*'))+)\s*(\/?)>$/);if(!m)return t;const at=m[2].match(/[\w:.-]+\s*=\s*(?:"[^"]*"|'[^']*')/g);if(at.length<3&&t.length<90)return t;return `<${m[1]}\n${at.map(a=>I.repeat(dep+1)+a).join('\n')}${m[3]?'/':''}>`};
  for(let i=0;i<tk.length;i++){
    const t=tk[i];
    if(/^<\//.test(t)){d=Math.max(0,d-1);out.push(I.repeat(d)+t)}
    else if(/^<[^!?\/]/.test(t)&&!/\/>$/.test(t)){
      if(tk[i+1]&&!/^</.test(tk[i+1])&&tk[i+2]&&/^<\//.test(tk[i+2])){out.push(I.repeat(d)+fmtTag(t,d)+tk[i+1].trim()+tk[i+2]);i+=2}
      else{out.push(I.repeat(d)+fmtTag(t,d));d++}
    }else if(!/^</.test(t)){const x=t.trim();if(x)out.push(I.repeat(d)+x)}
    else out.push(I.repeat(d)+fmtTag(t,d));
  }
  return out.join('\n');
}
TOOLS.format=()=>{
  Object.assign(A.S,{indent:'2',wrap:false});A.dlName='formatted.svg';
  bindCtl([{t:'h',l:'Formatting'},{t:'seg',k:'indent',l:'Indentation',opts:[['2','2 spaces'],['4','4 spaces'],['tab','Tabs']],v:'2'},{t:'switch',k:'wrap',l:'One attribute per line',s:'For elements with 3+ attributes',v:false}]);
  return {run(){
    const o=pretty(A.src,A.S);setOut(o,'Formatted SVG');
    const lines=o.split('\n'),depth={};lines.forEach(l=>{const m=l.match(/^(\t*| *)/)[0];const d=A.S.indent==='tab'?m.length:Math.floor(m.length/+A.S.indent);depth[d]=(depth[d]||0)+1});
    const mx=Math.max(...Object.values(depth),1);
    setStage(`<div class="pv2"><div class="pvw"><div class="pv chk">${previewMarkup(A.src)||''}<span class="tag">Renders the same</span></div></div><div class="pvw"><h4 class="sh" style="margin-top:0">Nesting depth (lines per level)</h4><div class="hist">${Object.keys(depth).sort((a,b)=>a-b).map(k=>`<div class="hb"><i style="height:${depth[k]/mx*100}%"></i><span>${k}</span></div>`).join('')}</div></div></div>`);
    setMetrics([{k:'Lines before',v:A.src.split('\n').length,s:'as pasted'},{k:'Lines after',v:lines.length,s:'formatted'},{k:'Max depth',v:Math.max(...Object.keys(depth).map(Number)),s:'nesting levels'},{k:'File size',v:fmtBytes(o.length),s:`${o.length>=A.src.length?'+':''}${fmtBytes(o.length-A.src.length)} vs input`}]);
  }};
};

/* ---------- validator */
TOOLS.validate=()=>{
  A.out=null;$('#outPanel').hidden=true;
  bindCtl([{t:'html',h:'<p class="hint2">Checks run instantly as you type. Fix the issues, then Copy or Download the corrected code from the input box.</p>'},{t:'btns',items:[['fmt','Format the code']]}]);
  return {
    act(){A.src=pretty(A.src,{indent:'2',wrap:false});$('#inCode').value=A.src;rerun(true)},
    run(){
      const s=A.src,I=[];const add=(sev,t,d)=>I.push({sev,t,d});
      const p=parse(s);
      if(!p.doc)add('error','XML is not well-formed',p.err||'The parser could not read this document.');
      else{
        const r=p.root;
        if(!r.getAttribute('xmlns'))add('error','Missing xmlns','Add xmlns="http://www.w3.org/2000/svg" to the <svg> tag so browsers treat the file as SVG.');
        else if(r.getAttribute('xmlns')!=='http://www.w3.org/2000/svg')add('error','Wrong SVG namespace',`Found “${r.getAttribute('xmlns')}”.`);
        if(!r.getAttribute('viewBox'))add('warn','No viewBox','Without a viewBox the SVG cannot scale responsively.');
        if(!r.getAttribute('width')&&!r.getAttribute('height'))add('info','No width/height','The SVG will fill its container. Add a size if you need a fixed one.');
        if(!r.querySelector('title'))add('info','No <title>','Add a <title> for accessibility.');
        if(r.querySelector('script'))add('error','Contains <script>','Scripts are blocked or stripped by most platforms.');
        const on=[...r.querySelectorAll('*')].filter(e=>[...e.attributes].some(a=>/^on/i.test(a.name)));if(on.length)add('warn','Inline event handlers',`${on.length} element(s) use onclick-style attributes.`);
        const ext=[...r.querySelectorAll('[href],[*|href]')].filter(e=>/^https?:/i.test(e.getAttribute('href')||e.getAttribute('xlink:href')||''));if(ext.length)add('warn','External resources',`${ext.length} element(s) load files from the web.`);
        const ids={};r.querySelectorAll('[id]').forEach(e=>ids[e.id]=(ids[e.id]||0)+1);const dup=Object.entries(ids).filter(([,n])=>n>1);if(dup.length)add('error','Duplicate ids',dup.map(([k,n])=>`#${k} ×${n}`).join(', '));
        const refs=[...s.matchAll(/url\(#([^)]+)\)/g)].map(m=>m[1]).filter(id=>!ids[id]);if(refs.length)add('error','Broken references',`url(#${[...new Set(refs)].join(', #')}) points to nothing.`);
        r.querySelectorAll('path').forEach(pa=>{const d=pa.getAttribute('d');if(!d||!d.trim())add('warn','Empty path','A <path> has no d attribute.');else if(/[^MmLlHhVvCcSsQqTtAaZz0-9eE.,\s+-]/.test(d))add('error','Invalid path data','Unexpected characters in a path d attribute.')});
        if(!/^\s*<(\?xml|svg)/.test(s))add('info','Leading content','There is content before the <svg> tag.');
      }
      const sc={error:0,warn:0,info:0};I.forEach(i=>sc[i.sev]++);
      const score=Math.max(0,100-sc.error*30-sc.warn*10-sc.info*2),C=2*Math.PI*52;
      const col=score>=90?'var(--good)':score>=60?'var(--warn)':'#ff6b81';
      setStage(`<div class="vd"><div class="ringw"><svg viewBox="0 0 120 120" class="ring"><circle cx="60" cy="60" r="52" fill="none" stroke="var(--track)" stroke-width="10"/><circle cx="60" cy="60" r="52" fill="none" stroke="${col}" stroke-width="10" stroke-linecap="round" stroke-dasharray="${C*score/100} ${C}" transform="rotate(-90 60 60)"/></svg><b style="color:${col}">${score}</b><small>${sc.error?'Invalid':sc.warn?'Valid, with warnings':'Valid SVG'}</small></div>
        <div class="vlist">${I.length?I.map(i=>`<div class="vi ${i.sev}"><i>${i.sev==='error'?'✕':i.sev==='warn'?'!':'i'}</i><div><b>${esc(i.t)}</b><span>${esc(i.d)}</span></div></div>`).join(''):'<div class="vi ok"><i>✓</i><div><b>No problems found</b><span>This SVG is well-formed and follows the common best practices we check.</span></div></div>'}</div>
        <div class="pv chk vprev">${previewMarkup(s)||'<div class="empty">Nothing to render</div>'}</div></div>`);
      setMetrics([{k:'Errors',v:sc.error,s:'must fix'},{k:'Warnings',v:sc.warn,s:'should fix'},{k:'Notes',v:sc.info,s:'nice to have'},{k:'Elements',v:p.doc?p.doc.querySelectorAll('*').length:0,s:fmtBytes(s.length)}]);
    }};
};

/* ---------- metadata remover */
TOOLS.meta=()=>{
  Object.assign(A.S,{meta:true,editor:true,comments:true,decl:true,title:false,data:false});A.dlName='clean.svg';
  bindCtl([{t:'h',l:'What to remove'},{t:'switch',k:'meta',l:'<metadata> block',s:'RDF, creator, license info',v:true},{t:'switch',k:'editor',l:'Editor data',s:'Inkscape, Sodipodi, Illustrator, Sketch',v:true},{t:'switch',k:'comments',l:'Comments',v:true},{t:'switch',k:'decl',l:'XML declaration & DOCTYPE',v:true},{t:'switch',k:'title',l:'<title> and <desc>',s:'Also removes accessibility text',v:false},{t:'switch',k:'data',l:'data-* attributes',v:false}]);
  const cnt=(s,re)=>(s.match(re)||[]).length;
  return {run(){
    const s=A.src;let cur=s;const rows=[];
    const step=(on,name,fn,re)=>{if(!on){return}const before=cur,n=cnt(before,re);cur=fn(cur);rows.push({l:name,n,v:before.length-cur.length})};
    step(A.S.decl,'XML declaration / DOCTYPE',stripXmlDecl,/<\?xml|<!DOCTYPE/gi);
    step(A.S.meta,'<metadata> blocks',stripMetadataEl,/<metadata/gi);
    step(A.S.editor,'Editor attributes',stripEditor,/\s(?:inkscape|sodipodi|serif|sketch|i|x|adobe):[\w-]+=|<sodipodi:namedview/g);
    step(A.S.comments,'Comments',stripComments,/<!--/g);
    step(A.S.title,'Title & desc',stripTitleDesc,/<title|<desc/gi);
    step(A.S.data,'data-* attributes',stripData,/\sdata-[\w-]+=/g);
    const out=cur;setOut(out,'Clean SVG');
    const total=rows.reduce((a,r)=>a+r.n,0);
    setStage(`<div class="pv2"><div class="pvw"><div class="pv chk">${previewMarkup(s)||''}<span class="tag">Before · ${fmtBytes(s.length)}</span></div></div><div class="pvw"><div class="pv chk">${previewMarkup(out)||''}<span class="tag ok">After · ${fmtBytes(out.length)}</span></div></div></div>
      <h4 class="sh">Hidden data found</h4><table class="kv wide">${rows.map(r=>`<tr><td>${esc(r.l)}</td><td>${r.n?`<span class="badge">${r.n} removed</span>`:'<span class="muted">none</span>'}</td><td>−${fmtBytes(r.v)}</td></tr>`).join('')||'<tr><td>Nothing selected</td></tr>'}</table>`);
    setMetrics([{k:'Items removed',v:total,s:'hidden entries'},{k:'Before',v:fmtBytes(s.length),s:'input size'},{k:'After',v:fmtBytes(out.length),s:'clean file'},{k:'Saved',v:((1-out.length/Math.max(1,s.length))*100).toFixed(1)+'%',s:'smaller'}]);
  }};
};

/* ================================================================ EXPORTERS (PNG / JPG / WebP / ICO / PDF) */
TOOLS.export=()=>{
  const F=PG.format||'png';
  const MIME={png:'image/png',jpg:'image/jpeg',webp:'image/webp'}[F];
  Object.assign(A.S,{scale:2,bg:F==='jpg'||F==='pdf'?'#ffffff':'transparent',bgc:'#ffffff',q:92,sizes:{16:1,32:1,48:1,64:1,128:0,256:1},page:'fit',margin:10});
  let ow=300,oh=150,last=null;
  A.fmt={scale:v=>v+'×',q:v=>v+'%',margin:v=>v+' mm'};
  const build=()=>{
    const it=[{t:'h',l:'Size'},{t:'slider',k:'scale',l:'Scale',min:.25,max:16,step:.25,v:A.S.scale,f:A.fmt.scale},{t:'html',h:`<div class="row"><small id="dimline">${Math.round(ow*A.S.scale)} × ${Math.round(oh*A.S.scale)} px</small></div>`},
      {t:'btns',items:[['s1','1×'],['s2','2×'],['s4','4×'],['s8','8×']]}];
    if(F!=='ico')it.push({t:'h',l:'Background'},{t:'seg',k:'bg',l:'Fill',opts:F==='png'||F==='webp'?[['transparent','None'],['#ffffff','White'],['#000000','Black'],['custom','Custom']]:[['#ffffff','White'],['#000000','Black'],['custom','Custom']],v:A.S.bg},{t:'color',k:'bgc',l:'Custom color',v:A.S.bgc});
    if(F==='jpg'||F==='webp')it.push({t:'h',l:'Quality'},{t:'slider',k:'q',l:'Quality',min:10,max:100,v:A.S.q,f:A.fmt.q});
    if(F==='ico')it.push({t:'h',l:'Icon sizes'},{t:'html',h:`<div class="sizes">${[16,24,32,48,64,128,256].map(n=>`<label class="szc"><input type="checkbox" data-sz="${n}" ${A.S.sizes[n]?'checked':''}><span>${n}</span></label>`).join('')}</div>`});
    if(F==='pdf')it.push({t:'h',l:'Page'},{t:'seg',k:'page',l:'Page size',opts:[['fit','Fit image'],['a4','A4'],['letter','Letter']],v:A.S.page},{t:'slider',k:'margin',l:'Margin',min:0,max:40,v:A.S.margin,f:A.fmt.margin});
    bindCtl(it);
  };
  $('#ctl').addEventListener('change',e=>{const n=e.target.dataset&&e.target.dataset.sz;if(n){A.S.sizes[n]=e.target.checked?1:0;rerun(true)}});
  const bgOf=()=>A.S.bg==='custom'?A.S.bgc:A.S.bg;
  async function raster(w,h,bg,fit){
    const p=parse(A.src);if(!p.doc)throw new Error(p.err);
    const r=p.root;sanitize(r);const d=dims(r);if(!d.hasVB)r.setAttribute('viewBox',`0 0 ${d.w} ${d.h}`);
    if(!r.getAttribute('xmlns'))r.setAttribute('xmlns','http://www.w3.org/2000/svg');
    let rw=w,rh=h,ox=0,oy=0;
    if(fit){const f=Math.min(w/d.w,h/d.h);rw=d.w*f;rh=d.h*f;ox=(w-rw)/2;oy=(h-rh)/2}
    r.setAttribute('width',Math.max(1,Math.round(rw)));r.setAttribute('height',Math.max(1,Math.round(rh)));
    const url=URL.createObjectURL(new Blob([ser(p.doc)],{type:'image/svg+xml'}));
    const img=new Image();img.src=url;try{await img.decode()}catch(e){URL.revokeObjectURL(url);throw new Error('The browser could not render this SVG')}
    const c=document.createElement('canvas');c.width=w;c.height=h;const x=c.getContext('2d');
    if(bg&&bg!=='transparent'){x.fillStyle=bg;x.fillRect(0,0,w,h)}
    x.drawImage(img,ox,oy,rw,rh);URL.revokeObjectURL(url);return c;
  }
  let busy=0;
  return {
    onSrc(){const p=parse(A.src);if(!p.doc)return;const d=dims(p.root);ow=d.w;oh=d.h;
      const target=F==='ico'?1:Math.max(.25,Math.min(16,Math.round(Math.max(1,1024/Math.max(ow,oh))*4)/4));A.S.scale=Math.min(8,target);build()},
    onCtl(k){const l=$('#dimline');if(l)l.textContent=`${Math.round(ow*A.S.scale)} × ${Math.round(oh*A.S.scale)} px`},
    act(id){A.S.scale=+id.slice(1);build();rerun(true)},
    async run(){
      const id=++busy;
      if(!parse(A.src).doc){setStage(`<div class="empty">${esc(parse(A.src).err)}</div>`);setMetrics([]);return}
      const t0=performance.now();
      try{
        if(F==='ico'){
          const sizes=[16,24,32,48,64,128,256].filter(n=>A.S.sizes[n]);if(!sizes.length){setStage('<div class="empty">Select at least one icon size.</div>');return}
          const pngs=[];for(const n of sizes){const c=await raster(n,n,null,true);pngs.push({n,blob:await toBlob(c,'image/png'),c})}
          if(id!==busy)return;
          const bufs=await Promise.all(pngs.map(p=>p.blob.arrayBuffer()));
          let off=6+16*pngs.length,tot=off;bufs.forEach(b=>tot+=b.byteLength);
          const dv=new DataView(new ArrayBuffer(off));dv.setUint16(2,1,true);dv.setUint16(4,pngs.length,true);
          pngs.forEach((p,i)=>{const o=6+16*i;dv.setUint8(o,p.n>=256?0:p.n);dv.setUint8(o+1,p.n>=256?0:p.n);dv.setUint16(o+4,1,true);dv.setUint16(o+6,32,true);dv.setUint32(o+8,bufs[i].byteLength,true);dv.setUint32(o+12,off,true);off+=bufs[i].byteLength});
          last={blob:new Blob([dv.buffer,...bufs],{type:'image/x-icon'}),name:'icon.ico'};
          setStage(`<div class="icos chk">${pngs.map(p=>`<div class="ico"><canvas width="${p.n}" height="${p.n}" data-n="${p.n}" style="width:${Math.max(32,Math.min(p.n,128))}px;height:${Math.max(32,Math.min(p.n,128))}px"></canvas><span>${p.n}×${p.n}</span></div>`).join('')}</div>`);
          $$('#stage canvas').forEach(cv=>cv.getContext('2d').drawImage(pngs.find(p=>p.n==cv.dataset.n).c,0,0));
          setMetrics([{k:'ICO size',v:fmtBytes(last.blob.size),s:`${pngs.length} embedded sizes`},{k:'Largest',v:`${Math.max(...sizes)}px`,s:'PNG-compressed'},{k:'SVG size',v:fmtBytes(A.src.length),s:'source'},{k:'Time',v:Math.round(performance.now()-t0)+' ms',s:'rendered locally'}]);
          return;
        }
        const W=Math.max(1,Math.min(8192,Math.round(ow*A.S.scale))),H=Math.max(1,Math.min(8192,Math.round(oh*A.S.scale)));
        const bg=bgOf()==='transparent'?null:bgOf();
        if(F==='pdf'){
          const c=await raster(W,H,bg||'#ffffff',false);if(id!==busy)return;
          const jb=await toBlob(c,'image/jpeg',.95),jpg=new Uint8Array(await jb.arrayBuffer());
          const mm=2.8346,mg=A.S.margin*mm;let pw,ph;
          if(A.S.page==='fit'){pw=W*.75+mg*2;ph=H*.75+mg*2}else{[pw,ph]=A.S.page==='a4'?[595.28,841.89]:[612,792]}
          const aw=pw-mg*2,ah=ph-mg*2,f=Math.min(aw/W,ah/H),iw=W*f,ih=H*f;
          last={blob:pdfFromJpeg(jpg,pw,ph,W,H,(pw-iw)/2,(ph-ih)/2,iw,ih),name:'document.pdf'};
          const ratio=pw/ph;
          setStage(`<div class="sheetw"><div class="sheet" style="aspect-ratio:${ratio};max-height:420px"><div class="sheet-in chk" style="left:${(pw-iw)/2/pw*100}%;top:${(ph-ih)/2/ph*100}%;width:${iw/pw*100}%;height:${ih/ph*100}%"><canvas id="pcv"></canvas></div></div><span class="hint2">${Math.round(pw)} × ${Math.round(ph)} pt page · image placed at ${Math.round(iw)} × ${Math.round(ih)} pt</span></div>`);
          const cv=$('#pcv');cv.width=W;cv.height=H;cv.getContext('2d').drawImage(c,0,0);
          setMetrics([{k:'PDF size',v:fmtBytes(last.blob.size),s:'1 page'},{k:'Embedded image',v:`${W}×${H}`,s:'pixels, JPEG 95%'},{k:'Page',v:`${Math.round(pw/72*25.4)}×${Math.round(ph/72*25.4)}`,s:'mm'},{k:'SVG size',v:fmtBytes(A.src.length),s:'source'}]);
          return;
        }
        const c=await raster(W,H,bg,false);if(id!==busy)return;
        const blob=await toBlob(c,MIME,A.S.q/100);
        last={blob,name:'image.'+F};
        setStage(`<div class="expw chk"><canvas id="ecv"></canvas><span class="tag ok">${W} × ${H} px</span><div class="loupe" id="loupe"><canvas width="96" height="96"></canvas><b id="lpx"></b></div></div><p class="hint2">Hover the preview to inspect pixels.</p>`);
        const cv=$('#ecv');cv.width=W;cv.height=H;cv.getContext('2d').drawImage(c,0,0);
        const lp=$('#loupe'),lc=lp.querySelector('canvas').getContext('2d');lc.imageSmoothingEnabled=false;
        cv.onmousemove=e=>{const r=cv.getBoundingClientRect(),px=Math.floor((e.clientX-r.left)/r.width*W),py=Math.floor((e.clientY-r.top)/r.height*H);lc.clearRect(0,0,96,96);lc.drawImage(c,px-6,py-6,12,12,0,0,96,96);lc.strokeStyle='#fff';lc.strokeRect(40,40,8,8);const d=c.getContext('2d').getImageData(Math.max(0,Math.min(W-1,px)),Math.max(0,Math.min(H-1,py)),1,1).data;$('#lpx').textContent=`rgba(${d[0]},${d[1]},${d[2]},${(d[3]/255).toFixed(2)})`;lp.style.opacity=1};
        cv.onmouseleave=()=>{lp.style.opacity=0};
        setMetrics([{k:F.toUpperCase()+' size',v:fmtBytes(blob.size),s:F==='png'?'lossless':`quality ${A.S.q}%`},{k:'Dimensions',v:`${W}×${H}`,s:`${A.S.scale}× of ${nz(ow)}×${nz(oh)}`},{k:'SVG size',v:fmtBytes(A.src.length),s:blob.size>A.src.length?`${(blob.size/A.src.length).toFixed(1)}× larger as ${F.toUpperCase()}`:'smaller than the SVG'},{k:'Time',v:Math.round(performance.now()-t0)+' ms',s:'rendered locally'}]);
      }catch(e){setStage(`<div class="empty">${esc(e.message)}</div>`)}
    },
    download(){if(last)download((A.fname||'image').replace(/\.[^.]+$/,'')+'.'+(F==='pdf'?'pdf':F==='ico'?'ico':F),last.blob)}
  };
};
function pdfFromJpeg(jpg,pw,ph,iw,ih,x,y,w,h){
  const enc=new TextEncoder(),parts=[],offs=[];let len=0;
  const add=b=>{if(typeof b==='string')b=enc.encode(b);parts.push(b);len+=b.length};
  const f=n=>(+n).toFixed(2);
  add('%PDF-1.4\n');
  offs[1]=len;add('1 0 obj\n<</Type/Catalog/Pages 2 0 R>>\nendobj\n');
  offs[2]=len;add('2 0 obj\n<</Type/Pages/Kids[3 0 R]/Count 1>>\nendobj\n');
  offs[3]=len;add(`3 0 obj\n<</Type/Page/Parent 2 0 R/MediaBox[0 0 ${f(pw)} ${f(ph)}]/Resources<</XObject<</Im0 4 0 R>>>>/Contents 5 0 R>>\nendobj\n`);
  offs[4]=len;add(`4 0 obj\n<</Type/XObject/Subtype/Image/Width ${iw}/Height ${ih}/ColorSpace/DeviceRGB/BitsPerComponent 8/Filter/DCTDecode/Length ${jpg.length}>>\nstream\n`);add(jpg);add('\nendstream\nendobj\n');
  const ct=`q ${f(w)} 0 0 ${f(h)} ${f(x)} ${f(y)} cm /Im0 Do Q`;
  offs[5]=len;add(`5 0 obj\n<</Length ${ct.length}>>\nstream\n${ct}\nendstream\nendobj\n`);
  const xr=len;let t='xref\n0 6\n0000000000 65535 f \n';for(let i=1;i<=5;i++)t+=String(offs[i]).padStart(10,'0')+' 00000 n \n';
  add(t+`trailer\n<</Size 6/Root 1 0 R>>\nstartxref\n${xr}\n%%EOF`);
  return new Blob(parts,{type:'application/pdf'});
}

/* ================================================================ INIT */
A.tool=TOOLS[PG.tool]();
A.tool.reset=A.tool.reset||null;
const origSet=setSrc;
setSrc(SAMPLE,'sample.svg');
})();
