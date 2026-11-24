module.exports={
 meta:{title:'pngtosvgconverter.com: Kostenloser PNG-zu-SVG-Konverter',desc:'Kostenloser PNG-zu-SVG-Konverter direkt im Browser. Wandeln Sie jedes PNG mit Live-Vorschau in Vektoren um. Ohne Upload und ohne Anmeldung.',alt:'pngtosvgconverter.com: kostenloser PNG-zu-SVG-Konverter mit Live-Vorschau'},
 h1:{kw:'PNG-zu-SVG-Konverter',tail:'jedes PNG in ein skalierbares SVG umwandeln'},
 lead:'Wandeln Sie PNG online in Sekunden in SVG um. Dieser kostenlose Konverter zeichnet Ihr Bild als saubere Vektorpfade direkt im Browser nach – ohne Upload, ohne Anmeldung und ohne Wasserzeichen.',
 skip:'Zum Hauptinhalt springen',
 nav:{converter:'Konverter',all:'Alle Konverter',faq:'FAQ',about:'Über uns',contact:'Kontakt',menu:'Menü',theme:'Design wechseln',upload:'Bild hochladen',main:'Hauptnavigation',toc:'Auf dieser Seite'},
 toc:{how:'So funktioniert es',proc:'Umwandlungsprozess',chart:'Tabelle und Funktionen',faq:'FAQ',all:'Alle Konverter'},
 ui:{
  toolH2:'PNG-zu-SVG-Konverter-Tool',step1:'Bild hinzufügen',dropAria:'Bild hochladen',drop:'PNG hier ablegen oder zum Durchsuchen klicken',paste:'Sie können auch mit Strg+V einfügen. Es wird nichts hochgeladen.',
  sample:'Kein Bild? Probieren Sie ein Beispiel:',sLogo:'Logo',sScene:'Landschaft',sIcon:'Symbol',choose:'Bild auswählen',
  step2:'Ergebnis anpassen',reset:'Zurücksetzen',startFrom:'Starten mit',pLogo:'Logo',pIllus:'Illustration',pPhoto:'Foto',pLine:'Strichzeichnung',
  style:'Stil',mColor:'Farbe',mGray:'Grau',mMono:'Mono',rmbg:'Hintergrund entfernen',rmbgSub:'Entfernt weiße oder transparente Ränder',
  colors:'Farben',thresh:'Schwellenwert',ink:'Tintenfarbe',smooth:'Glättung',more:'Weitere Optionen',detail:'Detailgrad',specks:'Flecken entfernen',denoise:'Entrauschen',
  step3:'Vorschau und Download',live:'Live-Vorschau',loading:'Wird geladen …',copy:'SVG-Code kopieren',download:'SVG herunterladen',
  chipL:'Original · PNG',chipR:'Vektor · SVG',handle:'Original und SVG vergleichen',hint:'Griff ziehen zum Vergleichen · scrollen zum Zoomen',zoomOut:'Verkleinern',zoomIn:'Vergrößern',fit:'Einpassen',
  veil:'Bild zum Umwandeln ablegen',veilSub:'PNG, JPG, WebP, GIF',fileSize:'SVG-Dateigröße',tColors:'Farben',time:'Dauer',
  moreD:'Weitere Details',moreDSub:'Farbebenen, Größenverlauf, SVG-Code',shapes:'Formen',shapesSub:'geschlossene Konturen',nodes:'Knoten',nodesSub:'Pfadpunkte',
  p1:'Dekodieren',p2:'Quantisieren',p3:'Nachzeichnen',p4:'Vereinfachen',p5:'Rendern',
  layers:'Farbebenen',layersSub:'Zum Isolieren darüberfahren · zum Ausblenden klicken',trace:'Live-Größenverlauf',traceSub:'SVG-Größe pro Einstellung',legSvg:'SVG-Größe',legPng:'Original-PNG',src:'SVG-Quelltext'
 },
 js:{
  needImage:'Bitte wählen Sie eine Bilddatei aus',readFail:'Dieses Bild konnte nicht gelesen werden',tracedAt:'nachgezeichnet mit {w}×{h}',
  smaller:'<span class="delta good">{pct} % kleiner</span> als das PNG mit {size}',larger:'<span class="delta warn">{pct} % größer</span> als das PNG mit {size}',
  noShapes:'Keine sichtbaren Formen – verringern Sie „Flecken entfernen“.',pts:'Pkt.',moreChars:'… {n} weitere Zeichen',lines:'{n} Zeilen',previewOnly:'nur Vorschau – Kopieren oder Herunterladen liefert die vollständige Datei',
  runs:'{n} Durchläufe · jetzt {size}',run1:'1 Durchlauf · jetzt {size}',fullCopied:'Vollständiges SVG kopiert',downloaded:'SVG heruntergeladen · {size}',copied:'SVG-Code kopiert',
  dirStatus:'{a} von {b} Tools angezeigt'
 },
 how:{
  eyebrow:'Unter der Haube',title:'So funktioniert der PNG-zu-SVG-Konverter',
  def:'<strong>Ein PNG-zu-SVG-Konverter</strong> verwandelt ein Raster aus farbigen Pixeln in gefüllte Vektorformen. Dieser Konverter erledigt das in fünf automatischen Schritten vollständig in Ihrem Browser und zeichnet das Ergebnis bei jeder Reglerbewegung neu.',
  stages:[
   ['Dekodieren','Ihr Browser liest das PNG über die Canvas-API und wandelt es in ein Raster aus RGBA-Pixeln um. Große Dateien werden auf eine über den Regler „Detailgrad“ bestimmte Arbeitsgröße umgerechnet, und eine optionale Entrauschen-Unschärfe entfernt Körnung.','Canvas · getImageData'],
   ['Quantisieren','Eine Median-Cut-Palette mit 2–64 Farben wird mit k-means verfeinert. Nahezu gleiche Farben werden zusammengeführt, geglättete Randpixel der nächstliegenden echten Farbe zugeordnet und winzige Flecken in ihre Nachbarn aufgenommen.','Median Cut · k-means'],
   ['Nachzeichnen','Jede Farbe wird zu einer gestapelten Ebene. Die Ebenenmaske wird weichgezeichnet und ihre Kontur mit Marching Squares extrahiert. So entstehen Subpixel-Konturen, die der echten Kante folgen statt den Pixeltreppen.','Marching Squares'],
   ['Kurven anpassen','Ecken werden erkannt, dann wird jeder glatte Abschnitt mit kubischen Bézierkurven angenähert. Gerade Kanten bleiben Geraden, sodass weit weniger Knoten nötig sind als bei einer rohen Pixelnachzeichnung.','Bézier-Anpassung nach Schneider'],
   ['Rendern','Die Pfade werden als ein gefüllter SVG-Pfad pro Farbe geschrieben, wobei die ursprüngliche viewBox erhalten bleibt. Vorschau, Dateigröße, Palette und Quelltext aktualisieren sich live, sobald Sie einen Regler bewegen.','SVG · fill-rule evenodd']],
  cap:'Die fünf Schritte der PNG-zu-SVG-Umwandlung: dekodieren, quantisieren, nachzeichnen, Kurven anpassen und rendern.',
  privTitle:'Wohin Ihre Datei geht',privCap:'Das PNG wird auf Ihrem Gerät verarbeitet. Es findet kein Upload statt, die Datei erreicht also nie einen Server.',privAlt:'Ihr PNG bleibt auf Ihrem Gerät',privAltDesc:'Das PNG durchläuft den Konverter in Ihrem Browser und wird zum SVG. Kein Pfeil verlässt Ihr Gerät in Richtung eines Servers.',
  privBrowser:'IHR BROWSER',privEngine:'Nachzeichner',privServer:'Server',privNot:'nicht beteiligt',
  whyTitle:'Warum das Ergebnis klein und sauber bleibt',
  why:[['Gestapelte Ebenen','Jede Farbe liegt auf der darunterliegenden, daher gibt es keine haarfeinen Lücken und weit weniger Löcher zu beschreiben.'],['Subpixel-Konturen','Kanten werden zwischen den Pixeln statt auf ihnen platziert, sodass Diagonalen und Kurven glatt bleiben.'],['Kurvenanpassung','Ein Bézier-Segment kann Dutzende Pixelstufen ersetzen – ein typisches Logo braucht nur einige Hundert Knoten.'],['Bereinigung vor dem Nachzeichnen','Kantenglättungssäume und Flecken werden zuerst zusammengeführt und werden so nie zu zusätzlichen Formen.']]
 },
 proc:{
  eyebrow:'Schritt für Schritt',title:'PNG-zu-SVG-Umwandlungsprozess',
  def:'Die Umwandlung eines PNG in SVG dauert fünf Schritte und meist weniger als eine Minute. Sie können nach jedem Schritt aufhören: Sobald die Vorschau passt, ist das SVG zum Download bereit.',
  steps:[
   ['PNG hinzufügen','Legen Sie ein PNG im Upload-Feld ab, klicken Sie auf „Bild auswählen“ oder fügen Sie eines mit Strg+V aus der Zwischenablage ein. Noch nicht bereit? Drücken Sie eine Beispieltaste, um den Konverter zuerst auszuprobieren.','Akzeptiert auch JPG, WebP, GIF und BMP.'],
   ['Voreinstellung wählen','Wählen Sie Logo, Illustration, Foto oder Strichzeichnung. Jede Voreinstellung setzt sinnvolle Werte für Farben, Detailgrad, Glättung und Fleckenentfernung, sodass die erste Vorschau meist schon nah dran ist.','Logos: 4–8 Farben. Fotos: 32–48 Farben.'],
   ['Nachzeichnung feinjustieren','Passen Sie Farbanzahl (2–64), Detailgrad, Glättung, Flecken entfernen und Entrauschen an. Wechseln Sie zwischen den Modi Farbe, Grau und Mono und aktivieren Sie „Hintergrund entfernen“ für weiße oder transparente Ränder.','Jeder Regler aktualisiert die Vorschau sofort.'],
   ['Vergleichen und prüfen','Ziehen Sie den Griff, um das Original-PNG mit dem SVG zu vergleichen. Scrollen zum Zoomen, ziehen zum Verschieben; fahren Sie über eine Farbebene, um sie zu isolieren, oder klicken Sie darauf, um sie vor dem Export auszublenden.','Zoomen Sie bis 3200 %, um zu sehen, dass das SVG scharf bleibt.'],
   ['SVG herunterladen oder kopieren','Klicken Sie auf „SVG herunterladen“, um die Datei zu speichern, oder auf „Code kopieren“, um das Markup direkt in Ihr Projekt, Figma, Illustrator, Inkscape oder eine Webseite einzufügen.','Die Datei verlässt Ihr Gerät nie.']],
  cta:'Jetzt ein PNG umwandeln',tipLabel:'Tipp:',
  mock:{dropLabel:'PNG ablegen',presets:['Logo','Illustration','Foto','Strichzeichnung'],sliders:['Farben','Detailgrad','Glättung'],dlBtn:'SVG herunterladen'}
 },
 chart:{
  eyebrow:'Referenz',title:'PNG-zu-SVG-Umwandlungstabelle / Funktionen',
  def:'Nutzen Sie diese Tabelle, um die passenden Einstellungen für Ihren PNG-Typ zu finden, zu sehen, wie gut sich jeder Typ umwandeln lässt, und PNG mit SVG zu vergleichen. Die Werte entsprechen den im Konverter integrierten Voreinstellungen.',
  barsTitle:'Wie gut sich jeder PNG-Typ umwandeln lässt',barsCap:'Vektoreignung von 1 (schlecht) bis 5 (ausgezeichnet). Flache, kontrastreiche Grafiken lassen sich am besten umwandeln, Fotos am schlechtesten.',
  barsAlt:'Wie gut sich jeder PNG-Typ in SVG umwandeln lässt',
  bars:['Logo','Symbol','Pixel Art','Flache Illustration','Strichzeichnung','Unterschrift','Gescanntes Dokument','Foto'],
  quickTitle:'Kurzantworten',
  quick:[['Beste Ergebnisse:','Logos, Symbole, Pixel Art und flache Illustrationen.'],['Gute Ergebnisse:','Strichzeichnungen, Skizzen und Unterschriften im Mono-Modus.'],['Braucht Sorgfalt:','gescannte Seiten, die Entrauschen und einen höheren Fleckenfilter benötigen.'],['Nur stilisiert:','Fotos und weiche Verläufe werden zu posterisierter Kunst.']],
  note:'Tipp: Starten Sie mit der passendsten Voreinstellung und ändern Sie immer nur einen Regler.',
  t1:{cap:'Empfohlene Konverter-Einstellungen nach PNG-Typ',cols:['PNG-Typ','Voreinstellung oder Modus','Farben','Detailgrad','Glättung','Flecken entfernen','Vektoreignung'],
   rows:[['Logo','Voreinstellung Logo'],['Symbol','Voreinstellung Logo'],['Flache Illustration oder Cartoon','Voreinstellung Illustration'],['Strichzeichnung oder Skizze','Voreinstellung Strichzeichnung · Mono'],['Unterschrift','Mono · Schwellenwert 160'],['Pixel Art','Pixelmodus'],['Gescanntes Dokument','Mono · Entrauschen 1,5'],['Foto','Voreinstellung Foto']],
   words:{ink:'Tinte',auto:'Pixelgröße automatisch',na:'nicht verwendet',up:'bis zu'}},
  t2:{cap:'PNG und SVG auf einen Blick',cols:['Merkmal','PNG (Raster)','SVG (Vektor)'],
   rows:[['Skalierung','Pixel werden beim Vergrößern unscharf oder zerfallen','Lässt sich ohne Schärfeverlust auf jede Größe skalieren'],['Dateigröße','Wächst mit der Pixelanzahl','Wächst mit der Formkomplexität – winzig bei flachen Grafiken'],['Bearbeitung','Pixel in einem Rasterbildeditor bearbeiten','Formen, Kurven und Farben in jedem Vektoreditor bearbeiten'],['Am besten für','Fotos und detailreiche Texturen','Logos, Symbole, Illustrationen, Diagramme und Strichzeichnungen'],['Transparenz','Alphakanal','Nativ – leerer Raum ist einfach transparent'],['Gestaltung mit CSS','Nicht möglich','Möglich, wenn das SVG in die Seite eingebettet ist'],['Druck und Beschilderung','Braucht ein hochauflösendes Original','Auflösungsunabhängig für jede Druckgröße']]},
  featTitle:'Funktionen des Konverters',
  feats:[['Live-Vorschau','Jeder Regler zeichnet das Bild neu nach und aktualisiert Splitansicht, Größendiagramm, Palette und Knotenanzahl gemeinsam.'],['Subpixel-Nachzeichnung','Konturen folgen der echten Kante zwischen Farben statt den Pixelgrenzen, sodass Kurven glatt bleiben.'],['Bézier-Kurvenanpassung','Glatte Abschnitte werden zu kubischen Béziers, gerade Kanten bleiben Linien – das hält die Knotenanzahl niedrig.'],['Gestapelte Farbebenen','Die Ebenen liegen übereinander, daher gibt es keine haarfeinen Lücken oder Nähte zwischen Farben.'],['2–64 Farben','Wählen Sie, wie viele Farben erhalten bleiben, oder wechseln Sie zu Grau oder Mono. Ebenen vor dem Export hervorheben oder ausblenden.'],['Pixelmodus','Zeichnet Pixel Art als scharfe Rechtecke in der erkannten Pixelgröße nach – ohne Glättung.'],['Transparente Hintergründe','Transparente Pixel werden nie zu Formen. „Hintergrund entfernen“ löscht einen einfarbig weißen Hintergrund mit einem Klick.'],['Zoomen und vergleichen','Ziehen Sie den Griff zum Vergleichen und zoomen Sie bis 3200 %, um zu sehen, wie das PNG verpixelt, während das SVG scharf bleibt.'],['Datenschutz von Grund auf','Die Umwandlung läuft in Ihrem Browser. Ihr PNG wird nie hochgeladen, gespeichert oder weitergegeben.'],['Kostenlos, ohne Limits','Kein Konto, kein Wasserzeichen, kein Tageskontingent. Wandeln Sie beliebig viele Bilder um.']]
 },
 faq:{
  eyebrow:'Antworten',title:'FAQ',def:'Häufige Fragen zum PNG-zu-SVG-Konverter: wie er funktioniert, was Sie erwarten können und wie Sie das beste Ergebnis erzielen. {n} Antworten in vier Themenbereichen.',
  groups:[
   ['Grundlagen',[
    ['Was ist ein PNG-zu-SVG-Konverter?','Ein PNG-zu-SVG-Konverter wandelt ein pixelbasiertes PNG-Bild in ein Vektor-SVG aus mathematischen Formen und Kurven um. Da ein SVG Formen statt Pixel beschreibt, lässt es sich ohne Unschärfe beliebig skalieren und ist bei flachen Grafiken wie Logos und Symbolen oft viel kleiner als das PNG.'],
    ['Ist dieser PNG-zu-SVG-Konverter kostenlos?','Ja. Er ist völlig kostenlos – ohne Konto, ohne Wasserzeichen und ohne Tageslimit. Die einzige praktische Grenze ist Ihr Gerät: Bilder werden bis 3000 px an der längsten Seite verarbeitet, und sehr große oder sehr detailreiche Dateien brauchen einfach etwas länger.'],
    ['Werden meine PNG-Dateien auf einen Server hochgeladen?','Nein. Die Umwandlung läuft vollständig in Ihrem Browser mit JavaScript und der Canvas-API. Ihr PNG wird nie hochgeladen, gespeichert oder weitergegeben, vertrauliche Grafiken bleiben also auf Ihrem Gerät.'],
    ['Was ist der Unterschied zwischen PNG und SVG?','PNG ist ein Rasterformat, das ein Gitter farbiger Pixel speichert und beim Vergrößern an Schärfe verliert. SVG ist ein Vektorformat, das Formen, Kurven und Füllungen speichert, daher bleibt es in jeder Größe scharf und lässt sich mit Vektorwerkzeugen bearbeiten. PNG eignet sich für Fotos, SVG für Logos, Symbole, Diagramme und Strichzeichnungen.']]],
   ['Qualität und Einstellungen',[
    ['Sieht das SVG genau aus wie mein PNG?','Nicht Pixel für Pixel. Die Umwandlung zeichnet die erkannten Formen nach und nähert sie mit Kurven an, das Ergebnis ist also eine saubere, skalierbare Version der Grafik. Flache, kontrastreiche Bilder stimmen sehr genau überein, Fotos werden zu einer stilisierten, posterisierten Fassung.'],
    ['Welche PNG-Bilder lassen sich am besten umwandeln?','Logos, Symbole, flache Illustrationen, Cartoons, Strichzeichnungen, Unterschriften und Pixel Art lassen sich am besten umwandeln, weil sie aus klaren Formen und wenigen Farben bestehen. Fotos und weiche Verläufe funktionieren am schlechtesten (probieren Sie den [[photo-to-vector-converter]] für stilisierte Ergebnisse). Einstellungen nach Bildtyp finden Sie in der Tabelle oben.'],
    ['Wie viele Farben sollte ich wählen?','Entsprechen Sie der Anzahl flacher Farben in Ihrer Grafik. Die meisten Logos brauchen 4–8, Symbole 3–6 und Illustrationen 12–20. Fotos können 32–48 oder mehr benötigen. Zusätzliche Farben erhöhen Ebenen und Dateigröße, ohne ein flaches Design zu verbessern; die Farbebenenliste zeigt genau, was jede beiträgt.'],
    ['Wie erhalte ich glattere Linien oder schärfere Ecken?','Nutzen Sie den Regler Glättung. Niedrige Werte halten Ecken scharf und Kanten nah am Original, höhere Werte runden Pixelstufen und Zittern ab. Erhöhen Sie den Detailgrad für feinere Merkmale und senken Sie „Flecken entfernen“, wenn dünne Linien verschwinden.'],
    ['Warum wirkt mein Foto posterisiert oder gebändert?','Vektoren speichern flache Farbflächen, daher muss ein weicher Verlauf durch Bänder angenähert werden. Erhöhen Sie Farbanzahl und Detailgrad, fügen Sie etwas Entrauschen hinzu oder nehmen Sie den kräftigen, grafischen Look an. Für echte fotografische Details behalten Sie das PNG oder nutzen ein Fotoformat.']]],
   ['Transparenz, Text und Bearbeitung',[
    ['Wie behalte ich einen transparenten Hintergrund?','Transparente Pixel Ihres PNG werden automatisch beachtet und nie zu Formen, das SVG hat also keine Hintergrundbox. Hat Ihr PNG einen einfarbig weißen Hintergrund, aktivieren Sie „Hintergrund entfernen“. Der Mono-Modus verwirft zudem den Papierton und behält nur die Tinte – dafür ist die Seite [[transparent-image-to-svg-converter]] optimiert.'],
    ['Erkennt er Text in meinem PNG?','Nein. Der Konverter führt keine Texterkennung (OCR) durch. Buchstaben werden als Vektorkonturen nachgezeichnet, skalieren also perfekt, sind aber nicht als Text bearbeitbar. Für echten Text tippen Sie ihn in einem Designprogramm neu oder nutzen eine separate OCR.'],
    ['Warum ist mein SVG größer als mein PNG?','Fotos und Verläufe brauchen viele Formen, was ein gut komprimiertes PNG übertreffen kann. Verringern Sie die Farbanzahl, senken Sie den Detailgrad, erhöhen Sie „Flecken entfernen“ oder die Glättung. Die Dateigrößen-Karte und der Live-Größenverlauf zeigen die Wirkung jeder Änderung.'],
    ['Kann ich das SVG in Figma, Illustrator, Inkscape oder Canva bearbeiten?','Ja. Die Ausgabe ist ein Standard-SVG mit einem gefüllten Pfad pro Farbe, jeder Vektoreditor kann es öffnen, umfärben und umformen. Die Ebenen sind der Reihe nach gestapelt, und Sie können vor dem Download eine Ebene im Konverter ausblenden.']]],
   ['Kompatibilität',[
    ['Welche PNG-Größen und Formate werden unterstützt?','Sie können PNG-, JPG-, WebP-, GIF- und BMP-Dateien hochladen (jedes hat auch eine eigene Seite, etwa den [[jpg-to-svg-converter]] und den [[webp-to-svg-converter]]), die Ihr Browser öffnen kann. Aus Leistungsgründen werden sehr große Bilder vor dem Nachzeichnen auf höchstens 3000 px an der längsten Seite verkleinert, das exportierte SVG behält das ursprüngliche Seitenverhältnis.'],
    ['Funktioniert er auf Smartphones und Tablets?','Ja. Er läuft in aktuellen Versionen von Chrome, Edge, Firefox und Safari auf Desktop und Mobilgerät. Sehr große Bilder können auf älteren Handys langsamer sein – probieren Sie ein kleineres Bild oder einen niedrigeren Detailgrad, wenn die Vorschau stockt.']]]
  ],
  ctaTitle:'Bereit zum Vektorisieren?',ctaText:'Ihr PNG ist nur einen Handgriff von einem skalierbaren SVG entfernt.',ctaBtn:'PNG-zu-SVG-Konverter öffnen'
 },
 dir:{
  eyebrow:'Alle Konverter',title:'Alle kostenlosen Konverter und SVG-Tools',lead:'{n} kostenlose Tools, die in Ihrem Browser laufen. Wählen Sie unten einen Konverter oder suchen Sie nach Format oder Aufgabe.',
  search:'Suchen, z. B. „Logo“, „PDF“, „minify“',searchLabel:'Konverter durchsuchen',filter:'Nach Typ filtern',all:'Alle',empty:'Kein Konverter passt zu dieser Suche. Versuchen Sie „SVG“, „Logo“ oder „PNG“.',
  groups:[['Bild zu SVG','Rasterbilder in skalierbare Vektorformen umwandeln.'],['SVG zu Bild','Ein SVG als PNG, JPG, WebP, PDF oder ICO ausgeben.'],['SVG-Tools','SVG-Code komprimieren, bearbeiten, prüfen und validieren.']],
  here:'Sie sind hier',nav:'Alle Konverter und SVG-Tools'
 },
 foot:{
  blurb:'Kostenloser PNG-zu-SVG-Konverter und SVG-Tools, die vollständig in Ihrem Browser laufen.',colExplore:'Entdecken',colCompany:'Unternehmen',colLegal:'Rechtliches',lang:'Sprache',
  home:'Startseite',about:'Über uns',contact:'Kontakt',terms:'Nutzungsbedingungen',privacy:'Datenschutzerklärung',sitemap:'Sitemap',
  copy:'© {year} pngtosvgconverter.com',made:'Für Designer und Entwickler gemacht · Lokal verarbeitet'
 }
};
