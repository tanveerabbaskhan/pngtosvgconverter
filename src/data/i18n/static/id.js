// Halaman penting dalam bahasa Indonesia. Teks hukum perlu ditinjau oleh pemilik situs.
module.exports=function(S){
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const UPDATED=new Date(S.UPDATED+'T00:00:00Z').toLocaleDateString('id-ID',{year:'numeric',month:'long',day:'numeric',timeZone:'UTC'});
const mail=`<a href="mailto:${S.EMAIL}">${S.EMAIL}</a>`;
const N='pngtosvgconverter.com';

const about={slug:'about-us',type:'AboutPage',about:true,
 title:'Tentang Kami | '+N,
 desc:'Ketahui siapa yang mengelola pngtosvgconverter.com, mengapa situs ini ada, cara kerja konverter PNG ke SVG gratis di browser, dan prinsip yang kami pegang.',
 h1:'Tentang '+N,
 lead:'Perangkat gratis dan privat untuk mengubah gambar menjadi SVG yang bersih dan dapat diskalakan, dibuat untuk berjalan sepenuhnya di browser Anda.',
 crumb:'Tentang Kami',
 body:`<h2>Siapa yang mengelola situs ini</h2>
<p>${N} adalah proyek alat web independen yang dikelola oleh tim ${N}. Kami membuat utilitas grafis kecil dan terfokus untuk desainer, pengembang, kreator, dan siapa pun yang membutuhkan versi vektor dari sebuah gambar tanpa memasang perangkat lunak.</p>
<h2>Mengapa situs ini ada</h2>
<p>Mengubah gambar piksel menjadi vektor biasanya berarti membayar perangkat lunak desktop atau mengunggah karya pribadi ke server orang asing. Kami menginginkan yang lebih baik: konverter gratis dan cepat yang menampilkan hasil saat Anda menyesuaikan, dan tidak pernah menerima file Anda.</p>
<h2>Yang dapat Anda lakukan di sini</h2>
<ul>
<li><strong>Gambar ke SVG:</strong> ubah PNG, JPG, WebP, GIF, BMP, AVIF, dan lainnya menjadi vektor yang dapat diskalakan, dengan preset untuk logo, ikon, gambar garis, tanda tangan, hasil pindai, clipart, dan pixel art.</li>
<li><strong>SVG ke gambar:</strong> ekspor SVG sebagai PNG, JPG, WebP, PDF, atau ICO berbagai ukuran.</li>
<li><strong>Alat SVG:</strong> kompres, optimalkan, ubah ukuran, pangkas, warnai ulang, validasi, format, minifikasi, dan periksa kode SVG.</li>
</ul>
<p>Setiap alat memiliki halaman sendiri, tercantum di <a href="../sitemap/">peta situs</a> dan di <a href="../#all">beranda</a>.</p>
<h2>Cara kerja teknologinya</h2>
<p>Konverter PNG ke SVG memakai teknik yang terdokumentasi dengan baik, bukan kotak hitam. Warna dikurangi dengan palet median cut yang disempurnakan dengan k-means. Setiap warna menjadi lapisan bertumpuk yang konturnya ditemukan dengan “marching squares” berpresisi subpiksel, lalu disesuaikan dengan kurva Bézier kubik. Semuanya terjadi di browser Anda.</p>
<h2>Prinsip kami</h2>
<ul>
<li><strong>Privasi lebih dulu.</strong> Konversi terjadi di perangkat Anda. Gambar dan file SVG Anda tidak pernah diunggah. Lihat <a href="../privacy/">Kebijakan Privasi</a> kami.</li>
<li><strong>Hasil yang jujur.</strong> Vektor paling cocok untuk logo, ikon, ilustrasi, dan gambar garis. Kami menyatakan dengan jelas bahwa foto menjadi karya bergaya dan terposterisasi, dan kami menampilkan ukuran file agar Anda dapat menilai sendiri.</li>
<li><strong>Gratis dan sederhana.</strong> Tanpa akun, tanpa watermark, tanpa batas harian.</li>
<li><strong>Mudah diakses dan cepat.</strong> Halaman ringan, berfungsi di ponsel dan dengan keyboard, serta memakai format file standar yang terbuka.</li>
</ul>
<h2>Kualitas dan pembaruan</h2>
<p>Kami menguji konverter dengan pustaka contoh bawaan (logo, ikon, ilustrasi, halaman pindai, tanda tangan, pixel art) dan terus memperbaiki mesin penelusuran serta panduan di setiap halaman. Jika ada yang tampak salah pada file Anda, beri tahu kami.</p>
<h2>Hubungi kami</h2>
<p>Pertanyaan, laporan bug, atau ide alat baru? Gunakan <a href="../contact-us/">halaman kontak</a> atau kirim email ke ${mail}.</p>`};

const contact={slug:'contact-us',type:'ContactPage',
 title:'Kontak | '+N,
 desc:'Hubungi pngtosvgconverter.com untuk pertanyaan, bug, ide fitur, atau permintaan privasi. Kirim pesan lewat formulir atau email kami langsung.',
 h1:'Kontak',
 lead:'Pertanyaan, bug, atau ide alat baru? Kirimkan pesan dan kami akan menjawab.',
 crumb:'Kontak',
 body:`<p>Cara tercepat membantu kami memperbaiki masalah adalah dengan menyertakan halaman yang Anda pakai, browser dan perangkat Anda, serta hasil yang Anda harapkan. Jika gambar tertentu memicu masalah, jelaskan atau sebutkan jenis dan ukurannya. Jangan kirim file rahasia.</p>
<form class="cform" data-contact data-endpoint="${esc(S.CONTACT_ENDPOINT)}" data-email="${S.EMAIL}" data-sending="Mengirim pesan Anda…" data-success="Terima kasih. Pesan Anda telah terkirim." data-success-mailto="Aplikasi email Anda seharusnya terbuka dengan pesan yang sudah siap. Jika tidak ada yang terbuka, tulis langsung ke ${S.EMAIL}." data-error="Maaf, pesan tidak dapat dikirim. Silakan email kami langsung di ${S.EMAIL}." data-invalid="Masukkan nama, alamat email yang valid, dan pesan." novalidate>
<div class="field"><label for="cf-name">Nama</label><input id="cf-name" name="name" type="text" autocomplete="name" required maxlength="120"></div>
<div class="field"><label for="cf-email">Email</label><input id="cf-email" name="email" type="email" autocomplete="email" required maxlength="160"></div>
<div class="field"><label for="cf-msg">Pesan</label><textarea id="cf-msg" name="message" rows="7" required maxlength="4000"></textarea></div>
<div class="hp" aria-hidden="true"><label>Kosongkan kolom ini<input name="website" type="text" tabindex="-1" autocomplete="off"></label></div>
<button class="btn primary lg" type="submit" data-submit>Kirim pesan</button>
<p class="form-status" role="status" aria-live="polite" data-status></p>
</form>
<h2>Lebih suka email?</h2>
<p>Tulis langsung ke ${mail}. Untuk permintaan privasi, cantumkan “Permintaan privasi” pada subjek.</p>
<p>Kami berusaha membalas dalam beberapa hari kerja.</p>`};

const terms={slug:'terms',type:'WebPage',
 title:'Syarat dan Ketentuan | '+N,
 desc:'Syarat penggunaan pngtosvgconverter.com: penggunaan yang dapat diterima, file dan konten Anda, penafian, batas tanggung jawab, dan perubahan ketentuan.',
 h1:'Syarat dan Ketentuan',
 lead:`Terakhir diperbarui: ${UPDATED}`,
 crumb:'Syarat dan Ketentuan',
 body:`<p>Syarat dan Ketentuan ini (“Ketentuan”) mengatur penggunaan Anda atas ${N} dan alat-alatnya (“Layanan”). Dengan menggunakan Layanan, Anda menyetujui Ketentuan ini. Jika tidak setuju, jangan gunakan Layanan.</p>
<h2>1. Layanan</h2>
<p>Layanan menyediakan alat online gratis untuk mengonversi dan mengedit gambar serta file SVG. Alat berjalan di browser web Anda. Kami dapat menambah, mengubah, atau menghapus fitur kapan saja.</p>
<h2>2. File dan konten Anda</h2>
<p>Anda mempertahankan semua hak atas file yang Anda proses. File yang Anda buka di alat diproses secara lokal di perangkat Anda dan tidak diunggah ke server kami. Anda bertanggung jawab memastikan bahwa Anda berhak menggunakan dan mengonversi file yang dipilih, termasuk hak cipta dan merek dagang yang mungkin berlaku.</p>
<h2>3. Penggunaan yang dapat diterima</h2>
<p>Anda setuju untuk tidak menggunakan Layanan guna melanggar hak pihak lain, melanggar hukum, mencoba mengganggu atau membebani Layanan, menyelidiki atau menembus keamanannya, atau mengambil datanya dengan laju yang merugikan pengguna lain.</p>
<h2>4. Output dan akurasi</h2>
<p>Mengonversi gambar raster menjadi vektor adalah sebuah pendekatan. Hasil bergantung pada gambar sumber dan pengaturan yang Anda pilih, dan dapat berbeda dari aslinya. Periksa hasilnya sebelum mengandalkannya, terutama untuk cetak, produksi, atau keperluan hukum.</p>
<h2>5. Kekayaan intelektual</h2>
<p>Layanan, termasuk desain, kode, teks, dan ilustrasinya, dimiliki oleh ${N} atau pemberi lisensinya dan dilindungi hukum yang berlaku. Anda tidak boleh menyalin atau menjual kembali Layanan itu sendiri tanpa izin. Tidak ada ketentuan di sini yang mengalihkan kepemilikan file Anda kepada kami atau kepemilikan Layanan kepada Anda.</p>
<h2>6. Penafian jaminan</h2>
<p>Layanan disediakan “apa adanya” dan “sebagaimana tersedia” tanpa jaminan apa pun, tersurat maupun tersirat, termasuk kesesuaian untuk tujuan tertentu, akurasi, ketersediaan, atau tidak adanya pelanggaran. Kami tidak menjamin bahwa Layanan akan berjalan tanpa gangguan atau kesalahan.</p>
<h2>7. Pembatasan tanggung jawab</h2>
<p>Sejauh diizinkan hukum, ${N} dan pengelolanya tidak bertanggung jawab atas kerugian tidak langsung, insidental, khusus, konsekuensial, atau punitif, maupun kehilangan data, keuntungan, atau bisnis yang timbul dari penggunaan atau ketidakmampuan menggunakan Layanan.</p>
<h2>8. Tautan dan layanan pihak ketiga</h2>
<p>Layanan dapat memuat tautan ke situs pihak ketiga. Kami tidak mengendalikannya dan tidak bertanggung jawab atas konten atau praktiknya.</p>
<h2>9. Perubahan Ketentuan</h2>
<p>Kami dapat memperbarui Ketentuan ini dari waktu ke waktu. Tanggal “Terakhir diperbarui” menunjukkan versi terbaru. Terus menggunakan Layanan setelah perubahan berarti Anda menerima Ketentuan yang diperbarui.</p>
<h2>10. Hukum yang berlaku</h2>
<p>Ketentuan ini diatur oleh hukum yurisdiksi tempat operator Layanan berdomisili, tanpa memperhatikan kaidah pertentangan hukum. Hak konsumen yang bersifat wajib menurut hukum negara Anda tidak terpengaruh.</p>
<h2>11. Kontak</h2>
<p>Pertanyaan tentang Ketentuan ini? Email ${mail} atau gunakan <a href="../contact-us/">halaman kontak</a>. Lihat juga <a href="../privacy/">Kebijakan Privasi</a> kami.</p>`};

const privacy={slug:'privacy',type:'WebPage',
 title:'Kebijakan Privasi | '+N,
 desc:'Cara pngtosvgconverter.com menangani data: file diproses di browser dan tidak pernah diunggah. Yang disimpan, cookie, pihak ketiga, dan hak Anda.',
 h1:'Kebijakan Privasi',
 lead:`Terakhir diperbarui: ${UPDATED}`,
 crumb:'Kebijakan Privasi',
 body:`<p>Privasi Anda penting bagi kami. Kebijakan ini menjelaskan informasi apa yang ditangani ${N} (“kami”) saat Anda menggunakan situs dan alat-alatnya.</p>
<h2>1. File Anda tetap di perangkat Anda</h2>
<p>Alat gambar dan SVG berjalan di browser web Anda menggunakan JavaScript. File yang Anda letakkan, tempel, atau buka diproses secara lokal dan <strong>tidak diunggah</strong> ke server kami atau pihak ketiga mana pun. Kami tidak dapat melihatnya.</p>
<h2>2. Informasi yang kami kumpulkan</h2>
<ul>
<li><strong>Preferensi yang disimpan di perangkat Anda.</strong> Jika Anda beralih antara mode terang dan gelap, pilihan Anda disimpan di penyimpanan lokal browser agar situs dapat mengingatnya. Pilihan itu tidak pernah meninggalkan perangkat Anda.</li>
<li><strong>Pesan yang Anda kirim kepada kami.</strong> Jika Anda memakai formulir kontak atau mengirim email, kami menerima nama, alamat email, dan pesan yang Anda berikan, dan hanya menggunakannya untuk membalas dan meningkatkan Layanan.</li>
<li><strong>Log teknis.</strong> Seperti kebanyakan situs web, penyedia hosting kami dapat menyimpan log server standar (misalnya alamat IP, jenis browser, halaman yang diminta, dan waktu) demi keamanan dan keandalan.</li>
</ul>
<h2>3. Cookie dan analitik</h2>
<p>Kami tidak memasang cookie iklan atau pelacakan. Saat ini kami tidak menjalankan analitik atau skrip iklan pihak ketiga. Jika kelak kami menambahkan analitik yang ramah privasi atau cookie apa pun, kami akan memperbarui halaman ini dan, bila diwajibkan, meminta persetujuan Anda.</p>
<h2>4. Pihak ketiga</h2>
<p>Situs disajikan oleh penyedia hosting dan jaringan pengiriman konten yang memproses data teknis permintaan atas nama kami. Jika formulir kontak dikonfigurasi dengan layanan formulir eksternal, layanan itu memproses pesan yang Anda kirim agar dapat diteruskan kepada kami. Kami tidak menjual informasi pribadi Anda.</p>
<h2>5. Cara kami menggunakan informasi</h2>
<p>Kami menggunakan informasi terbatas yang dijelaskan di atas untuk mengoperasikan dan mengamankan situs, membalas pesan, dan meningkatkan alat. Kami menyimpan pesan hanya selama diperlukan untuk menangani permintaan Anda dan pencatatan yang wajar.</p>
<h2>6. Hak Anda</h2>
<p>Bergantung pada tempat tinggal Anda (misalnya berdasarkan UU PDP, GDPR, atau hukum serupa), Anda mungkin berhak mengakses, memperbaiki, menghapus, atau membatasi penggunaan data pribadi Anda, menolak pemrosesannya, dan mengajukan keluhan kepada otoritas perlindungan data setempat. Karena kami menyimpan sangat sedikit data pribadi, sebagian besar permintaan mudah dipenuhi.</p>
<h2>7. Anak-anak</h2>
<p>Layanan tidak ditujukan untuk anak di bawah 13 tahun, dan kami tidak dengan sengaja mengumpulkan informasi pribadi mereka.</p>
<h2>8. Keamanan</h2>
<p>Situs disajikan melalui HTTPS. Karena file Anda tidak pernah diunggah, file itu tidak terpapar risiko pengiriman atau penyimpanan di sisi kami.</p>
<h2>9. Perubahan kebijakan ini</h2>
<p>Kami dapat memperbarui kebijakan ini. Tanggal “Terakhir diperbarui” menunjukkan versi terbaru.</p>
<h2>10. Kontak untuk permintaan privasi</h2>
<p>Untuk pertanyaan atau permintaan privasi apa pun, email ${mail} dengan “Permintaan privasi” pada subjek, atau gunakan <a href="../contact-us/">halaman kontak</a>. Lihat juga <a href="../terms/">Syarat dan Ketentuan</a> kami.</p>`};

const notFound={
 title:'Halaman tidak ditemukan | '+N,
 desc:'Halaman yang Anda cari tidak ditemukan. Kembali ke konverter PNG ke SVG atau jelajahi konverter gratis dan alat SVG kami yang lain.',
 h1:'Halaman tidak ditemukan',
 lead:'Halaman yang Anda coba buka tidak ada atau telah dipindahkan. Berikut beberapa tempat yang bisa Anda tuju.',
 body:`<ul class="nf-links">
<li><a href="/id/">Konverter PNG ke SVG (beranda)</a></li>
<li><a href="/id/jpg-to-svg-converter/">Konverter JPG ke SVG</a></li>
<li><a href="/id/svg-to-png-converter/">Konverter SVG ke PNG</a></li>
<li><a href="/id/svg-optimizer/">Pengoptimal SVG</a></li>
<li><a href="/id/sitemap/">Peta situs: semua konverter dan alat</a></li>
<li><a href="/id/contact-us/">Kontak</a></li>
</ul>`};

const sitemap={title:'Peta Situs | '+N,desc:'Semua halaman pngtosvgconverter.com: konverter gambar ke SVG, SVG ke gambar, alat SVG gratis, dan beranda dalam 18 bahasa.',h1:'Peta Situs',lead:'Semua halaman pngtosvgconverter.com di satu tempat.',crumb:'Peta Situs',
 main:'Halaman utama',home:'Beranda: konverter PNG ke SVG',about:'Tentang Kami',contact:'Kontak',terms:'Syarat dan Ketentuan',privacy:'Kebijakan Privasi',sitemap:'Peta Situs',
 gRaster:'Konverter gambar ke SVG',gExport:'Konverter SVG ke gambar',gUtil:'Alat SVG',gLang:'Beranda dalam bahasa lain'};
return {about,contact,terms,privacy,notFound,sitemap};
};
