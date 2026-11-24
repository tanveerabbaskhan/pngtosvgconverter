// Pagine essenziali in italiano. Il testo legale deve essere rivisto dal titolare del sito.
module.exports=function(S){
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const UPDATED=new Date(S.UPDATED+'T00:00:00Z').toLocaleDateString('it-IT',{year:'numeric',month:'long',day:'numeric',timeZone:'UTC'});
const mail=`<a href="mailto:${S.EMAIL}">${S.EMAIL}</a>`;
const N='pngtosvgconverter.com';

const about={slug:'about-us',type:'AboutPage',about:true,
 title:'Chi siamo | '+N,
 desc:'Scopri chi gestisce pngtosvgconverter.com, perché esiste, come funziona il convertitore gratuito da PNG a SVG nel browser e quali principi lo guidano.',
 h1:'Informazioni su '+N,
 lead:'Un set di strumenti gratuito e privato per trasformare le immagini in SVG puliti e scalabili, progettato per funzionare interamente nel tuo browser.',
 crumb:'Chi siamo',
 body:`<h2>Chi gestisce questo sito</h2>
<p>${N} è un progetto indipendente di strumenti web gestito dal team di ${N}. Creiamo piccole utility grafiche mirate per designer, sviluppatori, maker e chiunque abbia bisogno della versione vettoriale di un’immagine senza installare software.</p>
<h2>Perché esiste</h2>
<p>Trasformare un’immagine a pixel in un vettore di solito significa pagare un programma desktop o caricare lavori privati sul server di uno sconosciuto. Volevamo un’alternativa migliore: un convertitore gratuito, veloce, che mostra il risultato mentre lo regoli e non riceve mai i tuoi file.</p>
<h2>Cosa puoi fare qui</h2>
<ul>
<li><strong>Da immagine a SVG:</strong> converti PNG, JPG, WebP, GIF, BMP, AVIF e altri in vettori scalabili, con preset per loghi, icone, disegni al tratto, firme, scansioni, clipart e pixel art.</li>
<li><strong>Da SVG a immagine:</strong> esporta un SVG come PNG, JPG, WebP, PDF o ICO multi-dimensione.</li>
<li><strong>Strumenti SVG:</strong> comprimi, ottimizza, ridimensiona, ritaglia, ricolora, convalida, formatta, minimizza e ispeziona il codice SVG.</li>
</ul>
<p>Ogni strumento ha la propria pagina, elencata nella <a href="../sitemap/">mappa del sito</a> e nella <a href="../#all">home page</a>.</p>
<h2>Come funziona la tecnologia</h2>
<p>Il convertitore da PNG a SVG usa tecniche ben documentate, non una scatola nera. I colori vengono ridotti con una tavolozza a taglio mediano rifinita con k-means. Ogni colore diventa un livello impilato il cui contorno viene trovato con i «marching squares» con precisione sub-pixel e poi adattato con curve di Bézier cubiche. Tutto avviene nel tuo browser.</p>
<h2>I nostri principi</h2>
<ul>
<li><strong>Prima la privacy.</strong> La conversione avviene sul tuo dispositivo. Le tue immagini e i tuoi file SVG non vengono mai caricati. Consulta la nostra <a href="../privacy/">informativa sulla privacy</a>.</li>
<li><strong>Risultati onesti.</strong> I vettori funzionano meglio con loghi, icone, illustrazioni e disegni al tratto. Diciamo chiaramente che le fotografie diventano arte stilizzata e posterizzata e mostriamo la dimensione del file perché tu possa giudicare il risultato.</li>
<li><strong>Gratuito e semplice.</strong> Nessun account, nessuna filigrana, nessun limite giornaliero.</li>
<li><strong>Accessibile e veloce.</strong> Le pagine sono leggere, funzionano su smartphone e da tastiera e usano formati di file standard e aperti.</li>
</ul>
<h2>Qualità e aggiornamenti</h2>
<p>Testiamo il convertitore con una libreria di esempi integrati (loghi, icone, illustrazioni, pagine scansionate, firme, pixel art) e miglioriamo di continuo il motore di tracciamento e le indicazioni di ogni pagina. Se qualcosa non va con il tuo file, faccelo sapere.</p>
<h2>Contattaci</h2>
<p>Domande, segnalazioni di bug o idee per un nuovo strumento? Usa la <a href="../contact-us/">pagina contatti</a> o scrivi a ${mail}.</p>`};

const contact={slug:'contact-us',type:'ContactPage',
 title:'Contatti | '+N,
 desc:'Contatta pngtosvgconverter.com per domande, bug, idee o richieste sulla privacy. Invia un messaggio con il modulo o scrivici direttamente.',
 h1:'Contatti',
 lead:'Domande, bug o idee per un nuovo strumento? Inviaci un messaggio e ti risponderemo.',
 crumb:'Contatti',
 body:`<p>Il modo più rapido per aiutarci a risolvere un problema è indicare la pagina usata, il browser e il dispositivo e cosa ti aspettavi. Se un’immagine specifica causa il problema, descrivila o indica tipo e dimensione. Non inviare file riservati.</p>
<form class="cform" data-contact data-endpoint="${esc(S.CONTACT_ENDPOINT)}" data-email="${S.EMAIL}" data-sending="Invio del messaggio…" data-success="Grazie. Il tuo messaggio è stato inviato." data-success-mailto="La tua app di posta dovrebbe aprirsi con il messaggio pronto. Se non si apre nulla, scrivici direttamente a ${S.EMAIL}." data-error="Spiacenti, non è stato possibile inviare il messaggio. Scrivici direttamente a ${S.EMAIL}." data-invalid="Inserisci il tuo nome, un indirizzo e-mail valido e un messaggio." novalidate>
<div class="field"><label for="cf-name">Nome</label><input id="cf-name" name="name" type="text" autocomplete="name" required maxlength="120"></div>
<div class="field"><label for="cf-email">E-mail</label><input id="cf-email" name="email" type="email" autocomplete="email" required maxlength="160"></div>
<div class="field"><label for="cf-msg">Messaggio</label><textarea id="cf-msg" name="message" rows="7" required maxlength="4000"></textarea></div>
<div class="hp" aria-hidden="true"><label>Lascia vuoto questo campo<input name="website" type="text" tabindex="-1" autocomplete="off"></label></div>
<button class="btn primary lg" type="submit" data-submit>Invia messaggio</button>
<p class="form-status" role="status" aria-live="polite" data-status></p>
</form>
<h2>Preferisci l’e-mail?</h2>
<p>Scrivici direttamente a ${mail}. Per richieste sulla privacy, indica «Richiesta privacy» nell’oggetto.</p>
<p>Di solito rispondiamo entro pochi giorni lavorativi.</p>`};

const terms={slug:'terms',type:'WebPage',
 title:'Termini e condizioni | '+N,
 desc:'I termini d’uso di pngtosvgconverter.com: uso consentito, i tuoi file e contenuti, esclusioni di garanzia, limiti di responsabilità e modifiche ai termini.',
 h1:'Termini e condizioni',
 lead:`Ultimo aggiornamento: ${UPDATED}`,
 crumb:'Termini e condizioni',
 body:`<p>I presenti Termini e condizioni («Termini») disciplinano l’uso di ${N} e dei suoi strumenti (il «Servizio»). Usando il Servizio accetti questi Termini. Se non sei d’accordo, non usare il Servizio.</p>
<h2>1. Il Servizio</h2>
<p>Il Servizio offre strumenti online gratuiti per convertire e modificare immagini e file SVG. Gli strumenti vengono eseguiti nel tuo browser. Possiamo aggiungere, modificare o rimuovere funzioni in qualsiasi momento.</p>
<h2>2. I tuoi file e contenuti</h2>
<p>Conservi tutti i diritti sui file che elabori. I file aperti negli strumenti vengono elaborati localmente sul tuo dispositivo e non vengono caricati sui nostri server. Sei responsabile di avere il diritto di usare e convertire i file scelti, compresi eventuali diritti d’autore e di marchio.</p>
<h2>3. Uso consentito</h2>
<p>Ti impegni a non usare il Servizio per violare i diritti altrui, infrangere la legge, tentare di interrompere o sovraccaricare il Servizio, sondarne o aggirarne la sicurezza o estrarne dati a un ritmo dannoso per gli altri utenti.</p>
<h2>4. Risultati e accuratezza</h2>
<p>Convertire un’immagine raster in vettore è un’approssimazione. I risultati dipendono dall’immagine di partenza e dalle impostazioni scelte e possono differire dall’originale. Controlla il risultato prima di farvi affidamento, soprattutto per stampa, produzione o usi legali.</p>
<h2>5. Proprietà intellettuale</h2>
<p>Il Servizio, compresi design, codice, testi e illustrazioni, appartiene a ${N} o ai suoi licenzianti ed è protetto dalla legge applicabile. Non puoi copiare né rivendere il Servizio stesso senza autorizzazione. Nulla in questi Termini trasferisce a noi la proprietà dei tuoi file né a te quella del Servizio.</p>
<h2>6. Esclusione di garanzie</h2>
<p>Il Servizio è fornito «così com’è» e «come disponibile», senza garanzie di alcun tipo, espresse o implicite, comprese idoneità a uno scopo particolare, accuratezza, disponibilità o non violazione. Non garantiamo che il Servizio sia ininterrotto o privo di errori.</p>
<h2>7. Limitazione di responsabilità</h2>
<p>Nella misura massima consentita dalla legge, ${N} e i suoi gestori non rispondono di danni indiretti, incidentali, speciali, consequenziali o punitivi, né di perdite di dati, profitti o attività derivanti dall’uso o dall’impossibilità di usare il Servizio.</p>
<h2>8. Link e servizi di terze parti</h2>
<p>Il Servizio può contenere link a siti di terze parti. Non li controlliamo e non siamo responsabili dei loro contenuti o delle loro pratiche.</p>
<h2>9. Modifiche ai Termini</h2>
<p>Possiamo aggiornare questi Termini di tanto in tanto. La data «Ultimo aggiornamento» indica la versione più recente. Continuare a usare il Servizio dopo una modifica significa accettare i Termini aggiornati.</p>
<h2>10. Legge applicabile</h2>
<p>Questi Termini sono regolati dalle leggi della giurisdizione in cui ha sede il gestore del Servizio, senza riguardo alle norme sui conflitti di legge. I diritti inderogabili dei consumatori previsti dalla legge del tuo paese non sono pregiudicati.</p>
<h2>11. Contatti</h2>
<p>Domande su questi Termini? Scrivi a ${mail} o usa la <a href="../contact-us/">pagina contatti</a>. Consulta anche la nostra <a href="../privacy/">informativa sulla privacy</a>.</p>`};

const privacy={slug:'privacy',type:'WebPage',
 title:'Informativa sulla privacy | '+N,
 desc:'Come pngtosvgconverter.com tratta i dati: i file sono elaborati nel browser e mai caricati. Cosa viene memorizzato, cookie, terze parti e i tuoi diritti.',
 h1:'Informativa sulla privacy',
 lead:`Ultimo aggiornamento: ${UPDATED}`,
 crumb:'Informativa sulla privacy',
 body:`<p>La tua privacy è importante per noi. Questa informativa spiega quali informazioni ${N} («noi») tratta quando usi il sito web e i suoi strumenti.</p>
<h2>1. I tuoi file restano sul tuo dispositivo</h2>
<p>Gli strumenti per immagini e SVG funzionano nel tuo browser con JavaScript. I file che trascini, incolli o apri vengono elaborati localmente e <strong>non vengono caricati</strong> sui nostri server né presso terzi. Non possiamo vederli.</p>
<h2>2. Informazioni che raccogliamo</h2>
<ul>
<li><strong>Preferenze memorizzate sul tuo dispositivo.</strong> Se passi dalla modalità chiara a quella scura, la scelta viene salvata nella memoria locale del browser perché il sito la ricordi. Non lascia mai il tuo dispositivo.</li>
<li><strong>Messaggi che ci invii.</strong> Se usi il modulo di contatto o ci scrivi, riceviamo nome, indirizzo e-mail e messaggio forniti e li usiamo solo per risponderti e migliorare il Servizio.</li>
<li><strong>Log tecnici.</strong> Come la maggior parte dei siti, il nostro provider di hosting può conservare i log standard del server (ad esempio indirizzo IP, tipo di browser, pagina richiesta e ora) per sicurezza e affidabilità.</li>
</ul>
<h2>3. Cookie e analisi</h2>
<p>Non impostiamo cookie pubblicitari né di tracciamento. Al momento non usiamo analisi di terze parti né script pubblicitari. Se in futuro aggiungeremo analisi rispettose della privacy o cookie, aggiorneremo questa pagina e, se necessario, chiederemo il tuo consenso.</p>
<h2>4. Terze parti</h2>
<p>Il sito è erogato da un provider di hosting e di distribuzione dei contenuti che tratta dati tecnici delle richieste per nostro conto. Se il modulo di contatto usa un servizio esterno di gestione dei moduli, tale servizio tratta il messaggio inviato per recapitarcelo. Non vendiamo i tuoi dati personali.</p>
<h2>5. Come usiamo le informazioni</h2>
<p>Usiamo le informazioni limitate descritte sopra per gestire e proteggere il sito, rispondere ai messaggi e migliorare gli strumenti. Conserviamo i messaggi solo per il tempo necessario a gestire la tua richiesta e a una ragionevole tenuta dei registri.</p>
<h2>6. I tuoi diritti</h2>
<p>A seconda di dove vivi (ad esempio ai sensi del GDPR o di leggi analoghe), potresti avere il diritto di accedere ai tuoi dati personali, rettificarli, cancellarli o limitarne l’uso, di opporti al trattamento e di presentare reclamo alla tua autorità per la protezione dei dati. Poiché conserviamo pochissimi dati personali, la maggior parte delle richieste è semplice da soddisfare.</p>
<h2>7. Minori</h2>
<p>Il Servizio non è rivolto ai minori di 13 anni e non raccogliamo consapevolmente le loro informazioni personali.</p>
<h2>8. Sicurezza</h2>
<p>Il sito è servito tramite HTTPS. Poiché i tuoi file non vengono mai caricati, non sono esposti a rischi di trasmissione o conservazione da parte nostra.</p>
<h2>9. Modifiche a questa informativa</h2>
<p>Possiamo aggiornare questa informativa. La data «Ultimo aggiornamento» indica la versione più recente.</p>
<h2>10. Contatti per le richieste sulla privacy</h2>
<p>Per qualsiasi domanda o richiesta sulla privacy, scrivi a ${mail} indicando «Richiesta privacy» nell’oggetto, oppure usa la <a href="../contact-us/">pagina contatti</a>. Consulta anche i nostri <a href="../terms/">termini e condizioni</a>.</p>`};

const notFound={
 title:'Pagina non trovata | '+N,
 desc:'La pagina che cerchi non è stata trovata. Torna al convertitore da PNG a SVG o scopri gli altri convertitori gratuiti e gli strumenti SVG.',
 h1:'Pagina non trovata',
 lead:'La pagina che hai provato ad aprire non esiste o è stata spostata. Ecco dove puoi andare.',
 body:`<ul class="nf-links">
<li><a href="/it/">Convertitore da PNG a SVG (home)</a></li>
<li><a href="/it/jpg-to-svg-converter/">Convertitore da JPG a SVG</a></li>
<li><a href="/it/svg-to-png-converter/">Convertitore da SVG a PNG</a></li>
<li><a href="/it/svg-optimizer/">Ottimizzatore SVG</a></li>
<li><a href="/it/sitemap/">Mappa del sito: tutti i convertitori e gli strumenti</a></li>
<li><a href="/it/contact-us/">Contatti</a></li>
</ul>`};

const sitemap={title:'Mappa del sito | '+N,desc:'Tutte le pagine di pngtosvgconverter.com: convertitori gratuiti da immagine a SVG, da SVG a immagine, strumenti SVG e la home in 18 lingue.',h1:'Mappa del sito',lead:'Tutte le pagine di pngtosvgconverter.com in un unico posto.',crumb:'Mappa del sito',
 main:'Pagine principali',home:'Home: convertitore da PNG a SVG',about:'Chi siamo',contact:'Contatti',terms:'Termini e condizioni',privacy:'Informativa sulla privacy',sitemap:'Mappa del sito',
 gRaster:'Convertitori da immagine a SVG',gExport:'Convertitori da SVG a immagine',gUtil:'Strumenti SVG',gLang:'Home in altre lingue'};
return {about,contact,terms,privacy,notFound,sitemap};
};
