(()=>{
'use strict';
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const nf=v=>''+Math.round(v*10)/10;
const reduced=matchMedia('(prefers-reduced-motion:reduce)').matches;
$('#yr').textContent=new Date().getFullYear();

/* ------------------------------------------------------------------ STATE */
const PG=window.PAGE||{};
const I18=window.I18N||{};
const L=(k,d,v)=>{let s=I18[k]!==undefined?I18[k]:d;return v?s.replace(/\{(\w+)\}/g,(m,x)=>v[x]!==undefined?v[x]:m):s};
const DEFAULTS={mode:'color',colors:8,detail:70,smooth:35,speckle:12,blur:0,thresh:140,ink:'#111111',rmbg:false,cell:0,outline:false};
const PRESETS={
  logo :{mode:'color',colors:8 ,detail:70,smooth:30,speckle:12,blur:0},
  illus:{mode:'color',colors:16,detail:75,smooth:45,speckle:8 ,blur:0.5},
  photo:{mode:'color',colors:48,detail:55,smooth:60,speckle:24,blur:1},
  line :{mode:'mono' ,colors:2 ,detail:85,smooth:35,speckle:4 ,blur:0,thresh:150}
};
const P={...DEFAULTS};
const FMT={colors:v=>v,thresh:v=>v,detail:v=>v+'%',smooth:v=>v+'%',speckle:v=>v+' px²',blur:v=>v+' px',cell:v=>v?v+' px':'Auto'};
let src=null;            // {canvas,w,h,name,bytes}
let layers=[];           // computed layers
let result={png:0};
let history=[];

/* ------------------------------------------------------------------ UI BINDING */
function fillRange(inp){const p=(inp.value-inp.min)/(inp.max-inp.min)*100;inp.style.setProperty('--p',p+'%')}
function syncUI(){
  $$('.row[data-key]').forEach(r=>{
    const k=r.dataset.key,i=r.querySelector('input');
    i.value=P[k];fillRange(i);r.querySelector('output').textContent=FMT[k](P[k]);
  });
  $('#ink').value=P.ink;$('#rmbg').checked=P.rmbg;if($('#outline'))$('#outline').checked=P.outline;
  $$('#mode button').forEach((b,i)=>{b.classList.toggle('on',b.dataset.m===P.mode);if(b.dataset.m===P.mode)$('#mode .thumb').style.transform=`translateX(${i*100}%)`});
  $$('[data-modes]').forEach(r=>r.classList.toggle('off',!r.dataset.modes.split(' ').includes(P.mode)));
}
$$('.row[data-key]').forEach(r=>{
  const k=r.dataset.key,i=r.querySelector('input');
  i.addEventListener('input',()=>{P[k]=+i.value;fillRange(i);r.querySelector('output').textContent=FMT[k](P[k]);clearPreset();schedule()});
});
$$('#mode button').forEach(b=>b.addEventListener('click',()=>{P.mode=b.dataset.m;clearPreset();syncUI();schedule()}));
$('#ink').addEventListener('input',e=>{P.ink=e.target.value;schedule()});
$('#rmbg').addEventListener('change',e=>{P.rmbg=e.target.checked;schedule()});
if($('#outline'))$('#outline').addEventListener('change',e=>{P.outline=e.target.checked;schedule()});
$$('#presets button').forEach(b=>b.addEventListener('click',()=>{Object.assign(P,PRESETS[b.dataset.p]);syncUI();markPreset(b.dataset.p);schedule()}));
function markPreset(n){$$('#presets button').forEach(b=>b.classList.toggle('on',b.dataset.p===n))}
function clearPreset(){markPreset(null)}
$('#btnReset').addEventListener('click',()=>{Object.assign(P,DEFAULTS);syncUI();clearPreset();schedule()});
(()=>{const c=document.createElement('canvas').getContext('2d');if(typeof c.filter!=='string')$('#blurRow').remove()})();

/* ------------------------------------------------------------------ SAMPLES */
function mk(w,h){const c=document.createElement('canvas');c.width=w;c.height=h;return [c,c.getContext('2d')]}
const SAMPLES={
  logo(){
    const [c,x]=mk(720,540);
    x.fillStyle='#fbf3e6';x.fillRect(0,0,720,540);
    x.fillStyle='#5b43f0';x.beginPath();x.arc(300,270,200,0,7);x.fill();
    x.fillStyle='#fbf3e6';x.beginPath();x.arc(300,270,108,0,7);x.fill();
    x.save();x.translate(300,270);x.rotate(.785);x.fillStyle='#ff6f45';rr(x,-62,-62,124,124,26);x.fill();x.restore();
    x.fillStyle='#16d6a1';x.beginPath();x.moveTo(470,420);x.bezierCurveTo(540,330,600,470,680,380);x.lineTo(680,500);x.lineTo(470,500);x.closePath();x.fill();
    x.fillStyle='#ffc94d';x.beginPath();x.arc(560,130,48,0,7);x.fill();
    x.strokeStyle='#1b1630';x.lineWidth=14;x.beginPath();x.arc(560,130,86,.4,4.4);x.stroke();
    x.fillStyle='#1b1630';x.beginPath();x.arc(300,270,16,0,7);x.fill();
    return c;
  },
  scene(){
    const [c,x]=mk(720,540);
    let g=x.createLinearGradient(0,0,0,360);g.addColorStop(0,'#35286e');g.addColorStop(.55,'#d8508a');g.addColorStop(1,'#ffb36b');
    x.fillStyle=g;x.fillRect(0,0,720,540);
    g=x.createRadialGradient(480,290,10,480,290,170);g.addColorStop(0,'rgba(255,240,170,.9)');g.addColorStop(1,'rgba(255,240,170,0)');
    x.fillStyle=g;x.fillRect(250,100,460,380);
    x.fillStyle='#ffeaa6';x.beginPath();x.arc(480,290,64,0,7);x.fill();
    poly(x,'#6a3f93',[[0,380],[90,270],[170,330],[270,220],[390,350],[470,300],[560,360],[640,260],[720,340],[720,400],[0,400]]);
    poly(x,'#41285f',[[0,420],[110,330],[230,400],[330,310],[450,410],[580,320],[720,420],[720,430],[0,430]]);
    g=x.createLinearGradient(0,400,0,540);g.addColorStop(0,'#3b2a6d');g.addColorStop(1,'#16113a');
    x.fillStyle=g;x.fillRect(0,420,720,120);
    x.fillStyle='#ffd58a';for(let i=0;i<7;i++){x.fillRect(480-(60-i*7),438+i*14,(60-i*7)*2,5)}
    x.strokeStyle='#241546';x.lineWidth=4;x.lineCap='round';
    [[110,120],[160,90],[215,140]].forEach(([a,b])=>{x.beginPath();x.moveTo(a-16,b);x.quadraticCurveTo(a-6,b-12,a,b);x.quadraticCurveTo(a+6,b-12,a+16,b);x.stroke()});
    return c;
  },
  icon(){
    const [c,x]=mk(640,520);
    x.fillStyle='#4ff0c0';x.strokeStyle='#0b3b33';x.lineWidth=16;x.lineJoin='round';
    rr(x,90,70,460,300,70);x.fill();x.stroke();
    x.beginPath();x.moveTo(200,370);x.lineTo(160,460);x.lineTo(290,372);x.closePath();x.fill();x.stroke();
    x.fillStyle='#0b3b33';[230,320,410].forEach(px=>{x.beginPath();x.arc(px,220,26,0,7);x.fill()});
    x.fillStyle='#ffd166';x.strokeStyle='#0b3b33';x.lineWidth=10;star(x,540,92,46,20,5);x.fill();x.stroke();
    return c;
  }
};
function rr(x,a,b,w,h,r){x.beginPath();x.moveTo(a+r,b);x.arcTo(a+w,b,a+w,b+h,r);x.arcTo(a+w,b+h,a,b+h,r);x.arcTo(a,b+h,a,b,r);x.arcTo(a,b,a+w,b,r);x.closePath()}
function poly(x,f,p){x.fillStyle=f;x.beginPath();p.forEach(([a,b],i)=>i?x.lineTo(a,b):x.moveTo(a,b));x.closePath();x.fill()}
function star(x,cx,cy,R,r,n){x.beginPath();for(let i=0;i<n*2;i++){const a=Math.PI*i/n-Math.PI/2,d=i%2?r:R;x.lineTo(cx+Math.cos(a)*d,cy+Math.sin(a)*d)}x.closePath()}

/* ------------------------------------------------------------------ PAGE SUBJECT SAMPLES */
async function decodeSvgToCanvas(svgInner,w,h){
  const svg='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="'+w+'" height="'+h+'">'+svgInner+'</svg>';
  const url=URL.createObjectURL(new Blob([svg],{type:'image/svg+xml'}));
  const img=new Image();img.src=url;await img.decode();
  const [c,x]=mk(w,h);x.drawImage(img,0,0,w,h);URL.revokeObjectURL(url);return c;
}
const toBlob=(c,t,q)=>new Promise(r=>c.toBlob(r,t,q));
async function applyPost(c,p){
  const w=c.width,h=c.height;
  if(p==='jpeg'||p==='webp'){
    const t=p==='jpeg'?'image/jpeg':'image/webp';
    const [b,bx]=mk(w,h);bx.fillStyle='#fff';bx.fillRect(0,0,w,h);bx.drawImage(c,0,0);
    const blob=await toBlob(b,t,p==='jpeg'?.4:.5);
    const img=new Image();img.src=URL.createObjectURL(blob);await img.decode();
    const [o,ox]=mk(w,h);ox.drawImage(img,0,0);o.__bytes=blob.size;return o;
  }
  const [o,ox]=mk(w,h);
  if(p==='lowres'||p==='pixelate'){
    const k=p==='lowres'?40:64,[s,sx]=mk(k,Math.round(k*h/w));sx.drawImage(c,0,0,s.width,s.height);
    ox.imageSmoothingEnabled=p==='lowres';ox.drawImage(s,0,0,w,h);return o;
  }
  ox.drawImage(c,0,0);
  const id=ox.getImageData(0,0,w,h),d=id.data;
  if(p==='noise'){for(let i=0;i<d.length;i+=4){const n=(Math.random()-.5)*46;d[i]+=n;d[i+1]+=n;d[i+2]+=n*.9}}
  if(p==='posterize'){for(let i=0;i<d.length;i+=4){d[i]=Math.round(d[i]/85)*85;d[i+1]=Math.round(d[i+1]/85)*85;d[i+2]=Math.round(d[i+2]/85)*85}}
  ox.putImageData(id,0,0);return o;
}
async function loadSubject(pg){
  let c=await decodeSvgToCanvas(pg.subject,800,600);
  for(const p of pg.post||[])c=await applyPost(c,p);
  const bytes=c.__bytes||(await toBlob(c,'image/png')).size;
  setSource(c,pg.sampleName||'sample.png',bytes);
}

/* ------------------------------------------------------------------ LOADING */
const origCanvas=$('#origCanvas'),stageO=$('#stageO'),stageV=$('#stageV'),viewer=$('#viewer');
async function setSource(canvas,name,bytes){
  src={canvas,w:canvas.width,h:canvas.height,name,bytes,id:(setSource.n=(setSource.n||0)+1)};
  origCanvas.width=src.w;origCanvas.height=src.h;
  origCanvas.getContext('2d').drawImage(canvas,0,0);
  for(const s of [stageO,stageV]){s.style.width=src.w+'px';s.style.height=src.h+'px'}
  $('#fname').textContent=name;
  $('#fmeta').textContent=`${src.w} × ${src.h} px · ${fmtBytes(bytes)}`;
  history=[];
  fitView(true);
  run();
  if(!reduced)revealSweep();
}
async function loadSample(n){
  const c=SAMPLES[n]();
  const blob=await new Promise(r=>c.toBlob(r,'image/png'));
  setSource(c,`sample-${n}.png`,blob.size);
}
async function loadFile(f){
  if(!f||!f.type.startsWith('image/')){toast(L('needImage','Please choose an image file'));return}
  const url=URL.createObjectURL(f);
  try{
    const img=new Image();img.src=url;await img.decode();
    let w=img.naturalWidth,h=img.naturalHeight;const cap=3000,k=Math.min(1,cap/Math.max(w,h));
    w=Math.round(w*k);h=Math.round(h*k);
    const [c,x]=mk(w,h);x.drawImage(img,0,0,w,h);
    await setSource(c,f.name||'pasted-image.png',f.size);
  }catch(e){toast(L('readFail','Could not read that image'))}
  URL.revokeObjectURL(url);
}
$$('[data-sample]').forEach(b=>b.addEventListener('click',()=>b.dataset.sample==='subject'?loadSubject(PG):loadSample(b.dataset.sample)));
$('#navUpload').addEventListener('click',()=>{$('#converter').scrollIntoView({behavior:'smooth'});setTimeout(()=>$('#file').click(),350)});
$('#drop').addEventListener('click',()=>$('#file').click());
$('#drop').addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();$('#file').click()}});
['dragenter','dragover'].forEach(t=>$('#drop').addEventListener(t,()=>$('#drop').classList.add('over')));
['dragleave','drop'].forEach(t=>$('#drop').addEventListener(t,()=>$('#drop').classList.remove('over')));
$('#file').addEventListener('change',e=>{loadFile(e.target.files[0]);e.target.value=''});
let dragN=0;
addEventListener('dragenter',e=>{e.preventDefault();dragN++;document.body.classList.add('dragging')});
addEventListener('dragleave',e=>{dragN=Math.max(0,dragN-1);if(!dragN)document.body.classList.remove('dragging')});
addEventListener('dragover',e=>e.preventDefault());
addEventListener('drop',e=>{e.preventDefault();dragN=0;document.body.classList.remove('dragging');const f=e.dataTransfer.files[0];if(f){loadFile(f);$('#converter').scrollIntoView({behavior:'smooth'})}});
addEventListener('paste',e=>{const it=[...(e.clipboardData?.items||[])].find(i=>i.type.startsWith('image/'));if(it)loadFile(it.getAsFile())});

/* ------------------------------------------------------------------ PIPELINE */
let timer=0;
function schedule(){viewer.classList.add('busy');clearTimeout(timer);timer=setTimeout(run,45)}

function run(){
  if(!src)return;
  const T=[performance.now()];
  const mark=()=>T.push(performance.now());
  let pw,ph,scale;
  if(P.mode==='pixel'){
    const wk=run.wk||(run.wk=document.createElement('canvas'));
    const cap=Math.min(1,1024/Math.max(src.w,src.h)),nw=Math.round(src.w*cap),nh=Math.round(src.h*cap);
    wk.width=nw;wk.height=nh;
    const wx=wk.getContext('2d',{willReadFrequently:true});wx.imageSmoothingEnabled=false;wx.drawImage(src.canvas,0,0,nw,nh);
    const dd=wx.getImageData(0,0,nw,nh).data;mark();
    const cell=P.cell||detectCell(dd,nw,nh);
    const gw=Math.max(1,Math.floor(nw/cell)),gh=Math.max(1,Math.floor(nh/cell)),grid=new Uint8ClampedArray(gw*gh*4);
    for(let y=0;y<gh;y++)for(let x=0;x<gw;x++){const sx=Math.min(nw-1,Math.floor((x+.5)*cell)),sy=Math.min(nh-1,Math.floor((y+.5)*cell)),a=(sy*nw+sx)*4,b=(y*gw+x)*4;grid[b]=dd[a];grid[b+1]=dd[a+1];grid[b+2]=dd[a+2];grid[b+3]=dd[a+3]}
    const qq=quantize(grid,gw,gh,{...P,mode:'color',nosnap:true});
    const q=finishLabels(qq.labels,gw,gh,qq.pal,0);mark();
    const order=[...q.palette.keys()].filter(i=>q.counts[i]>0).sort((a,b)=>q.counts[b]-q.counts[a]);
    const cw=src.w/gw,chh=src.h/gh,n2=v=>''+Math.round(v*100)/100,out=[];
    for(const lab of order){
      let d='',rects=0;
      for(let y=0;y<gh;y++){let x=0;while(x<gw){if(q.labels[y*gw+x]!==lab){x++;continue}const st=x;while(x<gw&&q.labels[y*gw+x]===lab)x++;d+='M'+n2(st*cw)+' '+n2(y*chh)+'h'+n2((x-st)*cw)+'v'+n2(chh)+'h'+n2(-(x-st)*cw)+'z';rects++}}
      if(rects)out.push({hex:toHex(q.palette[lab]),d,nodes:rects*4,shapes:rects,share:q.counts[lab]/q.total,visible:true});
    }
    mark();layers=out;pw=gw;ph=gh;
  }else{
  // --- decode / resample
  const maxDim=200+(P.detail/100)*700;
  scale=Math.min(4,maxDim/Math.max(src.w,src.h));
  const MAXPX=420000;
  if(src.w*src.h*scale*scale>MAXPX)scale=Math.sqrt(MAXPX/(src.w*src.h));
  pw=Math.max(8,Math.round(src.w*scale));ph=Math.max(8,Math.round(src.h*scale));
  const wk=run.wk||(run.wk=document.createElement('canvas'));
  wk.width=pw;wk.height=ph;
  const wx=wk.getContext('2d',{willReadFrequently:true});
  if(typeof wx.filter==='string')wx.filter=P.blur>0?`blur(${P.blur}px)`:'none';
  wx.imageSmoothingQuality='high';
  wx.drawImage(src.canvas,0,0,pw,ph);
  if(typeof wx.filter==='string')wx.filter='none';
  const img=wx.getImageData(0,0,pw,ph);
  mark();
  // --- quantize
  const qk=[src.id,pw,ph,P.mode,P.colors,P.thresh,P.ink,P.rmbg,P.blur].join('|');
  if(!run.qc||run.qc.key!==qk)run.qc={key:qk,...quantize(img.data,pw,ph,P)};
  const q=finishLabels(run.qc.labels.slice(),pw,ph,run.qc.pal,P.speckle*scale*scale*.6);
  mark();
  // --- trace (stacked layers, sub-pixel contours)
  const order=[...q.palette.keys()].filter(i=>q.counts[i]>0).sort((a,b)=>q.counts[b]-q.counts[a]);
  const baseRect=q.transparent===0&&P.mode!=='mono'&&order.length>0;
  const rk=new Int16Array(q.palette.length).fill(-1);order.forEach((l,i)=>rk[l]=i);
  const ranks=new Int16Array(pw*ph);
  for(let i=0;i<ranks.length;i++){const l=q.labels[i];ranks[i]=l<0?-1:rk[l]}
  const loopsPer=order.map((l,r)=>(r===0&&baseRect)?null:contours(ranks,pw,ph,r));
  mark();
  // --- fit curves
  const cfg={err:0.22+(P.smooth/100)*1.3,thr:(38+P.smooth*.55)*Math.PI/180,sx:src.w/pw,sy:src.h/ph,prec:Math.max(src.w,src.h)<400?2:1};
  const speck=Math.max(1,P.speckle*scale*scale*.6);
  const total=q.total,out=[];
  order.forEach((l,r)=>{
    const hex=toHex(q.palette[l]);
    if(!loopsPer[r]){out.push({hex,d:`M0 0H${src.w}V${src.h}H0Z`,nodes:4,shapes:1,share:q.counts[l]/total,visible:true});return}
    let d='',nodes=0,shapes=0;
    for(const lp of loopsPer[r]){
      if(Math.abs(lp.area)<speck)continue;
      const res=loopPath(lp.xs,lp.ys,cfg);
      if(!res)continue;
      d+=res.d;nodes+=res.nodes;shapes++;
    }
    if(shapes)out.push({hex,d,nodes,shapes,share:q.counts[l]/total,visible:true});
  });
  layers=out;
  }
  mark();
  // --- render
  render();
  mark();
  const ms=T[T.length-1]-T[0];
  const steps=[];for(let i=1;i<T.length;i++)steps.push(T[i]-T[i-1]);
  updatePipe(steps,ms);
  $('#mRes').textContent=L('tracedAt','traced at {w}×{h}',{w:pw,h:ph});
  viewer.classList.remove('busy');
  setNum('#mTime',ms,v=>v<10?v.toFixed(1):Math.round(v));
}

/* ----- render current layer state */
let svgPreviewEl=null;
function svgString(preview){
  const ol=P.outline&&P.mode!=='pixel';
  let s=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${src.w} ${src.h}" width="${src.w}" height="${src.h}"${P.mode==='pixel'?' shape-rendering="crispEdges"':''}>\n`;
  layers.forEach((l,i)=>{
    if(!l.visible)return;
    const a=preview?` data-i="${i}"`:'';
    if(ol){if(l.d.startsWith('M0 0H'))return;s+=`<path${a} fill="none" stroke="${l.hex}" stroke-width="1.6" stroke-linejoin="round" d="${l.d}"/>\n`;return}
    s+=`<path${a} fill="${l.hex}" fill-rule="evenodd" d="${l.d}"/>
`;
  });
  return s+`</svg>`;
}
function render(){
  stageV.innerHTML=svgString(true);
  svgPreviewEl=stageV.querySelector('svg');
  const str=svgString(false);
  const bytes=str.length;
  result.svg=bytes;result.str=str;
  const vis=layers.filter(l=>l.visible);
  const nodes=vis.reduce((a,l)=>a+l.nodes,0),shapes=vis.reduce((a,l)=>a+l.shapes,0);
  // metrics
  setNum('#mSize',bytes,fmtBytes);
  setNum('#mShapes',shapes,v=>Math.round(v).toLocaleString());
  setNum('#mNodes',nodes,v=>Math.round(v).toLocaleString());
  setNum('#mColors',vis.length,v=>Math.round(v));
  const png=src.bytes,mx=Math.max(png,bytes,1);
  $('#barPng').style.width=(png/mx*100)+'%';$('#barSvg').style.width=(bytes/mx*100)+'%';
  const pct=(1-bytes/png)*100;
  $('#mSizeSub').innerHTML=pct>=0
    ?L('smaller','<span class="delta good">{pct}% smaller</span> than the {size} PNG',{pct:pct.toFixed(0),size:fmtBytes(png)})
    :L('larger','<span class="delta warn">{pct}% larger</span> than the {size} PNG',{pct:Math.abs(pct).toFixed(0),size:fmtBytes(png)});
  $('#mStack').innerHTML=vis.map(l=>`<i style="width:${l.share*100}%;background:${l.hex}"></i>`).join('');
  renderLayers();
  renderCode(str);
  // history (only record when computed from a full run)
  if(render.record!==false){history.push(bytes);if(history.length>40)history.shift();drawSpark()}
  render.record=true;
}
function renderLayers(){
  const host=$('#layers');
  if(!layers.length){host.innerHTML='<div class="empty">'+L('noShapes','No visible shapes — try lowering “Remove specks”.')+'</div>';return}
  host.innerHTML=layers.map((l,i)=>`<button class="layer${l.visible?'':' off'}" data-i="${i}">
    <span class="sw" style="background:${l.hex}"></span><span class="hex mono">${l.hex.toUpperCase()}</span>
    <span class="meter"><i style="width:${Math.max(2,l.share*100)}%;background:${l.hex}"></i></span>
    <b>${(l.share*100).toFixed(l.share<.1?1:0)}%</b><em>${l.nodes.toLocaleString()} ${L('pts','pts')}</em></button>`).join('');
}
$('#layers').addEventListener('click',e=>{
  const b=e.target.closest('.layer');if(!b)return;
  const l=layers[+b.dataset.i];l.visible=!l.visible;
  render.record=false;render();
});
$('#layers').addEventListener('mouseover',e=>{
  const b=e.target.closest('.layer');if(!b||!svgPreviewEl)return;
  svgPreviewEl.classList.add('dim');
  svgPreviewEl.querySelectorAll('.hot').forEach(p=>p.classList.remove('hot'));
  svgPreviewEl.querySelector(`path[data-i="${b.dataset.i}"]`)?.classList.add('hot');
});
$('#layers').addEventListener('mouseleave',()=>{if(svgPreviewEl)svgPreviewEl.classList.remove('dim')});

function updatePipe(steps,total){
  $$('#pipe .step').forEach((s,i)=>{
    s.querySelector('b').textContent=steps[i]<10?steps[i].toFixed(1)+' ms':Math.round(steps[i])+' ms';
    s.querySelector('i').style.width=Math.max(4,steps[i]/total*100)+'%';
  });
}

/* ------------------------------------------------------------------ CODE PANEL */
const esc=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
function renderCode(str){
  const LIM=3000;
  const cut=str.length>LIM;
  const t=esc(cut?str.slice(0,LIM):str).replace(/(&lt;\/?[\w]+)|(\s[\w:-]+)(=)|("[^"]*"?)/g,(m,a,b,c,d)=>a?`<span class="t">${a}</span>`:b?`<span class="a">${b}</span>${c}`:`<span class="s">${d}</span>`);
  $('#code').innerHTML=t+(cut?`\n<span style="opacity:.6">${L('moreChars','… {n} more characters',{n:(str.length-LIM).toLocaleString()})}</span>`:'');
  $('#codeMeta').textContent=L('lines','{n} lines',{n:str.split('\n').length})+` · ${fmtBytes(str.length)}`+(cut?' · '+L('previewOnly','preview only — Copy or Download gives the full file'):'');
}

/* ------------------------------------------------------------------ SPARKLINE */
function drawSpark(){
  const svg=$('#spark'),W=320,H=130,pad=8;
  const png=src.bytes;
  const mx=Math.max(png,...history)*1.12||1;
  const X=i=>history.length<2?W/2:(i/(history.length-1))*(W-pad*2)+pad;
  const Y=v=>H-pad-(v/mx)*(H-pad*2);
  const pts=history.map((v,i)=>[X(i),Y(v)]);
  const line=pts.map((p,i)=>(i?'L':'M')+p[0].toFixed(1)+' '+p[1].toFixed(1)).join(' ');
  const last=pts[pts.length-1]||[W/2,H/2];
  svg.innerHTML=`<defs><linearGradient id="sg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="var(--accent)" stop-opacity=".35"/><stop offset="1" stop-color="var(--accent)" stop-opacity="0"/></linearGradient></defs>
  ${[.25,.5,.75].map(f=>`<line x1="0" x2="${W}" y1="${H*f}" y2="${H*f}" stroke="var(--line)" vector-effect="non-scaling-stroke"/>`).join('')}
  <line x1="0" x2="${W}" y1="${Y(png)}" y2="${Y(png)}" stroke="var(--faint)" stroke-dasharray="5 5" vector-effect="non-scaling-stroke"/>
  ${pts.length>1?`<path d="${line} L${last[0]} ${H} L${pts[0][0]} ${H}Z" fill="url(#sg)"/><path d="${line}" fill="none" stroke="var(--accent)" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round" vector-effect="non-scaling-stroke"/>`:''}
  <circle cx="${last[0]}" cy="${last[1]}" r="4.5" fill="var(--accent-2)" stroke="var(--surface)" stroke-width="2" vector-effect="non-scaling-stroke"/>`;
  $('#traceNote').textContent=(history.length===1?L('run1','1 run · now {size}',{size:fmtBytes(history[history.length-1]||0)}):L('runs','{n} runs · now {size}',{n:history.length,size:fmtBytes(history[history.length-1]||0)}));
}

/* ------------------------------------------------------------------ NUMBERS */
const tweens=new WeakMap();
function setNum(sel,to,fmt){
  const el=$(sel);const from=tweens.get(el)?.v??0;
  if(reduced||from===to||document.hidden){el.textContent=fmt(to);tweens.set(el,{v:to});return}
  const t0=performance.now(),d=380;
  const st={v:to,id:0};tweens.set(el,st);
  const step=t=>{
    const k=Math.min(1,(t-t0)/d),e=1-Math.pow(1-k,3);
    el.textContent=fmt(from+(to-from)*e);
    if(k<1&&tweens.get(el)===st)st.id=requestAnimationFrame(step);
  };requestAnimationFrame(step);
}
function fmtBytes(b){b=Math.round(b);return b<1024?b+' B':b<1048576?(b/1024).toFixed(b<10240?1:0)+' KB':(b/1048576).toFixed(2)+' MB'}
const toHex=c=>'#'+c.map(v=>Math.round(v).toString(16).padStart(2,'0')).join('');
function hexToRgb(h){const n=parseInt(h.slice(1),16);return [n>>16&255,n>>8&255,n&255]}

/* ------------------------------------------------------------------ QUANTIZE */
function gcd(a,b){while(b){const t=a%b;a=b;b=t}return a}
function detectCell(d,w,h){
  let g=0;const same=(a,b)=>d[a]===d[b]&&d[a+1]===d[b+1]&&d[a+2]===d[b+2]&&d[a+3]===d[b+3];
  const rows=Math.min(h,64),cols=Math.min(w,64);
  for(let r=0;r<rows;r++){const y=Math.floor(r*h/rows);let run=1;for(let x=1;x<=w;x++){if(x<w&&same((y*w+x)*4,(y*w+x-1)*4))run++;else{g=gcd(g,run);run=1;if(g===1)return 1}}}
  for(let c=0;c<cols;c++){const x=Math.floor(c*w/cols);let run=1;for(let y=1;y<=h;y++){if(y<h&&same((y*w+x)*4,((y-1)*w+x)*4))run++;else{g=gcd(g,run);run=1;if(g===1)return 1}}}
  return Math.max(1,Math.min(64,g));
}
function quantize(d,w,h,p){
  const n=w*h,bg=new Uint8Array(n);
  let nt=0;
  for(let i=0;i<n;i++)if(d[i*4+3]<128)bg[i]=1;
  if(p.rmbg){
    const like=i=>d[i*4+3]<128||(d[i*4]>236&&d[i*4+1]>236&&d[i*4+2]>236);
    const st=new Int32Array(n);let sp=0;
    for(let i=0;i<n;i++)if(bg[i])st[sp++]=i;
    const seed=i=>{if(!bg[i]&&like(i)){bg[i]=1;st[sp++]=i}};
    for(let x=0;x<w;x++){seed(x);seed((h-1)*w+x)}
    for(let y=0;y<h;y++){seed(y*w);seed(y*w+w-1)}
    while(sp){
      const i=st[--sp],x=i%w,y=(i/w)|0;
      if(x>0)seed(i-1);if(x<w-1)seed(i+1);if(y>0)seed(i-w);if(y<h-1)seed(i+w);
    }
  }
  const labels=new Int16Array(n).fill(-1);
  const mode=p.mode;
  const luma=i=>(d[i*4]*.299+d[i*4+1]*.587+d[i*4+2]*.114);
  if(mode==='mono'){
    const counts=[0];
    for(let i=0;i<n;i++){if(bg[i])continue;if(luma(i)<p.thresh){labels[i]=0;counts[0]++}}
    return {labels,pal:[hexToRgb(p.ink)]};
  }
  // sample
  const live=[];let cnt=0;for(let i=0;i<n;i++)if(!bg[i])cnt++;
  nt=n-cnt;
  const step=Math.max(1,Math.floor(cnt/20000));
  const R=[],G=[],B=[];let k=0;
  for(let i=0;i<n;i++){if(bg[i])continue;if(k++%step)continue;
    if(mode==='gray'){const y=luma(i)|0;R.push(y);G.push(y);B.push(y)}else{R.push(d[i*4]);G.push(d[i*4+1]);B.push(d[i*4+2])}}
  if(!R.length)return {labels,pal:[]};
  const pal=medianCut(R,G,B,p.colors);
  const pc=refine(R,G,B,pal);dedupe(pal,pc,mode==='gray'?6:15);
  // assign
  const cache=new Int16Array(262144).fill(-1);
  const counts=new Array(pal.length).fill(0);
  const gray=mode==='gray';
  for(let i=0;i<n;i++){
    if(bg[i])continue;
    let r,g,b;
    if(gray){r=g=b=luma(i)|0}else{r=d[i*4];g=d[i*4+1];b=d[i*4+2]}
    const key=(r>>2)<<12|(g>>2)<<6|(b>>2);
    let l=cache[key];
    if(l<0){
      let best=1e9;l=0;
      for(let j=0;j<pal.length;j++){const q=pal[j];const dr=q[0]-r,dg=q[1]-g,db=q[2]-b,dd=dr*dr+dg*dg+db*db;if(dd<best){best=dd;l=j}}
      cache[key]=l;
    }
    labels[i]=l;counts[l]++;
  }
  if(!gray&&!p.nosnap)snapFringe(labels,d,w,h,pal);
  return {labels,pal};
}
function medianCut(R,G,B,k){
  const m=R.length,ord=new Uint32Array(m);for(let i=0;i<m;i++)ord[i]=i;
  const stat=(s,e)=>{
    let r0=255,r1=0,g0=255,g1=0,b0=255,b1=0;
    for(let i=s;i<e;i++){const j=ord[i];
      if(R[j]<r0)r0=R[j];if(R[j]>r1)r1=R[j];if(G[j]<g0)g0=G[j];if(G[j]>g1)g1=G[j];if(B[j]<b0)b0=B[j];if(B[j]>b1)b1=B[j]}
    const rr=r1-r0,gr=g1-g0,br=b1-b0;
    const ch=rr>=gr&&rr>=br?0:gr>=br?1:2,range=Math.max(rr,gr,br);
    return {s,e,ch,range,pri:range*Math.sqrt(e-s)};
  };
  const boxes=[stat(0,m)];
  while(boxes.length<k){
    let bi=-1,bp=0;
    boxes.forEach((b,i)=>{if(b.range>0&&b.e-b.s>1&&b.pri>bp){bp=b.pri;bi=i}});
    if(bi<0)break;
    const b=boxes[bi],arr=b.ch===0?R:b.ch===1?G:B;
    const sub=ord.subarray(b.s,b.e);sub.sort((a,c)=>arr[a]-arr[c]);
    const mid=b.s+((b.e-b.s)>>1);
    boxes.splice(bi,1,stat(b.s,mid),stat(mid,b.e));
  }
  return boxes.map(b=>{let r=0,g=0,bl=0;const c=b.e-b.s;for(let i=b.s;i<b.e;i++){const j=ord[i];r+=R[j];g+=G[j];bl+=B[j]}return [r/c,g/c,bl/c]});
}
function dedupe(pal,cnt,th){
  const t2=th*th;
  for(;;){
    let bi=-1,bj=-1,bd=t2;
    for(let i=0;i<pal.length;i++)for(let j=i+1;j<pal.length;j++){
      const a=pal[i],b=pal[j],d=(a[0]-b[0])**2+(a[1]-b[1])**2+(a[2]-b[2])**2;
      if(d<bd){bd=d;bi=i;bj=j}
    }
    if(bi<0)return;
    const ci=cnt[bi]||1,cj=cnt[bj]||1,t=ci+cj;
    pal[bi]=[0,1,2].map(k=>(pal[bi][k]*ci+pal[bj][k]*cj)/t);cnt[bi]=t;
    pal.splice(bj,1);cnt.splice(bj,1);
  }
}
function refine(R,G,B,pal){
  const k=pal.length;let cnt=[];
  for(let it=0;it<3;it++){
    const sum=pal.map(()=>[0,0,0,0]);
    for(let i=0;i<R.length;i++){
      let best=1e9,l=0;
      for(let j=0;j<k;j++){const q=pal[j],dr=q[0]-R[i],dg=q[1]-G[i],db=q[2]-B[i],dd=dr*dr+dg*dg+db*db;if(dd<best){best=dd;l=j}}
      const s=sum[l];s[0]+=R[i];s[1]+=G[i];s[2]+=B[i];s[3]++;
    }
    for(let j=0;j<k;j++)if(sum[j][3]){pal[j]=[sum[j][0]/sum[j][3],sum[j][1]/sum[j][3],sum[j][2]/sum[j][3]]}
    cnt=sum.map(x=>x[3]);
  }
  return cnt;
}

/* ------------------------------------------------------------------ CLEANUP */
function snapFringe(L,d,w,h,pal){
  // anti-aliased edge pixels often quantize to a "mix" colour that lies between two neighbouring palette colours: snap them
  const out=L.slice(),nb=[];
  for(let y=1;y<h-1;y++){
    for(let x=1;x<w-1;x++){
      const i=y*w+x,l=L[i];if(l<0)continue;
      nb.length=0;
      for(let dy=-1;dy<=1;dy++)for(let dx=-1;dx<=1;dx++){
        if(!dx&&!dy)continue;const nl=L[i+dy*w+dx];
        if(nl>=0&&nl!==l&&nb.indexOf(nl)<0)nb.push(nl);
      }
      if(nb.length<2)continue;
      const r=d[i*4],g=d[i*4+1],b=d[i*4+2],po=pal[l];
      const own=(po[0]-r)**2+(po[1]-g)**2+(po[2]-b)**2;
      let bestD=1e9,pick=-1;
      for(let a=0;a<nb.length;a++)for(let c=a+1;c<nb.length;c++){
        const A=pal[nb[a]],B=pal[nb[c]];
        const vx=B[0]-A[0],vy=B[1]-A[1],vz=B[2]-A[2],vv=vx*vx+vy*vy+vz*vz||1;
        let t=((r-A[0])*vx+(g-A[1])*vy+(b-A[2])*vz)/vv;t=t<0?0:t>1?1:t;
        const dd=(r-A[0]-t*vx)**2+(g-A[1]-t*vy)**2+(b-A[2]-t*vz)**2;
        if(dd<bestD){bestD=dd;pick=t<.5?nb[a]:nb[c]}
      }
      if(bestD<400&&bestD<own*.45)out[i]=pick;
    }
  }
  L.set(out);
}
function mergeSmall(L,w,h,minA){
  const n=w*h,seen=new Uint8Array(n),stack=new Int32Array(n),list=new Int32Array(n);
  for(let s=0;s<n;s++){
    if(seen[s])continue;
    const l=L[s];let sp=0,cnt=0;stack[sp++]=s;seen[s]=1;
    while(sp){
      const i=stack[--sp];list[cnt++]=i;const x=i%w,y=(i/w)|0;
      if(x>0&&!seen[i-1]&&L[i-1]===l){seen[i-1]=1;stack[sp++]=i-1}
      if(x<w-1&&!seen[i+1]&&L[i+1]===l){seen[i+1]=1;stack[sp++]=i+1}
      if(y>0&&!seen[i-w]&&L[i-w]===l){seen[i-w]=1;stack[sp++]=i-w}
      if(y<h-1&&!seen[i+w]&&L[i+w]===l){seen[i+w]=1;stack[sp++]=i+w}
    }
    if(cnt>=minA)continue;
    const tally={};let best=null,bc=0;
    const chk=j=>{const nl=L[j];if(nl!==l){const c=(tally[nl]=(tally[nl]||0)+1);if(c>bc){bc=c;best=nl}}};
    for(let k=0;k<cnt;k++){
      const i=list[k],x=i%w,y=(i/w)|0;
      if(x>0)chk(i-1);if(x<w-1)chk(i+1);if(y>0)chk(i-w);if(y<h-1)chk(i+w);
    }
    if(best!==null)for(let k=0;k<cnt;k++)L[list[k]]=best;
  }
}
function finishLabels(L,w,h,pal,minA){
  if(minA>=1.5)mergeSmall(L,w,h,minA);
  const counts=new Array(pal.length).fill(0);let t=0;
  for(let i=0;i<w*h;i++){if(L[i]>=0)counts[L[i]]++;else t++}
  return {labels:L,palette:pal,counts,transparent:t,total:w*h};
}

/* ------------------------------------------------------------------ TRACE (sub-pixel contours via marching squares) */
const WS={};
function wsFor(n){
  if(!WS.n||n>WS.n){
    WS.n=n;WS.f=new Float32Array(n);WS.g=new Float32Array(n);
    WS.px=new Float32Array(n*2);WS.py=new Float32Array(n*2);
    WS.l1=new Int32Array(n*2).fill(-1);WS.l2=new Int32Array(n*2).fill(-1);WS.vis=new Uint8Array(n*2);
  }
  return WS;
}
function contours(ranks,w,h,r){
  let x0=w,x1=-1,y0=h,y1=-1;
  for(let y=0;y<h;y++){const b=y*w;for(let x=0;x<w;x++)if(ranks[b+x]>=r){if(x<x0)x0=x;if(x>x1)x1=x;if(y<y0)y0=y;if(y>y1)y1=y}}
  if(x1<0)return [];
  const bw=x1-x0+1,bh=y1-y0+1;
  const o=3,Fw=bw+6,Fh=bh+6,S=wsFor(Fw*Fh),f=S.f,g=S.g,px=S.px,py=S.py,l1=S.l1,l2=S.l2,vis=S.vis;
  f.fill(0,0,Fw*Fh);g.fill(0,0,Fw*Fh);
  for(let y=-2;y<bh+2;y++){
    const yy=y+y0,sy=yy<0?0:yy>=h?h-1:yy,row=(y+o)*Fw+o;
    for(let x=-2;x<bw+2;x++){const xx=x+x0,sx=xx<0?0:xx>=w?w-1:xx;f[row+x]=ranks[sy*w+sx]>=r?1:0}
  }
  for(let pass=0;pass<2;pass++){
    for(let y=1;y<Fh-1;y++){const b=y*Fw;for(let x=1;x<Fw-1;x++)g[b+x]=(f[b+x-1]+2*f[b+x]+f[b+x+1])*.25}
    for(let y=1;y<Fh-1;y++){const b=y*Fw;for(let x=1;x<Fw-1;x++)f[b+x]=(g[b-Fw+x]+2*g[b+x]+g[b+Fw+x])*.25}
  }
  const touched=[];
  const place=e=>{
    const t=e&1,idx=e>>1,y=(idx/Fw)|0,x=idx-y*Fw,v0=f[idx],v1=t?f[idx+Fw]:f[idx+1],tt=(.5-v0)/(v1-v0);
    if(t){px[e]=x;py[e]=y+tt}else{px[e]=x+tt;py[e]=y}
  };
  const add=(a,b)=>{
    if(l1[a]<0){place(a);touched.push(a);l1[a]=b}else l2[a]=b;
    if(l1[b]<0){place(b);touched.push(b);l1[b]=a}else l2[b]=a;
  };
  for(let cy=0;cy<Fh-1;cy++){
    const rb=cy*Fw;
    for(let cx=0;cx<Fw-1;cx++){
      const i=rb+cx,a=f[i],b=f[i+1],c=f[i+Fw+1],d=f[i+Fw];
      const k=(a>=.5?8:0)|(b>=.5?4:0)|(c>=.5?2:0)|(d>=.5?1:0);
      if(k===0||k===15)continue;
      const T=i*2,R=(i+1)*2+1,B=(i+Fw)*2,L=i*2+1;
      switch(k){
        case 1:case 14:add(L,B);break;
        case 2:case 13:add(B,R);break;
        case 3:case 12:add(L,R);break;
        case 4:case 11:add(T,R);break;
        case 6:case 9:add(T,B);break;
        case 7:case 8:add(T,L);break;
        case 5:if((a+b+c+d)*.25>=.5){add(T,L);add(B,R)}else{add(T,R);add(L,B)}break;
        case 10:if((a+b+c+d)*.25>=.5){add(T,R);add(L,B)}else{add(T,L);add(B,R)}break;
      }
    }
  }
  const loops=[];
  for(const s of touched){
    if(vis[s])continue;
    const xs=[],ys=[];let prev=-1,cur=s;
    for(;;){
      vis[cur]=1;xs.push(px[cur]-o+.5+x0);ys.push(py[cur]-o+.5+y0);
      let nx=l1[cur];if(nx===prev||nx<0)nx=l2[cur];
      if(nx<0||nx===s||vis[nx])break;
      prev=cur;cur=nx;
    }
    if(xs.length<4)continue;
    let area=0;for(let k=0,c=xs.length;k<c;k++){const k2=(k+1)%c;area+=xs[k]*ys[k2]-xs[k2]*ys[k]}
    loops.push({xs,ys,area:area/2});
  }
  for(const e of touched){l1[e]=-1;l2[e]=-1;vis[e]=0}
  return loops;
}

/* ------------------------------------------------------------------ CURVE FITTING (Schneider) */
function rdp(cx,cy,eps){
  const n=cx.length,keep=new Uint8Array(n);keep[0]=keep[n-1]=1;
  const st=[0,n-1];
  while(st.length){
    const j=st.pop(),i=st.pop();
    if(j-i<2)continue;
    const x1=cx[i],y1=cy[i],dx=cx[j]-x1,dy=cy[j]-y1,L=Math.hypot(dx,dy);
    let dm=0,id=-1;
    for(let k=i+1;k<j;k++){
      const dist=L===0?Math.hypot(cx[k]-x1,cy[k]-y1):Math.abs(dy*(cx[k]-x1)-dx*(cy[k]-y1))/L;
      if(dist>dm){dm=dist;id=k}
    }
    if(dm>eps){keep[id]=1;st.push(i,id,id,j)}
  }
  return keep;
}
function findCorners(xs,ys,thr,kd){
  const n=xs.length,turn=new Float32Array(n);
  for(let i=0;i<n;i++){
    let j=i,acc=0,s=0;
    while(acc<kd&&s<n){const j2=(j+n-1)%n;acc+=Math.hypot(xs[j]-xs[j2],ys[j]-ys[j2]);j=j2;s++}
    let k=i;acc=0;s=0;
    while(acc<kd&&s<n){const k2=(k+1)%n;acc+=Math.hypot(xs[k2]-xs[k],ys[k2]-ys[k]);k=k2;s++}
    const ux=xs[i]-xs[j],uy=ys[i]-ys[j],vx=xs[k]-xs[i],vy=ys[k]-ys[i];
    const lu=Math.hypot(ux,uy),lv=Math.hypot(vx,vy);
    if(!lu||!lv)continue;
    turn[i]=Math.acos(Math.max(-1,Math.min(1,(ux*vx+uy*vy)/(lu*lv))));
  }
  const win=Math.max(2,Math.round(kd)),cs=[];
  for(let i=0;i<n;i++){
    if(turn[i]<thr)continue;
    let ok=true;
    for(let d=1;d<=win&&ok;d++){
      if(turn[(i-d+n)%n]>turn[i]||turn[(i+d)%n]>=turn[i])ok=false;
    }
    if(ok)cs.push(i);
  }
  return cs;
}
function norm2(x,y){const l=Math.hypot(x,y)||1;return [x/l,y/l]}
function tanFwd(X,Y){let j=1;while(j<X.length-1&&Math.hypot(X[j]-X[0],Y[j]-Y[0])<1.5)j++;return norm2(X[j]-X[0],Y[j]-Y[0])}
function tanBack(X,Y){const l=X.length-1;let j=l-1;while(j>0&&Math.hypot(X[j]-X[l],Y[j]-Y[l])<1.5)j--;return norm2(X[j]-X[l],Y[j]-Y[l])}
function fitChain(X,Y,t1,t2,errSq,out){
  fitRange(X,Y,0,X.length-1,t1,t2,errSq,out,0);
}
function bz(b,t){
  const s=1-t,a=s*s*s,c=3*s*s*t,d=3*s*t*t,e=t*t*t;
  return [a*b[0]+c*b[2]+d*b[4]+e*b[6],a*b[1]+c*b[3]+d*b[5]+e*b[7]];
}
function fitRange(X,Y,first,last,t1,t2,errSq,out,depth){
  const n=last-first+1;
  if(n<2)return;
  if(n===2){
    const dd=Math.hypot(X[last]-X[first],Y[last]-Y[first])/3;
    out.push(X[first],Y[first],X[first]+t1[0]*dd,Y[first]+t1[1]*dd,X[last]+t2[0]*dd,Y[last]+t2[1]*dd,X[last],Y[last]);return;
  }
  let u=new Float64Array(n);
  for(let i=1;i<n;i++)u[i]=u[i-1]+Math.hypot(X[first+i]-X[first+i-1],Y[first+i]-Y[first+i-1]);
  const tot=u[n-1]||1;for(let i=0;i<n;i++)u[i]/=tot;
  let b=genBezier(X,Y,first,last,u,t1,t2),me=maxErr(X,Y,first,last,b,u);
  if(me[0]<errSq){out.push(...b);return}
  if(me[0]<errSq*4){
    for(let it=0;it<5;it++){
      u=reparam(X,Y,first,last,u,b);
      b=genBezier(X,Y,first,last,u,t1,t2);me=maxErr(X,Y,first,last,b,u);
      if(me[0]<errSq){out.push(...b);return}
    }
  }
  let sp=me[1];if(sp<=first)sp=first+1;if(sp>=last)sp=last-1;
  if(depth>40){out.push(...b);return}
  const tc=norm2(X[sp-1]-X[sp+1],Y[sp-1]-Y[sp+1]);
  fitRange(X,Y,first,sp,t1,tc,errSq,out,depth+1);
  fitRange(X,Y,sp,last,[-tc[0],-tc[1]],t2,errSq,out,depth+1);
}
function genBezier(X,Y,first,last,u,t1,t2){
  const n=last-first+1,p0x=X[first],p0y=Y[first],p3x=X[last],p3y=Y[last];
  let c00=0,c01=0,c11=0,x0=0,x1=0;
  for(let i=0;i<n;i++){
    const t=u[i],s=1-t,b0=s*s*s,b1=3*t*s*s,b2=3*t*t*s,b3=t*t*t;
    const a1x=t1[0]*b1,a1y=t1[1]*b1,a2x=t2[0]*b2,a2y=t2[1]*b2;
    c00+=a1x*a1x+a1y*a1y;c01+=a1x*a2x+a1y*a2y;c11+=a2x*a2x+a2y*a2y;
    const tx=X[first+i]-(p0x*(b0+b1)+p3x*(b2+b3)),ty=Y[first+i]-(p0y*(b0+b1)+p3y*(b2+b3));
    x0+=a1x*tx+a1y*ty;x1+=a2x*tx+a2y*ty;
  }
  const det=c00*c11-c01*c01,seg=Math.hypot(p3x-p0x,p3y-p0y);
  let aL=0,aR=0;
  if(Math.abs(det)>1e-12){aL=(x0*c11-x1*c01)/det;aR=(c00*x1-c01*x0)/det}
  if(aL<1e-6*seg||aR<1e-6*seg){aL=aR=seg/3}
  return [p0x,p0y,p0x+t1[0]*aL,p0y+t1[1]*aL,p3x+t2[0]*aR,p3y+t2[1]*aR,p3x,p3y];
}
function maxErr(X,Y,first,last,b,u){
  let m=0,sp=(first+last)>>1;
  for(let i=first+1;i<last;i++){
    const p=bz(b,u[i-first]),d=(p[0]-X[i])**2+(p[1]-Y[i])**2;
    if(d>=m){m=d;sp=i}
  }
  return [m,sp];
}
function reparam(X,Y,first,last,u,b){
  const n=last-first+1,r=new Float64Array(n);
  for(let i=0;i<n;i++){
    const t=u[i],s=1-t;
    const qx=s*s*s*b[0]+3*s*s*t*b[2]+3*s*t*t*b[4]+t*t*t*b[6],qy=s*s*s*b[1]+3*s*s*t*b[3]+3*s*t*t*b[5]+t*t*t*b[7];
    const d1x=3*(s*s*(b[2]-b[0])+2*s*t*(b[4]-b[2])+t*t*(b[6]-b[4])),d1y=3*(s*s*(b[3]-b[1])+2*s*t*(b[5]-b[3])+t*t*(b[7]-b[5]));
    const d2x=6*(s*(b[4]-2*b[2]+b[0])+t*(b[6]-2*b[4]+b[2])),d2y=6*(s*(b[5]-2*b[3]+b[1])+t*(b[7]-2*b[5]+b[3]));
    const ex=qx-X[first+i],ey=qy-Y[first+i];
    const num=ex*d1x+ey*d1y,den=d1x*d1x+d1y*d1y+ex*d2x+ey*d2y;
    r[i]=Math.abs(den)<1e-12?t:Math.min(1,Math.max(0,t-num/den));
  }
  r[0]=0;r[n-1]=1;
  return r;
}
function loopPath(xs,ys,cfg){
  const n=xs.length,errSq=cfg.err*cfg.err,out=[];
  const cs=findCorners(xs,ys,cfg.thr,2.5);
  if(!cs.length){
    const X=xs.concat(xs[0]),Y=ys.concat(ys[0]);
    const t=norm2(xs[1]-xs[n-1],ys[1]-ys[n-1]);
    fitChain(X,Y,t,[-t[0],-t[1]],errSq,out);
  }else{
    for(let a=0;a<cs.length;a++){
      const ci=cs[a],cj=cs[(a+1)%cs.length];
      let steps=(cj-ci+n)%n;if(!steps)steps=n;
      const X=[],Y=[];
      for(let s=0;s<=steps;s++){const k=(ci+s)%n;X.push(xs[k]);Y.push(ys[k])}
      if(X.length<2)continue;
      fitChain(X,Y,tanFwd(X,Y),tanBack(X,Y),errSq,out);
    }
  }
  const m=out.length/8;if(!m)return null;
  const {sx,sy,prec}=cfg,F=v=>''+ +v.toFixed(prec);
  let d='M'+F(out[0]*sx)+' '+F(out[1]*sy),last='';
  const tol=cfg.err*.3;
  for(let i=0;i<m;i++){
    const o=i*8,x0=out[o],y0=out[o+1],x3=out[o+6],y3=out[o+7];
    const dx=x3-x0,dy=y3-y0,L=Math.hypot(dx,dy)||1;
    const e1=Math.abs(dy*(out[o+2]-x0)-dx*(out[o+3]-y0))/L,e2=Math.abs(dy*(out[o+4]-x0)-dx*(out[o+5]-y0))/L;
    if(e1<tol&&e2<tol){d+=(last==='L'?' ':'L')+F(x3*sx)+' '+F(y3*sy);last='L'}
    else{d+=(last==='C'?' ':'C')+F(out[o+2]*sx)+' '+F(out[o+3]*sy)+' '+F(out[o+4]*sx)+' '+F(out[o+5]*sy)+' '+F(x3*sx)+' '+F(y3*sy);last='C'}
  }
  return {d:d+'Z',nodes:m};
}

/* ------------------------------------------------------------------ VIEWER */
const view={x:0,y:0,z:1,fit:1};
function vsize(){const r=viewer.getBoundingClientRect();return [r.width,r.height]}
function fitView(){
  const [vw,vh]=vsize();
  view.fit=Math.min(vw/src.w,vh/src.h)*.9;
  view.z=view.fit;view.x=(vw-src.w*view.z)/2;view.y=(vh-src.h*view.z)/2;
  applyView();
}
function applyView(){
  const t=`translate(${view.x}px,${view.y}px) scale(${view.z})`;
  stageO.style.transform=stageV.style.transform=t;
  origCanvas.classList.toggle('px',view.z>=2);
  $('#zVal').textContent=Math.round(view.z*100)+'%';
}
function zoomAt(f,cx,cy){
  const nz=Math.min(32,Math.max(view.fit*.4,view.z*f));
  const k=nz/view.z;view.x=cx-(cx-view.x)*k;view.y=cy-(cy-view.y)*k;view.z=nz;applyView();
}
viewer.addEventListener('wheel',e=>{
  e.preventDefault();const r=viewer.getBoundingClientRect();
  zoomAt(Math.exp(-e.deltaY*(e.ctrlKey?.01:.0016)),e.clientX-r.left,e.clientY-r.top);
  $('#hint').style.opacity=0;
},{passive:false});
const mid=()=>{const [w,h]=vsize();return [w/2,h/2]};
$('#zIn').onclick=()=>zoomAt(1.5,...mid());
$('#zOut').onclick=()=>zoomAt(1/1.5,...mid());
$('#zFit').onclick=()=>fitView();
$('#z400').onclick=()=>{const [cx,cy]=mid();zoomAt(4/view.z,cx,cy)};
addEventListener('resize',()=>{if(src)fitView()});
let drag=null;
viewer.addEventListener('pointerdown',e=>{
  if(e.target.closest('.zoombar'))return;
  const onHandle=!!e.target.closest('.handle');
  drag={h:onHandle,x:e.clientX,y:e.clientY,vx:view.x,vy:view.y};
  viewer.setPointerCapture(e.pointerId);
  if(onHandle)setSplit(e.clientX);else viewer.classList.add('panning');
});
viewer.addEventListener('pointermove',e=>{
  if(!drag)return;
  if(drag.h)setSplit(e.clientX);
  else{view.x=drag.vx+e.clientX-drag.x;view.y=drag.vy+e.clientY-drag.y;applyView()}
});
const endDrag=()=>{drag=null;viewer.classList.remove('panning')};
viewer.addEventListener('pointerup',endDrag);viewer.addEventListener('pointercancel',endDrag);
viewer.addEventListener('dblclick',e=>{if(!e.target.closest('.handle')&&!e.target.closest('.zoombar'))fitView()});
function setSplit(cx,pct){
  const r=viewer.getBoundingClientRect();
  const p=pct!=null?pct:Math.min(100,Math.max(0,(cx-r.left)/r.width*100));
  viewer.style.setProperty('--split',p+'%');
  $('#handle').setAttribute('aria-valuenow',Math.round(p));
}
$('#handle').addEventListener('keydown',e=>{
  const cur=+$('#handle').getAttribute('aria-valuenow');
  if(e.key==='ArrowLeft')setSplit(0,Math.max(0,cur-4));
  if(e.key==='ArrowRight')setSplit(0,Math.min(100,cur+4));
});
function revealSweep(){
  const t0=performance.now(),d=1100;
  const step=t=>{
    const k=Math.min(1,(t-t0)/d),e=1-Math.pow(1-k,3);
    setSplit(0,100-(100-50)*e);
    if(k<1)requestAnimationFrame(step);
  };setSplit(0,100);requestAnimationFrame(step);
}

/* ------------------------------------------------------------------ ACTIONS */
// copying from the (truncated) preview always yields the complete SVG
$('#code').addEventListener('copy',e=>{
  if(!result.str)return;
  e.clipboardData.setData('text/plain',result.str);e.preventDefault();toast(L('fullCopied','Full SVG copied'));
});

function toast(msg){const t=$('#toast');t.textContent=msg;t.classList.add('show');clearTimeout(toast.id);toast.id=setTimeout(()=>t.classList.remove('show'),2200)}
$('#btnDownload').addEventListener('click',()=>{
  if(!result.str)return;
  const blob=new Blob([result.str],{type:'image/svg+xml'});
  const a=document.createElement('a');a.href=URL.createObjectURL(blob);
  a.download=(src.name.replace(/\.[^.]+$/,'')||'image')+'.svg';
  document.body.appendChild(a);a.click();a.remove();
  setTimeout(()=>URL.revokeObjectURL(a.href),1000);
  toast(L('downloaded','SVG downloaded · {size}',{size:fmtBytes(result.svg)}));
});
$('#btnCopy').addEventListener('click',async()=>{
  try{await navigator.clipboard.writeText(result.str);toast(L('copied','SVG code copied'))}
  catch(e){const t=document.createElement('textarea');t.value=result.str;document.body.appendChild(t);t.select();document.execCommand('copy');t.remove();toast(L('copied','SVG code copied'))}
});
$('#ctaBtn')?.addEventListener('click',()=>setTimeout(()=>$('#drop').focus({preventScroll:true}),500));

/* ------------------------------------------------------------------ INIT */
Object.assign(P,PRESETS.logo,PG.params||{});
syncUI();markPreset(PG.preset===undefined?'logo':PG.preset);
if(PG.subject)loadSubject(PG);else loadSample('logo');
})();
