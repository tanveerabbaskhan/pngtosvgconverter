(()=>{
const PG=window.PAGE||{};
document.querySelectorAll('canvas[data-pix]').forEach(async cv=>{
  try{
    const svg='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="400" height="300">'+(PG.hero||PG.subject)+'</svg>';
    const url=URL.createObjectURL(new Blob([svg],{type:'image/svg+xml'}));
    const img=new Image();img.src=url;await img.decode();
    const w=+cv.dataset.pix||40,h=Math.round(w*3/4);cv.width=w;cv.height=h;
    const x=cv.getContext('2d');x.imageSmoothingEnabled=true;x.drawImage(img,0,0,w,h);URL.revokeObjectURL(url);
  }catch(e){}
});
})();
