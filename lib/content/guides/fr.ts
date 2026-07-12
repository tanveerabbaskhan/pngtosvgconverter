import type { ContentPage } from "../types";

export const guides: Record<string, ContentPage> = {
  "png-vs-svg": {
    slug: "guides/png-vs-svg",
    keyword: "différence png svg",
    title: "PNG vs SVG : quelle est la différence ?",
    metaDescription:
      "Le PNG et le SVG ne résolvent pas le même problème. Découvrez en quoi les PNG matriciels et les SVG vectoriels diffèrent réellement, avec un comparatif et des conseils pour savoir quand utiliser chacun.",
    h1: "PNG vs SVG : quelle est la différence ?",
    intro:
      "Le PNG et le SVG sont deux formats d'image très répandus sur le web, mais ils stockent une image de façon fondamentalement différente. Comprendre cette différence vous aide à choisir le bon format pour un logo, une icône, une photo ou un fichier de découpe.",
    breadcrumbLabel: "PNG vs SVG",
    sections: [
      {
        heading: "Qu'est-ce qu'un fichier PNG ?",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Un fichier PNG (Portable Network Graphics) est une image matricielle (« raster ») : une grille fixe de pixels colorés, comme un JPEG. Chaque pixel stocke sa propre valeur de couleur, et le nombre total de pixels est fixé au moment de la création du fichier. Le PNG gère aussi une véritable transparence alpha, ce qui en fait le format standard pour les icônes, les captures d'écran et les logos à arrière-plan transparent.",
              "Comme un PNG n'est qu'une grille de pixels, l'agrandir revient à étirer ces mêmes pixels sur une surface plus grande — c'est exactement ce qui provoque le flou ou l'effet « pixelisé » visible lorsqu'on agrandit un PNG au-delà de ses dimensions d'origine.",
            ],
          },
        ],
      },
      {
        heading: "Qu'est-ce qu'un fichier SVG ?",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Un fichier SVG (Scalable Vector Graphics) décrit une image comme un ensemble de formes et de tracés mathématiques — lignes, courbes et remplissages — plutôt que des pixels individuels. Un cercle est stocké comme « un cercle de tel rayon », et non comme des milliers de points colorés individuels.",
              "C'est ce qui rend les SVG redimensionnables à l'infini : un navigateur ou un logiciel de design redessine les formes à la volée, quelle que soit la taille souhaitée, si bien qu'un logo SVG reste tout aussi net sur l'icône d'un téléphone que sur un panneau publicitaire. Les SVG sont également du texte brut (XML), donc modifiables dans n'importe quel éditeur de texte ou logiciel de design vectoriel.",
            ],
          },
        ],
      },
      {
        heading: "PNG vs SVG : les différences clés",
        blocks: [
          {
            kind: "table",
            headers: ["", "PNG", "SVG"],
            rows: [
              ["Données sous-jacentes", "Grille de pixels", "Tracés et formes mathématiques"],
              ["Redimensionnement", "Perd en qualité au-delà de la taille d'origine", "S'adapte à toute taille sans perte de qualité"],
              ["Poids du fichier", "Plus lourd pour des graphismes simples", "Généralement plus léger pour logos/icônes"],
              ["Modifiabilité", "Édition pixel uniquement (Photoshop, etc.)", "Formes directement modifiables (Illustrator, Inkscape)"],
              ["Transparence", "Prise en charge (canal alpha)", "Prise en charge (remplissage/opacité)"],
              ["Idéal pour", "Photographies, textures complexes", "Logos, icônes, illustrations, fichiers de découpe"],
            ],
          },
        ],
      },
      {
        heading: "Quand utiliser le PNG plutôt que le SVG (et inversement)",
        blocks: [
          {
            kind: "list",
            intro: "Voici une règle simple :",
            items: [
              "Utilisez le SVG pour les logos, icônes, dessins au trait et tout ce qui doit être redimensionné ou découpé — y compris les fichiers pour [projets Cricut](/use-cases/cricut) et découpeuses laser.",
              "Utilisez le PNG pour les photographies et les images avec des dégradés ou textures complexes qui se prêtent mal à des formes simples.",
              "Si vous avez déjà un logo ou une icône en PNG et avez besoin d'un SVG, inutile de le redessiner à la main : vous pouvez le vectoriser automatiquement. Découvrez [comment fonctionne la vectorisation d'image](/guides/how-image-tracing-works) pour tous les détails.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Puis-je simplement renommer un fichier PNG en .svg ?",
        answer:
          "Non. Changer l'extension du fichier ne change rien aux données sous-jacentes — la grille de pixels d'un PNG doit être vectorisée en tracés pour devenir un véritable SVG.",
      },
      {
        question: "Le SVG est-il toujours meilleur que le PNG ?",
        answer:
          "Pas pour tous les usages. Le SVG est préférable pour les graphismes redimensionnables comme les logos et icônes, mais le PNG (ou le JPEG) reste le bon choix pour les photographies, où une vectorisation ferait perdre du détail réaliste.",
      },
      {
        question: "Les navigateurs gèrent-ils le SVG de la même façon que le PNG ?",
        answer:
          "Oui. Tous les navigateurs modernes affichent le SVG nativement, et il peut être utilisé partout où une balise <img> ou une image d'arrière-plan CSS fonctionne.",
      },
    ],
    related: [
      {
        href: "/guides/raster-vs-vector",
        label: "Raster vs vecteur : le guide complet",
        description: "Un regard plus approfondi sur la distinction raster/vecteur, au-delà du seul PNG et SVG.",
      },
      {
        href: "/use-cases/cricut",
        label: "PNG vers SVG pour Cricut",
        description: "Transformez un design PNG en SVG prêt à découper pour Cricut Design Space.",
      },
    ],
    relatedHeading: "Guides associés",
  },

  "how-image-tracing-works": {
    slug: "guides/how-image-tracing-works",
    keyword: "comment fonctionne la vectorisation d'image",
    title: "Comment fonctionne la vectorisation d'image ?",
    metaDescription:
      "Une explication simple de la façon dont la vectorisation d'image transforme un PNG matriciel en tracés vectoriels SVG : détection des couleurs, détection des contours et lissage des courbes.",
    h1: "Comment fonctionne la vectorisation d'image ?",
    intro:
      "La vectorisation d'image (aussi appelée autotracing) est le procédé qu'utilise un convertisseur pour transformer une image en pixels en un ensemble de tracés vectoriels. Voici ce qui se passe réellement en coulisses.",
    breadcrumbLabel: "Fonctionnement de la vectorisation",
    sections: [
      {
        heading: "Des pixels aux tracés : la vue d'ensemble",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Un algorithme de vectorisation examine une image matricielle région par région, en fonction des zones de couleur similaire, détermine la frontière entre chaque région et ses voisines, puis décrit cette frontière sous forme de courbe mathématique lisse plutôt que d'un escalier de pixels individuels. En répétant l'opération pour chaque région de couleur distincte, on obtient une version vectorielle complète de l'image d'origine.",
            ],
          },
        ],
      },
      {
        heading: "Étape 1 : détection des couleurs et quantification",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "La plupart des images sources contiennent bien plus de couleurs que ce que l'on souhaiterait avoir comme formes vectorielles distinctes — une simple photo peut compter des millions de valeurs de pixels uniques à cause du bruit de compression et des dégradés. La quantification regroupe les couleurs similaires en une palette réduite et fixe (vous contrôlez ce nombre via le réglage du nombre de couleurs), de sorte que l'image soit simplifiée en zones nettes et distinctes avant le début de la vectorisation.",
            ],
          },
        ],
      },
      {
        heading: "Étape 2 : détection des contours",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Une fois que chaque pixel est associé à une couleur de la palette, l'algorithme parcourt l'image pour repérer où une région de couleur se termine et où une autre commence. Ces frontières sont d'abord tracées pixel par pixel, produisant un contour en dents de scie qui suit les marches de la grille matricielle d'origine.",
            ],
          },
        ],
      },
      {
        heading: "Étape 3 : construction des tracés et lissage des courbes",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Le contour en dents de scie est ensuite lissé en un nombre réduit de lignes droites et de courbes quadratiques qui l'approximent dans une marge d'erreur donnée — c'est le réglage « détail » ou « lissage » d'un outil de vectorisation. Un seuil plus bas colle davantage aux contours de pixels d'origine (plus de nœuds, plus de détail) ; un seuil plus élevé produit des courbes moins nombreuses et plus lisses.",
            ],
          },
        ],
      },
      {
        heading: "Vectorisation Noir & Blanc vs Couleur",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Le mode Noir & Blanc réduit toute l'image à deux couleurs seulement (premier plan et arrière-plan) avant la vectorisation, produisant un seul tracé propre — idéal pour les [logos](/guides/convert-logo-to-svg), les dessins au trait et les fichiers de découpe pour le vinyle ou le laser. Le mode Couleur conserve plusieurs couleurs de la palette et vectorise chacune comme un calque distinct, ce qu'il faut pour les photographies ou les illustrations multicolores.",
            ],
          },
        ],
      },
      {
        heading: "Ce qui se vectorise bien (et ce qui se vectorise mal)",
        blocks: [
          {
            kind: "list",
            intro: "La vectorisation donne les meilleurs résultats sur :",
            items: [
              "Les logos, icônes et badges en couleurs unies — peu de couleurs, contours nets",
              "Les dessins au trait et croquis — fort contraste entre l'encre et l'arrière-plan",
              "Les illustrations simples avec des zones de couleur bien distinctes et séparées",
            ],
          },
          {
            kind: "list",
            intro: "La vectorisation est plus difficile sur :",
            items: [
              "Les photographies avec des dégradés doux ou beaucoup de texture fine (cheveux, herbe, tissu)",
              "Les images à très faible contraste, où le premier plan et l'arrière-plan sont difficiles à séparer",
              "Les JPEG fortement compressés puis réenregistrés en PNG, qui introduisent un bruit de couleur que la quantification doit lisser",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "La vectorisation produit-elle une copie pixel pour pixel de mon image ?",
        answer:
          "Non — la vectorisation approxime votre image avec un nombre limité de couleurs et des courbes lissées, si bien que les détails très fins sont simplifiés. Pour les logos et les dessins au trait, c'est généralement invisible ; pour les photos, cela produit un résultat plus stylisé, façon affiche.",
      },
      {
        question: "Pourquoi mon SVG vectorisé a-t-il l'air anguleux si le détail est trop bas ?",
        answer:
          "Un réglage de détail/lissage trop bas colle le tracé de très près aux contours de pixels d'origine, ce qui peut paraître anguleux sur des formes courbes. Augmenter le lissage permet à l'algorithme d'utiliser des courbes moins nombreuses et plus longues pour un résultat plus net.",
      },
      {
        question: "Est-ce la même technologie que l'Image Trace d'Adobe ?",
        answer:
          "Le principe sous-jacent — quantifier les couleurs, détecter les contours, ajuster des courbes — est la même approche générale qu'utilisent des outils comme l'Image Trace d'Adobe Illustrator et d'autres logiciels d'autotracing.",
      },
    ],
    related: [
      {
        href: "/guides/png-vs-svg",
        label: "PNG vs SVG : quelle est la différence ?",
        description: "La différence de format qui rend la vectorisation nécessaire en premier lieu.",
      },
      {
        href: "/guides/convert-logo-to-svg",
        label: "Comment convertir un logo en SVG",
        description: "Appliquez tout ce qui précède à un vrai logo, étape par étape.",
      },
      {
        href: "/use-cases/embroidery-digitizing",
        label: "PNG vers SVG pour la broderie",
        description: "Pourquoi une vectorisation propre compte pour les logiciels de digitalisation de broderie.",
      },
    ],
    relatedHeading: "Guides associés",
  },

  "convert-logo-to-svg": {
    slug: "guides/convert-logo-to-svg",
    keyword: "convertir un logo en svg",
    title: "Comment convertir un logo en SVG",
    metaDescription:
      "Convertissez un logo PNG en SVG propre et redimensionnable en quatre étapes. Obtenez des résultats nets pour sites web, impression et fichiers de découpe sans redessiner le logo à la main.",
    h1: "Comment convertir un logo en SVG",
    intro:
      "Un logo est l'un des meilleurs candidats pour une conversion vectorielle : des couleurs unies, des contours nets et un vrai besoin de s'adapter d'un favicon à une enseigne de magasin sans jamais paraître flou.",
    breadcrumbLabel: "Convertir un logo en SVG",
    sections: [
      {
        heading: "Pourquoi les logos doivent être en SVG",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Un logo apparaît partout : un favicon de 32 px, l'en-tête d'un site web, une carte de visite, un covering de véhicule, une enseigne découpée au laser. Un simple PNG ne peut être net que dans une plage de tailles donnée ; une version SVG reste tout aussi nette à toutes les tailles, car elle est redessinée à partir de calculs mathématiques plutôt qu'étirée à partir de pixels.",
              "Les logos en SVG sont aussi ce qu'attendent la plupart des logiciels de design et de fabrication. Si vous prévoyez de passer votre logo par [Cricut Design Space](/use-cases/cricut) ou un logiciel de découpe laser, vous avez besoin de données vectorielles, pas d'une image matricielle.",
            ],
          },
        ],
      },
      {
        heading: "Comment convertir votre logo en SVG en 4 étapes",
        blocks: [
          {
            kind: "steps",
            steps: [
              {
                title: "1. Partez du PNG à la plus haute résolution dont vous disposez",
                body: "La vectorisation ne travaille qu'avec le détail présent dans le fichier source, donc un PNG en plus haute résolution donne à l'algorithme des contours plus propres à exploiter.",
              },
              {
                title: "2. Importez-le et choisissez le mode Noir & Blanc",
                body: "La plupart des logos n'ont qu'une ou deux couleurs, donc le mode Noir & Blanc donne le tracé unique le plus propre. N'utilisez le mode Couleur que si votre logo a réellement plusieurs couleurs distinctes que vous souhaitez conserver.",
              },
              {
                title: "3. Ajustez le détail jusqu'à obtenir des contours nets, pas anguleux",
                body: "Augmentez légèrement le lissage si vous voyez des contours rugueux, en escalier, sur les courbes ; diminuez-le si des détails fins (comme du petit texte) se perdent.",
              },
              {
                title: "4. Téléchargez et vérifiez à taille réelle",
                body: "Ouvrez le SVG et zoomez : une bonne vectorisation reste nette à toute taille. Si les contours semblent bizarres, ajustez les réglages et retéléchargez.",
              },
            ],
          },
        ],
      },
      {
        heading: "Conseils pour de meilleurs résultats avec les logos",
        blocks: [
          {
            kind: "list",
            items: [
              "Partez d'un PNG à arrière-plan transparent si vous prévoyez de placer le logo sur d'autres couleurs ou images.",
              "Si votre logo contient du texte fin, gardez le détail/lissage plutôt bas pour que les petites lettres ne se fondent pas entre elles.",
              "Après la conversion, vous pouvez nettoyer certains nœuds ou simplifier davantage les tracés dans un éditeur vectoriel — voir [comment modifier un SVG après conversion](/guides/edit-svg-after-conversion).",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Les couleurs de mon logo seront-elles préservées exactement ?",
        answer:
          "En mode Couleur, la palette vectorisée se rapproche fidèlement de vos couleurs d'origine. Pour une correspondance exacte avec vos couleurs de marque, vous pouvez ensuite ajuster la couleur de remplissage de chaque tracé dans un éditeur vectoriel.",
      },
      {
        question: "Que se passe-t-il si mon logo a un dégradé ?",
        answer:
          "La vectorisation approxime les dégradés par une série de bandes de couleur unie plutôt qu'un véritable dégradé. Pour un logo avec un dégradé doux, envisagez de recréer le dégradé manuellement dans un éditeur vectoriel après avoir vectorisé les formes unies.",
      },
      {
        question: "Puis-je convertir un logo contenant du texte ?",
        answer:
          "Oui, même si le texte devient des formes détourées plutôt que des caractères de police modifiables. Si vous disposez du fichier de police d'origine, il est souvent plus propre de recréer le texte séparément et de ne vectoriser que l'élément graphique.",
      },
    ],
    related: [
      {
        href: "/guides/how-image-tracing-works",
        label: "Comment fonctionne la vectorisation d'image ?",
        description: "Les mécanismes derrière la conversion que vous venez d'effectuer.",
      },
      {
        href: "/guides/edit-svg-after-conversion",
        label: "Comment modifier un fichier SVG après conversion",
        description: "Nettoyez et ajustez votre logo vectorisé dans Illustrator, Inkscape ou Figma.",
      },
      {
        href: "/use-cases/laser-cutting",
        label: "PNG vers SVG pour la découpe laser",
        description: "Transformez votre nouveau logo SVG en enseigne ou panneau découpé au laser.",
      },
    ],
    relatedHeading: "Guides associés",
  },

  "edit-svg-after-conversion": {
    slug: "guides/edit-svg-after-conversion",
    keyword: "modifier un fichier svg",
    title: "Comment modifier un fichier SVG après conversion",
    metaDescription:
      "Apprenez à ouvrir et modifier un fichier SVG dans Illustrator, Inkscape (gratuit) ou Figma, ainsi que les tâches de nettoyage courantes après avoir vectorisé un PNG en tracés vectoriels.",
    h1: "Comment modifier un fichier SVG après conversion",
    intro:
      "Un SVG vectorisé est un excellent point de départ, mais vous voudrez souvent nettoyer un tracé, fusionner quelques formes ou ajuster une couleur. Le résultat étant de vraies données vectorielles, tout cela reste simple dans n'importe quel éditeur vectoriel.",
    breadcrumbLabel: "Modifier un fichier SVG",
    sections: [
      {
        heading: "Modifier votre SVG dans Adobe Illustrator",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Ouvrez directement le fichier SVG via Fichier > Ouvrir — Illustrator l'importe sous forme de tracés natifs et modifiables.",
              "Utilisez l'outil Sélection directe (A) pour sélectionner et ajuster des points d'ancrage et des courbes individuels.",
              "Utilisez Objet > Tracé > Simplifier pour réduire le nombre de points d'ancrage si une forme paraît trop complexe.",
              "Réenregistrez ou exportez en SVG une fois terminé pour garder un fichier léger.",
            ],
          },
        ],
      },
      {
        heading: "Modifier votre SVG dans Inkscape (gratuit)",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Inkscape est un éditeur vectoriel gratuit et open source qui ouvre les fichiers SVG nativement — une bonne alternative gratuite à Illustrator.",
              "Utilisez l'outil Nœuds (N) pour modifier des points individuels sur un tracé vectorisé.",
              "Tracé > Simplifier (Ctrl+L) réduit le nombre de nœuds sur une vectorisation trop détaillée.",
              "Utilisez Édition > Rechercher/Remplacer ou l'éditeur XML pour inspecter et nettoyer la structure du tracé si besoin.",
            ],
          },
        ],
      },
      {
        heading: "Modifier votre SVG dans Figma",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Glissez-déposez le fichier SVG directement sur un plan de travail Figma, ou utilisez Fichier > Importer.",
              "Figma importe chaque zone de couleur vectorisée comme un calque vectoriel distinct, que vous pouvez sélectionner, recolorer ou supprimer individuellement.",
              "Utilisez l'outil Plume pour ajuster les points d'ancrage, ou faites un clic droit sur un calque et choisissez Aplatir pour fusionner les formes qui se chevauchent.",
            ],
          },
        ],
      },
      {
        heading: "Tâches de nettoyage courantes après vectorisation",
        blocks: [
          {
            kind: "list",
            items: [
              "Simplifier les tracés : réduire les points d'ancrage d'une forme vectorisée avec plus de détail que nécessaire.",
              "Fusionner des formes : combiner des zones adjacentes de même couleur en un seul tracé pour un fichier plus propre.",
              "Recolorer : remplacer une couleur approximative vectorisée par votre couleur de marque exacte.",
              "Supprimer les formes parasites : effacer les petits artefacts d'arrière-plan qui apparaissent parfois à cause du bruit dans le PNG source.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Ai-je besoin d'un logiciel payant pour modifier un SVG ?",
        answer:
          "Non. Inkscape est gratuit, open source et parfaitement capable de modifier des fichiers SVG vectorisés — c'est souvent le premier choix pour ce type de nettoyage.",
      },
      {
        question: "Pourquoi mon SVG vectorisé a-t-il plus de tracés que prévu ?",
        answer:
          "Chaque zone de couleur distincte devient son propre tracé, donc une image source plus chargée ou un nombre de couleurs plus élevé produit davantage de tracés. Vous pouvez les fusionner ou les simplifier dans n'importe quel éditeur vectoriel.",
      },
      {
        question: "Puis-je modifier un SVG dans un simple éditeur de texte ?",
        answer:
          "Oui — le SVG est en réalité du texte XML, donc vous pouvez l'ouvrir dans n'importe quel éditeur de texte et modifier à la main les données ou attributs des tracés, même si un éditeur visuel est bien plus simple pour la plupart des modifications.",
      },
    ],
    related: [
      {
        href: "/guides/convert-logo-to-svg",
        label: "Comment convertir un logo en SVG",
        description: "Obtenez une vectorisation de logo propre avant de commencer à la modifier.",
      },
      {
        href: "/guides/how-image-tracing-works",
        label: "Comment fonctionne la vectorisation d'image ?",
        description: "Comprenez pourquoi les tracés vectorisés ont cet aspect avant de les modifier.",
      },
      {
        href: "/use-cases/silhouette-vinyl-cutting",
        label: "PNG vers SVG pour Silhouette",
        description: "Nettoyez un design vectorisé avant de l'envoyer vers Silhouette Studio.",
      },
    ],
    relatedHeading: "Guides associés",
  },

  "raster-vs-vector": {
    slug: "guides/raster-vs-vector",
    keyword: "raster vs vecteur",
    title: "Raster vs vecteur : le guide complet",
    metaDescription:
      "Les graphismes matriciels et vectoriels stockent les images de façons totalement différentes. Comparez les deux, découvrez où chacun excelle, et apprenez à convertir de l'un à l'autre.",
    h1: "Raster vs vecteur : le guide complet",
    intro:
      "Toute image numérique est soit matricielle (raster), soit vectorielle. Connaître la différence — et savoir laquelle convient réellement à une tâche donnée — vous évite aussi bien les logos flous que les photos impossibles à modifier.",
    breadcrumbLabel: "Raster vs vecteur",
    sections: [
      {
        heading: "Qu'est-ce qu'une image matricielle (raster) ?",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Les graphismes matriciels (PNG, JPEG, GIF, BMP) stockent une image sous forme d'une grille fixe de pixels, chacun ayant sa propre couleur. Les appareils photo numériques, les scanners et les captures d'écran produisent tous des images matricielles, car c'est ainsi que les capteurs de lumière et les écrans capturent et affichent réellement les images — pixel par pixel.",
              "La contrepartie, c'est la dépendance à la résolution : une image matricielle n'est correcte que jusqu'à ses dimensions natives en pixels. Au-delà, le logiciel doit deviner de nouvelles valeurs de pixels pour combler les vides, ce qui explique pourquoi les images matricielles agrandies paraissent floues ou pixelisées.",
            ],
          },
        ],
      },
      {
        heading: "Qu'est-ce qu'une image vectorielle ?",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Les graphismes vectoriels (SVG, EPS, AI, PDF au format vectoriel) stockent une image sous forme de descriptions mathématiques de formes : points, lignes et courbes, chacune avec un remplissage ou un contour défini. Il n'y a pas de résolution fixe, car les formes sont recalculées à chaque affichage ou impression de l'image.",
              "Cela rend les vecteurs idéaux pour tout ce qui doit être redimensionné : logos, icônes, typographie, illustrations techniques, et tracés de découpe pour des machines comme les découpeuses laser, Cricut ou Silhouette.",
            ],
          },
        ],
      },
      {
        heading: "Raster vs vecteur : comparatif côte à côte",
        blocks: [
          {
            kind: "table",
            headers: ["", "Raster", "Vecteur"],
            rows: [
              ["Composé de", "Pixels", "Points, lignes, courbes"],
              ["Résolution", "Fixée aux dimensions source", "Indépendante de la résolution"],
              ["Contenu idéal", "Photos, textures complexes", "Logos, icônes, dessins au trait, tracés de découpe"],
              ["Formats courants", "PNG, JPEG, GIF, BMP", "SVG, EPS, AI"],
              ["Modification", "Au niveau du pixel (Photoshop, GIMP)", "Au niveau de la forme (Illustrator, Inkscape, Figma)"],
            ],
          },
        ],
      },
      {
        heading: "Convertir entre raster et vecteur",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Passer du vecteur au raster (« rastérisation ») est simple : il suffit de restituer les formes sous forme d'une grille de pixels à la taille voulue, ce qui se produit automatiquement quand vous exportez un PNG depuis un logiciel de design.",
              "Passer dans l'autre sens — du raster au vecteur — nécessite une vectorisation : analyser la grille de pixels, regrouper les couleurs similaires, et ajuster des courbes mathématiques sur les frontières entre elles. Consultez [comment fonctionne la vectorisation d'image](/guides/how-image-tracing-works) pour une explication complète de ce processus, ou [convertissez un PNG en SVG](/) directement.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Une image vectorielle peut-elle parfois avoir un mauvais rendu ?",
        answer:
          "Oui, si vous essayez de faire tenir un détail photographique fin dans un petit nombre de formes vectorielles — le résultat perd en texture réaliste et ressemble davantage à une illustration plate, façon affiche.",
      },
      {
        question: "Le SVG est-il un format raster ou vectoriel ?",
        answer:
          "Le SVG est un format vectoriel : il stocke des tracés et des formes, pas des pixels individuels, ce qui explique qu'il reste net à toute taille.",
      },
      {
        question: "Quel format utiliser pour le favicon d'un site web ?",
        answer:
          "Le SVG est généralement le meilleur choix pour un favicon, car il reste net sur toute la gamme de tailles que demandent les navigateurs, même si un PNG de secours reste courant pour la compatibilité avec les anciens navigateurs.",
      },
    ],
    related: [
      {
        href: "/guides/png-vs-svg",
        label: "PNG vs SVG : quelle est la différence ?",
        description: "Une version plus ciblée, propre à ces deux formats, de cette même question raster vs vecteur.",
      },
      {
        href: "/guides/how-image-tracing-works",
        label: "Comment fonctionne la vectorisation d'image ?",
        description: "Le processus technique derrière la conversion du raster vers le vecteur.",
      },
      {
        href: "/use-cases/embroidery-digitizing",
        label: "PNG vers SVG pour la broderie",
        description: "Un cas concret où les tracés vectoriels comptent plus que les pixels.",
      },
    ],
    relatedHeading: "Guides associés",
  },
};
