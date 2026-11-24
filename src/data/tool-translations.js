// Localised tool pages. Hand-authored pages (with full content) win; every other raster converter is generated from the locale dictionary.
const {LOCALES}=require('./site');
const NM=require('./i18n/tool-names');
const manual={pl:require('./i18n/tools/pl'),es:require('./i18n/tools/es')};
manual.pl['jpg-to-svg-converter']=require('./i18n/tools/pl-jpg');
const rasterSlugs=NM.slugs.filter(s=>s&&!/^svg-/.test(s)&&!/^svg/.test(s));
const svgSlugs=NM.slugs.filter(s=>/^svg/.test(s));
const fsx=require('fs'),pathx=require('path');
const svgDict={};
function dict(loc){if(svgDict[loc]!==undefined)return svgDict[loc];const f=pathx.join(__dirname,'i18n','svg',loc+'.js');if(!fsx.existsSync(f))return svgDict[loc]=null;const d={...require(f)};if(d.__r){const pats=require('./i18n/svg/keys.js').patterns;d.__p=pats.map((p,i)=>[p,d.__r[i]]);delete d.__r}return svgDict[loc]=d}
const cache={};
const contentCache={};
function contentFor(loc,slug){
  if(!contentCache[loc]){const o={};const d=pathx.join(__dirname,'i18n','tools');if(fsx.existsSync(d))for(const f of fsx.readdirSync(d).filter(f=>f.startsWith(loc+'-content')&&f.endsWith('.js')))Object.assign(o,require(pathx.join(d,f)));contentCache[loc]=o}
  return contentCache[loc][slug];
}
function copy(loc){const f=pathx.join(__dirname,'i18n','svg',loc+'-copy.js');if(!fsx.existsSync(f))return {};const c=require(f);if(!Array.isArray(c))return c;const order=NM.slugs.filter(x=>/^svg/.test(x));return Object.fromEntries(order.map((slug,i)=>[slug,c[i]]))}
function names(loc){return cache[loc]||(cache[loc]=NM.names(loc))}
function get(locale,slug){
  if(manual[locale]&&manual[locale][slug])return manual[locale][slug];
  if(rasterSlugs.includes(slug)&&locale!=='en'){const n=names(locale);if(n)return {title:n[slug],content:contentFor(locale,slug),generated:true}}
  if(svgSlugs.includes(slug)&&locale!=='en'&&dict(locale)){const n=names(locale);const cp=copy(locale)[slug];if(n)return {title:n[slug],lead:cp&&cp[0],desc:cp&&cp[1],content:contentFor(locale,slug),generated:true}}
  return null;
}
function locales(slug){return ['en',...LOCALES.map(l=>l.code).filter(c=>c!=='en'&&get(c,slug))]}
module.exports={get,locales,names,dict};
