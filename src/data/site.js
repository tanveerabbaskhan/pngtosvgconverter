// Shared site configuration (inferred defaults; see Assumptions in the delivery report)
const fs=require('fs'),path=require('path');
module.exports={
  DOMAIN:'https://pngtosvgconverter.com',
  NAME:'pngtosvgconverter.com',
  LEGAL_NAME:'pngtosvgconverter.com',
  DESCRIPTION:'Free online PNG to SVG converter and SVG tools that run entirely in your browser.',
  EMAIL:'hello@pngtosvgconverter.com',
  LOGO:{path:'/logo-512.png',w:512,h:512},
  OG:{path:'/og-image.png',w:1200,h:630,alt:'pngtosvgconverter.com: free PNG to SVG converter with a live preview'},
  SOCIAL:[],                       // add social profile URLs here to populate Organization.sameAs
  VERIFY:{google:'ZsbbYdnAKNqMrWxXeVfk9NgsMpZiTG5I-ZhOEeJoCyw',bing:'',yandex:''},   // live site's Search Console token (verified on pngtosvgconverter.com, 24 Nov 2026)
  ADSENSE:'ca-pub-7770994681303453',      // AdSense publisher id (meta tag, script, public/ads.txt)
  GA4:'G-796EBDP5V3',                       // Google Analytics 4 measurement id (live site's, verified 24 Nov 2026)
  CONTACT_ENDPOINT:process.env.CONTACT_ENDPOINT||'',   // optional form-handler URL (e.g. Formspree); empty = mailto fallback
  UPDATED:new Date().toISOString().slice(0,10),
  DEFAULT_LOCALE:'en',
  // code, native name, og:locale, dir
  LOCALES:[
    ['en','English','en_US','ltr'],['hi','हिन्दी','hi_IN','ltr'],['es','Español','es_ES','ltr'],['ru','Русский','ru_RU','ltr'],
    ['fr','Français','fr_FR','ltr'],['de','Deutsch','de_DE','ltr'],['it','Italiano','it_IT','ltr'],['pt','Português','pt_BR','ltr'],
    ['ja','日本語','ja_JP','ltr'],['ko','한국어','ko_KR','ltr'],['ms','Bahasa Melayu','ms_MY','ltr'],
    ['pl','Polski','pl_PL','ltr'],['id','Bahasa Indonesia','id_ID','ltr'],['ar','العربية','ar_AR','rtl'],['bg','Български','bg_BG','ltr'],
    ['tr','Türkçe','tr_TR','ltr'],['sv','Svenska','sv_SE','ltr']
  ].map(([code,name,og,dir])=>({code,name,og,dir})).filter(l=>fs.existsSync(path.join(__dirname,'i18n',l.code+'.js')))
};
