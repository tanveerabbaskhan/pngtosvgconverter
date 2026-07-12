import type { ContentPage } from "../types";

export const blogPosts: Record<string, ContentPage> = {
  "vinyl-decal-from-photo-tutorial": {
    slug: "blog/vinyl-decal-from-photo-tutorial",
    keyword: "vinyl decal maken van foto",
    title: "Hoe maak je een vinyl decal van een foto",
    metaDescription:
      "Een stap-voor-stap tutorial om van een foto een snijklare vinyl decal te maken: de afbeelding voorbereiden, tracen naar SVG, en snijden op een vinylsnijder thuis.",
    h1: "Hoe maak je een vinyl decal van een foto",
    intro:
      "Van een foto een vinyl decal maken betekent dat je hem eerst omzet in één schoon snijpad. Dit is het volledige proces, van bronfoto tot afgewerkte decal.",
    breadcrumbLabel: "Vinyl decal van foto",
    publishedAt: "2026-03-02",
    sections: [
      {
        heading: "Stap 1: Kies (of bewerk) een foto met hoog contrast",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Vinyl decals zijn eenkleurige snijpaden, dus de beste bronfoto's hebben een duidelijk onderwerp met hoog contrast tegen een eenvoudige achtergrond — denk aan een silhouet, een huisdierportret dat goed loskomt van de achtergrond, of een simpele grafische vorm. Is je foto druk of contrastarm, overweeg dan om strak op het onderwerp bij te snijden of het contrast te verhogen in een foto-editor voordat je gaat tracen.",
            ],
          },
        ],
      },
      {
        heading: "Stap 2: Traceer de foto naar SVG",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Upload je voorbereide foto naar [een gratis PNG naar SVG-converter](/) en kies de modus Zwart-wit — dit reduceert de afbeelding tot één voorgrondvorm, precies wat een vinylsnijder nodig heeft. Pas de instelling voor detail/gladstrijken aan tot de omtrek er schoon uitziet: te veel detail kan kleine, moeilijk te verwijderen stipjes achterlaten; te weinig kan belangrijke vormdetails laten verdwijnen.",
            ],
          },
        ],
      },
      {
        heading: "Stap 3: Maak het pad schoon",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Open de gedownloade SVG in Inkscape, Illustrator of de software van je snijmachine en controleer op losse vormpjes of losstaande eilandjes, die vaak voorkomen bij drukke bronfoto's. Verwijder alles wat geen deel uitmaakt van het hoofdontwerp — zie onze gids over [een SVG bewerken na conversie](/guides/edit-svg-after-conversion) voor toolspecifieke tips.",
            ],
          },
        ],
      },
      {
        heading: "Stap 4: Snijden, verwijderen en aanbrengen",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Importeer de opgeschoonde SVG in de software van je snijmachine (dit werkt op dezelfde manier voor [Cricut](/use-cases/cricut) en Silhouette-machines).",
              "Pas de grootte van het ontwerp aan voor je project en kies de juiste mes- en drukinstellingen voor je vinyl.",
              "Snijd, en verwijder vervolgens het overtollige vinyl rond en binnen het ontwerp.",
              "Breng transferfolie aan over het ontwerp, til het in één stuk op en druk het op je uiteindelijke oppervlak.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Wat voor foto werkt het beste voor een decal?",
        answer:
          "Een foto met een duidelijk onderwerp en een eenvoudige achtergrond met hoog contrast traceert het schoonst — drukke of contrastarme foto's hebben vaak eerst bijsnijden of contrastaanpassing nodig.",
      },
      {
        question: "Heb ik Photoshop nodig om de foto voor te bereiden?",
        answer:
          "Nee — bijsnijden en contrast verhogen kan in bijna elke gratis foto-editor. Voor de tracestap zelf heb je geen andere software nodig dan de browsergebaseerde converter.",
      },
    ],
    related: [
      {
        href: "/guides/edit-svg-after-conversion",
        label: "Hoe bewerk je een SVG-bestand na conversie",
        description: "Maak losse vormen schoon en vereenvoudig je getracete decalpad.",
      },
      {
        href: "/use-cases/silhouette-vinyl-cutting",
        label: "PNG naar SVG voor Silhouette",
        description: "Dezelfde werkwijze, toegespitst op Silhouette Studio.",
      },
    ],
    relatedHeading: "Meer leesvoer",
  },

  "best-png-to-svg-converters": {
    slug: "blog/best-png-to-svg-converters",
    keyword: "beste png naar svg converters",
    title: "De beste PNG naar SVG converters: een vergelijking per categorie",
    metaDescription:
      "Niet elke PNG-naar-SVG-converter werkt op dezelfde manier. Vergelijk browsergebaseerde tools, desktop vectorsoftware en betaalde diensten om de juiste voor jou te vinden.",
    h1: "De beste PNG naar SVG converters: een vergelijking per categorie",
    intro:
      "\"De beste converter\" hangt sterk af van wat je het belangrijkst vindt — privacy, kosten, batchverwerking of fijnmazige controle. Zo verhouden de belangrijkste categorieën zich tot elkaar.",
    breadcrumbLabel: "Beste converters",
    publishedAt: "2026-02-18",
    sections: [
      {
        heading: "Gratis browsergebaseerde converters",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Tools zoals [onze PNG naar SVG-converter](/) draaien volledig in je browser met de Canvas API — je afbeelding verlaat nooit je apparaat, je hoeft geen account aan te maken, en resultaten zijn direct. De keerzijde is dat browsergebaseerde tools doorgaans minder fijnmazige traceerparameters bieden dan professionele desktopsoftware, al dekt een goede tool nog steeds de instellingen die het meest tellen: aantal kleuren, detail en transparantie.",
            ],
          },
        ],
      },
      {
        heading: "Desktop vectorsoftware",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Adobe Illustrator's Image Trace en Inkscape's Trace Bitmap zijn volwaardige traceertools ingebouwd in algemene vectoreditors. Ze bieden diepgaande controle over het traceeralgoritme en laten je het resultaat direct bewerken in dezelfde applicatie. De keerzijde is de kostprijs (voor Illustrator) of een steilere leercurve, omdat je een volledige ontwerpapplicatie leert in plaats van een tool met één doel.",
            ],
          },
        ],
      },
      {
        heading: "Command-line en open-source libraries",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Libraries zoals Potrace en zijn talrijke afgeleiden vormen de motor achter veel traceertools, zowel in de browser als op de desktop. Ze rechtstreeks via de command line gebruiken geeft je scriptbare, batchvriendelijke conversie, maar vereist gemak met een terminal en handmatige configuratie in plaats van een visuele interface.",
            ],
          },
        ],
      },
      {
        heading: "Waar je op moet letten, welke je ook kiest",
        blocks: [
          {
            kind: "list",
            items: [
              "Echte SVG-output op basis van paden, geen rasterafbeelding verpakt in een SVG-tag — controleer het gedownloade bestand op echte `<path>`-elementen.",
              "Ondersteuning voor de traceermodus die je nodig hebt: Zwart-wit voor logo's en lijntekeningen, Volledige kleur voor foto's en illustraties met meerdere kleuren.",
              "Omgang met transparantie, als je bronafbeeldingen een transparante achtergrond hebben — zie [hoe image tracing werkt](/guides/how-image-tracing-works) voor waarom dit belangrijk is.",
              "Of je afbeeldingen naar een server worden geüpload of lokaal worden verwerkt, als privacy belangrijk is voor jouw toepassing.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is een browsergebaseerde converter net zo goed als desktopsoftware?",
        answer:
          "Voor veelvoorkomende taken zoals logo's, iconen en snijbestanden dekt een goede browsergebaseerde converter de instellingen die het meest tellen. Professionele desktopsoftware biedt diepere controle voor geavanceerde of ongebruikelijke gevallen.",
      },
      {
        question: "Zijn gratis converters veilig om te gebruiken voor klantwerk?",
        answer:
          "Dat hangt helemaal af van hoe de tool je bestanden verwerkt — een converter die afbeeldingen lokaal in je browser traceert, uploadt ze nooit ergens, wat het waard is om te controleren als privacy belangrijk is voor je project.",
      },
    ],
    related: [
      {
        href: "/guides/how-image-tracing-works",
        label: "Hoe werkt image tracing?",
        description: "Begrijp het algoritme waarop elke converter in deze vergelijking steunt.",
      },
      {
        href: "/use-cases/cricut",
        label: "PNG naar SVG voor Cricut",
        description: "Een concreet voorbeeld van het kiezen van de juiste converter voor een specifiek project.",
      },
    ],
    relatedHeading: "Meer leesvoer",
  },

  "why-is-my-svg-blurry": {
    slug: "blog/why-is-my-svg-blurry",
    keyword: "svg wazig waarom",
    title: "Waarom is mijn SVG wazig? Veelvoorkomende oorzaken en oplossingen",
    metaDescription:
      "Een SVG hoort er op geen enkele grootte wazig uit te zien — is dat bij jou wel zo, dan zijn dit de meest voorkomende oorzaken, van rasterbestanden in vermomming tot rendering- en exportinstellingen.",
    h1: "Waarom is mijn SVG wazig? Veelvoorkomende oorzaken en oplossingen",
    intro:
      "SVG's zijn vectorbestanden, dus ze horen op geen enkele grootte scherpte te verliezen. Ziet jouw SVG er toch wazig uit, dan gaat er iets specifieks mis — zo spoor je het op.",
    breadcrumbLabel: "Waarom is mijn SVG wazig",
    publishedAt: "2026-01-27",
    sections: [
      {
        heading: "Jouw \"SVG\" is misschien eigenlijk een rasterafbeelding",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "De meest voorkomende oorzaak: sommige tools produceren een SVG-bestand dat gewoon een Base64-gecodeerde PNG of JPEG in een `<image>`-tag wikkelt, in plaats van echte vectorpaden te tracen. Het heeft een .svg-extensie, maar onder de motorkap is het nog steeds een rasterafbeelding, dus hij wordt wazig bij het opschalen, precies zoals een PNG dat zou doen. Open het bestand in een teksteditor — zie je een lange Base64-tekst in plaats van `<path>`-elementen, dan is dat je antwoord. Zie [PNG vs SVG](/guides/png-vs-svg) voor waarom dit verschil ertoe doet.",
            ],
          },
        ],
      },
      {
        heading: "De trace stond op erg hoog detail bij een ruizige afbeelding",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Contra-intuïtief genoeg kan het tracen van een bronafbeelding van lage kwaliteit of zwaar gecomprimeerd op erg hoog detail een enorm aantal kleine, gekartelde padsegmenten opleveren die er ruw uitzien in plaats van vloeiend — de trace reproduceert getrouw de ruis uit het originele bestand. Probeer opnieuw te tracen vanaf een schonere bronafbeelding, of verhoog de instelling voor gladstrijken zodat het algoritme minder, vloeiendere curves gebruikt.",
            ],
          },
        ],
      },
      {
        heading: "De SVG wordt ergens in je pijplijn gerasteriseerd",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Sommige platforms (bepaalde CMS-afbeeldingshandlers, oudere browsers of exportinstellingen in ontwerptools) zetten een SVG om in een rasterafbeelding op een vaste resolutie voordat hij wordt weergegeven — op dat moment erft hij alle schaalproblemen van een PNG. Controleer of het platform dat je gebruikt een optie heeft om SVG native te tonen of in te sluiten in plaats van te converteren.",
            ],
          },
        ],
      },
      {
        heading: "Het oplossen",
        blocks: [
          {
            kind: "list",
            items: [
              "Traceer opnieuw vanaf de originele PNG met een tool die echte paddata oplevert — [probeer de gratis PNG naar SVG-converter](/) en inspecteer het resultaat voordat je het gebruikt.",
              "Ziet het detail er gekarteld uit, verhoog dan de instelling voor gladstrijken en download opnieuw.",
              "Rasteriseert een platform je SVG bij weergave, zoek dan naar een instelling om hem als native SVG in te sluiten of te linken in plaats van als geconverteerde afbeelding.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Hoe controleer ik snel of mijn SVG echt vector is?",
        answer:
          "Open het bestand in een teksteditor en zoek naar `<path>`, `<circle>` of vergelijkbare vormelementen. Zie je in plaats daarvan een lange Base64-tekst binnen een `<image>`-tag, dan is het een rasterafbeelding met een SVG-extensie.",
      },
      {
        question: "Wordt een SVG wazig als je inzoomt in een browser?",
        answer:
          "Nee — een echte vector-SVG blijft scherp op elk zoomniveau in de browser. Wordt hij wazig als je inzoomt, dan is het bestand hoogstwaarschijnlijk een rasterafbeelding in plaats van echte vectorpaden.",
      },
    ],
    related: [
      {
        href: "/guides/png-vs-svg",
        label: "PNG vs SVG: Wat is het verschil?",
        description: "Waarom een echt vectorbestand zich zo anders gedraagt dan een rasterbestand.",
      },
      {
        href: "/use-cases/laser-cutting",
        label: "PNG naar SVG voor lasersnijden",
        description: "Een toepassing waarbij een nep, in raster verpakte SVG volledig faalt.",
      },
    ],
    relatedHeading: "Meer leesvoer",
  },

  "svg-vs-png-for-icons": {
    slug: "blog/svg-vs-png-for-icons",
    keyword: "svg of png voor iconen",
    title: "SVG vs PNG voor iconen: wat kun je het beste gebruiken?",
    metaDescription:
      "Vergelijking van SVG en PNG specifiek voor website- en app-iconen — bestandsgrootte, schalen tussen apparaten, stylen met CSS, en wanneer PNG nog steeds zinvol is.",
    h1: "SVG vs PNG voor iconen: wat kun je het beste gebruiken?",
    intro:
      "Iconen worden op wild uiteenlopende groottes weergegeven — een favicon van 16px, een app-icoon van 48px, een featuregrafiek van 200px — wat de keuze tussen SVG en PNG extra belangrijk maakt om goed te maken.",
    breadcrumbLabel: "SVG vs PNG voor iconen",
    publishedAt: "2026-01-09",
    sections: [
      {
        heading: "Waarom SVG meestal wint voor iconen",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Iconen zijn bijna altijd eenvoudige, effen gekleurde vormen — precies wat vectorpaden efficiënt weergeven. Een SVG-icoon blijft scherp of hij nu op 16px of 160px wordt gerenderd, en één bestand dekt elke grootte die een responsieve lay-out nodig heeft, in plaats van aparte PNG's te exporteren voor elke resolutie.",
            ],
          },
        ],
      },
      {
        heading: "SVG-iconen zijn te stylen met CSS",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Omdat de vulling en lijndikte van een SVG gewoon attributen zijn, kun je een icoon met CSS van kleur laten veranderen om een hover-status of donkere modus te matchen, zonder een tweede afbeeldingsbestand nodig te hebben. De kleuren van een PNG-icoon zitten vastgebakken in de pixels, dus een andere kleur betekent een compleet apart geëxporteerd bestand.",
            ],
          },
        ],
      },
      {
        heading: "Vergelijking van bestandsgrootte",
        blocks: [
          {
            kind: "table",
            headers: ["", "SVG-icoon", "PNG-icoon"],
            rows: [
              ["Typische grootte (eenvoudig icoon)", "0,5–3 KB", "1–5 KB per resolutie"],
              ["Meerdere resoluties nodig?", "Nee — één bestand schaalt", "Ja — elke grootte apart exporteren"],
              ["Van kleur te veranderen via CSS?", "Ja", "Nee"],
            ],
          },
        ],
      },
      {
        heading: "Wanneer PNG nog steeds zinvol is voor iconen",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Als een \"icoon\" eigenlijk een kleine foto-achtige of zeer gedetailleerde afbeelding is — zoals een realistisch app-icoon met kleurverlopen, schaduwen en textuur — kan PNG dat detail getrouwer weergeven dan een vectortrace. Voor puur grafische, effen gekleurde iconen is SVG echter bijna altijd de betere keuze. Begin je met een bestaande set PNG-iconen, dan kun je die [omzetten naar SVG](/) en beide formaten beschikbaar houden.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Ondersteunen alle browsers SVG-iconen?",
        answer:
          "Ja, alle moderne browsers renderen SVG native, inclusief als favicons, inline iconen en CSS-achtergrondafbeeldingen.",
      },
      {
        question: "Kan ik een SVG-icoon animeren?",
        answer:
          "Ja — SVG ondersteunt CSS- en JavaScript-animatie van individuele paden, wat niet mogelijk is met een statische PNG.",
      },
      {
        question: "Is SVG groter of kleiner dan PNG voor hetzelfde icoon?",
        answer:
          "Voor eenvoudige, effen gekleurde iconen is SVG meestal kleiner, zeker als je rekening houdt met de meerdere PNG-exports die nodig zijn om verschillende weergavegroottes te dekken.",
      },
    ],
    related: [
      {
        href: "/guides/raster-vs-vector",
        label: "Raster vs Vector Graphics: De complete gids",
        description: "Het bredere verschil in formaat achter deze icoonspecifieke vergelijking.",
      },
      {
        href: "/use-cases/cricut",
        label: "PNG naar SVG voor Cricut",
        description: "Nog een praktijkvoorbeeld waarin vectorpaden meer tellen dan pixels.",
      },
    ],
    relatedHeading: "Meer leesvoer",
  },

  "common-png-to-svg-mistakes": {
    slug: "blog/common-png-to-svg-mistakes",
    keyword: "veelgemaakte fouten png naar svg",
    title: "Veelgemaakte fouten bij PNG-naar-SVG-conversie om te vermijden",
    metaDescription:
      "Vermijd de meest voorkomende fouten bij het converteren van PNG naar SVG, van verkeerde traceermodi tot het negeren van transparantie, zodat je eerste resultaat meteen een schoon, bruikbaar bestand is.",
    h1: "Veelgemaakte fouten bij PNG-naar-SVG-conversie om te vermijden",
    intro:
      "De meeste teleurstellende PNG-naar-SVG-conversies komen neer op een handvol vermijdbare fouten. Dit zijn de aandachtspunten voordat je gaat converteren.",
    breadcrumbLabel: "Veelgemaakte fouten",
    publishedAt: "2025-12-15",
    sections: [
      {
        heading: "Fout 1: De modus Volledige kleur gebruiken voor een eenvoudig logo",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Een effen logo in één of twee kleuren dat getraced wordt in de modus Volledige kleur kan eindigen met meer aparte paden en kleuren dan bedoeld, omdat het algoritme probeert subtiele kleurvariatie door anti-aliasing aan de randen te behouden. Voor eenvoudige logo's en lijntekeningen levert de modus Zwart-wit bijna altijd een schoner resultaat op — zie [hoe je een logo omzet naar SVG](/guides/convert-logo-to-svg) voor de volledige werkwijze.",
            ],
          },
        ],
      },
      {
        heading: "Fout 2: Beginnen met een bron in lage resolutie",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Tracen kan alleen werken met het detail dat aanwezig is in je bron-PNG — het kan geen scherpere randen bedenken dan de originele afbeelding had. Een kleine, zwaar gecomprimeerde bronafbeelding levert een grovere trace op dan een grotere, schonere, zelfs met identieke instellingen.",
            ],
          },
        ],
      },
      {
        heading: "Fout 3: De transparantie-instelling negeren",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Heeft je bron-PNG een transparante achtergrond maar vergeet je de schakelaar voor transparante achtergrond in te schakelen, dan kun je eindigen met een ongewenste effen achtergrondvorm in je SVG — wat vooral belangrijk is bij snijbestanden, waar die achtergrondvorm ook zou worden meegesneden.",
            ],
          },
        ],
      },
      {
        heading: "Fout 4: Geen controle uitvoeren na de conversie",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Open altijd de gedownloade SVG en controleer hem voordat je hem in een echt project gebruikt — zoom in om te bevestigen dat randen er schoon uitzien, en let op losse vormpjes die zijn overgebleven van ruis in de bronafbeelding. Dit is extra belangrijk voordat je een bestand naar een machine stuurt zoals een lasersnijder of een [Cricut](/use-cases/cricut), waar een losse vorm een ongewenste extra snede betekent.",
            ],
          },
        ],
      },
      {
        heading: "Fout 5: De detailinstelling te strak zetten",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Het detail zo hoog mogelijk zetten levert niet automatisch het beste resultaat op — bij een ruizige of matige bron kan het een enorm aantal kleine padsegmenten opleveren die er ruwer uitzien, niet scherper. Begin met een gematigde detailinstelling en pas aan op basis van hoe het echte resultaat eruitziet, niet alleen de stand van de schuifregelaar.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Wat is de meest voorkomende fout?",
        answer:
          "De modus Volledige kleur gebruiken voor een eenvoudig logo of lijntekeningontwerp dat veel schoner zou tracen in de modus Zwart-wit.",
      },
      {
        question: "Hoe weet ik of mijn instellingen verkeerd waren?",
        answer:
          "Open de SVG en inspecteer hem — onverwachte extra kleuren, losse vormpjes of gekartelde randen zijn allemaal tekenen dat het de moeite waard is om je instellingen aan te passen en opnieuw te converteren via de [PNG naar SVG-converter](/).",
      },
    ],
    related: [
      {
        href: "/guides/convert-logo-to-svg",
        label: "Hoe zet je een logo om naar SVG",
        description: "De juiste instellingen en werkwijze voor het meest voorkomende conversiegeval.",
      },
      {
        href: "/use-cases/embroidery-digitizing",
        label: "PNG naar SVG voor borduurwerk",
        description: "Een toepassing waarbij deze fouten bijzonder kostbaar zijn als je ze te laat ontdekt.",
      },
    ],
    relatedHeading: "Meer leesvoer",
  },
};
