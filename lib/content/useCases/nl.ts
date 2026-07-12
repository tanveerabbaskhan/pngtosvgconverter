import type { ContentPage } from "../types";

const siblingLinks = {
  cricut: { href: "/use-cases/cricut", label: "PNG naar SVG voor Cricut" },
  laserCutting: { href: "/use-cases/laser-cutting", label: "PNG naar SVG voor lasersnijden" },
  silhouette: {
    href: "/use-cases/silhouette-vinyl-cutting",
    label: "PNG naar SVG voor Silhouette",
  },
  embroidery: {
    href: "/use-cases/embroidery-digitizing",
    label: "PNG naar SVG voor borduurwerk",
  },
};

export const useCases: Record<string, ContentPage> = {
  cricut: {
    slug: "use-cases/cricut",
    keyword: "png naar svg voor cricut",
    title: "Hoe zet je PNG om naar SVG voor Cricut",
    metaDescription:
      "Zet een PNG-ontwerp om in een snijklare SVG voor Cricut Design Space. Stap-voor-stap instellingen, een minipro­jectuitleg en tips voor probleemoplossing.",
    h1: "Hoe zet je PNG om naar SVG voor Cricut",
    intro:
      "Cricut Design Space werkt met snijpaden, niet met pixels — dus een PNG-ontwerp moet eerst een SVG worden voordat je Cricut-machine het kan snijden.",
    breadcrumbLabel: "Cricut",
    sections: [
      {
        heading: "Waarom Cricut SVG nodig heeft, geen PNG",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Design Space kan technisch gezien een PNG importeren, maar behandelt die dan als een platte afbeelding om te printen of handmatig binnen de app te tracen — het weet niet automatisch waar gesneden moet worden. Een SVG bevat al echte paddata, waardoor Design Space die paden direct kan lezen als snijlijnen, zonder handmatig tracen in Cricut zelf.",
            ],
          },
        ],
      },
      {
        heading: "Stap voor stap: van PNG naar Cricut-klare SVG",
        blocks: [
          {
            kind: "steps",
            steps: [
              {
                title: "Upload je PNG",
                body: "Sleep je ontwerp naar de [PNG naar SVG-converter](/) — een PNG met een transparante achtergrond werkt het beste voor snijprojecten.",
              },
              {
                title: "Kies je instellingen",
                body: "Gebruik de modus Zwart-wit voor één schoon snijpad (de meeste vinyl- en papierprojecten), of de modus Volledige kleur als je een gelaagd ontwerp met meerdere kleuren maakt. Laat de schakelaar voor transparante achtergrond aan staan, zodat alleen je ontwerp gesneden wordt, niet de achtergrond.",
              },
              {
                title: "Importeer in Cricut Design Space",
                body: "Download de SVG en kies in Design Space Upload > Afbeelding uploaden, selecteer je SVG en sla hem op — hij verschijnt dan in je afbeeldingenbibliotheek als een snijklaar bestand.",
              },
            ],
          },
        ],
      },
      {
        heading: "Miniproject: een eenkleurige vinyl decal",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Begin met een PNG met hoog contrast (donker ontwerp op een lichte of transparante achtergrond) — silhouet-achtige kunst werkt bijzonder goed.",
              "Traceer hem in de modus Zwart-wit met het detail op laag tot gemiddeld, zodat randen schoon blijven in plaats van gekarteld.",
              "Importeer de SVG in Design Space, pas de grootte aan voor je project en stel het materiaal en de mesinstellingen in voor je vinyl.",
              "Snijd, verwijder het overtollige vinyl rond het ontwerp en breng transferfolie aan om de decal naar zijn uiteindelijke oppervlak te verplaatsen.",
            ],
          },
        ],
      },
      {
        heading: "Veelvoorkomende problemen oplossen",
        blocks: [
          {
            kind: "list",
            items: [
              "Extra kleine vormpjes na het importeren: dit betekent meestal dat de bron-PNG achtergrondruis of compressieartefacten had — probeer de instelling voor detail/gladstrijken te verhogen voordat je opnieuw exporteert.",
              "Design Space toont losse onderdelen: zorg er bij een enkele snede in vinyl voor dat je de modus Zwart-wit gebruikt in plaats van Volledige kleur, wat per kleur een apart pad maakt.",
              "Snijlijnen zien er afgerond uit terwijl je scherpe hoeken wilde: verlaag de instelling voor gladstrijken zodat paden dichter bij de originele randen blijven.",
            ],
          },
        ],
      },
    ],
    howTo: {
      name: "Converteer PNG naar SVG voor Cricut",
      steps: [
        { name: "Upload je PNG", text: "Sleep je ontwerp naar de PNG naar SVG-converter." },
        {
          name: "Kies je instellingen",
          text: "Selecteer de modus Zwart-wit of Volledige kleur en houd de achtergrond transparant.",
        },
        {
          name: "Importeer in Cricut Design Space",
          text: "Download de SVG en upload hem in Design Space via Upload > Afbeelding uploaden.",
        },
      ],
    },
    faqs: [
      {
        question: "Accepteert Cricut Design Space SVG-bestanden?",
        answer:
          "Ja — SVG is een van de standaardformaten die Design Space accepteert voor snijklare ontwerpen, naast de eigen gelaagde projectbestanden.",
      },
      {
        question: "Moet ik de modus Zwart-wit of Volledige kleur gebruiken voor Cricut?",
        answer:
          "De modus Zwart-wit is geschikt voor de meeste vinyl- of papiersneden in één materiaal. Gebruik de modus Volledige kleur alleen als je bewust een ontwerp met meerdere lagen en kleuren maakt.",
      },
      {
        question: "Waarom heeft mijn SVG een achtergrondrechthoek die ik niet gesneden wil hebben?",
        answer:
          "Controleer of de schakelaar voor transparante achtergrond was ingeschakeld voordat je converteerde — anders behandelt de tool de achtergrond als een dekkende kleur om te tracen.",
      },
    ],
    related: [siblingLinks.laserCutting, siblingLinks.silhouette, siblingLinks.embroidery],
    relatedHeading: "Gerelateerde toepassingen",
  },

  "laser-cutting": {
    slug: "use-cases/laser-cutting",
    keyword: "png naar svg voor lasersnijden",
    title: "Hoe zet je PNG om naar SVG voor lasersnijden",
    metaDescription:
      "Zet PNG-ontwerpen om in een schoon SVG-snijpad voor lasersnijsoftware. Advies over instellingen, een miniproject en oplossingen voor veelvoorkomende importproblemen.",
    h1: "Hoe zet je PNG om naar SVG voor lasersnijden",
    intro:
      "Lasersnijders en graveermachines volgen vectorpaden, geen pixelraster — je ontwerp omzetten naar SVG is de stap die het machineleesbaar maakt.",
    breadcrumbLabel: "Lasersnijden",
    sections: [
      {
        heading: "Waarom lasersnijders SVG nodig hebben, geen PNG",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Software voor lasersnijden en graveren (LightBurn, LaserGRBL en de meeste machinespecifieke tools) leest vectorpaden om precies te weten waar de laserkop moet bewegen en snijden. Een PNG bevat helemaal geen padinformatie — die is voor een lasersnijder alleen bruikbaar als rastergraveerafbeelding, niet als snijomtrek.",
            ],
          },
        ],
      },
      {
        heading: "Stap voor stap: van PNG naar laserklare SVG",
        blocks: [
          {
            kind: "steps",
            steps: [
              {
                title: "Upload je PNG",
                body: "Breng je ontwerp naar de [PNG naar SVG-converter](/) — schone bronafbeeldingen met hoog contrast leveren de schoonste snijlijnen op.",
              },
              {
                title: "Kies je instellingen",
                body: "De modus Zwart-wit is meestal wat je wilt voor een snijomtrek; verhoog het detail voor ingewikkelde ontwerpen, of verlaag het voor een eenvoudiger, sneller te snijden pad.",
              },
              {
                title: "Importeer in je lasersoftware",
                body: "Download de SVG en importeer hem in LightBurn, LaserGRBL of de software van je machine, en wijs vervolgens snij- versus graveerinstellingen toe aan de juiste lagen.",
              },
            ],
          },
        ],
      },
      {
        heading: "Miniproject: een lasergesneden houten bord",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Begin met een PNG met hoog contrast van je tekst of ontwerp (donker op licht, of andersom).",
              "Traceer hem in de modus Zwart-wit, met een gematigd detailniveau zodat curves vloeiend blijven zonder overmatig veel kleine knooppunten die de laser vertragen.",
              "Importeer in je lasersoftware, schaal naar je materiaalgrootte en zet eventuele interne uitsnijdingen op hun eigen laag indien nodig.",
              "Doe eerst een testsnede op restmateriaal met laag vermogen om de pad- en snelheidsinstellingen te controleren voordat je je definitieve stuk snijdt.",
            ],
          },
        ],
      },
      {
        heading: "Veelvoorkomende problemen oplossen",
        blocks: [
          {
            kind: "list",
            items: [
              "Pad heeft te veel kleine segmenten, wat de laser vertraagt: verhoog de instelling voor gladstrijken/detail voordat je exporteert, zodat de trace minder, langere curves gebruikt.",
              "Interne gaten worden niet goed uitgesneden: controleer of je bron-PNG duidelijke, gesloten interne vormen had — ruizige of anti-aliased randen kunnen de trace in de war brengen.",
              "Ontwerp lijkt gespiegeld of gedraaid na import: dit is een importinstelling van je laserprogramma, niet van de SVG zelf — controleer de oriëntatie-opties daarvan.",
            ],
          },
        ],
      },
    ],
    howTo: {
      name: "Converteer PNG naar SVG voor lasersnijden",
      steps: [
        { name: "Upload je PNG", text: "Breng je ontwerp naar de PNG naar SVG-converter." },
        {
          name: "Kies je instellingen",
          text: "Gebruik de modus Zwart-wit en pas het detail aan op de complexiteit van je ontwerp.",
        },
        {
          name: "Importeer in je lasersoftware",
          text: "Download de SVG en importeer hem in LightBurn, LaserGRBL of vergelijkbare software.",
        },
      ],
    },
    faqs: [
      {
        question: "Welke lasersoftware accepteert SVG-bestanden?",
        answer:
          "De meeste lasersnijsoftware — waaronder LightBurn, LaserGRBL en de software die bij de meeste desktoplasersnijders wordt geleverd — importeert SVG direct als vectorsnijpaden.",
      },
      {
        question: "Moet de SVG een vulling hebben of alleen een omtrek?",
        answer:
          "Voor het snijden telt alleen de padomtrek — de vulkleur wordt door de meeste lasersoftware genegeerd, die lijnen/paden leest om de snijlijn te bepalen.",
      },
      {
        question: "Kan ik een foto lasergraveren in plaats van snijden?",
        answer:
          "Ja, maar bij het graveren van een foto gebruik je meestal de rasterafbeelding direct in plaats van een vectortrace — vectorconversie is specifiek bedoeld voor snijpaden en lijntekeningen.",
      },
    ],
    related: [siblingLinks.cricut, siblingLinks.silhouette, siblingLinks.embroidery],
    relatedHeading: "Gerelateerde toepassingen",
  },

  "silhouette-vinyl-cutting": {
    slug: "use-cases/silhouette-vinyl-cutting",
    keyword: "png naar svg voor silhouette",
    title: "Hoe zet je PNG om naar SVG voor Silhouette",
    metaDescription:
      "Maak een PNG-ontwerp klaar als SVG voor Silhouette Studio en vinylsnijden. Advies over instellingen, een decalproject en tips voor probleemoplossing.",
    h1: "Hoe zet je PNG om naar SVG voor Silhouette",
    intro:
      "Silhouette Studio snijdt langs vectorpaden, dus een PNG-ontwerp moet eerst worden omgezet naar SVG voordat je Silhouette-machine vinyl, karton of stof kan snijden.",
    breadcrumbLabel: "Silhouette",
    sections: [
      {
        heading: "Waarom Silhouette Studio SVG nodig heeft, geen PNG",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "De kernfunctie van Silhouette Studio is het volgen van snijlijnen — vectorpaden die het mes precies vertellen waar het naartoe moet bewegen. Een PNG bevat geen padinformatie, dus door er een direct te importeren krijg je alleen een afbeelding om te printen, geen snijklaar ontwerp, tenzij je het binnen Silhouette Studio zelf traceert (een betaalde functie in de volledige versie). Vooraf omzetten naar SVG levert je gratis snijklare paden op, in elke versie.",
            ],
          },
        ],
      },
      {
        heading: "Stap voor stap: van PNG naar Silhouette-klare SVG",
        blocks: [
          {
            kind: "steps",
            steps: [
              {
                title: "Upload je PNG",
                body: "Voeg je ontwerp toe aan de [PNG naar SVG-converter](/) — een transparante achtergrond houdt het snijpad beperkt tot je ontwerp.",
              },
              {
                title: "Kies je instellingen",
                body: "De modus Zwart-wit werkt goed voor de meeste vinyl decals in één laag; de modus Volledige kleur is geschikt voor ontwerpen met meerdere lagen, waarbij elke kleur zijn eigen snijlaag wordt.",
              },
              {
                title: "Importeer in Silhouette Studio",
                body: "Download de SVG en gebruik Bestand > Openen of Bestand > Importeren in Silhouette Studio — het wordt geladen als een bewerkbaar, snijbaar pad.",
              },
            ],
          },
        ],
      },
      {
        heading: "Miniproject: een gelaagde vinyl decal",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Kies een PNG-ontwerp met een klein aantal aparte kleuren voor een schoon resultaat met meerdere lagen.",
              "Traceer hem in de modus Volledige kleur, met het aantal kleuren ingesteld op het aantal vinylkleuren dat je van plan bent te gebruiken.",
              "Importeer in Silhouette Studio en splits het ontwerp op kleur met de ingebouwde tools van de software als je elke laag uit ander vinyl wilt snijden.",
              "Snijd elke kleurlaag apart, verwijder het overtollige materiaal en leg de onderdelen samen op transferfolie voor het aanbrengen.",
            ],
          },
        ],
      },
      {
        heading: "Veelvoorkomende problemen oplossen",
        blocks: [
          {
            kind: "list",
            items: [
              "Ontwerp wordt geïmporteerd met gekartelde randen: verhoog de instelling voor gladstrijken/detail voordat je downloadt, zodat curves vloeiender worden benaderd.",
              "Te veel losse snijpaden: verlaag het aantal kleuren in de modus Volledige kleur, of schakel over naar de modus Zwart-wit als je maar één kleur hoeft te snijden.",
              "Er verschijnen kleine losse stipjes bij het ontwerp: dit is meestal restruis van de bron-PNG — een schonere bronafbeelding met minder compressieartefacten voorkomt dit.",
            ],
          },
        ],
      },
    ],
    howTo: {
      name: "Converteer PNG naar SVG voor Silhouette",
      steps: [
        { name: "Upload je PNG", text: "Voeg je ontwerp toe aan de PNG naar SVG-converter." },
        {
          name: "Kies je instellingen",
          text: "Selecteer de modus Zwart-wit of Volledige kleur, afhankelijk van je project.",
        },
        {
          name: "Importeer in Silhouette Studio",
          text: "Download de SVG en open hem in Silhouette Studio als een snijbaar pad.",
        },
      ],
    },
    faqs: [
      {
        question: "Heb ik de betaalde versie van Silhouette Studio nodig om een SVG te gebruiken?",
        answer:
          "Nee — het importeren van een al gevectoriseerde SVG werkt in de gratis versie van Silhouette Studio. De betaalde upgrade is vooral nodig als je rasterafbeeldingen binnen de app zelf wilt tracen.",
      },
      {
        question: "Wat is de beste modus voor een eenkleurige vinyl decal?",
        answer:
          "De modus Zwart-wit, omdat die één schoon pad oplevert in plaats van aparte lagen per kleur.",
      },
      {
        question: "Kan Silhouette Studio de SVG bewerken nadat ik hem heb geïmporteerd?",
        answer:
          "Ja — eenmaal geïmporteerd bestaat het ontwerp uit echte bewerkbare paden, dus je kunt het formaat aanpassen, de vorm veranderen of combineren met andere snijlijnen binnen Silhouette Studio.",
      },
    ],
    related: [siblingLinks.cricut, siblingLinks.laserCutting, siblingLinks.embroidery],
    relatedHeading: "Gerelateerde toepassingen",
  },

  "embroidery-digitizing": {
    slug: "use-cases/embroidery-digitizing",
    keyword: "png naar svg voor borduren",
    title: "Hoe zet je PNG om naar SVG voor borduurdigitalisatie",
    metaDescription:
      "Zet een PNG-logo om in een schone SVG-omtrek voor borduurdigitalisatiesoftware. Stap-voor-stap instellingen, een projectuitleg en probleemoplossing.",
    h1: "Hoe zet je PNG om naar SVG voor borduurdigitalisatie",
    intro:
      "Borduurdigitalisatiesoftware bouwt steekpaden op basis van vectoromtrekken, niet rasterpixels — door een PNG-logo eerst om te zetten naar SVG krijgen digitizers een schone vorm om mee te werken.",
    breadcrumbLabel: "Borduurwerk",
    sections: [
      {
        heading: "Waarom borduurdigitalisatie SVG nodig heeft, geen PNG",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Digitalisatiesoftware (zoals Wilcom, Hatch of Embrilliance) zet een ontwerp om in een reeks steekpaden — een proces dat begint bij schone vectoromtrekken, niet een rasterraster. Een PNG direct in de meeste digitalisatieworkflows invoeren betekent dat iemand eerst handmatig de omtrek moet tracen; beginnen met een SVG slaat die handmatige stap volledig over.",
            ],
          },
        ],
      },
      {
        heading: "Stap voor stap: van PNG naar borduurklare SVG",
        blocks: [
          {
            kind: "steps",
            steps: [
              {
                title: "Upload je PNG",
                body: "Voeg je logo of ontwerp toe aan de [PNG naar SVG-converter](/) — een eenvoudig ontwerp met hoog contrast digitaliseert het schoonst.",
              },
              {
                title: "Kies je instellingen",
                body: "De modus Zwart-wit is meestal het beste voor borduurwerk, omdat steekpaden schone omtrekken volgen in plaats van fotografisch detail; houd het detail gematigd om te complexe paden te vermijden die lastig te digitaliseren zijn.",
              },
              {
                title: "Importeer in je digitalisatiesoftware",
                body: "Download de SVG en importeer hem in je digitalisatieprogramma als basisomtrek voor het opbouwen van steekpaden en lagen.",
              },
            ],
          },
        ],
      },
      {
        heading: "Miniproject: een eenvoudige logopatch digitaliseren",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Begin met een vereenvoudigde versie van je logo — borduurwerk houdt fijn detail niet goed vast, dus stoere, eenvoudige vormen werken het beste.",
              "Traceer hem in de modus Zwart-wit met het detail aan de lage kant, met de voorkeur voor minder, vloeiendere paden boven pixelperfecte randen.",
              "Importeer de SVG in je digitalisatiesoftware en wijs steektypes (satijnsteek, vulsteek, lopende steek) toe aan elk omlijnd gebied.",
              "Digitaliseer en doe een teststeek op restmateriaal voordat je je definitieve materiaal gebruikt.",
            ],
          },
        ],
      },
      {
        heading: "Veelvoorkomende problemen oplossen",
        blocks: [
          {
            kind: "list",
            items: [
              "Omtrek heeft te veel kleine details om schoon te digitaliseren: vereenvoudig de bron-PNG of verhoog de instelling voor gladstrijken, zodat de trace minder, stoerdere vormen oplevert.",
              "Dunne lijnen verdwijnen of lopen in elkaar over: heel dunne lijnen in de bronafbeelding kunnen verdwijnen tijdens kwantisatie — maak ze dikker in de bron-PNG voordat je traceert als ze essentieel zijn.",
              "Kleuren komen niet netjes overeen met garenkleuren: gebruik de modus Volledige kleur met een lager aantal kleuren, zodat elk gebied voorspelbaarder overeenkomt met één garenkleur.",
            ],
          },
        ],
      },
    ],
    howTo: {
      name: "Converteer PNG naar SVG voor borduurdigitalisatie",
      steps: [
        { name: "Upload je PNG", text: "Voeg je logo toe aan de PNG naar SVG-converter." },
        {
          name: "Kies je instellingen",
          text: "Gebruik de modus Zwart-wit met een gematigd detailniveau voor schone, digitaliseerbare omtrekken.",
        },
        {
          name: "Importeer in je digitalisatiesoftware",
          text: "Download de SVG en gebruik hem als basisomtrek in je digitalisatieprogramma.",
        },
      ],
    },
    faqs: [
      {
        question: "Wordt een SVG automatisch een borduurbestand?",
        answer:
          "Nee — een SVG geeft digitalisatiesoftware een schone vectoromtrek om mee te werken, maar iemand of iets moet nog steeds steektypes toewijzen en het eigenlijke steekbestand opbouwen (zoals een DST of PES).",
      },
      {
        question: "Waarom moet ik de modus Volledige kleur vermijden voor borduurwerk?",
        answer:
          "Borduurwerk werkt over het algemeen het beste met eenvoudige, stoere omtrekken. De modus Volledige kleur kan meer kleurgebieden introduceren dan praktisch is voor garenwissels, dus de modus Zwart-wit is meestal het betere startpunt.",
      },
      {
        question: "Wat voor bronafbeelding digitaliseert het beste?",
        answer:
          "Stoere, eenvoudige ontwerpen met dikke lijnen en weinig kleine details digitaliseren het schoonst — fijn detail dat er op het scherm prima uitziet, verdwijnt of oogt vaak troebel wanneer het geborduurd wordt.",
      },
    ],
    related: [siblingLinks.cricut, siblingLinks.laserCutting, siblingLinks.silhouette],
    relatedHeading: "Gerelateerde toepassingen",
  },
};
