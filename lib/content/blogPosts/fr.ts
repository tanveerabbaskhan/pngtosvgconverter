import type { ContentPage } from "../types";

export const blogPosts: Record<string, ContentPage> = {
  "vinyl-decal-from-photo-tutorial": {
    slug: "blog/vinyl-decal-from-photo-tutorial",
    keyword: "créer un sticker vinyle à partir d'une photo",
    title: "Comment créer un sticker vinyle à partir d'une photo",
    metaDescription:
      "Un tutoriel étape par étape pour transformer une photo en sticker vinyle prêt à découper : préparation de l'image, vectorisation en SVG et découpe sur une découpeuse vinyle domestique.",
    h1: "Comment créer un sticker vinyle à partir d'une photo",
    intro:
      "Transformer une photo en sticker vinyle passe d'abord par la conversion en un seul tracé de découpe propre. Voici le processus complet, de la photo source au sticker terminé.",
    breadcrumbLabel: "Sticker vinyle à partir d'une photo",
    publishedAt: "2026-03-02",
    sections: [
      {
        heading: "Étape 1 : choisir (ou préparer) une photo à fort contraste",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Les stickers vinyle sont des tracés de découpe monochromes, donc les meilleures photos source ont un sujet net et très contrasté sur un arrière-plan simple — pensez à une silhouette, un portrait d'animal bien détaché de l'arrière-plan, ou une forme graphique simple. Si votre photo est chargée ou peu contrastée, envisagez de recadrer serré sur le sujet ou d'augmenter le contraste dans un éditeur de photo avant la vectorisation.",
            ],
          },
        ],
      },
      {
        heading: "Étape 2 : vectoriser la photo en SVG",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Importez votre photo préparée dans [un convertisseur PNG en SVG gratuit](/) et choisissez le mode Noir & Blanc — cela réduit l'image à une seule forme de premier plan, exactement ce dont a besoin une découpeuse vinyle. Ajustez le réglage de détail/lissage jusqu'à ce que le contour paraisse propre : trop de détail peut laisser de minuscules éléments difficiles à retirer ; pas assez peut faire perdre des détails importants de la forme.",
            ],
          },
        ],
      },
      {
        heading: "Étape 3 : nettoyer le tracé",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Ouvrez le SVG téléchargé dans Inkscape, Illustrator ou le logiciel de votre découpeuse et vérifiez s'il y a des formes parasites ou des îlots déconnectés, ce qui est courant avec des photos source chargées. Supprimez tout ce qui ne fait pas partie du design principal — consultez notre guide sur [la modification d'un SVG après conversion](/guides/edit-svg-after-conversion) pour des astuces propres à chaque outil.",
            ],
          },
        ],
      },
      {
        heading: "Étape 4 : découper, retirer l'excédent et appliquer",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Importez le SVG nettoyé dans le logiciel de votre découpeuse (le principe est le même pour les machines [Cricut](/use-cases/cricut) et Silhouette).",
              "Redimensionnez le design pour votre projet et choisissez la bonne lame et pression pour votre vinyle.",
              "Découpez, puis retirez l'excédent de vinyle autour et à l'intérieur du design.",
              "Appliquez du transfert sur le design, soulevez-le d'un seul tenant, et pressez-le sur sa surface finale.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Quel type de photo fonctionne le mieux pour un sticker ?",
        answer:
          "Une photo avec un sujet net et un arrière-plan simple et très contrasté se vectorise le plus proprement — les photos chargées ou peu contrastées nécessitent souvent d'abord un recadrage ou un ajustement du contraste.",
      },
      {
        question: "Ai-je besoin de Photoshop pour préparer la photo ?",
        answer:
          "Non — le recadrage et l'augmentation du contraste peuvent se faire dans presque n'importe quel éditeur de photo gratuit. L'étape de vectorisation elle-même ne nécessite aucun logiciel au-delà du convertisseur dans le navigateur.",
      },
    ],
    related: [
      {
        href: "/guides/edit-svg-after-conversion",
        label: "Comment modifier un fichier SVG après conversion",
        description: "Nettoyez les formes parasites et simplifiez le tracé de votre sticker vectorisé.",
      },
      {
        href: "/use-cases/silhouette-vinyl-cutting",
        label: "PNG vers SVG pour Silhouette",
        description: "Le même processus, adapté à Silhouette Studio.",
      },
    ],
    relatedHeading: "Lectures associées",
  },

  "best-png-to-svg-converters": {
    slug: "blog/best-png-to-svg-converters",
    keyword: "meilleurs convertisseurs png vers svg",
    title: "Meilleurs convertisseurs PNG vers SVG : comparatif par catégorie",
    metaDescription:
      "Tous les convertisseurs PNG vers SVG ne fonctionnent pas de la même façon. Comparez les outils en navigateur, les logiciels vectoriels de bureau et les services payants pour trouver celui qui vous convient.",
    h1: "Meilleurs convertisseurs PNG vers SVG : comparatif par catégorie",
    intro:
      "Le « meilleur convertisseur » dépend surtout de ce que vous privilégiez le plus : confidentialité, coût, traitement par lots ou contrôle fin. Voici comment se comparent les principales catégories.",
    breadcrumbLabel: "Meilleurs convertisseurs",
    publishedAt: "2026-02-18",
    sections: [
      {
        heading: "Les convertisseurs gratuits en navigateur",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Des outils comme [notre convertisseur PNG en SVG](/) fonctionnent entièrement dans votre navigateur grâce à l'API Canvas — votre image ne quitte jamais votre appareil, aucun compte n'est nécessaire, et les résultats sont instantanés. La contrepartie, c'est que les outils en navigateur exposent généralement moins de paramètres de vectorisation fins que les logiciels de bureau professionnels, même si un bon outil couvre tout de même les réglages les plus importants : nombre de couleurs, détail et transparence.",
            ],
          },
        ],
      },
      {
        heading: "Les logiciels vectoriels de bureau",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "L'Image Trace d'Adobe Illustrator et le Trace Bitmap d'Inkscape sont des outils de vectorisation complets, intégrés à des éditeurs vectoriels généralistes. Ils offrent un contrôle poussé sur l'algorithme de vectorisation et permettent de modifier immédiatement le résultat dans la même application. La contrepartie est le coût (pour Illustrator) ou une courbe d'apprentissage plus raide, puisque vous apprenez toute une application de design plutôt qu'un outil dédié à une seule tâche.",
            ],
          },
        ],
      },
      {
        heading: "Les bibliothèques en ligne de commande et open source",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Des bibliothèques comme Potrace et ses nombreuses variantes alimentent en coulisses beaucoup d'outils de vectorisation, aussi bien en navigateur que de bureau. Les utiliser directement en ligne de commande offre une conversion scriptable et adaptée au traitement par lots, mais demande d'être à l'aise avec un terminal et une configuration manuelle plutôt qu'une interface visuelle.",
            ],
          },
        ],
      },
      {
        heading: "Ce qu'il faut rechercher, quel que soit votre choix",
        blocks: [
          {
            kind: "list",
            items: [
              "Un vrai SVG à base de tracés, pas une image matricielle enveloppée dans une balise SVG — vérifiez le fichier téléchargé pour de véritables éléments `<path>`.",
              "La prise en charge du mode de vectorisation dont vous avez besoin : Noir & Blanc pour les logos et dessins au trait, Couleur pour les photos et illustrations multicolores.",
              "La gestion de la transparence, si vos images source ont des arrière-plans transparents — voir [comment fonctionne la vectorisation d'image](/guides/how-image-tracing-works) pour comprendre pourquoi c'est important.",
              "Si vos images sont envoyées sur un serveur ou traitées localement, si la confidentialité compte pour votre usage.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Un convertisseur en navigateur vaut-il un logiciel de bureau ?",
        answer:
          "Pour des tâches courantes comme les logos, icônes et fichiers de découpe, un bon convertisseur en navigateur couvre les réglages les plus importants. Les logiciels de bureau professionnels offrent un contrôle plus poussé pour des cas avancés ou particuliers.",
      },
      {
        question: "Les convertisseurs gratuits sont-ils sûrs pour un travail client ?",
        answer:
          "Cela dépend entièrement de la façon dont l'outil traite vos fichiers — un convertisseur qui vectorise les images localement dans votre navigateur ne les envoie jamais où que ce soit, ce qui vaut la peine d'être vérifié si la confidentialité compte pour votre projet.",
      },
    ],
    related: [
      {
        href: "/guides/how-image-tracing-works",
        label: "Comment fonctionne la vectorisation d'image ?",
        description: "Comprenez l'algorithme sur lequel repose chaque convertisseur de ce comparatif.",
      },
      {
        href: "/use-cases/cricut",
        label: "PNG vers SVG pour Cricut",
        description: "Un exemple concret de choix du bon convertisseur pour un projet précis.",
      },
    ],
    relatedHeading: "Lectures associées",
  },

  "why-is-my-svg-blurry": {
    slug: "blog/why-is-my-svg-blurry",
    keyword: "pourquoi mon svg est flou",
    title: "Pourquoi mon SVG est-il flou ? Causes fréquentes et solutions",
    metaDescription:
      "Un SVG ne devrait jamais paraître flou, quelle que soit sa taille — si c'est le cas du vôtre, voici les causes les plus fréquentes, des fichiers raster déguisés aux réglages de rendu et d'export.",
    h1: "Pourquoi mon SVG est-il flou ? Causes fréquentes et solutions",
    intro:
      "Les SVG sont des fichiers vectoriels, ils ne devraient donc jamais perdre en netteté, quelle que soit la taille. Si votre SVG paraît flou, un problème précis se produit — voici comment le repérer.",
    breadcrumbLabel: "Pourquoi mon SVG est flou",
    publishedAt: "2026-01-27",
    sections: [
      {
        heading: "Votre « SVG » est peut-être en réalité une image matricielle",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "La cause la plus fréquente : certains outils produisent un fichier SVG qui se contente d'envelopper un PNG ou JPEG encodé en Base64 dans une balise `<image>`, plutôt que de vectoriser de vrais tracés. Il porte l'extension .svg, mais reste une image matricielle sous le capot, et devient donc flou en s'agrandissant, exactement comme le ferait un PNG. Ouvrez le fichier dans un éditeur de texte : si vous voyez une longue chaîne Base64 au lieu d'éléments `<path>`, voilà votre réponse. Consultez [PNG vs SVG](/guides/png-vs-svg) pour comprendre pourquoi cette distinction compte.",
            ],
          },
        ],
      },
      {
        heading: "La vectorisation a été réglée sur un détail très élevé pour une image bruitée",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Contre-intuitivement, vectoriser une image source de mauvaise qualité ou fortement compressée avec un détail très élevé peut produire un très grand nombre de petits segments de tracé anguleux, qui paraissent rugueux plutôt que lisses — la vectorisation reproduit fidèlement le bruit du fichier d'origine. Essayez de revectoriser à partir d'une image source plus propre, ou augmentez le réglage de lissage pour que l'algorithme privilégie des courbes moins nombreuses et plus lisses.",
            ],
          },
        ],
      },
      {
        heading: "Le SVG est rastérisé quelque part dans votre chaîne de traitement",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Certaines plateformes (certains gestionnaires d'images de CMS, d'anciens navigateurs, ou des réglages d'export dans des logiciels de design) convertissent un SVG en image matricielle à une résolution fixe avant de l'afficher — il hérite alors de tous les problèmes de mise à l'échelle d'un PNG. Vérifiez si la plateforme que vous utilisez propose une option pour servir ou intégrer le SVG nativement plutôt que de le convertir.",
            ],
          },
        ],
      },
      {
        heading: "Comment résoudre le problème",
        blocks: [
          {
            kind: "list",
            items: [
              "Revectorisez à partir du PNG d'origine avec un outil qui produit de vraies données de tracé — [essayez le convertisseur PNG en SVG gratuit](/) et vérifiez le résultat avant de l'utiliser.",
              "Si le détail paraît anguleux, augmentez le réglage de lissage et retéléchargez.",
              "Si une plateforme rastérise votre SVG à l'affichage, cherchez un réglage pour l'intégrer ou le lier comme un SVG natif plutôt qu'une image convertie.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Comment vérifier rapidement si mon SVG est vraiment vectoriel ?",
        answer:
          "Ouvrez le fichier dans un éditeur de texte et recherchez des éléments `<path>`, `<circle>` ou similaires. Si vous voyez à la place une longue chaîne Base64 dans une balise `<image>`, il s'agit d'une image matricielle déguisée en SVG.",
      },
      {
        question: "Zoomer dans un navigateur rend-il un SVG flou ?",
        answer:
          "Non — un véritable SVG vectoriel reste net à n'importe quel niveau de zoom du navigateur. S'il devient flou quand vous zoomez, le fichier est très probablement une image matricielle plutôt que de vrais tracés vectoriels.",
      },
    ],
    related: [
      {
        href: "/guides/png-vs-svg",
        label: "PNG vs SVG : quelle est la différence ?",
        description: "Pourquoi un fichier réellement vectoriel se comporte si différemment d'un fichier matriciel.",
      },
      {
        href: "/use-cases/laser-cutting",
        label: "PNG vers SVG pour la découpe laser",
        description: "Un cas d'usage où un faux SVG déguisé en raster échoue complètement.",
      },
    ],
    relatedHeading: "Lectures associées",
  },

  "svg-vs-png-for-icons": {
    slug: "blog/svg-vs-png-for-icons",
    keyword: "svg ou png pour les icônes",
    title: "SVG ou PNG pour les icônes : lequel choisir ?",
    metaDescription:
      "Comparaison entre SVG et PNG spécifiquement pour les icônes de site web et d'application — poids de fichier, mise à l'échelle sur différents appareils, mise en forme avec CSS, et quand le PNG reste pertinent.",
    h1: "SVG ou PNG pour les icônes : lequel choisir ?",
    intro:
      "Les icônes sont affichées à des tailles extrêmement variées — un favicon de 16 px, une icône d'application de 48 px, un visuel de mise en avant de 200 px — ce qui rend le choix entre SVG et PNG particulièrement important à bien faire.",
    breadcrumbLabel: "SVG vs PNG pour les icônes",
    publishedAt: "2026-01-09",
    sections: [
      {
        heading: "Pourquoi le SVG l'emporte généralement pour les icônes",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Les icônes sont presque toujours des formes simples en couleurs unies — exactement ce que les tracés vectoriels représentent efficacement. Une icône SVG reste nette qu'elle soit affichée à 16 px ou 160 px, et un seul fichier couvre toutes les tailles dont une mise en page responsive pourrait avoir besoin, au lieu d'exporter des PNG séparés pour chaque résolution.",
            ],
          },
        ],
      },
      {
        heading: "Les icônes SVG se stylisent avec CSS",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Comme le remplissage et le contour d'un SVG ne sont que de simples attributs, vous pouvez recolorer une icône avec CSS pour correspondre à un état de survol ou au mode sombre, sans avoir besoin d'un second fichier image. Les couleurs d'une icône PNG sont figées dans ses pixels, donc une couleur différente signifie un fichier exporté complètement à part.",
            ],
          },
        ],
      },
      {
        heading: "Comparaison du poids des fichiers",
        blocks: [
          {
            kind: "table",
            headers: ["", "Icône SVG", "Icône PNG"],
            rows: [
              ["Poids typique (icône simple)", "0,5 à 3 Ko", "1 à 5 Ko par résolution"],
              ["Plusieurs résolutions nécessaires ?", "Non — un seul fichier s'adapte", "Oui — exporter chaque taille séparément"],
              ["Recolorable via CSS ?", "Oui", "Non"],
            ],
          },
        ],
      },
      {
        heading: "Quand le PNG reste pertinent pour les icônes",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Si une « icône » est en réalité une petite image photographique ou très détaillée — comme une icône d'application réaliste avec dégradés, ombres et texture —, le PNG peut reproduire ce détail plus fidèlement qu'une vectorisation. Mais pour des icônes purement graphiques et en couleurs unies, le SVG reste presque toujours le meilleur choix. Si vous partez d'un ensemble d'icônes PNG existant, vous pouvez [le convertir en SVG](/) et garder les deux formats disponibles.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Tous les navigateurs prennent-ils en charge les icônes SVG ?",
        answer:
          "Oui, tous les navigateurs modernes affichent le SVG nativement, y compris comme favicons, icônes en ligne et images d'arrière-plan CSS.",
      },
      {
        question: "Puis-je animer une icône SVG ?",
        answer:
          "Oui — le SVG prend en charge l'animation CSS et JavaScript de tracés individuels, ce qui n'est pas possible avec un PNG statique.",
      },
      {
        question: "Le SVG est-il plus lourd ou plus léger que le PNG pour une même icône ?",
        answer:
          "Pour des icônes simples en couleurs unies, le SVG est généralement plus léger, surtout en tenant compte du besoin de plusieurs exports PNG pour couvrir différentes tailles d'affichage.",
      },
    ],
    related: [
      {
        href: "/guides/raster-vs-vector",
        label: "Raster vs vecteur : le guide complet",
        description: "La distinction de format plus large derrière ce comparatif propre aux icônes.",
      },
      {
        href: "/use-cases/cricut",
        label: "PNG vers SVG pour Cricut",
        description: "Un autre cas pratique où les tracés vectoriels comptent plus que les pixels.",
      },
    ],
    relatedHeading: "Lectures associées",
  },

  "common-png-to-svg-mistakes": {
    slug: "blog/common-png-to-svg-mistakes",
    keyword: "erreurs courantes conversion png vers svg",
    title: "Erreurs courantes à éviter lors de la conversion PNG vers SVG",
    metaDescription:
      "Évitez les erreurs les plus courantes lors de la conversion d'un PNG en SVG, des mauvais modes de vectorisation à la transparence ignorée, pour que votre premier résultat soit un fichier propre et utilisable.",
    h1: "Erreurs courantes à éviter lors de la conversion PNG vers SVG",
    intro:
      "La plupart des conversions PNG vers SVG décevantes tiennent à une poignée d'erreurs évitables. Voici ce qu'il faut surveiller avant de convertir.",
    breadcrumbLabel: "Erreurs courantes",
    publishedAt: "2025-12-15",
    sections: [
      {
        heading: "Erreur 1 : utiliser le mode Couleur sur un logo simple",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Un logo plat, à une ou deux couleurs, vectorisé en mode Couleur peut finir avec plus de tracés et de couleurs séparés que prévu, car l'algorithme essaie de préserver de subtiles variations de couleur dues à l'anticrénelage sur les contours. Pour les logos simples et les dessins au trait, le mode Noir & Blanc donne presque toujours un résultat plus propre — consultez [comment convertir un logo en SVG](/guides/convert-logo-to-svg) pour le processus complet.",
            ],
          },
        ],
      },
      {
        heading: "Erreur 2 : partir d'une source basse résolution",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "La vectorisation ne peut travailler qu'avec le détail présent dans votre PNG source — elle ne peut pas inventer des contours plus nets que ceux de l'image d'origine. Une petite image source fortement compressée produit une vectorisation plus grossière qu'une image plus grande et plus propre, même avec des réglages identiques.",
            ],
          },
        ],
      },
      {
        heading: "Erreur 3 : ignorer le réglage de transparence",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Si votre PNG source a un arrière-plan transparent mais que vous oubliez d'activer l'option d'arrière-plan transparent, vous pouvez vous retrouver avec une forme d'arrière-plan en couleur unie indésirable dans votre SVG — ce qui compte énormément pour les fichiers de découpe, où cette forme d'arrière-plan serait découpée elle aussi.",
            ],
          },
        ],
      },
      {
        heading: "Erreur 4 : sauter la vérification après conversion",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Ouvrez toujours le SVG téléchargé et vérifiez-le avant de l'utiliser dans un vrai projet : zoomez pour confirmer que les contours sont propres, et repérez les formes parasites laissées par le bruit de l'image source. C'est particulièrement important avant d'envoyer un fichier à une machine comme une découpeuse laser ou une [Cricut](/use-cases/cricut), où une forme parasite signifie une découpe supplémentaire indésirable.",
            ],
          },
        ],
      },
      {
        heading: "Erreur 5 : trop resserrer le réglage de détail",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Pousser le détail au maximum ne donne pas automatiquement le meilleur résultat — sur une source bruitée ou de mauvaise qualité, cela peut produire un très grand nombre de minuscules segments de tracé qui paraissent plus rugueux, pas plus nets. Partez d'un réglage de détail modéré et ajustez en fonction du résultat réel obtenu, pas seulement de la position du curseur.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Quelle est l'erreur la plus fréquente ?",
        answer:
          "Utiliser le mode Couleur pour un logo simple ou un dessin au trait qui se vectoriserait bien plus proprement en mode Noir & Blanc.",
      },
      {
        question: "Comment savoir si mes réglages étaient mauvais ?",
        answer:
          "Ouvrez le SVG et inspectez-le : des couleurs supplémentaires inattendues, des formes parasites ou des contours anguleux sont autant de signes qu'il vaut la peine d'ajuster vos réglages et de reconvertir depuis le [convertisseur PNG en SVG](/).",
      },
    ],
    related: [
      {
        href: "/guides/convert-logo-to-svg",
        label: "Comment convertir un logo en SVG",
        description: "Les bons réglages et le bon processus pour le cas de conversion le plus courant.",
      },
      {
        href: "/use-cases/embroidery-digitizing",
        label: "PNG vers SVG pour la broderie",
        description: "Un cas d'usage où ces erreurs coûtent particulièrement cher si elles sont repérées trop tard.",
      },
    ],
    relatedHeading: "Lectures associées",
  },
};
