module.exports={
 meta:{title:'Convertidor de PNG a SVG Gratis Online – Sin Registro, Instantáneo',desc:'Convierte PNG a SVG gratis online. Vectoriza imágenes en vectores limpios y escalables. 42 herramientas SVG gratis, vista previa en vivo, sin subir archivos ni registrarte.',alt:'Convertidor de PNG a SVG gratuito online con vista previa en vivo'},
 h1:{kw:'Convertidor de PNG a SVG',tail:'convierte cualquier PNG en un SVG escalable'},
 lead:'Convierte PNG a SVG en línea en segundos. Este convertidor gratuito traza tu imagen en trazados vectoriales limpios dentro del navegador, sin subir archivos, sin registro y sin marcas de agua.',
 skip:'Saltar al contenido principal',
 nav:{converter:'Convertidor',all:'Todos los convertidores',faq:'Preguntas frecuentes',about:'Quiénes somos',contact:'Contacto',menu:'Menú',theme:'Cambiar tema',upload:'Subir imagen',main:'Navegación principal',toc:'En esta página'},
 toc:{how:'Cómo funciona',proc:'Proceso de conversión',chart:'Tabla y funciones',faq:'Preguntas frecuentes',all:'Todos los convertidores'},
 ui:{
  toolH2:'Herramienta para convertir PNG a SVG',step1:'Añade tu imagen',dropAria:'Subir una imagen',drop:'Suelta tu PNG aquí o haz clic para buscarlo',paste:'También puedes pegar con Ctrl+V. No se sube nada.',
  sample:'¿Sin imagen? Prueba un ejemplo:',sLogo:'Logotipo',sScene:'Paisaje',sIcon:'Icono',choose:'Elegir imagen',
  step2:'Ajusta el resultado',reset:'Restablecer',startFrom:'Empezar con',pLogo:'Logotipo',pIllus:'Ilustración',pPhoto:'Foto',pLine:'Dibujo lineal',
  style:'Estilo',mColor:'Color',mGray:'Grises',mMono:'Mono',rmbg:'Quitar fondo',rmbgSub:'Elimina bordes blancos o transparentes',
  colors:'Colores',thresh:'Umbral',ink:'Color de tinta',smooth:'Suavizado',more:'Más opciones',detail:'Detalle',specks:'Quitar motas',denoise:'Reducir ruido',
  step3:'Vista previa y descarga',live:'Vista previa en vivo',loading:'Cargando…',copy:'Copiar código SVG',download:'Descargar SVG',
  chipL:'Original · PNG',chipR:'Vector · SVG',handle:'Comparar original y SVG',hint:'Arrastra el control para comparar · desplaza para ampliar',zoomOut:'Alejar',zoomIn:'Acercar',fit:'Ajustar',
  veil:'Suelta la imagen para convertirla',veilSub:'PNG, JPG, WebP, GIF',fileSize:'Tamaño del SVG',tColors:'Colores',time:'Tiempo',
  moreD:'Más detalles',moreDSub:'Capas de color, historial de tamaño, código SVG',shapes:'Formas',shapesSub:'contornos cerrados',nodes:'Nodos',nodesSub:'puntos de trazado',
  p1:'Decodificar',p2:'Cuantizar',p3:'Trazar',p4:'Simplificar',p5:'Renderizar',
  layers:'Capas de color',layersSub:'Pasa el cursor para aislar · clic para ocultar',trace:'Tamaño en vivo',traceSub:'Tamaño del SVG por ajuste',legSvg:'Tamaño del SVG',legPng:'PNG original',src:'Código fuente SVG'
 },
 js:{
  needImage:'Elige un archivo de imagen',readFail:'No se pudo leer esa imagen',tracedAt:'trazado a {w}×{h}',
  smaller:'<span class="delta good">{pct}% más pequeño</span> que el PNG de {size}',larger:'<span class="delta warn">{pct}% más grande</span> que el PNG de {size}',
  noShapes:'No hay formas visibles: prueba a reducir «Quitar motas».',pts:'pts',moreChars:'… {n} caracteres más',lines:'{n} líneas',previewOnly:'solo vista previa: Copiar o Descargar da el archivo completo',
  runs:'{n} ejecuciones · ahora {size}',run1:'1 ejecución · ahora {size}',fullCopied:'SVG completo copiado',downloaded:'SVG descargado · {size}',copied:'Código SVG copiado',
  dirStatus:'Mostrando {a} de {b} herramientas'
 },
 how:{
  eyebrow:'Por dentro',title:'Cómo funciona el convertidor de PNG a SVG',
  def:'<strong>Un convertidor de PNG a SVG</strong> transforma una cuadrícula de píxeles de color en un conjunto de formas vectoriales rellenas. Este lo hace en cinco etapas automáticas, por completo dentro de tu navegador, y vuelve a dibujar el resultado cada vez que mueves un control.',
  stages:[
   ['Decodificar','Tu navegador lee el PNG con la API Canvas y lo convierte en una cuadrícula de píxeles RGBA. Los archivos grandes se reescalan a un tamaño de trabajo definido por el control Detalle, y un desenfoque opcional elimina el grano.','Canvas · getImageData'],
   ['Cuantizar','Una paleta de 2 a 64 colores obtenida por corte de mediana se refina con k-means. Los colores casi iguales se fusionan, los píxeles de borde suavizados se asignan al color real más cercano y las motas diminutas se absorben en sus vecinas.','Corte de mediana · k-means'],
   ['Trazar','Cada color se convierte en una capa apilada. La máscara de la capa se suaviza y su contorno se extrae con marching squares, lo que da contornos subpíxel que siguen el borde real y no los escalones de los píxeles.','Marching squares'],
   ['Ajustar curvas','Se detectan las esquinas y cada tramo suave se ajusta con curvas de Bézier cúbicas. Los bordes rectos siguen siendo líneas rectas, por lo que el resultado necesita muchos menos nodos que un trazado de píxeles en bruto.','Ajuste de Bézier de Schneider'],
   ['Renderizar','Los trazados se escriben como un trazado SVG relleno por cada color, conservando el viewBox original. La vista previa, el tamaño, la paleta y el código fuente se actualizan al instante al mover un control.','SVG · fill-rule evenodd']],
  cap:'Las cinco etapas de la conversión de PNG a SVG: decodificar, cuantizar, trazar, ajustar curvas y renderizar.',
  privTitle:'Adónde va tu archivo',privCap:'El PNG se procesa en tu dispositivo. No se sube nada, así que el archivo nunca llega a un servidor.',privAlt:'Tu PNG se queda en tu dispositivo',privAltDesc:'El PNG pasa por el convertidor dentro de tu navegador y se convierte en SVG. Ninguna flecha sale de tu dispositivo hacia un servidor.',
  privBrowser:'TU NAVEGADOR',privEngine:'Motor de trazado',privServer:'Servidor',privNot:'no interviene',
  whyTitle:'Por qué el resultado es pequeño y limpio',
  why:[['Capas apiladas','Cada color se coloca sobre el anterior, así que no hay huecos finos y hay muchos menos agujeros que describir.'],['Contornos subpíxel','Los bordes se sitúan entre los píxeles y no sobre ellos, de modo que las diagonales y las curvas quedan suaves.'],['Ajuste de curvas','Un solo segmento de Bézier puede sustituir decenas de escalones de píxeles, por lo que un logotipo típico solo necesita unos cientos de nodos.'],['Limpieza antes del trazado','Los bordes con suavizado y las motas se fusionan primero, así que nunca se convierten en formas adicionales.']]
 },
 proc:{
  eyebrow:'Paso a paso',title:'Proceso de conversión de PNG a SVG',
  def:'Convertir un PNG a SVG lleva cinco pasos y normalmente menos de un minuto. Puedes parar en cualquier paso: el SVG está listo para descargar en cuanto la vista previa te convence.',
  steps:[
   ['Añade tu PNG','Suelta un PNG en el cuadro de carga, pulsa «Elegir imagen» o pega uno desde el portapapeles con Ctrl+V. ¿Todavía no lo tienes? Pulsa un botón de ejemplo para ver cómo funciona.','También acepta JPG, WebP, GIF y BMP.'],
   ['Elige un ajuste preestablecido','Elige Logotipo, Ilustración, Foto o Dibujo lineal. Cada uno fija valores razonables de colores, detalle, suavizado y eliminación de motas, así que la primera vista previa suele estar ya muy cerca.','Logotipos: 4–8 colores. Fotos: 32–48 colores.'],
   ['Afina el trazado','Ajusta el número de colores (2–64), Detalle, Suavizado, Quitar motas y Reducir ruido. Cambia entre los modos Color, Grises y Mono, y activa Quitar fondo para bordes blancos o transparentes.','Cada control actualiza la vista previa al instante.'],
   ['Compara e inspecciona','Arrastra el control para comparar el PNG original con el SVG. Desplaza para ampliar, arrastra para moverte y pasa el cursor por una capa de color para aislarla o haz clic para ocultarla antes de exportar.','Amplía hasta 3200 % para ver cómo el SVG sigue nítido.'],
   ['Descarga o copia el SVG','Pulsa «Descargar SVG» para guardar el archivo o «Copiar código» para pegar el código en tu proyecto, Figma, Illustrator, Inkscape o una página web.','El archivo nunca sale de tu dispositivo.']],
  cta:'Convertir un PNG ahora',tipLabel:'Consejo:',
  mock:{dropLabel:'Suelta el PNG',presets:['Logotipo','Ilustración','Foto','Dibujo lineal'],sliders:['Colores','Detalle','Suavizado'],dlBtn:'Descargar SVG'}
 },
 chart:{
  eyebrow:'Referencia',title:'Tabla de conversión de PNG a SVG / funciones',
  def:'Usa esta tabla para elegir los ajustes adecuados según el tipo de PNG, ver qué tan bien se convierte cada tipo y comparar PNG con SVG. Los valores coinciden con los ajustes preestablecidos del convertidor.',
  barsTitle:'Qué tan bien se convierte cada tipo de PNG',barsCap:'Ajuste vectorial de 1 (malo) a 5 (excelente). Las ilustraciones planas y de alto contraste se convierten mejor; las fotografías, peor.',
  barsAlt:'Qué tan bien se convierte cada tipo de PNG a SVG',
  bars:['Logotipo','Icono','Pixel art','Ilustración plana','Dibujo lineal','Firma','Documento escaneado','Fotografía'],
  quickTitle:'Respuestas rápidas',
  quick:[['Mejores resultados:','logotipos, iconos, pixel art e ilustraciones planas.'],['Buenos resultados:','dibujos lineales, bocetos y firmas en modo Mono.'],['Requiere cuidado:','páginas escaneadas, que necesitan reducir ruido y un filtro de motas más alto.'],['Solo estilizado:','las fotografías y los degradados suaves se convierten en arte posterizado.']],
  note:'Consejo: empieza con el ajuste más parecido y cambia solo un control cada vez.',
  t1:{cap:'Ajustes recomendados del convertidor según el tipo de PNG',cols:['Tipo de PNG','Ajuste o modo','Colores','Detalle','Suavizado','Quitar motas','Ajuste vectorial'],
   rows:[['Logotipo','Ajuste Logotipo'],['Icono','Ajuste Logotipo'],['Ilustración plana o dibujo animado','Ajuste Ilustración'],['Dibujo lineal o boceto','Ajuste Dibujo lineal · Mono'],['Firma','Mono · umbral 160'],['Pixel art','Modo Píxel'],['Documento escaneado','Mono · reducir ruido 1,5'],['Fotografía','Ajuste Foto']],
   words:{ink:'tinta',auto:'tamaño de píxel automático',na:'no se usa',up:'hasta'}},
  t2:{cap:'PNG frente a SVG de un vistazo',cols:['Característica','PNG (ráster)','SVG (vector)'],
   rows:[['Escalado','Los píxeles se desenfocan o se descomponen al ampliar','Se escala a cualquier tamaño sin perder nitidez'],['Tamaño de archivo','Crece con el número de píxeles','Crece con la complejidad de las formas: diminuto en arte plano'],['Edición','Se editan píxeles en un editor ráster','Se editan formas, curvas y colores en cualquier editor vectorial'],['Ideal para','Fotografías y texturas detalladas','Logotipos, iconos, ilustraciones, diagramas y dibujos lineales'],['Transparencia','Canal alfa','Nativa: el espacio vacío es simplemente transparente'],['Estilos con CSS','No es posible','Posible cuando el SVG se incrusta en una página'],['Impresión y rotulación','Necesita un original de alta resolución','Independiente de la resolución para cualquier tamaño de impresión']]},
  featTitle:'Funciones del convertidor',
  feats:[['Vista previa en vivo','Cada control vuelve a trazar la imagen y actualiza la vista dividida, el gráfico de tamaño, la paleta y el número de nodos a la vez.'],['Trazado subpíxel','Los contornos siguen el borde real entre colores y no los límites de los píxeles, así que las curvas quedan suaves.'],['Ajuste de curvas de Bézier','Los tramos suaves se convierten en Béziers cúbicas y los bordes rectos siguen siendo líneas, lo que mantiene bajo el número de nodos.'],['Capas de color apiladas','Las capas se superponen, por lo que no hay huecos finos ni costuras entre colores.'],['De 2 a 64 colores','Elige cuántos colores conservar o cambia a Grises o Mono. Pasa el cursor por una capa o ocúltala antes de exportar.'],['Modo Píxel','Traza el pixel art como rectángulos nítidos al tamaño de píxel detectado, sin suavizado.'],['Fondos transparentes','Los píxeles transparentes nunca se convierten en formas. Quitar fondo elimina un fondo blanco liso con un clic.'],['Zoom y comparación','Arrastra el control para comparar y amplía hasta 3200 % para ver cómo el PNG se pixela mientras el SVG sigue nítido.'],['Privado por diseño','La conversión se ejecuta en tu navegador. Tu PNG nunca se sube, almacena ni comparte.'],['Gratis y sin límites','Sin cuenta, sin marca de agua y sin cuota diaria. Convierte tantas imágenes como quieras.']]
 },
 faq:{
  eyebrow:'Respuestas',title:'Preguntas frecuentes',def:'Preguntas frecuentes sobre el convertidor de PNG a SVG: cómo funciona, qué esperar y cómo obtener el mejor resultado. {n} respuestas en cuatro temas.',
  groups:[
   ['Lo básico',[
    ['¿Qué es un convertidor de PNG a SVG?','Un convertidor de PNG a SVG transforma una imagen PNG basada en píxeles en un SVG vectorial formado por formas y curvas matemáticas. Como un SVG describe formas y no píxeles, puede escalarse a cualquier tamaño sin desenfocarse y, en ilustraciones planas como logotipos e iconos, suele pesar mucho menos que el PNG.'],
    ['¿Es gratis este convertidor de PNG a SVG?','Sí. Es totalmente gratis, sin cuenta, sin marca de agua y sin límite diario. El único límite práctico es tu dispositivo: las imágenes se procesan hasta 3000 px en el lado más largo, y los archivos muy grandes o muy detallados simplemente tardan un poco más.'],
    ['¿Se suben mis archivos PNG a un servidor?','No. La conversión se ejecuta por completo en tu navegador con JavaScript y la API Canvas. Tu PNG nunca se sube, almacena ni comparte, así que las obras confidenciales se quedan en tu dispositivo.'],
    ['¿Cuál es la diferencia entre PNG y SVG?','PNG es un formato ráster que guarda una cuadrícula de píxeles de color, por lo que pierde nitidez al ampliarse. SVG es un formato vectorial que guarda formas, curvas y rellenos, así que se mantiene nítido a cualquier tamaño y puede editarse con herramientas vectoriales. PNG es ideal para fotografías; SVG, para logotipos, iconos, diagramas y dibujos lineales.']]],
   ['Calidad y ajustes',[
    ['¿El SVG se verá exactamente igual que mi PNG?','No píxel por píxel. La conversión traza las formas que encuentra y las aproxima con curvas, por lo que el resultado es una versión limpia y escalable de la obra. Las imágenes planas y de alto contraste coinciden casi por completo, mientras que las fotografías se convierten en una versión estilizada y posterizada.'],
    ['¿Qué imágenes PNG se convierten mejor?','Los logotipos, iconos, ilustraciones planas, dibujos animados, dibujos lineales, firmas y pixel art se convierten mejor porque se componen de formas claras y de un conjunto limitado de colores. Las fotografías y los degradados suaves son lo que peor se convierte (prueba el [[photo-to-vector-converter]] para obtener resultados estilizados). Consulta la tabla de arriba para ver los ajustes según el tipo de imagen.'],
    ['¿Cuántos colores debo elegir?','Iguala el número de colores planos de tu obra. La mayoría de los logotipos necesitan de 4 a 8, los iconos de 3 a 6 y las ilustraciones de 12 a 20. Las fotografías pueden necesitar de 32 a 48 o más. Los colores de más añaden capas y peso sin mejorar un diseño plano, y la lista de capas de color muestra exactamente qué aporta cada una.'],
    ['¿Cómo consigo líneas más suaves o esquinas más nítidas?','Usa el control Suavizado. Los valores bajos mantienen las esquinas nítidas y los bordes cerca del original; los altos redondean los escalones de píxeles y las irregularidades. Sube Detalle para elementos más finos y baja Quitar motas si desaparecen líneas delgadas.'],
    ['¿Por qué mi foto se ve posterizada o con bandas?','Los vectores guardan regiones de color plano, así que un degradado suave debe aproximarse con bandas. Aumenta el número de colores y el Detalle, añade un poco de Reducir ruido o acepta el aspecto gráfico y marcado. Para conservar el detalle fotográfico real, quédate con el PNG o usa un formato de foto.']]],
   ['Transparencia, texto y edición',[
    ['¿Cómo conservo un fondo transparente?','Los píxeles transparentes de tu PNG se respetan automáticamente y nunca se convierten en formas, así que el SVG no tiene un recuadro de fondo. Si tu PNG tiene un fondo blanco liso, activa Quitar fondo para eliminarlo. El modo Mono también descarta el tono del papel y conserva solo la tinta, algo para lo que está ajustada la página [[transparent-image-to-svg-converter]].'],
    ['¿Reconoce el texto de mi PNG?','No. El convertidor no hace OCR. Las letras se trazan como contornos vectoriales, así que se escalan perfectamente pero no se pueden editar como texto. Si necesitas texto editable, vuelve a escribirlo en una herramienta de diseño o usa OCR por separado.'],
    ['¿Por qué mi SVG pesa más que mi PNG?','Las fotografías y los degradados necesitan muchas formas, y eso puede superar el peso de un PNG bien comprimido. Reduce el número de colores, baja el Detalle, sube Quitar motas o aumenta el Suavizado. La tarjeta de tamaño de archivo y el gráfico de tamaño en vivo muestran el efecto de cada cambio.'],
    ['¿Puedo editar el SVG en Figma, Illustrator, Inkscape o Canva?','Sí. El resultado es un SVG estándar con un trazado relleno por color, así que cualquier editor vectorial puede abrirlo, recolorearlo y remodelarlo. Las capas se apilan en orden y puedes ocultar una capa en el convertidor antes de descargar.']]],
   ['Compatibilidad',[
    ['¿Qué tamaños y formatos de imagen se admiten?','Puedes subir archivos PNG, JPG, WebP, GIF y BMP (cada uno tiene también su propia página, como el [[jpg-to-svg-converter]] y el [[webp-to-svg-converter]]) que tu navegador pueda abrir. Por rendimiento, las imágenes muy grandes se reducen a un máximo de 3000 px en el lado más largo antes del trazado, y el SVG exportado conserva la proporción original.'],
    ['¿Funciona en móviles y tabletas?','Sí. Funciona en las versiones actuales de Chrome, Edge, Firefox y Safari, tanto en escritorio como en móvil. Las imágenes muy grandes pueden tardar más en teléfonos antiguos, así que prueba con una imagen más pequeña o con menos Detalle si la vista previa va lenta.']]]
  ],
  ctaTitle:'¿Listo para vectorizar?',ctaText:'Tu PNG está a un solo gesto de convertirse en un SVG escalable.',ctaBtn:'Abrir el convertidor de PNG a SVG'
 },
 dir:{
  eyebrow:'Todos los convertidores',title:'Todos los convertidores y herramientas SVG gratuitos',lead:'{n} herramientas gratuitas que funcionan en tu navegador. Elige un convertidor abajo o busca por formato o tarea.',
  search:'Buscar, p. ej. «logotipo», «PDF», «minificar»',searchLabel:'Buscar convertidores',filter:'Filtrar por tipo',all:'Todos',empty:'Ningún convertidor coincide con esa búsqueda. Prueba con «SVG», «logo» o «PNG».',
  groups:[['Imagen a SVG','Traza imágenes ráster en formas vectoriales escalables.'],['SVG a imagen','Convierte un SVG en PNG, JPG, WebP, PDF o ICO.'],['Herramientas SVG','Comprime, edita, inspecciona y valida código SVG.']],
  here:'Estás aquí',nav:'Todos los convertidores y herramientas SVG'
 },
 foot:{
  blurb:'Convertidor de PNG a SVG gratuito y herramientas SVG que funcionan por completo en tu navegador.',colExplore:'Explorar',colCompany:'Empresa',colLegal:'Legal',lang:'Idioma',
  home:'Inicio',about:'Quiénes somos',contact:'Contacto',terms:'Términos y condiciones',privacy:'Política de privacidad',sitemap:'Mapa del sitio',
  copy:'© {year} pngtosvgconverter.com',made:'Hecho para diseñadores y desarrolladores · Procesado localmente'
 }
};
