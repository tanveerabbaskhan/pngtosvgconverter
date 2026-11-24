module.exports={
 meta:{title:'pngtosvgconverter.com: Ücretsiz PNG SVG Dönüştürücü',desc:'Tarayıcınızda çalışan ücretsiz PNG SVG dönüştürücü. Her PNG’yi canlı önizlemeyle vektöre çevirin. Dosya yüklemeden, üyelik gerektirmeden.',alt:'pngtosvgconverter.com: canlı önizlemeli ücretsiz PNG SVG dönüştürücü'},
 h1:{kw:'PNG SVG Dönüştürücü',tail:'her PNG’yi ölçeklenebilir SVG’ye çevirin'},
 lead:'PNG’yi saniyeler içinde çevrimiçi SVG’ye dönüştürün. Bu ücretsiz dönüştürücü görselinizi tarayıcınızda temiz vektör yollarına çevirir; dosya yükleme, üyelik ve filigran yoktur.',
 skip:'Ana içeriğe geç',
 nav:{converter:'Dönüştürücü',all:'Tüm dönüştürücüler',faq:'SSS',about:'Hakkımızda',contact:'İletişim',menu:'Menü',theme:'Temayı değiştir',upload:'Görsel yükle',main:'Ana gezinme',toc:'Bu sayfada'},
 toc:{how:'Nasıl çalışır',proc:'Dönüştürme süreci',chart:'Tablo ve özellikler',faq:'SSS',all:'Tüm dönüştürücüler'},
 ui:{
  toolH2:'PNG SVG dönüştürme aracı',step1:'Görselinizi ekleyin',dropAria:'Görsel yükle',drop:'PNG’nizi buraya bırakın veya göz atmak için tıklayın',paste:'Ctrl+V ile de yapıştırabilirsiniz. Hiçbir şey yüklenmez.',
  sample:'Görseliniz yok mu? Bir örnek deneyin:',sLogo:'Logo',sScene:'Manzara',sIcon:'Simge',choose:'Görsel seç',
  step2:'Sonucu ayarlayın',reset:'Sıfırla',startFrom:'Şununla başla',pLogo:'Logo',pIllus:'İllüstrasyon',pPhoto:'Fotoğraf',pLine:'Çizgi çizim',
  style:'Stil',mColor:'Renk',mGray:'Gri',mMono:'Mono',rmbg:'Arka planı kaldır',rmbgSub:'Beyaz veya saydam kenarları temizler',
  colors:'Renkler',thresh:'Eşik',ink:'Mürekkep rengi',smooth:'Yumuşatma',more:'Daha fazla seçenek',detail:'Ayrıntı',specks:'Lekeleri kaldır',denoise:'Gürültü azaltma',
  step3:'Önizleme ve indirme',live:'Canlı önizleme',loading:'Yükleniyor…',copy:'SVG kodunu kopyala',download:'SVG’yi indir',
  chipL:'Orijinal · PNG',chipR:'Vektör · SVG',handle:'Orijinal ile SVG’yi karşılaştır',hint:'Karşılaştırmak için tutamacı sürükleyin · yakınlaştırmak için kaydırın',zoomOut:'Uzaklaştır',zoomIn:'Yakınlaştır',fit:'Sığdır',
  veil:'Dönüştürmek için görseli bırakın',veilSub:'PNG, JPG, WebP, GIF',fileSize:'SVG dosya boyutu',tColors:'Renkler',time:'Süre',
  moreD:'Daha fazla ayrıntı',moreDSub:'Renk katmanları, boyut geçmişi, SVG kodu',shapes:'Şekiller',shapesSub:'kapalı kontur',nodes:'Düğümler',nodesSub:'yol noktası',
  p1:'Çözme',p2:'Nicemleme',p3:'İzleme',p4:'Sadeleştirme',p5:'Oluşturma',
  layers:'Renk katmanları',layersSub:'Ayırmak için üzerine gelin · gizlemek için tıklayın',trace:'Canlı boyut izleme',traceSub:'Her ayarda SVG boyutu',legSvg:'SVG boyutu',legPng:'Orijinal PNG',src:'SVG kaynağı'
 },
 js:{
  needImage:'Lütfen bir görsel dosyası seçin',readFail:'Bu görsel okunamadı',tracedAt:'{w}×{h} üzerinde izlendi',
  smaller:'{size} PNG’den <span class="delta good">%{pct} daha küçük</span>',larger:'{size} PNG’den <span class="delta warn">%{pct} daha büyük</span>',
  noShapes:'Görünür şekil yok — “Lekeleri kaldır” değerini düşürmeyi deneyin.',pts:'nokta',moreChars:'… {n} karakter daha',lines:'{n} satır',previewOnly:'yalnızca önizleme — Kopyala veya İndir tüm dosyayı verir',
  runs:'{n} çalıştırma · şimdi {size}',run1:'1 çalıştırma · şimdi {size}',fullCopied:'Tüm SVG kopyalandı',downloaded:'SVG indirildi · {size}',copied:'SVG kodu kopyalandı',
  dirStatus:'{b} araçtan {a} tanesi gösteriliyor'
 },
 how:{
  eyebrow:'Arka planda',title:'PNG SVG dönüştürücü nasıl çalışır',
  def:'<strong>Bir PNG SVG dönüştürücü</strong>, renkli piksellerden oluşan bir ızgarayı dolgulu vektör şekillerine çevirir. Bu dönüştürücü bunu beş otomatik aşamada, tamamen tarayıcınızın içinde yapar ve bir kaydırıcıyı her oynattığınızda sonucu yeniden çizer.',
  stages:[
   ['Çözme','Tarayıcınız PNG’yi Canvas API ile okur ve RGBA piksellerden oluşan bir ızgaraya dönüştürür. Büyük dosyalar Ayrıntı kaydırıcısının belirlediği çalışma boyutuna yeniden örneklenir ve isteğe bağlı gürültü azaltma bulanıklığı tanecikleri giderir.','Canvas · getImageData'],
   ['Nicemleme','Medyan kesme ile elde edilen 2–64 renkli palet k-means ile iyileştirilir. Birbirine çok yakın renkler birleştirilir, yumuşatılmış kenar pikselleri en yakın gerçek renge çekilir ve küçük lekeler komşularına katılır.','Medyan kesme · k-means'],
   ['İzleme','Her renk üst üste binen bir katman olur. Katman maskesi yumuşatılır ve konturu marching squares ile çıkarılır; böylece piksel basamaklarını değil gerçek kenarı izleyen alt piksel konturlar elde edilir.','Marching squares'],
   ['Eğri uydurma','Köşeler algılanır, ardından her yumuşak kesit kübik Bézier eğrileriyle uydurulur. Düz kenarlar düz çizgi olarak kalır; böylece sonuç, ham bir piksel izlemesinden çok daha az düğüm gerektirir.','Schneider Bézier uydurma'],
   ['Oluşturma','Yollar, özgün viewBox korunarak renk başına bir dolgulu SVG yolu olarak yazılır. Önizleme, dosya boyutu, palet ve kaynak kodu, bir kaydırıcıyı oynattığınızda canlı olarak güncellenir.','SVG · fill-rule evenodd']],
  cap:'PNG SVG dönüştürmenin beş aşaması: çözme, nicemleme, izleme, eğri uydurma ve oluşturma.',
  privTitle:'Dosyanız nereye gider',privCap:'PNG cihazınızda işlenir. Yükleme yapılmaz, dolayısıyla dosya hiçbir zaman bir sunucuya ulaşmaz.',privAlt:'PNG’niz cihazınızda kalır',privAltDesc:'PNG, tarayıcınızın içinde dönüştürücüden geçip SVG’ye dönüşür. Cihazınızdan bir sunucuya giden hiçbir ok yoktur.',
  privBrowser:'TARAYICINIZ',privEngine:'İzleme motoru',privServer:'Sunucu',privNot:'devrede değil',
  whyTitle:'Sonuç neden küçük ve temiz kalır',
  why:[['Üst üste katmanlar','Her renk altındakinin üstüne oturur; bu yüzden ince boşluklar olmaz ve tanımlanacak delik sayısı çok azalır.'],['Alt piksel konturlar','Kenarlar piksellerin üzerine değil aralarına yerleştirilir; çapraz çizgiler ve eğriler pürüzsüz kalır.'],['Eğri uydurma','Tek bir Bézier parçası onlarca piksel basamağının yerini alabilir; tipik bir logo yalnızca birkaç yüz düğüm ister.'],['İzlemeden önce temizlik','Kenar yumuşatma saçakları ve lekeler önce birleştirilir, böylece fazladan şekle dönüşmezler.']]
 },
 proc:{
  eyebrow:'Adım adım',title:'PNG SVG dönüştürme süreci',
  def:'PNG’yi SVG’ye çevirmek beş adım sürer ve genellikle bir dakikadan kısadır. Herhangi bir adımdan sonra durabilirsiniz: önizleme iyi göründüğü anda SVG indirmeye hazırdır.',
  steps:[
   ['PNG’nizi ekleyin','Bir PNG’yi yükleme kutusuna bırakın, “Görsel seç”e tıklayın ya da panodan Ctrl+V ile yapıştırın. Henüz hazır değil misiniz? Dönüştürücüyü önce görmek için bir örnek düğmesine basın.','JPG, WebP, GIF ve BMP de kabul edilir.'],
   ['Bir ön ayar seçin','Logo, İllüstrasyon, Fotoğraf veya Çizgi çizim seçin. Her ön ayar renkler, ayrıntı, yumuşatma ve leke temizleme için makul değerler belirler; bu yüzden ilk önizleme çoğunlukla zaten hedefe yakındır.','Logolar: 4–8 renk. Fotoğraflar: 32–48 renk.'],
   ['İzlemeyi ince ayarlayın','Renk sayısını (2–64), Ayrıntı, Yumuşatma, Lekeleri kaldır ve Gürültü azaltma değerlerini ayarlayın. Renk, Gri ve Mono kipleri arasında geçin; beyaz veya saydam kenarlar için Arka planı kaldır’ı açın.','Her kaydırıcı önizlemeyi anında günceller.'],
   ['Karşılaştırın ve inceleyin','Orijinal PNG ile SVG’yi karşılaştırmak için tutamacı sürükleyin. Yakınlaştırmak için kaydırın, gezinmek için sürükleyin; bir renk katmanının üzerine gelerek ayırın ya da dışa aktarmadan önce tıklayarak gizleyin.','SVG’nin keskin kaldığını görmek için %3200’e kadar yakınlaştırın.'],
   ['SVG’yi indirin veya kopyalayın','Dosyayı kaydetmek için “SVG’yi indir”e ya da kodu projenize, Figma’ya, Illustrator’a, Inkscape’e veya bir web sayfasına yapıştırmak için “Kodu kopyala”ya basın.','Dosya cihazınızdan asla çıkmaz.']],
  cta:'Şimdi bir PNG dönüştür',tipLabel:'İpucu:',
  mock:{dropLabel:'PNG’yi bırak',presets:['Logo','İllüstrasyon','Fotoğraf','Çizgi çizim'],sliders:['Renkler','Ayrıntı','Yumuşatma'],dlBtn:'SVG’yi indir'}
 },
 chart:{
  eyebrow:'Başvuru',title:'PNG SVG dönüştürme tablosu / özellikler',
  def:'PNG türünüz için doğru ayarları seçmek, her türün ne kadar iyi dönüştüğünü görmek ve PNG ile SVG’yi karşılaştırmak için bu tabloyu kullanın. Değerler, dönüştürücüye yerleşik ön ayarlarla uyumludur.',
  barsTitle:'Her PNG türü ne kadar iyi dönüşür',barsCap:'Vektör uygunluğu 1 (zayıf) ile 5 (mükemmel) arasında. Düz, yüksek kontrastlı görseller en iyi, fotoğraflar en zayıf dönüşür.',
  barsAlt:'Her PNG türünün SVG’ye ne kadar iyi dönüştüğü',
  bars:['Logo','Simge','Piksel sanatı','Düz illüstrasyon','Çizgi çizim','İmza','Taranmış belge','Fotoğraf'],
  quickTitle:'Kısa yanıtlar',
  quick:[['En iyi sonuçlar:','logolar, simgeler, piksel sanatı ve düz illüstrasyonlar.'],['İyi sonuçlar:','Mono kipinde çizgi çizimler, eskizler ve imzalar.'],['Dikkat gerektirir:','gürültü azaltma ve daha yüksek leke filtresi isteyen taranmış sayfalar.'],['Yalnızca stilize:','fotoğraflar ve yumuşak geçişler posterize sanata dönüşür.']],
  note:'İpucu: en yakın ön ayarla başlayın, sonra her seferinde yalnızca bir kaydırıcıyı değiştirin.',
  t1:{cap:'PNG türüne göre önerilen dönüştürücü ayarları',cols:['PNG türü','Ön ayar veya kip','Renkler','Ayrıntı','Yumuşatma','Lekeleri kaldır','Vektör uygunluğu'],
   rows:[['Logo','Logo ön ayarı'],['Simge','Logo ön ayarı'],['Düz illüstrasyon veya çizgi film','İllüstrasyon ön ayarı'],['Çizgi çizim veya eskiz','Çizgi çizim ön ayarı · Mono'],['İmza','Mono · eşik 160'],['Piksel sanatı','Piksel kipi'],['Taranmış belge','Mono · gürültü azaltma 1,5'],['Fotoğraf','Fotoğraf ön ayarı']],
   words:{ink:'mürekkep',auto:'otomatik piksel boyutu',na:'kullanılmaz',up:'en fazla'}},
  t2:{cap:'PNG ve SVG bir bakışta',cols:['Özellik','PNG (raster)','SVG (vektör)'],
   rows:[['Ölçekleme','Büyütüldüğünde pikseller bulanıklaşır veya dağılır','Keskinlik kaybı olmadan her boyuta ölçeklenir'],['Dosya boyutu','Piksel sayısıyla artar','Şekil karmaşıklığıyla artar — düz görsellerde çok küçüktür'],['Düzenleme','Pikseller raster düzenleyicide düzenlenir','Şekiller, eğriler ve renkler herhangi bir vektör düzenleyicide düzenlenir'],['En uygun kullanım','Fotoğraflar ve ayrıntılı dokular','Logolar, simgeler, illüstrasyonlar, diyagramlar ve çizgi çizimler'],['Saydamlık','Alfa kanalı','Yerleşik — boş alan zaten saydamdır'],['CSS ile biçimlendirme','Mümkün değil','SVG sayfaya satır içi eklendiğinde mümkün'],['Baskı ve tabela','Yüksek çözünürlüklü özgün dosya gerekir','Her baskı boyutu için çözünürlükten bağımsız']]},
  featTitle:'Dönüştürücü özellikleri',
  feats:[['Canlı önizleme','Her kaydırıcı görseli yeniden izler; bölünmüş görünümü, boyut grafiğini, paleti ve düğüm sayısını birlikte günceller.'],['Alt piksel izleme','Konturlar piksel sınırlarını değil renkler arasındaki gerçek kenarı izler; eğriler pürüzsüz kalır.'],['Bézier eğri uydurma','Yumuşak kesitler kübik Bézier’e dönüşür, düz kenarlar çizgi olarak kalır; düğüm sayısı düşük tutulur.'],['Üst üste renk katmanları','Katmanlar üst üste durur; renkler arasında ince boşluk veya dikiş olmaz.'],['2–64 renk','Kaç renk tutulacağını seçin veya Gri ya da Mono’ya geçin. Dışa aktarmadan önce herhangi bir katmanı ayırın ya da gizleyin.'],['Piksel kipi','Piksel sanatını, algılanan piksel boyutunda keskin dikdörtgenler olarak, yumuşatma olmadan izler.'],['Saydam arka planlar','Saydam pikseller asla şekle dönüşmez. Arka planı kaldır, düz beyaz zemini tek tıkla temizler.'],['Yakınlaştır ve karşılaştır','Karşılaştırmak için tutamacı sürükleyin, ardından PNG’nin pikselleştiğini, SVG’nin ise keskin kaldığını görmek için %3200’e kadar yakınlaştırın.'],['Tasarımdan gizlilik','Dönüştürme tarayıcınızda çalışır. PNG’niz asla yüklenmez, saklanmaz veya paylaşılmaz.'],['Ücretsiz, sınırsız','Hesap yok, filigran yok, günlük kota yok. İstediğiniz kadar görsel dönüştürün.']]
 },
 faq:{
  eyebrow:'Yanıtlar',title:'SSS',def:'PNG SVG dönüştürücü hakkında sık sorulan sorular: nasıl çalışır, ne beklemeli ve en iyi sonuç nasıl alınır. Dört konuda {n} yanıt.',
  groups:[
   ['Temel bilgiler',[
    ['PNG SVG dönüştürücü nedir?','PNG SVG dönüştürücü, piksel tabanlı bir PNG görselini matematiksel şekil ve eğrilerden oluşan vektör bir SVG’ye çevirir. SVG piksel yerine şekilleri tanımladığı için bulanıklaşmadan her boyuta ölçeklenebilir; logo ve simge gibi düz görsellerde genellikle PNG’den çok daha küçüktür.'],
    ['Bu PNG SVG dönüştürücü ücretsiz mi?','Evet. Tamamen ücretsizdir; hesap, filigran ve günlük sınır yoktur. Tek pratik sınır cihazınızdır: görseller en uzun kenarda 3000 piksele kadar işlenir, çok büyük veya çok ayrıntılı dosyalar biraz daha uzun sürer.'],
    ['PNG dosyalarım bir sunucuya yükleniyor mu?','Hayır. Dönüştürme tamamen tarayıcınızda JavaScript ve Canvas API ile çalışır. PNG’niz asla yüklenmez, saklanmaz veya paylaşılmaz; gizli çalışmalarınız cihazınızda kalır.'],
    ['PNG ile SVG arasındaki fark nedir?','PNG, renkli piksellerden oluşan bir ızgara saklayan bir raster biçimdir; büyütüldüğünde keskinliğini kaybeder. SVG ise şekilleri, eğrileri ve dolguları saklayan bir vektör biçimdir; her boyutta keskin kalır ve vektör araçlarında düzenlenebilir. PNG fotoğraflara, SVG logolara, simgelere, diyagramlara ve çizgi çizimlere uygundur.']]],
   ['Kalite ve ayarlar',[
    ['SVG tam olarak PNG’me benzeyecek mi?','Piksel piksel değil. Dönüştürme bulduğu şekilleri izler ve eğrilerle yaklaştırır; sonuç, çalışmanın temiz ve ölçeklenebilir bir sürümüdür. Düz, yüksek kontrastlı görseller çok yakın eşleşir; fotoğraflar ise stilize, posterize bir sürüme dönüşür.'],
    ['Hangi PNG görselleri en iyi dönüşür?','Net şekillerden ve sınırlı sayıda renkten oluştukları için logolar, simgeler, düz illüstrasyonlar, çizgi filmler, çizgi çizimler, imzalar ve piksel sanatı en iyi dönüşür. Fotoğraflar ve yumuşak geçişler en az iyi dönüşür (stilize sonuçlar için [[photo-to-vector-converter]] aracını deneyin). Görsel türüne göre ayarlar için yukarıdaki tabloya bakın.'],
    ['Kaç renk seçmeliyim?','Çalışmanızdaki düz renk sayısına uyun. Çoğu logo 4–8, simge 3–6, illüstrasyon 12–20 renk ister. Fotoğraflar 32–48 veya daha fazlasını gerektirebilir. Fazladan renkler düz bir tasarımı iyileştirmeden katman ve boyut ekler; renk katmanı listesi her birinin katkısını tam olarak gösterir.'],
    ['Daha pürüzsüz çizgiler veya daha keskin köşeler nasıl elde ederim?','Yumuşatma kaydırıcısını kullanın. Düşük değerler köşeleri keskin ve kenarları özgüne yakın tutar; yüksek değerler piksel basamaklarını ve titremeyi yuvarlar. İnce özellikler için Ayrıntı’yı artırın, ince çizgiler kayboluyorsa Lekeleri kaldır’ı düşürün.'],
    ['Fotoğrafım neden posterize veya bantlı görünüyor?','Vektörler düz renk bölgeleri saklar; bu yüzden yumuşak bir geçiş bantlarla yaklaştırılmalıdır. Renk sayısını ve Ayrıntı’yı artırın, biraz gürültü azaltma ekleyin veya cesur, grafik görünümü kabul edin. Gerçek fotoğraf ayrıntısı için PNG’yi koruyun ya da bir fotoğraf biçimi kullanın.']]],
   ['Saydamlık, metin ve düzenleme',[
    ['Saydam arka planı nasıl korurum?','PNG’nizdeki saydam pikseller otomatik olarak korunur ve asla şekle dönüşmez; SVG’de arka plan kutusu olmaz. PNG’nizde düz beyaz arka plan varsa Arka planı kaldır’ı açın. Mono kipi ayrıca kâğıt tonunu atar ve yalnızca mürekkebi tutar; [[transparent-image-to-svg-converter]] sayfası buna göre ayarlanmıştır.'],
    ['PNG’mdeki metni tanıyor mu?','Hayır. Dönüştürücü OCR yapmaz. Harfler vektör kontur olarak izlenir; kusursuz ölçeklenir ama metin olarak düzenlenemez. Düzenlenebilir metin gerekiyorsa bir tasarım aracında yeniden yazın veya ayrı bir OCR kullanın.'],
    ['SVG’m neden PNG’mden büyük?','Fotoğraflar ve geçişler çok şekil gerektirir; bu, iyi sıkıştırılmış bir PNG’yi aşabilir. Renk sayısını azaltın, Ayrıntı’yı düşürün, Lekeleri kaldır’ı veya Yumuşatma’yı artırın. Dosya boyutu kartı ve canlı boyut izleme her değişikliğin etkisini gösterir.'],
    ['SVG’yi Figma, Illustrator, Inkscape veya Canva’da düzenleyebilir miyim?','Evet. Çıktı, renk başına bir dolgulu yol içeren standart SVG’dir; herhangi bir vektör düzenleyici açabilir, yeniden renklendirebilir ve biçimlendirebilir. Katmanlar sırayla üst üste konur ve indirmeden önce dönüştürücüde bir katmanı gizleyebilirsiniz.']]],
   ['Uyumluluk',[
    ['Hangi PNG boyutları ve biçimleri destekleniyor?','Tarayıcınızın açabildiği PNG, JPG, WebP, GIF ve BMP dosyalarını yükleyebilirsiniz (her birinin ayrıca kendi sayfası vardır; örneğin [[jpg-to-svg-converter]] ve [[webp-to-svg-converter]]). Performans için çok büyük görseller izlemeden önce en uzun kenarda en fazla 3000 piksele küçültülür; dışa aktarılan SVG özgün en-boy oranını korur.'],
    ['Telefon ve tabletlerde çalışır mı?','Evet. Masaüstü ve mobilde Chrome, Edge, Firefox ve Safari’nin güncel sürümlerinde çalışır. Çok büyük görseller eski telefonlarda daha yavaş olabilir; önizleme yavaşsa daha küçük bir görsel veya daha düşük Ayrıntı deneyin.']]]
  ],
  ctaTitle:'Vektöre çevirmeye hazır mısınız?',ctaText:'PNG’niz, ölçeklenebilir bir SVG’ye tek bir hamle uzakta.',ctaBtn:'PNG SVG dönüştürücüyü aç'
 },
 dir:{
  eyebrow:'Tüm dönüştürücüler',title:'Tüm ücretsiz dönüştürücüler ve SVG araçları',lead:'Tarayıcınızda çalışan {n} ücretsiz araç. Aşağıdan bir dönüştürücü seçin veya biçime ya da göreve göre arayın.',
  search:'Ara, ör. “logo”, “PDF”, “küçült”',searchLabel:'Dönüştürücülerde ara',filter:'Türe göre filtrele',all:'Tümü',empty:'Hiçbir dönüştürücü bu aramayla eşleşmiyor. “SVG”, “logo” veya “PNG” deneyin.',
  groups:[['Görselden SVG’ye','Raster görselleri ölçeklenebilir vektör şekillerine çevirin.'],['SVG’den görsele','SVG’yi PNG, JPG, WebP, PDF veya ICO olarak dışa aktarın.'],['SVG araçları','SVG kodunu sıkıştırın, düzenleyin, inceleyin ve doğrulayın.']],
  here:'Buradasınız',nav:'Tüm dönüştürücüler ve SVG araçları'
 },
 foot:{
  blurb:'Tamamen tarayıcınızda çalışan ücretsiz PNG SVG dönüştürücü ve SVG araçları.',colExplore:'Keşfet',colCompany:'Şirket',colLegal:'Yasal',lang:'Dil',
  home:'Ana sayfa',about:'Hakkımızda',contact:'İletişim',terms:'Şartlar ve Koşullar',privacy:'Gizlilik Politikası',sitemap:'Site haritası',
  copy:'© {year} pngtosvgconverter.com',made:'Tasarımcılar ve geliştiriciler için · Yerelde işlenir'
 }
};
