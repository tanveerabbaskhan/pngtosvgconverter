import type { ContentPage } from "../types";

const siblingLinks = {
  cricut: { href: "/use-cases/cricut", label: "PNG zu SVG für Cricut" },
  laserCutting: { href: "/use-cases/laser-cutting", label: "PNG zu SVG für Laserschneiden" },
  silhouette: {
    href: "/use-cases/silhouette-vinyl-cutting",
    label: "PNG zu SVG für Silhouette",
  },
  embroidery: {
    href: "/use-cases/embroidery-digitizing",
    label: "PNG zu SVG für Stickerei",
  },
};

export const useCases: Record<string, ContentPage> = {
  cricut: {
    slug: "use-cases/cricut",
    keyword: "png zu svg für cricut",
    title: "So konvertieren Sie PNG in SVG für Cricut",
    metaDescription:
      "Verwandeln Sie ein PNG-Design in ein schnittbereites SVG für Cricut Design Space. Schritt-für-Schritt-Einstellungen, ein kleines Beispielprojekt und Tipps zur Fehlerbehebung.",
    h1: "So konvertieren Sie PNG in SVG für Cricut",
    intro:
      "Cricut Design Space arbeitet mit Schneidepfaden, nicht mit Pixeln — ein PNG-Design muss also erst zu einem SVG werden, bevor Ihre Cricut-Maschine es schneiden kann.",
    breadcrumbLabel: "Cricut",
    sections: [
      {
        heading: "Warum Cricut SVG statt PNG braucht",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Design Space kann technisch gesehen ein PNG importieren, behandelt es dabei aber als flaches Bild, das innerhalb der App gedruckt oder manuell nachgezeichnet werden muss — es weiß nicht automatisch, wo geschnitten werden soll. Ein SVG enthält bereits echte Pfaddaten, sodass Design Space diese Pfade direkt als Schnittlinien lesen kann, ganz ohne manuelles Nachzeichnen in Cricut selbst.",
            ],
          },
        ],
      },
      {
        heading: "Schritt für Schritt: PNG zu Cricut-bereitem SVG",
        blocks: [
          {
            kind: "steps",
            steps: [
              {
                title: "PNG hochladen",
                body: "Ziehen Sie Ihr Design in den [PNG-zu-SVG-Konverter](/) — ein PNG mit transparentem Hintergrund eignet sich für Schneideprojekte am besten.",
              },
              {
                title: "Einstellungen wählen",
                body: "Verwenden Sie den Schwarz-Weiß-Modus für einen einzigen sauberen Schnittpfad (die meisten Vinyl- und Papierprojekte), oder den Vollfarb-Modus, wenn Sie ein mehrschichtiges, mehrfarbiges Design erstellen. Lassen Sie den Schalter für transparenten Hintergrund aktiviert, damit nur Ihr Design geschnitten wird, nicht der Hintergrund.",
              },
              {
                title: "In Cricut Design Space importieren",
                body: "Laden Sie das SVG herunter, wählen Sie dann in Design Space Hochladen > Bild hochladen, wählen Sie Ihr SVG aus und speichern Sie es — es erscheint als schnittbereite Datei in Ihrer Bildbibliothek.",
              },
            ],
          },
        ],
      },
      {
        heading: "Kleines Projekt: Ein einfarbiger Vinylaufkleber",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Beginnen Sie mit einem kontrastreichen PNG (dunkles Design auf hellem oder transparentem Hintergrund) — Motive im Silhouetten-Stil eignen sich besonders gut.",
              "Zeichnen Sie es im Schwarz-Weiß-Modus mit niedrigem bis mittlerem Detailgrad nach, damit die Kanten sauber statt gezackt bleiben.",
              "Importieren Sie das SVG in Design Space, passen Sie die Größe an Ihr Projekt an und stellen Sie Material und Klingeneinstellungen für Ihr Vinyl ein.",
              "Schneiden Sie, entfernen Sie überschüssiges Vinyl rund um das Design und bringen Sie Transferfolie an, um den Aufkleber auf die endgültige Oberfläche zu übertragen.",
            ],
          },
        ],
      },
      {
        heading: "Fehlerbehebung bei häufigen Problemen",
        blocks: [
          {
            kind: "list",
            items: [
              "Winzige zusätzliche Formen nach dem Import: Das bedeutet meist, dass das Quell-PNG Hintergrundrauschen oder Kompressionsartefakte enthielt — erhöhen Sie die Detail-/Glättungseinstellung, bevor Sie erneut exportieren.",
              "Design Space zeigt getrennte Teile: Achten Sie bei einfarbigen Schnitten darauf, den Schwarz-Weiß- statt den Vollfarb-Modus verwendet zu haben, der für jede Farbe einen eigenen Pfad erzeugt.",
              "Schnittlinien wirken abgerundet, obwohl Sie scharfe Ecken wollten: Verringern Sie die Glättungseinstellung, damit Pfade den Originalkanten enger folgen.",
            ],
          },
        ],
      },
    ],
    howTo: {
      name: "PNG zu SVG für Cricut konvertieren",
      steps: [
        { name: "PNG hochladen", text: "Ziehen Sie Ihr Design in den PNG-zu-SVG-Konverter." },
        {
          name: "Einstellungen wählen",
          text: "Wählen Sie den Schwarz-Weiß- oder Vollfarb-Modus und lassen Sie den Hintergrund transparent.",
        },
        {
          name: "In Cricut Design Space importieren",
          text: "Laden Sie das SVG herunter und laden Sie es in Design Space über Hochladen > Bild hochladen hoch.",
        },
      ],
    },
    faqs: [
      {
        question: "Akzeptiert Cricut Design Space SVG-Dateien?",
        answer:
          "Ja — SVG ist neben den eigenen mehrschichtigen Projektdateien eines der Standardformate, die Design Space für schnittbereite Designs akzeptiert.",
      },
      {
        question: "Sollte ich für Cricut den Schwarz-Weiß- oder den Vollfarb-Modus verwenden?",
        answer:
          "Der Schwarz-Weiß-Modus eignet sich für die meisten einfarbigen Vinyl- oder Papierschnitte. Verwenden Sie den Vollfarb-Modus nur, wenn Sie bewusst ein mehrschichtiges, mehrfarbiges Design erstellen.",
      },
      {
        question: "Warum hat mein SVG ein Hintergrundrechteck, das ich nicht mitschneiden möchte?",
        answer:
          "Stellen Sie sicher, dass der Schalter für transparenten Hintergrund vor der Konvertierung aktiviert war — andernfalls behandelt das Tool den Hintergrund als deckende Farbe, die mit nachgezeichnet wird.",
      },
    ],
    related: [siblingLinks.laserCutting, siblingLinks.silhouette, siblingLinks.embroidery],
    relatedHeading: "Verwandte Anwendungsfälle",
  },

  "laser-cutting": {
    slug: "use-cases/laser-cutting",
    keyword: "png zu svg für laserschneiden",
    title: "So konvertieren Sie PNG in SVG für Laserschneiden",
    metaDescription:
      "Verwandeln Sie PNG-Grafiken in einen sauberen SVG-Schnittpfad für Laserschneide-Software. Einstellungshilfe, ein kleines Beispielprojekt und Lösungen für häufige Importprobleme beim Laserschneiden.",
    h1: "So konvertieren Sie PNG in SVG für Laserschneiden",
    intro:
      "Laserschneider und -graviermaschinen folgen Vektorpfaden, keinen Pixelrastern — die Umwandlung Ihrer Grafik in SVG ist der Schritt, der sie maschinenlesbar macht.",
    breadcrumbLabel: "Laserschneiden",
    sections: [
      {
        heading: "Warum Laserschneider SVG statt PNG brauchen",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Software für Laserschneiden und -gravur (LightBurn, LaserGRBL und die meisten herstellerspezifischen Programme) liest Vektorpfade, um genau zu wissen, wohin sich der Laserkopf bewegen und wo er schneiden soll. Ein PNG enthält überhaupt keine Pfadinformationen — für einen Laserschneider ist es nur als Rastergravurbild nutzbar, nicht als Schnittkontur.",
            ],
          },
        ],
      },
      {
        heading: "Schritt für Schritt: PNG zu laserbereitem SVG",
        blocks: [
          {
            kind: "steps",
            steps: [
              {
                title: "PNG hochladen",
                body: "Laden Sie Ihre Grafik in den [PNG-zu-SVG-Konverter](/) — eine saubere, kontrastreiche Quellgrafik ergibt die saubersten Schnittlinien.",
              },
              {
                title: "Einstellungen wählen",
                body: "Der Schwarz-Weiß-Modus eignet sich meist am besten für eine Schnittkontur; erhöhen Sie den Detailgrad für aufwendige Designs oder reduzieren Sie ihn für einen einfacheren, schneller zu schneidenden Pfad.",
              },
              {
                title: "In Ihre Laser-Software importieren",
                body: "Laden Sie das SVG herunter und importieren Sie es in LightBurn, LaserGRBL oder die Software Ihrer Maschine, und weisen Sie den jeweiligen Ebenen dann Schneide- bzw. Gravureinstellungen zu.",
              },
            ],
          },
        ],
      },
      {
        heading: "Kleines Projekt: Ein lasergeschnittenes Holzschild",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Beginnen Sie mit einem kontrastreichen PNG Ihres Textes oder Designs (dunkel auf hell oder umgekehrt).",
              "Zeichnen Sie es im Schwarz-Weiß-Modus nach und halten Sie den Detailgrad moderat, damit Kurven glatt bleiben, ohne übermäßig viele winzige Knotenpunkte, die den Laser verlangsamen.",
              "Importieren Sie es in Ihre Laser-Software, skalieren Sie es auf Ihre Materialgröße und legen Sie innenliegende Ausschnitte bei Bedarf auf eine eigene Ebene.",
              "Führen Sie zunächst einen Testschnitt an Restmaterial bei niedriger Leistung durch, um Pfad und Geschwindigkeitseinstellungen zu prüfen, bevor Sie Ihr endgültiges Werkstück schneiden.",
            ],
          },
        ],
      },
      {
        heading: "Fehlerbehebung bei häufigen Problemen",
        blocks: [
          {
            kind: "list",
            items: [
              "Der Pfad hat zu viele winzige Segmente und verlangsamt den Laser: Erhöhen Sie vor dem Export die Glättungs-/Detaileinstellung, damit das Tracing weniger, dafür längere Kurven verwendet.",
              "Innenliegende Löcher werden nicht korrekt ausgeschnitten: Prüfen Sie, ob Ihr Quell-PNG klare, geschlossene Innenformen hatte — verrauschte oder kantengeglättete Ränder können das Tracing verwirren.",
              "Das Design wirkt nach dem Import gespiegelt oder gedreht: Das liegt an einer Importeinstellung in Ihrem Laserprogramm, nicht am SVG selbst — prüfen Sie dessen Ausrichtungsoptionen.",
            ],
          },
        ],
      },
    ],
    howTo: {
      name: "PNG zu SVG für Laserschneiden konvertieren",
      steps: [
        { name: "PNG hochladen", text: "Laden Sie Ihre Grafik in den PNG-zu-SVG-Konverter." },
        {
          name: "Einstellungen wählen",
          text: "Verwenden Sie den Schwarz-Weiß-Modus und passen Sie den Detailgrad an die Komplexität Ihres Designs an.",
        },
        {
          name: "In Ihre Laser-Software importieren",
          text: "Laden Sie das SVG herunter und importieren Sie es in LightBurn, LaserGRBL oder eine ähnliche Software.",
        },
      ],
    },
    faqs: [
      {
        question: "Welche Laser-Software akzeptiert SVG-Dateien?",
        answer:
          "Die meiste Laserschneide-Software — darunter LightBurn, LaserGRBL und die mit den meisten Desktop-Laserschneidern gelieferte Software — importiert SVG direkt als Vektorschnittpfade.",
      },
      {
        question: "Sollte das SVG eine Füllung oder nur eine Kontur haben?",
        answer:
          "Für das Schneiden zählt nur die Pfadkontur — die Füllfarbe wird von den meisten Laserprogrammen ignoriert, die Konturen/Pfade auswerten, um die Schnittlinie zu bestimmen.",
      },
      {
        question: "Kann ich statt zu schneiden auch ein Foto lasergravieren?",
        answer:
          "Ja, allerdings wird beim Gravieren eines Fotos meist direkt das Rasterbild verwendet statt eines Vektor-Tracings — die Vektorkonvertierung ist speziell für Schnittpfade und Strichzeichnungen gedacht.",
      },
    ],
    related: [siblingLinks.cricut, siblingLinks.silhouette, siblingLinks.embroidery],
    relatedHeading: "Verwandte Anwendungsfälle",
  },

  "silhouette-vinyl-cutting": {
    slug: "use-cases/silhouette-vinyl-cutting",
    keyword: "png zu svg für silhouette",
    title: "So konvertieren Sie PNG in SVG für Silhouette",
    metaDescription:
      "Bereiten Sie ein PNG-Design als SVG für Silhouette Studio und den Vinylschnitt vor. Einstellungshilfe, ein Aufkleber-Projekt und Tipps zur Fehlerbehebung.",
    h1: "So konvertieren Sie PNG in SVG für Silhouette",
    intro:
      "Silhouette Studio schneidet entlang von Vektorpfaden, weshalb ein PNG-Design erst in SVG umgewandelt werden muss, bevor Ihre Silhouette-Maschine Vinyl, Cardstock oder Stoff schneiden kann.",
    breadcrumbLabel: "Silhouette",
    sections: [
      {
        heading: "Warum Silhouette Studio SVG statt PNG braucht",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Die Kernfunktion von Silhouette Studio besteht darin, Schnittlinien zu folgen — Vektorpfaden, die der Klinge genau sagen, wohin sie sich bewegen soll. Ein PNG enthält keine solchen Pfaddaten. Importiert man es direkt, erhält man nur ein druckbares Bild, kein schneidbares Design, es sei denn, man zeichnet es innerhalb von Silhouette Studio selbst nach (eine kostenpflichtige Funktion der Vollversion). Eine vorherige Konvertierung in SVG liefert kostenlos schnittbereite Pfade, in jeder Version.",
            ],
          },
        ],
      },
      {
        heading: "Schritt für Schritt: PNG zu Silhouette-bereitem SVG",
        blocks: [
          {
            kind: "steps",
            steps: [
              {
                title: "PNG hochladen",
                body: "Fügen Sie Ihr Design dem [PNG-zu-SVG-Konverter](/) hinzu — ein transparenter Hintergrund begrenzt den Schnittpfad auf Ihre Grafik.",
              },
              {
                title: "Einstellungen wählen",
                body: "Der Schwarz-Weiß-Modus eignet sich gut für die meisten einschichtigen Vinylaufkleber; der Vollfarb-Modus eignet sich für mehrschichtige Designs, bei denen jede Farbe zu einer eigenen Schnittebene wird.",
              },
              {
                title: "In Silhouette Studio importieren",
                body: "Laden Sie das SVG herunter und verwenden Sie in Silhouette Studio Datei > Öffnen oder Datei > Importieren — es wird als bearbeitbarer, schneidbarer Pfad geladen.",
              },
            ],
          },
        ],
      },
      {
        heading: "Kleines Projekt: Ein mehrschichtiger Vinylaufkleber",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Wählen Sie ein PNG-Design mit einer kleinen Anzahl unterschiedlicher Farben für ein sauberes mehrschichtiges Ergebnis.",
              "Zeichnen Sie es im Vollfarb-Modus nach und stellen Sie die Farbanzahl passend zur Anzahl der Vinylfarben ein, die Sie verwenden möchten.",
              "Importieren Sie es in Silhouette Studio und trennen Sie das Design mit den integrierten Werkzeugen der Software nach Farbe, wenn Sie jede Ebene aus anderem Vinyl schneiden möchten.",
              "Schneiden Sie jede Farbebene einzeln, entfernen Sie das überschüssige Material und legen Sie die Teile mithilfe von Transferfolie zum Anbringen übereinander.",
            ],
          },
        ],
      },
      {
        heading: "Fehlerbehebung bei häufigen Problemen",
        blocks: [
          {
            kind: "list",
            items: [
              "Das Design wird mit gezackten Kanten importiert: Erhöhen Sie vor dem Herunterladen die Glättungs-/Detaileinstellung, damit Kurven glatter angenähert werden.",
              "Zu viele einzelne Schnittpfade: Reduzieren Sie die Farbanzahl im Vollfarb-Modus, oder wechseln Sie zum Schwarz-Weiß-Modus, wenn Sie nur einen einfarbigen Schnitt benötigen.",
              "Kleine störende Punkte erscheinen in der Nähe des Designs: Das sind meist Rauschreste aus dem Quell-PNG — ein saubereres Quellbild mit weniger Kompressionsartefakten vermeidet das.",
            ],
          },
        ],
      },
    ],
    howTo: {
      name: "PNG zu SVG für Silhouette konvertieren",
      steps: [
        { name: "PNG hochladen", text: "Fügen Sie Ihr Design dem PNG-zu-SVG-Konverter hinzu." },
        {
          name: "Einstellungen wählen",
          text: "Wählen Sie je nach Projekt den Schwarz-Weiß- oder Vollfarb-Modus.",
        },
        {
          name: "In Silhouette Studio importieren",
          text: "Laden Sie das SVG herunter und öffnen Sie es in Silhouette Studio als schneidbaren Pfad.",
        },
      ],
    },
    faqs: [
      {
        question: "Brauche ich die kostenpflichtige Version von Silhouette Studio, um ein SVG zu verwenden?",
        answer:
          "Nein — der Import eines bereits vektorisierten SVGs funktioniert in der kostenlosen Version von Silhouette Studio. Das kostenpflichtige Upgrade wird hauptsächlich benötigt, wenn Sie Rasterbilder innerhalb der App selbst nachzeichnen möchten.",
      },
      {
        question: "Welcher Modus eignet sich am besten für einen einfarbigen Vinylaufkleber?",
        answer:
          "Der Schwarz-Weiß-Modus, da er einen sauberen Pfad statt separater Ebenen pro Farbe erzeugt.",
      },
      {
        question: "Kann Silhouette Studio das SVG nach dem Import bearbeiten?",
        answer:
          "Ja — nach dem Import besteht das Design aus echten bearbeitbaren Pfaden, sodass Sie es innerhalb von Silhouette Studio in der Größe ändern, umformen oder mit anderen Schnittlinien kombinieren können.",
      },
    ],
    related: [siblingLinks.cricut, siblingLinks.laserCutting, siblingLinks.embroidery],
    relatedHeading: "Verwandte Anwendungsfälle",
  },

  "embroidery-digitizing": {
    slug: "use-cases/embroidery-digitizing",
    keyword: "png zu svg für stickdigitalisierung",
    title: "So konvertieren Sie PNG in SVG für Stickdigitalisierung",
    metaDescription:
      "Verwandeln Sie ein PNG-Logo in eine saubere SVG-Kontur für Stickdigitalisierungs-Software. Schritt-für-Schritt-Einstellungen, ein Beispielprojekt und Fehlerbehebung.",
    h1: "So konvertieren Sie PNG in SVG für Stickdigitalisierung",
    intro:
      "Stickdigitalisierungs-Software erstellt Stichpfade aus Vektorkonturen, nicht aus Rasterpixeln — die vorherige Umwandlung eines PNG-Logos in SVG liefert Digitalisierern eine saubere Form, mit der sie arbeiten können.",
    breadcrumbLabel: "Stickerei",
    sections: [
      {
        heading: "Warum Stickdigitalisierung SVG statt PNG braucht",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Digitalisierungssoftware (wie Wilcom, Hatch oder Embrilliance) wandelt ein Design in eine Abfolge von Stichpfaden um — ein Prozess, der von sauberen Vektorkonturen ausgeht, nicht von einem Pixelraster. Speist man ein PNG direkt in die meisten Digitalisierungsabläufe ein, muss jemand die Kontur zunächst manuell nachzeichnen; startet man dagegen mit einem SVG, entfällt dieser manuelle Schritt vollständig.",
            ],
          },
        ],
      },
      {
        heading: "Schritt für Schritt: PNG zu stickereibereitem SVG",
        blocks: [
          {
            kind: "steps",
            steps: [
              {
                title: "PNG hochladen",
                body: "Fügen Sie Ihr Logo oder Design dem [PNG-zu-SVG-Konverter](/) hinzu — ein einfaches, kontrastreiches Ausgangsdesign lässt sich am saubersten digitalisieren.",
              },
              {
                title: "Einstellungen wählen",
                body: "Der Schwarz-Weiß-Modus eignet sich für Stickerei meist am besten, da Stichpfade sauberen Konturen folgen und keinen fotografischen Details; halten Sie den Detailgrad moderat, um übermäßig komplexe, schwer zu digitalisierende Pfade zu vermeiden.",
              },
              {
                title: "In Ihre Digitalisierungssoftware importieren",
                body: "Laden Sie das SVG herunter und importieren Sie es in Ihr Digitalisierungsprogramm als Grundkontur für den Aufbau von Stichpfaden und Ebenen.",
              },
            ],
          },
        ],
      },
      {
        heading: "Kleines Projekt: Ein einfaches Logo-Patch digitalisieren",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Beginnen Sie mit einer vereinfachten Version Ihres Logos — Stickerei hält feine Details schlecht, daher funktionieren kräftige, einfache Formen am besten.",
              "Zeichnen Sie es im Schwarz-Weiß-Modus mit niedrigem Detailgrad nach und bevorzugen Sie dabei weniger, glattere Pfade gegenüber pixelgenauen Kanten.",
              "Importieren Sie das SVG in Ihre Digitalisierungssoftware und weisen Sie jedem umrissenen Bereich Sticharten (Satinstich, Flächenfüllung, Steppstich) zu.",
              "Digitalisieren Sie und führen Sie einen Teststich an Reststoff durch, bevor Sie sich auf Ihr endgültiges Material festlegen.",
            ],
          },
        ],
      },
      {
        heading: "Fehlerbehebung bei häufigen Problemen",
        blocks: [
          {
            kind: "list",
            items: [
              "Die Kontur hat zu viele kleine Details, um sauber digitalisiert zu werden: Vereinfachen Sie das Quell-PNG oder erhöhen Sie die Glättungseinstellung, damit das Tracing weniger, kräftigere Formen erzeugt.",
              "Dünne Linien verschwinden oder verschmelzen: Sehr dünne Striche im Ausgangsbild können bei der Quantisierung verschwinden — verstärken Sie sie im Quell-PNG vor dem Tracing, falls sie wichtig sind.",
              "Farben lassen sich nicht sauber auf Garnfarben übertragen: Verwenden Sie den Vollfarb-Modus mit einer niedrigeren Farbanzahl, damit jeder Bereich vorhersehbarer auf eine einzelne Garnfarbe abgebildet wird.",
            ],
          },
        ],
      },
    ],
    howTo: {
      name: "PNG zu SVG für Stickdigitalisierung konvertieren",
      steps: [
        { name: "PNG hochladen", text: "Fügen Sie Ihr Logo dem PNG-zu-SVG-Konverter hinzu." },
        {
          name: "Einstellungen wählen",
          text: "Verwenden Sie den Schwarz-Weiß-Modus mit moderatem Detailgrad für saubere, digitalisierbare Konturen.",
        },
        {
          name: "In Ihre Digitalisierungssoftware importieren",
          text: "Laden Sie das SVG herunter und verwenden Sie es als Grundkontur in Ihrem Digitalisierungsprogramm.",
        },
      ],
    },
    faqs: [
      {
        question: "Wird ein SVG automatisch zu einer Stickdatei?",
        answer:
          "Nein — ein SVG liefert der Digitalisierungssoftware eine saubere Vektorkontur als Ausgangspunkt, aber eine Person oder Software muss weiterhin Sticharten zuweisen und die eigentliche Stichdatei erstellen (etwa als DST oder PES).",
      },
      {
        question: "Warum sollte ich den Vollfarb-Modus bei Stickerei vermeiden?",
        answer:
          "Stickerei funktioniert im Allgemeinen am besten mit einfachen, kräftigen Konturen. Der Vollfarb-Modus kann mehr Farbbereiche erzeugen, als für Garnwechsel praktikabel ist, daher ist der Schwarz-Weiß-Modus meist der bessere Ausgangspunkt.",
      },
      {
        question: "Welche Art von Ausgangsbild lässt sich am besten digitalisieren?",
        answer:
          "Kräftige, einfache Designs mit dicken Linien und wenigen kleinen Details lassen sich am saubersten digitalisieren — feine Details, die am Bildschirm gut aussehen, verschwinden beim Sticken oft oder wirken unsauber.",
      },
    ],
    related: [siblingLinks.cricut, siblingLinks.laserCutting, siblingLinks.silhouette],
    relatedHeading: "Verwandte Anwendungsfälle",
  },
};
