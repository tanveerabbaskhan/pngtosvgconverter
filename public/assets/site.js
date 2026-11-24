(()=>{
const $=s=>document.querySelector(s);
/* year */
document.querySelectorAll('#yr').forEach(e=>e.textContent=new Date().getFullYear());
/* theme */
const tb=$('#themeBtn');
if(tb)tb.addEventListener('click',()=>{const h=document.documentElement;h.dataset.theme=h.dataset.theme==='dark'?'light':'dark';try{localStorage.setItem('theme',h.dataset.theme)}catch(e){}});
const language=$('.header-lang');
if(language){
  document.addEventListener('click',e=>{if(language.open&&!language.contains(e.target))language.open=false});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&language.open){language.open=false;language.querySelector('summary').focus()}});
}
/* mobile menu (keyboard accessible, aria-expanded / aria-hidden kept in sync) */
const btn=$('#menuBtn'),nav=$('#site-nav'),mq=matchMedia('(max-width:900px)');
if(btn&&nav){
  const set=open=>{btn.setAttribute('aria-expanded',open);nav.classList.toggle('open',open);document.querySelector('.nav').classList.toggle('open',open);sync()};
  const sync=()=>{if(mq.matches){const o=btn.getAttribute('aria-expanded')==='true';nav.setAttribute('aria-hidden',o?'false':'true');nav.querySelectorAll('a').forEach(a=>a.tabIndex=o?0:-1)}else{nav.removeAttribute('aria-hidden');nav.querySelectorAll('a').forEach(a=>a.removeAttribute('tabindex'))}};
  btn.addEventListener('click',()=>set(btn.getAttribute('aria-expanded')!=='true'));
  nav.addEventListener('click',e=>{if(e.target.closest('a')&&mq.matches)set(false)});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&btn.getAttribute('aria-expanded')==='true'){set(false);btn.focus()}});
  document.addEventListener('click',e=>{if(mq.matches&&btn.getAttribute('aria-expanded')==='true'&&!e.target.closest('.nav'))set(false)});
  (mq.addEventListener?mq.addEventListener('change',()=>{set(false)}):mq.addListener(()=>set(false)));
  sync();
}
/* contact form: sending / success / error states with a mailto fallback */
const form=$('form[data-contact]');
if(form){
  const st=form.querySelector('[data-status]'),sub=form.querySelector('[data-submit]'),d=form.dataset;
  const say=(t,c)=>{st.textContent=t;st.className='form-status '+(c||'')};
  form.addEventListener('submit',async e=>{
    e.preventDefault();
    const f=new FormData(form),name=(f.get('name')||'').trim(),email=(f.get('email')||'').trim(),msg=(f.get('message')||'').trim();
    if(f.get('website'))return;                                  // honeypot
    if(!name||!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)||!msg){say(d.invalid,'err');form.querySelector(!name?'[name="name"]':!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)?'[name="email"]':'[name="message"]').focus();return}
    sub.disabled=true;say(d.sending,'busy');
    if(d.endpoint){
      try{
        const r=await fetch(d.endpoint,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify({name,email,message:msg,_subject:'pngtosvgconverter.com contact'})});
        if(!r.ok)throw new Error(r.status);
        say(d.success,'ok');form.reset();
      }catch(err){say(d.error,'err')}
      sub.disabled=false;return;
    }
    const body=encodeURIComponent(`${msg}\n\n— ${name} (${email})`);
    location.href=`mailto:${d.email}?subject=${encodeURIComponent('pngtosvgconverter.com contact')}&body=${body}`;
    setTimeout(()=>{say(d.successMailto,'ok');sub.disabled=false},400);
  });
}
})();

/* Runtime translator for the SVG tools: exact-match text nodes and labels are swapped using window.I18N.svg (English -> locale). */
(function(){
  var D=window.I18N&&window.I18N.svg;if(!D)return;
  var P=(D.__p||[]).map(function(x){return [new RegExp(x[0]),x[1]]});
  function tx(s){var t=s.trim();if(!t)return s;if(Object.prototype.hasOwnProperty.call(D,t))return s.split(t).join(D[t]);for(var i=0;i<P.length;i++){if(P[i][0].test(t))return s.split(t).join(t.replace(P[i][0],P[i][1]))}return s}
  function walk(n){
    if(n.nodeType===3){var v=tx(n.nodeValue);if(v!==n.nodeValue)n.nodeValue=v;return}
    if(n.nodeType!==1||/^(SCRIPT|STYLE|TEXTAREA|PRE|CODE|SVG)$/i.test(n.tagName)||n.id==='outCode')return;
    ['aria-label','title','placeholder'].forEach(function(a){var x=n.getAttribute(a);if(x){var y=tx(x);if(y!==x)n.setAttribute(a,y)}});
    for(var c=n.firstChild;c;c=c.nextSibling)walk(c);
  }
  function start(){
    var root=document.getElementById('converter');if(!root)return;
    walk(root);
    new MutationObserver(function(ms){ms.forEach(function(m){m.addedNodes.forEach(walk);if(m.type==='characterData')walk(m.target)})}).observe(root,{childList:true,subtree:true,characterData:true});
    var t=document.getElementById('toast');
    if(t)new MutationObserver(function(){walk(t)}).observe(t,{childList:true,characterData:true,subtree:true});
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();
})();
