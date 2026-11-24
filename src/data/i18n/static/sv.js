// Viktiga sidor på svenska. Den juridiska texten bör granskas av webbplatsens ägare.
module.exports=function(S){
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const UPDATED=new Date(S.UPDATED+'T00:00:00Z').toLocaleDateString('sv-SE',{year:'numeric',month:'long',day:'numeric',timeZone:'UTC'});
const mail=`<a href="mailto:${S.EMAIL}">${S.EMAIL}</a>`;
const N='pngtosvgconverter.com';

const about={slug:'about-us',type:'AboutPage',about:true,
 title:'Om oss | '+N,
 desc:'Läs vem som driver pngtosvgconverter.com, varför den finns, hur den gratis PNG till SVG-konverteraren i webbläsaren fungerar och vilka principer vi följer.',
 h1:'Om '+N,
 lead:'En gratis och privat verktygslåda som gör om bilder till rena, skalbara SVG:er och körs helt i din webbläsare.',
 crumb:'Om oss',
 body:`<h2>Vem som driver webbplatsen</h2>
<p>${N} är ett oberoende webbverktygsprojekt som drivs av teamet bakom ${N}. Vi bygger små, fokuserade grafikverktyg för designers, utvecklare, skapare och alla som behöver en vektorversion av en bild utan att installera program.</p>
<h2>Varför den finns</h2>
<p>Att göra om en pixelbild till en vektor innebär oftast att betala för ett skrivbordsprogram eller ladda upp privat material till en främlings server. Vi ville ha något bättre: en gratis, snabb konverterare som visar resultatet medan du justerar och aldrig tar emot dina filer.</p>
<h2>Vad du kan göra här</h2>
<ul>
<li><strong>Bild till SVG:</strong> konvertera PNG, JPG, WebP, GIF, BMP, AVIF och mer till skalbara vektorer, med förval för logotyper, ikoner, linjeteckningar, signaturer, skanningar, clipart och pixelkonst.</li>
<li><strong>SVG till bild:</strong> exportera en SVG som PNG, JPG, WebP, PDF eller en ICO med flera storlekar.</li>
<li><strong>SVG-verktyg:</strong> komprimera, optimera, ändra storlek, beskär, färga om, validera, formatera, minifiera och granska SVG-kod.</li>
</ul>
<p>Varje verktyg har en egen sida, listad på <a href="../sitemap/">webbplatskartan</a> och på <a href="../#all">startsidan</a>.</p>
<h2>Så fungerar tekniken</h2>
<p>PNG till SVG-konverteraren använder väldokumenterade tekniker, inte en svart låda. Färgerna reduceras med en median cut-palett som förfinas med k-means. Varje färg blir ett staplat lager vars kontur hittas med ”marching squares” med subpixelprecision och anpassas med kubiska Bézierkurvor. Allt sker i din webbläsare.</p>
<h2>Våra principer</h2>
<ul>
<li><strong>Integritet först.</strong> Konverteringen sker på din enhet. Dina bilder och SVG-filer laddas aldrig upp. Se vår <a href="../privacy/">integritetspolicy</a>.</li>
<li><strong>Ärliga resultat.</strong> Vektorer passar bäst för logotyper, ikoner, illustrationer och linjeteckningar. Vi säger tydligt att fotografier blir stiliserad, posteriserad konst och visar filstorleken så att du själv kan bedöma resultatet.</li>
<li><strong>Gratis och enkelt.</strong> Inget konto, ingen vattenstämpel, inga dagliga gränser.</li>
<li><strong>Tillgängligt och snabbt.</strong> Sidorna är lätta, fungerar på mobiler och med tangentbord och använder öppna standardfilformat.</li>
</ul>
<h2>Kvalitet och uppdateringar</h2>
<p>Vi testar konverteraren mot ett bibliotek av inbyggda exempel (logotyper, ikoner, illustrationer, skannade sidor, signaturer, pixelkonst) och förbättrar hela tiden spårningsmotorn och vägledningen på varje sida. Om något ser fel ut med din fil, berätta för oss.</p>
<h2>Kontakta oss</h2>
<p>Frågor, felrapporter eller idéer till nya verktyg? Använd <a href="../contact-us/">kontaktsidan</a> eller mejla ${mail}.</p>`};

const contact={slug:'contact-us',type:'ContactPage',
 title:'Kontakt | '+N,
 desc:'Kontakta pngtosvgconverter.com med frågor, buggar, idéer eller integritetsförfrågningar. Skicka ett meddelande via formuläret eller mejla oss direkt.',
 h1:'Kontakt',
 lead:'Frågor, buggar eller idéer till nya verktyg? Skicka ett meddelande så svarar vi.',
 crumb:'Kontakt',
 body:`<p>Det snabbaste sättet att hjälpa oss lösa ett problem är att ange sidan du använde, din webbläsare och enhet samt vad du förväntade dig. Om en viss bild orsakar problemet, beskriv den eller ange typ och storlek. Skicka inga konfidentiella filer.</p>
<form class="cform" data-contact data-endpoint="${esc(S.CONTACT_ENDPOINT)}" data-email="${S.EMAIL}" data-sending="Skickar ditt meddelande…" data-success="Tack. Ditt meddelande har skickats." data-success-mailto="Din e-postapp bör öppnas med meddelandet förberett. Om inget öppnas, skriv direkt till ${S.EMAIL}." data-error="Tyvärr gick det inte att skicka meddelandet. Mejla oss direkt på ${S.EMAIL}." data-invalid="Ange ditt namn, en giltig e-postadress och ett meddelande." novalidate>
<div class="field"><label for="cf-name">Namn</label><input id="cf-name" name="name" type="text" autocomplete="name" required maxlength="120"></div>
<div class="field"><label for="cf-email">E-post</label><input id="cf-email" name="email" type="email" autocomplete="email" required maxlength="160"></div>
<div class="field"><label for="cf-msg">Meddelande</label><textarea id="cf-msg" name="message" rows="7" required maxlength="4000"></textarea></div>
<div class="hp" aria-hidden="true"><label>Lämna det här fältet tomt<input name="website" type="text" tabindex="-1" autocomplete="off"></label></div>
<button class="btn primary lg" type="submit" data-submit>Skicka meddelande</button>
<p class="form-status" role="status" aria-live="polite" data-status></p>
</form>
<h2>Föredrar du e-post?</h2>
<p>Skriv direkt till ${mail}. För integritetsförfrågningar, skriv ”Integritetsförfrågan” i ämnesraden.</p>
<p>Vi strävar efter att svara inom några arbetsdagar.</p>`};

const terms={slug:'terms',type:'WebPage',
 title:'Användarvillkor | '+N,
 desc:'Användarvillkoren för pngtosvgconverter.com: tillåten användning, dina filer och ditt innehåll, friskrivningar, ansvarsbegränsning och ändringar av villkoren.',
 h1:'Användarvillkor',
 lead:`Senast uppdaterad: ${UPDATED}`,
 crumb:'Användarvillkor',
 body:`<p>Dessa användarvillkor (”Villkoren”) reglerar din användning av ${N} och dess verktyg (”Tjänsten”). Genom att använda Tjänsten godkänner du Villkoren. Om du inte godkänner dem ska du inte använda Tjänsten.</p>
<h2>1. Tjänsten</h2>
<p>Tjänsten erbjuder gratis onlineverktyg för att konvertera och redigera bilder och SVG-filer. Verktygen körs i din webbläsare. Vi kan när som helst lägga till, ändra eller ta bort funktioner.</p>
<h2>2. Dina filer och ditt innehåll</h2>
<p>Du behåller alla rättigheter till de filer du bearbetar. Filer du öppnar i verktygen bearbetas lokalt på din enhet och laddas inte upp till våra servrar. Du ansvarar för att du har rätt att använda och konvertera de filer du väljer, inklusive eventuella upphovsrätter och varumärkesrättigheter.</p>
<h2>3. Tillåten användning</h2>
<p>Du förbinder dig att inte använda Tjänsten för att kränka andras rättigheter, bryta mot lagen, försöka störa eller överbelasta Tjänsten, undersöka eller kringgå dess säkerhet eller hämta data i en takt som skadar andra användare.</p>
<h2>4. Resultat och noggrannhet</h2>
<p>Att konvertera en rasterbild till en vektor är en approximation. Resultaten beror på din källbild och dina inställningar och kan skilja sig från originalet. Kontrollera resultatet innan du förlitar dig på det, särskilt för tryck, produktion eller juridisk användning.</p>
<h2>5. Immateriella rättigheter</h2>
<p>Tjänsten, inklusive design, kod, texter och illustrationer, ägs av ${N} eller dess licensgivare och skyddas av tillämplig lag. Du får inte kopiera eller sälja vidare själva Tjänsten utan tillstånd. Inget i Villkoren överför äganderätten till dina filer till oss eller äganderätten till Tjänsten till dig.</p>
<h2>6. Friskrivning från garantier</h2>
<p>Tjänsten tillhandahålls ”i befintligt skick” och ”som tillgänglig” utan garantier av något slag, vare sig uttryckliga eller underförstådda, inklusive lämplighet för ett visst ändamål, noggrannhet, tillgänglighet eller att den inte gör intrång. Vi garanterar inte att Tjänsten fungerar oavbrutet eller felfritt.</p>
<h2>7. Ansvarsbegränsning</h2>
<p>I den utsträckning lagen tillåter ansvarar ${N} och dess förvaltare inte för indirekta, tillfälliga, särskilda följd- eller straffskador eller för förlust av data, vinst eller verksamhet som uppstår genom din användning av eller oförmåga att använda Tjänsten.</p>
<h2>8. Länkar och tjänster från tredje part</h2>
<p>Tjänsten kan länka till tredje parts webbplatser. Vi kontrollerar dem inte och ansvarar inte för deras innehåll eller metoder.</p>
<h2>9. Ändringar av Villkoren</h2>
<p>Vi kan uppdatera Villkoren då och då. Datumet ”Senast uppdaterad” visar den senaste versionen. Om du fortsätter använda Tjänsten efter en ändring godkänner du de uppdaterade Villkoren.</p>
<h2>10. Tillämplig lag</h2>
<p>Villkoren regleras av lagarna i den jurisdiktion där Tjänstens operatör är etablerad, utan hänsyn till lagvalsregler. Tvingande konsumenträttigheter enligt lagen i ditt land påverkas inte.</p>
<h2>11. Kontakt</h2>
<p>Frågor om Villkoren? Mejla ${mail} eller använd <a href="../contact-us/">kontaktsidan</a>. Se även vår <a href="../privacy/">integritetspolicy</a>.</p>`};

const privacy={slug:'privacy',type:'WebPage',
 title:'Integritetspolicy | '+N,
 desc:'Hur pngtosvgconverter.com hanterar data: filer bearbetas i din webbläsare och laddas aldrig upp. Vad som lagras, cookies, tredje part och dina rättigheter.',
 h1:'Integritetspolicy',
 lead:`Senast uppdaterad: ${UPDATED}`,
 crumb:'Integritetspolicy',
 body:`<p>Din integritet är viktig för oss. Den här policyn förklarar vilken information ${N} (”vi”) hanterar när du använder webbplatsen och dess verktyg.</p>
<h2>1. Dina filer stannar på din enhet</h2>
<p>Bild- och SVG-verktygen körs i din webbläsare med JavaScript. Filer du släpper, klistrar in eller öppnar bearbetas lokalt och <strong>laddas inte upp</strong> till våra servrar eller någon tredje part. Vi kan inte se dem.</p>
<h2>2. Information vi samlar in</h2>
<ul>
<li><strong>Inställningar som lagras på din enhet.</strong> Om du växlar mellan ljust och mörkt läge sparas ditt val i webbläsarens lokala lagring så att webbplatsen kan komma ihåg det. Det lämnar aldrig din enhet.</li>
<li><strong>Meddelanden du skickar till oss.</strong> Om du använder kontaktformuläret eller mejlar oss får vi det namn, den e-postadress och det meddelande du anger och använder dem bara för att svara och förbättra Tjänsten.</li>
<li><strong>Tekniska loggar.</strong> Som de flesta webbplatser kan vår värdleverantör spara vanliga serverloggar (till exempel IP-adress, webbläsartyp, begärd sida och tid) för säkerhet och tillförlitlighet.</li>
</ul>
<h2>3. Cookies och analys</h2>
<p>Vi sätter inga reklam- eller spårningscookies. När detta skrivs kör vi ingen analys eller reklamskript från tredje part. Om vi i framtiden lägger till integritetsvänlig analys eller cookies uppdaterar vi den här sidan och ber vid behov om ditt samtycke.</p>
<h2>4. Tredje part</h2>
<p>Webbplatsen levereras av en värd- och innehållsleveransleverantör som behandlar tekniska förfrågningsdata för vår räkning. Om kontaktformuläret är konfigurerat med en extern formulärtjänst behandlar den tjänsten meddelandet du skickar för att leverera det till oss. Vi säljer inte dina personuppgifter.</p>
<h2>5. Hur vi använder informationen</h2>
<p>Vi använder den begränsade information som beskrivs ovan för att driva och skydda webbplatsen, svara på meddelanden och förbättra verktygen. Vi sparar meddelanden bara så länge som behövs för att hantera din förfrågan och för rimlig dokumentation.</p>
<h2>6. Dina rättigheter</h2>
<p>Beroende på var du bor (till exempel enligt GDPR eller liknande lagar) kan du ha rätt att få tillgång till, rätta, radera eller begränsa användningen av dina personuppgifter, invända mot behandlingen och lämna klagomål till din lokala tillsynsmyndighet. Eftersom vi lagrar mycket få personuppgifter är de flesta förfrågningar enkla att tillmötesgå.</p>
<h2>7. Barn</h2>
<p>Tjänsten riktar sig inte till barn under 13 år och vi samlar inte medvetet in deras personuppgifter.</p>
<h2>8. Säkerhet</h2>
<p>Webbplatsen levereras över HTTPS. Eftersom dina filer aldrig laddas upp utsätts de inte för överförings- eller lagringsrisker hos oss.</p>
<h2>9. Ändringar av policyn</h2>
<p>Vi kan uppdatera policyn. Datumet ”Senast uppdaterad” visar den senaste versionen.</p>
<h2>10. Kontakt för integritetsförfrågningar</h2>
<p>För frågor eller förfrågningar om integritet, mejla ${mail} med ”Integritetsförfrågan” i ämnesraden eller använd <a href="../contact-us/">kontaktsidan</a>. Se även våra <a href="../terms/">användarvillkor</a>.</p>`};

const notFound={
 title:'Sidan hittades inte | '+N,
 desc:'Sidan du söker hittades inte. Gå tillbaka till PNG till SVG-konverteraren eller utforska våra andra gratis konverterare och SVG-verktyg.',
 h1:'Sidan hittades inte',
 lead:'Sidan du försökte öppna finns inte eller har flyttats. Här är några ställen du kan gå till.',
 body:`<ul class="nf-links">
<li><a href="/sv/">PNG till SVG-konverterare (startsidan)</a></li>
<li><a href="/sv/jpg-to-svg-converter/">JPG till SVG-konverterare</a></li>
<li><a href="/sv/svg-to-png-converter/">SVG till PNG-konverterare</a></li>
<li><a href="/sv/svg-optimizer/">SVG-optimerare</a></li>
<li><a href="/sv/sitemap/">Webbplatskarta: alla konverterare och verktyg</a></li>
<li><a href="/sv/contact-us/">Kontakt</a></li>
</ul>`};

const sitemap={title:'Webbplatskarta | '+N,desc:'Alla sidor på pngtosvgconverter.com: gratis konverterare från bild till SVG, från SVG till bild, SVG-verktyg och startsidan på 18 språk.',h1:'Webbplatskarta',lead:'Alla sidor på pngtosvgconverter.com på ett ställe.',crumb:'Webbplatskarta',
 main:'Huvudsidor',home:'Start: PNG till SVG-konverterare',about:'Om oss',contact:'Kontakt',terms:'Användarvillkor',privacy:'Integritetspolicy',sitemap:'Webbplatskarta',
 gRaster:'Konverterare från bild till SVG',gExport:'Konverterare från SVG till bild',gUtil:'SVG-verktyg',gLang:'Startsidan på andra språk'};
return {about,contact,terms,privacy,notFound,sitemap};
};
