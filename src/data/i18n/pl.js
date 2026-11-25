module.exports={
 meta:{title:'Darmowy konwerter PNG na SVG online – bez rejestracji, natychmiast',desc:'Konwertuj PNG na SVG za darmo online. Wektoryzuj dowolny obraz w czyste, skalowalne wektory. 42 darmowe narzędzia SVG, podgląd na żywo, bez przesyłania plików i rejestracji.',alt:'Darmowy konwerter PNG na SVG online z podglądem na żywo'},
 h1:{kw:'Konwerter PNG na SVG',tail:'zamień dowolny PNG na skalowalny SVG'},
 lead:'Konwertuj PNG na SVG online w kilka sekund. Ten darmowy konwerter zamienia obraz na czyste ścieżki wektorowe w przeglądarce — bez przesyłania plików, rejestracji i znaków wodnych.',
 skip:'Przejdź do głównej treści',
 nav:{converter:'Konwerter',all:'Wszystkie konwertery',faq:'FAQ',about:'O nas',contact:'Kontakt',menu:'Menu',theme:'Zmień motyw',upload:'Prześlij obraz',main:'Nawigacja główna',toc:'Na tej stronie'},
 toc:{how:'Jak to działa',proc:'Proces konwersji',chart:'Tabela i funkcje',faq:'FAQ',all:'Wszystkie konwertery'},
 ui:{
  toolH2:'Narzędzie do konwersji PNG na SVG',step1:'Dodaj obraz',dropAria:'Prześlij obraz',drop:'Upuść tutaj plik PNG lub kliknij, aby wybrać',paste:'Możesz też wkleić przez Ctrl+V. Nic nie jest przesyłane.',
  sample:'Nie masz obrazu? Wypróbuj przykład:',sLogo:'Logo',sScene:'Krajobraz',sIcon:'Ikona',choose:'Wybierz obraz',
  step2:'Dostosuj wynik',reset:'Resetuj',startFrom:'Zacznij od',pLogo:'Logo',pIllus:'Ilustracja',pPhoto:'Zdjęcie',pLine:'Rysunek liniowy',
  style:'Styl',mColor:'Kolor',mGray:'Szarość',mMono:'Mono',rmbg:'Usuń tło',rmbgSub:'Usuwa białe lub przezroczyste krawędzie',
  colors:'Kolory',thresh:'Próg',ink:'Kolor tuszu',smooth:'Wygładzanie',more:'Więcej opcji',detail:'Szczegółowość',specks:'Usuń plamki',denoise:'Redukcja szumu',
  step3:'Podgląd i pobieranie',live:'Podgląd na żywo',loading:'Ładowanie…',copy:'Kopiuj kod SVG',download:'Pobierz SVG',
  chipL:'Oryginał · PNG',chipR:'Wektor · SVG',handle:'Porównaj oryginał z SVG',hint:'Przeciągnij uchwyt, aby porównać · przewiń, aby powiększyć',zoomOut:'Pomniejsz',zoomIn:'Powiększ',fit:'Dopasuj',
  veil:'Upuść obraz, aby go skonwertować',veilSub:'PNG, JPG, WebP, GIF',fileSize:'Rozmiar SVG',tColors:'Kolory',time:'Czas',
  moreD:'Więcej szczegółów',moreDSub:'Warstwy kolorów, historia rozmiaru, kod SVG',shapes:'Kształty',shapesSub:'zamknięte kontury',nodes:'Węzły',nodesSub:'punkty ścieżki',
  p1:'Dekodowanie',p2:'Kwantyzacja',p3:'Trasowanie',p4:'Upraszczanie',p5:'Renderowanie',
  layers:'Warstwy kolorów',layersSub:'Najedź, aby wyizolować · kliknij, aby ukryć',trace:'Rozmiar na żywo',traceSub:'Rozmiar SVG przy każdej zmianie',legSvg:'Rozmiar SVG',legPng:'Oryginalny PNG',src:'Kod źródłowy SVG'
 },
 js:{
  needImage:'Wybierz plik obrazu',readFail:'Nie udało się odczytać tego obrazu',tracedAt:'trasowanie w {w}×{h}',
  smaller:'<span class="delta good">o {pct}% mniejszy</span> niż PNG ({size})',larger:'<span class="delta warn">o {pct}% większy</span> niż PNG ({size})',
  noShapes:'Brak widocznych kształtów — spróbuj zmniejszyć „Usuń plamki”.',pts:'pkt',moreChars:'… jeszcze {n} znaków',lines:'wierszy: {n}',previewOnly:'tylko podgląd — Kopiuj lub Pobierz daje cały plik',
  runs:'przebiegów: {n} · teraz {size}',run1:'1 przebieg · teraz {size}',fullCopied:'Skopiowano cały SVG',downloaded:'Pobrano SVG · {size}',copied:'Skopiowano kod SVG',
  dirStatus:'Wyświetlono {a} z {b} narzędzi'
 },
 how:{
  eyebrow:'Pod maską',title:'Jak działa konwerter PNG na SVG',
  def:'<strong>Konwerter PNG na SVG</strong> zamienia siatkę kolorowych pikseli na zestaw wypełnionych kształtów wektorowych. Ten robi to w pięciu automatycznych etapach, w całości w przeglądarce, i przerysowuje wynik przy każdym ruchu suwaka.',
  stages:[
   ['Dekodowanie','Przeglądarka odczytuje PNG przez interfejs Canvas API i zamienia go na siatkę pikseli RGBA. Duże pliki są przeskalowywane do rozmiaru roboczego ustawianego suwakiem Szczegółowość, a opcjonalna redukcja szumu usuwa ziarno.','Canvas · getImageData'],
   ['Kwantyzacja','Paleta 2–64 kolorów uzyskana metodą median cut jest doprecyzowywana algorytmem k-means. Niemal identyczne kolory są łączone, wygładzone piksele krawędzi przypisywane do najbliższego rzeczywistego koloru, a drobne plamki wchłaniane przez sąsiadów.','Median cut · k-means'],
   ['Trasowanie','Każdy kolor staje się ułożoną warstwą. Maska warstwy jest zmiękczana, a jej kontur wyodrębniany metodą marching squares, co daje kontury subpikselowe podążające za prawdziwą krawędzią, a nie schodkami pikseli.','Marching squares'],
   ['Dopasowanie krzywych','Wykrywane są narożniki, a następnie każdy gładki odcinek jest dopasowywany sześciennymi krzywymi Béziera. Proste krawędzie pozostają liniami prostymi, więc potrzeba znacznie mniej węzłów niż przy surowym trasowaniu pikseli.','Dopasowanie Béziera wg Schneidera'],
   ['Renderowanie','Ścieżki są zapisywane jako jedna wypełniona ścieżka SVG na kolor, z zachowaniem oryginalnego viewBox. Podgląd, rozmiar pliku, paleta i kod źródłowy aktualizują się na żywo przy każdym ruchu suwaka.','SVG · fill-rule evenodd']],
  cap:'Pięć etapów konwersji PNG na SVG: dekodowanie, kwantyzacja, trasowanie, dopasowanie krzywych i renderowanie.',
  privTitle:'Dokąd trafia Twój plik',privCap:'PNG jest przetwarzany na Twoim urządzeniu. Nic nie jest przesyłane, więc plik nigdy nie trafia na serwer.',privAlt:'Twój PNG zostaje na Twoim urządzeniu',privAltDesc:'PNG przechodzi przez konwerter w przeglądarce i staje się SVG. Żadna strzałka nie wychodzi z urządzenia w stronę serwera.',
  privBrowser:'TWOJA PRZEGLĄDARKA',privEngine:'Silnik trasowania',privServer:'Serwer',privNot:'nie uczestniczy',
  whyTitle:'Dlaczego wynik jest mały i czysty',
  why:[['Ułożone warstwy','Każdy kolor leży na poprzednim, więc nie ma cienkich szczelin, a do opisania jest znacznie mniej otworów.'],['Kontury subpikselowe','Krawędzie są umieszczane między pikselami, a nie na nich, więc przekątne i krzywe pozostają gładkie.'],['Dopasowanie krzywych','Jeden segment Béziera może zastąpić dziesiątki schodków pikseli, więc typowe logo potrzebuje zaledwie kilkuset węzłów.'],['Czyszczenie przed trasowaniem','Obwódki antyaliasingu i plamki są łączone najpierw, dzięki czemu nigdy nie stają się dodatkowymi kształtami.']]
 },
 proc:{
  eyebrow:'Krok po kroku',title:'Proces konwersji PNG na SVG',
  def:'Konwersja PNG na SVG zajmuje pięć kroków i zwykle mniej niż minutę. Możesz zatrzymać się po dowolnym kroku: SVG jest gotowy do pobrania, gdy tylko podgląd Ci odpowiada.',
  steps:[
   ['Dodaj PNG','Upuść PNG w polu przesyłania, kliknij „Wybierz obraz” lub wklej go ze schowka przez Ctrl+V. Jeszcze nie masz pliku? Naciśnij przycisk przykładu, aby najpierw zobaczyć konwerter w działaniu.','Obsługuje też JPG, WebP, GIF i BMP.'],
   ['Wybierz ustawienie wstępne','Wybierz Logo, Ilustrację, Zdjęcie lub Rysunek liniowy. Każde ustawienie wstępne ustala rozsądne wartości kolorów, szczegółowości, wygładzania i usuwania plamek, więc pierwszy podgląd często jest już bliski celu.','Logo: 4–8 kolorów. Zdjęcia: 32–48 kolorów.'],
   ['Dopracuj trasowanie','Dostosuj liczbę kolorów (2–64), Szczegółowość, Wygładzanie, Usuń plamki i Redukcję szumu. Przełączaj tryby Kolor, Szarość i Mono oraz włącz Usuń tło dla białych lub przezroczystych krawędzi.','Każdy suwak natychmiast aktualizuje podgląd.'],
   ['Porównaj i sprawdź','Przeciągnij uchwyt, aby porównać oryginalny PNG z SVG. Przewiń, aby powiększyć, przeciągnij, aby przesunąć, a najedź na warstwę koloru, aby ją wyizolować, lub kliknij, aby ukryć ją przed eksportem.','Powiększ do 3200%, aby zobaczyć, że SVG pozostaje ostry.'],
   ['Pobierz lub skopiuj SVG','Naciśnij „Pobierz SVG”, aby zapisać plik, lub „Kopiuj kod”, aby wkleić kod do projektu, Figmy, Illustratora, Inkscape’a albo strony internetowej.','Plik nigdy nie opuszcza Twojego urządzenia.']],
  cta:'Skonwertuj PNG teraz',tipLabel:'Wskazówka:',
  mock:{dropLabel:'Upuść PNG',presets:['Logo','Ilustracja','Zdjęcie','Rysunek liniowy'],sliders:['Kolory','Szczegółowość','Wygładzanie'],dlBtn:'Pobierz SVG'}
 },
 chart:{
  eyebrow:'Opracowanie',title:'Tabela konwersji PNG na SVG / funkcje',
  def:'Skorzystaj z tej tabeli, aby dobrać ustawienia dla swojego typu PNG, sprawdzić, jak dobrze konwertuje się każdy typ, i porównać PNG z SVG. Wartości odpowiadają ustawieniom wstępnym wbudowanym w konwerter.',
  barsTitle:'Jak dobrze konwertuje się każdy typ PNG',barsCap:'Przydatność do wektoryzacji od 1 (słaba) do 5 (doskonała). Płaska, kontrastowa grafika konwertuje się najlepiej; zdjęcia najsłabiej.',
  barsAlt:'Jak dobrze każdy typ PNG konwertuje się na SVG',
  bars:['Logo','Ikona','Pixel art','Płaska ilustracja','Rysunek liniowy','Podpis','Zeskanowany dokument','Zdjęcie'],
  quickTitle:'Krótkie odpowiedzi',
  quick:[['Najlepsze wyniki:','logo, ikony, pixel art i płaskie ilustracje.'],['Dobre wyniki:','rysunki liniowe, szkice i podpisy w trybie Mono.'],['Wymaga uwagi:','zeskanowane strony, które potrzebują redukcji szumu i wyższego filtra plamek.'],['Tylko stylizacja:','zdjęcia i gładkie gradienty zamieniają się w postaryzowaną grafikę.']],
  note:'Wskazówka: zacznij od najbliższego ustawienia wstępnego, a potem zmieniaj tylko jeden suwak naraz.',
  t1:{cap:'Zalecane ustawienia konwertera według typu PNG',cols:['Typ PNG','Ustawienie lub tryb','Kolory','Szczegółowość','Wygładzanie','Usuń plamki','Przydatność wektorowa'],
   rows:[['Logo','Ustawienie Logo'],['Ikona','Ustawienie Logo'],['Płaska ilustracja lub kreskówka','Ustawienie Ilustracja'],['Rysunek liniowy lub szkic','Ustawienie Rysunek liniowy · Mono'],['Podpis','Mono · próg 160'],['Pixel art','Tryb Piksele'],['Zeskanowany dokument','Mono · redukcja szumu 1,5'],['Zdjęcie','Ustawienie Zdjęcie']],
   words:{ink:'tusz',auto:'automatyczny rozmiar piksela',na:'nie dotyczy',up:'do'}},
  t2:{cap:'PNG i SVG w skrócie',cols:['Cecha','PNG (rastrowy)','SVG (wektorowy)'],
   rows:[['Skalowanie','Piksele rozmywają się lub rozpadają przy powiększaniu','Skaluje się do dowolnego rozmiaru bez utraty ostrości'],['Rozmiar pliku','Rośnie wraz z liczbą pikseli','Rośnie ze złożonością kształtów — niewielki dla płaskiej grafiki'],['Edycja','Edycja pikseli w edytorze rastrowym','Edycja kształtów, krzywych i kolorów w dowolnym edytorze wektorowym'],['Najlepszy do','Zdjęć i szczegółowych tekstur','Logo, ikon, ilustracji, diagramów i rysunków liniowych'],['Przezroczystość','Kanał alfa','Natywna — puste miejsce jest po prostu przezroczyste'],['Stylizacja CSS','Niemożliwa','Możliwa, gdy SVG jest osadzony w stronie'],['Druk i szyldy','Wymaga oryginału w wysokiej rozdzielczości','Niezależny od rozdzielczości przy każdym rozmiarze druku']]},
  featTitle:'Funkcje konwertera',
  feats:[['Podgląd na żywo','Każdy suwak ponownie trasuje obraz i jednocześnie aktualizuje widok dzielony, wykres rozmiaru, paletę i liczbę węzłów.'],['Trasowanie subpikselowe','Kontury podążają za prawdziwą krawędzią między kolorami, a nie za granicami pikseli, więc krzywe są gładkie.'],['Dopasowanie krzywych Béziera','Gładkie odcinki stają się sześciennymi krzywymi Béziera, a proste krawędzie pozostają liniami, co ogranicza liczbę węzłów.'],['Ułożone warstwy kolorów','Warstwy leżą jedna na drugiej, więc nie ma cienkich szczelin ani szwów między kolorami.'],['2–64 kolory','Wybierz, ile kolorów zachować, lub przełącz na Szarość albo Mono. Przed eksportem możesz wyizolować lub ukryć dowolną warstwę.'],['Tryb Piksele','Trasuje pixel art jako ostre prostokąty w wykrytym rozmiarze piksela, bez wygładzania.'],['Przezroczyste tła','Przezroczyste piksele nigdy nie stają się kształtami. Usuń tło jednym kliknięciem czyści jednolite białe tło.'],['Powiększanie i porównywanie','Przeciągnij uchwyt, aby porównać, a następnie powiększ do 3200%, by zobaczyć, jak PNG się pikseluje, podczas gdy SVG pozostaje ostry.'],['Prywatność z założenia','Konwersja działa w przeglądarce. Twój PNG nigdy nie jest przesyłany, przechowywany ani udostępniany.'],['Za darmo i bez limitów','Bez konta, bez znaku wodnego i bez dziennego limitu. Konwertuj dowolną liczbę obrazów.']]
 },
 faq:{
  eyebrow:'Odpowiedzi',title:'FAQ',def:'Najczęściej zadawane pytania o konwerter PNG na SVG: jak działa, czego się spodziewać i jak uzyskać najlepszy wynik. Odpowiedzi: {n}, w czterech tematach.',
  groups:[
   ['Podstawy',[
    ['Czym jest konwerter PNG na SVG?','Konwerter PNG na SVG zamienia obraz PNG złożony z pikseli na wektorowy SVG zbudowany z matematycznych kształtów i krzywych. Ponieważ SVG opisuje kształty, a nie piksele, można go skalować do dowolnego rozmiaru bez rozmycia, a w przypadku płaskiej grafiki, takiej jak logo i ikony, jest często znacznie mniejszy niż PNG.'],
    ['Czy ten konwerter PNG na SVG jest darmowy?','Tak. Jest całkowicie darmowy — bez konta, znaku wodnego i dziennego limitu. Jedynym praktycznym ograniczeniem jest Twoje urządzenie: obrazy są przetwarzane do 3000 px na dłuższym boku, a bardzo duże lub bardzo szczegółowe pliki po prostu trwają trochę dłużej.'],
    ['Czy moje pliki PNG są przesyłane na serwer?','Nie. Konwersja odbywa się w całości w przeglądarce za pomocą JavaScriptu i Canvas API. Twój PNG nigdy nie jest przesyłany, przechowywany ani udostępniany, więc poufne prace zostają na Twoim urządzeniu.'],
    ['Czym różni się PNG od SVG?','PNG to format rastrowy przechowujący siatkę kolorowych pikseli, więc traci ostrość po powiększeniu. SVG to format wektorowy przechowujący kształty, krzywe i wypełnienia, więc pozostaje ostry w każdym rozmiarze i można go edytować w narzędziach wektorowych. PNG nadaje się do zdjęć, SVG do logo, ikon, diagramów i rysunków liniowych.']]],
   ['Jakość i ustawienia',[
    ['Czy SVG będzie wyglądał dokładnie jak mój PNG?','Nie piksel w piksel. Konwersja trasuje znalezione kształty i przybliża je krzywymi, więc wynik to czysta, skalowalna wersja grafiki. Płaskie, kontrastowe obrazy odwzorowują się bardzo dokładnie, a zdjęcia stają się stylizowaną, postaryzowaną wersją.'],
    ['Które obrazy PNG konwertują się najlepiej?','Najlepiej konwertują się logo, ikony, płaskie ilustracje, kreskówki, rysunki liniowe, podpisy i pixel art, ponieważ składają się z wyraźnych kształtów i ograniczonego zestawu kolorów. Najsłabiej — zdjęcia i miękkie gradienty (wypróbuj [[photo-to-vector-converter]], by uzyskać stylizowane efekty). Ustawienia dla poszczególnych typów obrazów znajdziesz w tabeli powyżej.'],
    ['Ile kolorów wybrać?','Dopasuj do liczby płaskich kolorów w Twojej grafice. Większość logo potrzebuje 4–8, ikony 3–6, a ilustracje 12–20. Zdjęcia mogą wymagać 32–48 lub więcej. Dodatkowe kolory zwiększają liczbę warstw i rozmiar, nie poprawiając płaskiego projektu, a lista warstw kolorów pokazuje dokładnie, co wnosi każda z nich.'],
    ['Jak uzyskać gładsze linie lub ostrzejsze narożniki?','Użyj suwaka Wygładzanie. Niskie wartości zachowują ostre narożniki i krawędzie bliskie oryginałowi; wysokie zaokrąglają schodki pikseli i drżenie. Zwiększ Szczegółowość dla drobnych elementów i zmniejsz Usuń plamki, jeśli cienkie linie znikają.'],
    ['Dlaczego moje zdjęcie wygląda na postaryzowane lub pasmowe?','Wektory przechowują obszary jednolitego koloru, więc gładki gradient trzeba przybliżyć pasmami. Zwiększ liczbę kolorów i Szczegółowość, dodaj trochę redukcji szumu albo zaakceptuj wyrazisty, graficzny wygląd. Aby zachować prawdziwe szczegóły fotograficzne, zostaw PNG lub użyj formatu zdjęciowego.']]],
   ['Przezroczystość, tekst i edycja',[
    ['Jak zachować przezroczyste tło?','Przezroczyste piksele Twojego PNG są automatycznie respektowane i nigdy nie stają się kształtami, więc SVG nie ma prostokąta tła. Jeśli PNG ma jednolite białe tło, włącz Usuń tło. Tryb Mono odrzuca też odcień papieru i zachowuje tylko tusz, do czego dostrojona jest strona [[transparent-image-to-svg-converter]].'],
    ['Czy rozpoznaje tekst w moim PNG?','Nie. Konwerter nie wykonuje OCR. Litery są trasowane jako kontury wektorowe, więc skalują się idealnie, ale nie da się ich edytować jako tekstu. Jeśli potrzebujesz żywego tekstu, wpisz go ponownie w programie graficznym lub użyj osobnego OCR.'],
    ['Dlaczego mój SVG jest większy niż PNG?','Zdjęcia i gradienty wymagają wielu kształtów, co może przewyższyć rozmiar dobrze skompresowanego PNG. Zmniejsz liczbę kolorów, obniż Szczegółowość, zwiększ Usuń plamki lub Wygładzanie. Karta rozmiaru pliku i wykres rozmiaru na żywo pokazują efekt każdej zmiany.'],
    ['Czy mogę edytować SVG w Figmie, Illustratorze, Inkscape lub Canvie?','Tak. Wynikiem jest standardowy SVG z jedną wypełnioną ścieżką na kolor, więc każdy edytor wektorowy może go otworzyć, zmienić kolory i przekształcić. Warstwy są ułożone po kolei, a przed pobraniem możesz ukryć warstwę w konwerterze.']]],
   ['Zgodność',[
    ['Jakie rozmiary i formaty obrazów są obsługiwane?','Możesz przesyłać pliki PNG, JPG, WebP, GIF i BMP (każdy ma też własną stronę, np. [[jpg-to-svg-converter]] i [[webp-to-svg-converter]]), które Twoja przeglądarka potrafi otworzyć. Ze względu na wydajność bardzo duże obrazy są przed trasowaniem zmniejszane do maksymalnie 3000 px na dłuższym boku, a wyeksportowany SVG zachowuje oryginalne proporcje.'],
    ['Czy działa na telefonach i tabletach?','Tak. Działa w aktualnych wersjach Chrome, Edge, Firefox i Safari na komputerach i urządzeniach mobilnych. Bardzo duże obrazy mogą być wolniejsze na starszych telefonach, więc jeśli podgląd działa wolno, spróbuj mniejszego obrazu lub niższej Szczegółowości.']]]
  ],
  ctaTitle:'Gotowy na wektoryzację?',ctaText:'Twój PNG dzieli od skalowalnego SVG jedno przeciągnięcie.',ctaBtn:'Otwórz konwerter PNG na SVG'
 },
 dir:{
  eyebrow:'Wszystkie konwertery',title:'Wszystkie darmowe konwertery i narzędzia SVG',lead:'Darmowych narzędzi: {n}, wszystkie działają w przeglądarce. Wybierz konwerter poniżej lub szukaj według formatu albo zadania.',
  search:'Szukaj, np. „logo”, „PDF”, „minifikator”',searchLabel:'Szukaj konwerterów',filter:'Filtruj według typu',all:'Wszystkie',empty:'Żaden konwerter nie pasuje do wyszukiwania. Spróbuj „SVG”, „logo” lub „PNG”.',
  groups:[['Obraz na SVG','Trasuj obrazy rastrowe na skalowalne kształty wektorowe.'],['SVG na obraz','Eksportuj SVG do PNG, JPG, WebP, PDF lub ICO.'],['Narzędzia SVG','Kompresuj, edytuj, sprawdzaj i waliduj kod SVG.']],
  here:'Jesteś tutaj',nav:'Wszystkie konwertery i narzędzia SVG'
 },
 foot:{
  blurb:'Darmowy konwerter PNG na SVG i narzędzia SVG działające w całości w przeglądarce.',colExplore:'Przeglądaj',colCompany:'Firma',colLegal:'Informacje prawne',lang:'Język',
  home:'Strona główna',about:'O nas',contact:'Kontakt',terms:'Regulamin',privacy:'Polityka prywatności',sitemap:'Mapa strony',
  copy:'© {year} pngtosvgconverter.com',made:'Stworzone dla projektantów i programistów · Przetwarzane lokalnie'
 }
};
