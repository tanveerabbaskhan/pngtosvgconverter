import type { ContentPage } from "../types";

export const guides: Record<string, ContentPage> = {
  "png-vs-svg": {
    slug: "guides/png-vs-svg",
    keyword: "png vs svg unterschied",
    title: "PNG vs. SVG: Was ist der Unterschied?",
    metaDescription:
      "PNG und SVG lösen unterschiedliche Probleme. Erfahren Sie, worin sich Raster-PNGs und Vektor-SVGs wirklich unterscheiden, mit direktem Vergleich und Empfehlungen, wann Sie welches Format nutzen sollten.",
    h1: "PNG vs. SVG: Was ist der Unterschied?",
    intro:
      "PNG und SVG sind beide gängige Bildformate im Web, speichern ein Bild aber auf grundlegend unterschiedliche Weise. Wenn Sie den Unterschied verstehen, fällt es leichter, das richtige Format für ein Logo, Icon, Foto oder eine Schneidedatei zu wählen.",
    breadcrumbLabel: "PNG vs. SVG",
    sections: [
      {
        heading: "Was ist eine PNG-Datei?",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Eine PNG-Datei (Portable Network Graphics) ist ein Rasterbild: ein festes Raster aus farbigen Pixeln, ähnlich wie bei einem JPEG. Jedes Pixel speichert seinen eigenen Farbwert, und die Gesamtzahl der Pixel wird in dem Moment festgelegt, in dem die Datei erstellt wird. PNG unterstützt außerdem echte Alphatransparenz, weshalb es das Standardformat für Icons, Screenshots und Logos mit transparentem Hintergrund ist.",
              "Da ein PNG nur ein Raster aus Pixeln ist, bedeutet eine Vergrößerung, dieselben Pixel über eine größere Fläche zu strecken — genau das führt zu Unschärfe oder sichtbaren „Blockartefakten\", wenn man ein PNG über seine ursprünglichen Abmessungen hinaus skaliert.",
            ],
          },
        ],
      },
      {
        heading: "Was ist eine SVG-Datei?",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Eine SVG-Datei (Scalable Vector Graphics) beschreibt ein Bild als eine Reihe mathematischer Formen und Pfade — Linien, Kurven und Füllungen — statt als einzelne Pixel. Ein Kreis wird als „Kreis mit diesem Radius\" gespeichert, nicht als Tausende einzelner farbiger Punkte.",
              "Genau das macht SVGs unendlich skalierbar: Ein Browser oder ein Designprogramm zeichnet die Formen bei jeder benötigten Größe neu, sodass ein SVG-Logo auf einem Handy-Icon genauso scharf wirkt wie auf einer Plakatwand. SVGs sind außerdem reiner Text (XML) und lassen sich daher in jedem Texteditor oder Vektordesign-Tool bearbeiten.",
            ],
          },
        ],
      },
      {
        heading: "PNG vs. SVG: Die wichtigsten Unterschiede",
        blocks: [
          {
            kind: "table",
            headers: ["", "PNG", "SVG"],
            rows: [
              ["Zugrunde liegende Daten", "Pixelraster", "Mathematische Pfade & Formen"],
              ["Skalierung", "Qualitätsverlust über Originalgröße hinaus", "Skalierbar auf jede Größe ohne Qualitätsverlust"],
              ["Dateigröße", "Größer bei einfachen Grafiken", "Meist kleiner bei Logos/Icons"],
              ["Bearbeitbarkeit", "Nur Pixelbearbeitung (Photoshop usw.)", "Formen direkt bearbeitbar (Illustrator, Inkscape)"],
              ["Transparenz", "Unterstützt (Alphakanal)", "Unterstützt (Füllung/Deckkraft)"],
              ["Am besten für", "Fotografien, komplexe Texturen", "Logos, Icons, Illustrationen, Schneidedateien"],
            ],
          },
        ],
      },
      {
        heading: "Wann PNG und wann SVG verwenden",
        blocks: [
          {
            kind: "list",
            intro: "Als Faustregel gilt:",
            items: [
              "Verwenden Sie SVG für Logos, Icons, Strichzeichnungen und alles, was in der Größe verändert oder geschnitten werden muss — einschließlich Dateien für [Cricut-Projekte](/use-cases/cricut) und Laserschneider.",
              "Verwenden Sie PNG für Fotografien und Bilder mit komplexen Verläufen oder Texturen, die sich nicht gut auf flächige Formen reduzieren lassen.",
              "Wenn Sie bereits ein PNG-Logo oder -Icon haben und ein SVG benötigen, müssen Sie es nicht von Hand neu zeichnen — Sie können es automatisch nachzeichnen lassen. Details dazu finden Sie unter [wie Bild-Tracing funktioniert](/guides/how-image-tracing-works).",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Kann ich eine PNG-Datei einfach in .svg umbenennen?",
        answer:
          "Nein. Das Ändern der Dateiendung verändert nicht die zugrunde liegenden Daten — das Pixelraster eines PNGs muss in Vektorpfade nachgezeichnet werden, um wirklich zu einem SVG zu werden.",
      },
      {
        question: "Ist SVG immer besser als PNG?",
        answer:
          "Nicht für jeden Anwendungsfall. SVG eignet sich besser für skalierbare Grafiken wie Logos und Icons, aber PNG (oder JPEG) bleibt die richtige Wahl für Fotografien, bei denen ein Vektor-Tracing realistische Details verlieren würde.",
      },
      {
        question: "Unterstützen Browser SVG genauso wie PNG?",
        answer:
          "Ja. Jeder moderne Browser stellt SVG nativ dar, und es lässt sich überall einsetzen, wo auch ein <img>-Tag oder ein CSS-background-image funktioniert.",
      },
    ],
    related: [
      {
        href: "/guides/raster-vs-vector",
        label: "Raster- vs. Vektorgrafiken: Der komplette Leitfaden",
        description: "Ein tieferer Blick auf den Unterschied zwischen Raster und Vektor, über PNG und SVG hinaus.",
      },
      {
        href: "/use-cases/cricut",
        label: "PNG zu SVG für Cricut",
        description: "Verwandeln Sie ein PNG-Design in ein schnittbereites SVG für Cricut Design Space.",
      },
    ],
    relatedHeading: "Verwandte Anleitungen",
  },

  "how-image-tracing-works": {
    slug: "guides/how-image-tracing-works",
    keyword: "wie funktioniert bild vektorisierung",
    title: "Wie funktioniert Bild-Tracing?",
    metaDescription:
      "Eine verständliche Erklärung, wie Bild-Tracing ein Raster-PNG in Vektor-SVG-Pfade verwandelt — Farberkennung, Kantenerkennung und Kurvenanpassung.",
    h1: "Wie funktioniert Bild-Tracing?",
    intro:
      "Bild-Tracing (auch Vektorisierung oder Autotracing genannt) ist der Prozess, mit dem ein Konverter ein pixelbasiertes Bild in eine Reihe von Vektorpfaden verwandelt. Hier erfahren Sie, was dabei tatsächlich im Hintergrund passiert.",
    breadcrumbLabel: "Wie Bild-Tracing funktioniert",
    sections: [
      {
        heading: "Von Pixeln zu Pfaden: Der große Überblick",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Ein Tracing-Algorithmus betrachtet ein Rasterbild jeweils einen Bereich ähnlicher Farbe nach dem anderen, ermittelt die Grenze zwischen diesem Bereich und seinen Nachbarn und beschreibt diese Grenze dann als glatte mathematische Kurve statt als Treppenstufen aus einzelnen Pixeln. Wiederholt man das für jeden einzelnen Farbbereich, erhält man eine vollständige Vektorversion des Originalbilds.",
            ],
          },
        ],
      },
      {
        heading: "Schritt 1: Farberkennung & Quantisierung",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Die meisten Quellbilder enthalten weit mehr Farben, als man als separate Vektorformen haben möchte — allein Fotos können durch Kompressionsrauschen und Farbverläufe Millionen einzigartiger Pixelwerte enthalten. Die Quantisierung gruppiert ähnliche Farben zu einer kleineren, festen Palette (die Anzahl der Farben legen Sie über eine Farbanzahl-Einstellung selbst fest), sodass das Bild vor Beginn des Tracings in saubere, klar abgegrenzte Bereiche vereinfacht wird.",
            ],
          },
        ],
      },
      {
        heading: "Schritt 2: Kantenerkennung",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Sobald jedem Pixel eine Palettenfarbe zugewiesen ist, scannt der Algorithmus das Bild, um zu erkennen, wo ein Farbbereich endet und ein anderer beginnt. Diese Grenzen werden zunächst Pixel für Pixel nachgezeichnet, was einen gezackten Umriss ergibt, der den treppenartigen Kanten des ursprünglichen Rasterrasters folgt.",
            ],
          },
        ],
      },
      {
        heading: "Schritt 3: Pfadaufbau & Kurvenanpassung",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Der gezackte Pixel-Umriss wird anschließend zu einer kleinen Anzahl gerader Linien und quadratischer Kurven geglättet, die ihn innerhalb eines Fehlertoleranzwerts annähern — das ist die Einstellung „Detail\" bzw. „Glättung\" in einem Tracing-Tool. Ein niedrigerer Schwellenwert folgt den ursprünglichen Pixelkanten enger (mehr Knotenpunkte, mehr Detail); ein höherer Schwellenwert erzeugt weniger, glattere Kurven.",
            ],
          },
        ],
      },
      {
        heading: "Schwarz-Weiß- vs. Vollfarb-Tracing",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Der Schwarz-Weiß-Modus reduziert das gesamte Bild vor dem Tracing auf nur zwei Farben (Vorder- und Hintergrund) und erzeugt so einen einzigen sauberen Pfad — ideal für [Logos](/guides/convert-logo-to-svg), Strichzeichnungen und Schneidedateien für Vinyl oder Laserschnitt. Der Vollfarb-Modus behält mehrere Palettenfarben bei und zeichnet jede als eigene Ebene nach, was sich für Fotografien oder mehrfarbige Illustrationen eignet.",
            ],
          },
        ],
      },
      {
        heading: "Was sich gut nachzeichnen lässt (und was nicht)",
        blocks: [
          {
            kind: "list",
            intro: "Tracing funktioniert am besten bei:",
            items: [
              "Logos, Icons und Badges mit flächigen Farben — wenige Farben, scharfe Kanten",
              "Strichzeichnungen und Skizzen — hoher Kontrast zwischen Linie und Hintergrund",
              "Einfachen Illustrationen mit klar getrennten, eindeutigen Farbbereichen",
            ],
          },
          {
            kind: "list",
            intro: "Schwieriger ist das Tracing bei:",
            items: [
              "Fotografien mit sanften Farbverläufen oder viel feiner Textur (Haare, Gras, Stoff)",
              "Bildern mit sehr geringem Kontrast, bei denen sich Vorder- und Hintergrund schwer trennen lassen",
              "Stark komprimierten JPEGs, die als PNG erneut gespeichert wurden und Farbrauschen einbringen, das die Quantisierung glätten muss",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Erzeugt das Tracing eine pixelgenaue Kopie meines Bilds?",
        answer:
          "Nein — das Tracing nähert Ihr Bild mit einer begrenzten Anzahl an Farben und glatten Kurven an, sodass sehr feine Details vereinfacht werden. Bei Logos und Strichzeichnungen fällt das meist gar nicht auf; bei Fotos entsteht ein eher stilisiertes, plakatartiges Ergebnis.",
      },
      {
        question: "Warum wirkt mein nachgezeichnetes SVG blockig, wenn ich den Detailgrad zu niedrig eingestellt habe?",
        answer:
          "Eine niedrige Detail-/Glättungseinstellung hält den Pfad eng an den ursprünglichen Pixelkanten, was bei geschwungenen Formen gezackt wirken kann. Eine höhere Glättung lässt den Algorithmus weniger, dafür längere Kurven für ein saubereres Ergebnis verwenden.",
      },
      {
        question: "Ist das dieselbe Technologie wie Adobes Image Trace?",
        answer:
          "Das zugrunde liegende Prinzip — Farben quantisieren, Kanten erkennen, Kurven anpassen — ist derselbe grundlegende Ansatz, den Tools wie Adobe Illustrators Image Trace und andere Autotracing-Software verwenden.",
      },
    ],
    related: [
      {
        href: "/guides/png-vs-svg",
        label: "PNG vs. SVG: Was ist der Unterschied?",
        description: "Der Formatunterschied, der Tracing überhaupt erst nötig macht.",
      },
      {
        href: "/guides/convert-logo-to-svg",
        label: "So konvertieren Sie ein Logo in SVG",
        description: "Wenden Sie all das Schritt für Schritt auf ein echtes Logo an.",
      },
      {
        href: "/use-cases/embroidery-digitizing",
        label: "PNG zu SVG für Stickerei",
        description: "Warum ein sauberes Vektor-Tracing für Stickdigitalisierungs-Software wichtig ist.",
      },
    ],
    relatedHeading: "Verwandte Anleitungen",
  },

  "convert-logo-to-svg": {
    slug: "guides/convert-logo-to-svg",
    keyword: "logo in svg umwandeln",
    title: "So konvertieren Sie ein Logo in SVG",
    metaDescription:
      "Konvertieren Sie ein PNG-Logo in vier Schritten in ein sauberes, skalierbares SVG. Scharfe Ergebnisse für Websites, Druck und Schneidedateien, ohne das Logo von Hand neu zu zeichnen.",
    h1: "So konvertieren Sie ein Logo in SVG",
    intro:
      "Ein Logo ist einer der besten Kandidaten für eine Vektorkonvertierung: flächige Farben, saubere Kanten und der echte Bedarf, vom Favicon bis zum Ladenschild zu skalieren, ohne jemals unscharf zu wirken.",
    breadcrumbLabel: "Logo in SVG umwandeln",
    sections: [
      {
        heading: "Warum Logos als SVG vorliegen sollten",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Ein Logo taucht überall auf — als 32px-Favicon, im Website-Header, auf einer Visitenkarte, als Fahrzeugfolie oder als lasergeschnittenes Schild. Ein einzelnes PNG kann nur in einem bestimmten Größenbereich scharf wirken; eine SVG-Version wirkt bei allen gleich scharf, weil sie mathematisch neu gezeichnet statt aus Pixeln gestreckt wird.",
              "SVG-Logos sind außerdem das, was die meisten Design- und Fertigungsprogramme erwarten. Wenn Sie Ihr Logo durch [Cricut Design Space](/use-cases/cricut) oder eine Laserschneide-Software schicken möchten, benötigen Sie Pfaddaten, kein Rasterbild.",
            ],
          },
        ],
      },
      {
        heading: "So konvertieren Sie Ihr Logo in 4 Schritten in SVG",
        blocks: [
          {
            kind: "steps",
            steps: [
              {
                title: "1. Beginnen Sie mit dem PNG in der höchsten verfügbaren Auflösung",
                body: "Das Tracing arbeitet mit den Details, die in der Quelldatei vorhanden sind, sodass ein höher aufgelöstes PNG dem Algorithmus sauberere Kanten liefert.",
              },
              {
                title: "2. Laden Sie es hoch und wählen Sie den Schwarz-Weiß-Modus",
                body: "Die meisten Logos bestehen aus ein oder zwei Farben, sodass der Schwarz-Weiß-Modus den saubersten Einzelpfad liefert. Verwenden Sie den Vollfarb-Modus nur, wenn Ihr Logo tatsächlich mehrere unterschiedliche Farben hat, die erhalten bleiben sollen.",
              },
              {
                title: "3. Passen Sie den Detailgrad an, bis Kanten scharf statt gezackt wirken",
                body: "Erhöhen Sie die Glättung leicht, wenn Sie raue, treppenartige Kanten an Kurven sehen; verringern Sie sie, wenn feine Details (wie kleine Schrift) verloren gehen.",
              },
              {
                title: "4. Herunterladen und in voller Größe prüfen",
                body: "Öffnen Sie das SVG und zoomen Sie hinein — ein gutes Tracing hält bei jeder Größe stand. Wirken Kanten unsauber, passen Sie die Einstellungen an und laden Sie erneut herunter.",
              },
            ],
          },
        ],
      },
      {
        heading: "Tipps für beste Ergebnisse bei Logos",
        blocks: [
          {
            kind: "list",
            items: [
              "Beginnen Sie mit einem PNG mit transparentem Hintergrund, wenn Sie das Logo über andere Farben oder Bilder legen möchten.",
              "Wenn Ihr Logo dünne Schrift enthält, halten Sie Detail/Glättung eher niedrig, damit kleine Buchstabenformen nicht ineinander verschwimmen.",
              "Nach der Konvertierung können Sie einzelne Knotenpunkte bereinigen oder Pfade in einem Vektoreditor weiter vereinfachen — siehe [wie Sie ein SVG nach der Konvertierung bearbeiten](/guides/edit-svg-after-conversion).",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Bleiben die Farben meines Logos exakt erhalten?",
        answer:
          "Im Vollfarb-Modus nähert sich die nachgezeichnete Palette Ihren Originalfarben sehr eng an. Für eine exakte Übereinstimmung mit Ihrer Markenfarbe können Sie die Füllfarbe einzelner Pfade anschließend in einem Vektoreditor anpassen.",
      },
      {
        question: "Was, wenn mein Logo einen Farbverlauf enthält?",
        answer:
          "Das Tracing nähert Farbverläufe als eine Reihe flächiger Farbbänder an, nicht als echten Verlauf. Bei einem Logo mit sanftem Farbverlauf empfiehlt es sich, den Verlauf nach dem Tracing der flächigen Formen manuell in einem Vektoreditor nachzubauen.",
      },
      {
        question: "Kann ich ein Logo mit Text darin konvertieren?",
        answer:
          "Ja, allerdings wird Text dabei zu umrissenen Formen statt zu bearbeitbaren Schriftzeichen. Wenn Sie die Originalschriftdatei besitzen, ist es oft sauberer, den Text separat neu zu erstellen und nur die grafische Bildmarke nachzuzeichnen.",
      },
    ],
    related: [
      {
        href: "/guides/how-image-tracing-works",
        label: "Wie funktioniert Bild-Tracing?",
        description: "Die Mechanik hinter der Konvertierung, die Sie gerade durchgeführt haben.",
      },
      {
        href: "/guides/edit-svg-after-conversion",
        label: "So bearbeiten Sie eine SVG-Datei nach der Konvertierung",
        description: "Bereinigen und passen Sie Ihr nachgezeichnetes Logo in Illustrator, Inkscape oder Figma an.",
      },
      {
        href: "/use-cases/laser-cutting",
        label: "PNG zu SVG für Laserschneiden",
        description: "Verwandeln Sie Ihr neues Logo-SVG in ein lasergeschnittenes Schild oder Paneel.",
      },
    ],
    relatedHeading: "Verwandte Anleitungen",
  },

  "edit-svg-after-conversion": {
    slug: "guides/edit-svg-after-conversion",
    keyword: "svg datei bearbeiten",
    title: "So bearbeiten Sie eine SVG-Datei nach der Konvertierung",
    metaDescription:
      "Erfahren Sie, wie Sie eine SVG-Datei in Illustrator, Inkscape (kostenlos) oder Figma öffnen und bearbeiten, sowie gängige Aufräumarbeiten nach dem Tracing eines PNGs in Vektorpfade.",
    h1: "So bearbeiten Sie eine SVG-Datei nach der Konvertierung",
    intro:
      "Ein nachgezeichnetes SVG ist ein großartiger Ausgangspunkt, aber oft möchten Sie einen Pfad bereinigen, ein paar Formen zusammenführen oder eine Farbe anpassen. Da die Ausgabe aus echten Vektordaten besteht, ist all das in jedem Vektoreditor unkompliziert.",
    breadcrumbLabel: "SVG-Datei bearbeiten",
    sections: [
      {
        heading: "Ihr SVG in Adobe Illustrator bearbeiten",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Öffnen Sie die SVG-Datei direkt über Datei > Öffnen — Illustrator importiert sie als native, bearbeitbare Pfade.",
              "Verwenden Sie das Direktauswahl-Werkzeug (A), um einzelne Ankerpunkte und Kurven auszuwählen und anzupassen.",
              "Verwenden Sie Objekt > Pfad > Vereinfachen, um die Anzahl der Ankerpunkte zu reduzieren, wenn eine Form zu komplex wirkt.",
              "Speichern oder exportieren Sie die Datei am Ende erneut als SVG, damit sie schlank bleibt.",
            ],
          },
        ],
      },
      {
        heading: "Ihr SVG in Inkscape bearbeiten (kostenlos)",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Inkscape ist ein kostenloser, quelloffener Vektoreditor, der SVG-Dateien nativ öffnet — eine gute kostenlose Alternative zu Illustrator.",
              "Verwenden Sie das Knoten-Werkzeug (N), um einzelne Punkte eines nachgezeichneten Pfads zu bearbeiten.",
              "Pfad > Vereinfachen (Strg+L) reduziert die Knotenanzahl bei einem übermäßig detaillierten Tracing.",
              "Verwenden Sie Bearbeiten > Suchen/Ersetzen oder den XML-Editor, um die Pfadstruktur bei Bedarf zu prüfen und zu bereinigen.",
            ],
          },
        ],
      },
      {
        heading: "Ihr SVG in Figma bearbeiten",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Ziehen Sie die SVG-Datei direkt auf eine Figma-Zeichenfläche oder verwenden Sie Datei > Importieren.",
              "Figma importiert jeden nachgezeichneten Farbbereich als eigene Vektorebene, die Sie einzeln auswählen, umfärben oder löschen können.",
              "Verwenden Sie das Stift-Werkzeug, um Ankerpunkte anzupassen, oder klicken Sie eine Ebene mit der rechten Maustaste an und wählen Sie „Reduzieren\", um überlappende Formen zusammenzuführen.",
            ],
          },
        ],
      },
      {
        heading: "Übliche Aufräumarbeiten nach dem Tracing",
        blocks: [
          {
            kind: "list",
            items: [
              "Pfade vereinfachen: Ankerpunkte einer Form reduzieren, die mit mehr Detail nachgezeichnet wurde, als Sie benötigen.",
              "Formen zusammenführen: benachbarte Bereiche gleicher Farbe zu einem einzigen Pfad kombinieren, für eine sauberere Datei.",
              "Umfärben: eine nachgezeichnete Näherungsfarbe gegen Ihre exakte Markenfarbe austauschen.",
              "Störende Formen entfernen: winzige Hintergrundartefakte löschen, die manchmal durch Rauschen im Quell-PNG entstehen.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Brauche ich kostenpflichtige Software, um ein SVG zu bearbeiten?",
        answer:
          "Nein. Inkscape ist kostenlos, quelloffen und vollständig in der Lage, nachgezeichnete SVG-Dateien zu bearbeiten — es ist eine übliche erste Wahl genau für diese Art der Nachbearbeitung.",
      },
      {
        question: "Warum hat mein nachgezeichnetes SVG mehr Pfade als erwartet?",
        answer:
          "Jeder eigenständige Farbbereich wird zu einem eigenen Pfad, sodass ein unruhigeres Quellbild oder eine höhere Farbanzahl mehr Pfade erzeugt. Sie können diese in jedem Vektoreditor zusammenführen oder vereinfachen.",
      },
      {
        question: "Kann ich ein SVG in einem einfachen Texteditor bearbeiten?",
        answer:
          "Ja — SVG ist im Kern XML-Text, sodass Sie es in jedem Texteditor öffnen und Pfaddaten oder Attribute von Hand bearbeiten können, auch wenn ein visueller Editor für die meisten Änderungen deutlich einfacher ist.",
      },
    ],
    related: [
      {
        href: "/guides/convert-logo-to-svg",
        label: "So konvertieren Sie ein Logo in SVG",
        description: "Erzielen Sie ein sauberes Logo-Tracing, bevor Sie mit der Bearbeitung beginnen.",
      },
      {
        href: "/guides/how-image-tracing-works",
        label: "Wie funktioniert Bild-Tracing?",
        description: "Verstehen Sie, warum nachgezeichnete Pfade so aussehen, wie sie aussehen, bevor Sie sie bearbeiten.",
      },
      {
        href: "/use-cases/silhouette-vinyl-cutting",
        label: "PNG zu SVG für Silhouette",
        description: "Bereinigen Sie ein nachgezeichnetes Design, bevor Sie es an Silhouette Studio senden.",
      },
    ],
    relatedHeading: "Verwandte Anleitungen",
  },

  "raster-vs-vector": {
    slug: "guides/raster-vs-vector",
    keyword: "raster vs vektorgrafik unterschied",
    title: "Raster- vs. Vektorgrafiken: Der komplette Leitfaden",
    metaDescription:
      "Raster- und Vektorgrafiken speichern Bilder auf völlig unterschiedliche Weise. Vergleichen Sie beide, sehen Sie, wann sich welche eignet, und erfahren Sie, wie man zwischen ihnen konvertiert.",
    h1: "Raster- vs. Vektorgrafiken: Der komplette Leitfaden",
    intro:
      "Jedes digitale Bild ist entweder Raster oder Vektor. Den Unterschied zu kennen — und zu wissen, welches Format eine Aufgabe tatsächlich erfordert — bewahrt Sie sowohl vor verschwommenen Logos als auch vor Fotos, die sich nicht bearbeiten lassen.",
    breadcrumbLabel: "Raster vs. Vektor",
    sections: [
      {
        heading: "Was ist ein Rasterbild?",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Rastergrafiken (PNG, JPEG, GIF, BMP) speichern ein Bild als festes Raster aus Pixeln, jedes mit eigener Farbe. Digitalkameras, Scanner und Screenshots erzeugen alle Rasterbilder, weil genau so Lichtsensoren und Bildschirme Bilder tatsächlich erfassen und darstellen — Pixel für Pixel.",
              "Der Nachteil ist die Auflösungsabhängigkeit: Ein Rasterbild wirkt nur bis zu seinen nativen Pixelabmessungen korrekt. Darüber hinaus muss die Software neue Pixelwerte erraten, um die Lücken zu füllen, weshalb vergrößerte Rasterbilder weich oder blockig wirken.",
            ],
          },
        ],
      },
      {
        heading: "Was ist ein Vektorbild?",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Vektorgrafiken (SVG, EPS, AI, PDF-als-Vektor) speichern ein Bild als mathematische Beschreibungen von Formen: Punkte, Linien und Kurven, jeweils mit definierter Füllung oder Kontur. Es gibt keine feste Auflösung, da die Formen jedes Mal neu berechnet werden, wenn das Bild angezeigt oder gedruckt wird.",
              "Das macht Vektoren ideal für alles, was skalieren muss — Logos, Icons, Typografie, technische Illustrationen und Schneidepfade für Maschinen wie Laserschneider oder Cricut- und Silhouette-Geräte.",
            ],
          },
        ],
      },
      {
        heading: "Raster vs. Vektor: Direkter Vergleich",
        blocks: [
          {
            kind: "table",
            headers: ["", "Raster", "Vektor"],
            rows: [
              ["Besteht aus", "Pixeln", "Punkten, Linien, Kurven"],
              ["Auflösung", "Fest an Quellabmessungen gebunden", "Auflösungsunabhängig"],
              ["Ideale Inhalte", "Fotos, komplexe Texturen", "Logos, Icons, Strichzeichnungen, Schneidepfade"],
              ["Typische Formate", "PNG, JPEG, GIF, BMP", "SVG, EPS, AI"],
              ["Bearbeitung", "Pixelebene (Photoshop, GIMP)", "Formebene (Illustrator, Inkscape, Figma)"],
            ],
          },
        ],
      },
      {
        heading: "Konvertieren zwischen Raster und Vektor",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Der Weg von Vektor zu Raster („Rasterisieren\") ist einfach: Die Formen werden in ein Pixelraster der gewünschten Größe gerendert — genau das passiert automatisch, wenn Sie ein PNG aus einem Designprogramm exportieren.",
              "Der umgekehrte Weg — Raster zu Vektor — erfordert Tracing: das Pixelraster analysieren, ähnliche Farben gruppieren und mathematische Kurven an die Grenzen zwischen ihnen anpassen. Eine vollständige Übersicht über diesen Prozess finden Sie unter [wie Bild-Tracing funktioniert](/guides/how-image-tracing-works), oder [konvertieren Sie ein PNG direkt in SVG](/).",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Kann ein Vektorbild jemals schlecht aussehen?",
        answer:
          "Ja, wenn Sie versuchen, feine fotografische Details in eine kleine Anzahl von Vektorformen zu pressen — das Ergebnis verliert dann realistische Textur und wirkt eher wie flächige, plakatartige Kunst.",
      },
      {
        question: "Ist SVG ein Raster- oder ein Vektorformat?",
        answer:
          "SVG ist ein Vektorformat — es speichert Pfade und Formen, keine einzelnen Pixel, weshalb es bei jeder Größe scharf bleibt.",
      },
      {
        question: "Welches Format sollte ich für ein Website-Favicon verwenden?",
        answer:
          "SVG eignet sich in der Regel am besten für ein Favicon, da es über den gesamten Größenbereich hinweg scharf bleibt, den Browser abfragen, auch wenn ein PNG-Fallback für ältere Browser üblich ist.",
      },
    ],
    related: [
      {
        href: "/guides/png-vs-svg",
        label: "PNG vs. SVG: Was ist der Unterschied?",
        description: "Eine engere, formatspezifische Version derselben Raster-vs.-Vektor-Frage.",
      },
      {
        href: "/guides/how-image-tracing-works",
        label: "Wie funktioniert Bild-Tracing?",
        description: "Der technische Prozess hinter der Umwandlung von Raster in Vektor.",
      },
      {
        href: "/use-cases/embroidery-digitizing",
        label: "PNG zu SVG für Stickerei",
        description: "Ein Praxisbeispiel dafür, warum Vektorpfade mehr zählen als Pixel.",
      },
    ],
    relatedHeading: "Verwandte Anleitungen",
  },
};
