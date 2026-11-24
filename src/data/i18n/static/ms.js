// Halaman penting dalam Bahasa Melayu. Teks undang-undang perlu disemak oleh pemilik tapak.
module.exports=function(S){
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const UPDATED=new Date(S.UPDATED+'T00:00:00Z').toLocaleDateString('ms-MY',{year:'numeric',month:'long',day:'numeric',timeZone:'UTC'});
const mail=`<a href="mailto:${S.EMAIL}">${S.EMAIL}</a>`;
const N='pngtosvgconverter.com';

const about={slug:'about-us',type:'AboutPage',about:true,
 title:'Tentang Kami | '+N,
 desc:'Ketahui siapa yang mengendalikan pngtosvgconverter.com, mengapa ia wujud, cara penukar PNG ke SVG percuma dalam pelayar berfungsi dan prinsip yang kami pegang.',
 h1:'Tentang '+N,
 lead:'Set alat percuma dan peribadi untuk menukar imej kepada SVG yang bersih dan boleh diskalakan, dibina untuk berjalan sepenuhnya dalam pelayar anda.',
 crumb:'Tentang Kami',
 body:`<h2>Siapa yang mengendalikan tapak ini</h2>
<p>${N} ialah projek alat web bebas yang diselenggara oleh pasukan ${N}. Kami membina utiliti grafik kecil yang tertumpu untuk pereka bentuk, pembangun, pencipta dan sesiapa sahaja yang memerlukan versi vektor sesuatu imej tanpa memasang perisian.</p>
<h2>Mengapa ia wujud</h2>
<p>Menukar imej piksel kepada vektor lazimnya bermakna membayar perisian desktop atau memuat naik karya peribadi ke pelayan orang yang tidak dikenali. Kami mahukan sesuatu yang lebih baik: penukar percuma dan pantas yang menunjukkan hasil semasa anda melaras, dan tidak pernah menerima fail anda.</p>
<h2>Apa yang boleh anda lakukan di sini</h2>
<ul>
<li><strong>Imej ke SVG:</strong> tukar PNG, JPG, WebP, GIF, BMP, AVIF dan lain-lain kepada vektor boleh skala, dengan pratetap untuk logo, ikon, lukisan garisan, tandatangan, imbasan, klip seni dan seni piksel.</li>
<li><strong>SVG ke imej:</strong> eksport SVG sebagai PNG, JPG, WebP, PDF atau ICO berbilang saiz.</li>
<li><strong>Alat SVG:</strong> mampat, optimumkan, ubah saiz, pangkas, warna semula, sahkan, format, minimumkan dan periksa kod SVG.</li>
</ul>
<p>Setiap alat mempunyai halamannya sendiri, disenaraikan dalam <a href="../sitemap/">peta laman</a> dan di <a href="../#all">halaman utama</a>.</p>
<h2>Bagaimana teknologi ini berfungsi</h2>
<p>Penukar PNG ke SVG menggunakan teknik yang didokumenkan dengan baik, bukan kotak hitam. Warna dikurangkan dengan palet median cut yang diperhalusi dengan k-means. Setiap warna menjadi lapisan bertindan yang konturnya ditemui dengan “marching squares” berketepatan subpiksel, kemudian disesuaikan dengan lengkung Bézier kubik. Semuanya berlaku dalam pelayar anda.</p>
<h2>Prinsip kami</h2>
<ul>
<li><strong>Privasi dahulu.</strong> Penukaran berlaku pada peranti anda. Imej dan fail SVG anda tidak pernah dimuat naik. Lihat <a href="../privacy/">Dasar Privasi</a> kami.</li>
<li><strong>Hasil yang jujur.</strong> Vektor paling sesuai untuk logo, ikon, ilustrasi dan lukisan garisan. Kami menyatakan dengan jelas bahawa foto menjadi seni bergaya dan terposter, dan kami menunjukkan saiz fail supaya anda dapat menilai sendiri.</li>
<li><strong>Percuma dan mudah.</strong> Tiada akaun, tiada tera air, tiada had harian.</li>
<li><strong>Boleh diakses dan pantas.</strong> Halaman ringan, berfungsi pada telefon dan dengan papan kekunci, serta menggunakan format fail standard dan terbuka.</li>
</ul>
<h2>Kualiti dan kemas kini</h2>
<p>Kami menguji penukar dengan pustaka sampel terbina dalam (logo, ikon, ilustrasi, halaman diimbas, tandatangan, seni piksel) dan terus memperbaiki enjin penjejakan serta panduan di setiap halaman. Jika ada yang kelihatan salah dengan fail anda, beritahu kami.</p>
<h2>Hubungi kami</h2>
<p>Soalan, laporan pepijat atau idea alat baharu? Gunakan <a href="../contact-us/">halaman hubungi</a> atau e-mel ${mail}.</p>`};

const contact={slug:'contact-us',type:'ContactPage',
 title:'Hubungi Kami | '+N,
 desc:'Hubungi pngtosvgconverter.com untuk soalan, pepijat, idea ciri atau permintaan privasi. Hantar mesej melalui borang atau e-mel kami terus.',
 h1:'Hubungi kami',
 lead:'Soalan, pepijat atau idea alat baharu? Hantar mesej dan kami akan membalas.',
 crumb:'Hubungi Kami',
 body:`<p>Cara terpantas membantu kami membetulkan masalah ialah dengan menyertakan halaman yang anda gunakan, pelayar dan peranti anda, serta apa yang anda jangkakan. Jika imej tertentu mencetuskan masalah, huraikannya atau nyatakan jenis dan saiznya. Jangan hantar fail sulit.</p>
<form class="cform" data-contact data-endpoint="${esc(S.CONTACT_ENDPOINT)}" data-email="${S.EMAIL}" data-sending="Menghantar mesej anda…" data-success="Terima kasih. Mesej anda telah dihantar." data-success-mailto="Aplikasi e-mel anda sepatutnya terbuka dengan mesej yang sedia dihantar. Jika tiada apa-apa terbuka, tulis terus kepada ${S.EMAIL}." data-error="Maaf, mesej tidak dapat dihantar. Sila e-mel kami terus di ${S.EMAIL}." data-invalid="Masukkan nama anda, alamat e-mel yang sah dan mesej." novalidate>
<div class="field"><label for="cf-name">Nama</label><input id="cf-name" name="name" type="text" autocomplete="name" required maxlength="120"></div>
<div class="field"><label for="cf-email">E-mel</label><input id="cf-email" name="email" type="email" autocomplete="email" required maxlength="160"></div>
<div class="field"><label for="cf-msg">Mesej</label><textarea id="cf-msg" name="message" rows="7" required maxlength="4000"></textarea></div>
<div class="hp" aria-hidden="true"><label>Biarkan medan ini kosong<input name="website" type="text" tabindex="-1" autocomplete="off"></label></div>
<button class="btn primary lg" type="submit" data-submit>Hantar mesej</button>
<p class="form-status" role="status" aria-live="polite" data-status></p>
</form>
<h2>Lebih suka e-mel?</h2>
<p>Tulis terus kepada ${mail}. Untuk permintaan privasi, letakkan “Permintaan privasi” pada baris subjek.</p>
<p>Kami berusaha membalas dalam beberapa hari bekerja.</p>`};

const terms={slug:'terms',type:'WebPage',
 title:'Terma dan Syarat | '+N,
 desc:'Terma penggunaan pngtosvgconverter.com: penggunaan yang boleh diterima, fail dan kandungan anda, penafian, had liabiliti dan perubahan terma.',
 h1:'Terma dan Syarat',
 lead:`Kemas kini terakhir: ${UPDATED}`,
 crumb:'Terma dan Syarat',
 body:`<p>Terma dan Syarat ini (“Terma”) mengawal penggunaan anda terhadap ${N} dan alatnya (“Perkhidmatan”). Dengan menggunakan Perkhidmatan, anda bersetuju dengan Terma ini. Jika anda tidak bersetuju, sila jangan gunakannya.</p>
<h2>1. Perkhidmatan</h2>
<p>Perkhidmatan menyediakan alat dalam talian percuma untuk menukar dan menyunting imej serta fail SVG. Alat berjalan dalam pelayar web anda. Kami boleh menambah, mengubah atau membuang ciri pada bila-bila masa.</p>
<h2>2. Fail dan kandungan anda</h2>
<p>Anda mengekalkan semua hak ke atas fail yang anda proses. Fail yang anda buka dalam alat diproses secara setempat pada peranti anda dan tidak dimuat naik ke pelayan kami. Anda bertanggungjawab memastikan anda berhak menggunakan dan menukar fail yang dipilih, termasuk hak cipta dan tanda dagangan yang mungkin terpakai.</p>
<h2>3. Penggunaan yang boleh diterima</h2>
<p>Anda bersetuju untuk tidak menggunakan Perkhidmatan bagi melanggar hak pihak lain, melanggar undang-undang, cuba mengganggu atau membebankan Perkhidmatan, menyelidik atau memintas keselamatannya, atau mengikis datanya pada kadar yang merugikan pengguna lain.</p>
<h2>4. Output dan ketepatan</h2>
<p>Menukar imej raster kepada vektor ialah satu penghampiran. Hasil bergantung pada imej sumber dan tetapan yang anda pilih, dan mungkin berbeza daripada yang asal. Semak output sebelum bergantung kepadanya, terutamanya untuk percetakan, pengeluaran atau kegunaan undang-undang.</p>
<h2>5. Harta intelek</h2>
<p>Perkhidmatan, termasuk reka bentuk, kod, teks dan ilustrasinya, dimiliki oleh ${N} atau pemberi lesennya dan dilindungi oleh undang-undang yang terpakai. Anda tidak boleh menyalin atau menjual semula Perkhidmatan itu sendiri tanpa kebenaran. Tiada apa dalam Terma ini yang memindahkan pemilikan fail anda kepada kami atau pemilikan Perkhidmatan kepada anda.</p>
<h2>6. Penafian waranti</h2>
<p>Perkhidmatan disediakan “seadanya” dan “sebagaimana tersedia” tanpa waranti apa-apa jenis, sama ada nyata atau tersirat, termasuk kesesuaian untuk tujuan tertentu, ketepatan, ketersediaan atau tidak melanggar hak. Kami tidak menjamin Perkhidmatan akan berjalan tanpa gangguan atau ralat.</p>
<h2>7. Had liabiliti</h2>
<p>Setakat yang dibenarkan undang-undang, ${N} dan penyelenggaranya tidak bertanggungjawab atas sebarang kerosakan tidak langsung, sampingan, khas, berbangkit atau punitif, atau kehilangan data, keuntungan atau perniagaan yang timbul daripada penggunaan atau ketidakupayaan menggunakan Perkhidmatan.</p>
<h2>8. Pautan dan perkhidmatan pihak ketiga</h2>
<p>Perkhidmatan mungkin memaut ke laman web pihak ketiga. Kami tidak mengawalnya dan tidak bertanggungjawab atas kandungan atau amalannya.</p>
<h2>9. Perubahan pada Terma ini</h2>
<p>Kami boleh mengemas kini Terma ini dari semasa ke semasa. Tarikh “Kemas kini terakhir” menunjukkan versi terkini. Terus menggunakan Perkhidmatan selepas perubahan bermakna anda menerima Terma yang dikemas kini.</p>
<h2>10. Undang-undang terpakai</h2>
<p>Terma ini ditadbir oleh undang-undang bidang kuasa tempat pengendali Perkhidmatan bertapak, tanpa mengambil kira peraturan percanggahan undang-undang. Hak pengguna yang mandatori di bawah undang-undang negara anda tidak terjejas.</p>
<h2>11. Hubungi</h2>
<p>Soalan tentang Terma ini? E-mel ${mail} atau gunakan <a href="../contact-us/">halaman hubungi</a>. Lihat juga <a href="../privacy/">Dasar Privasi</a> kami.</p>`};

const privacy={slug:'privacy',type:'WebPage',
 title:'Dasar Privasi | '+N,
 desc:'Cara pngtosvgconverter.com mengendalikan data: fail diproses dalam pelayar dan tidak pernah dimuat naik. Apa yang disimpan, kuki, pihak ketiga dan hak anda.',
 h1:'Dasar Privasi',
 lead:`Kemas kini terakhir: ${UPDATED}`,
 crumb:'Dasar Privasi',
 body:`<p>Privasi anda penting bagi kami. Dasar ini menerangkan maklumat yang dikendalikan ${N} (“kami”) apabila anda menggunakan laman web dan alatnya.</p>
<h2>1. Fail anda kekal pada peranti anda</h2>
<p>Alat imej dan SVG berjalan dalam pelayar web anda menggunakan JavaScript. Fail yang anda letakkan, tampal atau buka diproses secara setempat dan <strong>tidak dimuat naik</strong> ke pelayan kami atau mana-mana pihak ketiga. Kami tidak dapat melihatnya.</p>
<h2>2. Maklumat yang kami kumpulkan</h2>
<ul>
<li><strong>Keutamaan yang disimpan pada peranti anda.</strong> Jika anda bertukar antara mod cerah dan gelap, pilihan anda disimpan dalam storan setempat pelayar supaya laman dapat mengingatinya. Ia tidak pernah meninggalkan peranti anda.</li>
<li><strong>Mesej yang anda hantar kepada kami.</strong> Jika anda menggunakan borang hubungi atau e-mel kami, kami menerima nama, alamat e-mel dan mesej yang anda berikan, dan hanya menggunakannya untuk membalas serta menambah baik Perkhidmatan.</li>
<li><strong>Log teknikal.</strong> Seperti kebanyakan laman web, penyedia pengehosan kami mungkin menyimpan log pelayan standard (contohnya alamat IP, jenis pelayar, halaman yang diminta dan masa) untuk keselamatan dan kebolehpercayaan.</li>
</ul>
<h2>3. Kuki dan analitik</h2>
<p>Kami tidak menetapkan kuki pengiklanan atau penjejakan. Pada masa ini kami tidak menjalankan analitik atau skrip pengiklanan pihak ketiga. Jika kami menambah analitik mesra privasi atau sebarang kuki pada masa depan, kami akan mengemas kini halaman ini dan, jika diperlukan, meminta persetujuan anda.</p>
<h2>4. Pihak ketiga</h2>
<p>Laman web disampaikan oleh penyedia pengehosan dan rangkaian penghantaran kandungan yang memproses data permintaan teknikal bagi pihak kami. Jika borang hubungi dikonfigurasi dengan perkhidmatan borang luaran, perkhidmatan itu memproses mesej yang anda hantar supaya dapat disampaikan kepada kami. Kami tidak menjual maklumat peribadi anda.</p>
<h2>5. Cara kami menggunakan maklumat</h2>
<p>Kami menggunakan maklumat terhad yang diterangkan di atas untuk mengendalikan dan melindungi laman web, membalas mesej dan menambah baik alat. Kami menyimpan mesej hanya selama yang perlu untuk mengendalikan permintaan anda dan penyimpanan rekod yang munasabah.</p>
<h2>6. Hak anda</h2>
<p>Bergantung pada tempat anda tinggal (contohnya di bawah PDPA, GDPR atau undang-undang serupa), anda mungkin berhak mengakses, membetulkan, memadam atau menyekat penggunaan data peribadi anda, membantah pemprosesannya dan mengemukakan aduan kepada pihak berkuasa perlindungan data tempatan. Memandangkan kami menyimpan sangat sedikit data peribadi, kebanyakan permintaan mudah dipenuhi.</p>
<h2>7. Kanak-kanak</h2>
<p>Perkhidmatan tidak ditujukan kepada kanak-kanak di bawah 13 tahun, dan kami tidak sengaja mengumpul maklumat peribadi mereka.</p>
<h2>8. Keselamatan</h2>
<p>Laman web disampaikan melalui HTTPS. Memandangkan fail anda tidak pernah dimuat naik, ia tidak terdedah kepada risiko penghantaran atau penyimpanan di pihak kami.</p>
<h2>9. Perubahan pada dasar ini</h2>
<p>Kami boleh mengemas kini dasar ini. Tarikh “Kemas kini terakhir” menunjukkan versi terkini.</p>
<h2>10. Hubungi untuk permintaan privasi</h2>
<p>Untuk sebarang soalan atau permintaan privasi, e-mel ${mail} dengan “Permintaan privasi” pada baris subjek atau gunakan <a href="../contact-us/">halaman hubungi</a>. Lihat juga <a href="../terms/">Terma dan Syarat</a> kami.</p>`};

const notFound={
 title:'Halaman tidak ditemui | '+N,
 desc:'Halaman yang anda cari tidak ditemui. Kembali ke penukar PNG ke SVG atau terokai penukar percuma dan alat SVG kami yang lain.',
 h1:'Halaman tidak ditemui',
 lead:'Halaman yang anda cuba buka tidak wujud atau telah dialihkan. Berikut beberapa tempat untuk dituju.',
 body:`<ul class="nf-links">
<li><a href="/ms/">Penukar PNG ke SVG (utama)</a></li>
<li><a href="/ms/jpg-to-svg-converter/">Penukar JPG ke SVG</a></li>
<li><a href="/ms/svg-to-png-converter/">Penukar SVG ke PNG</a></li>
<li><a href="/ms/svg-optimizer/">Pengoptimum SVG</a></li>
<li><a href="/ms/sitemap/">Peta laman: semua penukar dan alat</a></li>
<li><a href="/ms/contact-us/">Hubungi kami</a></li>
</ul>`};

const sitemap={title:'Peta Laman | '+N,desc:'Semua halaman pngtosvgconverter.com: penukar imej ke SVG, SVG ke imej, alat SVG percuma dan halaman utama dalam 18 bahasa.',h1:'Peta Laman',lead:'Semua halaman pngtosvgconverter.com di satu tempat.',crumb:'Peta Laman',
 main:'Halaman utama',home:'Utama: penukar PNG ke SVG',about:'Tentang Kami',contact:'Hubungi Kami',terms:'Terma dan Syarat',privacy:'Dasar Privasi',sitemap:'Peta Laman',
 gRaster:'Penukar imej ke SVG',gExport:'Penukar SVG ke imej',gUtil:'Alat SVG',gLang:'Halaman utama dalam bahasa lain'};
return {about,contact,terms,privacy,notFound,sitemap};
};
