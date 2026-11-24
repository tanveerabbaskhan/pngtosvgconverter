module.exports={
 meta:{title:'pngtosvgconverter.com: Penukar PNG ke SVG Percuma',desc:'Penukar PNG ke SVG percuma yang berjalan dalam pelayar. Vektorkan sebarang PNG dengan pratonton langsung. Tanpa muat naik fail dan tanpa pendaftaran.',alt:'pngtosvgconverter.com: penukar PNG ke SVG percuma dengan pratonton langsung'},
 h1:{kw:'Penukar PNG ke SVG',tail:'tukarkan sebarang PNG kepada SVG yang boleh diskalakan'},
 lead:'Tukar PNG kepada SVG dalam talian dalam beberapa saat. Penukar percuma ini menjejak imej anda menjadi laluan vektor yang bersih terus dalam pelayar, tanpa muat naik fail, tanpa pendaftaran dan tanpa tera air.',
 skip:'Langkau ke kandungan utama',
 nav:{converter:'Penukar',all:'Semua penukar',faq:'Soalan Lazim',about:'Tentang kami',contact:'Hubungi kami',menu:'Menu',theme:'Tukar tema',upload:'Muat naik imej',main:'Navigasi utama',toc:'Pada halaman ini'},
 toc:{how:'Cara ia berfungsi',proc:'Proses penukaran',chart:'Jadual dan ciri',faq:'Soalan Lazim',all:'Semua penukar'},
 ui:{
  toolH2:'Alat penukar PNG ke SVG',step1:'Tambah imej anda',dropAria:'Muat naik imej',drop:'Lepaskan PNG anda di sini, atau klik untuk layari',paste:'Anda juga boleh tampal dengan Ctrl+V. Tiada apa-apa dimuat naik.',
  sample:'Tiada imej? Cuba contoh:',sLogo:'Logo',sScene:'Pemandangan',sIcon:'Ikon',choose:'Pilih imej',
  step2:'Laraskan hasil',reset:'Set semula',startFrom:'Mula dengan',pLogo:'Logo',pIllus:'Ilustrasi',pPhoto:'Foto',pLine:'Lukisan garisan',
  style:'Gaya',mColor:'Warna',mGray:'Kelabu',mMono:'Mono',rmbg:'Buang latar belakang',rmbgSub:'Membersihkan tepi putih atau lut sinar',
  colors:'Warna',thresh:'Ambang',ink:'Warna dakwat',smooth:'Pelicinan',more:'Lebih banyak pilihan',detail:'Perincian',specks:'Buang bintik',denoise:'Kurangkan hingar',
  step3:'Pratonton dan muat turun',live:'Pratonton langsung',loading:'Memuatkan…',copy:'Salin kod SVG',download:'Muat turun SVG',
  chipL:'Asal · PNG',chipR:'Vektor · SVG',handle:'Bandingkan asal dan SVG',hint:'Seret pemegang untuk membandingkan · skrol untuk zum',zoomOut:'Zum keluar',zoomIn:'Zum masuk',fit:'Muat',
  veil:'Lepaskan imej untuk ditukar',veilSub:'PNG, JPG, WebP, GIF',fileSize:'Saiz fail SVG',tColors:'Warna',time:'Masa',
  moreD:'Lebih banyak butiran',moreDSub:'Lapisan warna, sejarah saiz, kod SVG',shapes:'Bentuk',shapesSub:'kontur tertutup',nodes:'Nod',nodesSub:'titik laluan',
  p1:'Nyahkod',p2:'Kuantisasi',p3:'Jejak',p4:'Permudah',p5:'Render',
  layers:'Lapisan warna',layersSub:'Halakan kursor untuk mengasingkan · klik untuk menyembunyikan',trace:'Jejak saiz langsung',traceSub:'Saiz SVG bagi setiap pelarasan',legSvg:'Saiz SVG',legPng:'PNG asal',src:'Sumber SVG'
 },
 js:{
  needImage:'Sila pilih fail imej',readFail:'Imej itu tidak dapat dibaca',tracedAt:'dijejak pada {w}×{h}',
  smaller:'<span class="delta good">{pct}% lebih kecil</span> daripada PNG {size}',larger:'<span class="delta warn">{pct}% lebih besar</span> daripada PNG {size}',
  noShapes:'Tiada bentuk kelihatan — cuba kurangkan “Buang bintik”.',pts:'titik',moreChars:'… {n} aksara lagi',lines:'{n} baris',previewOnly:'pratonton sahaja — Salin atau Muat turun memberi fail penuh',
  runs:'{n} larian · kini {size}',run1:'1 larian · kini {size}',fullCopied:'SVG penuh disalin',downloaded:'SVG dimuat turun · {size}',copied:'Kod SVG disalin',
  dirStatus:'Memaparkan {a} daripada {b} alat'
 },
 how:{
  eyebrow:'Di sebalik tabir',title:'Cara penukar PNG ke SVG berfungsi',
  def:'<strong>Penukar PNG ke SVG</strong> mengubah grid piksel berwarna menjadi sekumpulan bentuk vektor berisi. Penukar ini melakukannya dalam lima peringkat automatik, sepenuhnya dalam pelayar anda, dan melukis semula hasilnya setiap kali anda menggerakkan peluncur.',
  stages:[
   ['Nyahkod','Pelayar anda membaca PNG dengan API Canvas dan menukarnya kepada grid piksel RGBA. Fail besar disampel semula kepada saiz kerja yang ditetapkan peluncur Perincian, dan kabur pengurangan hingar pilihan menghilangkan bijian.','Canvas · getImageData'],
   ['Kuantisasi','Palet 2–64 warna daripada median cut diperhalusi dengan k-means. Warna yang hampir sama digabungkan, piksel tepi yang dilicinkan dipadankan kepada warna sebenar terdekat, dan bintik kecil diserap oleh jirannya.','Median cut · k-means'],
   ['Jejak','Setiap warna menjadi lapisan bertindan. Topeng lapisan dilembutkan dan kontur nya diekstrak dengan marching squares, menghasilkan kontur sub-piksel yang mengikuti tepi sebenar dan bukannya anak tangga piksel.','Marching squares'],
   ['Penyesuaian lengkung','Sudut dikesan, kemudian setiap bahagian licin disesuaikan dengan lengkung Bézier kubik. Tepi lurus kekal sebagai garisan lurus, jadi hasilnya memerlukan jauh lebih sedikit nod daripada penjejakan piksel mentah.','Penyesuaian Bézier Schneider'],
   ['Render','Laluan ditulis sebagai satu laluan SVG berisi bagi setiap warna, dengan viewBox asal dikekalkan. Pratonton, saiz fail, palet dan kod sumber dikemas kini secara langsung apabila anda menggerakkan peluncur.','SVG · fill-rule evenodd']],
  cap:'Lima peringkat penukaran PNG ke SVG: nyahkod, kuantisasi, jejak, penyesuaian lengkung dan render.',
  privTitle:'Ke mana fail anda pergi',privCap:'PNG diproses pada peranti anda. Tiada muat naik berlaku, jadi fail tidak pernah sampai ke pelayan.',privAlt:'PNG anda kekal pada peranti anda',privAltDesc:'PNG melalui penukar dalam pelayar anda dan menjadi SVG. Tiada anak panah keluar dari peranti anda menuju pelayan.',
  privBrowser:'PELAYAR ANDA',privEngine:'Enjin penjejak',privServer:'Pelayan',privNot:'tidak terlibat',
  whyTitle:'Mengapa hasilnya kekal kecil dan bersih',
  why:[['Lapisan bertindan','Setiap warna terletak di atas warna di bawahnya, jadi tiada jurang halus dan jauh lebih sedikit lubang untuk diterangkan.'],['Kontur sub-piksel','Tepi diletakkan di antara piksel, bukan di atasnya, jadi pepenjuru dan lengkung kekal licin.'],['Penyesuaian lengkung','Satu segmen Bézier boleh menggantikan berpuluh anak tangga piksel, jadi logo biasa hanya memerlukan beberapa ratus nod.'],['Pembersihan sebelum penjejakan','Pinggir anti-alias dan bintik digabungkan dahulu, jadi ia tidak pernah menjadi bentuk tambahan.']]
 },
 proc:{
  eyebrow:'Langkah demi langkah',title:'Proses penukaran PNG ke SVG',
  def:'Menukar PNG kepada SVG mengambil lima langkah dan biasanya kurang daripada seminit. Anda boleh berhenti selepas mana-mana langkah: SVG sedia dimuat turun sebaik sahaja pratonton kelihatan betul.',
  steps:[
   ['Tambah PNG anda','Lepaskan PNG pada kotak muat naik, klik “Pilih imej”, atau tampal daripada papan keratan dengan Ctrl+V. Belum bersedia? Tekan butang contoh untuk melihat penukar berfungsi dahulu.','Turut menerima JPG, WebP, GIF dan BMP.'],
   ['Pilih pratetap','Pilih Logo, Ilustrasi, Foto atau Lukisan garisan. Setiap pratetap menetapkan nilai yang munasabah untuk warna, perincian, pelicinan dan pembuangan bintik, jadi pratonton pertama selalunya sudah hampir.','Logo: 4–8 warna. Foto: 32–48 warna.'],
   ['Halusi penjejakan','Laraskan bilangan warna (2–64), Perincian, Pelicinan, Buang bintik dan Kurangkan hingar. Tukar antara mod Warna, Kelabu dan Mono, dan hidupkan Buang latar belakang untuk tepi putih atau lut sinar.','Setiap peluncur mengemas kini pratonton serta-merta.'],
   ['Bandingkan dan periksa','Seret pemegang untuk membandingkan PNG asal dengan SVG. Skrol untuk zum, seret untuk menggerakkan, dan halakan kursor pada lapisan warna untuk mengasingkannya atau klik untuk menyembunyikannya sebelum eksport.','Zum sehingga 3200% untuk melihat SVG kekal tajam.'],
   ['Muat turun atau salin SVG','Tekan “Muat turun SVG” untuk menyimpan fail, atau “Salin kod” untuk menampal kod terus ke projek anda, Figma, Illustrator, Inkscape atau halaman web.','Fail tidak pernah meninggalkan peranti anda.']],
  cta:'Tukar PNG sekarang',tipLabel:'Petua:',
  mock:{dropLabel:'Lepaskan PNG',presets:['Logo','Ilustrasi','Foto','Lukisan garisan'],sliders:['Warna','Perincian','Pelicinan'],dlBtn:'Muat turun SVG'}
 },
 chart:{
  eyebrow:'Rujukan',title:'Jadual penukaran PNG ke SVG / ciri',
  def:'Gunakan jadual ini untuk memilih tetapan yang sesuai bagi jenis PNG anda, melihat sejauh mana setiap jenis ditukar dengan baik, dan membandingkan PNG dengan SVG. Nilai sepadan dengan pratetap terbina dalam penukar.',
  barsTitle:'Sejauh mana setiap jenis PNG ditukar dengan baik',barsCap:'Kesesuaian vektor dari 1 (lemah) hingga 5 (cemerlang). Karya rata berkontras tinggi ditukar paling baik; foto paling kurang baik.',
  barsAlt:'Sejauh mana setiap jenis PNG ditukar kepada SVG dengan baik',
  bars:['Logo','Ikon','Seni piksel','Ilustrasi rata','Lukisan garisan','Tandatangan','Dokumen diimbas','Foto'],
  quickTitle:'Jawapan pantas',
  quick:[['Hasil terbaik:','logo, ikon, seni piksel dan ilustrasi rata.'],['Hasil baik:','lukisan garisan, lakaran dan tandatangan dalam mod Mono.'],['Perlu berhati-hati:','halaman diimbas, yang memerlukan pengurangan hingar dan penapis bintik lebih tinggi.'],['Bergaya sahaja:','foto dan kecerunan lembut menjadi seni diposterkan.']],
  note:'Petua: mulakan dengan pratetap terdekat, kemudian ubah satu peluncur sahaja pada satu masa.',
  t1:{cap:'Tetapan penukar yang disyorkan mengikut jenis PNG',cols:['Jenis PNG','Pratetap atau mod','Warna','Perincian','Pelicinan','Buang bintik','Kesesuaian vektor'],
   rows:[['Logo','Pratetap Logo'],['Ikon','Pratetap Logo'],['Ilustrasi rata atau kartun','Pratetap Ilustrasi'],['Lukisan garisan atau lakaran','Pratetap Lukisan garisan · Mono'],['Tandatangan','Mono · ambang 160'],['Seni piksel','Mod Piksel'],['Dokumen diimbas','Mono · pengurangan hingar 1,5'],['Foto','Pratetap Foto']],
   words:{ink:'dakwat',auto:'saiz piksel automatik',na:'tidak digunakan',up:'sehingga'}},
  t2:{cap:'PNG lwn SVG sepintas lalu',cols:['Ciri','PNG (raster)','SVG (vektor)'],
   rows:[['Penskalaan','Piksel menjadi kabur atau pecah apabila dibesarkan','Boleh diskalakan kepada sebarang saiz tanpa kehilangan ketajaman'],['Saiz fail','Bertambah mengikut bilangan piksel','Bertambah mengikut kerumitan bentuk — sangat kecil untuk karya rata'],['Penyuntingan','Menyunting piksel dalam penyunting raster','Menyunting bentuk, lengkung dan warna dalam mana-mana penyunting vektor'],['Terbaik untuk','Foto dan tekstur terperinci','Logo, ikon, ilustrasi, gambar rajah dan lukisan garisan'],['Lut sinar','Saluran alfa','Asli — ruang kosong secara automatik lut sinar'],['Penggayaan dengan CSS','Tidak boleh','Boleh apabila SVG dibenamkan dalam halaman'],['Cetakan dan papan tanda','Memerlukan asal beresolusi tinggi','Bebas resolusi untuk sebarang saiz cetakan']]},
  featTitle:'Ciri penukar',
  feats:[['Pratonton langsung','Setiap peluncur menjejak semula imej dan mengemas kini paparan terbahagi, carta saiz, palet dan bilangan nod serentak.'],['Penjejakan sub-piksel','Kontur mengikut tepi sebenar antara warna dan bukannya sempadan piksel, jadi lengkung kekal licin.'],['Penyesuaian lengkung Bézier','Bahagian licin menjadi Bézier kubik dan tepi lurus kekal sebagai garisan, menjadikan bilangan nod rendah.'],['Lapisan warna bertindan','Lapisan terletak di atas satu sama lain, jadi tiada jurang halus atau jahitan antara warna.'],['2–64 warna','Pilih bilangan warna yang dikekalkan, atau tukar kepada Kelabu atau Mono. Halakan kursor atau sembunyikan mana-mana lapisan sebelum eksport.'],['Mod Piksel','Menjejak seni piksel sebagai segi empat tepat tajam pada saiz piksel yang dikesan, tanpa pelicinan.'],['Latar belakang lut sinar','Piksel lut sinar tidak pernah menjadi bentuk. Buang latar belakang membersihkan latar putih padu dengan satu klik.'],['Zum dan banding','Seret pemegang untuk membandingkan, kemudian zum sehingga 3200% untuk melihat PNG menjadi berpiksel sementara SVG kekal tajam.'],['Persendirian mengikut reka bentuk','Penukaran berjalan dalam pelayar anda. PNG anda tidak pernah dimuat naik, disimpan atau dikongsi.'],['Percuma, tanpa had','Tiada akaun, tiada tera air, tiada kuota harian. Tukar seberapa banyak imej yang anda mahu.']]
 },
 faq:{
  eyebrow:'Jawapan',title:'Soalan Lazim',def:'Soalan lazim tentang penukar PNG ke SVG: cara ia berfungsi, apa yang dijangka dan cara mendapat hasil terbaik. {n} jawapan dalam empat topik.',
  groups:[
   ['Asas',[
    ['Apakah penukar PNG ke SVG?','Penukar PNG ke SVG menukarkan imej PNG berasaskan piksel kepada SVG vektor yang terdiri daripada bentuk dan lengkung matematik. Memandangkan SVG menerangkan bentuk dan bukan piksel, ia boleh diskalakan kepada sebarang saiz tanpa kabur, dan untuk karya rata seperti logo dan ikon ia sering jauh lebih kecil daripada PNG.'],
    ['Adakah penukar PNG ke SVG ini percuma?','Ya. Ia sepenuhnya percuma tanpa akaun, tanpa tera air dan tanpa had harian. Satu-satunya had praktikal ialah peranti anda: imej diproses sehingga 3000 px pada sisi terpanjang, dan fail yang sangat besar atau sangat terperinci hanya mengambil masa lebih sedikit.'],
    ['Adakah fail PNG saya dimuat naik ke pelayan?','Tidak. Penukaran berjalan sepenuhnya dalam pelayar anda menggunakan JavaScript dan API Canvas. PNG anda tidak pernah dimuat naik, disimpan atau dikongsi, jadi karya sulit kekal pada peranti anda.'],
    ['Apakah perbezaan antara PNG dan SVG?','PNG ialah format raster yang menyimpan grid piksel berwarna, jadi ia kehilangan ketajaman apabila dibesarkan. SVG ialah format vektor yang menyimpan bentuk, lengkung dan isian, jadi ia kekal tajam pada sebarang saiz dan boleh disunting dalam alat vektor. PNG sesuai untuk foto; SVG sesuai untuk logo, ikon, gambar rajah dan lukisan garisan.']]],
   ['Kualiti dan tetapan',[
    ['Adakah SVG akan kelihatan sama seperti PNG saya?','Bukan piksel demi piksel. Penukaran menjejak bentuk yang ditemui dan menghampirinya dengan lengkung, jadi hasilnya ialah versi karya yang bersih dan boleh diskalakan. Imej rata berkontras tinggi sepadan dengan sangat rapat, manakala foto menjadi versi bergaya dan diposterkan.'],
    ['Imej PNG yang manakah ditukar paling baik?','Logo, ikon, ilustrasi rata, kartun, lukisan garisan, tandatangan dan seni piksel ditukar paling baik kerana ia terdiri daripada bentuk jelas dan set warna terhad. Foto dan kecerunan lembut paling kurang baik (cuba [[photo-to-vector-converter]] untuk hasil bergaya). Lihat jadual di atas untuk tetapan mengikut jenis imej.'],
    ['Berapa banyak warna yang perlu saya pilih?','Padankan dengan bilangan warna rata dalam karya anda. Kebanyakan logo memerlukan 4–8, ikon 3–6 dan ilustrasi 12–20. Foto mungkin memerlukan 32–48 atau lebih. Warna berlebihan menambah lapisan dan saiz tanpa memperbaik reka bentuk rata, dan senarai lapisan warna menunjukkan dengan tepat sumbangan setiap satu.'],
    ['Bagaimana mendapat garisan lebih licin atau sudut lebih tajam?','Gunakan peluncur Pelicinan. Nilai rendah mengekalkan sudut tajam dan tepi dekat dengan asal; nilai tinggi membulatkan anak tangga piksel dan goyangan. Naikkan Perincian untuk ciri lebih halus dan turunkan Buang bintik jika garisan nipis hilang.'],
    ['Mengapa foto saya kelihatan diposterkan atau berjalur?','Vektor menyimpan kawasan warna rata, jadi kecerunan lembut mesti dianggarkan dengan jalur. Tambah bilangan warna dan Perincian, tambah sedikit pengurangan hingar, atau terima rupa grafik yang berani. Untuk perincian foto sebenar, kekalkan PNG atau gunakan format foto.']]],
   ['Lut sinar, teks dan penyuntingan',[
    ['Bagaimana mengekalkan latar belakang lut sinar?','Piksel lut sinar dalam PNG anda dihormati secara automatik dan tidak pernah menjadi bentuk, jadi SVG tiada kotak latar. Jika PNG anda mempunyai latar putih padu, hidupkan Buang latar belakang. Mod Mono juga membuang warna kertas dan menyimpan dakwat sahaja, yang menjadi tumpuan halaman [[transparent-image-to-svg-converter]].'],
    ['Adakah ia mengenali teks dalam PNG saya?','Tidak. Penukar tidak melakukan OCR. Huruf dijejak sebagai kontur vektor, jadi ia diskalakan dengan sempurna tetapi tidak boleh disunting sebagai teks. Jika anda memerlukan teks sebenar, taip semula dalam alat reka bentuk atau gunakan OCR berasingan.'],
    ['Mengapa SVG saya lebih besar daripada PNG saya?','Foto dan kecerunan memerlukan banyak bentuk, dan itu boleh melebihi PNG yang dimampatkan dengan baik. Kurangkan bilangan warna, turunkan Perincian, naikkan Buang bintik atau Pelicinan. Kad saiz fail dan jejak saiz langsung menunjukkan kesan setiap perubahan.'],
    ['Bolehkah saya menyunting SVG dalam Figma, Illustrator, Inkscape atau Canva?','Boleh. Hasilnya ialah SVG standard dengan satu laluan berisi bagi setiap warna, jadi mana-mana penyunting vektor boleh membuka, mewarnakan semula dan membentuknya. Lapisan ditindan mengikut urutan, dan anda boleh menyembunyikan lapisan dalam penukar sebelum memuat turun.']]],
   ['Keserasian',[
    ['Apakah saiz dan format imej yang disokong?','Anda boleh memuat naik fail PNG, JPG, WebP, GIF dan BMP (setiap satu juga mempunyai halamannya sendiri, seperti [[jpg-to-svg-converter]] dan [[webp-to-svg-converter]]) yang boleh dibuka oleh pelayar anda. Untuk prestasi, imej yang sangat besar dikecilkan kepada maksimum 3000 px pada sisi terpanjang sebelum dijejak, dan SVG yang dieksport mengekalkan nisbah aspek asal.'],
    ['Adakah ia berfungsi pada telefon dan tablet?','Ya. Ia berjalan dalam versi semasa Chrome, Edge, Firefox dan Safari pada desktop dan mudah alih. Imej yang sangat besar mungkin lebih perlahan pada telefon lama, jadi cuba imej lebih kecil atau Perincian lebih rendah jika pratonton terasa perlahan.']]]
  ],
  ctaTitle:'Bersedia untuk memvektorkan?',ctaText:'PNG anda hanya satu langkah daripada SVG yang boleh diskalakan.',ctaBtn:'Buka penukar PNG ke SVG'
 },
 dir:{
  eyebrow:'Semua penukar',title:'Semua penukar dan alat SVG percuma',lead:'{n} alat percuma yang berjalan dalam pelayar anda. Pilih penukar di bawah, atau cari mengikut format atau tugas.',
  search:'Cari, cth. “logo”, “PDF”, “minify”',searchLabel:'Cari penukar',filter:'Tapis mengikut jenis',all:'Semua',empty:'Tiada penukar sepadan dengan carian itu. Cuba “SVG”, “logo” atau “PNG”.',
  groups:[['Imej ke SVG','Jejak imej raster menjadi bentuk vektor yang boleh diskalakan.'],['SVG ke imej','Eksport SVG kepada PNG, JPG, WebP, PDF atau ICO.'],['Alat SVG','Mampat, sunting, periksa dan sahkan kod SVG.']],
  here:'Anda di sini',nav:'Semua penukar dan alat SVG'
 },
 foot:{
  blurb:'Penukar PNG ke SVG percuma dan alat SVG yang berjalan sepenuhnya dalam pelayar anda.',colExplore:'Teroka',colCompany:'Syarikat',colLegal:'Perundangan',lang:'Bahasa',
  home:'Laman utama',about:'Tentang kami',contact:'Hubungi kami',terms:'Terma & Syarat',privacy:'Dasar Privasi',sitemap:'Peta laman',
  copy:'© {year} pngtosvgconverter.com',made:'Dibuat untuk pereka dan pembangun · Diproses secara setempat'
 }
};
