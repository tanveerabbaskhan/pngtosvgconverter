(()=>{
const q=document.getElementById('dxq');if(!q)return;
const items=[...document.querySelectorAll('.dx-item')],groups=[...document.querySelectorAll('.dx-group')];
const tabs=[...document.querySelectorAll('.dx-tabs button')],status=document.getElementById('dxs'),empty=document.getElementById('dxe');
let f='all';
function apply(){
  const t=q.value.trim().toLowerCase();let shown=0;
  items.forEach(li=>{const ok=(f==='all'||li.dataset.g===f)&&(!t||li.dataset.t.includes(t));li.hidden=!ok;if(ok)shown++});
  groups.forEach(g=>{g.hidden=!g.querySelector('.dx-item:not([hidden])')});
  empty.hidden=shown>0;
  const tpl=(window.I18N&&window.I18N.dirStatus)||'Showing {a} of {b} tools';status.textContent=(t||f!=='all')?tpl.replace('{a}',shown).replace('{b}',items.length):'';
}
q.addEventListener('input',apply);
tabs.forEach(b=>b.addEventListener('click',()=>{f=b.dataset.f;tabs.forEach(x=>{const on=x===b;x.classList.toggle('on',on);x.setAttribute('aria-pressed',on)});apply()}));
})();
