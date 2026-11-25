// Shared layout: <head> (meta/OG/Twitter/hreflang/JSON-LD), header, footer, page shell.
const S=require('./site');
const toolTranslations=require('./tool-translations');
const {DOMAIN,LOCALES,NAME}=S;
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const LB=Object.fromEntries(LOCALES.map(l=>[l.code,l]));
const urlOf=(p,loc='en')=>DOMAIN+(loc==='en'?'':'/'+loc)+p;
const fill=(s,o)=>String(s).replace(/\{(\w+)\}/g,(m,k)=>o[k]!==undefined?o[k]:m);

// Schema dates: the Astro rebuild went live 2026-11-25, when the current URLs were first published.
// dateModified is the build date, so it updates on every deploy.
const PUBLISHED='2026-11-25';
const MODIFIED=new Date().toISOString().slice(0,10);
const logoSvg='<svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><rect width="32" height="32" rx="9" style="fill:var(--accent)"/><path d="M8 21 13 11l4 7 3-4 4 7" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="13" cy="11" r="2" fill="#fff"/><circle cx="24" cy="21" r="2" fill="#fff"/></svg>';

function hueCss(h){
  const h2=(h+55)%360;
  return `<style>
:root{--accent:hsl(${h} 95% 72%);--accent-2:hsl(${h2} 85% 60%);--grad:linear-gradient(135deg,var(--accent),var(--accent-2))}
[data-theme=light]{--accent:hsl(${h} 72% 50%);--accent-2:hsl(${h2} 80% 36%)}
.glow{background:radial-gradient(900px 500px at 15% -5%,hsla(${h},95%,70%,.18),transparent 60%),radial-gradient(800px 480px at 90% 0%,hsla(${h2},85%,60%,.12),transparent 60%)}
[data-theme=light] .glow{background:radial-gradient(900px 500px at 15% -5%,hsla(${h},80%,55%,.14),transparent 60%),radial-gradient(800px 480px at 90% 0%,hsla(${h2},80%,40%,.10),transparent 60%)}
.hv-art.before svg{filter:saturate(.3) contrast(.8) brightness(.92)}
</style>`;
}

/* ---------------- navigation model (used by header + SiteNavigationElement) */
const _fs=require('fs'),_pth=require('path');
const STATIC=new Set(LOCALES.map(l=>l.code).filter(c=>_fs.existsSync(_pth.join(__dirname,'i18n','static',c+'.js'))));
const sroot=(o,b)=>o.locale!=='en'&&STATIC.has(o.locale)?'/'+o.locale+'/':b;
function navItems(o){
  const T=o.T,anchors=o.kind==='home'||o.kind==='tool',base=o.base;
  const page=urlOf(o.path,o.locale);
  const a=(frag)=>anchors?{href:'#'+frag,abs:page+'#'+frag}:{href:(o.locale==='en'?base:'/'+o.locale+'/')+'#'+frag,abs:urlOf('/',o.locale)+'#'+frag};
  return [
    {key:'converter',label:T.nav.converter,...a('converter')},
    {key:'all',label:T.nav.all,...a('all')},
    {key:'faq',label:T.nav.faq,...a('faq')},
    {key:'about',label:T.nav.about,href:sroot(o,base)+'about-us/',abs:urlOf('/about-us/',STATIC.has(o.locale)?o.locale:'en')},
    {key:'contact',label:T.nav.contact,href:sroot(o,base)+'contact-us/',abs:urlOf('/contact-us/',STATIC.has(o.locale)?o.locale:'en')}
  ];
}

/* ---------------- JSON-LD @graph */
function graph(o){
  const url=urlOf(o.path,o.locale),lang=o.locale;
  const orgId=DOMAIN+'/#organization',siteId=DOMAIN+'/#website',logoId=DOMAIN+'/#logo';
  const imgId=url+'#primaryimage',pageId=url+'#webpage';
  const g=[];
  g.push({'@type':'Organization','@id':orgId,name:NAME,legalName:S.LEGAL_NAME,url:DOMAIN+'/',description:S.DESCRIPTION,
    logo:{'@type':'ImageObject','@id':logoId,url:DOMAIN+S.LOGO.path,contentUrl:DOMAIN+S.LOGO.path,width:S.LOGO.w,height:S.LOGO.h,caption:NAME},
    image:{'@id':logoId},email:S.EMAIL,contactPoint:{'@type':'ContactPoint',contactType:'customer support',email:S.EMAIL,availableLanguage:['English']},
    ...(S.SOCIAL.length?{sameAs:S.SOCIAL}:{})});
  g.push({'@type':'WebSite','@id':siteId,url:DOMAIN+'/',name:NAME,description:S.DESCRIPTION,publisher:{'@id':orgId},inLanguage:LOCALES.map(l=>l.code)});
  navItems(o).forEach(n=>g.push({'@type':'SiteNavigationElement','@id':DOMAIN+'/#nav-'+n.key+(o.kind==='static'||o.kind==='404'?'':'-'+(o.locale)),name:n.label,url:n.abs}));
  g.push({'@type':'ImageObject','@id':imgId,url:DOMAIN+S.OG.path,contentUrl:DOMAIN+S.OG.path,width:S.OG.w,height:S.OG.h,caption:o.ogAlt||S.OG.alt,inLanguage:lang});
  const wp={'@type':o.pageType||'WebPage','@id':pageId,url,name:o.title,description:o.desc,inLanguage:lang,isPartOf:{'@id':siteId},primaryImageOfPage:{'@id':imgId},image:{'@id':imgId},datePublished:PUBLISHED,dateModified:MODIFIED,potentialAction:[{'@type':'ReadAction',target:[url]}]};
  if(o.about)wp.about={'@id':orgId};
  if(o.pageType==='ContactPage')wp.mainEntity={'@id':orgId};
  if(o.crumbs&&o.crumbs.length){wp.breadcrumb={'@id':url+'#breadcrumb'}}
  if(o.app){wp.mainEntity={'@id':url+'#app'}}
  g.push(wp);
  if(o.crumbs&&o.crumbs.length){
    g.push({'@type':'BreadcrumbList','@id':url+'#breadcrumb',itemListElement:o.crumbs.map((c,i)=>({'@type':'ListItem',position:i+1,name:c.name,item:c.url}))});
  }
  if(o.app)g.push({'@type':'WebApplication','@id':url+'#app',name:o.app.name,url,description:o.app.desc,applicationCategory:'MultimediaApplication',operatingSystem:'Windows, macOS, Linux, Android, iOS',browserRequirements:'Requires JavaScript and a current web browser',isAccessibleForFree:true,offers:{'@type':'Offer',price:0,priceCurrency:'USD'},inLanguage:lang,publisher:{'@id':orgId}});
  if(o.faq&&o.faq.length)g.push({'@type':'FAQPage','@id':url+'#faq',url:url+'#faq',name:o.faqName||'FAQ',inLanguage:lang,isPartOf:{'@id':pageId},mainEntity:o.faq.map(f=>({'@type':'Question',name:f.q,acceptedAnswer:{'@type':'Answer',text:f.a,inLanguage:lang}}))});
  if(o.itemList)g.push(o.itemList);
  return {'@context':'https://schema.org','@graph':g};
}

function avail(o){if(o.avail)return o.avail;return o.kind==='tool'?toolTranslations.locales(o.path.split('/')[1]):LOCALES.map(l=>l.code)}
/* ---------------- <head> */

/* ---------------- header + footer */

/* ---------------- page shell */
module.exports={urlOf,esc,fill,LB,logoSvg,navItems,graph,avail,sroot,hueCss,STATIC};
