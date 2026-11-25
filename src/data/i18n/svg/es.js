// English -> Spanish for every label shown by the SVG tools (static markup + runtime controls, metrics and messages).
module.exports={
 'Colors being replaced':'Colores que se sustituyen',
 // static tool chrome
 'Add your SVG':'Añade tu SVG','Drop your SVG here, or click to browse':'Suelta tu SVG aquí o haz clic para elegirlo','Or paste SVG code anywhere on the page. Nothing is uploaded.':'También puedes pegar código SVG en cualquier parte de la página. No se sube nada.',
 'No file?':'¿Sin archivo?','Try the sample SVG':'Prueba el SVG de ejemplo','Choose SVG':'Elegir SVG','Upload an SVG':'Subir un SVG','Upload SVG':'Subir SVG',
 'Adjust the options':'Ajusta las opciones','Reset':'Restablecer','Preview and download':'Vista previa y descarga','Live preview':'Vista previa en directo','Copy code':'Copiar código',
 'Download SVG':'Descargar SVG','Download Base64':'Descargar Base64','Download Data URI':'Descargar URI de datos','Download clean SVG':'Descargar SVG limpio','Download compressed SVG':'Descargar SVG comprimido','Download cropped SVG':'Descargar SVG recortado','Download formatted SVG':'Descargar SVG formateado','Download minified SVG':'Descargar SVG minificado','Download optimized SVG':'Descargar SVG optimizado','Download recolored SVG':'Descargar SVG recoloreado','Download resized SVG':'Descargar SVG redimensionado','Download transparent SVG':'Descargar SVG transparente',
 'Download PNG':'Descargar PNG','Download JPG':'Descargar JPG','Download WebP':'Descargar WebP','Download PDF':'Descargar PDF','Download ICO':'Descargar ICO',
 'SVG code':'Código SVG','Edit or paste the SVG you are exporting':'Edita o pega el SVG que vas a exportar','Input and output code':'Código de entrada y de salida','View, edit and copy the code':'Consulta, edita y copia el código','Input SVG code':'Código SVG de entrada','Output':'Salida','tool':'herramienta',
 // errors, toasts
 'Root element is not <svg>':'El elemento raíz no es <svg>','Please choose an .svg file':'Elige un archivo .svg','Enter':'Intro','Copied':'Copiado','Full output copied':'Resultado completo copiado',
 // optimisation family
 'XML declaration':'Declaración XML','Metadata':'Metadatos','Editor data':'Datos del editor','Comments':'Comentarios','Title & desc':'Título y descripción','Color shortening':'Abreviar colores','Number precision':'Precisión numérica','Whitespace':'Espacios en blanco',
 'Output SVG':'SVG de salida','Off (lossless)':'Desactivado (sin pérdida)','Minify':'Minificar','Compression level':'Nivel de compresión','Optimization':'Optimización','Collapse whitespace':'Contraer espacios en blanco','Remove comments':'Quitar comentarios','Strip metadata & editor data':'Eliminar metadatos y datos del editor','Shorten colors':'Abreviar colores','Remove title & desc':'Quitar título y descripción','Hurts accessibility':'Perjudica la accesibilidad',
 'Minified':'Minificado','Compressed':'Comprimido','Optimized':'Optimizado','Original':'Original','Result':'Resultado','Bytes saved':'Bytes ahorrados','Gzipped':'Con gzip','Minified SVG':'SVG minificado','Compressed SVG':'SVG comprimido','Optimized SVG':'SVG optimizado',
 'before gzip':'antes de gzip','what servers send':'lo que envían los servidores','input size':'tamaño de entrada',
 // resizer
 'Output size':'Tamaño de salida','Width (px)':'Ancho (px)','Height (px)':'Alto (px)','Lock aspect ratio':'Bloquear proporción','Scale':'Escala','Quick sizes':'Tamaños rápidos','Resized SVG':'SVG redimensionado','New size':'Tamaño nuevo','File size':'Tamaño del archivo','resizing never loses quality':'cambiar el tamaño nunca pierde calidad','pixels':'píxeles',
 // cropper
 'Crop area (SVG units)':'Área de recorte (unidades SVG)','Width':'Ancho','Height':'Alto','Aspect ratio':'Proporción','Free':'Libre','Crop to content':'Recortar al contenido','Cropped SVG':'SVG recortado','Crop size':'Tamaño del recorte','SVG units':'unidades SVG','Kept area':'Área conservada','of the original':'del original','Offset':'Desplazamiento','from top-left':'desde la esquina superior izquierda','cropped SVG':'SVG recortado',
 // colour changer
 'Quick effects':'Efectos rápidos','Hue shift':'Cambio de tono','Invert colors':'Invertir colores','Grayscale':'Escala de grises','Reset colors':'Restablecer colores','Recolored SVG':'SVG recoloreado','Colors found':'Colores encontrados','Changed':'Modificados','Elements':'Elementos',
 // background remover
 'Detected background shapes':'Formas de fondo detectadas','Clear root background style':'Borrar el estilo de fondo raíz','Preview behind “before”':'Vista previa detrás del «antes»','Backdrop':'Fondo','Transparent SVG':'SVG transparente','Shapes found':'Formas encontradas','Removed':'Eliminadas','Background':'Fondo','Show on':'Mostrar sobre','Checker':'Damero','White':'Blanco','Gray':'Gris','Black':'Negro',
 // viewer
 'Fit to view':'Ajustar a la vista','Actual size':'Tamaño real','Dimensions':'Dimensiones','Paths':'Trazados','Colors':'Colores',
 // base64
 'Output format':'Formato de salida','Encoding':'Codificación','Base64':'Base64','URL-encoded':'Codificado para URL','Wrap as':'Envolver como','Raw':'Sin formato','CSS':'CSS','Minify before encoding':'Minificar antes de codificar','Smaller output':'Salida más pequeña','Base64 data URI':'URI de datos en Base64','URL-encoded data URI':'URI de datos codificada para URL','SVG source':'Código fuente SVG',
 // formatter
 'Formatting':'Formato','Indentation':'Sangría','Tabs':'Tabulaciones','One attribute per line':'Un atributo por línea','For elements with 3+ attributes':'Para elementos con 3 o más atributos','Formatted SVG':'SVG formateado','Lines before':'Líneas antes','Lines after':'Líneas después','Max depth':'Profundidad máxima','Format the code':'Formatear el código',
 // validator
 'XML is not well-formed':'El XML no está bien formado','The parser could not read this document.':'El analizador no pudo leer este documento.','Missing xmlns':'Falta xmlns','Add xmlns="http://www.w3.org/2000/svg" to the <svg> tag so browsers treat the file as SVG.':'Añade xmlns="http://www.w3.org/2000/svg" a la etiqueta <svg> para que los navegadores traten el archivo como SVG.',
 'Wrong SVG namespace':'Espacio de nombres SVG incorrecto','No viewBox':'Sin viewBox','Without a viewBox the SVG cannot scale responsively.':'Sin viewBox, el SVG no puede escalarse de forma adaptable.','No width/height':'Sin ancho ni alto','The SVG will fill its container. Add a size if you need a fixed one.':'El SVG ocupará todo su contenedor. Añade un tamaño si necesitas uno fijo.',
 'No <title>':'Sin <title>','Add a <title> for accessibility.':'Añade un <title> por accesibilidad.','Contains <script>':'Contiene <script>','Scripts are blocked or stripped by most platforms.':'La mayoría de las plataformas bloquean o eliminan los scripts.','Inline event handlers':'Controladores de eventos en línea','External resources':'Recursos externos','Duplicate ids':'IDs duplicados','Broken references':'Referencias rotas',
 'Empty path':'Trazado vacío','A <path> has no d attribute.':'Un <path> no tiene el atributo d.','Invalid path data':'Datos de trazado no válidos','Unexpected characters in a path d attribute.':'Caracteres inesperados en el atributo d de un trazado.','Leading content':'Contenido inicial','There is content before the <svg> tag.':'Hay contenido antes de la etiqueta <svg>.',
 'Invalid':'No válido','Valid, with warnings':'Válido, con advertencias','Valid SVG':'SVG válido','Errors':'Errores','Warnings':'Advertencias','Notes':'Notas',
 // metadata remover
 'What to remove':'Qué eliminar','RDF, creator, license info':'RDF, autor, información de licencia','Inkscape, Sodipodi, Illustrator, Sketch':'Inkscape, Sodipodi, Illustrator, Sketch','XML declaration & DOCTYPE':'Declaración XML y DOCTYPE','Also removes accessibility text':'También elimina el texto de accesibilidad','XML declaration / DOCTYPE':'Declaración XML / DOCTYPE','Editor attributes':'Atributos del editor','Clean SVG':'SVG limpio','Items removed':'Elementos eliminados','Before':'Antes','After':'Después','Saved':'Ahorro','Size':'Tamaño',
 // exporters
 'Fill':'Relleno','None':'Ninguno','Custom':'Personalizado','Custom color':'Color personalizado','copy-ready':'listo para copiar','Quality':'Calidad','Icon sizes':'Tamaños de icono','Page':'Página','Page size':'Tamaño de página','Fit image':'Ajustar imagen','Letter':'Carta','Margin':'Margen','The browser could not render this SVG':'El navegador no pudo representar este SVG','ICO size':'Tamaño del ICO','Largest':'El mayor','PNG-compressed':'Comprimido en PNG','SVG size':'Tamaño del SVG','Time':'Tiempo','PDF size':'Tamaño del PDF','Embedded image':'Imagen incrustada',
 // more labels
 'Where the bytes went':'Dónde se han ido los bytes','Drag the box to move it, drag the corners to resize.':'Arrastra el recuadro para moverlo y las esquinas para cambiar su tamaño.','No colors found':'No se han encontrado colores','Recolored':'Recoloreado','Palette':'Paleta','No fill or stroke colors detected.':'No se han detectado colores de relleno ni de trazo.',
 'No full-canvas background shape was found. The SVG may already be transparent.':'No se ha encontrado ninguna forma de fondo que cubra todo el lienzo. Puede que el SVG ya sea transparente.','After · transparent':'Después · transparente','Details':'Detalles','viewBox':'viewBox','Rendered from the data URI':'Representado desde la URI de datos','Size by encoding':'Tamaño según la codificación',
 'Base64 adds ~33% overhead. URL-encoded data URIs are usually smaller for SVG and compress better with gzip.':'Base64 añade un 33 % aproximadamente. Las URI de datos codificadas para URL suelen ser más pequeñas en SVG y se comprimen mejor con gzip.','Renders the same':'Se representa igual','Checks run instantly as you type. Fix the issues, then Copy or Download the corrected code from the input box.':'Las comprobaciones se ejecutan al escribir. Corrige los problemas y luego copia o descarga el código corregido desde el cuadro de entrada.',
 'No problems found':'No se han encontrado problemas','This SVG is well-formed and follows the common best practices we check.':'Este SVG está bien formado y sigue las buenas prácticas habituales que comprobamos.','Nothing to render':'Nada que representar','and':'y','Hidden data found':'Datos ocultos encontrados','none':'ninguno','Nothing selected':'Nada seleccionado','Select at least one icon size.':'Selecciona al menos un tamaño de icono.','Hover the preview to inspect pixels.':'Pasa el ratón por la vista previa para inspeccionar los píxeles.',
 'unique fills & strokes':'rellenos y trazos únicos','colors remapped':'colores reasignados','in the SVG':'en el SVG','recolored SVG':'SVG recoloreado','full-canvas candidates':'candidatas que cubren todo el lienzo','background elements':'elementos de fondo','transparent SVG':'SVG transparente','declared size':'tamaño declarado','total nodes':'nodos en total','<path> shapes':'formas <path>','fills & strokes':'rellenos y trazos',
 '2 spaces':'2 espacios','4 spaces':'4 espacios','as pasted':'tal como se pegó','nesting levels':'niveles de anidación','must fix':'obligatorio corregir','should fix':'conviene corregir','nice to have':'recomendable','<metadata> block':'bloque <metadata>','<title> and <desc>':'<title> y <desc>','data-* attributes':'atributos data-*','hidden entries':'entradas ocultas','clean file':'archivo limpio','rendered locally':'procesado en local','1 page':'1 página','pixels, JPEG 95%':'píxeles, JPEG al 95 %',
 'after minify':'tras minificar','formatted':'formateado','lossless':'sin pérdida','input size':'tamaño de entrada','full file':'archivo completo','Preview':'Vista previa','Code':'Código',
 'smaller':'más pequeño','smaller than the SVG':'más pequeño que el SVG','enlarged':'ampliado','reduced':'reducido','source':'fuente',
 __p:[
  ['^(\\d+) decimals?$','$1 decimales'],
  ['^([\\d.]+)% smaller$','$1 % más pequeño'],['^([\\d.]+)% larger$','$1 % más grande'],
  ['^from (.+) gzipped$','de $1 con gzip'],['^\\+(-?\\d+)% overhead$','+$1 % de sobrecarga'],['^(-?\\d+)% vs source$','$1 % respecto al original'],
 ['^Colors found \\((\\d+)\\)$','Colores encontrados ($1)'],['^quality (\\d+)%$','calidad $1 %'],
  ['^Original · (.+)$','Original · $1'],['^Optimized · (.+)$','Optimizado · $1'],['^Minified · (.+)$','Minificado · $1'],['^Compressed · (.+)$','Comprimido · $1'],['^Result · (.+)$','Resultado · $1'],
  ['^(PNG|JPG|WEBP|WebP|PDF|ICO|SVG) size$','Tamaño del $1'],['^([\\d.]+)× of (.+)$','$1× de $2'],
  ['^(\\d+) element\\(s\\) use onclick-style attributes\\.?$','$1 elemento(s) usan atributos de tipo onclick.'],
  ['^Found “(.+)”\\.$','Se ha encontrado «$1».'],
  ['^([\\d.]+)% of canvas$','$1 % del lienzo'],
  ['^(\\d+) element\\(s\\) load files from the web\\.?$','$1 elemento(s) cargan archivos de la web.'],
  ['^url\\(#(.+)\\) points to nothing\\.$','url(#$1) no apunta a nada.'],
  ['^(\\d+) ids? (?:is|are) used more than once\\.?$','$1 id(s) se usan más de una vez.'],
  ['^([\\d.]+)× larger as (PNG|JPG|WEBP|PDF|ICO|SVG)$','$1× más grande como $2'],
  ['^(\\d+) embedded sizes$','$1 tamaños incrustados'],
  ['^(.+) vs input$','$1 respecto a la entrada']
 ]
};
