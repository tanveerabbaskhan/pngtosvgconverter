// UI wording for the long-form tool-page sections (headings, labels, chart/mock text). Exact-match: only whole text nodes
// and attribute values equal to the English string are replaced, so translated body copy is never touched.
const base=(L,kw)=>[
 ['On this page',L.onPage],['How it works',L.how],['Process',L.process],['Settings and chart',L.settings],['FAQ',L.faq],['All converters',L.all],
 ['Under the hood',L.under],['How '+kw+' works',L.hHow(kw)],['The four stages of the '+kw+', from your input to the finished file.',L.stages(kw)],
 ['Step by step',L.step],[kw+' process',L.hProc(kw)],['Tip:',L.tip],['Use the '+kw,L.use(kw)],
 ['Reference',L.ref],[kw+' settings / conversion chart',L.hChart(kw)],['At a glance',L.glance],['Converts best:',L.best],['Needs the most care:',L.care],['Largest:',L.largest],['Smallest:',L.smallest],
 ['Answers',L.answers],[kw+' FAQ',L.hFaq(kw)],['Questions people ask about the '+kw+', answered for this specific use case.',L.faqDef(kw)],[kw+' questions',L.faqAria(kw)],
 ['Ready to try it?',L.ready],['Your result is one drop away.',L.oneDrop],['Open the '+kw,L.open(kw)],
 ['Upload box',L.upload],['Controls',L.controls],['Palette extracted from the artwork',L.palette],['pixel grid',L.grid],['Relative amounts',L.rel],
 ['Original',L.orig],['Before',L.before],['After',L.after],['SVG','SVG'],
 ...['SVG','PNG','JPG','WebP','PDF','ICO','Base64'].map(f=>['Download '+f,L.dl(f)]),
 ...Object.entries(L.ctl||{})
];
const LOC={
 es:{onPage:'En esta página',how:'Cómo funciona',process:'Proceso',settings:'Ajustes y gráfico',faq:'Preguntas frecuentes',all:'Todos los convertidores',under:'Bajo el capó',
  hHow:k=>`Cómo funciona: ${k}`,stages:k=>`Las cuatro etapas de «${k}», desde el archivo de entrada hasta el resultado.`,step:'Paso a paso',hProc:k=>`Proceso: ${k}`,tip:'Consejo:',use:k=>`Usar «${k}»`,
  ref:'Referencia',hChart:k=>`Ajustes y gráfico de conversión: ${k}`,glance:'De un vistazo',best:'Mejor resultado:',care:'Requiere más cuidado:',largest:'Mayor:',smallest:'Menor:',
  answers:'Respuestas',hFaq:k=>`Preguntas frecuentes: ${k}`,faqDef:k=>`Preguntas habituales sobre «${k}», con respuestas para este caso de uso concreto.`,faqAria:k=>`Preguntas sobre «${k}»`,ready:'¿Listo para probar?',oneDrop:'Tu resultado está a un paso: suelta un archivo.',open:k=>`Abrir «${k}»`,
  upload:'Área de carga',controls:'Controles',palette:'Paleta extraída de la imagen',grid:'cuadrícula de píxeles',rel:'Cantidades relativas',orig:'Original',before:'Antes',after:'Después',dl:f=>`Descargar ${f}`,
  drop:f=>`Soltar ${f}`,dropSvg:'Soltar SVG',attr:[[' compared with ',' comparado con '],['pixels','píxeles'],[' file',' archivo'],['Score ','Puntuación ']],
  ctl:{'Colors being replaced':'Colores que se sustituyen','Colors':'Colores','Detail':'Detalle','Smoothness':'Suavizado','Precision':'Precisión','Whitespace':'Espacios','Metadata':'Metadatos','Comments':'Comentarios','Width':'Ancho','Height':'Alto','Scale':'Escala','X / Y':'X / Y','Aspect':'Proporción','Hue shift':'Tono','Invert':'Invertir','Grayscale':'Grises','Candidates':'Candidatas','Root style':'Estilo raíz','Backdrop':'Fondo','Zoom':'Zoom','Background':'Fondo','Pan':'Desplazar','Encoding':'Codificación','Wrapper':'Envoltorio','Minify':'Minificar','Indent':'Sangría','Wrap':'Ajuste','Depth':'Profundidad','Editor data':'Datos del editor','Errors':'Errores','Warnings':'Advertencias','Notes':'Notas','Quality':'Calidad','Page':'Página','Margin':'Margen','Sizes':'Tamaños','16 px':'16 px','256 px':'256 px','Size':'Tamaño'}},
 fr:{onPage:'Sur cette page',how:'Fonctionnement',process:'Processus',settings:'Réglages et graphique',faq:'FAQ',all:'Tous les convertisseurs',under:'Sous le capot',
  hHow:k=>`Comment fonctionne : ${k}`,stages:k=>`Les quatre étapes de « ${k} », du fichier d’entrée au résultat final.`,step:'Pas à pas',hProc:k=>`Processus : ${k}`,tip:'Astuce :',use:k=>`Utiliser « ${k} »`,
  ref:'Référence',hChart:k=>`Réglages et graphique de conversion : ${k}`,glance:'En un coup d’œil',best:'Meilleurs résultats :',care:'Demande le plus de soin :',largest:'Le plus grand :',smallest:'Le plus petit :',
  answers:'Réponses',hFaq:k=>`FAQ : ${k}`,faqDef:k=>`Questions fréquentes sur « ${k} », avec des réponses propres à ce cas d’usage.`,faqAria:k=>`Questions sur « ${k} »`,ready:'Prêt à essayer ?',oneDrop:'Votre résultat est à un glisser-déposer.',open:k=>`Ouvrir « ${k} »`,
  upload:'Zone de dépôt',controls:'Réglages',palette:'Palette extraite de l’image',grid:'grille de pixels',rel:'Quantités relatives',orig:'Original',before:'Avant',after:'Après',dl:f=>`Télécharger ${f}`,
  drop:f=>`Déposer ${f}`,dropSvg:'Déposer un SVG',attr:[[' compared with ',' comparé à '],[' file',' fichier'],['Score ','Score ']],
  ctl:{'Colors being replaced':'Couleurs remplacées','Colors':'Couleurs','Detail':'Détail','Smoothness':'Lissage','Precision':'Précision','Whitespace':'Espaces','Metadata':'Métadonnées','Comments':'Commentaires','Width':'Largeur','Height':'Hauteur','Scale':'Échelle','X / Y':'X / Y','Aspect':'Proportions','Hue shift':'Teinte','Invert':'Inverser','Grayscale':'Gris','Candidates':'Candidates','Root style':'Style racine','Backdrop':'Fond','Zoom':'Zoom','Background':'Arrière-plan','Pan':'Déplacer','Encoding':'Encodage','Wrapper':'Format','Minify':'Minifier','Indent':'Indentation','Wrap':'Retour','Depth':'Profondeur','Editor data':'Données éditeur','Errors':'Erreurs','Warnings':'Avertissements','Notes':'Remarques','Quality':'Qualité','Page':'Page','Margin':'Marge','Sizes':'Tailles','16 px':'16 px','256 px':'256 px','Size':'Taille'}},
 de:{onPage:'Auf dieser Seite',how:'Funktionsweise',process:'Ablauf',settings:'Einstellungen und Diagramm',faq:'FAQ',all:'Alle Konverter',under:'Unter der Haube',
  hHow:k=>`So funktioniert: ${k}`,stages:k=>`Die vier Stufen von „${k}“, von der Eingabe bis zur fertigen Datei.`,step:'Schritt für Schritt',hProc:k=>`Ablauf: ${k}`,tip:'Tipp:',use:k=>`„${k}“ verwenden`,
  ref:'Referenz',hChart:k=>`Einstellungen und Konvertierungsdiagramm: ${k}`,glance:'Auf einen Blick',best:'Beste Ergebnisse:',care:'Braucht die meiste Sorgfalt:',largest:'Am größten:',smallest:'Am kleinsten:',
  answers:'Antworten',hFaq:k=>`FAQ: ${k}`,faqDef:k=>`Häufige Fragen zu „${k}“, beantwortet für genau diesen Anwendungsfall.`,faqAria:k=>`Fragen zu „${k}“`,ready:'Bereit zum Ausprobieren?',oneDrop:'Dein Ergebnis ist nur eine Ablage entfernt.',open:k=>`„${k}“ öffnen`,
  upload:'Ablagefläche',controls:'Einstellungen',palette:'Aus dem Bild extrahierte Palette',grid:'Pixelraster',rel:'Relative Mengen',orig:'Original',before:'Vorher',after:'Nachher',dl:f=>`${f} herunterladen`,
  drop:f=>`${f} ablegen`,dropSvg:'SVG ablegen',attr:[[' compared with ',' verglichen mit '],[' file',' Datei'],['Score ','Wert ']],
  ctl:{'Colors being replaced':'Ersetzte Farben','Colors':'Farben','Detail':'Detail','Smoothness':'Glättung','Precision':'Genauigkeit','Whitespace':'Leerraum','Metadata':'Metadaten','Comments':'Kommentare','Width':'Breite','Height':'Höhe','Scale':'Skalierung','X / Y':'X / Y','Aspect':'Verhältnis','Hue shift':'Farbton','Invert':'Invertieren','Grayscale':'Graustufen','Candidates':'Kandidaten','Root style':'Stammstil','Backdrop':'Hintergrund','Zoom':'Zoom','Background':'Hintergrund','Pan':'Verschieben','Encoding':'Kodierung','Wrapper':'Format','Minify':'Minifizieren','Indent':'Einrückung','Wrap':'Umbruch','Depth':'Tiefe','Editor data':'Editor-Daten','Errors':'Fehler','Warnings':'Warnungen','Notes':'Hinweise','Quality':'Qualität','Page':'Seite','Margin':'Rand','Sizes':'Größen','16 px':'16 px','256 px':'256 px','Size':'Größe'}},
 it:{onPage:'In questa pagina',how:'Come funziona',process:'Procedura',settings:'Impostazioni e grafico',faq:'FAQ',all:'Tutti i convertitori',under:'Dietro le quinte',
  hHow:k=>`Come funziona: ${k}`,stages:k=>`Le quattro fasi di «${k}», dal file di origine al risultato finale.`,step:'Passo dopo passo',hProc:k=>`Procedura: ${k}`,tip:'Suggerimento:',use:k=>`Usa «${k}»`,
  ref:'Riferimento',hChart:k=>`Impostazioni e grafico di conversione: ${k}`,glance:'In breve',best:'Risultati migliori:',care:'Richiede più attenzione:',largest:'Il più grande:',smallest:'Il più piccolo:',
  answers:'Risposte',hFaq:k=>`FAQ: ${k}`,faqDef:k=>`Domande frequenti su «${k}», con risposte specifiche per questo caso d’uso.`,faqAria:k=>`Domande su «${k}»`,ready:'Pronto a provare?',oneDrop:'Il risultato è a un trascinamento di distanza.',open:k=>`Apri «${k}»`,
  upload:'Area di rilascio',controls:'Impostazioni',palette:'Palette estratta dall’immagine',grid:'Griglia di pixel',rel:'Quantità relative',orig:'Originale',before:'Prima',after:'Dopo',dl:f=>`Scarica ${f}`,
  drop:f=>`Rilascia ${f}`,dropSvg:'Rilascia un SVG',attr:[[' compared with ',' confrontato con '],[' file',' file'],['Score ','Punteggio ']],
  ctl:{'Colors being replaced':'Colori sostituiti','Colors':'Colori','Detail':'Dettaglio','Smoothness':'Levigatura','Precision':'Precisione','Whitespace':'Spazi','Metadata':'Metadati','Comments':'Commenti','Width':'Larghezza','Height':'Altezza','Scale':'Scala','X / Y':'X / Y','Aspect':'Proporzioni','Hue shift':'Tonalità','Invert':'Inverti','Grayscale':'Scala di grigi','Candidates':'Candidati','Root style':'Stile radice','Backdrop':'Sfondo','Zoom':'Zoom','Background':'Sfondo','Pan':'Sposta','Encoding':'Codifica','Wrapper':'Formato','Minify':'Minifica','Indent':'Rientro','Wrap':'A capo','Depth':'Profondità','Editor data':'Dati editor','Errors':'Errori','Warnings':'Avvisi','Notes':'Note','Quality':'Qualità','Page':'Pagina','Margin':'Margine','Sizes':'Dimensioni','16 px':'16 px','256 px':'256 px','Size':'Dimensione'}},
 pl:{onPage:'Na tej stronie',how:'Jak to działa',process:'Proces',settings:'Ustawienia i wykres',faq:'FAQ',all:'Wszystkie konwertery',under:'Jak to działa',
  hHow:k=>`Jak działa ${k}`,stages:k=>`Cztery etapy narzędzia ${k}, od pliku źródłowego do gotowego wyniku.`,step:'Krok po kroku',hProc:k=>`Proces: ${k}`,tip:'Wskazówka:',use:k=>'Otwórz konwerter',
  ref:'Ustawienia',hChart:k=>`Ustawienia i wykres: ${k}`,glance:'W skrócie',best:'Najlepszy wynik:',care:'Wymaga najwięcej uwagi:',largest:'Największy:',smallest:'Najmniejszy:',
  answers:'Odpowiedzi',hFaq:k=>`${k}: FAQ`,faqDef:k=>'Odpowiedzi na pytania dotyczące tego narzędzia.',faqAria:k=>'Pytania o konwersję',ready:'Chcesz spróbować?',oneDrop:'Przeciągnij plik, aby rozpocząć.',open:k=>'Otwórz konwerter',
  upload:'Pole przesyłania',controls:'Ustawienia',palette:'Paleta wyodrębniona z obrazu',grid:'siatka pikseli',rel:'Wartości względne',orig:'Oryginał',before:'Przed',after:'Po',dl:f=>`Pobierz ${f}`,
  drop:f=>`Upuść ${f}`,dropSvg:'Upuść SVG',attr:[[' compared with ',' w porównaniu z '],['pixels','piksele']],
  ctl:{'Colors being replaced':'Zastępowane kolory','Colors':'Kolory','Detail':'Szczegóły','Smoothness':'Gładkość'}}
};
function dict(loc,kw){const L=LOC[loc];if(!L)return null;const m=new Map(base(L,kw).map(([a,b])=>[a,b]));return {m,L}}
function apply(html,loc,kw){
  const d=dict(loc,kw);if(!d)return html;
  const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  const m=new Map([...d.m].map(([a,b])=>[esc(a),esc(b)]));
  const tx=x=>{const k=x.trim();return k&&m.has(k)?x.replace(k,m.get(k)):x};
  return html.replace(/>([^<>]+)</g,(a,x)=>'>'+tx(x)+'<').replace(/(aria-label|title)="([^"]*)"/g,(a,n,x)=>{let v=tx(x);if(x.includes(' compared with ')){const [p,q]=x.split(' compared with ');v=tx(p)+' compared with '+tx(q)}for(const [f,t] of d.L.attr)v=v.split(f).join(t);return n+'="'+v+'"'});
}
for(const l of ['pl','tr','sv','id','ms','pt','ru','bg','ja','ko','ar','hi']){try{LOC[l]=require('./sub-ui-'+l)}catch(e){}}
module.exports={map:(loc,kw)=>{const d=dict(loc,kw);return d?Object.fromEntries(d.m):{}},apply,has:l=>!!LOC[l],drop:(loc,f)=>LOC[loc].drop(f),dropSvg:loc=>LOC[loc].dropSvg};
