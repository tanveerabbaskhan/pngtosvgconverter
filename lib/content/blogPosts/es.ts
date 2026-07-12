import type { ContentPage } from "../types";

export const blogPosts: Record<string, ContentPage> = {
  "vinyl-decal-from-photo-tutorial": {
    slug: "blog/vinyl-decal-from-photo-tutorial",
    keyword: "cómo hacer una calcomanía de vinilo a partir de una foto",
    title: "Cómo hacer una calcomanía de vinilo a partir de una foto",
    metaDescription:
      "Un tutorial paso a paso para convertir una foto en una calcomanía de vinilo lista para cortar: preparar la imagen, vectorizarla a SVG y cortarla en una cortadora de vinilo doméstica.",
    h1: "Cómo hacer una calcomanía de vinilo a partir de una foto",
    intro:
      "Convertir una foto en una calcomanía de vinilo significa primero convertirla en un único trazado de corte limpio. Aquí está el proceso completo, desde la foto de origen hasta la calcomanía terminada.",
    breadcrumbLabel: "Calcomanía de vinilo a partir de una foto",
    publishedAt: "2026-03-02",
    sections: [
      {
        heading: "Paso 1: Elige (o prepara) una foto de alto contraste",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Las calcomanías de vinilo son trazados de corte de un solo color, así que las mejores fotos de origen tienen un motivo claro y de alto contraste sobre un fondo simple: piensa en una silueta, el retrato de una mascota con buena separación respecto al fondo, o una forma gráfica sencilla. Si tu foto es recargada o de bajo contraste, considera recortarla ajustadamente al motivo o aumentar el contraste en un editor de fotos antes de vectorizarla.",
            ],
          },
        ],
      },
      {
        heading: "Paso 2: Vectoriza la foto a SVG",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Sube tu foto ya preparada a [un convertidor gratuito de PNG a SVG](/) y elige el modo Blanco y Negro; esto reduce la imagen a una única forma de primer plano, que es exactamente lo que necesita una cortadora de vinilo. Ajusta el nivel de detalle/suavizado hasta que el contorno se vea limpio: demasiado detalle puede dejar motas diminutas y difíciles de retirar; muy poco puede hacer perder detalle importante de la forma.",
            ],
          },
        ],
      },
      {
        heading: "Paso 3: Limpia el trazado",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Abre el SVG descargado en Inkscape, Illustrator o el software de tu cortadora y revisa si hay formas sueltas o islas desconectadas, algo habitual con fotos de origen recargadas. Elimina todo lo que no forme parte del diseño principal; consulta nuestra guía sobre [cómo editar un SVG después de la conversión](/guides/edit-svg-after-conversion) para consejos específicos de cada herramienta.",
            ],
          },
        ],
      },
      {
        heading: "Paso 4: Corta, retira el excedente y aplica",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Importa el SVG ya depurado en el software de tu cortadora (esto funciona igual para máquinas [Cricut](/use-cases/cricut) y Silhouette).",
              "Ajusta el tamaño del diseño a tu proyecto y selecciona la cuchilla y la presión adecuadas para tu vinilo.",
              "Corta y luego retira el excedente de vinilo alrededor y dentro del diseño.",
              "Aplica cinta de transferencia sobre el diseño, levántalo como una sola pieza y presiónalo sobre su superficie final.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "¿Qué tipo de foto funciona mejor para una calcomanía?",
        answer:
          "Una foto con un motivo claro y un fondo simple de alto contraste se vectoriza de forma más limpia; las fotos recargadas o de bajo contraste suelen necesitar primero un recorte o un ajuste de contraste.",
      },
      {
        question: "¿Necesito Photoshop para preparar la foto?",
        answer:
          "No; recortar y aumentar el contraste puede hacerse en casi cualquier editor de fotos gratuito. El paso de vectorización en sí no necesita ningún software más allá del convertidor basado en el navegador.",
      },
    ],
    related: [
      {
        href: "/guides/edit-svg-after-conversion",
        label: "Cómo editar un archivo SVG después de convertirlo",
        description: "Limpia formas sueltas y simplifica el trazado de tu calcomanía vectorizada.",
      },
      {
        href: "/use-cases/silhouette-vinyl-cutting",
        label: "PNG a SVG para Silhouette",
        description: "El mismo flujo de trabajo, adaptado a Silhouette Studio.",
      },
    ],
    relatedHeading: "Lecturas relacionadas",
  },

  "best-png-to-svg-converters": {
    slug: "blog/best-png-to-svg-converters",
    keyword: "mejores convertidores de png a svg",
    title: "Los mejores convertidores de PNG a SVG: una comparación por categorías",
    metaDescription:
      "No todos los convertidores de PNG a SVG funcionan igual. Compara herramientas basadas en el navegador, software vectorial de escritorio y servicios de pago para encontrar el más adecuado.",
    h1: "Los mejores convertidores de PNG a SVG: una comparación por categorías",
    intro:
      "El \"mejor convertidor\" depende en gran medida de qué es lo que más valoras: privacidad, costo, procesamiento por lotes o un control detallado. Así se comparan las principales categorías.",
    breadcrumbLabel: "Mejores convertidores",
    publishedAt: "2026-02-18",
    sections: [
      {
        heading: "Convertidores gratuitos basados en el navegador",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Herramientas como [nuestro convertidor de PNG a SVG](/) funcionan por completo en tu navegador mediante la API de Canvas; tu imagen nunca sale de tu dispositivo, no hay que crear ninguna cuenta y los resultados son instantáneos. La contrapartida es que las herramientas basadas en el navegador suelen exponer menos parámetros de trazado detallados que el software de escritorio profesional, aunque una buena herramienta sigue cubriendo los ajustes que más importan: número de colores, detalle y transparencia.",
            ],
          },
        ],
      },
      {
        heading: "Software vectorial de escritorio",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Image Trace de Adobe Illustrator y Trazar mapa de bits de Inkscape son herramientas de trazado completas integradas en editores vectoriales de propósito general. Ofrecen un control profundo sobre el algoritmo de trazado y te permiten empezar a editar el resultado de inmediato en la misma aplicación. La contrapartida es el costo (en el caso de Illustrator) o una curva de aprendizaje más pronunciada, ya que estás aprendiendo una aplicación de diseño completa en lugar de una herramienta de un solo propósito.",
            ],
          },
        ],
      },
      {
        heading: "Bibliotecas de línea de comandos y de código abierto",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Bibliotecas como Potrace y sus muchas variantes impulsan por dentro a numerosas herramientas de trazado, tanto de navegador como de escritorio. Usarlas directamente desde la línea de comandos te da una conversión programable y apta para lotes, pero requiere sentirte cómodo con una terminal y con la configuración manual en lugar de una interfaz visual.",
            ],
          },
        ],
      },
      {
        heading: "Qué buscar, sea cual sea tu elección",
        blocks: [
          {
            kind: "list",
            items: [
              "Salida SVG real basada en trazados, no una imagen rasterizada envuelta en una etiqueta SVG; revisa el archivo descargado en busca de elementos `<path>` reales.",
              "Soporte para el modo de trazado que necesitas: Blanco y Negro para logotipos y dibujo lineal, Color completo para fotos e ilustraciones multicolor.",
              "Manejo de la transparencia, si tus imágenes de origen tienen fondos transparentes; consulta [cómo funciona el trazado de imágenes](/guides/how-image-tracing-works) para entender por qué esto importa.",
              "Si tus imágenes se suben a un servidor o se procesan localmente, en caso de que la privacidad sea importante para tu caso de uso.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "¿Un convertidor basado en el navegador es tan bueno como el software de escritorio?",
        answer:
          "Para tareas comunes como logotipos, iconos y archivos de corte, un buen convertidor basado en el navegador cubre los ajustes que más importan. El software de escritorio profesional ofrece un control más profundo para casos avanzados o poco habituales.",
      },
      {
        question: "¿Los convertidores gratuitos son seguros para usar en trabajos de clientes?",
        answer:
          "Eso depende por completo de cómo procese tus archivos la herramienta; un convertidor que vectoriza las imágenes localmente en tu navegador nunca las sube a ningún sitio, algo que vale la pena verificar si la privacidad es importante para tu proyecto.",
      },
    ],
    related: [
      {
        href: "/guides/how-image-tracing-works",
        label: "¿Cómo funciona el trazado de imágenes?",
        description: "Entiende el algoritmo en el que se basa cada convertidor de esta comparación.",
      },
      {
        href: "/use-cases/cricut",
        label: "PNG a SVG para Cricut",
        description: "Un ejemplo concreto de cómo elegir el convertidor adecuado para un proyecto específico.",
      },
    ],
    relatedHeading: "Lecturas relacionadas",
  },

  "why-is-my-svg-blurry": {
    slug: "blog/why-is-my-svg-blurry",
    keyword: "por qué mi svg se ve borroso",
    title: "¿Por qué mi SVG se ve borroso? Causas comunes y soluciones",
    metaDescription:
      "Un SVG no debería verse borroso a ningún tamaño; si el tuyo sí, aquí están las causas más comunes, desde archivos que en realidad son raster hasta ajustes de renderizado y exportación.",
    h1: "¿Por qué mi SVG se ve borroso? Causas comunes y soluciones",
    intro:
      "Los SVG son archivos vectoriales, así que no deberían perder nitidez a ningún tamaño. Si tu SVG se ve borroso, algo específico está fallando; aquí te mostramos cómo detectarlo.",
    breadcrumbLabel: "Por qué mi SVG se ve borroso",
    publishedAt: "2026-01-27",
    sections: [
      {
        heading: "Tu \"SVG\" podría ser en realidad una imagen rasterizada",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "La causa más común: algunas herramientas producen un archivo SVG que simplemente envuelve un PNG o JPEG codificado en Base64 dentro de una etiqueta `<image>`, en lugar de vectorizar trazados reales. Tiene la extensión .svg, pero sigue siendo una imagen rasterizada por dentro, así que se difumina al escalarse exactamente igual que lo haría un PNG. Abre el archivo en un editor de texto; si ves una larga cadena en Base64 en lugar de elementos `<path>`, ahí tienes la respuesta. Consulta [PNG vs SVG](/guides/png-vs-svg) para entender por qué importa esta distinción.",
            ],
          },
        ],
      },
      {
        heading: "El trazado se configuró con un detalle muy alto sobre una imagen con ruido",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "De forma contraintuitiva, vectorizar una imagen de origen de baja calidad o muy comprimida con un detalle muy alto puede producir una enorme cantidad de segmentos de trazado diminutos y dentados que se ven ásperos en lugar de suaves: el trazado está reproduciendo fielmente el ruido del archivo original. Intenta volver a vectorizar desde una imagen de origen más limpia, o aumenta el ajuste de suavizado para que el algoritmo favorezca curvas más suaves y en menor número.",
            ],
          },
        ],
      },
      {
        heading: "El SVG se está rasterizando en algún punto de tu proceso",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Algunas plataformas (ciertos gestores de imágenes de CMS, navegadores antiguos o ajustes de exportación en herramientas de diseño) convierten un SVG en una imagen rasterizada a una resolución fija antes de mostrarlo; en ese momento, hereda todos los problemas de escalado de un PNG. Revisa si la plataforma que usas tiene una opción para servir o incrustar el SVG de forma nativa en lugar de convertirlo.",
            ],
          },
        ],
      },
      {
        heading: "Cómo solucionarlo",
        blocks: [
          {
            kind: "list",
            items: [
              "Vuelve a vectorizar desde el PNG original usando una herramienta que genere datos de trazado reales; [prueba el convertidor gratuito de PNG a SVG](/) e inspecciona el resultado antes de usarlo.",
              "Si el detalle se ve dentado, aumenta el ajuste de suavizado y vuelve a descargar.",
              "Si una plataforma está rasterizando tu SVG al mostrarlo, busca un ajuste para incrustarlo o enlazarlo como un SVG nativo en lugar de una imagen convertida.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "¿Cómo puedo comprobar rápidamente si mi SVG es realmente vectorial?",
        answer:
          "Abre el archivo en un editor de texto y busca elementos `<path>`, `<circle>` o similares. Si en cambio ves una larga cadena en Base64 dentro de una etiqueta `<image>`, es una imagen rasterizada disfrazada con extensión SVG.",
      },
      {
        question: "¿Hacer zoom en el navegador vuelve borroso un SVG?",
        answer:
          "No; un SVG genuinamente vectorial se mantiene nítido a cualquier nivel de zoom del navegador. Si se difumina al hacer zoom, es muy probable que el archivo sea una imagen rasterizada y no trazados vectoriales reales.",
      },
    ],
    related: [
      {
        href: "/guides/png-vs-svg",
        label: "PNG vs SVG: ¿Cuál es la diferencia?",
        description: "Por qué un archivo genuinamente vectorial se comporta de forma tan distinta a uno rasterizado.",
      },
      {
        href: "/use-cases/laser-cutting",
        label: "PNG a SVG para corte láser",
        description: "Un caso de uso donde un SVG falso, envuelto en raster, fallará por completo.",
      },
    ],
    relatedHeading: "Lecturas relacionadas",
  },

  "svg-vs-png-for-icons": {
    slug: "blog/svg-vs-png-for-icons",
    keyword: "svg o png para iconos",
    title: "SVG vs PNG para iconos: ¿cuál deberías usar?",
    metaDescription:
      "Comparamos SVG y PNG específicamente para iconos de sitios web y apps: tamaño de archivo, escalado entre dispositivos, estilizado con CSS y cuándo el PNG sigue teniendo sentido.",
    h1: "SVG vs PNG para iconos: ¿cuál deberías usar?",
    intro:
      "Los iconos se muestran a tamaños extremadamente distintos: un favicon de 16px, un icono de app de 48px, una imagen destacada de 200px, lo que hace especialmente importante acertar en la elección entre SVG y PNG.",
    breadcrumbLabel: "SVG vs PNG para iconos",
    publishedAt: "2026-01-09",
    sections: [
      {
        heading: "Por qué el SVG suele ganar para los iconos",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Los iconos son casi siempre formas simples de color plano, exactamente lo que los trazados vectoriales representan de forma eficiente. Un icono en SVG se mantiene nítido tanto si se renderiza a 16px como a 160px, y un único archivo cubre todos los tamaños que un diseño responsivo pueda necesitar, en lugar de exportar PNG independientes para cada resolución.",
            ],
          },
        ],
      },
      {
        heading: "Los iconos SVG se pueden estilizar con CSS",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Como el relleno y el trazo de un SVG son solo atributos, puedes recolorear un icono con CSS para adaptarlo a un estado hover o al modo oscuro, sin necesitar un segundo archivo de imagen. Los colores de un icono PNG están fijados en sus píxeles, así que un color distinto significa un archivo exportado completamente aparte.",
            ],
          },
        ],
      },
      {
        heading: "Comparación de tamaño de archivo",
        blocks: [
          {
            kind: "table",
            headers: ["", "Icono SVG", "Icono PNG"],
            rows: [
              ["Tamaño típico (icono simple)", "0,5–3 KB", "1–5 KB por resolución"],
              ["¿Necesita varias resoluciones?", "No: un archivo escala", "Sí: hay que exportar cada tamaño por separado"],
              ["¿Recoloreable con CSS?", "Sí", "No"],
            ],
          },
        ],
      },
      {
        heading: "Cuándo el PNG sigue teniendo sentido para iconos",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Si un \"icono\" es en realidad una imagen pequeña de tipo fotográfico o muy detallada, como un icono de app realista con degradados, sombras y textura, el PNG puede reproducir ese detalle de forma más fiel que un trazado vectorial. Sin embargo, para iconos puramente gráficos y de color plano, el SVG es casi siempre la mejor opción. Si partes de un conjunto de iconos PNG ya existente, puedes [convertirlo a SVG](/) y tener ambos formatos disponibles.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "¿Todos los navegadores admiten iconos SVG?",
        answer:
          "Sí, todos los navegadores modernos renderizan SVG de forma nativa, incluso como favicons, iconos en línea e imágenes de fondo en CSS.",
      },
      {
        question: "¿Puedo animar un icono SVG?",
        answer:
          "Sí; el SVG admite animación con CSS y JavaScript de trazados individuales, algo que no es posible con un PNG estático.",
      },
      {
        question: "¿El SVG pesa más o menos que el PNG para el mismo icono?",
        answer:
          "Para iconos simples de color plano, el SVG suele pesar menos, sobre todo si tienes en cuenta la necesidad de varias exportaciones en PNG para cubrir distintos tamaños de visualización.",
      },
    ],
    related: [
      {
        href: "/guides/raster-vs-vector",
        label: "Gráficos rasterizados vs vectoriales: la guía completa",
        description: "La distinción de formato más amplia detrás de esta comparación específica sobre iconos.",
      },
      {
        href: "/use-cases/cricut",
        label: "PNG a SVG para Cricut",
        description: "Otro caso práctico donde los trazados vectoriales importan más que los píxeles.",
      },
    ],
    relatedHeading: "Lecturas relacionadas",
  },

  "common-png-to-svg-mistakes": {
    slug: "blog/common-png-to-svg-mistakes",
    keyword: "errores comunes al convertir png a svg",
    title: "Errores comunes al convertir PNG a SVG que debes evitar",
    metaDescription:
      "Evita los errores más comunes al convertir PNG a SVG, desde el modo de trazado equivocado hasta ignorar la transparencia, para que tu primer resultado sea un archivo limpio y utilizable.",
    h1: "Errores comunes al convertir PNG a SVG que debes evitar",
    intro:
      "La mayoría de las conversiones de PNG a SVG decepcionantes se reducen a un puñado de errores evitables. Esto es lo que debes vigilar antes de convertir.",
    breadcrumbLabel: "Errores comunes",
    publishedAt: "2025-12-15",
    sections: [
      {
        heading: "Error 1: usar el modo Color completo en un logotipo simple",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Un logotipo plano de uno o dos colores vectorizado en modo Color completo puede terminar con más trazados y colores separados de los previstos, porque el algoritmo intenta conservar la variación sutil de color proveniente del suavizado (antialiasing) en los bordes. Para logotipos simples y dibujo lineal, el modo Blanco y Negro casi siempre produce un resultado más limpio; consulta [cómo convertir un logotipo a SVG](/guides/convert-logo-to-svg) para el flujo de trabajo completo.",
            ],
          },
        ],
      },
      {
        heading: "Error 2: partir de una fuente de baja resolución",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "El trazado solo puede trabajar con el detalle que exista en tu PNG de origen; no puede inventar bordes más nítidos de los que tenía la imagen original. Una imagen de origen pequeña y muy comprimida produce un trazado más tosco que una más grande y limpia, incluso con ajustes idénticos.",
            ],
          },
        ],
      },
      {
        heading: "Error 3: ignorar el ajuste de transparencia",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Si tu PNG de origen tiene un fondo transparente pero olvidas activar el interruptor de fondo transparente, puedes terminar con una forma de fondo de color sólido no deseada en tu SVG, algo que importa mucho para archivos de corte, donde esa forma de fondo también se cortaría.",
            ],
          },
        ],
      },
      {
        heading: "Error 4: saltarte una revisión después de la conversión",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Abre siempre el SVG descargado y revísalo antes de usarlo en un proyecto real: haz zoom para confirmar que los bordes se ven limpios, y busca formas sueltas que hayan quedado por el ruido de la imagen de origen. Esto es especialmente importante antes de enviar un archivo a una máquina como una cortadora láser o una [Cricut](/use-cases/cricut), donde una forma suelta significa un corte extra no deseado.",
            ],
          },
        ],
      },
      {
        heading: "Error 5: exagerar el ajuste de detalle",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Subir el detalle al máximo no garantiza automáticamente el mejor resultado; en una fuente con ruido o de baja calidad, puede producir una enorme cantidad de segmentos de trazado diminutos que se ven más ásperos, no más nítidos. Empieza con un ajuste de detalle moderado y ajústalo según cómo se vea el resultado real, no solo la posición del control deslizante.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "¿Cuál es el error más común de todos?",
        answer:
          "Usar el modo Color completo en un logotipo simple o un diseño de dibujo lineal que se vectorizaría de forma mucho más limpia en modo Blanco y Negro.",
      },
      {
        question: "¿Cómo sé si mis ajustes estaban mal?",
        answer:
          "Abre el SVG e inspecciónalo: colores extra inesperados, formas sueltas o bordes dentados son señales de que vale la pena ajustar los parámetros y volver a convertir desde el [convertidor de PNG a SVG](/).",
      },
    ],
    related: [
      {
        href: "/guides/convert-logo-to-svg",
        label: "Cómo convertir un logotipo a SVG",
        description: "Los ajustes y el flujo de trabajo correctos para el caso de conversión más común.",
      },
      {
        href: "/use-cases/embroidery-digitizing",
        label: "PNG a SVG para bordado",
        description: "Un caso de uso donde estos errores resultan especialmente costosos de detectar tarde.",
      },
    ],
    relatedHeading: "Lecturas relacionadas",
  },
};
