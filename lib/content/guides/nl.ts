import type { ContentPage } from "../types";

export const guides: Record<string, ContentPage> = {
  "png-vs-svg": {
    slug: "guides/png-vs-svg",
    keyword: "png vs svg verschil",
    title: "PNG vs SVG: Wat is het verschil?",
    metaDescription:
      "PNG en SVG lossen verschillende problemen op. Ontdek hoe raster-PNG's en vector-SVG's echt van elkaar verschillen, met een vergelijking naast elkaar en advies over wanneer je welke gebruikt.",
    h1: "PNG vs SVG: Wat is het verschil?",
    intro:
      "PNG en SVG zijn allebei veelgebruikte afbeeldingsformaten op het web, maar ze slaan een afbeelding op fundamenteel verschillende manieren op. Als je het verschil begrijpt, kies je makkelijker het juiste formaat voor een logo, icoon, foto of snijbestand.",
    breadcrumbLabel: "PNG vs SVG",
    sections: [
      {
        heading: "Wat is een PNG-bestand?",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Een PNG-bestand (Portable Network Graphics) is een rasterafbeelding: een vast raster van gekleurde pixels, vergelijkbaar met een JPEG. Elke pixel slaat zijn eigen kleurwaarde op, en het totale aantal pixels ligt vast op het moment dat het bestand wordt aangemaakt. PNG ondersteunt ook echte alphatransparantie, waardoor het het standaardformaat is voor iconen, screenshots en logo's met transparante achtergronden.",
              "Omdat een PNG simpelweg een raster van pixels is, betekent vergroten dat diezelfde pixels over een groter oppervlak worden uitgerekt — en juist dat veroorzaakt de wazigheid of zichtbare \"blokkerigheid\" wanneer je een PNG groter maakt dan de oorspronkelijke afmetingen.",
            ],
          },
        ],
      },
      {
        heading: "Wat is een SVG-bestand?",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Een SVG-bestand (Scalable Vector Graphics) beschrijft een afbeelding als een set wiskundige vormen en paden — lijnen, curves en vlakken — in plaats van losse pixels. Een cirkel wordt opgeslagen als \"een cirkel met deze straal\", niet als duizenden losse gekleurde stippen.",
              "Dat maakt SVG's oneindig schaalbaar: een browser of ontwerptool tekent de vormen elke keer opnieuw op de gewenste grootte, zodat een SVG-logo er op een telefoonicoon precies zo scherp uitziet als op een billboard. SVG's zijn bovendien gewone tekst (XML), dus ze zijn te bewerken in elke teksteditor of vectorontwerptool.",
            ],
          },
        ],
      },
      {
        heading: "PNG vs SVG: de belangrijkste verschillen",
        blocks: [
          {
            kind: "table",
            headers: ["", "PNG", "SVG"],
            rows: [
              ["Onderliggende data", "Raster van pixels", "Wiskundige paden & vormen"],
              ["Schalen", "Verliest kwaliteit boven native grootte", "Schaalt naar elke grootte zonder kwaliteitsverlies"],
              ["Bestandsgrootte", "Groter voor eenvoudige afbeeldingen", "Meestal kleiner voor logo's/iconen"],
              ["Bewerkbaarheid", "Alleen pixelbewerking (Photoshop e.d.)", "Vormen zijn direct bewerkbaar (Illustrator, Inkscape)"],
              ["Transparantie", "Ondersteund (alphakanaal)", "Ondersteund (vulling/dekking)"],
              ["Ideaal voor", "Foto's, complexe texturen", "Logo's, iconen, illustraties, snijbestanden"],
            ],
          },
        ],
      },
      {
        heading: "Wanneer gebruik je PNG en wanneer SVG?",
        blocks: [
          {
            kind: "list",
            intro: "Als vuistregel geldt:",
            items: [
              "Gebruik SVG voor logo's, iconen, lijntekeningen en alles wat vergroot of gesneden moet worden — inclusief bestanden voor [Cricut-projecten](/use-cases/cricut) en lasersnijders.",
              "Gebruik PNG voor foto's en afbeeldingen met complexe kleurverlopen of texturen die niet goed te herleiden zijn tot effen vormen.",
              "Heb je al een PNG-logo of -icoon en heb je een SVG nodig, dan hoef je het niet handmatig na te tekenen — je kunt het automatisch tracen. Bekijk [hoe image tracing werkt](/guides/how-image-tracing-works) voor de details.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Kan ik een PNG-bestand gewoon hernoemen naar .svg?",
        answer:
          "Nee. Het hernoemen van de bestandsextensie verandert de onderliggende data niet — het pixelraster van een PNG moet worden getraced naar vectorpaden om echt een SVG te worden.",
      },
      {
        question: "Is SVG altijd beter dan PNG?",
        answer:
          "Niet voor elke toepassing. SVG is beter voor schaalbare afbeeldingen zoals logo's en iconen, maar PNG (of JPEG) is nog steeds de juiste keuze voor foto's, waarbij een vectortrace realistisch detail zou verliezen.",
      },
      {
        question: "Ondersteunen browsers SVG op dezelfde manier als PNG?",
        answer:
          "Ja. Elke moderne browser rendert SVG native, en het kan overal worden gebruikt waar een <img>-tag of CSS background-image werkt.",
      },
    ],
    related: [
      {
        href: "/guides/raster-vs-vector",
        label: "Raster vs Vector Graphics: De complete gids",
        description: "Een dieper inzicht in het verschil tussen raster en vector, verder dan alleen PNG en SVG.",
      },
      {
        href: "/use-cases/cricut",
        label: "PNG naar SVG voor Cricut",
        description: "Zet een PNG-ontwerp om in een snijklare SVG voor Cricut Design Space.",
      },
    ],
    relatedHeading: "Gerelateerde gidsen",
  },

  "how-image-tracing-works": {
    slug: "guides/how-image-tracing-works",
    keyword: "hoe werkt image tracing",
    title: "Hoe werkt image tracing?",
    metaDescription:
      "Een heldere uitleg over hoe image tracing een raster-PNG omzet in vector SVG-paden — kleurdetectie, randdetectie en curve fitting.",
    h1: "Hoe werkt image tracing?",
    intro:
      "Image tracing (ook wel vectorisatie of autotracing genoemd) is het proces waarmee een converter een pixelgebaseerde afbeelding omzet in een set vectorpaden. Dit is wat er achter de schermen echt gebeurt.",
    breadcrumbLabel: "Hoe image tracing werkt",
    sections: [
      {
        heading: "Van pixels naar paden: het grote plaatje",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Een tracing-algoritme bekijkt een rasterafbeelding gebied per gebied van gelijke kleur, bepaalt de grens tussen dat gebied en zijn buren, en beschrijft die grens vervolgens als een vloeiende wiskundige curve in plaats van een trap van losse pixels. Herhaal dit voor elk apart kleurgebied, en je krijgt een complete vectorversie van de originele afbeelding.",
            ],
          },
        ],
      },
      {
        heading: "Stap 1: Kleurdetectie & kwantisatie",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "De meeste bronafbeeldingen bevatten veel meer kleuren dan je als aparte vectorvormen zou willen — foto's alleen al kunnen miljoenen unieke pixelwaarden bevatten door compressieruis en kleurverlopen. Kwantisatie groepeert vergelijkbare kleuren in een kleiner, vast palet (je bepaalt zelf het aantal kleuren met een instelling), zodat de afbeelding wordt vereenvoudigd tot schone, aparte gebieden voordat het tracen begint.",
            ],
          },
        ],
      },
      {
        heading: "Stap 2: Randdetectie",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Zodra elke pixel aan een kleur uit het palet is toegewezen, scant het algoritme de afbeelding om te vinden waar het ene kleurgebied eindigt en het andere begint. Deze grenzen worden eerst pixel voor pixel getraced, wat een gekartelde omtrek oplevert die de trapvormige randen van het originele rasterraster volgt.",
            ],
          },
        ],
      },
      {
        heading: "Stap 3: Padopbouw & curve fitting",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "De gekartelde pixelomtrek wordt vervolgens gladgestreken tot een klein aantal rechte lijnen en kwadratische curves die de omtrek benaderen binnen een foutmarge — dit is de instelling \"detail\" of \"gladstrijken\" in een tracing-tool. Een lagere drempelwaarde volgt de originele pixelranden strakker (meer knooppunten, meer detail); een hogere drempelwaarde levert minder, vloeiendere curves op.",
            ],
          },
        ],
      },
      {
        heading: "Zwart-wit versus volledige kleur tracing",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "De modus Zwart-wit reduceert de hele afbeelding tot slechts twee kleuren (voor- en achtergrond) voordat het tracen begint, wat één schoon pad oplevert — ideaal voor [logo's](/guides/convert-logo-to-svg), lijntekeningen en snijbestanden voor vinyl of lasersnijden. De modus Volledige kleur behoudt meerdere kleuren uit het palet en traceert elke kleur als een eigen laag, wat je wilt voor foto's of illustraties met meerdere kleuren.",
            ],
          },
        ],
      },
      {
        heading: "Wat traceert goed (en wat niet)",
        blocks: [
          {
            kind: "list",
            intro: "Tracen werkt het beste bij:",
            items: [
              "Logo's, iconen en badges met effen kleuren — weinig kleuren, scherpe randen",
              "Lijntekeningen en schetsen — hoog contrast tussen inkt en achtergrond",
              "Eenvoudige illustraties met duidelijk gescheiden kleurgebieden",
            ],
          },
          {
            kind: "list",
            intro: "Tracen is lastiger bij:",
            items: [
              "Foto's met zachte kleurverlopen of veel fijne textuur (haar, gras, stof)",
              "Afbeeldingen met erg weinig contrast, waarbij voor- en achtergrond moeilijk te scheiden zijn",
              "Zwaar gecomprimeerde JPEG's die opnieuw als PNG zijn opgeslagen, wat kleurruis introduceert die kwantisatie moet gladstrijken",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Levert tracen een pixelperfecte kopie van mijn afbeelding op?",
        answer:
          "Nee — tracen benadert je afbeelding met een beperkt aantal kleuren en vloeiende curves, waardoor heel fijn detail wordt vereenvoudigd. Bij logo's en lijntekeningen valt dit meestal niet op; bij foto's levert het een meer gestileerd, poster-achtig resultaat op.",
      },
      {
        question: "Waarom ziet mijn getracete SVG er blokkerig uit als ik het detail te laag zet?",
        answer:
          "Een lage instelling voor detail/gladstrijken houdt het pad strak tegen de originele pixelranden aan, wat er gekarteld uit kan zien bij gebogen vormen. Meer gladstrijken laat het algoritme minder, langere curves gebruiken voor een schoner resultaat.",
      },
      {
        question: "Is dit dezelfde technologie als Adobe's Image Trace?",
        answer:
          "Het onderliggende idee — kleuren kwantiseren, randen detecteren, curves fitten — is dezelfde algemene aanpak die tools zoals Adobe Illustrator's Image Trace en andere autotracing-software gebruiken.",
      },
    ],
    related: [
      {
        href: "/guides/png-vs-svg",
        label: "PNG vs SVG: Wat is het verschil?",
        description: "Het verschil in formaat dat tracen om te beginnen nodig maakt.",
      },
      {
        href: "/guides/convert-logo-to-svg",
        label: "Hoe zet je een logo om naar SVG",
        description: "Pas alles hierboven stap voor stap toe op een echt logo.",
      },
      {
        href: "/use-cases/embroidery-digitizing",
        label: "PNG naar SVG voor borduurwerk",
        description: "Waarom een schone vectortrace belangrijk is voor borduurdigitalisatiesoftware.",
      },
    ],
    relatedHeading: "Gerelateerde gidsen",
  },

  "convert-logo-to-svg": {
    slug: "guides/convert-logo-to-svg",
    keyword: "logo omzetten naar svg",
    title: "Hoe zet je een logo om naar SVG",
    metaDescription:
      "Zet een PNG-logo in vier stappen om naar een schone, schaalbare SVG. Krijg scherpe resultaten voor websites, drukwerk en snijbestanden zonder het logo opnieuw te tekenen.",
    h1: "Hoe zet je een logo om naar SVG",
    intro:
      "Een logo is een van de beste kandidaten voor vectorconversie: effen kleuren, schone randen en een echte noodzaak om te schalen van een favicon tot een gevelbord, zonder ooit wazig te worden.",
    breadcrumbLabel: "Logo omzetten naar SVG",
    sections: [
      {
        heading: "Waarom logo's SVG's moeten zijn",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Een logo komt overal voor — een favicon van 32px, een website-header, een visitekaartje, een autobelettering, een lasergesneden bord. Eén enkele PNG kan er maar in één grootterange scherp uitzien; een SVG-versie is bij elke grootte even scherp, omdat hij opnieuw wordt getekend vanuit wiskunde in plaats van uitgerekt vanuit pixels.",
              "SVG-logo's zijn ook wat de meeste ontwerp- en productiesoftware verwacht. Als je je logo door [Cricut Design Space](/use-cases/cricut) of lasersnijsoftware wilt halen, heb je paddata nodig, geen rasterafbeelding.",
            ],
          },
        ],
      },
      {
        heading: "Zo zet je je logo in 4 stappen om naar SVG",
        blocks: [
          {
            kind: "steps",
            steps: [
              {
                title: "1. Begin met de PNG in de hoogste resolutie die je hebt",
                body: "Tracen werkt met het detail dat aanwezig is in het bronbestand, dus een PNG met een hogere resolutie geeft het algoritme schonere randen om mee te werken.",
              },
              {
                title: "2. Upload het bestand en kies de modus Zwart-wit",
                body: "De meeste logo's bestaan uit één of twee kleuren, dus de modus Zwart-wit levert het schoonste, ene pad op. Gebruik de modus Volledige kleur alleen als je logo echt meerdere aparte kleuren heeft die je wilt behouden.",
              },
              {
                title: "3. Pas het detail aan tot randen er scherp, niet gekarteld uitzien",
                body: "Verhoog het gladstrijken iets als je ruwe, trapvormige randen op curves ziet; verlaag het als fijne details (zoals kleine tekst) verloren gaan.",
              },
              {
                title: "4. Download en controleer op ware grootte",
                body: "Open de SVG en zoom in — een goede trace blijft er op elke grootte goed uitzien. Zien randen er niet goed uit, pas dan de instellingen aan en download opnieuw.",
              },
            ],
          },
        ],
      },
      {
        heading: "Tips voor het beste resultaat met logo's",
        blocks: [
          {
            kind: "list",
            items: [
              "Begin met een PNG met transparante achtergrond als je van plan bent het logo over andere kleuren of afbeeldingen te plaatsen.",
              "Heeft je logo dunne tekst, houd het detail/gladstrijken dan aan de lage kant zodat kleine lettervormen niet in elkaar overlopen.",
              "Na conversie kun je losse knooppunten opschonen of paden verder vereenvoudigen in een vectoreditor — zie [hoe je een SVG bewerkt na conversie](/guides/edit-svg-after-conversion).",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Blijven de kleuren van mijn logo precies behouden?",
        answer:
          "In de modus Volledige kleur benadert het getracete palet je originele kleuren nauwkeurig. Voor een exacte match met je merkkleur kun je achteraf de vulkleur van individuele paden aanpassen in een vectoreditor.",
      },
      {
        question: "Wat als mijn logo een kleurverloop heeft?",
        answer:
          "Tracen benadert kleurverlopen als een reeks effen kleurbanden in plaats van een echt verloop. Heeft je logo een zacht kleurverloop, overweeg dan om dat verloop na het tracen van de effen vormen handmatig opnieuw te maken in een vectoreditor.",
      },
      {
        question: "Kan ik een logo met tekst erin omzetten?",
        answer:
          "Ja, al wordt tekst omgezet in omlijnde vormen in plaats van bewerkbare lettertekens. Heb je het originele lettertypebestand, dan is het vaak netter om de tekst apart opnieuw te maken en alleen het grafische beeldmerk te tracen.",
      },
    ],
    related: [
      {
        href: "/guides/how-image-tracing-works",
        label: "Hoe werkt image tracing?",
        description: "De techniek achter de conversie die je zojuist hebt uitgevoerd.",
      },
      {
        href: "/guides/edit-svg-after-conversion",
        label: "Hoe bewerk je een SVG-bestand na conversie",
        description: "Werk je getracete logo bij en pas het aan in Illustrator, Inkscape of Figma.",
      },
      {
        href: "/use-cases/laser-cutting",
        label: "PNG naar SVG voor lasersnijden",
        description: "Zet je nieuwe logo-SVG om in een lasergesneden bord of paneel.",
      },
    ],
    relatedHeading: "Gerelateerde gidsen",
  },

  "edit-svg-after-conversion": {
    slug: "guides/edit-svg-after-conversion",
    keyword: "svg bestand bewerken",
    title: "Hoe bewerk je een SVG-bestand na conversie",
    metaDescription:
      "Leer hoe je een SVG-bestand opent en bewerkt in Illustrator, Inkscape (gratis) of Figma, plus veelvoorkomende opschoontaken na het tracen van een PNG naar vectorpaden.",
    h1: "Hoe bewerk je een SVG-bestand na conversie",
    intro:
      "Een getracete SVG is een geweldig startpunt, maar vaak wil je een pad opschonen, een paar vormen samenvoegen of een kleur aanpassen. Omdat de output echte vectordata is, is dat allemaal eenvoudig in elke vectoreditor.",
    breadcrumbLabel: "SVG-bestand bewerken",
    sections: [
      {
        heading: "Je SVG bewerken in Adobe Illustrator",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Open het SVG-bestand direct via Bestand > Openen — Illustrator importeert het als native, bewerkbare paden.",
              "Gebruik de Directe selectie-tool (A) om individuele ankerpunten en curves te selecteren en aan te passen.",
              "Gebruik Object > Pad > Vereenvoudigen om het aantal ankerpunten te verminderen als een vorm er te complex uitziet.",
              "Sla het bestand opnieuw op of exporteer het als SVG wanneer je klaar bent, om het bestand licht te houden.",
            ],
          },
        ],
      },
      {
        heading: "Je SVG bewerken in Inkscape (gratis)",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Inkscape is een gratis, open-source vectoreditor die SVG-bestanden native opent — een goed gratis alternatief voor Illustrator.",
              "Gebruik de Knooptool (N) om individuele punten op een getraced pad te bewerken.",
              "Pad > Vereenvoudigen (Ctrl+L) vermindert het aantal knooppunten bij een te gedetailleerde trace.",
              "Gebruik Bewerken > Zoeken/Vervangen of de XML-editor om de padstructuur indien nodig te inspecteren en op te schonen.",
            ],
          },
        ],
      },
      {
        heading: "Je SVG bewerken in Figma",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Sleep het SVG-bestand direct op een Figma-canvas, of gebruik Bestand > Importeren.",
              "Figma importeert elk getraced kleurgebied als een aparte vectorlaag, die je afzonderlijk kunt selecteren, van kleur veranderen of verwijderen.",
              "Gebruik de Pen-tool om ankerpunten aan te passen, of klik met de rechtermuisknop op een laag en kies Platslaan om overlappende vormen samen te voegen.",
            ],
          },
        ],
      },
      {
        heading: "Veelvoorkomende opschoontaken na het tracen",
        blocks: [
          {
            kind: "list",
            items: [
              "Paden vereenvoudigen: het aantal ankerpunten verminderen op een vorm die met meer detail is getraced dan je nodig hebt.",
              "Vormen samenvoegen: aangrenzende gebieden met dezelfde kleur combineren tot één pad voor een schoner bestand.",
              "Kleur aanpassen: een getracete benaderende kleur vervangen door je exacte merkkleur.",
              "Losse vormen verwijderen: kleine achtergrondartefacten wissen die soms ontstaan door ruis in de bron-PNG.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Heb ik betaalde software nodig om een SVG te bewerken?",
        answer:
          "Nee. Inkscape is gratis, open-source en volledig in staat om getracete SVG-bestanden te bewerken — het is vaak de eerste keuze voor precies dit soort opschoonwerk.",
      },
      {
        question: "Waarom heeft mijn getracete SVG meer paden dan verwacht?",
        answer:
          "Elk apart kleurgebied wordt een eigen pad, dus een drukkere bronafbeelding of een hoger aantal kleuren levert meer paden op. Je kunt ze samenvoegen of vereenvoudigen in elke vectoreditor.",
      },
      {
        question: "Kan ik een SVG bewerken in een gewone teksteditor?",
        answer:
          "Ja — SVG is onder de motorkap gewoon XML-tekst, dus je kunt het openen in elke teksteditor en paddata of attributen handmatig bewerken, al is een visuele editor voor de meeste aanpassingen veel eenvoudiger.",
      },
    ],
    related: [
      {
        href: "/guides/convert-logo-to-svg",
        label: "Hoe zet je een logo om naar SVG",
        description: "Krijg een schone logotrace voordat je begint met bewerken.",
      },
      {
        href: "/guides/how-image-tracing-works",
        label: "Hoe werkt image tracing?",
        description: "Begrijp waarom getracete paden eruitzien zoals ze eruitzien, voordat je ze bewerkt.",
      },
      {
        href: "/use-cases/silhouette-vinyl-cutting",
        label: "PNG naar SVG voor Silhouette",
        description: "Werk een getraced ontwerp bij voordat je het naar Silhouette Studio stuurt.",
      },
    ],
    relatedHeading: "Gerelateerde gidsen",
  },

  "raster-vs-vector": {
    slug: "guides/raster-vs-vector",
    keyword: "raster vs vector afbeeldingen",
    title: "Raster vs Vector Graphics: De complete gids",
    metaDescription:
      "Raster- en vectorafbeeldingen slaan afbeeldingen op compleet verschillende manieren op. Vergelijk de twee, ontdek wanneer elk uitblinkt, en leer hoe je ertussen converteert.",
    h1: "Raster vs Vector Graphics: De complete gids",
    intro:
      "Elke digitale afbeelding is óf raster óf vector. Het verschil kennen — en weten welke een taak daadwerkelijk vereist — bespaart je zowel wazige logo's als foto's die onmogelijk te bewerken zijn.",
    breadcrumbLabel: "Raster vs vector",
    sections: [
      {
        heading: "Wat is een rasterafbeelding?",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Rasterafbeeldingen (PNG, JPEG, GIF, BMP) slaan een afbeelding op als een vast raster van pixels, elk met zijn eigen kleur. Digitale camera's, scanners en screenshots produceren allemaal rasterafbeeldingen, omdat dat is hoe lichtsensoren en schermen afbeeldingen daadwerkelijk vastleggen en weergeven — pixel voor pixel.",
              "De keerzijde is resolutieafhankelijkheid: een rasterafbeelding ziet er alleen goed uit tot aan zijn oorspronkelijke pixelafmetingen. Daarboven moet de software nieuwe pixelwaarden raden om de gaten op te vullen, wat verklaart waarom vergrote rasterafbeeldingen er zacht of blokkerig uitzien.",
            ],
          },
        ],
      },
      {
        heading: "Wat is een vectorafbeelding?",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Vectorafbeeldingen (SVG, EPS, AI, PDF-als-vector) slaan een afbeelding op als wiskundige beschrijvingen van vormen: punten, lijnen en curves, elk met een vaste vulling of lijndikte. Er is geen vaste resolutie, omdat de vormen elke keer opnieuw worden berekend wanneer de afbeelding wordt weergegeven of afgedrukt.",
              "Dit maakt vectoren ideaal voor alles wat moet schalen — logo's, iconen, typografie, technische illustraties en snijpaden voor machines zoals lasersnijders of Cricut- en Silhouette-machines.",
            ],
          },
        ],
      },
      {
        heading: "Raster vs vector: vergelijking naast elkaar",
        blocks: [
          {
            kind: "table",
            headers: ["", "Raster", "Vector"],
            rows: [
              ["Bestaat uit", "Pixels", "Punten, lijnen, curves"],
              ["Resolutie", "Vast aan bronafmetingen", "Resolutie-onafhankelijk"],
              ["Ideale content", "Foto's, complexe texturen", "Logo's, iconen, lijntekeningen, snijpaden"],
              ["Gangbare formaten", "PNG, JPEG, GIF, BMP", "SVG, EPS, AI"],
              ["Bewerken", "Op pixelniveau (Photoshop, GIMP)", "Op vormniveau (Illustrator, Inkscape, Figma)"],
            ],
          },
        ],
      },
      {
        heading: "Converteren tussen raster en vector",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Van vector naar raster gaan (\"rasteriseren\") is eenvoudig: de vormen worden gerenderd naar een pixelraster op de gewenste grootte, wat automatisch gebeurt wanneer je een PNG exporteert vanuit een ontwerptool.",
              "De andere kant op — raster naar vector — vereist tracen: het pixelraster analyseren, vergelijkbare kleuren groeperen en wiskundige curves fitten op de grenzen daartussen. Bekijk [hoe image tracing werkt](/guides/how-image-tracing-works) voor een volledige uitleg van dat proces, of [zet direct een PNG om naar SVG](/).",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Kan een vectorafbeelding er ooit slecht uitzien?",
        answer:
          "Ja, als je probeert fijn fotografisch detail te persen in een klein aantal vectorvormen — het resultaat verliest realistische textuur en lijkt meer op vlakke, poster-achtige kunst.",
      },
      {
        question: "Is SVG een raster- of vectorformaat?",
        answer:
          "SVG is een vectorformaat — het slaat paden en vormen op, geen losse pixels, waardoor het op elke grootte scherp blijft.",
      },
      {
        question: "Welk formaat moet ik gebruiken voor een favicon van een website?",
        answer:
          "SVG is over het algemeen het beste voor een favicon, omdat het scherp blijft over het hele bereik van groottes die browsers opvragen, al is een PNG-fallback gangbaar voor ondersteuning van oudere browsers.",
      },
    ],
    related: [
      {
        href: "/guides/png-vs-svg",
        label: "PNG vs SVG: Wat is het verschil?",
        description: "Een specifiekere, formaatgerichte versie van deze zelfde raster-versus-vectorvraag.",
      },
      {
        href: "/guides/how-image-tracing-works",
        label: "Hoe werkt image tracing?",
        description: "Het technische proces achter het omzetten van raster naar vector.",
      },
      {
        href: "/use-cases/embroidery-digitizing",
        label: "PNG naar SVG voor borduurwerk",
        description: "Eén praktijkvoorbeeld waarin vectorpaden meer tellen dan pixels.",
      },
    ],
    relatedHeading: "Gerelateerde gidsen",
  },
};
