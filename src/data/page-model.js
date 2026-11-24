const fs=require('fs'),path=require('path');
const OUT=[];
const S=require('./site');
const {DOMAIN,LOCALES}=S;
const {urlOf,esc,fill}=require('./layout');
const {all,main,raster,exportPages,util}=require('./pages');
const mainContent=require('./main-content');
const subContent=require('./sub-content');
const dirModule0=require('./directory');
const PEND={};
const heroMark=(h)=>{PEND.hero=h;return '<!--@@HERO@@-->'};
const crumbMark=(base,name)=>{PEND.crumb={base,name};return '<!--@@CRUMB@@-->'};
const DIRMARK='<!--@@DIR@@-->';let LASTDIR=null;
const dirModule={itemList:dirModule0.itemList,html:(cur,base,T,showBlurb,locale='en')=>{LASTDIR=dirModule0.data(cur,base,T,showBlurb,locale);return DIRMARK}};
const heroCopy=require('./hero-copy');
const SP=require('./static-pages');
const EN=require('./i18n/en');
const NAMES_I18N=require('./i18n/tool-names');
const toolTranslations=require('./tool-translations');

const badge=p=>p.kw.replace(/ to .*/,'');

function rasterTool(p,T){
  const t={ui:T.ui,h2:p.main?T.ui.toolH2:p.kw+' tool',sub:false,sample:null,pixelMode:false,outline:false,barPng:'PNG'};
  if(!p.main){
    t.sub=true;
    t.ui={...T.ui,chipL:T.ui.chipL.split('Original · PNG').join('Original · '+badge(p)),drop:T.ui.drop.split('Drop your PNG here, or click to browse').join('Drop your '+p.inL+' here, or click to browse')};
    t.sample={label:'No file?',button:'Try '+p.sampleL};
    t.pixelMode=!!(p.params&&p.params.mode==='pixel');
    t.outline=!!p.outlineSwitch;
  }
  PEND.rtool=t;
  return '<!--@@RTOOL@@-->';
}

const dropIcon='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 16V4m0 0L7 9m5-5 5 5M4 20h16"/></svg>';
function svgTool(p){
  PEND.stool={h2:p.kw+' tool',dl:p.dl||'Download '+(p.fmt||'SVG'),exp:p.group==='export',open:['optimize','format','b64','validate','meta'].includes(p.tool),dict:null};
  return '<!--@@STOOL@@-->';
}

function pageJson(p){
  let o;
  if(p.group==='raster')o={subject:p.main?undefined:p.subject,hero:p.main?p.subject:undefined,post:p.post,params:p.params,preset:p.preset,sampleName:p.sampleName};
  else o={subject:p.subject,tool:p.group==='export'?'export':p.tool,variant:p.variant,format:p.format,sample:p.sample};
  return JSON.stringify(o).replace(/</g,'\\u003c');
}
const stripA=s=>s.replace(/<a [^>]*>/g,'').replace(/<\/a>/g,'');

function toolScripts(r,p,T,withDir){
  const sc=p&&p.group!=='raster'?'svgtools':'trace';
  return `<script>window.I18N=${JSON.stringify(T.js).replace(/</g,'\\u003c')};window.PAGE=${p?pageJson(p):'{}'};</script>
<script src="${r}assets/site.js" defer></script>
<script src="${r}assets/hero.js" defer></script>
<script src="${r}assets/dir.js" defer></script>
<script src="${r}assets/${sc}.js" defer></script>`;
}

const written=[];
function write(rel,content){OUT.push({file:rel,text:content});written.push(rel)}
function page(rel,o){
  if(o.main){
    const data={HERO:PEND.hero,CRUMB:PEND.crumb,RTOOL:PEND.rtool,STOOL:PEND.stool,HOME:PEND.home,SECTIONS:PEND.sections,DIR:LASTDIR};
    const kind={HERO:'hero',CRUMB:'crumbs',RTOOL:'rasterTool',STOOL:'svgTool',HOME:'homeSections',SECTIONS:'toolSections',DIR:'directory'};
    o.blocks=[];
    for(const part of o.main.split(/<!--@@([A-Z]+)@@-->/)){}
    const re=/<!--@@([A-Z]+)@@-->/g;let m;
    while((m=re.exec(o.main))){o.blocks.push({type:kind[m[1]],data:data[m[1]]})}
    delete o.main;
  }
  PEND.hero=PEND.crumb=PEND.rtool=PEND.stool=PEND.home=PEND.sections=null;LASTDIR=null;
  OUT.push({file:rel,o});written.push(rel);
}

/* ---------------- homepage in every locale */
function homePage(loc){
  let T;try{T=loc==='en'?EN:require('./i18n/'+loc)}catch(e){console.warn('MISSING LOCALE FILE',loc);return}
  const r=loc==='en'?'':'../';
  const hero=heroMark({kw:T.h1.kw,tail:T.h1.tail,lead:T.lead,sub:false});
  const body='<!--@@HOME@@-->';PEND.home=mainContent.parts(T,'');
  const dir=dirModule.html(null,r,T,loc==='en',loc);
  const o={locale:loc,T,path:'/',r,base:r,kind:'home',title:T.meta.title,desc:T.meta.desc,ogAlt:T.meta.alt,alt:true,hue:main.hue,homeHref:'./',uploadBtn:T.nav.upload,
    app:{name:T.h1.kw,desc:T.meta.desc},faq:mainContent.faqPlain(T),faqName:T.faq.title,itemList:dirModule.itemList(),directory:true,
    main:`${hero}\n${rasterTool(main,T)}\n${body}\n${dir}`,
    afterFooter:`<input type="file" id="file" accept="image/*" hidden>`,scripts:toolScripts(r,main,T)};
  page(loc==='en'?'index.html':`${loc}/index.html`,o);
}

/* ---------------- tool pages (English) */
function toolPage(p){
  const T=EN,r='../',url=urlOf('/'+p.slug+'/');
  const desc=p.group==='raster'?`${p.kw} — convert ${p.inL==='image'?'any image':'a '+p.inL} to clean, scalable SVG with a live preview. Free, private, runs in your browser.`
    :p.group==='export'?`${p.kw} — render your SVG as ${p.fmt} at any size with a live preview. Free, private, runs in your browser.`
    :`${p.kw} — free online tool with a live visual preview. Private, runs entirely in your browser.`;
  const hero=heroMark({kw:p.kw,tail:heroCopy[p.slug][0],lead:heroCopy[p.slug][1],sub:true});
  const tool=p.group==='raster'?rasterTool(p,T):svgTool(p);
  const c=subContent.CONTENT[p.slug];
  const o={locale:'en',T,path:'/'+p.slug+'/',r,base:r,kind:'tool',alt:toolTranslations.locales(p.slug).length>1,title:p.kw,desc,hue:p.hue,homeHref:'../',uploadBtn:p.group==='raster'?'Upload image':'Upload SVG',
    crumbs:[{name:S.NAME,url:DOMAIN+'/'},{name:p.kw,url}],app:{name:p.kw,desc},faq:c.faq.map(([q,a])=>({q,a:stripA(a)})),faqName:p.kw+' FAQ',itemList:dirModule.itemList(),directory:true,
    main:`${crumbMark(r,p.kw)}\n${hero}\n${tool}\n${(PEND.sections=subContent.parts(p),'<!--@@SECTIONS@@-->')}\n${dirModule.html(p,r,T,true)}`,
    afterFooter:`<input type="file" id="file" accept="${p.group==='raster'?'image/*':'.svg,image/svg+xml,text/plain'}" hidden>`,scripts:toolScripts(r,p,T)};
  page(`${p.slug}/index.html`,o);
}

function translatedSvgPage(p,loc,tr,base,r,pagePath,url){
  const D=toolTranslations.dict(loc);
  const T={...base,js:{...base.js,svg:D}};
  const pdesc=(base.svgCopy&&base.svgCopy[p.group==='export'?'export':'util'])||'';
  const name=tr.title,lead=tr.lead||(base.svgCopy?base.svgCopy.lead(name):base.lead),desc=(tr.desc||lead);
  const fit=t=>{const a=[...t];return a.length<=160?t:a.slice(0,157).join('').replace(/s+S*$/,'')+'…'};
  const tool=svgTool(p);PEND.stool.dict=D;PEND.stool.h2=name;
  const content=tr.content?(PEND.sections=subContent.parts({...p,kw:name},tr.content,loc),'<!--@@SECTIONS@@-->'):'';
  const dir=dirModule.html(p,r,T,false,loc);
  const faq=tr.content?tr.content.faq.map(([q,a])=>({q,a})):[];
  const o={locale:loc,T,path:pagePath,r,base:r,kind:'tool',alt:true,title:[...(name+' | '+S.NAME)].length<=60?name+' | '+S.NAME:name,desc:fit(desc),hue:p.hue,homeHref:'/'+loc+'/',uploadBtn:(D['Upload SVG']||'Upload SVG'),crumbs:[{name:S.NAME,url:urlOf('/',loc)},{name,url}],app:{name,desc:fit(desc)},faq,faqName:T.faq.title,itemList:dirModule.itemList(),directory:true,main:`${crumbMark('/'+loc+'/',name)}${heroMark({h1:name,lead,sub:true})}${tool}${content}${dir}`,afterFooter:`<input type="file" id="file" accept="${p.group==='raster'?'image/*':'.svg,image/svg+xml,text/plain'}" hidden>`,scripts:toolScripts(r,p,T)};
  page(`${loc}/${p.slug}/index.html`,o);
}
function translatedToolPage(p,loc,tr){
  const base=require('./i18n/'+loc),r='../../',pagePath='/'+p.slug+'/',url=urlOf(pagePath,loc);
  if(p.group!=='raster')return translatedSvgPage(p,loc,tr,base,r,pagePath,url);
  const img=NAMES_I18N.img[loc]||'image';
  const fmt=/^[A-Z]{3,4}$|^WebP$/.test(p.inL)?p.inL:'';
  const input=tr.input||fmt||img;
  const sw=s=>s.replace(/PNG/g,input);
  const chipL=fmt||tr.input?base.ui.chipL.replace('PNG',input):base.ui.chipL.replace(/s*·s*PNG/,'');
  const T={...base,ui:{...base.ui,toolH2:tr.title,drop:tr.drop||sw(base.ui.drop),chipL,legPng:sw(base.ui.legPng)},js:{...base.js,smaller:sw(base.js.smaller),larger:sw(base.js.larger)}};
  const fit=(t,n)=>{if([...t].length<=n)return t;const parts=t.match(/[^.。।!?]+[.。।!?]?s*/g)||[t];let o='';for(const x of parts){if([...(o+x).trim()].length>n)break;o+=x}o=o.trim();if(o)return o;return [...t].slice(0,n-1).join('').replace(/s+S*$/,'')+'…'};
  const lead=tr.lead||sw(base.lead),desc=fit(tr.desc||sw(base.meta.desc),160);
  const content=tr.content?(PEND.sections=subContent.parts({...p,kw:tr.title},tr.content,loc),'<!--@@SECTIONS@@-->'):'';
  const dir=dirModule.html(p,r,T,false,loc);
  let tool=rasterTool({...p,main:true},T);
  if(fmt||tr.input)PEND.rtool.barPng=input;
  const faq=tr.content?tr.content.faq.map(([q,a])=>({q,a})):[];
  const o={locale:loc,T,path:pagePath,r,base:r,kind:'tool',alt:true,title:[...(tr.title+' | '+S.NAME)].length<=60?tr.title+' | '+S.NAME:tr.title,desc,hue:p.hue,homeHref:'/'+loc+'/',uploadBtn:T.nav.upload,crumbs:[{name:S.NAME,url:urlOf('/',loc)},{name:tr.title,url}],app:{name:tr.title,desc},faq,faqName:T.faq.title,itemList:dirModule.itemList(),directory:true,main:`${crumbMark('/'+loc+'/',tr.title)}${heroMark({h1:tr.title,lead,sub:true})}${tool}${content}${dir}`,afterFooter:'<input type="file" id="file" accept="image/*" hidden>',scripts:toolScripts(r,p,T)};
  page(`${loc}/${p.slug}/index.html`,o);
}

/* ---------------- essential static pages */
const staticLocales=['en',...LOCALES.map(l=>l.code).filter(c=>c!=='en'&&fs.existsSync(path.join(__dirname,'i18n','static',c+'.js')))];
function staticPage(def,loc='en'){
  const r=loc==='en'?'../':'../../',url=urlOf('/'+def.slug+'/',loc);
  const T=loc==='en'?EN:require('./i18n/'+loc);
  const o={locale:loc,T,path:'/'+def.slug+'/',r,base:r,kind:'static',alt:staticLocales.length>1,avail:staticLocales,title:def.title,desc:def.desc,pageType:def.type,about:def.about,hue:258,homeHref:loc==='en'?'../':'../',
    crumbs:[{name:S.NAME,url:urlOf('/',loc)},{name:def.crumb||def.h1,url}],scripts:`<script src="${r}assets/site.js" defer></script>`};
  o.def=def;o.crumbBase=loc==='en'?r:'../';
  page(loc==='en'?`${def.slug}/index.html`:`${loc}/${def.slug}/index.html`,o);
}
function sitemapPage(loc='en',L){
  const pre=loc==='en'?'../':'../../';
  const li=(href,t,attrs='')=>`<li><a href="${href}"${attrs}>${esc(t)}</a></li>`;
  const grp=(title,items)=>`<section class="sm-group"><h2>${esc(title)}</h2><ul class="sm-list">${items}</ul></section>`;
  const toolLi=p=>{const tr=loc!=='en'&&toolTranslations.get(loc,p.slug);return tr?li(pre+loc+'/'+p.slug+'/',tr.title):li(pre+p.slug+'/',p.kw)};
  const lp=loc==='en'?pre:pre+loc+'/';
  const X=L||{main:'Main pages',home:'Home: PNG to SVG Converter',about:'About us',contact:'Contact us',terms:'Terms & Conditions',privacy:'Privacy Policy',sitemap:'Sitemap',gRaster:'Image to SVG converters',gExport:'SVG to image converters',gUtil:'SVG tools',gLang:'Home page in other languages',title:'Sitemap | pngtosvgconverter.com',desc:`Browse every page on pngtosvgconverter.com: all free image to SVG converters, SVG to image converters, SVG tools and the home page in ${LOCALES.length} languages.`,h1:'Sitemap',lead:'Every page on pngtosvgconverter.com in one place.',crumb:'Sitemap'};
  const body=
    grp(X.main,[li(lp,X.home),li(lp+'about-us/',X.about),li(lp+'contact-us/',X.contact),li(lp+'terms/',X.terms),li(lp+'privacy/',X.privacy),li(lp+'sitemap/',X.sitemap)].join(''))+
    grp(X.gRaster,raster.map(toolLi).join(''))+
    grp(X.gExport,exportPages.map(toolLi).join(''))+
    grp(X.gUtil,util.map(toolLi).join(''))+
    grp(X.gLang,LOCALES.map(l=>li(l.code==='en'?pre:pre+l.code+'/',l.name,` lang="${l.code}" hreflang="${l.code}"`)).join(''));
  staticPage({slug:'sitemap',type:'CollectionPage',title:X.title,desc:X.desc,h1:X.h1,lead:X.lead,crumb:X.crumb,body},loc);
}
function notFoundPage(){
  const def=SP.notFound,r='';
  const o={locale:'en',T:EN,path:'/404.html',r,base:r,kind:'404',base404:true,noindex:true,title:def.title,desc:def.desc,hue:258,homeHref:'/',
    crumbs:[],main:`<section class="hero hero3 static"><div class="wrap"><header class="hero-head"><h1>${esc(def.h1)}</h1><p class="hero-lead">${esc(def.lead)}</p></header></div></section>\n<div class="prose-wrap"><div class="card prose">${def.body}</div></div>`,scripts:`<script src="/assets/site.js" defer></script>`};
  o.def=def;
  page('404.html',o);
}

/* ---------------- run */
LOCALES.forEach(l=>homePage(l.code));
[main,...all].forEach(p=>{if(!p.main)toolPage(p)});
for(const p of all)for(const l of LOCALES){const tr=toolTranslations.get(l.code,p.slug);if(tr)translatedToolPage(p,l.code,tr)}
[SP.about,SP.contact,SP.terms,SP.privacy].forEach(d=>staticPage(d));
sitemapPage();
for(const loc of staticLocales.filter(c=>c!=='en')){const SPL=require('./i18n/static/'+loc)(S);[SPL.about,SPL.contact,SPL.terms,SPL.privacy].forEach(d=>staticPage(d,loc));sitemapPage(loc,SPL.sitemap)}
notFoundPage();

/* ---------------- sitemaps, robots, llms */
const xhtml=(p)=>LOCALES.map(l=>`    <xhtml:link rel="alternate" hreflang="${l.code}" href="${urlOf(p,l.code)}"/>`).join('\n')+`\n    <xhtml:link rel="alternate" hreflang="x-default" href="${urlOf(p,'en')}"/>`;
const ent=(loc,alt,pri)=>`  <url>\n    <loc>${loc}</loc>\n${alt?alt+'\n':''}    <priority>${pri}</priority>\n  </url>`;
const urlset=(items)=>`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${items.join('\n')}\n</urlset>\n`;
const STATICS=['about-us','contact-us','terms','privacy','sitemap'];
const sx=s=>staticLocales.length>1?staticLocales.map(c=>'    <xhtml:link rel="alternate" hreflang="'+c+'" href="'+urlOf('/'+s+'/',c)+'"/>').join('\n')+'\n    <xhtml:link rel="alternate" hreflang="x-default" href="'+urlOf('/'+s+'/','en')+'"/>':'';
const pagesItems=[...LOCALES.map(l=>ent(urlOf('/',l.code),xhtml('/'),l.code==='en'?'1.0':'0.9')),...STATICS.map(s=>ent(urlOf('/'+s+'/'),sx(s),'0.5')),...staticLocales.filter(c=>c!=='en').flatMap(c=>STATICS.map(s=>ent(urlOf('/'+s+'/',c),sx(s),'0.4')))];
write('sitemap-pages.xml',urlset(pagesItems));
const tx=slug=>{const ls=toolTranslations.locales(slug);return ls.map(c=>'    <xhtml:link rel="alternate" hreflang="'+c+'" href="'+urlOf('/'+slug+'/',c)+'"/>').join('\n')+'\n    <xhtml:link rel="alternate" hreflang="x-default" href="'+urlOf('/'+slug+'/','en')+'"/>'};
write('sitemap-tools.xml',urlset(all.flatMap(p=>toolTranslations.locales(p.slug).map(loc=>ent(urlOf('/'+p.slug+'/',loc),tx(p.slug),'0.8')))));
const idx=`<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <sitemap><loc>${DOMAIN}/sitemap-pages.xml</loc></sitemap>\n  <sitemap><loc>${DOMAIN}/sitemap-tools.xml</loc></sitemap>\n</sitemapindex>\n`;
write('sitemap-index.xml',idx);
write('sitemap.xml',idx);   // legacy URL kept valid
write('robots.txt',`User-agent: *\nAllow: /\nDisallow: /404.html\n\nSitemap: ${DOMAIN}/sitemap-index.xml\n`);
write('llms.txt',`# ${S.NAME}

> Free online PNG to SVG converter and SVG tools that run entirely in your browser. Files are never uploaded.

- Site: ${DOMAIN}/
- Contact: ${S.EMAIL}
- Sitemap: ${DOMAIN}/sitemap-index.xml
- Languages: ${LOCALES.map(l=>l.code).join(', ')} (every page translated)

## AI usage policy
Content on this site may be crawled, indexed and quoted by AI systems and search engines to answer user questions, provided that ${S.NAME} is credited as the source with a link back to the page. Bulk copying of the full site for redistribution is not permitted.

## Allow
User-agent: *
Allow: /
`);
module.exports={pages:OUT};
