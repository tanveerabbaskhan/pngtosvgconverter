module.exports={
  'ico-to-svg-converter':{
    title:'Konwerter ICO na SVG',
    desc:'Zamień ikonę ICO na skalowalny plik SVG w przeglądarce. Dostosuj kolory i podgląd, a następnie pobierz wynik bez przesyłania pliku.',
    lead:'Zamień ikonę lub favicon ICO na skalowalny obraz SVG. Konwersja odbywa się bezpośrednio w przeglądarce.',
    drop:'Upuść tutaj plik ICO lub kliknij, aby go wybrać',
    intro:'Konwerter odczytuje obraz z pliku ICO, a następnie przekształca jego kolory i kontury w ścieżki SVG. Małe ikony można w ten sposób skalować bez rozmywania gotowego wektora.',
    steps:['Wybierz plik ICO lub przeciągnij go do pola powyżej.','Dostosuj liczbę kolorów, szczegółowość i wygładzanie, obserwując podgląd.','Pobierz plik SVG albo skopiuj jego kod.'],
    faq:[['Czy konwersja jest bezpłatna?','Tak. Narzędzie jest bezpłatne i nie wymaga konta.'],['Czy mój plik jest przesyłany na serwer?','Nie. Konwersja odbywa się w przeglądarce na Twoim urządzeniu.'],['Czy mała ikona będzie ostra po konwersji?','Ścieżki SVG można skalować bez rozmycia, ale konwersja nie odtworzy szczegółów, których nie było w oryginale. Jeśli to możliwe, użyj największej dostępnej wersji ikony.']],
    content:{
      def:'Konwerter ICO na SVG przekształca favicon lub ikonę Windows w skalowalną grafikę wektorową. Małe ikony są powiększane i wygładzane przed trasowaniem.',
      how:[['Wczytanie ikony','Przeglądarka wyświetla obraz ICO w dostępnym rozmiarze.','Canvas · obraz ICO','pix'],['Powiększenie','Obraz zostaje powiększony z wygładzaniem, aby ograniczyć poszarpane krawędzie.','Powiększenie · odszumianie','blur'],['Redukcja kolorów','Kolory ikony są grupowane w oddzielne warstwy.','Kwantyzacja kolorów','pal'],['Trasowanie i wynik','Kontury są dopasowywane do krzywych Béziera i zapisywane jako SVG.','Krzywe Béziera','vec']],
      why:['Czym wyróżnia się ICO',[['Mało danych','Ikona 16 × 16 zawiera tylko 256 pikseli; nie da się odzyskać szczegółów nieobecnych w oryginale.'],['Rozmiar źródła','Większy obraz źródłowy może dać dokładniejszy wynik.'],['Wygładzanie','Wyższa wartość wygładzania zaokrągla schodkowe krawędzie pikseli.']]],
      pdef:'Konwersja ICO na SVG obejmuje cztery kroki. Większy obraz źródłowy zwykle daje lepszy wynik.',
      steps:[['Dodaj ICO','Wybierz plik .ico lub wklej obraz do przeglądarki.','Jeśli możesz, użyj obrazu o wyższej rozdzielczości.'],['Ustaw kolory','Dla ikon o płaskich kolorach wypróbuj od 4 do 6 kolorów.','Mniejsza liczba kolorów ogranicza dodatkowe obwódki.'],['Wygładź kształty','Zwiększ wygładzanie i w razie potrzeby dodaj odszumianie.','Powiększ podgląd, aby sprawdzić krzywe.'],['Pobierz SVG','Zapisz wynik jako SVG lub skopiuj jego kod.','Sprawdź wynik w podglądzie przed pobraniem.']],
      cdef:'Tabela pomaga dobrać ustawienia do rozmiaru ikony. Wykres pokazuje orientacyjny wpływ rozdzielczości na wynik.',
      table:{cap:'Zalecane ustawienia według rozmiaru ikony',cols:['Rozmiar ikony','Kolory','Szczegóły','Wygładzanie','Odszumianie','Wynik'],rows:[['16×16','3–4','80%','55%','1,5 px','Uproszczony'],['32×32','4–5','80%','50%','1 px','Rozpoznawalny'],['64×64','4–6','75%','45%','1 px','Wyraźny'],['128–256 px','4–8','70%','35%','0,5 px','Bardzo wyraźny']]},
      bars:{title:'Jakość wektora a rozdzielczość ikony',cap:'Orientacyjna skala od 1 do 5: więcej pikseli źródłowych zwykle daje dokładniejsze krzywe.',rows:[['256 px',5],['128 px',4],['64 px',3],['16–32 px',2]]},
      faq:[['Czy favicon 16 × 16 będzie ostry jako SVG?','Ścieżki można skalować bez rozmycia, ale nie odzyskają szczegółów nieobecnych w oryginale. Użyj największego dostępnego obrazu.'],['Czy SVG może służyć jako favicon?','Tak, aktualne przeglądarki obsługują favicon w formacie SVG.'],['Dlaczego ikona jest rozmyta przed trasowaniem?','Małe ikony mogą być powiększane z wygładzaniem, co pomaga uzyskać płynniejsze krzywe.'],['Czy przezroczystość ICO zostanie zachowana?','Tak. Przezroczyste piksele nie stają się kształtami SVG.'],['Co zrobić, gdy ICO zawiera wiele rozmiarów?','Przeglądarka wybiera obraz z pliku. Jeśli potrzebujesz określonego rozmiaru, wyeksportuj go najpierw jako PNG.']]
    }
  }
};
