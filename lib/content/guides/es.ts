import type { ContentPage } from "../types";

export const guides: Record<string, ContentPage> = {
  "png-vs-svg": {
    slug: "guides/png-vs-svg",
    keyword: "diferencia entre png y svg",
    title: "PNG vs SVG: ¿Cuál es la diferencia?",
    metaDescription:
      "PNG y SVG resuelven problemas distintos. Descubre en qué se diferencian realmente los PNG rasterizados y los SVG vectoriales, con una comparación lado a lado y cuándo usar cada uno.",
    h1: "PNG vs SVG: ¿Cuál es la diferencia?",
    intro:
      "PNG y SVG son dos formatos de imagen muy comunes en la web, pero almacenan una imagen de formas fundamentalmente distintas. Entender la diferencia te ayuda a elegir el formato correcto para un logotipo, un icono, una foto o un archivo de corte.",
    breadcrumbLabel: "PNG vs SVG",
    sections: [
      {
        heading: "¿Qué es un archivo PNG?",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Un archivo PNG (Portable Network Graphics) es una imagen rasterizada: una cuadrícula fija de píxeles de colores, similar a un JPEG. Cada píxel almacena su propio valor de color, y el número total de píxeles queda fijado en el momento en que se crea el archivo. El PNG también admite transparencia alfa real, por lo que es el formato estándar para iconos, capturas de pantalla y logotipos con fondos transparentes.",
              "Como un PNG no es más que una cuadrícula de píxeles, ampliarlo significa estirar esos mismos píxeles sobre un área mayor, que es exactamente lo que provoca el desenfoque o el efecto de \"bloques\" visibles cuando escalas un PNG más allá de sus dimensiones originales.",
            ],
          },
        ],
      },
      {
        heading: "¿Qué es un archivo SVG?",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Un archivo SVG (Scalable Vector Graphics) describe una imagen como un conjunto de formas y trazados matemáticos (líneas, curvas y rellenos) en lugar de píxeles individuales. Un círculo se almacena como \"un círculo con este radio\", no como miles de puntos de color individuales.",
              "Eso es lo que hace que los SVG sean infinitamente escalables: un navegador o una herramienta de diseño redibuja las formas desde cero al tamaño que necesites, así que un logotipo en SVG se ve igual de nítido en el icono de un teléfono que en una valla publicitaria. Los SVG también son texto plano (XML), por lo que son editables en cualquier editor de texto o herramienta de diseño vectorial.",
            ],
          },
        ],
      },
      {
        heading: "PNG vs SVG: diferencias clave",
        blocks: [
          {
            kind: "table",
            headers: ["", "PNG", "SVG"],
            rows: [
              ["Datos subyacentes", "Cuadrícula de píxeles", "Trazados y formas matemáticas"],
              ["Escalado", "Pierde calidad por encima de su tamaño original", "Escala a cualquier tamaño sin perder calidad"],
              ["Tamaño de archivo", "Mayor para gráficos simples", "Normalmente menor para logotipos/iconos"],
              ["Editabilidad", "Solo edición de píxeles (Photoshop, etc.)", "Las formas son editables directamente (Illustrator, Inkscape)"],
              ["Transparencia", "Compatible (canal alfa)", "Compatible (relleno/opacidad)"],
              ["Ideal para", "Fotografías, texturas complejas", "Logotipos, iconos, ilustraciones, archivos de corte"],
            ],
          },
        ],
      },
      {
        heading: "Cuándo usar PNG y cuándo usar SVG",
        blocks: [
          {
            kind: "list",
            intro: "Como regla general:",
            items: [
              "Usa SVG para logotipos, iconos, dibujos lineales y cualquier cosa que necesite redimensionarse o cortarse, incluidos los archivos para [proyectos de Cricut](/use-cases/cricut) y cortadoras láser.",
              "Usa PNG para fotografías e imágenes con degradados o texturas complejas que no se reducen bien a formas planas.",
              "Si ya tienes un logotipo o icono en PNG y necesitas un SVG, no hace falta redibujarlo a mano: puedes vectorizarlo automáticamente. Consulta [cómo funciona el trazado de imágenes](/guides/how-image-tracing-works) para más detalles.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "¿Puedo simplemente renombrar un archivo PNG con extensión .svg?",
        answer:
          "No. Cambiar la extensión del archivo no modifica los datos subyacentes: la cuadrícula de píxeles de un PNG tiene que vectorizarse en trazados para convertirse realmente en un SVG.",
      },
      {
        question: "¿El SVG es siempre mejor que el PNG?",
        answer:
          "No para todos los casos de uso. El SVG es mejor para gráficos escalables como logotipos e iconos, pero el PNG (o el JPEG) sigue siendo la opción correcta para fotografías, donde un trazado vectorial perdería detalle realista.",
      },
      {
        question: "¿Los navegadores admiten SVG igual que PNG?",
        answer:
          "Sí. Todos los navegadores modernos renderizan SVG de forma nativa, y puede usarse en cualquier lugar donde funcione una etiqueta <img> o un background-image en CSS.",
      },
    ],
    related: [
      {
        href: "/guides/raster-vs-vector",
        label: "Gráficos rasterizados vs vectoriales: la guía completa",
        description: "Una mirada más profunda a la distinción entre raster y vector, más allá del PNG y el SVG.",
      },
      {
        href: "/use-cases/cricut",
        label: "PNG a SVG para Cricut",
        description: "Convierte un diseño PNG en un SVG listo para cortar en Cricut Design Space.",
      },
    ],
    relatedHeading: "Guías relacionadas",
  },

  "how-image-tracing-works": {
    slug: "guides/how-image-tracing-works",
    keyword: "cómo funciona el trazado de imágenes",
    title: "¿Cómo funciona el trazado de imágenes?",
    metaDescription:
      "Una explicación sencilla de cómo el trazado de imágenes convierte un PNG rasterizado en trazados vectoriales SVG: detección de color, detección de bordes y ajuste de curvas.",
    h1: "¿Cómo funciona el trazado de imágenes?",
    intro:
      "El trazado de imágenes (también llamado vectorización o autotrazado) es el proceso que usa un convertidor para transformar una imagen basada en píxeles en un conjunto de trazados vectoriales. Esto es lo que realmente ocurre entre bambalinas.",
    breadcrumbLabel: "Cómo funciona el trazado de imágenes",
    sections: [
      {
        heading: "De píxeles a trazados: la idea general",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Un algoritmo de trazado examina una imagen rasterizada región por región de color similar, identifica el límite entre esa región y sus vecinas, y luego describe ese límite como una curva matemática suave en lugar de una escalera de píxeles individuales. Repite esto para cada región de color distinta y obtienes una versión vectorial completa de la imagen original.",
            ],
          },
        ],
      },
      {
        heading: "Paso 1: Detección de color y cuantización",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "La mayoría de las imágenes de origen contienen muchos más colores de los que querrías como formas vectoriales independientes; las fotos por sí solas pueden tener millones de valores de píxel únicos debido al ruido de compresión y a los degradados. La cuantización agrupa colores similares en una paleta más pequeña y fija (tú controlas cuántos colores mediante un ajuste de número de colores), de modo que la imagen se simplifica en regiones limpias y bien diferenciadas antes de que comience el trazado.",
            ],
          },
        ],
      },
      {
        heading: "Paso 2: Detección de bordes",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Una vez que cada píxel tiene asignado un color de la paleta, el algoritmo recorre la imagen para encontrar dónde termina una región de color y empieza otra. Estos límites se trazan primero píxel por píxel, lo que produce un contorno dentado que sigue los bordes escalonados de la cuadrícula rasterizada original.",
            ],
          },
        ],
      },
      {
        heading: "Paso 3: Construcción de trazados y ajuste de curvas",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "El contorno de píxeles dentado se suaviza luego en un pequeño número de líneas rectas y curvas cuadráticas que lo aproximan dentro de un margen de error; esto es el ajuste de \"detalle\" o \"suavizado\" en una herramienta de trazado. Un umbral más bajo se ciñe más a los bordes de píxel originales (más nodos, más detalle); un umbral más alto produce curvas más suaves y en menor número.",
            ],
          },
        ],
      },
      {
        heading: "Trazado en Blanco y Negro frente a Color completo",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "El modo Blanco y Negro reduce toda la imagen a solo dos colores (primer plano y fondo) antes de vectorizar, produciendo un único trazado limpio, ideal para [logotipos](/guides/convert-logo-to-svg), dibujos lineales y archivos de corte para vinilo o corte láser. El modo Color completo conserva varios colores de la paleta y vectoriza cada uno como su propia capa, lo cual es lo que necesitas para fotografías o ilustraciones multicolor.",
            ],
          },
        ],
      },
      {
        heading: "Qué se vectoriza bien (y qué no)",
        blocks: [
          {
            kind: "list",
            intro: "El trazado funciona mejor con:",
            items: [
              "Logotipos, iconos e insignias de colores planos, con pocos colores y bordes definidos",
              "Dibujos lineales y bocetos, con alto contraste entre la tinta y el fondo",
              "Ilustraciones sencillas con regiones de color diferenciadas y separadas",
            ],
          },
          {
            kind: "list",
            intro: "El trazado es más difícil con:",
            items: [
              "Fotografías con degradados suaves o mucha textura fina (cabello, césped, tela)",
              "Imágenes de muy bajo contraste, donde el primer plano y el fondo son difíciles de separar",
              "JPEG muy comprimidos y reguardados como PNG, que introducen ruido de color que la cuantización tiene que suavizar",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "¿El trazado produce una copia idéntica, pixel por pixel, de mi imagen?",
        answer:
          "No: el trazado aproxima tu imagen con un conjunto limitado de colores y curvas suaves, por lo que el detalle muy fino se simplifica. Para logotipos y dibujos lineales esto suele ser imperceptible; para fotos produce un resultado más estilizado, tipo póster.",
      },
      {
        question: "¿Por qué mi SVG vectorizado se ve dentado si pongo el detalle demasiado bajo?",
        answer:
          "Un ajuste de detalle/suavizado bajo mantiene el trazado muy ceñido a los bordes de píxel originales, lo que puede verse dentado en formas curvas. Aumentar el suavizado permite que el algoritmo use curvas más largas y en menor número para un resultado más limpio.",
      },
      {
        question: "¿Es esta la misma tecnología que el Image Trace de Adobe?",
        answer:
          "La idea subyacente (cuantizar colores, detectar bordes, ajustar curvas) es el mismo enfoque general que usan herramientas como Image Trace de Adobe Illustrator y otros programas de autotrazado.",
      },
    ],
    related: [
      {
        href: "/guides/png-vs-svg",
        label: "PNG vs SVG: ¿Cuál es la diferencia?",
        description: "La diferencia de formato que hace necesario el trazado en primer lugar.",
      },
      {
        href: "/guides/convert-logo-to-svg",
        label: "Cómo convertir un logotipo a SVG",
        description: "Aplica todo lo anterior a un logotipo real, paso a paso.",
      },
      {
        href: "/use-cases/embroidery-digitizing",
        label: "PNG a SVG para bordado",
        description: "Por qué un trazado vectorial limpio importa para el software de digitalización de bordados.",
      },
    ],
    relatedHeading: "Guías relacionadas",
  },

  "convert-logo-to-svg": {
    slug: "guides/convert-logo-to-svg",
    keyword: "convertir logo a svg",
    title: "Cómo convertir un logotipo a SVG",
    metaDescription:
      "Convierte un logotipo PNG en un SVG limpio y escalable en cuatro pasos. Obtén resultados nítidos para sitios web, impresión y archivos de corte sin redibujar el logotipo a mano.",
    h1: "Cómo convertir un logotipo a SVG",
    intro:
      "Un logotipo es uno de los mejores candidatos para la conversión vectorial: colores planos, bordes limpios y una necesidad real de escalar desde un favicon hasta un rótulo de tienda sin verse nunca borroso.",
    breadcrumbLabel: "Convertir logo a SVG",
    sections: [
      {
        heading: "Por qué los logotipos necesitan ser SVG",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Un logotipo aparece en todas partes: un favicon de 32px, la cabecera de un sitio web, una tarjeta de presentación, un rotulado de vehículo, un letrero cortado con láser. Un único PNG solo puede verse nítido en un rango de tamaños; una versión en SVG se ve igual de nítida en todos ellos, porque se redibuja matemáticamente en lugar de estirarse a partir de píxeles.",
              "Los logotipos en SVG son también lo que espera la mayoría del software de diseño y fabricación. Si piensas llevar tu logotipo a [Cricut Design Space](/use-cases/cricut) o a un software de corte láser, necesitas datos de trazado, no una imagen rasterizada.",
            ],
          },
        ],
      },
      {
        heading: "Cómo convertir tu logotipo a SVG en 4 pasos",
        blocks: [
          {
            kind: "steps",
            steps: [
              {
                title: "1. Empieza con el PNG de mayor resolución que tengas",
                body: "El trazado solo puede trabajar con el detalle que exista en el archivo de origen, así que un PNG de mayor resolución le da al algoritmo bordes más limpios con los que trabajar.",
              },
              {
                title: "2. Súbelo y elige el modo Blanco y Negro",
                body: "La mayoría de los logotipos tienen uno o dos colores, así que el modo Blanco y Negro produce el trazado único más limpio. Usa el modo Color completo solo si tu logotipo realmente tiene varios colores distintos que quieras conservar.",
              },
              {
                title: "3. Ajusta el detalle hasta que los bordes se vean nítidos, no dentados",
                body: "Aumenta ligeramente el suavizado si ves bordes ásperos y escalonados en las curvas; redúcelo si se están perdiendo detalles finos (como texto pequeño).",
              },
              {
                title: "4. Descarga y revísalo a tamaño real",
                body: "Abre el SVG y haz zoom: un buen trazado se mantiene nítido a cualquier tamaño. Si los bordes se ven mal, ajusta los parámetros y vuelve a descargarlo.",
              },
            ],
          },
        ],
      },
      {
        heading: "Consejos para obtener los mejores resultados con logotipos",
        blocks: [
          {
            kind: "list",
            items: [
              "Parte de un PNG con fondo transparente si piensas colocar el logotipo sobre otros colores o imágenes.",
              "Si tu logotipo tiene texto fino, mantén el detalle/suavizado en el extremo bajo para que las letras pequeñas no se mezclen entre sí.",
              "Después de la conversión, puedes limpiar nodos individuales o simplificar aún más los trazados en un editor vectorial: consulta [cómo editar un SVG después de la conversión](/guides/edit-svg-after-conversion).",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "¿Se conservarán exactamente los colores de mi logotipo?",
        answer:
          "En el modo Color completo, la paleta vectorizada se aproxima mucho a tus colores originales. Para que coincida exactamente con el color de marca, puedes ajustar el color de relleno de trazados individuales después, en un editor vectorial.",
      },
      {
        question: "¿Qué pasa si mi logotipo tiene un degradado?",
        answer:
          "El trazado aproxima los degradados como una serie de bandas de color plano en lugar de un degradado real. Para un logotipo con un degradado suave, considera recrear el degradado manualmente en un editor vectorial después de vectorizar las formas planas.",
      },
      {
        question: "¿Puedo convertir un logotipo que tiene texto?",
        answer:
          "Sí, aunque el texto se convierte en formas delineadas en lugar de caracteres de fuente editables. Si tienes el archivo de fuente original, suele ser más limpio recrear el texto por separado y vectorizar solo el símbolo gráfico.",
      },
    ],
    related: [
      {
        href: "/guides/how-image-tracing-works",
        label: "¿Cómo funciona el trazado de imágenes?",
        description: "La mecánica detrás de la conversión que acabas de hacer.",
      },
      {
        href: "/guides/edit-svg-after-conversion",
        label: "Cómo editar un archivo SVG después de convertirlo",
        description: "Limpia y ajusta tu logotipo vectorizado en Illustrator, Inkscape o Figma.",
      },
      {
        href: "/use-cases/laser-cutting",
        label: "PNG a SVG para corte láser",
        description: "Convierte tu nuevo logotipo en SVG en un letrero o panel cortado con láser.",
      },
    ],
    relatedHeading: "Guías relacionadas",
  },

  "edit-svg-after-conversion": {
    slug: "guides/edit-svg-after-conversion",
    keyword: "editar archivo svg",
    title: "Cómo editar un archivo SVG después de convertirlo",
    metaDescription:
      "Aprende a abrir y editar un archivo SVG en Illustrator, Inkscape (gratis) o Figma, además de tareas comunes de limpieza después de vectorizar un PNG a trazados.",
    h1: "Cómo editar un archivo SVG después de convertirlo",
    intro:
      "Un SVG vectorizado es un excelente punto de partida, pero a menudo querrás limpiar un trazado, combinar un par de formas o ajustar un color. Como el resultado son datos vectoriales reales, todo eso es sencillo en cualquier editor vectorial.",
    breadcrumbLabel: "Editar archivo SVG",
    sections: [
      {
        heading: "Editar tu SVG en Adobe Illustrator",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Abre el archivo SVG directamente con Archivo > Abrir; Illustrator lo importa como trazados nativos y editables.",
              "Usa la herramienta Selección directa (A) para seleccionar y ajustar puntos de anclaje y curvas individuales.",
              "Usa Objeto > Trazado > Simplificar para reducir el número de puntos de anclaje si una forma se ve demasiado compleja.",
              "Vuelve a guardar o exportar como SVG cuando termines, para mantener el archivo ligero.",
            ],
          },
        ],
      },
      {
        heading: "Editar tu SVG en Inkscape (gratis)",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Inkscape es un editor vectorial gratuito y de código abierto que abre archivos SVG de forma nativa; una buena alternativa sin costo a Illustrator.",
              "Usa la herramienta de nodos (N) para editar puntos individuales de un trazado vectorizado.",
              "Trazado > Simplificar (Ctrl+L) reduce el número de nodos en un trazado con demasiado detalle.",
              "Usa Editar > Buscar/Reemplazar o el editor XML para inspeccionar y limpiar la estructura del trazado si es necesario.",
            ],
          },
        ],
      },
      {
        heading: "Editar tu SVG en Figma",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Arrastra el archivo SVG directamente a un lienzo de Figma, o usa Archivo > Importar.",
              "Figma importa cada región de color vectorizada como una capa vectorial independiente, que puedes seleccionar, recolorear o eliminar por separado.",
              "Usa la herramienta Pluma para ajustar puntos de anclaje, o haz clic derecho en una capa y elige Aplanar para combinar formas superpuestas.",
            ],
          },
        ],
      },
      {
        heading: "Tareas comunes de limpieza después del trazado",
        blocks: [
          {
            kind: "list",
            items: [
              "Simplificar trazados: reduce los puntos de anclaje de una forma que se vectorizó con más detalle del que necesitas.",
              "Combinar formas: une regiones adyacentes del mismo color en un único trazado para un archivo más limpio.",
              "Recolorear: sustituye un color aproximado del trazado por el color exacto de tu marca.",
              "Eliminar formas sueltas: borra pequeños artefactos de fondo que a veces aparecen por el ruido en el PNG de origen.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "¿Necesito software de pago para editar un SVG?",
        answer:
          "No. Inkscape es gratuito, de código abierto y totalmente capaz de editar archivos SVG vectorizados; es una opción habitual precisamente para este tipo de limpieza.",
      },
      {
        question: "¿Por qué mi SVG vectorizado tiene más trazados de los que esperaba?",
        answer:
          "Cada región de color distinta se convierte en su propio trazado, así que una imagen de origen más recargada o un número de colores más alto producen más trazados. Puedes combinarlos o simplificarlos en cualquier editor vectorial.",
      },
      {
        question: "¿Puedo editar un SVG en un editor de texto plano?",
        answer:
          "Sí: el SVG es texto XML por dentro, así que puedes abrirlo en cualquier editor de texto y modificar a mano los datos de trazado o los atributos, aunque un editor visual es mucho más práctico para la mayoría de los cambios.",
      },
    ],
    related: [
      {
        href: "/guides/convert-logo-to-svg",
        label: "Cómo convertir un logotipo a SVG",
        description: "Consigue un trazado limpio de tu logotipo antes de empezar a editarlo.",
      },
      {
        href: "/guides/how-image-tracing-works",
        label: "¿Cómo funciona el trazado de imágenes?",
        description: "Entiende por qué los trazados se ven así antes de editarlos.",
      },
      {
        href: "/use-cases/silhouette-vinyl-cutting",
        label: "PNG a SVG para Silhouette",
        description: "Limpia un diseño vectorizado antes de enviarlo a Silhouette Studio.",
      },
    ],
    relatedHeading: "Guías relacionadas",
  },

  "raster-vs-vector": {
    slug: "guides/raster-vs-vector",
    keyword: "gráficos raster vs vectoriales",
    title: "Gráficos rasterizados vs vectoriales: la guía completa",
    metaDescription:
      "Los gráficos rasterizados y vectoriales almacenan imágenes de formas completamente distintas. Compara ambos, descubre cuándo destaca cada uno y aprende a convertir entre ellos.",
    h1: "Gráficos rasterizados vs vectoriales: la guía completa",
    intro:
      "Toda imagen digital es rasterizada o vectorial. Conocer la diferencia, y saber cuál necesita realmente cada tarea, te ahorra tanto logotipos borrosos como fotos imposibles de editar.",
    breadcrumbLabel: "Raster vs Vector",
    sections: [
      {
        heading: "¿Qué es una imagen rasterizada?",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Los gráficos rasterizados (PNG, JPEG, GIF, BMP) almacenan una imagen como una cuadrícula fija de píxeles, cada uno con su propio color. Las cámaras digitales, los escáneres y las capturas de pantalla producen todos imágenes rasterizadas, porque así es como los sensores de luz y las pantallas capturan y muestran las imágenes: píxel a píxel.",
              "El costo de esto es la dependencia de la resolución: una imagen rasterizada solo se ve correcta hasta sus dimensiones nativas en píxeles. Más allá de eso, el software tiene que inventar nuevos valores de píxel para rellenar los huecos, por lo que las imágenes rasterizadas ampliadas se ven suaves o con bloques.",
            ],
          },
        ],
      },
      {
        heading: "¿Qué es una imagen vectorial?",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Los gráficos vectoriales (SVG, EPS, AI, PDF como vector) almacenan una imagen como descripciones matemáticas de formas: puntos, líneas y curvas, cada una con un relleno o trazo definido. No hay una resolución fija, porque las formas se recalculan de nuevo cada vez que la imagen se muestra o se imprime.",
              "Esto hace que los vectores sean ideales para cualquier cosa que necesite escalar: logotipos, iconos, tipografía, ilustraciones técnicas y trazados de corte para máquinas como cortadoras láser o equipos Cricut y Silhouette.",
            ],
          },
        ],
      },
      {
        heading: "Raster vs vector: comparación lado a lado",
        blocks: [
          {
            kind: "table",
            headers: ["", "Raster", "Vector"],
            rows: [
              ["Compuesto de", "Píxeles", "Puntos, líneas, curvas"],
              ["Resolución", "Fija a las dimensiones de origen", "Independiente de la resolución"],
              ["Contenido ideal", "Fotos, texturas complejas", "Logotipos, iconos, dibujo lineal, trazados de corte"],
              ["Formatos típicos", "PNG, JPEG, GIF, BMP", "SVG, EPS, AI"],
              ["Edición", "A nivel de píxel (Photoshop, GIMP)", "A nivel de forma (Illustrator, Inkscape, Figma)"],
            ],
          },
        ],
      },
      {
        heading: "Cómo convertir entre raster y vector",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Pasar de vector a raster (\"rasterizar\") es sencillo: se renderizan las formas en una cuadrícula de píxeles del tamaño que necesites, que es justo lo que ocurre automáticamente al exportar un PNG desde una herramienta de diseño.",
              "Ir en la otra dirección, de raster a vector, requiere trazado: analizar la cuadrícula de píxeles, agrupar colores similares y ajustar curvas matemáticas a los límites entre ellos. Consulta [cómo funciona el trazado de imágenes](/guides/how-image-tracing-works) para un desglose completo de ese proceso, o [convierte un PNG a SVG](/) directamente.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "¿Una imagen vectorial puede verse mal alguna vez?",
        answer:
          "Sí, si intentas forzar un detalle fotográfico fino en un número reducido de formas vectoriales, el resultado pierde textura realista y se parece más a un arte plano, tipo póster.",
      },
      {
        question: "¿El SVG es un formato raster o vectorial?",
        answer:
          "El SVG es un formato vectorial: almacena trazados y formas, no píxeles individuales, por lo que se mantiene nítido a cualquier tamaño.",
      },
      {
        question: "¿Qué formato debería usar para el favicon de un sitio web?",
        answer:
          "El SVG suele ser la mejor opción para un favicon porque se mantiene nítido en toda la gama de tamaños que solicitan los navegadores, aunque un PNG de respaldo es habitual para dar compatibilidad con navegadores más antiguos.",
      },
    ],
    related: [
      {
        href: "/guides/png-vs-svg",
        label: "PNG vs SVG: ¿Cuál es la diferencia?",
        description: "Una versión más específica de este mismo dilema raster vs vector, centrada en el formato.",
      },
      {
        href: "/guides/how-image-tracing-works",
        label: "¿Cómo funciona el trazado de imágenes?",
        description: "El proceso técnico detrás de convertir raster en vector.",
      },
      {
        href: "/use-cases/embroidery-digitizing",
        label: "PNG a SVG para bordado",
        description: "Una razón del mundo real por la que los trazados vectoriales importan más que los píxeles.",
      },
    ],
    relatedHeading: "Guías relacionadas",
  },
};
