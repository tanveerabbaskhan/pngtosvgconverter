// Türkçe temel sayfalar. Hukuki metin site sahibi tarafından gözden geçirilmelidir.
module.exports=function(S){
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const UPDATED=new Date(S.UPDATED+'T00:00:00Z').toLocaleDateString('tr-TR',{year:'numeric',month:'long',day:'numeric',timeZone:'UTC'});
const mail=`<a href="mailto:${S.EMAIL}">${S.EMAIL}</a>`;
const N='pngtosvgconverter.com';

const about={slug:'about-us',type:'AboutPage',about:true,
 title:'Hakkımızda | '+N,
 desc:'pngtosvgconverter.com’u kimin yönettiğini, neden var olduğunu, tarayıcıdaki ücretsiz PNG SVG dönüştürücünün nasıl çalıştığını ve ilkelerimizi öğrenin.',
 h1:N+' hakkında',
 lead:'Görselleri temiz, ölçeklenebilir SVG’ye dönüştüren, tamamen tarayıcınızda çalışan ücretsiz ve gizlilik odaklı bir araç seti.',
 crumb:'Hakkımızda',
 body:`<h2>Bu siteyi kim yönetiyor</h2>
<p>${N}, ${N} ekibi tarafından yürütülen bağımsız bir web araçları projesidir. Tasarımcılar, geliştiriciler, üreticiler ve yazılım kurmadan bir görselin vektör sürümüne ihtiyaç duyan herkes için küçük ve odaklı grafik araçlar geliştiriyoruz.</p>
<h2>Neden var</h2>
<p>Piksel görseli vektöre çevirmek genellikle masaüstü yazılıma para ödemek ya da özel çalışmalarınızı bilmediğiniz bir sunucuya yüklemek demektir. Daha iyisini istedik: ücretsiz, hızlı, ayar yaparken sonucu gösteren ve dosyalarınızı asla almayan bir dönüştürücü.</p>
<h2>Burada neler yapabilirsiniz</h2>
<ul>
<li><strong>Görselden SVG’ye:</strong> PNG, JPG, WebP, GIF, BMP, AVIF ve daha fazlasını logo, simge, çizgi çizim, imza, tarama, küçük resim ve piksel sanat ön ayarlarıyla ölçeklenebilir vektörlere dönüştürün.</li>
<li><strong>SVG’den görsele:</strong> SVG’yi PNG, JPG, WebP, PDF veya çok boyutlu ICO olarak dışa aktarın.</li>
<li><strong>SVG araçları:</strong> SVG kodunu sıkıştırın, optimize edin, yeniden boyutlandırın, kırpın, yeniden renklendirin, doğrulayın, biçimlendirin, küçültün ve inceleyin.</li>
</ul>
<p>Her aracın kendi sayfası vardır; <a href="../sitemap/">site haritasında</a> ve <a href="../#all">ana sayfada</a> listelenir.</p>
<h2>Teknoloji nasıl çalışır</h2>
<p>PNG SVG dönüştürücü kara kutu değil, iyi belgelenmiş yöntemler kullanır. Renkler medyan kesim paletiyle azaltılır ve k-means ile iyileştirilir. Her renk, konturu piksel altı doğrulukla “marching squares” yöntemiyle bulunan ve kübik Bézier eğrileriyle uyarlanan üst üste bir katman olur. Hepsi tarayıcınızda gerçekleşir.</p>
<h2>İlkelerimiz</h2>
<ul>
<li><strong>Önce gizlilik.</strong> Dönüştürme cihazınızda yapılır. Görselleriniz ve SVG dosyalarınız asla yüklenmez. <a href="../privacy/">Gizlilik Politikamıza</a> bakın.</li>
<li><strong>Dürüst sonuçlar.</strong> Vektörler en çok logolar, simgeler, illüstrasyonlar ve çizgi çizimler için uygundur. Fotoğrafların stilize, posterize bir esere dönüştüğünü açıkça söyler ve sonucu kendiniz değerlendirebilmeniz için dosya boyutunu gösteririz.</li>
<li><strong>Ücretsiz ve basit.</strong> Hesap yok, filigran yok, günlük sınır yok.</li>
<li><strong>Erişilebilir ve hızlı.</strong> Sayfalar hafiftir, telefonlarda ve klavyeyle çalışır, standart ve açık dosya biçimleri kullanır.</li>
</ul>
<h2>Kalite ve güncellemeler</h2>
<p>Dönüştürücüyü logo, simge, illüstrasyon, taranmış sayfa, imza ve piksel sanatı içeren yerleşik örnek kütüphanesiyle test eder; izleme motorunu ve her sayfadaki yönlendirmeyi sürekli geliştiririz. Dosyanızla ilgili bir sorun görürseniz bize bildirin.</p>
<h2>İletişim</h2>
<p>Sorularınız, hata bildirimleriniz veya yeni araç fikirleriniz mi var? <a href="../contact-us/">İletişim sayfasını</a> kullanın veya ${mail} adresine yazın.</p>`};

const contact={slug:'contact-us',type:'ContactPage',
 title:'İletişim | '+N,
 desc:'Sorular, hatalar, özellik fikirleri veya gizlilik talepleri için pngtosvgconverter.com ile iletişime geçin. Formla mesaj gönderin veya doğrudan e-posta yazın.',
 h1:'İletişim',
 lead:'Sorularınız, hata bildirimleriniz veya yeni araç fikirleriniz mi var? Bize yazın, size dönelim.',
 crumb:'İletişim',
 body:`<p>Bir sorunu çözmemize yardım etmenin en hızlı yolu; kullandığınız sayfayı, tarayıcınızı ve cihazınızı ve beklediğiniz sonucu yazmaktır. Sorunu belirli bir görsel tetikliyorsa onu veya türünü ve boyutunu belirtin. Lütfen gizli dosyalar göndermeyin.</p>
<form class="cform" data-contact data-endpoint="${esc(S.CONTACT_ENDPOINT)}" data-email="${S.EMAIL}" data-sending="Mesajınız gönderiliyor…" data-success="Teşekkürler. Mesajınız gönderildi." data-success-mailto="E-posta uygulamanız hazır mesajla açılmalı. Hiçbir şey açılmazsa doğrudan ${S.EMAIL} adresine yazın." data-error="Üzgünüz, mesaj gönderilemedi. Lütfen doğrudan ${S.EMAIL} adresine yazın." data-invalid="Lütfen adınızı, geçerli bir e-posta adresini ve bir mesaj girin." novalidate>
<div class="field"><label for="cf-name">Ad</label><input id="cf-name" name="name" type="text" autocomplete="name" required maxlength="120"></div>
<div class="field"><label for="cf-email">E-posta</label><input id="cf-email" name="email" type="email" autocomplete="email" required maxlength="160"></div>
<div class="field"><label for="cf-msg">Mesaj</label><textarea id="cf-msg" name="message" rows="7" required maxlength="4000"></textarea></div>
<div class="hp" aria-hidden="true"><label>Bu alanı boş bırakın<input name="website" type="text" tabindex="-1" autocomplete="off"></label></div>
<button class="btn primary lg" type="submit" data-submit>Mesaj gönder</button>
<p class="form-status" role="status" aria-live="polite" data-status></p>
</form>
<h2>E-posta mı tercih edersiniz?</h2>
<p>Doğrudan ${mail} adresine yazabilirsiniz. Gizlilik talepleri için konu satırına “Gizlilik talebi” yazın.</p>
<p>Genellikle birkaç iş günü içinde yanıt vermeyi hedefliyoruz.</p>`};

const terms={slug:'terms',type:'WebPage',
 title:'Kullanım Koşulları | '+N,
 desc:'pngtosvgconverter.com kullanım koşulları: kabul edilebilir kullanım, dosyalarınız ve içeriğiniz, garanti reddi, sorumluluk sınırları ve koşulların değişmesi.',
 h1:'Kullanım Koşulları',
 lead:`Son güncelleme: ${UPDATED}`,
 crumb:'Kullanım Koşulları',
 body:`<p>Bu Kullanım Koşulları (“Koşullar”), ${N} ve araçlarının (“Hizmet”) kullanımını düzenler. Hizmeti kullanarak bu Koşulları kabul etmiş olursunuz. Kabul etmiyorsanız lütfen Hizmeti kullanmayın.</p>
<h2>1. Hizmet</h2>
<p>Hizmet, görselleri ve SVG dosyalarını dönüştürmek ve düzenlemek için ücretsiz çevrimiçi araçlar sunar. Araçlar web tarayıcınızda çalışır. Özellikleri istediğimiz zaman ekleyebilir, değiştirebilir veya kaldırabiliriz.</p>
<h2>2. Dosyalarınız ve içeriğiniz</h2>
<p>İşlediğiniz dosyalar üzerindeki tüm haklar size aittir. Araçlarda açtığınız dosyalar cihazınızda yerel olarak işlenir ve sunucularımıza yüklenmez. Seçtiğiniz dosyaları kullanma ve dönüştürme hakkına sahip olduğunuzdan, bunlara uygulanabilecek telif ve marka hakları dahil, siz sorumlusunuz.</p>
<h2>3. Kabul edilebilir kullanım</h2>
<p>Hizmeti başkalarının haklarını ihlal etmek, yasaları çiğnemek, Hizmeti aksatmaya veya aşırı yüklemeye çalışmak, güvenliğini yoklamak veya aşmak ya da diğer kullanıcılara zarar verecek hızda veri çekmek için kullanmamayı kabul edersiniz.</p>
<h2>4. Çıktı ve doğruluk</h2>
<p>Bir raster görseli vektöre dönüştürmek bir yaklaşımdır. Sonuçlar kaynak görselinize ve seçtiğiniz ayarlara bağlıdır ve orijinalden farklı olabilir. Özellikle baskı, üretim veya hukuki kullanım için güvenmeden önce çıktıyı kontrol etmelisiniz.</p>
<h2>5. Fikri mülkiyet</h2>
<p>Tasarımı, kodu, metinleri ve illüstrasyonları dahil Hizmet, ${N}’a veya lisans verenlerine aittir ve yürürlükteki yasalarca korunur. İzin almadan Hizmetin kendisini kopyalayamaz veya yeniden satamazsınız. Bu Koşulların hiçbir hükmü dosyalarınızın mülkiyetini bize ya da Hizmetin mülkiyetini size devretmez.</p>
<h2>6. Garanti reddi</h2>
<p>Hizmet, belirli bir amaca uygunluk, doğruluk, erişilebilirlik veya hak ihlali yapmama dahil açık ya da zımni hiçbir garanti olmaksızın “olduğu gibi” ve “mevcut olduğu şekliyle” sunulur. Hizmetin kesintisiz veya hatasız çalışacağını garanti etmeyiz.</p>
<h2>7. Sorumluluğun sınırlandırılması</h2>
<p>Yasaların izin verdiği azami ölçüde, ${N} ve sürdürücüleri; Hizmetin kullanımından veya kullanılamamasından doğan dolaylı, arızi, özel, sonuçsal veya cezai zararlardan ya da veri, kâr veya iş kaybından sorumlu değildir.</p>
<h2>8. Üçüncü taraf bağlantıları ve hizmetleri</h2>
<p>Hizmet üçüncü taraf sitelere bağlantılar içerebilir. Bunları kontrol etmeyiz; içeriklerinden veya uygulamalarından sorumlu değiliz.</p>
<h2>9. Koşullardaki değişiklikler</h2>
<p>Bu Koşulları zaman zaman güncelleyebiliriz. Yukarıdaki “Son güncelleme” tarihi en yeni sürümü gösterir. Bir değişiklikten sonra Hizmeti kullanmaya devam etmeniz güncellenmiş Koşulları kabul ettiğiniz anlamına gelir.</p>
<h2>10. Uygulanacak hukuk</h2>
<p>Bu Koşullar, kanunlar ihtilafı kuralları dikkate alınmaksızın Hizmet işleticisinin yerleşik olduğu yargı bölgesinin hukukuna tabidir. Ülkenizin hukukunun size tanıdığı emredici tüketici hakları etkilenmez.</p>
<h2>11. İletişim</h2>
<p>Bu Koşullarla ilgili sorularınız mı var? ${mail} adresine yazın veya <a href="../contact-us/">iletişim sayfasını</a> kullanın. <a href="../privacy/">Gizlilik Politikamıza</a> da bakın.</p>`};

const privacy={slug:'privacy',type:'WebPage',
 title:'Gizlilik Politikası | '+N,
 desc:'pngtosvgconverter.com verileri nasıl ele alır: dosyalar tarayıcınızda işlenir ve asla yüklenmez. Nelerin saklandığı, çerezler, üçüncü taraflar ve haklarınız.',
 h1:'Gizlilik Politikası',
 lead:`Son güncelleme: ${UPDATED}`,
 crumb:'Gizlilik Politikası',
 body:`<p>Gizliliğiniz bizim için önemlidir. Bu politika, siteyi ve araçlarını kullandığınızda ${N}’un (“biz”) hangi bilgileri işlediğini açıklar.</p>
<h2>1. Dosyalarınız cihazınızda kalır</h2>
<p>Görsel ve SVG araçları web tarayıcınızda JavaScript ile çalışır. Bıraktığınız, yapıştırdığınız veya açtığınız dosyalar yerel olarak işlenir ve sunucularımıza ya da herhangi bir üçüncü tarafa <strong>yüklenmez</strong>. Onları göremeyiz.</p>
<h2>2. Topladığımız bilgiler</h2>
<ul>
<li><strong>Cihazınızda saklanan tercihler.</strong> Açık ve koyu mod arasında geçiş yaparsanız seçiminiz, site hatırlasın diye tarayıcınızın yerel depolamasına kaydedilir. Cihazınızdan asla çıkmaz.</li>
<li><strong>Bize gönderdiğiniz mesajlar.</strong> İletişim formunu kullanır veya bize e-posta yazarsanız verdiğiniz adı, e-posta adresini ve mesajı alırız; bunları yalnızca yanıtlamak ve Hizmeti geliştirmek için kullanırız.</li>
<li><strong>Teknik kayıtlar.</strong> Çoğu web sitesi gibi barındırma sağlayıcımız, güvenlik ve güvenilirlik için standart sunucu kayıtlarını (örneğin IP adresi, tarayıcı türü, istenen sayfa ve zaman) tutabilir.</li>
</ul>
<h2>3. Çerezler ve analiz</h2>
<p>Reklam veya izleme çerezi kullanmayız. Bu metnin yazıldığı tarihte üçüncü taraf analiz veya reklam betikleri çalıştırmıyoruz. İleride gizlilik dostu analiz ya da çerez eklersek bu sayfayı güncelleyecek ve gerekirse onayınızı isteyeceğiz.</p>
<h2>4. Üçüncü taraflar</h2>
<p>Site, adımıza teknik istek verilerini işleyen bir barındırma ve içerik dağıtım sağlayıcısı tarafından sunulur. İletişim formu harici bir form hizmetiyle yapılandırılmışsa, bu hizmet gönderdiğiniz mesajı bize ulaştırmak için işler. Kişisel bilgilerinizi satmayız.</p>
<h2>5. Bilgileri nasıl kullanırız</h2>
<p>Yukarıda açıklanan sınırlı bilgileri siteyi işletmek ve güvenceye almak, mesajlara yanıt vermek ve araçları geliştirmek için kullanırız. Mesajları yalnızca talebinizi ele almak ve makul kayıt tutmak için gereken süre kadar saklarız.</p>
<h2>6. Haklarınız</h2>
<p>Yaşadığınız yere göre (örneğin KVKK, GDPR veya benzer yasalar kapsamında) kişisel verilerinize erişme, düzeltme, silme veya kullanımını kısıtlama, işlenmesine itiraz etme ve yerel veri koruma otoritenize şikâyette bulunma hakkına sahip olabilirsiniz. Çok az kişisel veri sakladığımız için çoğu talep kolayca karşılanır.</p>
<h2>7. Çocuklar</h2>
<p>Hizmet 13 yaşın altındaki çocuklara yönelik değildir ve onların kişisel bilgilerini bilerek toplamayız.</p>
<h2>8. Güvenlik</h2>
<p>Web sitesi HTTPS üzerinden sunulur. Dosyalarınız asla yüklenmediği için tarafımızda iletim veya depolama risklerine maruz kalmaz.</p>
<h2>9. Bu politikadaki değişiklikler</h2>
<p>Bu politikayı güncelleyebiliriz. “Son güncelleme” tarihi en yeni sürümü gösterir.</p>
<h2>10. Gizlilik talepleri için iletişim</h2>
<p>Gizlilikle ilgili her soru veya talep için konu satırına “Gizlilik talebi” yazarak ${mail} adresine e-posta gönderin ya da <a href="../contact-us/">iletişim sayfasını</a> kullanın. <a href="../terms/">Kullanım Koşullarımıza</a> da bakın.</p>`};

const notFound={
 title:'Sayfa bulunamadı | '+N,
 desc:'Aradığınız sayfa bulunamadı. PNG SVG dönüştürücüye dönün veya diğer ücretsiz dönüştürücülerimizi ve SVG araçlarımızı keşfedin.',
 h1:'Sayfa bulunamadı',
 lead:'Açmaya çalıştığınız sayfa mevcut değil veya taşınmış. İşte gidebileceğiniz yerler.',
 body:`<ul class="nf-links">
<li><a href="/tr/">PNG SVG dönüştürücü (ana sayfa)</a></li>
<li><a href="/tr/jpg-to-svg-converter/">JPG SVG dönüştürücü</a></li>
<li><a href="/tr/svg-to-png-converter/">SVG PNG dönüştürücü</a></li>
<li><a href="/tr/svg-optimizer/">SVG optimize edici</a></li>
<li><a href="/tr/sitemap/">Site haritası: tüm dönüştürücüler ve araçlar</a></li>
<li><a href="/tr/contact-us/">İletişim</a></li>
</ul>`};

const sitemap={title:'Site Haritası | '+N,desc:'pngtosvgconverter.com’daki tüm sayfalar: ücretsiz görselden SVG’ye, SVG’den görsele dönüştürücüler, SVG araçları ve 18 dilde ana sayfa.',h1:'Site Haritası',lead:'pngtosvgconverter.com’daki tüm sayfalar tek yerde.',crumb:'Site Haritası',
 main:'Ana sayfalar',home:'Ana sayfa: PNG SVG dönüştürücü',about:'Hakkımızda',contact:'İletişim',terms:'Kullanım Koşulları',privacy:'Gizlilik Politikası',sitemap:'Site Haritası',
 gRaster:'Görselden SVG’ye dönüştürücüler',gExport:'SVG’den görsele dönüştürücüler',gUtil:'SVG araçları',gLang:'Diğer dillerde ana sayfa'};
return {about,contact,terms,privacy,notFound,sitemap};
};
