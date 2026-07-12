import type { ContentPage } from "../types";

const siblingLinks = {
  cricut: { href: "/use-cases/cricut", label: "PNG vers SVG pour Cricut" },
  laserCutting: { href: "/use-cases/laser-cutting", label: "PNG vers SVG pour la découpe laser" },
  silhouette: {
    href: "/use-cases/silhouette-vinyl-cutting",
    label: "PNG vers SVG pour Silhouette",
  },
  embroidery: {
    href: "/use-cases/embroidery-digitizing",
    label: "PNG vers SVG pour la broderie",
  },
};

export const useCases: Record<string, ContentPage> = {
  cricut: {
    slug: "use-cases/cricut",
    keyword: "png vers svg pour cricut",
    title: "Comment convertir un PNG en SVG pour Cricut",
    metaDescription:
      "Convertissez un design PNG en SVG prêt à découper pour Cricut Design Space. Réglages étape par étape, mini-projet guidé et astuces de dépannage.",
    h1: "Comment convertir un PNG en SVG pour Cricut",
    intro:
      "Cricut Design Space travaille avec des tracés de découpe, pas des pixels — un design PNG doit donc devenir un SVG avant que votre machine Cricut puisse le découper.",
    breadcrumbLabel: "Cricut",
    sections: [
      {
        heading: "Pourquoi Cricut a besoin de SVG, pas de PNG",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Design Space peut techniquement importer un PNG, mais il le traite comme une image plate à imprimer ou à détourer manuellement dans l'application — il ne sait pas automatiquement où découper. Un SVG contient déjà de vraies données de tracé, donc Design Space peut lire ces tracés directement comme des lignes de découpe, sans détourage manuel dans Cricut lui-même.",
            ],
          },
        ],
      },
      {
        heading: "Étape par étape : du PNG au SVG prêt pour Cricut",
        blocks: [
          {
            kind: "steps",
            steps: [
              {
                title: "Importez votre PNG",
                body: "Glissez votre design dans le [convertisseur PNG en SVG](/) — un PNG à arrière-plan transparent donne les meilleurs résultats pour les projets de découpe.",
              },
              {
                title: "Choisissez vos réglages",
                body: "Utilisez le mode Noir & Blanc pour un seul tracé de découpe propre (la plupart des projets vinyle et papier), ou le mode Couleur pour un design multicouche multicolore. Gardez l'option d'arrière-plan transparent activée pour que seul votre design soit découpé, pas l'arrière-plan.",
              },
              {
                title: "Importez dans Cricut Design Space",
                body: "Téléchargez le SVG, puis dans Design Space choisissez Upload > Upload Image, sélectionnez votre SVG et enregistrez-le — il apparaîtra dans votre bibliothèque d'images comme un fichier prêt à découper.",
              },
            ],
          },
        ],
      },
      {
        heading: "Mini-projet : un sticker vinyle monochrome",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Partez d'un PNG à fort contraste (design foncé sur fond clair ou transparent) — les visuels façon silhouette fonctionnent particulièrement bien.",
              "Vectorisez-le en mode Noir & Blanc avec un détail réglé de bas à moyen pour que les contours restent nets plutôt qu'anguleux.",
              "Importez le SVG dans Design Space, redimensionnez-le pour votre projet, et réglez le matériau et les paramètres de la lame pour votre vinyle.",
              "Découpez, retirez l'excédent de vinyle autour du design, puis appliquez du transfert pour déplacer le sticker sur sa surface finale.",
            ],
          },
        ],
      },
      {
        heading: "Résolution des problèmes courants",
        blocks: [
          {
            kind: "list",
            items: [
              "De petites formes indésirables apparaissent après l'import : cela signifie généralement que le PNG source contenait du bruit d'arrière-plan ou des artefacts de compression — essayez d'augmenter le réglage de détail/lissage avant de réexporter.",
              "Design Space affiche des morceaux déconnectés : pour une découpe monochrome, assurez-vous d'avoir utilisé le mode Noir & Blanc plutôt que Couleur, qui crée un tracé distinct par couleur.",
              "Les lignes de découpe paraissent arrondies alors que vous vouliez des angles nets : baissez le réglage de lissage pour que les tracés collent plus fidèlement aux contours d'origine.",
            ],
          },
        ],
      },
    ],
    howTo: {
      name: "Convertir un PNG en SVG pour Cricut",
      steps: [
        { name: "Importez votre PNG", text: "Glissez votre design dans le convertisseur PNG en SVG." },
        {
          name: "Choisissez vos réglages",
          text: "Sélectionnez le mode Noir & Blanc ou Couleur et gardez l'arrière-plan transparent.",
        },
        {
          name: "Importez dans Cricut Design Space",
          text: "Téléchargez le SVG et importez-le dans Design Space via Upload > Upload Image.",
        },
      ],
    },
    faqs: [
      {
        question: "Cricut Design Space accepte-t-il les fichiers SVG ?",
        answer:
          "Oui — le SVG est l'un des formats standards que Design Space accepte pour les designs prêts à découper, aux côtés de ses propres fichiers de projet en couches.",
      },
      {
        question: "Faut-il utiliser le mode Noir & Blanc ou Couleur pour Cricut ?",
        answer:
          "Le mode Noir & Blanc convient à la plupart des découpes vinyle ou papier à un seul matériau. N'utilisez le mode Couleur que si vous construisez volontairement un design multicouche et multicolore.",
      },
      {
        question: "Pourquoi mon SVG a-t-il un rectangle d'arrière-plan que je ne veux pas découper ?",
        answer:
          "Assurez-vous que l'option d'arrière-plan transparent était activée avant la conversion — sinon l'outil traite l'arrière-plan comme une couleur opaque à vectoriser.",
      },
    ],
    related: [siblingLinks.laserCutting, siblingLinks.silhouette, siblingLinks.embroidery],
    relatedHeading: "Cas d'usage associés",
  },

  "laser-cutting": {
    slug: "use-cases/laser-cutting",
    keyword: "png vers svg pour découpe laser",
    title: "Comment convertir un PNG en SVG pour la découpe laser",
    metaDescription:
      "Transformez un visuel PNG en tracé SVG propre pour un logiciel de découpe laser. Conseils de réglages, mini-projet et solutions aux problèmes d'import courants.",
    h1: "Comment convertir un PNG en SVG pour la découpe laser",
    intro:
      "Les découpeuses et graveuses laser suivent des tracés vectoriels, pas des grilles de pixels — convertir votre visuel en SVG est l'étape qui le rend lisible par la machine.",
    breadcrumbLabel: "Découpe laser",
    sections: [
      {
        heading: "Pourquoi les découpeuses laser ont besoin de SVG, pas de PNG",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Les logiciels de découpe et de gravure laser (LightBurn, LaserGRBL et la plupart des outils propres à chaque machine) lisent des tracés vectoriels pour savoir exactement où la tête laser doit se déplacer et découper. Un PNG ne contient aucune donnée de tracé — il n'est utile à une découpeuse laser que comme image de gravure matricielle, pas comme contour de découpe.",
            ],
          },
        ],
      },
      {
        heading: "Étape par étape : du PNG au SVG prêt pour le laser",
        blocks: [
          {
            kind: "steps",
            steps: [
              {
                title: "Importez votre PNG",
                body: "Apportez votre visuel dans le [convertisseur PNG en SVG](/) — un visuel source propre et à fort contraste donne les lignes de découpe les plus nettes.",
              },
              {
                title: "Choisissez vos réglages",
                body: "Le mode Noir & Blanc est généralement ce qu'il vous faut pour un contour de découpe ; augmentez le détail pour les designs complexes, ou réduisez-le pour un tracé plus simple et plus rapide à découper.",
              },
              {
                title: "Importez dans votre logiciel laser",
                body: "Téléchargez le SVG et importez-le dans LightBurn, LaserGRBL ou le logiciel de votre machine, puis attribuez les réglages de découpe ou de gravure aux calques appropriés.",
              },
            ],
          },
        ],
      },
      {
        heading: "Mini-projet : une enseigne en bois découpée au laser",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Partez d'un PNG à fort contraste de votre texte ou design (foncé sur clair, ou l'inverse).",
              "Vectorisez-le en mode Noir & Blanc, en gardant un détail modéré pour que les courbes restent lisses sans trop de petits nœuds qui ralentiraient le laser.",
              "Importez dans votre logiciel laser, mettez à l'échelle de votre matériau, et séparez les découpes intérieures sur leur propre calque si besoin.",
              "Faites un test de découpe sur une chute à faible puissance pour valider le tracé et la vitesse avant de découper votre pièce finale.",
            ],
          },
        ],
      },
      {
        heading: "Résolution des problèmes courants",
        blocks: [
          {
            kind: "list",
            items: [
              "Le tracé comporte trop de petits segments et ralentit le laser : augmentez le réglage de lissage/détail avant l'export pour que la vectorisation utilise des courbes moins nombreuses et plus longues.",
              "Les trous intérieurs ne se découpent pas correctement : vérifiez que votre PNG source avait des formes intérieures nettes et fermées — des contours bruités ou lissés peuvent perturber la vectorisation.",
              "Le design apparaît en miroir ou pivoté après l'import : c'est un réglage d'import de votre logiciel laser, pas du SVG lui-même — vérifiez ses options d'orientation.",
            ],
          },
        ],
      },
    ],
    howTo: {
      name: "Convertir un PNG en SVG pour la découpe laser",
      steps: [
        { name: "Importez votre PNG", text: "Apportez votre visuel dans le convertisseur PNG en SVG." },
        {
          name: "Choisissez vos réglages",
          text: "Utilisez le mode Noir & Blanc et ajustez le détail selon la complexité de votre design.",
        },
        {
          name: "Importez dans votre logiciel laser",
          text: "Téléchargez le SVG et importez-le dans LightBurn, LaserGRBL ou un logiciel similaire.",
        },
      ],
    },
    faqs: [
      {
        question: "Quels logiciels laser acceptent les fichiers SVG ?",
        answer:
          "La plupart des logiciels de découpe laser — dont LightBurn, LaserGRBL et le logiciel fourni avec la majorité des découpeuses laser de bureau — importent le SVG directement comme des tracés vectoriels de découpe.",
      },
      {
        question: "Le SVG doit-il avoir un remplissage ou juste un contour ?",
        answer:
          "Pour la découpe, seul le contour du tracé compte — la couleur de remplissage est ignorée par la plupart des logiciels laser, qui lisent les contours/tracés pour déterminer la ligne de découpe.",
      },
      {
        question: "Puis-je graver une photo au laser plutôt que la découper ?",
        answer:
          "Oui, mais la gravure d'une photo utilise généralement l'image matricielle directement plutôt qu'une vectorisation — la conversion vectorielle sert spécifiquement pour les tracés de découpe et les dessins au trait.",
      },
    ],
    related: [siblingLinks.cricut, siblingLinks.silhouette, siblingLinks.embroidery],
    relatedHeading: "Cas d'usage associés",
  },

  "silhouette-vinyl-cutting": {
    slug: "use-cases/silhouette-vinyl-cutting",
    keyword: "png vers svg pour silhouette",
    title: "Comment convertir un PNG en SVG pour Silhouette",
    metaDescription:
      "Préparez un design PNG en SVG pour Silhouette Studio et la découpe vinyle. Conseils de réglages, projet de sticker guidé et astuces de dépannage.",
    h1: "Comment convertir un PNG en SVG pour Silhouette",
    intro:
      "Silhouette Studio découpe le long de tracés vectoriels : un design PNG doit donc être converti en SVG avant que votre machine Silhouette puisse découper du vinyle, du papier cartonné ou du tissu.",
    breadcrumbLabel: "Silhouette",
    sections: [
      {
        heading: "Pourquoi Silhouette Studio a besoin de SVG, pas de PNG",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "La fonction principale de Silhouette Studio est de suivre des lignes de découpe — des tracés vectoriels qui indiquent à la lame exactement où se déplacer. Un PNG ne contient aucune donnée de tracé, donc l'importer directement ne donne qu'une image imprimable, pas un design découpable, à moins de le vectoriser dans Silhouette Studio lui-même (une fonctionnalité payante de la version complète). Convertir en SVG au préalable vous donne des tracés prêts à découper gratuitement, dans n'importe quelle version.",
            ],
          },
        ],
      },
      {
        heading: "Étape par étape : du PNG au SVG prêt pour Silhouette",
        blocks: [
          {
            kind: "steps",
            steps: [
              {
                title: "Importez votre PNG",
                body: "Ajoutez votre design au [convertisseur PNG en SVG](/) — un arrière-plan transparent limite le tracé de découpe à votre seul visuel.",
              },
              {
                title: "Choisissez vos réglages",
                body: "Le mode Noir & Blanc fonctionne bien pour la plupart des stickers vinyle à une seule couche ; le mode Couleur convient aux designs multicouches où chaque couleur devient son propre calque de découpe.",
              },
              {
                title: "Importez dans Silhouette Studio",
                body: "Téléchargez le SVG et utilisez Fichier > Ouvrir ou Fichier > Importer dans Silhouette Studio — il se chargera comme un tracé modifiable et découpable.",
              },
            ],
          },
        ],
      },
      {
        heading: "Mini-projet : un sticker vinyle en couches",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Choisissez un design PNG avec un petit nombre de couleurs distinctes pour un résultat multicouche propre.",
              "Vectorisez-le en mode Couleur, en réglant le nombre de couleurs pour qu'il corresponde au nombre de coloris de vinyle que vous prévoyez d'utiliser.",
              "Importez dans Silhouette Studio et séparez le design par couleur à l'aide des outils intégrés du logiciel si vous prévoyez de découper chaque calque dans un vinyle différent.",
              "Découpez chaque calque de couleur séparément, retirez l'excédent, puis superposez les pièces sur du transfert pour l'application.",
            ],
          },
        ],
      },
      {
        heading: "Résolution des problèmes courants",
        blocks: [
          {
            kind: "list",
            items: [
              "Le design est importé avec des contours anguleux : augmentez le réglage de lissage/détail avant le téléchargement pour que les courbes soient approximées plus finement.",
              "Trop de tracés de découpe séparés : réduisez le nombre de couleurs en mode Couleur, ou passez en mode Noir & Blanc si vous n'avez besoin que d'une découpe monochrome.",
              "De petits points parasites apparaissent près du design : ce sont généralement des restes de bruit du PNG source — une image source plus propre, avec moins d'artefacts de compression, évite ce problème.",
            ],
          },
        ],
      },
    ],
    howTo: {
      name: "Convertir un PNG en SVG pour Silhouette",
      steps: [
        { name: "Importez votre PNG", text: "Ajoutez votre design au convertisseur PNG en SVG." },
        {
          name: "Choisissez vos réglages",
          text: "Sélectionnez le mode Noir & Blanc ou Couleur selon votre projet.",
        },
        {
          name: "Importez dans Silhouette Studio",
          text: "Téléchargez le SVG et ouvrez-le dans Silhouette Studio comme un tracé découpable.",
        },
      ],
    },
    faqs: [
      {
        question: "Ai-je besoin de la version payante de Silhouette Studio pour utiliser un SVG ?",
        answer:
          "Non — importer un SVG déjà vectorisé fonctionne dans la version gratuite de Silhouette Studio. La mise à niveau payante n'est vraiment nécessaire que si vous voulez vectoriser des images matricielles directement dans l'application.",
      },
      {
        question: "Quel est le meilleur mode pour un sticker vinyle monochrome ?",
        answer:
          "Le mode Noir & Blanc, car il produit un seul tracé propre plutôt que des calques séparés par couleur.",
      },
      {
        question: "Silhouette Studio peut-il modifier le SVG une fois importé ?",
        answer:
          "Oui — une fois importé, le design est composé de vrais tracés modifiables, vous pouvez donc le redimensionner, le remodeler ou le combiner avec d'autres lignes de découpe directement dans Silhouette Studio.",
      },
    ],
    related: [siblingLinks.cricut, siblingLinks.laserCutting, siblingLinks.embroidery],
    relatedHeading: "Cas d'usage associés",
  },

  "embroidery-digitizing": {
    slug: "use-cases/embroidery-digitizing",
    keyword: "png vers svg pour broderie",
    title: "Comment convertir un PNG en SVG pour la digitalisation de broderie",
    metaDescription:
      "Convertissez un logo PNG en un contour SVG propre pour un logiciel de digitalisation de broderie. Réglages étape par étape, projet guidé et dépannage.",
    h1: "Comment convertir un PNG en SVG pour la digitalisation de broderie",
    intro:
      "Les logiciels de digitalisation de broderie construisent des tracés de points à partir de contours vectoriels, pas de pixels matriciels — convertir d'abord un logo PNG en SVG donne aux digitaliseurs une forme propre pour travailler.",
    breadcrumbLabel: "Broderie",
    sections: [
      {
        heading: "Pourquoi la digitalisation de broderie a besoin de SVG, pas de PNG",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Les logiciels de digitalisation (comme Wilcom, Hatch ou Embrilliance) transforment un design en une séquence de tracés de points — un processus qui part de contours vectoriels propres, pas d'une grille matricielle. Injecter directement un PNG dans la plupart des flux de digitalisation oblige quelqu'un à détourer manuellement le contour au préalable ; partir d'un SVG supprime entièrement cette étape manuelle.",
            ],
          },
        ],
      },
      {
        heading: "Étape par étape : du PNG au SVG prêt pour la broderie",
        blocks: [
          {
            kind: "steps",
            steps: [
              {
                title: "Importez votre PNG",
                body: "Ajoutez votre logo ou design au [convertisseur PNG en SVG](/) — un visuel source simple et à fort contraste se digitalise le plus proprement.",
              },
              {
                title: "Choisissez vos réglages",
                body: "Le mode Noir & Blanc est généralement le meilleur pour la broderie, car les tracés de points suivent des contours nets plutôt qu'un détail photographique ; gardez un détail modéré pour éviter des tracés trop complexes et difficiles à digitaliser.",
              },
              {
                title: "Importez dans votre logiciel de digitalisation",
                body: "Téléchargez le SVG et importez-le dans votre logiciel de digitalisation comme contour de base pour construire les tracés de points et les calques.",
              },
            ],
          },
        ],
      },
      {
        heading: "Mini-projet : digitaliser un écusson de logo simple",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Partez d'une version simplifiée de votre logo — la broderie ne restitue pas bien les détails fins, donc des formes audacieuses et simples fonctionnent le mieux.",
              "Vectorisez-le en mode Noir & Blanc avec un détail plutôt bas, en privilégiant des tracés moins nombreux et plus lisses plutôt que des contours pixel pour pixel.",
              "Importez le SVG dans votre logiciel de digitalisation et attribuez des types de points (satin, remplissage, point droit) à chaque région détourée.",
              "Digitalisez et faites un test de broderie sur une chute de tissu avant de vous engager sur votre matériau final.",
            ],
          },
        ],
      },
      {
        heading: "Résolution des problèmes courants",
        blocks: [
          {
            kind: "list",
            items: [
              "Le contour a trop de petits détails pour être digitalisé proprement : simplifiez le PNG source ou augmentez le réglage de lissage pour que la vectorisation produise des formes moins nombreuses et plus marquées.",
              "Des lignes fines disparaissent ou fusionnent : des traits très fins dans l'image source peuvent disparaître pendant la quantification — épaississez-les dans le PNG source avant la vectorisation s'ils sont essentiels.",
              "Les couleurs ne correspondent pas bien aux fils de broderie : utilisez le mode Couleur avec un nombre de couleurs plus bas pour que chaque zone corresponde plus facilement à une seule couleur de fil.",
            ],
          },
        ],
      },
    ],
    howTo: {
      name: "Convertir un PNG en SVG pour la digitalisation de broderie",
      steps: [
        { name: "Importez votre PNG", text: "Ajoutez votre logo au convertisseur PNG en SVG." },
        {
          name: "Choisissez vos réglages",
          text: "Utilisez le mode Noir & Blanc avec un détail modéré pour des contours propres et digitalisables.",
        },
        {
          name: "Importez dans votre logiciel de digitalisation",
          text: "Téléchargez le SVG et utilisez-le comme contour de base dans votre logiciel de digitalisation.",
        },
      ],
    },
    faqs: [
      {
        question: "Un SVG devient-il automatiquement un fichier de broderie ?",
        answer:
          "Non — un SVG fournit au logiciel de digitalisation un contour vectoriel propre pour travailler, mais une personne ou un logiciel doit encore attribuer les types de points et construire le fichier de points réel (comme un DST ou un PES).",
      },
      {
        question: "Pourquoi éviter le mode Couleur pour la broderie ?",
        answer:
          "La broderie fonctionne généralement mieux à partir de contours simples et marqués. Le mode Couleur peut introduire plus de zones de couleur qu'il n'est pratique pour les changements de fil, donc le mode Noir & Blanc est généralement le meilleur point de départ.",
      },
      {
        question: "Quel type d'image source se digitalise le mieux ?",
        answer:
          "Les designs audacieux et simples, avec des lignes épaisses et peu de petits détails, se digitalisent le plus proprement — un détail fin qui paraît net à l'écran disparaît souvent ou paraît flou une fois brodé.",
      },
    ],
    related: [siblingLinks.cricut, siblingLinks.laserCutting, siblingLinks.silhouette],
    relatedHeading: "Cas d'usage associés",
  },
};
