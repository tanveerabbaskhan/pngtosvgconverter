// Strony podstawowe po polsku. Tekst prawny powinien zostać sprawdzony przez właściciela serwisu.
module.exports=function(S){
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const UPDATED=new Date(S.UPDATED+'T00:00:00Z').toLocaleDateString('pl-PL',{year:'numeric',month:'long',day:'numeric',timeZone:'UTC'});
const mail=`<a href="mailto:${S.EMAIL}">${S.EMAIL}</a>`;
const N='pngtosvgconverter.com';

const about={slug:'about-us',type:'AboutPage',about:true,
 title:'O nas | '+N,
 desc:'Dowiedz się, kto prowadzi pngtosvgconverter.com, po co powstał, jak działa darmowy konwerter PNG na SVG w przeglądarce i jakie zasady go cechują.',
 h1:'O serwisie '+N,
 lead:'Darmowy i prywatny zestaw narzędzi do zamiany obrazów na czysty, skalowalny SVG, działający w całości w Twojej przeglądarce.',
 crumb:'O nas',
 body:`<h2>Kto prowadzi ten serwis</h2>
<p>${N} to niezależny projekt narzędzi internetowych prowadzony przez zespół ${N}. Tworzymy małe, wyspecjalizowane narzędzia graficzne dla projektantów, programistów, twórców i każdego, kto potrzebuje wektorowej wersji obrazu bez instalowania oprogramowania.</p>
<h2>Po co istnieje</h2>
<p>Zamiana obrazu rastrowego na wektor zwykle oznacza płacenie za program na komputer albo przesyłanie prywatnych prac na serwer nieznajomego. Chcieliśmy czegoś lepszego: darmowego, szybkiego konwertera, który pokazuje wynik podczas ustawiania i nigdy nie otrzymuje Twoich plików.</p>
<h2>Co możesz tu zrobić</h2>
<ul>
<li><strong>Obraz na SVG:</strong> konwertuj PNG, JPG, WebP, GIF, BMP, AVIF i inne na skalowalne wektory, z ustawieniami dla logo, ikon, rysunków liniowych, podpisów, skanów, clipartów i pixel artu.</li>
<li><strong>SVG na obraz:</strong> eksportuj SVG jako PNG, JPG, WebP, PDF lub ICO z wieloma rozmiarami.</li>
<li><strong>Narzędzia SVG:</strong> kompresuj, optymalizuj, zmieniaj rozmiar, przycinaj, przekolorowuj, waliduj, formatuj, minimalizuj i sprawdzaj kod SVG.</li>
</ul>
<p>Każde narzędzie ma własną stronę, wymienioną w <a href="../sitemap/">mapie serwisu</a> i na <a href="../#all">stronie głównej</a>.</p>
<h2>Jak działa technologia</h2>
<p>Konwerter PNG na SVG korzysta z dobrze opisanych technik, a nie z czarnej skrzynki. Kolory są redukowane paletą metodą mediany, doprecyzowaną algorytmem k-średnich. Każdy kolor staje się warstwą w stosie, której kontur znajdowany jest metodą „marching squares” z dokładnością do ułamka piksela i dopasowywany krzywymi Béziera trzeciego stopnia. Wszystko dzieje się w Twojej przeglądarce.</p>
<h2>Nasze zasady</h2>
<ul>
<li><strong>Prywatność przede wszystkim.</strong> Konwersja odbywa się na Twoim urządzeniu. Twoje obrazy i pliki SVG nigdy nie są przesyłane. Zobacz naszą <a href="../privacy/">Politykę prywatności</a>.</li>
<li><strong>Uczciwe wyniki.</strong> Wektory najlepiej sprawdzają się przy logo, ikonach, ilustracjach i rysunkach liniowych. Mówimy wprost, że fotografie stają się stylizowaną, posteryzowaną grafiką, i pokazujemy rozmiar pliku, abyś sam ocenił wynik.</li>
<li><strong>Za darmo i prosto.</strong> Bez konta, bez znaku wodnego, bez dziennych limitów.</li>
<li><strong>Dostępnie i szybko.</strong> Strony są lekkie, działają na telefonach i z klawiatury oraz używają otwartych, standardowych formatów plików.</li>
</ul>
<h2>Jakość i aktualizacje</h2>
<p>Testujemy konwerter na bibliotece wbudowanych próbek (logo, ikony, ilustracje, zeskanowane strony, podpisy, pixel art) i stale ulepszamy silnik śledzenia oraz wskazówki na każdej stronie. Jeśli coś wygląda źle z Twoim plikiem, daj nam znać.</p>
<h2>Kontakt</h2>
<p>Pytania, zgłoszenia błędów lub pomysły na nowe narzędzie? Skorzystaj ze <a href="../contact-us/">strony kontaktowej</a> lub napisz na ${mail}.</p>`};

const contact={slug:'contact-us',type:'ContactPage',
 title:'Kontakt | '+N,
 desc:'Skontaktuj się z pngtosvgconverter.com w sprawie pytań, błędów, pomysłów lub próśb dotyczących prywatności. Wyślij wiadomość formularzem lub napisz do nas.',
 h1:'Kontakt',
 lead:'Pytania, błędy lub pomysły na nowe narzędzie? Napisz do nas, odpowiemy.',
 crumb:'Kontakt',
 body:`<p>Najszybciej pomożesz nam naprawić problem, podając użytą stronę, przeglądarkę i urządzenie oraz to, czego się spodziewałeś. Jeśli problem wywołuje konkretny obraz, opisz go lub podaj typ i rozmiar. Prosimy nie wysyłać poufnych plików.</p>
<form class="cform" data-contact data-endpoint="${esc(S.CONTACT_ENDPOINT)}" data-email="${S.EMAIL}" data-sending="Wysyłanie wiadomości…" data-success="Dziękujemy. Twoja wiadomość została wysłana." data-success-mailto="Twoja aplikacja pocztowa powinna otworzyć się z gotową wiadomością. Jeśli nic się nie otworzy, napisz bezpośrednio na ${S.EMAIL}." data-error="Niestety nie udało się wysłać wiadomości. Napisz do nas bezpośrednio na ${S.EMAIL}." data-invalid="Podaj imię, poprawny adres e-mail i wiadomość." novalidate>
<div class="field"><label for="cf-name">Imię</label><input id="cf-name" name="name" type="text" autocomplete="name" required maxlength="120"></div>
<div class="field"><label for="cf-email">E-mail</label><input id="cf-email" name="email" type="email" autocomplete="email" required maxlength="160"></div>
<div class="field"><label for="cf-msg">Wiadomość</label><textarea id="cf-msg" name="message" rows="7" required maxlength="4000"></textarea></div>
<div class="hp" aria-hidden="true"><label>Zostaw to pole puste<input name="website" type="text" tabindex="-1" autocomplete="off"></label></div>
<button class="btn primary lg" type="submit" data-submit>Wyślij wiadomość</button>
<p class="form-status" role="status" aria-live="polite" data-status></p>
</form>
<h2>Wolisz e-mail?</h2>
<p>Napisz bezpośrednio na ${mail}. W sprawach prywatności wpisz w temacie „Prośba dotycząca prywatności”.</p>
<p>Zwykle odpowiadamy w ciągu kilku dni roboczych.</p>`};

const terms={slug:'terms',type:'WebPage',
 title:'Regulamin | '+N,
 desc:'Regulamin pngtosvgconverter.com: dozwolone korzystanie, Twoje pliki i treści, wyłączenia gwarancji, ograniczenia odpowiedzialności i zmiany regulaminu.',
 h1:'Regulamin',
 lead:`Ostatnia aktualizacja: ${UPDATED}`,
 crumb:'Regulamin',
 body:`<p>Niniejszy Regulamin („Regulamin”) określa zasady korzystania z ${N} i jego narzędzi („Usługa”). Korzystając z Usługi, akceptujesz Regulamin. Jeśli się nie zgadzasz, nie korzystaj z Usługi.</p>
<h2>1. Usługa</h2>
<p>Usługa udostępnia darmowe narzędzia online do konwertowania i edycji obrazów oraz plików SVG. Narzędzia działają w Twojej przeglądarce. Możemy w każdej chwili dodawać, zmieniać lub usuwać funkcje.</p>
<h2>2. Twoje pliki i treści</h2>
<p>Zachowujesz wszystkie prawa do przetwarzanych plików. Pliki otwierane w narzędziach są przetwarzane lokalnie na Twoim urządzeniu i nie są przesyłane na nasze serwery. Odpowiadasz za to, by mieć prawo do używania i konwertowania wybranych plików, w tym praw autorskich i znaków towarowych.</p>
<h2>3. Dozwolone korzystanie</h2>
<p>Zobowiązujesz się nie wykorzystywać Usługi do naruszania praw innych osób, łamania prawa, próby zakłócenia lub przeciążenia Usługi, testowania lub obchodzenia jej zabezpieczeń ani pobierania danych w tempie szkodliwym dla innych użytkowników.</p>
<h2>4. Wyniki i dokładność</h2>
<p>Konwersja obrazu rastrowego na wektor jest przybliżeniem. Wyniki zależą od obrazu źródłowego i wybranych ustawień i mogą różnić się od oryginału. Sprawdź wynik, zanim na nim zaufasz, zwłaszcza w druku, produkcji lub zastosowaniach prawnych.</p>
<h2>5. Własność intelektualna</h2>
<p>Usługa, w tym jej wygląd, kod, teksty i ilustracje, należy do ${N} lub jego licencjodawców i jest chroniona obowiązującym prawem. Nie możesz kopiować ani odsprzedawać samej Usługi bez zgody. Żadne postanowienie Regulaminu nie przenosi na nas własności Twoich plików ani na Ciebie własności Usługi.</p>
<h2>6. Wyłączenie gwarancji</h2>
<p>Usługa jest świadczona „w stanie, w jakim jest” i „w miarę dostępności”, bez jakichkolwiek gwarancji, wyraźnych lub dorozumianych, w tym przydatności do określonego celu, dokładności, dostępności lub nienaruszania praw. Nie gwarantujemy, że Usługa będzie działać bez przerw i błędów.</p>
<h2>7. Ograniczenie odpowiedzialności</h2>
<p>W maksymalnym zakresie dozwolonym przez prawo ${N} i jego opiekunowie nie odpowiadają za szkody pośrednie, przypadkowe, szczególne, następcze ani karne, ani za utratę danych, zysków lub działalności wynikającą z korzystania lub niemożności korzystania z Usługi.</p>
<h2>8. Linki i usługi osób trzecich</h2>
<p>Usługa może zawierać linki do stron osób trzecich. Nie kontrolujemy ich i nie odpowiadamy za ich treść ani praktyki.</p>
<h2>9. Zmiany Regulaminu</h2>
<p>Możemy od czasu do czasu aktualizować Regulamin. Data „Ostatnia aktualizacja” wskazuje najnowszą wersję. Dalsze korzystanie z Usługi po zmianie oznacza akceptację zaktualizowanego Regulaminu.</p>
<h2>10. Prawo właściwe</h2>
<p>Regulamin podlega prawu jurysdykcji, w której siedzibę ma operator Usługi, bez względu na normy kolizyjne. Obowiązkowe prawa konsumenta wynikające z prawa Twojego kraju pozostają nienaruszone.</p>
<h2>11. Kontakt</h2>
<p>Pytania dotyczące Regulaminu? Napisz na ${mail} lub skorzystaj ze <a href="../contact-us/">strony kontaktowej</a>. Zobacz także naszą <a href="../privacy/">Politykę prywatności</a>.</p>`};

const privacy={slug:'privacy',type:'WebPage',
 title:'Polityka prywatności | '+N,
 desc:'Jak pngtosvgconverter.com przetwarza dane: pliki są przetwarzane w przeglądarce i nigdy nie są przesyłane. Co jest przechowywane, pliki cookie, osoby trzecie i Twoje prawa.',
 h1:'Polityka prywatności',
 lead:`Ostatnia aktualizacja: ${UPDATED}`,
 crumb:'Polityka prywatności',
 body:`<p>Twoja prywatność jest dla nas ważna. Ta polityka wyjaśnia, jakie informacje przetwarza ${N} („my”), gdy korzystasz z serwisu i jego narzędzi.</p>
<h2>1. Twoje pliki zostają na Twoim urządzeniu</h2>
<p>Narzędzia do obrazów i SVG działają w Twojej przeglądarce przy użyciu JavaScriptu. Pliki, które upuszczasz, wklejasz lub otwierasz, są przetwarzane lokalnie i <strong>nie są przesyłane</strong> na nasze serwery ani do osób trzecich. Nie możemy ich zobaczyć.</p>
<h2>2. Jakie informacje zbieramy</h2>
<ul>
<li><strong>Ustawienia zapisane na Twoim urządzeniu.</strong> Jeśli przełączasz tryb jasny i ciemny, Twój wybór jest zapisywany w pamięci lokalnej przeglądarki, aby serwis go zapamiętał. Nigdy nie opuszcza Twojego urządzenia.</li>
<li><strong>Wiadomości, które nam wysyłasz.</strong> Jeśli korzystasz z formularza kontaktowego lub piszesz do nas, otrzymujemy podane imię, adres e-mail i wiadomość i używamy ich wyłącznie do odpowiedzi oraz ulepszania Usługi.</li>
<li><strong>Dzienniki techniczne.</strong> Jak większość serwisów, nasz dostawca hostingu może przechowywać standardowe dzienniki serwera (np. adres IP, typ przeglądarki, żądaną stronę i czas) ze względów bezpieczeństwa i niezawodności.</li>
</ul>
<h2>3. Pliki cookie i analityka</h2>
<p>Nie ustawiamy reklamowych ani śledzących plików cookie. Obecnie nie używamy zewnętrznej analityki ani skryptów reklamowych. Jeśli w przyszłości dodamy analitykę przyjazną prywatności lub jakiekolwiek cookie, zaktualizujemy tę stronę i w razie potrzeby poprosimy o zgodę.</p>
<h2>4. Osoby trzecie</h2>
<p>Serwis jest dostarczany przez dostawcę hostingu i sieci dostarczania treści, który przetwarza techniczne dane żądań w naszym imieniu. Jeśli formularz kontaktowy korzysta z zewnętrznej usługi obsługi formularzy, usługa ta przetwarza wysłaną wiadomość, aby nam ją dostarczyć. Nie sprzedajemy Twoich danych osobowych.</p>
<h2>5. Jak wykorzystujemy informacje</h2>
<p>Wykorzystujemy opisane powyżej ograniczone informacje do prowadzenia i zabezpieczania serwisu, odpowiadania na wiadomości i ulepszania narzędzi. Wiadomości przechowujemy tylko tak długo, jak to potrzebne do obsługi Twojej prośby i rozsądnego prowadzenia dokumentacji.</p>
<h2>6. Twoje prawa</h2>
<p>W zależności od miejsca zamieszkania (np. na podstawie RODO lub podobnych przepisów) możesz mieć prawo dostępu do swoich danych osobowych, ich sprostowania, usunięcia lub ograniczenia przetwarzania, sprzeciwu wobec przetwarzania oraz wniesienia skargi do organu ochrony danych. Ponieważ przechowujemy bardzo mało danych osobowych, większość próśb jest łatwa do spełnienia.</p>
<h2>7. Dzieci</h2>
<p>Usługa nie jest skierowana do dzieci poniżej 13. roku życia i świadomie nie zbieramy ich danych osobowych.</p>
<h2>8. Bezpieczeństwo</h2>
<p>Serwis jest udostępniany przez HTTPS. Ponieważ Twoje pliki nigdy nie są przesyłane, nie są narażone na ryzyka transmisji ani przechowywania po naszej stronie.</p>
<h2>9. Zmiany tej polityki</h2>
<p>Możemy aktualizować tę politykę. Data „Ostatnia aktualizacja” wskazuje najnowszą wersję.</p>
<h2>10. Kontakt w sprawach prywatności</h2>
<p>W razie pytań lub próśb dotyczących prywatności napisz na ${mail}, wpisując w temacie „Prośba dotycząca prywatności”, lub skorzystaj ze <a href="../contact-us/">strony kontaktowej</a>. Zobacz także nasz <a href="../terms/">Regulamin</a>.</p>`};

const notFound={
 title:'Nie znaleziono strony | '+N,
 desc:'Nie znaleziono strony, której szukasz. Wróć do konwertera PNG na SVG lub poznaj nasze inne darmowe konwertery i narzędzia SVG.',
 h1:'Nie znaleziono strony',
 lead:'Strona, którą próbowałeś otworzyć, nie istnieje lub została przeniesiona. Oto, dokąd możesz przejść.',
 body:`<ul class="nf-links">
<li><a href="/pl/">Konwerter PNG na SVG (strona główna)</a></li>
<li><a href="/pl/jpg-to-svg-converter/">Konwerter JPG na SVG</a></li>
<li><a href="/pl/svg-to-png-converter/">Konwerter SVG na PNG</a></li>
<li><a href="/pl/svg-optimizer/">Optymalizator SVG</a></li>
<li><a href="/pl/sitemap/">Mapa serwisu: wszystkie konwertery i narzędzia</a></li>
<li><a href="/pl/contact-us/">Kontakt</a></li>
</ul>`};

const sitemap={title:'Mapa serwisu | '+N,desc:'Wszystkie strony pngtosvgconverter.com: darmowe konwertery obrazów na SVG, SVG na obrazy, narzędzia SVG i strona główna w 18 językach.',h1:'Mapa serwisu',lead:'Wszystkie strony pngtosvgconverter.com w jednym miejscu.',crumb:'Mapa serwisu',
 main:'Strony główne',home:'Strona główna: konwerter PNG na SVG',about:'O nas',contact:'Kontakt',terms:'Regulamin',privacy:'Polityka prywatności',sitemap:'Mapa serwisu',
 gRaster:'Konwertery obrazów na SVG',gExport:'Konwertery SVG na obrazy',gUtil:'Narzędzia SVG',gLang:'Strona główna w innych językach'};
return {about,contact,terms,privacy,notFound,sitemap};
};
