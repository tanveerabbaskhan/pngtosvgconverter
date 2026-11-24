module.exports={
 meta:{title:'pngtosvgconverter.com: Konverter PNG ke SVG Gratis',desc:'Konverter PNG ke SVG gratis yang berjalan di browser. Vektorkan PNG apa pun dengan pratinjau langsung. Tanpa unggah file dan tanpa daftar.',alt:'pngtosvgconverter.com: konverter PNG ke SVG gratis dengan pratinjau langsung'},
 h1:{kw:'Konverter PNG ke SVG',tail:'ubah PNG apa pun menjadi SVG yang bisa diskalakan'},
 lead:'Konversi PNG ke SVG online dalam hitungan detik. Konverter gratis ini menelusuri gambar Anda menjadi jalur vektor yang bersih langsung di browser, tanpa unggah file, tanpa daftar, dan tanpa watermark.',
 skip:'Lompat ke konten utama',
 nav:{converter:'Konverter',all:'Semua konverter',faq:'FAQ',about:'Tentang kami',contact:'Kontak',menu:'Menu',theme:'Ganti tema',upload:'Unggah gambar',main:'Navigasi utama',toc:'Di halaman ini'},
 toc:{how:'Cara kerja',proc:'Proses konversi',chart:'Tabel dan fitur',faq:'FAQ',all:'Semua konverter'},
 ui:{
  toolH2:'Alat konversi PNG ke SVG',step1:'Tambahkan gambar Anda',dropAria:'Unggah gambar',drop:'Letakkan PNG di sini, atau klik untuk menelusuri',paste:'Anda juga bisa menempel dengan Ctrl+V. Tidak ada yang diunggah.',
  sample:'Tidak punya gambar? Coba contoh:',sLogo:'Logo',sScene:'Pemandangan',sIcon:'Ikon',choose:'Pilih gambar',
  step2:'Atur hasilnya',reset:'Atur ulang',startFrom:'Mulai dari',pLogo:'Logo',pIllus:'Ilustrasi',pPhoto:'Foto',pLine:'Gambar garis',
  style:'Gaya',mColor:'Warna',mGray:'Abu-abu',mMono:'Mono',rmbg:'Hapus latar belakang',rmbgSub:'Membersihkan tepi putih atau transparan',
  colors:'Warna',thresh:'Ambang',ink:'Warna tinta',smooth:'Penghalusan',more:'Opsi lainnya',detail:'Detail',specks:'Hapus bintik',denoise:'Kurangi derau',
  step3:'Pratinjau dan unduh',live:'Pratinjau langsung',loading:'Memuat…',copy:'Salin kode SVG',download:'Unduh SVG',
  chipL:'Asli · PNG',chipR:'Vektor · SVG',handle:'Bandingkan asli dan SVG',hint:'Seret gagang untuk membandingkan · gulir untuk memperbesar',zoomOut:'Perkecil',zoomIn:'Perbesar',fit:'Pas',
  veil:'Lepaskan gambar untuk dikonversi',veilSub:'PNG, JPG, WebP, GIF',fileSize:'Ukuran file SVG',tColors:'Warna',time:'Waktu',
  moreD:'Detail lainnya',moreDSub:'Lapisan warna, riwayat ukuran, kode SVG',shapes:'Bentuk',shapesSub:'kontur tertutup',nodes:'Simpul',nodesSub:'titik jalur',
  p1:'Dekode',p2:'Kuantisasi',p3:'Telusur',p4:'Sederhanakan',p5:'Render',
  layers:'Lapisan warna',layersSub:'Arahkan untuk mengisolasi · klik untuk menyembunyikan',trace:'Jejak ukuran langsung',traceSub:'Ukuran SVG per penyesuaian',legSvg:'Ukuran SVG',legPng:'PNG asli',src:'Sumber SVG'
 },
 js:{
  needImage:'Pilih file gambar',readFail:'Gambar tersebut tidak dapat dibaca',tracedAt:'ditelusuri pada {w}×{h}',
  smaller:'<span class="delta good">{pct}% lebih kecil</span> dari PNG {size}',larger:'<span class="delta warn">{pct}% lebih besar</span> dari PNG {size}',
  noShapes:'Tidak ada bentuk yang terlihat — coba turunkan “Hapus bintik”.',pts:'titik',moreChars:'… {n} karakter lagi',lines:'{n} baris',previewOnly:'hanya pratinjau — Salin atau Unduh memberi file lengkap',
  runs:'{n} proses · sekarang {size}',run1:'1 proses · sekarang {size}',fullCopied:'SVG lengkap disalin',downloaded:'SVG diunduh · {size}',copied:'Kode SVG disalin',
  dirStatus:'Menampilkan {a} dari {b} alat'
 },
 how:{
  eyebrow:'Di balik layar',title:'Cara kerja konverter PNG ke SVG',
  def:'<strong>Konverter PNG ke SVG</strong> mengubah kisi piksel berwarna menjadi sekumpulan bentuk vektor berisi. Konverter ini melakukannya dalam lima tahap otomatis, sepenuhnya di dalam browser Anda, dan menggambar ulang hasilnya setiap kali Anda menggeser penggeser.',
  stages:[
   ['Dekode','Browser Anda membaca PNG dengan Canvas API dan mengubahnya menjadi kisi piksel RGBA. File besar disampel ulang ke ukuran kerja yang diatur penggeser Detail, dan buram pengurang derau opsional menghilangkan butiran.','Canvas · getImageData'],
   ['Kuantisasi','Palet 2–64 warna dari median cut disempurnakan dengan k-means. Warna yang nyaris sama digabung, piksel tepi yang dihaluskan dipetakan ke warna asli terdekat, dan bintik kecil diserap tetangganya.','Median cut · k-means'],
   ['Telusur','Setiap warna menjadi lapisan bertumpuk. Masker lapisan dilembutkan dan kontur-nya diekstrak dengan marching squares, menghasilkan kontur subpiksel yang mengikuti tepi sebenarnya, bukan anak tangga piksel.','Marching squares'],
   ['Pencocokan kurva','Sudut dideteksi, lalu setiap bagian halus dicocokkan dengan kurva Bézier kubik. Tepi lurus tetap berupa garis lurus, sehingga hasilnya membutuhkan jauh lebih sedikit simpul daripada penelusuran piksel mentah.','Pencocokan Bézier Schneider'],
   ['Render','Jalur ditulis sebagai satu jalur SVG berisi per warna, dengan viewBox asli tetap terjaga. Pratinjau, ukuran file, palet, dan kode sumber diperbarui langsung saat Anda menggeser penggeser.','SVG · fill-rule evenodd']],
  cap:'Lima tahap konversi PNG ke SVG: dekode, kuantisasi, telusur, pencocokan kurva, dan render.',
  privTitle:'Ke mana file Anda pergi',privCap:'PNG diproses di perangkat Anda. Tidak ada unggahan, sehingga file tidak pernah sampai ke server.',privAlt:'PNG Anda tetap di perangkat Anda',privAltDesc:'PNG melewati konverter di dalam browser dan menjadi SVG. Tidak ada panah yang keluar dari perangkat Anda menuju server.',
  privBrowser:'BROWSER ANDA',privEngine:'Mesin telusur',privServer:'Server',privNot:'tidak terlibat',
  whyTitle:'Mengapa hasilnya tetap kecil dan bersih',
  why:[['Lapisan bertumpuk','Setiap warna berada di atas warna di bawahnya, sehingga tidak ada celah tipis dan jauh lebih sedikit lubang yang perlu dijelaskan.'],['Kontur subpiksel','Tepi ditempatkan di antara piksel, bukan di atasnya, sehingga diagonal dan kurva tetap halus.'],['Pencocokan kurva','Satu segmen Bézier bisa menggantikan puluhan anak tangga piksel, sehingga logo biasa hanya butuh beberapa ratus simpul.'],['Pembersihan sebelum telusur','Pinggiran anti-aliasing dan bintik digabung lebih dulu, sehingga tidak pernah menjadi bentuk tambahan.']]
 },
 proc:{
  eyebrow:'Langkah demi langkah',title:'Proses konversi PNG ke SVG',
  def:'Mengonversi PNG ke SVG hanya butuh lima langkah dan biasanya kurang dari semenit. Anda bisa berhenti setelah langkah mana pun: SVG siap diunduh begitu pratinjau terlihat pas.',
  steps:[
   ['Tambahkan PNG Anda','Letakkan PNG di kotak unggah, klik “Pilih gambar”, atau tempel dari papan klip dengan Ctrl+V. Belum siap? Tekan tombol contoh untuk melihat konverter bekerja lebih dulu.','Juga menerima JPG, WebP, GIF, dan BMP.'],
   ['Pilih preset','Pilih Logo, Ilustrasi, Foto, atau Gambar garis. Setiap preset menetapkan nilai yang masuk akal untuk warna, detail, penghalusan, dan penghapusan bintik, sehingga pratinjau pertama biasanya sudah dekat.','Logo: 4–8 warna. Foto: 32–48 warna.'],
   ['Setel penelusuran','Atur jumlah warna (2–64), Detail, Penghalusan, Hapus bintik, dan Kurangi derau. Beralih antara mode Warna, Abu-abu, dan Mono, lalu aktifkan Hapus latar belakang untuk tepi putih atau transparan.','Setiap penggeser memperbarui pratinjau seketika.'],
   ['Bandingkan dan periksa','Seret gagang untuk membandingkan PNG asli dengan SVG. Gulir untuk memperbesar, seret untuk menggeser, dan arahkan ke lapisan warna untuk mengisolasinya atau klik untuk menyembunyikannya sebelum diekspor.','Perbesar hingga 3200% untuk melihat SVG tetap tajam.'],
   ['Unduh atau salin SVG','Tekan “Unduh SVG” untuk menyimpan file, atau “Salin kode” untuk menempel kode langsung ke proyek Anda, Figma, Illustrator, Inkscape, atau halaman web.','File tidak pernah meninggalkan perangkat Anda.']],
  cta:'Konversi PNG sekarang',tipLabel:'Tips:',
  mock:{dropLabel:'Letakkan PNG',presets:['Logo','Ilustrasi','Foto','Gambar garis'],sliders:['Warna','Detail','Penghalusan'],dlBtn:'Unduh SVG'}
 },
 chart:{
  eyebrow:'Referensi',title:'Tabel konversi PNG ke SVG / fitur',
  def:'Gunakan tabel ini untuk memilih pengaturan yang tepat bagi jenis PNG Anda, melihat seberapa baik tiap jenis terkonversi, dan membandingkan PNG dengan SVG. Nilainya sesuai dengan preset bawaan konverter.',
  barsTitle:'Seberapa baik tiap jenis PNG terkonversi',barsCap:'Kecocokan vektor dari 1 (buruk) sampai 5 (sangat baik). Karya datar berkontras tinggi terkonversi paling baik; foto paling kurang baik.',
  barsAlt:'Seberapa baik tiap jenis PNG terkonversi ke SVG',
  bars:['Logo','Ikon','Pixel art','Ilustrasi datar','Gambar garis','Tanda tangan','Dokumen hasil pindai','Foto'],
  quickTitle:'Jawaban singkat',
  quick:[['Hasil terbaik:','logo, ikon, pixel art, dan ilustrasi datar.'],['Hasil bagus:','gambar garis, sketsa, dan tanda tangan dalam mode Mono.'],['Perlu kehati-hatian:','halaman hasil pindai, yang butuh pengurangan derau dan filter bintik lebih tinggi.'],['Hanya hasil bergaya:','foto dan gradasi halus menjadi seni posterisasi.']],
  note:'Tips: mulai dari preset terdekat, lalu ubah satu penggeser dalam satu waktu.',
  t1:{cap:'Pengaturan konverter yang disarankan menurut jenis PNG',cols:['Jenis PNG','Preset atau mode','Warna','Detail','Penghalusan','Hapus bintik','Kecocokan vektor'],
   rows:[['Logo','Preset Logo'],['Ikon','Preset Logo'],['Ilustrasi datar atau kartun','Preset Ilustrasi'],['Gambar garis atau sketsa','Preset Gambar garis · Mono'],['Tanda tangan','Mono · ambang 160'],['Pixel art','Mode Piksel'],['Dokumen hasil pindai','Mono · pengurangan derau 1,5'],['Foto','Preset Foto']],
   words:{ink:'tinta',auto:'ukuran piksel otomatis',na:'tidak dipakai',up:'hingga'}},
  t2:{cap:'PNG vs SVG sekilas',cols:['Fitur','PNG (raster)','SVG (vektor)'],
   rows:[['Penskalaan','Piksel menjadi buram atau pecah saat diperbesar','Dapat diskalakan ke ukuran apa pun tanpa kehilangan ketajaman'],['Ukuran file','Bertambah seiring jumlah piksel','Bertambah seiring kerumitan bentuk — sangat kecil untuk karya datar'],['Penyuntingan','Menyunting piksel di editor raster','Menyunting bentuk, kurva, dan warna di editor vektor mana pun'],['Terbaik untuk','Foto dan tekstur detail','Logo, ikon, ilustrasi, diagram, dan gambar garis'],['Transparansi','Kanal alfa','Bawaan — ruang kosong otomatis transparan'],['Penataan dengan CSS','Tidak mungkin','Mungkin jika SVG disematkan di halaman'],['Cetak dan papan nama','Butuh file asli beresolusi tinggi','Bebas resolusi untuk ukuran cetak apa pun']]},
  featTitle:'Fitur konverter',
  feats:[['Pratinjau langsung','Setiap penggeser menelusuri ulang gambar dan memperbarui tampilan terbagi, grafik ukuran, palet, dan jumlah simpul sekaligus.'],['Penelusuran subpiksel','Kontur mengikuti tepi sebenarnya di antara warna, bukan batas piksel, sehingga kurva tetap halus.'],['Pencocokan kurva Bézier','Bagian halus menjadi Bézier kubik dan tepi lurus tetap berupa garis, sehingga jumlah simpul tetap rendah.'],['Lapisan warna bertumpuk','Lapisan saling bertumpuk, sehingga tidak ada celah tipis atau sambungan di antara warna.'],['2–64 warna','Pilih berapa warna yang dipertahankan, atau beralih ke Abu-abu atau Mono. Arahkan atau sembunyikan lapisan apa pun sebelum ekspor.'],['Mode Piksel','Menelusuri pixel art sebagai persegi panjang tajam pada ukuran piksel yang terdeteksi, tanpa penghalusan.'],['Latar belakang transparan','Piksel transparan tidak pernah menjadi bentuk. Hapus latar belakang membersihkan latar putih polos dengan satu klik.'],['Zoom dan bandingkan','Seret gagang untuk membandingkan, lalu perbesar hingga 3200% untuk melihat PNG berpiksel sementara SVG tetap tajam.'],['Privat sejak rancangan','Konversi berjalan di browser Anda. PNG Anda tidak pernah diunggah, disimpan, atau dibagikan.'],['Gratis, tanpa batas','Tanpa akun, tanpa watermark, tanpa kuota harian. Konversi gambar sebanyak yang Anda mau.']]
 },
 faq:{
  eyebrow:'Jawaban',title:'FAQ',def:'Pertanyaan yang sering diajukan tentang konverter PNG ke SVG: cara kerjanya, apa yang bisa diharapkan, dan cara mendapat hasil terbaik. {n} jawaban dalam empat topik.',
  groups:[
   ['Dasar-dasar',[
    ['Apa itu konverter PNG ke SVG?','Konverter PNG ke SVG mengubah gambar PNG berbasis piksel menjadi SVG vektor yang terdiri dari bentuk dan kurva matematis. Karena SVG menggambarkan bentuk, bukan piksel, SVG dapat diskalakan ke ukuran apa pun tanpa buram, dan untuk karya datar seperti logo dan ikon ukurannya sering jauh lebih kecil dari PNG.'],
    ['Apakah konverter PNG ke SVG ini gratis?','Ya. Sepenuhnya gratis tanpa akun, tanpa watermark, dan tanpa batas harian. Satu-satunya batas praktis adalah perangkat Anda: gambar diproses hingga 3000 px pada sisi terpanjang, dan file yang sangat besar atau sangat detail hanya butuh waktu sedikit lebih lama.'],
    ['Apakah file PNG saya diunggah ke server?','Tidak. Konversi berjalan sepenuhnya di browser Anda dengan JavaScript dan Canvas API. PNG Anda tidak pernah diunggah, disimpan, atau dibagikan, sehingga karya yang bersifat rahasia tetap berada di perangkat Anda.'],
    ['Apa perbedaan PNG dan SVG?','PNG adalah format raster yang menyimpan kisi piksel berwarna, sehingga kehilangan ketajaman saat diperbesar. SVG adalah format vektor yang menyimpan bentuk, kurva, dan isian, sehingga tetap tajam pada ukuran apa pun dan dapat disunting di alat vektor. PNG cocok untuk foto; SVG cocok untuk logo, ikon, diagram, dan gambar garis.']]],
   ['Kualitas dan pengaturan',[
    ['Apakah SVG akan terlihat persis seperti PNG saya?','Tidak piksel demi piksel. Konversi menelusuri bentuk yang ditemukan dan mendekatinya dengan kurva, sehingga hasilnya versi karya yang bersih dan dapat diskalakan. Gambar datar berkontras tinggi cocok sekali, sedangkan foto menjadi versi bergaya dan terposterisasi.'],
    ['Gambar PNG apa yang terkonversi paling baik?','Logo, ikon, ilustrasi datar, kartun, gambar garis, tanda tangan, dan pixel art terkonversi paling baik karena terdiri dari bentuk jelas dan sedikit warna. Foto dan gradasi halus paling kurang baik (coba [[photo-to-vector-converter]] untuk hasil bergaya). Lihat tabel di atas untuk pengaturan menurut jenis gambar.'],
    ['Berapa banyak warna yang sebaiknya saya pilih?','Samakan dengan jumlah warna datar pada karya Anda. Kebanyakan logo butuh 4–8, ikon 3–6, dan ilustrasi 12–20. Foto bisa butuh 32–48 atau lebih. Warna berlebih menambah lapisan dan ukuran tanpa memperbaiki desain datar, dan daftar lapisan warna menunjukkan persis kontribusi tiap warna.'],
    ['Bagaimana mendapat garis lebih halus atau sudut lebih tajam?','Gunakan penggeser Penghalusan. Nilai rendah menjaga sudut tetap tajam dan tepi dekat dengan aslinya; nilai tinggi membulatkan anak tangga piksel dan goyangan. Naikkan Detail untuk fitur lebih halus dan turunkan Hapus bintik jika garis tipis hilang.'],
    ['Mengapa foto saya terlihat terposterisasi atau berpita?','Vektor menyimpan wilayah warna datar, jadi gradasi halus harus didekati dengan pita. Tambah jumlah warna dan Detail, beri sedikit pengurangan derau, atau terima tampilan grafis yang tegas. Untuk detail foto yang sesungguhnya, simpan PNG atau gunakan format foto.']]],
   ['Transparansi, teks, dan penyuntingan',[
    ['Bagaimana mempertahankan latar belakang transparan?','Piksel transparan pada PNG Anda otomatis dihormati dan tidak pernah menjadi bentuk, sehingga SVG tidak memiliki kotak latar. Jika PNG Anda berlatar putih polos, aktifkan Hapus latar belakang. Mode Mono juga membuang warna kertas dan hanya menyimpan tinta, yang menjadi fokus halaman [[transparent-image-to-svg-converter]].'],
    ['Apakah ia mengenali teks di PNG saya?','Tidak. Konverter tidak melakukan OCR. Huruf ditelusuri sebagai kontur vektor, sehingga diskalakan dengan sempurna tetapi tidak dapat disunting sebagai teks. Jika butuh teks asli, ketik ulang di alat desain atau gunakan OCR terpisah.'],
    ['Mengapa SVG saya lebih besar dari PNG?','Foto dan gradasi butuh banyak bentuk, dan itu bisa melampaui ukuran PNG yang terkompresi baik. Kurangi jumlah warna, turunkan Detail, naikkan Hapus bintik atau Penghalusan. Kartu ukuran file dan jejak ukuran langsung menunjukkan efek setiap perubahan.'],
    ['Bisakah saya menyunting SVG di Figma, Illustrator, Inkscape, atau Canva?','Ya. Hasilnya adalah SVG standar dengan satu jalur berisi per warna, sehingga editor vektor mana pun dapat membuka, mewarnai ulang, dan membentuknya kembali. Lapisan ditumpuk berurutan, dan Anda dapat menyembunyikan lapisan di konverter sebelum mengunduh.']]],
   ['Kompatibilitas',[
    ['Ukuran dan format PNG apa yang didukung?','Anda dapat mengunggah file PNG, JPG, WebP, GIF, dan BMP (masing-masing juga punya halaman sendiri, seperti [[jpg-to-svg-converter]] dan [[webp-to-svg-converter]]) yang dapat dibuka browser Anda. Demi kinerja, gambar yang sangat besar diperkecil hingga maksimal 3000 px pada sisi terpanjang sebelum ditelusuri, dan SVG hasil ekspor mempertahankan rasio aspek asli.'],
    ['Apakah berjalan di ponsel dan tablet?','Ya. Berjalan di Chrome, Edge, Firefox, dan Safari versi terbaru pada desktop dan seluler. Gambar yang sangat besar bisa lebih lambat di ponsel lama, jadi coba gambar lebih kecil atau Detail lebih rendah jika pratinjau terasa lambat.']]]
  ],
  ctaTitle:'Siap memvektorkan?',ctaText:'PNG Anda hanya selangkah dari SVG yang dapat diskalakan.',ctaBtn:'Buka konverter PNG ke SVG'
 },
 dir:{
  eyebrow:'Semua konverter',title:'Semua konverter dan alat SVG gratis',lead:'{n} alat gratis yang berjalan di browser Anda. Pilih konverter di bawah, atau cari berdasarkan format atau tugas.',
  search:'Cari, mis. “logo”, “PDF”, “minify”',searchLabel:'Cari konverter',filter:'Saring menurut jenis',all:'Semua',empty:'Tidak ada konverter yang cocok dengan pencarian itu. Coba “SVG”, “logo”, atau “PNG”.',
  groups:[['Gambar ke SVG','Telusuri gambar raster menjadi bentuk vektor yang dapat diskalakan.'],['SVG ke gambar','Ekspor SVG ke PNG, JPG, WebP, PDF, atau ICO.'],['Alat SVG','Kompres, sunting, periksa, dan validasi kode SVG.']],
  here:'Anda di sini',nav:'Semua konverter dan alat SVG'
 },
 foot:{
  blurb:'Konverter PNG ke SVG gratis dan alat SVG yang berjalan sepenuhnya di browser Anda.',colExplore:'Jelajahi',colCompany:'Perusahaan',colLegal:'Hukum',lang:'Bahasa',
  home:'Beranda',about:'Tentang kami',contact:'Kontak',terms:'Syarat & Ketentuan',privacy:'Kebijakan Privasi',sitemap:'Peta situs',
  copy:'© {year} pngtosvgconverter.com',made:'Dibuat untuk desainer dan pengembang · Diproses secara lokal'
 }
};
