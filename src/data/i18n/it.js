module.exports={
 meta:{title:'Convertitore da PNG a SVG Gratis Online – Senza Registrazione, Istantaneo',desc:'Converti PNG in SVG gratis online. Vettorializza qualsiasi immagine in vettori puliti e scalabili. 42 strumenti SVG gratuiti, anteprima dal vivo, senza caricare file e senza registrazione.',alt:'Convertitore da PNG a SVG gratuito online con anteprima dal vivo'},
 h1:{kw:'Convertitore da PNG a SVG',tail:'trasforma qualsiasi PNG in un SVG scalabile'},
 lead:'Converti PNG in SVG online in pochi secondi. Questo convertitore gratuito traccia la tua immagine in percorsi vettoriali puliti direttamente nel browser, senza caricare file, senza registrazione e senza filigrana.',
 skip:'Vai al contenuto principale',
 nav:{converter:'Convertitore',all:'Tutti i convertitori',faq:'FAQ',about:'Chi siamo',contact:'Contatti',menu:'Menu',theme:'Cambia tema',upload:'Carica immagine',main:'Navigazione principale',toc:'In questa pagina'},
 toc:{how:'Come funziona',proc:'Processo di conversione',chart:'Tabella e funzioni',faq:'FAQ',all:'Tutti i convertitori'},
 ui:{
  toolH2:'Strumento per convertire PNG in SVG',step1:'Aggiungi la tua immagine',dropAria:'Carica un’immagine',drop:'Trascina qui il PNG o fai clic per sfogliare',paste:'Puoi anche incollare con Ctrl+V. Non viene caricato nulla.',
  sample:'Nessuna immagine? Prova un esempio:',sLogo:'Logo',sScene:'Paesaggio',sIcon:'Icona',choose:'Scegli immagine',
  step2:'Regola il risultato',reset:'Ripristina',startFrom:'Parti da',pLogo:'Logo',pIllus:'Illustrazione',pPhoto:'Foto',pLine:'Disegno al tratto',
  style:'Stile',mColor:'Colore',mGray:'Grigi',mMono:'Mono',rmbg:'Rimuovi sfondo',rmbgSub:'Elimina i bordi bianchi o trasparenti',
  colors:'Colori',thresh:'Soglia',ink:'Colore inchiostro',smooth:'Levigatura',more:'Altre opzioni',detail:'Dettaglio',specks:'Rimuovi macchie',denoise:'Riduci rumore',
  step3:'Anteprima e download',live:'Anteprima dal vivo',loading:'Caricamento…',copy:'Copia codice SVG',download:'Scarica SVG',
  chipL:'Originale · PNG',chipR:'Vettore · SVG',handle:'Confronta originale e SVG',hint:'Trascina il cursore per confrontare · scorri per ingrandire',zoomOut:'Riduci',zoomIn:'Ingrandisci',fit:'Adatta',
  veil:'Rilascia l’immagine per convertirla',veilSub:'PNG, JPG, WebP, GIF',fileSize:'Dimensione SVG',tColors:'Colori',time:'Tempo',
  moreD:'Altri dettagli',moreDSub:'Livelli di colore, cronologia dimensioni, codice SVG',shapes:'Forme',shapesSub:'contorni chiusi',nodes:'Nodi',nodesSub:'punti del tracciato',
  p1:'Decodifica',p2:'Quantizzazione',p3:'Tracciamento',p4:'Semplificazione',p5:'Rendering',
  layers:'Livelli di colore',layersSub:'Passa sopra per isolare · clic per nascondere',trace:'Dimensione dal vivo',traceSub:'Dimensione SVG a ogni regolazione',legSvg:'Dimensione SVG',legPng:'PNG originale',src:'Sorgente SVG'
 },
 js:{
  needImage:'Scegli un file immagine',readFail:'Impossibile leggere questa immagine',tracedAt:'tracciato a {w}×{h}',
  smaller:'<span class="delta good">{pct}% più leggero</span> del PNG da {size}',larger:'<span class="delta warn">{pct}% più pesante</span> del PNG da {size}',
  noShapes:'Nessuna forma visibile: prova a ridurre «Rimuovi macchie».',pts:'pt',moreChars:'… altri {n} caratteri',lines:'{n} righe',previewOnly:'solo anteprima: Copia o Scarica dà il file completo',
  runs:'{n} esecuzioni · ora {size}',run1:'1 esecuzione · ora {size}',fullCopied:'SVG completo copiato',downloaded:'SVG scaricato · {size}',copied:'Codice SVG copiato',
  dirStatus:'Mostrati {a} strumenti su {b}'
 },
 how:{
  eyebrow:'Dietro le quinte',title:'Come funziona il convertitore da PNG a SVG',
  def:'<strong>Un convertitore da PNG a SVG</strong> trasforma una griglia di pixel colorati in un insieme di forme vettoriali piene. Questo lo fa in cinque fasi automatiche, interamente nel tuo browser, e ridisegna il risultato ogni volta che muovi un cursore.',
  stages:[
   ['Decodifica','Il browser legge il PNG con l’API Canvas e lo trasforma in una griglia di pixel RGBA. I file grandi vengono ricampionati a una dimensione di lavoro stabilita dal cursore Dettaglio, e una sfocatura facoltativa di riduzione del rumore elimina la grana.','Canvas · getImageData'],
   ['Quantizzazione','Una tavolozza di 2–64 colori ottenuta con median cut viene rifinita con k-means. I colori quasi uguali vengono uniti, i pixel di bordo sfumati sono riportati al colore reale più vicino e le macchioline minuscole vengono assorbite dalle vicine.','Median cut · k-means'],
   ['Tracciamento','Ogni colore diventa un livello sovrapposto. La maschera del livello viene ammorbidita e il suo contorno estratto con marching squares, ottenendo contorni sub-pixel che seguono il vero bordo invece dei gradini dei pixel.','Marching squares'],
   ['Adattamento delle curve','Si rilevano gli angoli e ogni tratto morbido viene adattato con curve di Bézier cubiche. I bordi dritti restano linee rette, così servono molti meno nodi di un tracciato grezzo di pixel.','Adattamento di Bézier di Schneider'],
   ['Rendering','I tracciati vengono scritti come un percorso SVG pieno per colore, mantenendo il viewBox originale. Anteprima, dimensione del file, tavolozza e codice sorgente si aggiornano dal vivo mentre muovi un cursore.','SVG · fill-rule evenodd']],
  cap:'Le cinque fasi della conversione da PNG a SVG: decodifica, quantizzazione, tracciamento, adattamento delle curve e rendering.',
  privTitle:'Dove va il tuo file',privCap:'Il PNG viene elaborato sul tuo dispositivo. Non avviene alcun caricamento, quindi il file non raggiunge mai un server.',privAlt:'Il tuo PNG resta sul tuo dispositivo',privAltDesc:'Il PNG attraversa il convertitore dentro il browser e diventa un SVG. Nessuna freccia esce dal dispositivo verso un server.',
  privBrowser:'IL TUO BROWSER',privEngine:'Motore di tracciamento',privServer:'Server',privNot:'non coinvolto',
  whyTitle:'Perché il risultato resta piccolo e pulito',
  why:[['Livelli sovrapposti','Ogni colore poggia su quello sottostante, quindi non ci sono fessure sottilissime e molti meno buchi da descrivere.'],['Contorni sub-pixel','I bordi sono collocati tra i pixel e non sopra, così diagonali e curve restano morbide.'],['Adattamento delle curve','Un solo segmento di Bézier può sostituire decine di gradini di pixel, quindi un logo tipico richiede solo poche centinaia di nodi.'],['Pulizia prima del tracciamento','Le frange dell’anti-aliasing e le macchioline vengono unite per prime, così non diventano mai forme aggiuntive.']]
 },
 proc:{
  eyebrow:'Passo dopo passo',title:'Processo di conversione da PNG a SVG',
  def:'Convertire un PNG in SVG richiede cinque passaggi e di solito meno di un minuto. Puoi fermarti dopo qualsiasi passaggio: l’SVG è pronto da scaricare non appena l’anteprima ti convince.',
  steps:[
   ['Aggiungi il tuo PNG','Trascina un PNG nell’area di caricamento, fai clic su «Scegli immagine» oppure incollane uno dagli appunti con Ctrl+V. Non sei ancora pronto? Premi un pulsante di esempio per vedere prima il convertitore al lavoro.','Accetta anche JPG, WebP, GIF e BMP.'],
   ['Scegli un’impostazione predefinita','Scegli Logo, Illustrazione, Foto o Disegno al tratto. Ogni impostazione fissa valori ragionevoli per colori, dettaglio, levigatura e rimozione delle macchie, così la prima anteprima è spesso già vicina al risultato.','Loghi: 4–8 colori. Foto: 32–48 colori.'],
   ['Rifinisci il tracciato','Regola il numero di colori (2–64), Dettaglio, Levigatura, Rimuovi macchie e Riduci rumore. Passa tra le modalità Colore, Grigi e Mono e attiva Rimuovi sfondo per bordi bianchi o trasparenti.','Ogni cursore aggiorna subito l’anteprima.'],
   ['Confronta e ispeziona','Trascina il cursore per confrontare il PNG originale con l’SVG. Scorri per ingrandire, trascina per spostarti e passa su un livello di colore per isolarlo o fai clic per nasconderlo prima dell’esportazione.','Ingrandisci fino al 3200% per vedere l’SVG restare nitido.'],
   ['Scarica o copia l’SVG','Premi «Scarica SVG» per salvare il file, oppure «Copia codice» per incollare il codice nel tuo progetto, in Figma, Illustrator, Inkscape o in una pagina web.','Il file non lascia mai il tuo dispositivo.']],
  cta:'Converti un PNG ora',tipLabel:'Suggerimento:',
  mock:{dropLabel:'Trascina il PNG',presets:['Logo','Illustrazione','Foto','Disegno al tratto'],sliders:['Colori','Dettaglio','Levigatura'],dlBtn:'Scarica SVG'}
 },
 chart:{
  eyebrow:'Riferimento',title:'Tabella di conversione da PNG a SVG / funzioni',
  def:'Usa questa tabella per scegliere le impostazioni giuste per il tuo tipo di PNG, vedere quanto bene si converte ciascun tipo e confrontare PNG e SVG. I valori corrispondono alle impostazioni predefinite del convertitore.',
  barsTitle:'Quanto bene si converte ogni tipo di PNG',barsCap:'Adattamento vettoriale da 1 (scarso) a 5 (eccellente). Le grafiche piatte e ad alto contrasto si convertono meglio; le fotografie meno.',
  barsAlt:'Quanto bene ogni tipo di PNG si converte in SVG',
  bars:['Logo','Icona','Pixel art','Illustrazione piatta','Disegno al tratto','Firma','Documento scansionato','Fotografia'],
  quickTitle:'Risposte rapide',
  quick:[['Risultati migliori:','loghi, icone, pixel art e illustrazioni piatte.'],['Buoni risultati:','disegni al tratto, schizzi e firme in modalità Mono.'],['Richiede attenzione:','pagine scansionate, che necessitano di riduzione del rumore e di un filtro macchie più alto.'],['Solo stilizzato:','fotografie e sfumature morbide diventano arte posterizzata.']],
  note:'Suggerimento: parti dall’impostazione più vicina, poi cambia un solo cursore alla volta.',
  t1:{cap:'Impostazioni consigliate del convertitore per tipo di PNG',cols:['Tipo di PNG','Impostazione o modalità','Colori','Dettaglio','Levigatura','Rimuovi macchie','Adattamento vettoriale'],
   rows:[['Logo','Impostazione Logo'],['Icona','Impostazione Logo'],['Illustrazione piatta o cartoon','Impostazione Illustrazione'],['Disegno al tratto o schizzo','Impostazione Disegno al tratto · Mono'],['Firma','Mono · soglia 160'],['Pixel art','Modalità Pixel'],['Documento scansionato','Mono · riduzione rumore 1,5'],['Fotografia','Impostazione Foto']],
   words:{ink:'inchiostro',auto:'dimensione pixel automatica',na:'non usato',up:'fino a'}},
  t2:{cap:'PNG e SVG a colpo d’occhio',cols:['Caratteristica','PNG (raster)','SVG (vettoriale)'],
   rows:[['Ridimensionamento','I pixel sfocano o si sgranano quando si ingrandisce','Si scala a qualsiasi dimensione senza perdere nitidezza'],['Dimensione del file','Cresce con il numero di pixel','Cresce con la complessità delle forme: minuscolo per grafiche piatte'],['Modifica','Si modificano i pixel in un editor raster','Si modificano forme, curve e colori in qualsiasi editor vettoriale'],['Ideale per','Fotografie e texture dettagliate','Loghi, icone, illustrazioni, diagrammi e disegni al tratto'],['Trasparenza','Canale alfa','Nativa: lo spazio vuoto è semplicemente trasparente'],['Stili con CSS','Non possibile','Possibile quando l’SVG è inserito nella pagina'],['Stampa e insegne','Richiede un originale ad alta risoluzione','Indipendente dalla risoluzione per qualsiasi formato di stampa']]},
  featTitle:'Funzioni del convertitore',
  feats:[['Anteprima dal vivo','Ogni cursore ritraccia l’immagine e aggiorna insieme vista divisa, grafico delle dimensioni, tavolozza e numero di nodi.'],['Tracciamento sub-pixel','I contorni seguono il vero bordo tra i colori e non i confini dei pixel, così le curve restano morbide.'],['Adattamento delle curve di Bézier','I tratti morbidi diventano Bézier cubiche e i bordi dritti restano linee, mantenendo basso il numero di nodi.'],['Livelli di colore sovrapposti','I livelli si sovrappongono, quindi non ci sono fessure o giunture tra i colori.'],['Da 2 a 64 colori','Scegli quanti colori mantenere o passa a Grigi o Mono. Passa sopra o nascondi un livello prima dell’esportazione.'],['Modalità Pixel','Traccia la pixel art come rettangoli nitidi alla dimensione di pixel rilevata, senza levigatura.'],['Sfondi trasparenti','I pixel trasparenti non diventano mai forme. Rimuovi sfondo elimina uno sfondo bianco pieno con un clic.'],['Zoom e confronto','Trascina il cursore per confrontare, poi ingrandisci fino al 3200% per vedere il PNG pixelarsi mentre l’SVG resta nitido.'],['Privato per progettazione','La conversione avviene nel browser. Il tuo PNG non viene mai caricato, archiviato o condiviso.'],['Gratis e senza limiti','Nessun account, nessuna filigrana, nessuna quota giornaliera. Converti quante immagini vuoi.']]
 },
 faq:{
  eyebrow:'Risposte',title:'FAQ',def:'Domande frequenti sul convertitore da PNG a SVG: come funziona, cosa aspettarsi e come ottenere il miglior risultato. {n} risposte in quattro argomenti.',
  groups:[
   ['Le basi',[
    ['Che cos’è un convertitore da PNG a SVG?','Un convertitore da PNG a SVG trasforma un’immagine PNG fatta di pixel in un SVG vettoriale composto da forme e curve matematiche. Poiché un SVG descrive forme e non pixel, si può scalare a qualsiasi dimensione senza sfocature e, per grafiche piatte come loghi e icone, è spesso molto più leggero del PNG.'],
    ['Questo convertitore da PNG a SVG è gratuito?','Sì. È completamente gratuito, senza account, senza filigrana e senza limite giornaliero. L’unico limite pratico è il tuo dispositivo: le immagini vengono elaborate fino a 3000 px sul lato più lungo, e i file molto grandi o molto dettagliati richiedono semplicemente un po’ più di tempo.'],
    ['I miei file PNG vengono caricati su un server?','No. La conversione avviene interamente nel browser con JavaScript e l’API Canvas. Il tuo PNG non viene mai caricato, archiviato o condiviso, quindi le opere riservate restano sul tuo dispositivo.'],
    ['Qual è la differenza tra PNG e SVG?','PNG è un formato raster che memorizza una griglia di pixel colorati e perde nitidezza quando viene ingrandito. SVG è un formato vettoriale che memorizza forme, curve e riempimenti, quindi resta nitido a qualsiasi dimensione e si può modificare con strumenti vettoriali. PNG si adatta alle fotografie, SVG a loghi, icone, diagrammi e disegni al tratto.']]],
   ['Qualità e impostazioni',[
    ['L’SVG sarà identico al mio PNG?','Non pixel per pixel. La conversione traccia le forme che trova e le approssima con curve, quindi il risultato è una versione pulita e scalabile dell’opera. Le immagini piatte e ad alto contrasto corrispondono molto da vicino, mentre le fotografie diventano una versione stilizzata e posterizzata.'],
    ['Quali immagini PNG si convertono meglio?','Loghi, icone, illustrazioni piatte, cartoni animati, disegni al tratto, firme e pixel art si convertono meglio perché sono fatti di forme chiare e di un numero limitato di colori. Fotografie e sfumature morbide si convertono peggio (prova il [[photo-to-vector-converter]] per risultati stilizzati). Consulta la tabella qui sopra per le impostazioni in base al tipo di immagine.'],
    ['Quanti colori devo scegliere?','Fai corrispondere il numero di colori piatti della tua opera. La maggior parte dei loghi ne richiede 4–8, le icone 3–6 e le illustrazioni 12–20. Le fotografie possono richiederne 32–48 o più. I colori in eccesso aggiungono livelli e peso senza migliorare un design piatto, e l’elenco dei livelli di colore mostra esattamente cosa apporta ciascuno.'],
    ['Come ottengo linee più morbide o angoli più netti?','Usa il cursore Levigatura. I valori bassi mantengono gli angoli netti e i bordi vicini all’originale; quelli alti arrotondano i gradini dei pixel e le irregolarità. Aumenta Dettaglio per i particolari più fini e riduci Rimuovi macchie se le linee sottili scompaiono.'],
    ['Perché la mia foto appare posterizzata o a bande?','I vettori memorizzano regioni di colore piatto, quindi una sfumatura morbida va approssimata con bande. Aumenta il numero di colori e il Dettaglio, aggiungi un po’ di riduzione del rumore o accetta l’aspetto grafico e deciso. Per il vero dettaglio fotografico, tieni il PNG o usa un formato fotografico.']]],
   ['Trasparenza, testo e modifica',[
    ['Come mantengo uno sfondo trasparente?','I pixel trasparenti del PNG vengono rispettati automaticamente e non diventano mai forme, quindi l’SVG non ha un riquadro di sfondo. Se il PNG ha uno sfondo bianco pieno, attiva Rimuovi sfondo per eliminarlo. La modalità Mono scarta anche il tono della carta e conserva solo l’inchiostro, cosa per cui è ottimizzata la pagina [[transparent-image-to-svg-converter]].'],
    ['Riconosce il testo nel mio PNG?','No. Il convertitore non esegue OCR. Le lettere vengono tracciate come contorni vettoriali, quindi si scalano alla perfezione ma non sono modificabili come testo. Se ti serve testo vero, riscrivilo in uno strumento di progettazione o usa un OCR a parte.'],
    ['Perché il mio SVG è più grande del PNG?','Fotografie e sfumature richiedono molte forme, e questo può superare il peso di un PNG ben compresso. Riduci il numero di colori, abbassa il Dettaglio, aumenta Rimuovi macchie o la Levigatura. La scheda della dimensione del file e il grafico dal vivo mostrano l’effetto di ogni modifica.'],
    ['Posso modificare l’SVG in Figma, Illustrator, Inkscape o Canva?','Sì. L’output è un SVG standard con un percorso pieno per colore, quindi qualsiasi editor vettoriale può aprirlo, ricolorarlo e rimodellarlo. I livelli sono sovrapposti in ordine e puoi nasconderne uno nel convertitore prima di scaricare.']]],
   ['Compatibilità',[
    ['Quali dimensioni e formati sono supportati?','Puoi caricare file PNG, JPG, WebP, GIF e BMP (ognuno ha anche una propria pagina, come il [[jpg-to-svg-converter]] e il [[webp-to-svg-converter]]) che il browser riesca ad aprire. Per le prestazioni, le immagini molto grandi vengono ridotte a un massimo di 3000 px sul lato più lungo prima del tracciamento, e l’SVG esportato mantiene le proporzioni originali.'],
    ['Funziona su telefoni e tablet?','Sì. Funziona nelle versioni attuali di Chrome, Edge, Firefox e Safari su desktop e dispositivi mobili. Le immagini molto grandi possono essere più lente sui telefoni meno recenti, quindi prova un’immagine più piccola o un Dettaglio più basso se l’anteprima è lenta.']]]
  ],
  ctaTitle:'Pronto a vettorializzare?',ctaText:'Il tuo PNG è a un gesto da un SVG scalabile.',ctaBtn:'Apri il convertitore da PNG a SVG'
 },
 dir:{
  eyebrow:'Tutti i convertitori',title:'Tutti i convertitori e gli strumenti SVG gratuiti',lead:'{n} strumenti gratuiti che funzionano nel browser. Scegli un convertitore qui sotto o cerca per formato o attività.',
  search:'Cerca, ad es. «logo», «PDF», «minify»',searchLabel:'Cerca convertitori',filter:'Filtra per tipo',all:'Tutti',empty:'Nessun convertitore corrisponde alla ricerca. Prova «SVG», «logo» o «PNG».',
  groups:[['Da immagine a SVG','Traccia immagini raster in forme vettoriali scalabili.'],['Da SVG a immagine','Esporta un SVG in PNG, JPG, WebP, PDF o ICO.'],['Strumenti SVG','Comprimi, modifica, ispeziona e convalida il codice SVG.']],
  here:'Sei qui',nav:'Tutti i convertitori e gli strumenti SVG'
 },
 foot:{
  blurb:'Convertitore da PNG a SVG gratuito e strumenti SVG che funzionano interamente nel browser.',colExplore:'Esplora',colCompany:'Azienda',colLegal:'Note legali',lang:'Lingua',
  home:'Home',about:'Chi siamo',contact:'Contatti',terms:'Termini e condizioni',privacy:'Informativa sulla privacy',sitemap:'Mappa del sito',
  copy:'© {year} pngtosvgconverter.com',made:'Fatto per designer e sviluppatori · Elaborato in locale'
 }
};
