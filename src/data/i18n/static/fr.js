// Pages essentielles en français. Le texte juridique doit être relu par l’éditeur du site.
module.exports=function(S){
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const UPDATED=new Date(S.UPDATED+'T00:00:00Z').toLocaleDateString('fr-FR',{year:'numeric',month:'long',day:'numeric',timeZone:'UTC'});
const mail=`<a href="mailto:${S.EMAIL}">${S.EMAIL}</a>`;
const N='pngtosvgconverter.com';

const about={slug:'about-us',type:'AboutPage',about:true,
 title:'À propos | '+N,
 desc:'Découvrez qui gère pngtosvgconverter.com, pourquoi il existe, comment fonctionne le convertisseur PNG en SVG gratuit dans votre navigateur et ses principes.',
 h1:'À propos de '+N,
 lead:'Une boîte à outils gratuite et privée pour transformer des images en SVG net et redimensionnable, conçue pour fonctionner entièrement dans votre navigateur.',
 crumb:'À propos',
 body:`<h2>Qui gère ce site</h2>
<p>${N} est un projet indépendant d’outils web maintenu par l’équipe de ${N}. Nous créons de petits utilitaires graphiques ciblés pour les designers, développeurs, créateurs et toute personne qui a besoin de la version vectorielle d’une image sans installer de logiciel.</p>
<h2>Pourquoi il existe</h2>
<p>Transformer une image de pixels en vecteur oblige souvent à payer un logiciel de bureau ou à envoyer un travail privé sur le serveur d’un inconnu. Nous voulions mieux : un convertisseur gratuit, rapide, qui affiche le résultat pendant que vous réglez les paramètres et ne reçoit jamais vos fichiers.</p>
<h2>Ce que vous pouvez faire ici</h2>
<ul>
<li><strong>Image vers SVG :</strong> convertissez PNG, JPG, WebP, GIF, BMP, AVIF et plus en vecteurs redimensionnables, avec des préréglages pour logos, icônes, dessins au trait, signatures, scans, clipart et pixel art.</li>
<li><strong>SVG vers image :</strong> exportez un SVG en PNG, JPG, WebP, PDF ou ICO multi-tailles.</li>
<li><strong>Outils SVG :</strong> compressez, optimisez, redimensionnez, recadrez, recolorez, validez, mettez en forme, minifiez et inspectez du code SVG.</li>
</ul>
<p>Chaque outil a sa propre page, listée dans le <a href="../sitemap/">plan du site</a> et sur la <a href="../#all">page d’accueil</a>.</p>
<h2>Comment fonctionne la technologie</h2>
<p>Le convertisseur PNG en SVG repose sur des techniques documentées, pas sur une boîte noire. Les couleurs sont réduites par une palette à coupe médiane affinée par k-means. Chaque couleur devient un calque empilé dont le contour est trouvé par « marching squares » avec une précision inférieure au pixel, puis ajusté par des courbes de Bézier cubiques. Tout se passe dans votre navigateur.</p>
<h2>Nos principes</h2>
<ul>
<li><strong>La confidentialité d’abord.</strong> La conversion se fait sur votre appareil. Vos images et fichiers SVG ne sont jamais envoyés. Consultez notre <a href="../privacy/">politique de confidentialité</a>.</li>
<li><strong>Des résultats honnêtes.</strong> Les vecteurs conviennent surtout aux logos, icônes, illustrations et dessins au trait. Nous le disons clairement : les photos deviennent un art stylisé et postérisé, et nous affichons la taille du fichier pour que vous jugiez par vous-même.</li>
<li><strong>Gratuit et simple.</strong> Pas de compte, pas de filigrane, pas de limite quotidienne.</li>
<li><strong>Accessible et rapide.</strong> Les pages sont légères, fonctionnent sur mobile et au clavier, et utilisent des formats de fichier standards et ouverts.</li>
</ul>
<h2>Qualité et mises à jour</h2>
<p>Nous testons le convertisseur sur une bibliothèque d’exemples intégrés (logos, icônes, illustrations, pages scannées, signatures, pixel art) et améliorons sans cesse le moteur de tracé et les explications de chaque page. Si quelque chose ne va pas avec votre fichier, dites-le-nous.</p>
<h2>Nous contacter</h2>
<p>Questions, bugs ou idées d’un nouvel outil ? Utilisez la <a href="../contact-us/">page de contact</a> ou écrivez à ${mail}.</p>`};

const contact={slug:'contact-us',type:'ContactPage',
 title:'Contact | '+N,
 desc:'Contactez pngtosvgconverter.com pour une question, un bug, une idée ou une demande de confidentialité. Envoyez un message avec le formulaire ou par e-mail.',
 h1:'Contact',
 lead:'Une question, un bug ou une idée d’outil ? Envoyez-nous un message, nous vous répondrons.',
 crumb:'Contact',
 body:`<p>Pour nous aider à résoudre un problème, indiquez la page utilisée, votre navigateur et appareil, et ce que vous attendiez. Si une image précise déclenche le problème, décrivez-la ou précisez son type et sa taille. N’envoyez pas de fichiers confidentiels.</p>
<form class="cform" data-contact data-endpoint="${esc(S.CONTACT_ENDPOINT)}" data-email="${S.EMAIL}" data-sending="Envoi de votre message…" data-success="Merci. Votre message a été envoyé." data-success-mailto="Votre application de messagerie devrait s’ouvrir avec le message prêt à envoyer. Sinon, écrivez-nous directement à ${S.EMAIL}." data-error="Désolé, le message n’a pas pu être envoyé. Écrivez-nous directement à ${S.EMAIL}." data-invalid="Saisissez votre nom, une adresse e-mail valide et un message." novalidate>
<div class="field"><label for="cf-name">Nom</label><input id="cf-name" name="name" type="text" autocomplete="name" required maxlength="120"></div>
<div class="field"><label for="cf-email">E-mail</label><input id="cf-email" name="email" type="email" autocomplete="email" required maxlength="160"></div>
<div class="field"><label for="cf-msg">Message</label><textarea id="cf-msg" name="message" rows="7" required maxlength="4000"></textarea></div>
<div class="hp" aria-hidden="true"><label>Laissez ce champ vide<input name="website" type="text" tabindex="-1" autocomplete="off"></label></div>
<button class="btn primary lg" type="submit" data-submit>Envoyer le message</button>
<p class="form-status" role="status" aria-live="polite" data-status></p>
</form>
<h2>Vous préférez l’e-mail ?</h2>
<p>Écrivez-nous directement à ${mail}. Pour une demande de confidentialité, indiquez « Demande de confidentialité » en objet.</p>
<p>Nous répondons généralement sous quelques jours ouvrés.</p>`};

const terms={slug:'terms',type:'WebPage',
 title:'Conditions d’utilisation | '+N,
 desc:'Conditions d’utilisation de pngtosvgconverter.com : usage acceptable, vos fichiers et contenus, exclusions de garantie, limites de responsabilité et modifications.',
 h1:'Conditions d’utilisation',
 lead:`Dernière mise à jour : ${UPDATED}`,
 crumb:'Conditions d’utilisation',
 body:`<p>Les présentes conditions d’utilisation (« Conditions ») régissent l’usage de ${N} et de ses outils (le « Service »). En utilisant le Service, vous acceptez ces Conditions. Si vous n’êtes pas d’accord, n’utilisez pas le Service.</p>
<h2>1. Le Service</h2>
<p>Le Service propose des outils en ligne gratuits pour convertir et modifier des images et des fichiers SVG. Les outils s’exécutent dans votre navigateur. Nous pouvons ajouter, modifier ou retirer des fonctionnalités à tout moment.</p>
<h2>2. Vos fichiers et contenus</h2>
<p>Vous conservez tous les droits sur les fichiers que vous traitez. Les fichiers ouverts dans les outils sont traités localement sur votre appareil et ne sont pas envoyés à nos serveurs. Vous devez vous assurer d’avoir le droit d’utiliser et de convertir les fichiers choisis, y compris les droits d’auteur et de marque qui pourraient s’y appliquer.</p>
<h2>3. Usage acceptable</h2>
<p>Vous vous engagez à ne pas utiliser le Service pour porter atteinte aux droits d’autrui, enfreindre la loi, perturber ou surcharger le Service, tester ou contourner sa sécurité, ni l’extraire à un rythme nuisible aux autres utilisateurs.</p>
<h2>4. Résultats et exactitude</h2>
<p>Convertir une image matricielle en vecteur est une approximation. Les résultats dépendent de votre image source et des réglages choisis et peuvent différer de l’original. Vérifiez le résultat avant de vous y fier, notamment pour l’impression, la production ou un usage juridique.</p>
<h2>5. Propriété intellectuelle</h2>
<p>Le Service, y compris son design, son code, ses textes et ses illustrations, appartient à ${N} ou à ses concédants et est protégé par la loi applicable. Vous ne pouvez pas copier ni revendre le Service lui-même sans autorisation. Rien dans ces Conditions ne nous transfère la propriété de vos fichiers ni ne vous transfère celle du Service.</p>
<h2>6. Exclusion de garanties</h2>
<p>Le Service est fourni « en l’état » et « selon disponibilité », sans garantie d’aucune sorte, expresse ou implicite, notamment d’aptitude à un usage particulier, d’exactitude, de disponibilité ou d’absence de contrefaçon. Nous ne garantissons pas que le Service fonctionnera sans interruption ni erreur.</p>
<h2>7. Limitation de responsabilité</h2>
<p>Dans la mesure maximale permise par la loi, ${N} et ses responsables ne sont pas tenus des dommages indirects, accessoires, spéciaux, consécutifs ou punitifs, ni des pertes de données, de bénéfices ou d’activité, résultant de l’usage ou de l’impossibilité d’utiliser le Service.</p>
<h2>8. Liens et services tiers</h2>
<p>Le Service peut contenir des liens vers des sites tiers. Nous ne les contrôlons pas et ne sommes pas responsables de leur contenu ni de leurs pratiques.</p>
<h2>9. Modification des Conditions</h2>
<p>Nous pouvons mettre à jour ces Conditions. La date de « Dernière mise à jour » indique la version la plus récente. Continuer à utiliser le Service après une modification vaut acceptation des Conditions mises à jour.</p>
<h2>10. Droit applicable</h2>
<p>Ces Conditions sont régies par le droit applicable dans la juridiction où l’exploitant du Service est établi, sans égard aux règles de conflit de lois. Si la loi de votre pays vous accorde des droits impératifs de consommateur, ces droits ne sont pas affectés.</p>
<h2>11. Contact</h2>
<p>Des questions sur ces Conditions ? Écrivez à ${mail} ou utilisez la <a href="../contact-us/">page de contact</a>. Consultez aussi notre <a href="../privacy/">politique de confidentialité</a>.</p>`};

const privacy={slug:'privacy',type:'WebPage',
 title:'Politique de confidentialité | '+N,
 desc:'Comment pngtosvgconverter.com traite les données : les fichiers sont traités dans votre navigateur et jamais envoyés. Données conservées, cookies, tiers et vos droits.',
 h1:'Politique de confidentialité',
 lead:`Dernière mise à jour : ${UPDATED}`,
 crumb:'Politique de confidentialité',
 body:`<p>Votre vie privée compte pour nous. Cette politique explique quelles informations ${N} (« nous ») traite lorsque vous utilisez le site et ses outils.</p>
<h2>1. Vos fichiers restent sur votre appareil</h2>
<p>Les outils d’image et de SVG s’exécutent dans votre navigateur avec JavaScript. Les fichiers que vous déposez, collez ou ouvrez sont traités localement et <strong>ne sont pas envoyés</strong> à nos serveurs ni à un tiers. Nous ne pouvons pas les voir.</p>
<h2>2. Informations que nous collectons</h2>
<ul>
<li><strong>Préférences enregistrées sur votre appareil.</strong> Si vous passez du mode clair au mode sombre, votre choix est enregistré dans le stockage local du navigateur pour être mémorisé. Il ne quitte jamais votre appareil.</li>
<li><strong>Messages que vous nous envoyez.</strong> Si vous utilisez le formulaire de contact ou nous écrivez, nous recevons le nom, l’adresse e-mail et le message fournis et ne les utilisons que pour répondre et améliorer le Service.</li>
<li><strong>Journaux techniques.</strong> Comme la plupart des sites, notre hébergeur peut conserver des journaux de serveur standards (adresse IP, type de navigateur, page demandée, heure) pour la sécurité et la fiabilité.</li>
</ul>
<h2>3. Cookies et mesure d’audience</h2>
<p>Nous ne déposons aucun cookie publicitaire ni de suivi. À la date de rédaction, nous n’utilisons ni mesure d’audience tierce ni script publicitaire. Si nous ajoutons une mesure respectueuse de la vie privée ou des cookies, nous mettrons cette page à jour et demanderons votre consentement si nécessaire.</p>
<h2>4. Tiers</h2>
<p>Le site est diffusé par un hébergeur et un réseau de diffusion de contenu qui traitent des données techniques de requête pour notre compte. Si le formulaire de contact utilise un service externe de gestion de formulaires, ce service traite le message envoyé pour nous le transmettre. Nous ne vendons pas vos données personnelles.</p>
<h2>5. Utilisation des informations</h2>
<p>Nous utilisons les informations limitées décrites ci-dessus pour exploiter et sécuriser le site, répondre aux messages et améliorer les outils. Nous conservons les messages le temps nécessaire au traitement de votre demande et à une tenue raisonnable des archives.</p>
<h2>6. Vos droits</h2>
<p>Selon votre lieu de résidence (par exemple au titre du RGPD ou de lois similaires), vous pouvez avoir le droit d’accéder à vos données personnelles, de les rectifier, de les effacer ou d’en limiter l’usage, de vous opposer à leur traitement et d’introduire une réclamation auprès de votre autorité de protection des données. Comme nous conservons très peu de données personnelles, la plupart des demandes sont simples à satisfaire.</p>
<h2>7. Enfants</h2>
<p>Le Service ne s’adresse pas aux enfants de moins de 13 ans et nous ne collectons pas sciemment leurs informations personnelles.</p>
<h2>8. Sécurité</h2>
<p>Le site est servi en HTTPS. Comme vos fichiers ne sont jamais envoyés, ils ne sont exposés à aucun risque de transmission ou de stockage de notre côté.</p>
<h2>9. Modification de cette politique</h2>
<p>Nous pouvons mettre à jour cette politique. La date de « Dernière mise à jour » indique la version la plus récente.</p>
<h2>10. Contact pour les demandes de confidentialité</h2>
<p>Pour toute question ou demande relative à la confidentialité, écrivez à ${mail} en indiquant « Demande de confidentialité » en objet, ou utilisez la <a href="../contact-us/">page de contact</a>. Consultez aussi nos <a href="../terms/">conditions d’utilisation</a>.</p>`};

const notFound={
 title:'Page introuvable | '+N,
 desc:'La page recherchée est introuvable. Retournez au convertisseur PNG en SVG ou découvrez nos autres convertisseurs gratuits et outils SVG.',
 h1:'Page introuvable',
 lead:'La page que vous avez essayé d’ouvrir n’existe pas ou a été déplacée. Voici où aller ensuite.',
 body:`<ul class="nf-links">
<li><a href="/fr/">Convertisseur PNG en SVG (accueil)</a></li>
<li><a href="/fr/jpg-to-svg-converter/">Convertisseur JPG en SVG</a></li>
<li><a href="/fr/svg-to-png-converter/">Convertisseur SVG en PNG</a></li>
<li><a href="/fr/svg-optimizer/">Optimiseur SVG</a></li>
<li><a href="/fr/sitemap/">Plan du site : tous les convertisseurs et outils</a></li>
<li><a href="/fr/contact-us/">Contact</a></li>
</ul>`};

const sitemap={title:'Plan du site | '+N,desc:'Toutes les pages de pngtosvgconverter.com : convertisseurs d’image en SVG, de SVG en image, outils SVG et page d’accueil en 18 langues.',h1:'Plan du site',lead:'Toutes les pages de pngtosvgconverter.com au même endroit.',crumb:'Plan du site',
 main:'Pages principales',home:'Accueil : convertisseur PNG en SVG',about:'À propos',contact:'Contact',terms:'Conditions d’utilisation',privacy:'Politique de confidentialité',sitemap:'Plan du site',
 gRaster:'Convertisseurs d’image en SVG',gExport:'Convertisseurs de SVG en image',gUtil:'Outils SVG',gLang:'Page d’accueil dans d’autres langues'};
return {about,contact,terms,privacy,notFound,sitemap};
};
