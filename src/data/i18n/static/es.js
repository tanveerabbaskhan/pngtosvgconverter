// Páginas esenciales en español. El texto legal debe ser revisado por el titular del sitio.
module.exports=function(S){
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const UPDATED=new Date(S.UPDATED+'T00:00:00Z').toLocaleDateString('es-ES',{year:'numeric',month:'long',day:'numeric',timeZone:'UTC'});
const mail=`<a href="mailto:${S.EMAIL}">${S.EMAIL}</a>`;
const N='pngtosvgconverter.com';

const about={slug:'about-us',type:'AboutPage',about:true,
 title:'Quiénes somos | '+N,
 desc:'Conoce quién gestiona pngtosvgconverter.com, por qué existe, cómo funciona el convertidor gratuito de PNG a SVG en tu navegador y qué principios lo guían.',
 h1:'Acerca de '+N,
 lead:'Un conjunto de herramientas gratuito y privado para convertir imágenes en SVG limpio y escalable, creado para funcionar por completo en tu navegador.',
 crumb:'Quiénes somos',
 body:`<h2>Quién gestiona este sitio</h2>
<p>${N} es un proyecto independiente de herramientas web mantenido por el equipo de ${N}. Creamos utilidades gráficas pequeñas y concretas para diseñadores, desarrolladores, creadores y cualquier persona que necesite la versión vectorial de una imagen sin instalar software.</p>
<h2>Por qué existe</h2>
<p>Convertir una imagen de píxeles en un vector suele implicar pagar por un programa de escritorio o subir un trabajo privado al servidor de un desconocido. Queríamos una alternativa mejor: un convertidor gratuito, rápido, que muestre el resultado mientras lo ajustas y que nunca reciba tus archivos.</p>
<h2>Qué puedes hacer aquí</h2>
<ul>
<li><strong>De imagen a SVG:</strong> convierte PNG, JPG, WebP, GIF, BMP, AVIF y más en vectores escalables, con ajustes preestablecidos para logotipos, iconos, dibujos lineales, firmas, escaneos, clipart y arte de píxeles.</li>
<li><strong>De SVG a imagen:</strong> exporta un SVG como PNG, JPG, WebP, PDF o un ICO con varios tamaños.</li>
<li><strong>Herramientas SVG:</strong> comprime, optimiza, redimensiona, recorta, recolorea, valida, formatea, minifica e inspecciona código SVG.</li>
</ul>
<p>Cada herramienta tiene su propia página, que encontrarás en el <a href="../sitemap/">mapa del sitio</a> y en la <a href="../#all">página de inicio</a>.</p>
<h2>Cómo funciona la tecnología</h2>
<p>El convertidor de PNG a SVG emplea técnicas bien documentadas, no una caja negra. Los colores se reducen con una paleta de corte mediano refinada con k-means. Cada color se convierte en una capa apilada cuyo contorno se localiza con «marching squares» con precisión inferior al píxel, y los contornos se ajustan con curvas de Bézier cúbicas. Todo ocurre en tu navegador.</p>
<h2>Nuestros principios</h2>
<ul>
<li><strong>La privacidad, primero.</strong> La conversión se hace en tu dispositivo. Tus imágenes y archivos SVG nunca se suben. Consulta nuestra <a href="../privacy/">Política de privacidad</a>.</li>
<li><strong>Resultados honestos.</strong> Los vectores son ideales para logotipos, iconos, ilustraciones y dibujos lineales. Decimos con claridad que las fotografías se convierten en arte estilizado y posterizado, y mostramos el tamaño del archivo para que puedas juzgar el resultado.</li>
<li><strong>Gratis y sencillo.</strong> Sin cuenta, sin marca de agua y sin límites diarios.</li>
<li><strong>Accesible y rápido.</strong> Las páginas son ligeras, funcionan en móviles y con teclado, y usan formatos de archivo estándar y abiertos.</li>
</ul>
<h2>Calidad y actualizaciones</h2>
<p>Probamos el convertidor con una biblioteca de muestras integradas que incluye logotipos, iconos, ilustraciones, páginas escaneadas, firmas y arte de píxeles, y seguimos mejorando el motor de trazado y las explicaciones de cada página. Si algo no se ve bien con tu archivo, cuéntanoslo.</p>
<h2>Ponte en contacto</h2>
<p>¿Preguntas, errores o ideas para una herramienta nueva? Usa la <a href="../contact-us/">página de contacto</a> o escribe a ${mail}.</p>`};

const contact={slug:'contact-us',type:'ContactPage',
 title:'Contacto | '+N,
 desc:'Contacta con pngtosvgconverter.com para consultas, errores, ideas de funciones o solicitudes de privacidad. Envía un mensaje con el formulario o escríbenos.',
 h1:'Contacto',
 lead:'¿Preguntas, errores o ideas para una herramienta nueva? Envíanos un mensaje y te responderemos.',
 crumb:'Contacto',
 body:`<p>La forma más rápida de ayudarnos a resolver un problema es indicar la página que usaste, tu navegador y dispositivo, y qué esperabas que ocurriera. Si una imagen concreta provoca el fallo, descríbela o indica su tipo y tamaño. No envíes archivos confidenciales.</p>
<form class="cform" data-contact data-endpoint="${esc(S.CONTACT_ENDPOINT)}" data-email="${S.EMAIL}" data-sending="Enviando tu mensaje…" data-success="Gracias. Tu mensaje se ha enviado." data-success-mailto="Se abrirá tu aplicación de correo con el mensaje preparado. Si no se abre nada, escríbenos directamente a ${S.EMAIL}." data-error="No se ha podido enviar el mensaje. Escríbenos directamente a ${S.EMAIL}." data-invalid="Introduce tu nombre, un correo electrónico válido y un mensaje." novalidate>
<div class="field"><label for="cf-name">Nombre</label><input id="cf-name" name="name" type="text" autocomplete="name" required maxlength="120"></div>
<div class="field"><label for="cf-email">Correo electrónico</label><input id="cf-email" name="email" type="email" autocomplete="email" required maxlength="160"></div>
<div class="field"><label for="cf-msg">Mensaje</label><textarea id="cf-msg" name="message" rows="7" required maxlength="4000"></textarea></div>
<div class="hp" aria-hidden="true"><label>Deja este campo vacío<input name="website" type="text" tabindex="-1" autocomplete="off"></label></div>
<button class="btn primary lg" type="submit" data-submit>Enviar mensaje</button>
<p class="form-status" role="status" aria-live="polite" data-status></p>
</form>
<h2>¿Prefieres el correo?</h2>
<p>Escríbenos directamente a ${mail}. Para solicitudes de privacidad, escribe «Solicitud de privacidad» en el asunto.</p>
<p>Intentamos responder en unos pocos días laborables.</p>`};

const terms={slug:'terms',type:'WebPage',
 title:'Términos y condiciones | '+N,
 desc:'Las condiciones de uso de pngtosvgconverter.com: uso aceptable, tus archivos y contenido, exenciones de responsabilidad, límites y cambios en los términos.',
 h1:'Términos y condiciones',
 lead:`Última actualización: ${UPDATED}`,
 crumb:'Términos y condiciones',
 body:`<p>Estos Términos y condiciones («Términos») regulan el uso de ${N} y sus herramientas (el «Servicio»). Al usar el Servicio aceptas estos Términos. Si no estás de acuerdo, no lo utilices.</p>
<h2>1. El Servicio</h2>
<p>El Servicio ofrece herramientas en línea gratuitas para convertir y editar imágenes y archivos SVG. Las herramientas se ejecutan en tu navegador web. Podemos añadir, modificar o retirar funciones en cualquier momento.</p>
<h2>2. Tus archivos y contenido</h2>
<p>Conservas todos los derechos sobre los archivos que procesas. Los archivos que abres en las herramientas se procesan localmente en tu dispositivo y no se suben a nuestros servidores. Eres responsable de asegurarte de que tienes derecho a usar y convertir los archivos que elijas, incluidos los derechos de autor y de marca que puedan afectarles.</p>
<h2>3. Uso aceptable</h2>
<p>Te comprometes a no usar el Servicio para vulnerar derechos de terceros, infringir la ley, intentar interrumpir o sobrecargar el Servicio, sondear o eludir su seguridad, ni extraer datos a un ritmo que perjudique a otros usuarios.</p>
<h2>4. Resultados y exactitud</h2>
<p>Convertir una imagen ráster en vector es una aproximación. Los resultados dependen de tu imagen de origen y de los ajustes que elijas, y pueden diferir del original. Debes revisar el resultado antes de depender de él, en especial para impresión, producción o uso legal.</p>
<h2>5. Propiedad intelectual</h2>
<p>El Servicio, incluidos su diseño, código, textos e ilustraciones, es propiedad de ${N} o de sus licenciantes y está protegido por la legislación aplicable. No puedes copiar ni revender el propio Servicio sin permiso. Nada de estos Términos transfiere la propiedad de tus archivos a nosotros ni la del Servicio a ti.</p>
<h2>6. Exención de garantías</h2>
<p>El Servicio se ofrece «tal cual» y «según disponibilidad», sin garantías de ningún tipo, expresas o implícitas, incluidas la idoneidad para un fin concreto, la exactitud, la disponibilidad o la no infracción. No garantizamos que el Servicio funcione sin interrupciones ni errores.</p>
<h2>7. Limitación de responsabilidad</h2>
<p>En la máxima medida permitida por la ley, ${N} y sus responsables no responden de daños indirectos, accidentales, especiales, consecuentes o punitivos, ni de pérdidas de datos, beneficios o negocio, derivados del uso o de la imposibilidad de usar el Servicio.</p>
<h2>8. Enlaces y servicios de terceros</h2>
<p>El Servicio puede enlazar a sitios web de terceros. No los controlamos y no somos responsables de su contenido ni de sus prácticas.</p>
<h2>9. Cambios en estos Términos</h2>
<p>Podemos actualizar estos Términos periódicamente. La fecha de «Última actualización» indica la versión más reciente. Si sigues usando el Servicio tras un cambio, aceptas los Términos actualizados.</p>
<h2>10. Legislación aplicable</h2>
<p>Estos Términos se rigen por las leyes aplicables en la jurisdicción donde esté establecido el operador del Servicio, sin tener en cuenta sus normas sobre conflicto de leyes. Si la ley de tu país te otorga derechos obligatorios como consumidor, esos derechos no se ven afectados.</p>
<h2>11. Contacto</h2>
<p>¿Dudas sobre estos Términos? Escribe a ${mail} o usa la <a href="../contact-us/">página de contacto</a>. Consulta también nuestra <a href="../privacy/">Política de privacidad</a>.</p>`};

const privacy={slug:'privacy',type:'WebPage',
 title:'Política de privacidad | '+N,
 desc:'Cómo trata los datos pngtosvgconverter.com: los archivos se procesan en tu navegador y nunca se suben. Qué se almacena, cookies, terceros y tus derechos.',
 h1:'Política de privacidad',
 lead:`Última actualización: ${UPDATED}`,
 crumb:'Política de privacidad',
 body:`<p>Tu privacidad es importante para nosotros. Esta política explica qué información trata ${N} («nosotros») cuando usas el sitio web y sus herramientas.</p>
<h2>1. Tus archivos se quedan en tu dispositivo</h2>
<p>Las herramientas de imagen y SVG se ejecutan en tu navegador con JavaScript. Los archivos que sueltas, pegas o abres se procesan localmente y <strong>no se suben</strong> a nuestros servidores ni a ningún tercero. No podemos verlos.</p>
<h2>2. Información que recopilamos</h2>
<ul>
<li><strong>Preferencias guardadas en tu dispositivo.</strong> Si cambias entre el modo claro y el oscuro, tu elección se guarda en el almacenamiento local del navegador para que el sitio la recuerde. Nunca sale de tu dispositivo.</li>
<li><strong>Mensajes que nos envías.</strong> Si usas el formulario de contacto o nos escribes, recibimos el nombre, el correo electrónico y el mensaje que nos facilitas, y los usamos solo para responderte y mejorar el Servicio.</li>
<li><strong>Registros técnicos.</strong> Como la mayoría de los sitios web, nuestro proveedor de alojamiento puede conservar registros estándar del servidor (por ejemplo, dirección IP, tipo de navegador, página solicitada y hora) por motivos de seguridad y fiabilidad.</li>
</ul>
<h2>3. Cookies y analítica</h2>
<p>No instalamos cookies publicitarias ni de seguimiento. En el momento de redactar esta política no usamos analítica de terceros ni scripts publicitarios. Si en el futuro añadimos analítica respetuosa con la privacidad o cualquier cookie, actualizaremos esta página y, cuando sea necesario, pediremos tu consentimiento.</p>
<h2>4. Terceros</h2>
<p>El sitio web lo entrega un proveedor de alojamiento y de red de distribución de contenido, que trata datos técnicos de las solicitudes en nuestro nombre. Si el formulario de contacto se configura con un servicio externo de gestión de formularios, ese servicio trata el mensaje que envías para poder entregárnoslo. No vendemos tu información personal.</p>
<h2>5. Cómo usamos la información</h2>
<p>Usamos la información limitada descrita arriba para operar y proteger el sitio web, responder a los mensajes y mejorar las herramientas. Conservamos los mensajes solo el tiempo necesario para atender tu solicitud y llevar un registro razonable.</p>
<h2>6. Tus derechos</h2>
<p>Según el lugar donde vivas (por ejemplo, conforme al RGPD u otras leyes similares), puedes tener derecho a acceder a tus datos personales, rectificarlos, suprimirlos o limitar su uso, a oponerte a su tratamiento y a presentar una reclamación ante tu autoridad local de protección de datos. Como conservamos muy pocos datos personales, la mayoría de las solicitudes son sencillas de atender.</p>
<h2>7. Menores</h2>
<p>El Servicio no está dirigido a menores de 13 años y no recopilamos a sabiendas su información personal.</p>
<h2>8. Seguridad</h2>
<p>El sitio web se sirve mediante HTTPS. Como tus archivos nunca se suben, no están expuestos a riesgos de transmisión ni de almacenamiento por nuestra parte.</p>
<h2>9. Cambios en esta política</h2>
<p>Podemos actualizar esta política. La fecha de «Última actualización» indica la versión más reciente.</p>
<h2>10. Contacto para solicitudes de privacidad</h2>
<p>Para cualquier duda o solicitud sobre privacidad, escribe a ${mail} con «Solicitud de privacidad» en el asunto o usa la <a href="../contact-us/">página de contacto</a>. Consulta también nuestros <a href="../terms/">Términos y condiciones</a>.</p>`};

const notFound={
 title:'Página no encontrada | '+N,
 desc:'No se ha encontrado la página que buscas. Vuelve al convertidor de PNG a SVG o explora nuestros otros convertidores gratuitos y herramientas SVG.',
 h1:'Página no encontrada',
 lead:'La página que intentaste abrir no existe o se ha movido. Estos son algunos sitios a los que puedes ir.',
 body:`<ul class="nf-links">
<li><a href="/es/">Convertidor de PNG a SVG (inicio)</a></li>
<li><a href="/es/jpg-to-svg-converter/">Convertidor de JPG a SVG</a></li>
<li><a href="/es/svg-to-png-converter/">Convertidor de SVG a PNG</a></li>
<li><a href="/es/svg-optimizer/">Optimizador de SVG</a></li>
<li><a href="/es/sitemap/">Mapa del sitio: todos los convertidores y herramientas</a></li>
<li><a href="/es/contact-us/">Contacto</a></li>
</ul>`};

const sitemap={title:'Mapa del sitio | '+N,desc:'Todas las páginas de pngtosvgconverter.com: convertidores gratuitos de imagen a SVG, de SVG a imagen, herramientas SVG y la página de inicio en 18 idiomas.',h1:'Mapa del sitio',lead:'Todas las páginas de pngtosvgconverter.com en un solo lugar.',crumb:'Mapa del sitio',
 main:'Páginas principales',home:'Inicio: Convertidor de PNG a SVG',about:'Quiénes somos',contact:'Contacto',terms:'Términos y condiciones',privacy:'Política de privacidad',sitemap:'Mapa del sitio',
 gRaster:'Convertidores de imagen a SVG',gExport:'Convertidores de SVG a imagen',gUtil:'Herramientas SVG',gLang:'Página de inicio en otros idiomas'};
return {about,contact,terms,privacy,notFound,sitemap};
};
