// Localised tool names for every tool page. Built from one pattern + noun list per locale so wording stays consistent.
// pat: "{x} to SVG converter"  exp: "SVG to {x} converter"  vec: "{x} to vector converter"
// n: image, logo, sketch, drawing, icon, signature, scanned image, clipart, black-and-white image, colour image,
//    line art, pixel art, transparent image, outline image, monochrome image, hand drawing, photo, raster
// u: compressor, optimizer, resizer, cropper, colour changer, background remover, viewer, to Base64, code formatter,
//    minifier, metadata remover, validator, to data URI
const L={
 es:{pat:'Convertidor de {x} a SVG',exp:'Convertidor de SVG a {x}',vec:'Convertidor de {x} a vector',
  n:['imagen','logotipo','boceto','dibujo','icono','firma','imagen escaneada','clipart','imagen en blanco y negro','imagen en color','dibujo lineal','arte píxel','imagen transparente','contorno','imagen monocromática','dibujo a mano','foto','imagen ráster'],
  u:['Compresor de SVG','Optimizador de SVG','Redimensionar SVG','Recortar SVG','Cambiar colores de SVG','Eliminar fondo de SVG','Visor de SVG','Convertidor de SVG a Base64','Formateador de código SVG','Minificador de SVG','Eliminar metadatos de SVG','Validador de SVG','Convertidor de SVG a URI de datos']},
 pl:{pat:'Konwerter {x} na SVG',exp:'Konwerter SVG na {x}',vec:'Konwerter {x} na wektor',
  n:['obrazu','logo','szkicu','rysunku','ikony','podpisu','skanu','grafiki clipart','obrazu czarno-białego','obrazu kolorowego','grafiki liniowej','pixel art','obrazu przezroczystego','konturów','obrazu monochromatycznego','rysunku odręcznego','zdjęcia','rastra'],
  u:['Kompresor SVG','Optymalizator SVG','Zmiana rozmiaru SVG','Przycinanie SVG','Zmiana kolorów SVG','Usuwanie tła SVG','Przeglądarka SVG','Konwerter SVG na Base64','Formatowanie kodu SVG','Minifikator SVG','Usuwanie metadanych SVG','Walidator SVG','Konwerter SVG na Data URI']},
 fr:{pat:'Convertisseur {x} en SVG',exp:'Convertisseur SVG en {x}',vec:'Convertisseur {x} en vecteur',
  n:['d’image','de logo','de croquis','de dessin','d’icône','de signature','d’image numérisée','de clipart','d’image noir et blanc','d’image couleur','de dessin au trait','de pixel art','d’image transparente','de contour','d’image monochrome','de dessin à main levée','de photo','de raster'],
  u:['Compresseur SVG','Optimiseur SVG','Redimensionner un SVG','Recadrer un SVG','Changer les couleurs d’un SVG','Supprimer l’arrière-plan d’un SVG','Visionneuse SVG','Convertisseur SVG en Base64','Formateur de code SVG','Minificateur SVG','Supprimer les métadonnées SVG','Validateur SVG','Convertisseur SVG en URI de données']},
 de:{pat:'{x} in SVG umwandeln',exp:'SVG in {x} umwandeln',vec:'{x} in Vektor umwandeln',
  n:['Bild','Logo','Skizze','Zeichnung','Symbol','Unterschrift','Scan','Clipart','Schwarzweißbild','Farbbild','Strichzeichnung','Pixel Art','transparentes Bild','Umrissbild','einfarbiges Bild','Handzeichnung','Foto','Rastergrafik'],
  u:['SVG-Kompressor','SVG-Optimierer','SVG-Größe ändern','SVG zuschneiden','SVG-Farben ändern','SVG-Hintergrund entfernen','SVG-Betrachter','SVG in Base64 umwandeln','SVG-Code-Formatierer','SVG-Minifier','SVG-Metadaten entfernen','SVG-Validator','SVG in Data-URI umwandeln']},
 it:{pat:'Convertitore da {x} a SVG',exp:'Convertitore da SVG a {x}',vec:'Convertitore da {x} a vettoriale',
  n:['immagine','logo','schizzo','disegno','icona','firma','immagine scansionata','clipart','immagine in bianco e nero','immagine a colori','disegno al tratto','pixel art','immagine trasparente','contorno','immagine monocromatica','disegno a mano','foto','immagine raster'],
  u:['Compressore SVG','Ottimizzatore SVG','Ridimensiona SVG','Ritaglia SVG','Cambia colori SVG','Rimuovi sfondo SVG','Visualizzatore SVG','Convertitore da SVG a Base64','Formattatore di codice SVG','Minificatore SVG','Rimuovi metadati SVG','Validatore SVG','Convertitore da SVG a data URI']},
 pt:{pat:'Conversor de {x} para SVG',exp:'Conversor de SVG para {x}',vec:'Conversor de {x} para vetor',
  n:['imagem','logotipo','esboço','desenho','ícone','assinatura','imagem digitalizada','clipart','imagem em preto e branco','imagem colorida','arte de linha','pixel art','imagem transparente','contorno','imagem monocromática','desenho à mão','foto','imagem raster'],
  u:['Compressor de SVG','Otimizador de SVG','Redimensionar SVG','Recortar SVG','Alterar cores do SVG','Remover fundo do SVG','Visualizador de SVG','Conversor de SVG para Base64','Formatador de código SVG','Minificador de SVG','Remover metadados do SVG','Validador de SVG','Conversor de SVG para data URI']},
 ru:{pat:'Конвертер {x} в SVG',exp:'Конвертер SVG в {x}',vec:'Конвертер {x} в вектор',
  n:['изображения','логотипа','наброска','рисунка','значка','подписи','скана','клипарта','чёрно-белого изображения','цветного изображения','линейной графики','пиксель-арта','прозрачного изображения','контура','монохромного изображения','рисунка от руки','фото','растра'],
  u:['Сжатие SVG','Оптимизатор SVG','Изменение размера SVG','Обрезка SVG','Смена цветов SVG','Удаление фона SVG','Просмотр SVG','Конвертер SVG в Base64','Форматирование кода SVG','Минификатор SVG','Удаление метаданных SVG','Валидатор SVG','Конвертер SVG в Data URI']},
 tr:{pat:'{x} SVG Dönüştürücü',exp:'SVG {x} Dönüştürücü',vec:'{x} Vektör Dönüştürücü',
  n:['Görsel','Logo','Taslak','Çizim','Simge','İmza','Taranmış Görsel','Clipart','Siyah Beyaz Görsel','Renkli Görsel','Çizgi Sanatı','Piksel Sanatı','Saydam Görsel','Kontur','Tek Renkli Görsel','El Çizimi','Fotoğraf','Raster'],
  u:['SVG Sıkıştırıcı','SVG Optimize Edici','SVG Yeniden Boyutlandırma','SVG Kırpma','SVG Renk Değiştirici','SVG Arka Plan Kaldırıcı','SVG Görüntüleyici','SVG Base64 Dönüştürücü','SVG Kod Biçimlendirici','SVG Küçültücü','SVG Meta Veri Temizleyici','SVG Doğrulayıcı','SVG Data URI Dönüştürücü']},
 sv:{pat:'{x} till SVG-konverterare',exp:'SVG till {x}-konverterare',vec:'{x} till vektor-konverterare',
  n:['Bild','Logotyp','Skiss','Teckning','Ikon','Signatur','Skannad bild','Clipart','Svartvit bild','Färgbild','Linjeteckning','Pixelkonst','Transparent bild','Konturbild','Enfärgad bild','Frihandsteckning','Foto','Rasterbild'],
  u:['SVG-komprimerare','SVG-optimerare','Ändra storlek på SVG','Beskär SVG','Byt färger i SVG','Ta bort SVG-bakgrund','SVG-visare','SVG till Base64','SVG-kodformaterare','SVG-minifierare','Ta bort SVG-metadata','SVG-validerare','SVG till data-URI']},
 id:{pat:'Konverter {x} ke SVG',exp:'Konverter SVG ke {x}',vec:'Konverter {x} ke vektor',
  n:['gambar','logo','sketsa','gambar tangan','ikon','tanda tangan','gambar pindaian','clipart','gambar hitam putih','gambar berwarna','seni garis','pixel art','gambar transparan','garis kontur','gambar monokrom','gambar tangan bebas','foto','raster'],
  u:['Kompresor SVG','Pengoptimal SVG','Ubah Ukuran SVG','Pangkas SVG','Pengubah Warna SVG','Penghapus Latar SVG','Penampil SVG','Konverter SVG ke Base64','Pemformat Kode SVG','Minifier SVG','Penghapus Metadata SVG','Validator SVG','Konverter SVG ke Data URI']},
 ms:{pat:'Penukar {x} ke SVG',exp:'Penukar SVG ke {x}',vec:'Penukar {x} ke vektor',
  n:['imej','logo','lakaran','lukisan','ikon','tandatangan','imej imbasan','clipart','imej hitam putih','imej berwarna','seni garisan','pixel art','imej lutsinar','garis bentuk','imej monokrom','lukisan tangan','foto','raster'],
  u:['Pemampat SVG','Pengoptimum SVG','Ubah Saiz SVG','Pangkas SVG','Penukar Warna SVG','Pembuang Latar SVG','Pemapar SVG','Penukar SVG ke Base64','Pemformat Kod SVG','Minifier SVG','Pembuang Metadata SVG','Pengesah SVG','Penukar SVG ke Data URI']},
 bg:{pat:'Конвертор от {x} към SVG',exp:'Конвертор от SVG към {x}',vec:'Конвертор от {x} към вектор',
  n:['изображение','лого','скица','рисунка','икона','подпис','сканирано изображение','клипарт','черно-бяло изображение','цветно изображение','линеен чертеж','пиксел арт','прозрачно изображение','контур','едноцветно изображение','ръчна рисунка','снимка','растер'],
  u:['SVG компресор','SVG оптимизатор','Преоразмеряване на SVG','Изрязване на SVG','Смяна на цветове в SVG','Премахване на фон от SVG','SVG визуализатор','Конвертор от SVG към Base64','Форматиране на SVG код','SVG минимизатор','Премахване на метаданни от SVG','SVG валидатор','Конвертор от SVG към Data URI']},
 hi:{pat:'{x} से SVG कन्वर्टर',exp:'SVG से {x} कन्वर्टर',vec:'{x} से वेक्टर कन्वर्टर',
  n:['इमेज','लोगो','स्केच','ड्रॉइंग','आइकन','हस्ताक्षर','स्कैन की हुई इमेज','क्लिपआर्ट','ब्लैक एंड व्हाइट इमेज','रंगीन इमेज','लाइन आर्ट','पिक्सेल आर्ट','पारदर्शी इमेज','आउटलाइन','मोनोक्रोम इमेज','हाथ से बनी ड्रॉइंग','फ़ोटो','रास्टर'],
  u:['SVG कंप्रेसर','SVG ऑप्टिमाइज़र','SVG आकार बदलें','SVG क्रॉप करें','SVG रंग बदलें','SVG बैकग्राउंड हटाएँ','SVG व्यूअर','SVG से Base64 कन्वर्टर','SVG कोड फ़ॉर्मैटर','SVG मिनिफ़ायर','SVG मेटाडेटा हटाएँ','SVG वैलिडेटर','SVG से Data URI कन्वर्टर']},
 ja:{pat:'{x} SVG 変換',exp:'SVG {x} 変換',vec:'{x} ベクター変換',
  n:['画像','ロゴ','スケッチ','ドローイング','アイコン','署名','スキャン画像','クリップアート','白黒画像','カラー画像','線画','ドット絵','透過画像','アウトライン','モノクロ画像','手描きイラスト','写真','ラスター画像'],
  u:['SVG圧縮','SVG最適化','SVGリサイズ','SVGトリミング','SVGの色変更','SVG背景削除','SVGビューア','SVG Base64変換','SVGコード整形','SVGミニファイ','SVGメタデータ削除','SVG検証','SVG データURI変換']},
 ko:{pat:'{x} SVG 변환기',exp:'SVG {x} 변환기',vec:'{x} 벡터 변환기',
  n:['이미지','로고','스케치','그림','아이콘','서명','스캔 이미지','클립아트','흑백 이미지','컬러 이미지','선화','픽셀 아트','투명 이미지','윤곽선','단색 이미지','손그림','사진','래스터'],
  u:['SVG 압축기','SVG 최적화 도구','SVG 크기 조정','SVG 자르기','SVG 색상 변경','SVG 배경 제거','SVG 뷰어','SVG Base64 변환기','SVG 코드 정렬기','SVG 압축 도구','SVG 메타데이터 제거','SVG 검증기','SVG 데이터 URI 변환기']},
 ar:{pat:'محوّل {x} إلى SVG',exp:'محوّل SVG إلى {x}',vec:'محوّل {x} إلى متجه',
  n:['صورة','شعار','مخطط','رسم','أيقونة','توقيع','صورة ممسوحة ضوئيًا','كليب آرت','صورة بالأبيض والأسود','صورة ملوّنة','رسم خطي','بكسل آرت','صورة شفافة','مخطط تفصيلي','صورة أحادية اللون','رسم يدوي','صورة فوتوغرافية','صورة نقطية'],
  u:['ضاغط SVG','محسّن SVG','تغيير حجم SVG','قص SVG','تغيير ألوان SVG','إزالة خلفية SVG','عارض SVG','محوّل SVG إلى Base64','منسّق شيفرة SVG','مصغّر SVG','إزالة بيانات SVG الوصفية','مدقّق SVG','محوّل SVG إلى Data URI']}
};
const FM=['JPG','WebP','GIF','BMP','AVIF','ICO'];
const slugs=['jpg-to-svg-converter','webp-to-svg-converter','gif-to-svg-converter','bmp-to-svg-converter','avif-to-svg-converter','ico-to-svg-converter','image-to-svg-converter','logo-to-svg-converter','sketch-to-svg-converter','drawing-to-svg-converter','icon-to-svg-converter','signature-to-svg-converter','scanned-image-to-svg-converter','clipart-to-svg-converter','black-and-white-image-to-svg-converter','color-image-to-svg-converter','line-art-to-svg-converter','pixel-art-to-svg-converter','transparent-image-to-svg-converter','outline-image-to-svg-converter','monochrome-image-to-svg-converter','hand-drawing-to-svg-converter'];
const exps=['svg-to-png-converter','svg-to-jpg-converter','svg-to-webp-converter','svg-to-pdf-converter','svg-to-ico-converter'],expF=['PNG','JPG','WebP','PDF','ICO'];
const utils=['svg-compressor','svg-optimizer','svg-resizer','svg-cropper','svg-color-changer','svg-background-remover','svg-viewer','svg-to-base64-converter','svg-code-formatter','svg-minifier','svg-metadata-remover','svg-validator','svg-to-data-uri-converter'];
const fill=(p,x)=>p.replace('{x}',x);
function names(loc){
  const d=L[loc];if(!d)return null;const o={};
  o['']=fill(d.pat,'PNG');
  FM.forEach((f,i)=>o[slugs[i]]=fill(d.pat,f));
  // nouns n[0..15] map to slugs[6..21]: image, logo, sketch, drawing, icon, signature, scanned, clipart, bw, colour, line, pixel, transparent, outline, mono, hand
  for(let i=0;i<16;i++)o[slugs[6+i]]=fill(d.pat,d.n[i]);
  o['photo-to-vector-converter']=fill(d.vec,d.n[16]);
  o['raster-to-vector-converter']=fill(d.vec,d.n[17]);
  exps.forEach((s,i)=>o[s]=fill(d.exp,expF[i]));
  utils.forEach((s,i)=>o[s]=d.u[i]);
  return o;
}
module.exports={names,locales:Object.keys(L),slugs:['',...slugs,'photo-to-vector-converter','raster-to-vector-converter',...exps,...utils]};
module.exports.img={en:'image',es:'imagen',pl:'obraz',fr:'image',de:'Bild',it:'immagine',pt:'imagem',ru:'изображение',tr:'görsel',sv:'bild',id:'gambar',ms:'imej',bg:'изображение',hi:'इमेज',ja:'画像',ko:'이미지',ar:'صورة'};
