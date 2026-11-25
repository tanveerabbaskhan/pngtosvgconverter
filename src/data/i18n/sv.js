module.exports={
 meta:{title:'Gratis PNG till SVG-konverterare online – ingen registrering, direkt',desc:'Konvertera PNG till SVG gratis online. Vektorisera vilken bild som helst till rena, skalbara vektorer. 42 gratis SVG-verktyg, liveförhandsgranskning, ingen uppladdning, ingen registrering.',alt:'Gratis PNG till SVG-konverterare online med liveförhandsgranskning'},
 h1:{kw:'PNG till SVG-konverterare',tail:'förvandla vilken PNG som helst till skalbar SVG'},
 lead:'Konvertera PNG till SVG online på några sekunder. Den här gratis konverteraren spårar din bild till rena vektorbanor direkt i webbläsaren – utan uppladdning, registrering eller vattenstämpel.',
 skip:'Hoppa till huvudinnehållet',
 nav:{converter:'Konverterare',all:'Alla konverterare',faq:'Vanliga frågor',about:'Om oss',contact:'Kontakt',menu:'Meny',theme:'Byt tema',upload:'Ladda upp bild',main:'Huvudnavigering',toc:'På den här sidan'},
 toc:{how:'Så fungerar det',proc:'Konverteringsprocessen',chart:'Tabell och funktioner',faq:'Vanliga frågor',all:'Alla konverterare'},
 ui:{
  toolH2:'Verktyg för att konvertera PNG till SVG',step1:'Lägg till din bild',dropAria:'Ladda upp en bild',drop:'Släpp din PNG här eller klicka för att bläddra',paste:'Du kan också klistra in med Ctrl+V. Inget laddas upp.',
  sample:'Ingen bild? Prova ett exempel:',sLogo:'Logotyp',sScene:'Landskap',sIcon:'Ikon',choose:'Välj bild',
  step2:'Justera resultatet',reset:'Återställ',startFrom:'Börja med',pLogo:'Logotyp',pIllus:'Illustration',pPhoto:'Foto',pLine:'Linjeteckning',
  style:'Stil',mColor:'Färg',mGray:'Grå',mMono:'Mono',rmbg:'Ta bort bakgrund',rmbgSub:'Rensar vita eller genomskinliga kanter',
  colors:'Färger',thresh:'Tröskel',ink:'Bläckfärg',smooth:'Utjämning',more:'Fler alternativ',detail:'Detaljnivå',specks:'Ta bort fläckar',denoise:'Brusreducering',
  step3:'Förhandsgranska och ladda ner',live:'Liveförhandsgranskning',loading:'Läser in…',copy:'Kopiera SVG-kod',download:'Ladda ner SVG',
  chipL:'Original · PNG',chipR:'Vektor · SVG',handle:'Jämför original och SVG',hint:'Dra i handtaget för att jämföra · scrolla för att zooma',zoomOut:'Zooma ut',zoomIn:'Zooma in',fit:'Anpassa',
  veil:'Släpp bilden för att konvertera',veilSub:'PNG, JPG, WebP, GIF',fileSize:'SVG-filstorlek',tColors:'Färger',time:'Tid',
  moreD:'Fler detaljer',moreDSub:'Färglager, storlekshistorik, SVG-kod',shapes:'Former',shapesSub:'slutna konturer',nodes:'Noder',nodesSub:'banpunkter',
  p1:'Avkoda',p2:'Kvantisera',p3:'Spåra',p4:'Förenkla',p5:'Rendera',
  layers:'Färglager',layersSub:'Hovra för att isolera · klicka för att dölja',trace:'Livespårning av storlek',traceSub:'SVG-storlek vid varje justering',legSvg:'SVG-storlek',legPng:'Original-PNG',src:'SVG-källkod'
 },
 js:{
  needImage:'Välj en bildfil',readFail:'Det gick inte att läsa bilden',tracedAt:'spårad i {w}×{h}',
  smaller:'<span class="delta good">{pct} % mindre</span> än PNG-filen på {size}',larger:'<span class="delta warn">{pct} % större</span> än PNG-filen på {size}',
  noShapes:'Inga synliga former – försök sänka ”Ta bort fläckar”.',pts:'pkt',moreChars:'… {n} tecken till',lines:'{n} rader',previewOnly:'endast förhandsgranskning – Kopiera eller Ladda ner ger hela filen',
  runs:'{n} körningar · nu {size}',run1:'1 körning · nu {size}',fullCopied:'Hela SVG:n kopierad',downloaded:'SVG nedladdad · {size}',copied:'SVG-kod kopierad',
  dirStatus:'Visar {a} av {b} verktyg'
 },
 how:{
  eyebrow:'Under huven',title:'Så fungerar PNG till SVG-konverteraren',
  def:'<strong>En PNG till SVG-konverterare</strong> förvandlar ett rutnät av färgade pixlar till fyllda vektorformer. Den här gör det i fem automatiska steg, helt i din webbläsare, och ritar om resultatet varje gång du flyttar ett reglage.',
  stages:[
   ['Avkoda','Webbläsaren läser PNG-filen med Canvas-API:et och gör om den till ett rutnät av RGBA-pixlar. Stora filer skalas om till en arbetsstorlek som styrs av reglaget Detaljnivå, och en valfri brusreducering tar bort korn.','Canvas · getImageData'],
   ['Kvantisera','En palett på 2–64 färger framtagen med median cut förfinas med k-means. Nästan identiska färger slås ihop, utjämnade kantpixlar knyts till närmaste riktiga färg och små fläckar absorberas av sina grannar.','Median cut · k-means'],
   ['Spåra','Varje färg blir ett staplat lager. Lagrets mask mjukas upp och dess kontur tas fram med marching squares, vilket ger subpixelkonturer som följer den verkliga kanten i stället för pixlarnas trappsteg.','Marching squares'],
   ['Anpassa kurvor','Hörn identifieras, och därefter anpassas varje mjuk sträcka med kubiska Bézierkurvor. Raka kanter förblir raka linjer, så resultatet kräver betydligt färre noder än en rå pixelspårning.','Schneiders Bézieranpassning'],
   ['Rendera','Banorna skrivs som en fylld SVG-bana per färg, med den ursprungliga viewBox bevarad. Förhandsvisning, filstorlek, palett och källkod uppdateras live när du flyttar ett reglage.','SVG · fill-rule evenodd']],
  cap:'De fem stegen i PNG till SVG-konvertering: avkoda, kvantisera, spåra, anpassa kurvor och rendera.',
  privTitle:'Vart din fil tar vägen',privCap:'PNG-filen bearbetas på din enhet. Ingen uppladdning sker, så filen når aldrig en server.',privAlt:'Din PNG stannar på din enhet',privAltDesc:'PNG-filen passerar konverteraren i din webbläsare och blir en SVG. Ingen pil lämnar din enhet mot en server.',
  privBrowser:'DIN WEBBLÄSARE',privEngine:'Spårningsmotor',privServer:'Server',privNot:'inte inblandad',
  whyTitle:'Därför blir resultatet litet och rent',
  why:[['Staplade lager','Varje färg ligger ovanpå den under, så det finns inga hårfina glipor och betydligt färre hål att beskriva.'],['Subpixelkonturer','Kanterna placeras mellan pixlarna i stället för på dem, så diagonaler och kurvor förblir mjuka.'],['Kurvanpassning','Ett enda Béziersegment kan ersätta dussintals pixeltrappsteg, så en typisk logotyp behöver bara några hundra noder.'],['Rensning före spårning','Kantutjämningsfransar och fläckar slås ihop först, så de aldrig blir extra former.']]
 },
 proc:{
  eyebrow:'Steg för steg',title:'Konverteringsprocessen från PNG till SVG',
  def:'Att konvertera en PNG till SVG tar fem steg och oftast mindre än en minut. Du kan sluta efter vilket steg som helst: SVG:n är klar att ladda ner så fort förhandsvisningen ser rätt ut.',
  steps:[
   ['Lägg till din PNG','Släpp en PNG i uppladdningsrutan, klicka på ”Välj bild” eller klistra in en från urklipp med Ctrl+V. Inte redo än? Tryck på en exempelknapp för att se konverteraren i arbete först.','Accepterar även JPG, WebP, GIF och BMP.'],
   ['Välj en förinställning','Välj Logotyp, Illustration, Foto eller Linjeteckning. Varje förinställning sätter rimliga värden för färger, detaljnivå, utjämning och fläckborttagning, så den första förhandsvisningen ligger ofta redan nära.','Logotyper: 4–8 färger. Foton: 32–48 färger.'],
   ['Finjustera spårningen','Justera antal färger (2–64), Detaljnivå, Utjämning, Ta bort fläckar och Brusreducering. Växla mellan lägena Färg, Grå och Mono och slå på Ta bort bakgrund för vita eller genomskinliga kanter.','Varje reglage uppdaterar förhandsvisningen direkt.'],
   ['Jämför och granska','Dra i handtaget för att jämföra original-PNG:n med SVG:n. Scrolla för att zooma, dra för att panorera och hovra över ett färglager för att isolera det eller klicka för att dölja det före export.','Zooma till 3200 % för att se SVG:n förbli skarp.'],
   ['Ladda ner eller kopiera SVG:n','Tryck på ”Ladda ner SVG” för att spara filen, eller ”Kopiera kod” för att klistra in koden direkt i ditt projekt, Figma, Illustrator, Inkscape eller på en webbsida.','Filen lämnar aldrig din enhet.']],
  cta:'Konvertera en PNG nu',tipLabel:'Tips:',
  mock:{dropLabel:'Släpp PNG',presets:['Logotyp','Illustration','Foto','Linjeteckning'],sliders:['Färger','Detaljnivå','Utjämning'],dlBtn:'Ladda ner SVG'}
 },
 chart:{
  eyebrow:'Referens',title:'Konverteringstabell för PNG till SVG / funktioner',
  def:'Använd tabellen för att välja rätt inställningar för din PNG-typ, se hur bra varje typ konverteras och jämföra PNG med SVG. Värdena motsvarar konverterarens inbyggda förinställningar.',
  barsTitle:'Hur bra varje PNG-typ konverteras',barsCap:'Vektorlämplighet från 1 (dålig) till 5 (utmärkt). Platt, högkontrastig grafik konverteras bäst; fotografier sämst.',
  barsAlt:'Hur bra varje typ av PNG konverteras till SVG',
  bars:['Logotyp','Ikon','Pixelkonst','Platt illustration','Linjeteckning','Signatur','Skannat dokument','Fotografi'],
  quickTitle:'Snabba svar',
  quick:[['Bäst resultat:','logotyper, ikoner, pixelkonst och platta illustrationer.'],['Bra resultat:','linjeteckningar, skisser och signaturer i läget Mono.'],['Kräver omsorg:','skannade sidor, som behöver brusreducering och ett högre fläckfilter.'],['Endast stiliserat:','fotografier och mjuka toningar blir posteriserad konst.']],
  note:'Tips: börja med den förinställning som ligger närmast och ändra bara ett reglage i taget.',
  t1:{cap:'Rekommenderade konverterarinställningar efter PNG-typ',cols:['PNG-typ','Förinställning eller läge','Färger','Detaljnivå','Utjämning','Ta bort fläckar','Vektorlämplighet'],
   rows:[['Logotyp','Förinställningen Logotyp'],['Ikon','Förinställningen Logotyp'],['Platt illustration eller tecknad serie','Förinställningen Illustration'],['Linjeteckning eller skiss','Förinställningen Linjeteckning · Mono'],['Signatur','Mono · tröskel 160'],['Pixelkonst','Pixelläge'],['Skannat dokument','Mono · brusreducering 1,5'],['Fotografi','Förinställningen Foto']],
   words:{ink:'bläck',auto:'automatisk pixelstorlek',na:'används inte',up:'upp till'}},
  t2:{cap:'PNG och SVG i korthet',cols:['Egenskap','PNG (raster)','SVG (vektor)'],
   rows:[['Skalning','Pixlar blir suddiga eller faller isär vid förstoring','Skalas till vilken storlek som helst utan att förlora skärpa'],['Filstorlek','Växer med antalet pixlar','Växer med formernas komplexitet – liten för platt grafik'],['Redigering','Pixlar redigeras i ett rasterprogram','Former, kurvor och färger redigeras i vilket vektorprogram som helst'],['Bäst för','Fotografier och detaljerade texturer','Logotyper, ikoner, illustrationer, diagram och linjeteckningar'],['Genomskinlighet','Alfakanal','Inbyggd – tomt utrymme är helt enkelt genomskinligt'],['Formgivning med CSS','Inte möjligt','Möjligt när SVG:n är inbäddad i en sida'],['Tryck och skyltning','Kräver ett original i hög upplösning','Upplösningsoberoende för alla tryckstorlekar']]},
  featTitle:'Konverterarens funktioner',
  feats:[['Liveförhandsgranskning','Varje reglage spårar om bilden och uppdaterar delad vy, storleksdiagram, palett och nodantal på en gång.'],['Subpixelspårning','Konturerna följer den verkliga kanten mellan färger i stället för pixelgränser, så kurvorna förblir mjuka.'],['Bézierkurvanpassning','Mjuka sträckor blir kubiska Béziers och raka kanter förblir linjer, vilket håller nodantalet lågt.'],['Staplade färglager','Lagren ligger ovanpå varandra, så det finns inga hårfina glipor eller skarvar mellan färger.'],['2–64 färger','Välj hur många färger som ska behållas, eller byt till Grå eller Mono. Hovra över eller dölj valfritt lager före export.'],['Pixelläge','Spårar pixelkonst som skarpa rektanglar vid den upptäckta pixelstorleken, utan utjämning.'],['Genomskinliga bakgrunder','Genomskinliga pixlar blir aldrig former. Ta bort bakgrund rensar en enfärgad vit bakgrund med ett klick.'],['Zooma och jämför','Dra i handtaget för att jämföra och zooma sedan till 3200 % för att se PNG:n bli pixlig medan SVG:n förblir skarp.'],['Integritet från grunden','Konverteringen körs i din webbläsare. Din PNG laddas aldrig upp, lagras eller delas.'],['Gratis, utan begränsningar','Inget konto, ingen vattenstämpel, ingen daglig kvot. Konvertera hur många bilder du vill.']]
 },
 faq:{
  eyebrow:'Svar',title:'Vanliga frågor',def:'Vanliga frågor om PNG till SVG-konverteraren: hur den fungerar, vad du kan förvänta dig och hur du får bästa resultat. {n} svar i fyra ämnen.',
  groups:[
   ['Grunderna',[
    ['Vad är en PNG till SVG-konverterare?','En PNG till SVG-konverterare förvandlar en pixelbaserad PNG-bild till en vektor-SVG som består av matematiska former och kurvor. Eftersom en SVG beskriver former i stället för pixlar kan den skalas till vilken storlek som helst utan suddighet, och den är ofta mycket mindre än PNG-filen för platt grafik som logotyper och ikoner.'],
    ['Är den här PNG till SVG-konverteraren gratis?','Ja. Den är helt gratis, utan konto, vattenstämpel eller daglig gräns. Den enda praktiska begränsningen är din enhet: bilder bearbetas upp till 3000 px på den längsta sidan, och mycket stora eller mycket detaljerade filer tar bara lite längre tid.'],
    ['Laddas mina PNG-filer upp till en server?','Nej. Konverteringen körs helt i din webbläsare med JavaScript och Canvas-API:et. Din PNG laddas aldrig upp, lagras eller delas, så konfidentiellt material stannar på din enhet.'],
    ['Vad är skillnaden mellan PNG och SVG?','PNG är ett rasterformat som lagrar ett rutnät av färgade pixlar och därför tappar skärpa när det förstoras. SVG är ett vektorformat som lagrar former, kurvor och fyllningar, så det förblir skarpt i alla storlekar och kan redigeras i vektorverktyg. PNG passar fotografier, SVG passar logotyper, ikoner, diagram och linjeteckningar.']]],
   ['Kvalitet och inställningar',[
    ['Kommer SVG:n att se exakt ut som min PNG?','Inte pixel för pixel. Konverteringen spårar de former den hittar och approximerar dem med kurvor, så resultatet är en ren, skalbar version av bilden. Platta, högkontrastiga bilder stämmer mycket nära, medan fotografier blir en stiliserad, posteriserad version.'],
    ['Vilka PNG-bilder konverteras bäst?','Logotyper, ikoner, platta illustrationer, tecknade serier, linjeteckningar, signaturer och pixelkonst konverteras bäst eftersom de består av tydliga former och en begränsad uppsättning färger. Fotografier och mjuka toningar konverteras sämst (prova [[photo-to-vector-converter]] för stiliserade resultat). Se tabellen ovan för inställningar efter bildtyp.'],
    ['Hur många färger ska jag välja?','Matcha antalet platta färger i din bild. De flesta logotyper behöver 4–8, ikoner 3–6 och illustrationer 12–20. Fotografier kan behöva 32–48 eller fler. Extra färger ger fler lager och större fil utan att förbättra en platt design, och färglagerlistan visar exakt vad varje färg bidrar med.'],
    ['Hur får jag mjukare linjer eller skarpare hörn?','Använd reglaget Utjämning. Låga värden behåller skarpa hörn och kanter nära originalet; höga värden rundar av pixeltrappsteg och skakighet. Höj Detaljnivå för finare detaljer och sänk Ta bort fläckar om tunna linjer försvinner.'],
    ['Varför ser mitt foto posteriserat eller randigt ut?','Vektorer lagrar enfärgade områden, så en mjuk toning måste approximeras med band. Öka antalet färger och Detaljnivå, lägg till lite brusreducering eller acceptera den kraftiga, grafiska looken. För äkta fotografisk detalj, behåll PNG:n eller använd ett fotoformat.']]],
   ['Genomskinlighet, text och redigering',[
    ['Hur behåller jag en genomskinlig bakgrund?','Genomskinliga pixlar i din PNG respekteras automatiskt och blir aldrig former, så SVG:n har ingen bakgrundsruta. Om din PNG har en enfärgad vit bakgrund slår du på Ta bort bakgrund. Läget Mono slänger också papperstonen och behåller bara bläcket, vilket sidan [[transparent-image-to-svg-converter]] är anpassad för.'],
    ['Känner den igen text i min PNG?','Nej. Konverteraren utför ingen OCR. Bokstäver spåras som vektorkonturer, så de skalas perfekt men går inte att redigera som text. Behöver du levande text skriver du om den i ett designverktyg eller använder OCR separat.'],
    ['Varför är min SVG större än min PNG?','Fotografier och toningar behöver många former, och det kan överstiga en välkomprimerad PNG. Minska antalet färger, sänk Detaljnivå, höj Ta bort fläckar eller Utjämning. Filstorlekskortet och livespårningen av storlek visar effekten av varje ändring.'],
    ['Kan jag redigera SVG:n i Figma, Illustrator, Inkscape eller Canva?','Ja. Resultatet är en standard-SVG med en fylld bana per färg, så vilket vektorprogram som helst kan öppna, färga om och omforma den. Lagren staplas i ordning, och du kan dölja ett lager i konverteraren innan du laddar ner.']]],
   ['Kompatibilitet',[
    ['Vilka PNG-storlekar och format stöds?','Du kan ladda upp PNG-, JPG-, WebP-, GIF- och BMP-filer (var och en har också en egen sida, till exempel [[jpg-to-svg-converter]] och [[webp-to-svg-converter]]) som din webbläsare kan öppna. Av prestandaskäl skalas mycket stora bilder ner till högst 3000 px på den längsta sidan före spårning, och den exporterade SVG:n behåller det ursprungliga bildförhållandet.'],
    ['Fungerar den på mobiler och surfplattor?','Ja. Den körs i aktuella versioner av Chrome, Edge, Firefox och Safari på dator och mobil. Mycket stora bilder kan gå långsammare på äldre mobiler, så prova en mindre bild eller lägre Detaljnivå om förhandsvisningen känns seg.']]]
  ],
  ctaTitle:'Redo att vektorisera?',ctaText:'Din PNG är ett enda drag från en skalbar SVG.',ctaBtn:'Öppna PNG till SVG-konverteraren'
 },
 dir:{
  eyebrow:'Alla konverterare',title:'Alla gratis konverterare och SVG-verktyg',lead:'{n} gratis verktyg som körs i webbläsaren. Välj en konverterare nedan eller sök efter format eller uppgift.',
  search:'Sök, t.ex. ”logotyp”, ”PDF”, ”minifiera”',searchLabel:'Sök bland konverterare',filter:'Filtrera efter typ',all:'Alla',empty:'Ingen konverterare matchar sökningen. Prova ”SVG”, ”logotyp” eller ”PNG”.',
  groups:[['Bild till SVG','Spåra rasterbilder till skalbara vektorformer.'],['SVG till bild','Exportera en SVG som PNG, JPG, WebP, PDF eller ICO.'],['SVG-verktyg','Komprimera, redigera, granska och validera SVG-kod.']],
  here:'Du är här',nav:'Alla konverterare och SVG-verktyg'
 },
 foot:{
  blurb:'Gratis PNG till SVG-konverterare och SVG-verktyg som körs helt i din webbläsare.',colExplore:'Utforska',colCompany:'Företaget',colLegal:'Juridiskt',lang:'Språk',
  home:'Startsida',about:'Om oss',contact:'Kontakt',terms:'Villkor',privacy:'Integritetspolicy',sitemap:'Webbplatskarta',
  copy:'© {year} pngtosvgconverter.com',made:'Gjort för designers och utvecklare · Bearbetas lokalt'
 }
};
