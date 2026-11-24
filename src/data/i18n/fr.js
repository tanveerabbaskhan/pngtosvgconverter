module.exports={
 meta:{title:'pngtosvgconverter.com : convertisseur PNG en SVG gratuit',desc:'Convertisseur PNG en SVG gratuit, directement dans votre navigateur. Vectorisez n’importe quel PNG avec aperçu en direct. Sans envoi de fichier ni inscription.',alt:'pngtosvgconverter.com : convertisseur PNG en SVG gratuit avec aperçu en direct'},
 h1:{kw:'Convertisseur PNG en SVG',tail:'transformez n’importe quel PNG en SVG évolutif'},
 lead:'Convertissez un PNG en SVG en ligne en quelques secondes. Ce convertisseur gratuit trace votre image en chemins vectoriels propres dans votre navigateur, sans envoi de fichier, sans inscription et sans filigrane.',
 skip:'Aller au contenu principal',
 nav:{converter:'Convertisseur',all:'Tous les convertisseurs',faq:'FAQ',about:'À propos',contact:'Contact',menu:'Menu',theme:'Changer de thème',upload:'Importer une image',main:'Navigation principale',toc:'Sur cette page'},
 toc:{how:'Fonctionnement',proc:'Processus de conversion',chart:'Tableau et fonctionnalités',faq:'FAQ',all:'Tous les convertisseurs'},
 ui:{
  toolH2:'Outil de conversion PNG en SVG',step1:'Ajoutez votre image',dropAria:'Importer une image',drop:'Déposez votre PNG ici ou cliquez pour parcourir',paste:'Vous pouvez aussi coller avec Ctrl+V. Rien n’est envoyé.',
  sample:'Pas d’image ? Essayez un exemple :',sLogo:'Logo',sScene:'Paysage',sIcon:'Icône',choose:'Choisir une image',
  step2:'Ajustez le résultat',reset:'Réinitialiser',startFrom:'Partir de',pLogo:'Logo',pIllus:'Illustration',pPhoto:'Photo',pLine:'Dessin au trait',
  style:'Style',mColor:'Couleur',mGray:'Gris',mMono:'Mono',rmbg:'Supprimer l’arrière-plan',rmbgSub:'Efface les bords blancs ou transparents',
  colors:'Couleurs',thresh:'Seuil',ink:'Couleur de l’encre',smooth:'Lissage',more:'Plus d’options',detail:'Détail',specks:'Supprimer les taches',denoise:'Réduire le bruit',
  step3:'Aperçu et téléchargement',live:'Aperçu en direct',loading:'Chargement…',copy:'Copier le code SVG',download:'Télécharger le SVG',
  chipL:'Original · PNG',chipR:'Vecteur · SVG',handle:'Comparer l’original et le SVG',hint:'Faites glisser la poignée pour comparer · faites défiler pour zoomer',zoomOut:'Dézoomer',zoomIn:'Zoomer',fit:'Ajuster',
  veil:'Déposez l’image pour la convertir',veilSub:'PNG, JPG, WebP, GIF',fileSize:'Taille du SVG',tColors:'Couleurs',time:'Durée',
  moreD:'Plus de détails',moreDSub:'Calques de couleur, historique de taille, code SVG',shapes:'Formes',shapesSub:'contours fermés',nodes:'Nœuds',nodesSub:'points de tracé',
  p1:'Décoder',p2:'Quantifier',p3:'Tracer',p4:'Simplifier',p5:'Rendre',
  layers:'Calques de couleur',layersSub:'Survolez pour isoler · cliquez pour masquer',trace:'Taille en direct',traceSub:'Taille du SVG à chaque réglage',legSvg:'Taille du SVG',legPng:'PNG d’origine',src:'Source SVG'
 },
 js:{
  needImage:'Veuillez choisir un fichier image',readFail:'Impossible de lire cette image',tracedAt:'tracé en {w}×{h}',
  smaller:'<span class="delta good">{pct} % plus léger</span> que le PNG de {size}',larger:'<span class="delta warn">{pct} % plus lourd</span> que le PNG de {size}',
  noShapes:'Aucune forme visible : essayez de réduire « Supprimer les taches ».',pts:'pts',moreChars:'… {n} caractères de plus',lines:'{n} lignes',previewOnly:'aperçu seulement : Copier ou Télécharger donne le fichier complet',
  runs:'{n} essais · maintenant {size}',run1:'1 essai · maintenant {size}',fullCopied:'SVG complet copié',downloaded:'SVG téléchargé · {size}',copied:'Code SVG copié',
  dirStatus:'{a} outils affichés sur {b}'
 },
 how:{
  eyebrow:'Sous le capot',title:'Comment fonctionne le convertisseur PNG en SVG',
  def:'<strong>Un convertisseur PNG en SVG</strong> transforme une grille de pixels colorés en un ensemble de formes vectorielles remplies. Celui-ci le fait en cinq étapes automatiques, entièrement dans votre navigateur, et redessine le résultat à chaque déplacement d’un curseur.',
  stages:[
   ['Décoder','Votre navigateur lit le PNG avec l’API Canvas et le transforme en grille de pixels RGBA. Les gros fichiers sont rééchantillonnés à une taille de travail définie par le curseur Détail, et un flou de réduction du bruit facultatif supprime le grain.','Canvas · getImageData'],
   ['Quantifier','Une palette de 2 à 64 couleurs obtenue par coupe médiane est affinée avec k-means. Les couleurs quasi identiques sont fusionnées, les pixels de bord lissés sont ramenés à la couleur réelle la plus proche et les minuscules taches sont absorbées par leurs voisines.','Coupe médiane · k-means'],
   ['Tracer','Chaque couleur devient un calque empilé. Le masque du calque est adouci et son contour est extrait avec marching squares, ce qui donne des contours sous-pixel qui suivent le vrai bord plutôt que les marches d’escalier des pixels.','Marching squares'],
   ['Ajuster les courbes','Les angles sont détectés, puis chaque portion lisse est ajustée avec des courbes de Bézier cubiques. Les bords droits restent des lignes droites, ce qui demande bien moins de nœuds qu’un tracé de pixels brut.','Ajustement de Bézier de Schneider'],
   ['Rendre','Les tracés sont écrits sous forme d’un chemin SVG rempli par couleur, avec le viewBox d’origine conservé. L’aperçu, la taille du fichier, la palette et le code source se mettent à jour en direct quand vous déplacez un curseur.','SVG · fill-rule evenodd']],
  cap:'Les cinq étapes de la conversion PNG en SVG : décoder, quantifier, tracer, ajuster les courbes et rendre.',
  privTitle:'Où va votre fichier',privCap:'Le PNG est traité sur votre appareil. Aucun envoi n’a lieu : le fichier n’atteint jamais un serveur.',privAlt:'Votre PNG reste sur votre appareil',privAltDesc:'Le PNG traverse le convertisseur dans votre navigateur et devient un SVG. Aucune flèche ne quitte votre appareil vers un serveur.',
  privBrowser:'VOTRE NAVIGATEUR',privEngine:'Moteur de tracé',privServer:'Serveur',privNot:'non sollicité',
  whyTitle:'Pourquoi le résultat reste léger et propre',
  why:[['Calques empilés','Chaque couleur se pose sur la précédente : pas de fines fentes entre les formes, et beaucoup moins de trous à décrire.'],['Contours sous-pixel','Les bords sont placés entre les pixels et non dessus, si bien que les diagonales et les courbes restent lisses.'],['Ajustement de courbes','Un seul segment de Bézier peut remplacer des dizaines de marches de pixels : un logo typique ne demande que quelques centaines de nœuds.'],['Nettoyage avant le tracé','Les franges d’anticrénelage et les taches sont fusionnées d’abord, elles ne deviennent donc jamais des formes superflues.']]
 },
 proc:{
  eyebrow:'Pas à pas',title:'Processus de conversion PNG en SVG',
  def:'Convertir un PNG en SVG prend cinq étapes et généralement moins d’une minute. Vous pouvez vous arrêter après n’importe quelle étape : le SVG est prêt à être téléchargé dès que l’aperçu vous convient.',
  steps:[
   ['Ajoutez votre PNG','Déposez un PNG dans la zone d’import, cliquez sur « Choisir une image » ou collez-en un depuis le presse-papiers avec Ctrl+V. Pas encore prêt ? Appuyez sur un bouton d’exemple pour voir le convertisseur à l’œuvre.','Accepte aussi JPG, WebP, GIF et BMP.'],
   ['Choisissez un préréglage','Choisissez Logo, Illustration, Photo ou Dessin au trait. Chaque préréglage fixe des valeurs raisonnables pour les couleurs, le détail, le lissage et la suppression des taches : le premier aperçu est donc souvent déjà proche du but.','Logos : 4 à 8 couleurs. Photos : 32 à 48 couleurs.'],
   ['Affinez le tracé','Réglez le nombre de couleurs (2 à 64), le Détail, le Lissage, Supprimer les taches et Réduire le bruit. Passez d’un mode Couleur, Gris ou Mono à l’autre, et activez Supprimer l’arrière-plan pour les bords blancs ou transparents.','Chaque curseur met l’aperçu à jour instantanément.'],
   ['Comparez et inspectez','Faites glisser la poignée pour comparer le PNG d’origine au SVG. Faites défiler pour zoomer, glissez pour vous déplacer, et survolez un calque de couleur pour l’isoler ou cliquez dessus pour le masquer avant l’export.','Zoomez jusqu’à 3200 % pour voir le SVG rester net.'],
   ['Téléchargez ou copiez le SVG','Cliquez sur « Télécharger le SVG » pour enregistrer le fichier, ou sur « Copier le code » pour coller le balisage dans votre projet, Figma, Illustrator, Inkscape ou une page web.','Le fichier ne quitte jamais votre appareil.']],
  cta:'Convertir un PNG maintenant',tipLabel:'Astuce :',
  mock:{dropLabel:'Déposez le PNG',presets:['Logo','Illustration','Photo','Dessin au trait'],sliders:['Couleurs','Détail','Lissage'],dlBtn:'Télécharger le SVG'}
 },
 chart:{
  eyebrow:'Référence',title:'Tableau de conversion PNG en SVG / fonctionnalités',
  def:'Utilisez ce tableau pour choisir les bons réglages selon votre type de PNG, voir la qualité de conversion de chaque type et comparer PNG et SVG. Les valeurs correspondent aux préréglages intégrés au convertisseur.',
  barsTitle:'Qualité de conversion selon le type de PNG',barsCap:'Adéquation vectorielle de 1 (faible) à 5 (excellente). Les visuels plats et très contrastés se convertissent le mieux ; les photographies le moins bien.',
  barsAlt:'Qualité de conversion en SVG selon le type de PNG',
  bars:['Logo','Icône','Pixel art','Illustration plate','Dessin au trait','Signature','Document numérisé','Photographie'],
  quickTitle:'Réponses rapides',
  quick:[['Meilleurs résultats :','logos, icônes, pixel art et illustrations plates.'],['Bons résultats :','dessins au trait, croquis et signatures en mode Mono.'],['À traiter avec soin :','pages numérisées, qui demandent une réduction du bruit et un filtre de taches plus élevé.'],['Rendu stylisé uniquement :','les photographies et les dégradés doux deviennent un art posterisé.']],
  note:'Astuce : partez du préréglage le plus proche, puis ne modifiez qu’un seul curseur à la fois.',
  t1:{cap:'Réglages recommandés du convertisseur selon le type de PNG',cols:['Type de PNG','Préréglage ou mode','Couleurs','Détail','Lissage','Supprimer les taches','Adéquation vectorielle'],
   rows:[['Logo','Préréglage Logo'],['Icône','Préréglage Logo'],['Illustration plate ou dessin animé','Préréglage Illustration'],['Dessin au trait ou croquis','Préréglage Dessin au trait · Mono'],['Signature','Mono · seuil 160'],['Pixel art','Mode Pixel'],['Document numérisé','Mono · réduction du bruit 1,5'],['Photographie','Préréglage Photo']],
   words:{ink:'encre',auto:'taille de pixel automatique',na:'non utilisé',up:'jusqu’à'}},
  t2:{cap:'PNG et SVG en un coup d’œil',cols:['Caractéristique','PNG (matriciel)','SVG (vectoriel)'],
   rows:[['Mise à l’échelle','Les pixels deviennent flous ou se disloquent à l’agrandissement','S’adapte à toutes les tailles sans perte de netteté'],['Poids du fichier','Augmente avec le nombre de pixels','Augmente avec la complexité des formes : minuscule pour les visuels plats'],['Édition','On modifie des pixels dans un éditeur matriciel','On modifie formes, courbes et couleurs dans n’importe quel éditeur vectoriel'],['Idéal pour','Photographies et textures détaillées','Logos, icônes, illustrations, schémas et dessins au trait'],['Transparence','Canal alpha','Native : l’espace vide est simplement transparent'],['Mise en forme CSS','Impossible','Possible quand le SVG est intégré dans une page'],['Impression et signalétique','Exige un original en haute résolution','Indépendant de la résolution, quelle que soit la taille d’impression']]},
  featTitle:'Fonctionnalités du convertisseur',
  feats:[['Aperçu en direct','Chaque curseur retrace l’image et met à jour ensemble la vue partagée, le graphique de taille, la palette et le nombre de nœuds.'],['Tracé sous-pixel','Les contours suivent le véritable bord entre les couleurs plutôt que les limites des pixels, pour des courbes lisses.'],['Ajustement de courbes de Bézier','Les portions lisses deviennent des Bézier cubiques et les bords droits restent des lignes, ce qui limite le nombre de nœuds.'],['Calques de couleur empilés','Les calques se superposent : aucune fine fente ni jointure entre les couleurs.'],['De 2 à 64 couleurs','Choisissez le nombre de couleurs à garder, ou passez en Gris ou Mono. Survolez ou masquez un calque avant l’export.'],['Mode Pixel','Tracez le pixel art en rectangles nets à la taille de pixel détectée, sans lissage.'],['Arrière-plans transparents','Les pixels transparents ne deviennent jamais des formes. Supprimer l’arrière-plan efface un fond blanc uni en un clic.'],['Zoom et comparaison','Faites glisser la poignée pour comparer, puis zoomez jusqu’à 3200 % pour voir le PNG se pixelliser pendant que le SVG reste net.'],['Confidentiel par conception','La conversion s’exécute dans votre navigateur. Votre PNG n’est jamais envoyé, stocké ni partagé.'],['Gratuit, sans limite','Pas de compte, pas de filigrane, pas de quota quotidien. Convertissez autant d’images que vous le souhaitez.']]
 },
 faq:{
  eyebrow:'Réponses',title:'FAQ',def:'Questions fréquentes sur le convertisseur PNG en SVG : son fonctionnement, ce qu’il faut en attendre et comment obtenir le meilleur résultat. {n} réponses réparties en quatre thèmes.',
  groups:[
   ['Les bases',[
    ['Qu’est-ce qu’un convertisseur PNG en SVG ?','Un convertisseur PNG en SVG transforme une image PNG faite de pixels en un SVG vectoriel composé de formes et de courbes mathématiques. Comme un SVG décrit des formes et non des pixels, il peut être agrandi à n’importe quelle taille sans flou, et il est souvent bien plus léger que le PNG pour des visuels plats comme les logos et les icônes.'],
    ['Ce convertisseur PNG en SVG est-il gratuit ?','Oui. Il est entièrement gratuit, sans compte, sans filigrane et sans limite quotidienne. La seule limite pratique est votre appareil : les images sont traitées jusqu’à 3000 px sur le plus grand côté, et les fichiers très volumineux ou très détaillés prennent simplement un peu plus de temps.'],
    ['Mes fichiers PNG sont-ils envoyés à un serveur ?','Non. La conversion s’exécute entièrement dans votre navigateur avec JavaScript et l’API Canvas. Votre PNG n’est jamais envoyé, stocké ni partagé : vos créations confidentielles restent sur votre appareil.'],
    ['Quelle est la différence entre PNG et SVG ?','Le PNG est un format matriciel qui stocke une grille de pixels colorés ; il perd en netteté à l’agrandissement. Le SVG est un format vectoriel qui stocke des formes, des courbes et des remplissages ; il reste net à toute taille et se modifie avec des outils vectoriels. Le PNG convient aux photographies, le SVG aux logos, icônes, schémas et dessins au trait.']]],
   ['Qualité et réglages',[
    ['Le SVG sera-t-il identique à mon PNG ?','Pas pixel pour pixel. La conversion trace les formes qu’elle détecte et les approche par des courbes : le résultat est une version propre et évolutive de l’œuvre. Les images plates et très contrastées sont reproduites de très près, tandis que les photographies deviennent une version stylisée et posterisée.'],
    ['Quelles images PNG se convertissent le mieux ?','Les logos, icônes, illustrations plates, dessins animés, dessins au trait, signatures et pixel art se convertissent le mieux, car ils sont faits de formes nettes et d’un nombre limité de couleurs. Les photographies et les dégradés doux se convertissent le moins bien (essayez le [[photo-to-vector-converter]] pour un rendu stylisé). Consultez le tableau ci-dessus pour les réglages selon le type d’image.'],
    ['Combien de couleurs dois-je choisir ?','Choisissez le nombre de couleurs unies de votre visuel. La plupart des logos en demandent 4 à 8, les icônes 3 à 6 et les illustrations 12 à 20. Les photographies peuvent en exiger 32 à 48 ou plus. Des couleurs en trop ajoutent des calques et du poids sans améliorer un visuel plat, et la liste des calques indique précisément ce que chacune apporte.'],
    ['Comment obtenir des lignes plus lisses ou des angles plus nets ?','Utilisez le curseur Lissage. Les valeurs basses gardent les angles nets et les bords proches de l’original ; les valeurs élevées arrondissent les marches de pixels et les tremblements. Augmentez Détail pour les éléments fins et baissez Supprimer les taches si des lignes fines disparaissent.'],
    ['Pourquoi ma photo paraît-elle posterisée ou en bandes ?','Les vecteurs stockent des zones de couleur unie ; un dégradé doux doit donc être approché par des bandes. Augmentez le nombre de couleurs et le Détail, ajoutez un peu de réduction du bruit, ou assumez le rendu graphique et marqué. Pour garder le vrai détail photographique, conservez le PNG ou utilisez un format photo.']]],
   ['Transparence, texte et édition',[
    ['Comment conserver un arrière-plan transparent ?','Les pixels transparents de votre PNG sont respectés automatiquement et ne deviennent jamais des formes : le SVG n’a donc pas de cadre de fond. Si votre PNG a un fond blanc uni, activez Supprimer l’arrière-plan. Le mode Mono abandonne aussi la teinte du papier pour ne garder que l’encre, ce pour quoi la page [[transparent-image-to-svg-converter]] est optimisée.'],
    ['Reconnaît-il le texte de mon PNG ?','Non. Le convertisseur ne fait pas d’OCR. Les lettres sont tracées comme des contours vectoriels : elles s’agrandissent parfaitement mais ne sont pas modifiables en tant que texte. Pour du texte modifiable, retapez-le dans un outil de création ou utilisez un OCR séparé.'],
    ['Pourquoi mon SVG est-il plus lourd que mon PNG ?','Les photographies et les dégradés demandent beaucoup de formes, ce qui peut dépasser le poids d’un PNG bien compressé. Réduisez le nombre de couleurs, baissez le Détail, augmentez Supprimer les taches ou le Lissage. La carte de taille de fichier et le graphique de taille en direct montrent l’effet de chaque changement.'],
    ['Puis-je modifier le SVG dans Figma, Illustrator, Inkscape ou Canva ?','Oui. Le résultat est un SVG standard avec un chemin rempli par couleur : n’importe quel éditeur vectoriel peut l’ouvrir, le recolorer et le remodeler. Les calques sont empilés dans l’ordre, et vous pouvez en masquer un dans le convertisseur avant de télécharger.']]],
   ['Compatibilité',[
    ['Quelles tailles et quels formats sont pris en charge ?','Vous pouvez importer des fichiers PNG, JPG, WebP, GIF et BMP (chacun a aussi sa propre page, comme le [[jpg-to-svg-converter]] et le [[webp-to-svg-converter]]) que votre navigateur sait ouvrir. Pour des raisons de performance, les très grandes images sont réduites à 3000 px maximum sur le plus grand côté avant le tracé, et le SVG exporté conserve le rapport d’origine.'],
    ['Fonctionne-t-il sur téléphone et tablette ?','Oui. Il fonctionne dans les versions actuelles de Chrome, Edge, Firefox et Safari, sur ordinateur comme sur mobile. Les très grandes images peuvent être plus lentes sur un ancien téléphone : essayez une image plus petite ou un Détail plus bas si l’aperçu est lent.']]]
  ],
  ctaTitle:'Prêt à vectoriser ?',ctaText:'Votre PNG est à un geste d’un SVG évolutif.',ctaBtn:'Ouvrir le convertisseur PNG en SVG'
 },
 dir:{
  eyebrow:'Tous les convertisseurs',title:'Tous les convertisseurs et outils SVG gratuits',lead:'{n} outils gratuits qui fonctionnent dans votre navigateur. Choisissez un convertisseur ci-dessous ou cherchez par format ou par tâche.',
  search:'Rechercher, p. ex. « logo », « PDF », « minifier »',searchLabel:'Rechercher des convertisseurs',filter:'Filtrer par type',all:'Tous',empty:'Aucun convertisseur ne correspond à cette recherche. Essayez « SVG », « logo » ou « PNG ».',
  groups:[['Image en SVG','Tracez des images matricielles en formes vectorielles évolutives.'],['SVG en image','Exportez un SVG en PNG, JPG, WebP, PDF ou ICO.'],['Outils SVG','Compressez, modifiez, inspectez et validez du code SVG.']],
  here:'Vous êtes ici',nav:'Tous les convertisseurs et outils SVG'
 },
 foot:{
  blurb:'Convertisseur PNG en SVG gratuit et outils SVG qui fonctionnent entièrement dans votre navigateur.',colExplore:'Explorer',colCompany:'Entreprise',colLegal:'Mentions légales',lang:'Langue',
  home:'Accueil',about:'À propos',contact:'Contact',terms:'Conditions générales',privacy:'Politique de confidentialité',sitemap:'Plan du site',
  copy:'© {year} pngtosvgconverter.com',made:'Conçu pour les designers et les développeurs · Traitement local'
 }
};
