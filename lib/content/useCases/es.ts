import type { ContentPage } from "../types";

const siblingLinks = {
  cricut: { href: "/use-cases/cricut", label: "PNG a SVG para Cricut" },
  laserCutting: { href: "/use-cases/laser-cutting", label: "PNG a SVG para corte láser" },
  silhouette: {
    href: "/use-cases/silhouette-vinyl-cutting",
    label: "PNG a SVG para Silhouette",
  },
  embroidery: {
    href: "/use-cases/embroidery-digitizing",
    label: "PNG a SVG para bordado",
  },
};

export const useCases: Record<string, ContentPage> = {
  cricut: {
    slug: "use-cases/cricut",
    keyword: "convertir png a svg para cricut",
    title: "Cómo convertir PNG a SVG para Cricut",
    metaDescription:
      "Convierte un diseño PNG en un SVG listo para cortar en Cricut Design Space. Ajustes paso a paso, un mini proyecto guiado y consejos para solucionar problemas.",
    h1: "Cómo convertir PNG a SVG para Cricut",
    intro:
      "Cricut Design Space trabaja con trazados de corte, no con píxeles, así que un diseño en PNG debe convertirse en SVG antes de que tu máquina Cricut pueda cortarlo.",
    breadcrumbLabel: "Cricut",
    sections: [
      {
        heading: "Por qué Cricut necesita SVG, no PNG",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Design Space puede importar técnicamente un PNG, pero lo trata como una imagen plana para imprimir o vectorizar manualmente dentro de la app; no sabe automáticamente por dónde cortar. Un SVG ya contiene datos de trazado reales, así que Design Space puede leer esos trazados directamente como líneas de corte, sin necesidad de vectorizar manualmente dentro de Cricut.",
            ],
          },
        ],
      },
      {
        heading: "Paso a paso: de PNG a SVG listo para Cricut",
        blocks: [
          {
            kind: "steps",
            steps: [
              {
                title: "Sube tu PNG",
                body: "Arrastra tu diseño al [convertidor de PNG a SVG](/); un PNG con fondo transparente funciona mejor para proyectos de corte.",
              },
              {
                title: "Elige tus ajustes",
                body: "Usa el modo Blanco y Negro para obtener un único trazado de corte limpio (la mayoría de los proyectos de vinilo y papel), o el modo Color completo si estás haciendo un diseño por capas y multicolor. Mantén activado el interruptor de fondo transparente para que solo se corte tu diseño, no el fondo.",
              },
              {
                title: "Impórtalo en Cricut Design Space",
                body: "Descarga el SVG y, en Design Space, elige Subir > Subir imagen, selecciona tu SVG y guárdalo; aparecerá en tu biblioteca de imágenes como un archivo listo para cortar.",
              },
            ],
          },
        ],
      },
      {
        heading: "Mini proyecto: una calcomanía de vinilo de un solo color",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Empieza con un PNG de alto contraste (un diseño oscuro sobre un fondo claro o transparente); el arte estilo silueta funciona especialmente bien.",
              "Vectorízalo en modo Blanco y Negro con el detalle en un nivel bajo a medio para que los bordes queden limpios y no dentados.",
              "Importa el SVG en Design Space, ajusta el tamaño a tu proyecto y define el material y la configuración de la cuchilla para tu vinilo.",
              "Corta, retira el excedente de vinilo alrededor del diseño y aplica cinta de transferencia para trasladar la calcomanía a su superficie final.",
            ],
          },
        ],
      },
      {
        heading: "Solución de problemas comunes",
        blocks: [
          {
            kind: "list",
            items: [
              "Aparecen formas diminutas extra tras la importación: normalmente significa que el PNG de origen tenía ruido de fondo o artefactos de compresión; intenta aumentar el ajuste de detalle/suavizado antes de volver a exportar.",
              "Design Space muestra piezas desconectadas: para un corte de un solo color, asegúrate de haber usado el modo Blanco y Negro en lugar de Color completo, que crea un trazado independiente por cada color.",
              "Las líneas de corte se ven redondeadas cuando querías esquinas afiladas: reduce el ajuste de suavizado para que los trazados se ciñan más a los bordes originales.",
            ],
          },
        ],
      },
    ],
    howTo: {
      name: "Convertir PNG a SVG para Cricut",
      steps: [
        { name: "Sube tu PNG", text: "Arrastra tu diseño al convertidor de PNG a SVG." },
        {
          name: "Elige tus ajustes",
          text: "Selecciona el modo Blanco y Negro o Color completo y mantén el fondo transparente.",
        },
        {
          name: "Impórtalo en Cricut Design Space",
          text: "Descarga el SVG y súbelo en Design Space mediante Subir > Subir imagen.",
        },
      ],
    },
    faqs: [
      {
        question: "¿Cricut Design Space acepta archivos SVG?",
        answer:
          "Sí; el SVG es uno de los formatos estándar que Design Space acepta para diseños listos para cortar, junto con sus propios archivos de proyecto por capas.",
      },
      {
        question: "¿Debería usar el modo Blanco y Negro o Color completo para Cricut?",
        answer:
          "El modo Blanco y Negro es el adecuado para la mayoría de los cortes de un solo material, ya sea vinilo o papel. Usa el modo Color completo solo si estás construyendo intencionalmente un diseño multicapa y multicolor.",
      },
      {
        question: "¿Por qué mi SVG tiene un rectángulo de fondo que no quiero cortar?",
        answer:
          "Asegúrate de haber activado el interruptor de fondo transparente antes de convertir; de lo contrario, la herramienta trata el fondo como un color opaco que también hay que vectorizar.",
      },
    ],
    related: [siblingLinks.laserCutting, siblingLinks.silhouette, siblingLinks.embroidery],
    relatedHeading: "Casos de uso relacionados",
  },

  "laser-cutting": {
    slug: "use-cases/laser-cutting",
    keyword: "convertir png a svg para corte láser",
    title: "Cómo convertir PNG a SVG para corte láser",
    metaDescription:
      "Convierte una ilustración PNG en un trazado de corte SVG limpio para software de corte láser. Guía de ajustes, un mini proyecto y soluciones a problemas comunes de importación.",
    h1: "Cómo convertir PNG a SVG para corte láser",
    intro:
      "Las cortadoras y grabadoras láser siguen trazados vectoriales, no cuadrículas de píxeles; convertir tu ilustración a SVG es el paso que la hace legible para la máquina.",
    breadcrumbLabel: "Corte láser",
    sections: [
      {
        heading: "Por qué las cortadoras láser necesitan SVG, no PNG",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "El software de corte y grabado láser (LightBurn, LaserGRBL y la mayoría de las herramientas específicas de cada máquina) lee trazados vectoriales para saber exactamente por dónde debe moverse y cortar el cabezal láser. Un PNG no tiene ninguna información de trazado; solo le sirve a una cortadora láser como imagen de grabado rasterizada, no como contorno de corte.",
            ],
          },
        ],
      },
      {
        heading: "Paso a paso: de PNG a SVG listo para láser",
        blocks: [
          {
            kind: "steps",
            steps: [
              {
                title: "Sube tu PNG",
                body: "Lleva tu ilustración al [convertidor de PNG a SVG](/); un arte de origen limpio y de alto contraste da las líneas de corte más limpias.",
              },
              {
                title: "Elige tus ajustes",
                body: "El modo Blanco y Negro es normalmente lo que necesitas para un contorno de corte; aumenta el detalle para diseños intrincados, o redúcelo para un trazado más simple y de corte más rápido.",
              },
              {
                title: "Impórtalo en tu software láser",
                body: "Descarga el SVG e impórtalo en LightBurn, LaserGRBL o el software de tu máquina, y luego asigna los ajustes de corte o grabado a las capas correspondientes.",
              },
            ],
          },
        ],
      },
      {
        heading: "Mini proyecto: un letrero de madera cortado con láser",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Empieza con un PNG de alto contraste de tu texto o diseño (oscuro sobre claro, o viceversa).",
              "Vectorízalo en modo Blanco y Negro, manteniendo el detalle moderado para que las curvas queden suaves sin nodos diminutos excesivos que ralenticen el láser.",
              "Impórtalo en tu software láser, ajústalo al tamaño de tu material y separa en su propia capa cualquier recorte interior si es necesario.",
              "Haz un corte de prueba en material de descarte a baja potencia primero, para confirmar el trazado y la velocidad antes de cortar tu pieza final.",
            ],
          },
        ],
      },
      {
        heading: "Solución de problemas comunes",
        blocks: [
          {
            kind: "list",
            items: [
              "El trazado tiene demasiados segmentos diminutos y ralentiza el láser: aumenta el ajuste de suavizado/detalle antes de exportar para que el trazado use curvas más largas y en menor número.",
              "Los agujeros interiores no se cortan correctamente: revisa que tu PNG de origen tuviera formas interiores claras y cerradas; los bordes con ruido o suavizado (antialiasing) pueden confundir el trazado.",
              "El diseño se ve reflejado o rotado tras la importación: esto suele ser un ajuste de importación de tu programa láser, no del SVG en sí; revisa sus opciones de orientación.",
            ],
          },
        ],
      },
    ],
    howTo: {
      name: "Convertir PNG a SVG para corte láser",
      steps: [
        { name: "Sube tu PNG", text: "Lleva tu ilustración al convertidor de PNG a SVG." },
        {
          name: "Elige tus ajustes",
          text: "Usa el modo Blanco y Negro y ajusta el detalle según la complejidad de tu diseño.",
        },
        {
          name: "Impórtalo en tu software láser",
          text: "Descarga el SVG e impórtalo en LightBurn, LaserGRBL o similar.",
        },
      ],
    },
    faqs: [
      {
        question: "¿Qué software láser acepta archivos SVG?",
        answer:
          "La mayoría del software de corte láser (incluidos LightBurn, LaserGRBL y el software incluido con la mayoría de las cortadoras láser de escritorio) importa SVG directamente como trazados de corte vectoriales.",
      },
      {
        question: "¿El SVG debe tener relleno o solo un contorno?",
        answer:
          "Para cortar, solo importa el contorno del trazado; la mayoría del software láser ignora el color de relleno y lee los trazos/trazados para determinar la línea de corte.",
      },
      {
        question: "¿Puedo grabar con láser una foto en lugar de cortarla?",
        answer:
          "Sí, pero el grabado de una foto suele usar la imagen rasterizada directamente en lugar de un trazado vectorial; la conversión a vector está pensada específicamente para trazados de corte y dibujo lineal.",
      },
    ],
    related: [siblingLinks.cricut, siblingLinks.silhouette, siblingLinks.embroidery],
    relatedHeading: "Casos de uso relacionados",
  },

  "silhouette-vinyl-cutting": {
    slug: "use-cases/silhouette-vinyl-cutting",
    keyword: "convertir png a svg para silhouette",
    title: "Cómo convertir PNG a SVG para Silhouette",
    metaDescription:
      "Prepara un diseño PNG como SVG para Silhouette Studio y el corte de vinilo. Guía de ajustes, un proyecto de calcomanía paso a paso y consejos para solucionar problemas.",
    h1: "Cómo convertir PNG a SVG para Silhouette",
    intro:
      "Silhouette Studio corta siguiendo trazados vectoriales, así que un diseño en PNG debe convertirse a SVG antes de que tu máquina Silhouette pueda cortar vinilo, cartulina o tela.",
    breadcrumbLabel: "Silhouette",
    sections: [
      {
        heading: "Por qué Silhouette Studio necesita SVG, no PNG",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "La función principal de Silhouette Studio es seguir líneas de corte, es decir, trazados vectoriales que le indican a la cuchilla exactamente por dónde moverse. Un PNG no tiene ese tipo de datos de trazado, así que importarlo directamente solo te da una imagen imprimible, no un diseño cortable, a menos que lo vectorices dentro del propio Silhouette Studio (una función de pago en la versión completa). Convertir a SVG de antemano te da trazados listos para cortar de forma gratuita, en cualquier versión.",
            ],
          },
        ],
      },
      {
        heading: "Paso a paso: de PNG a SVG listo para Silhouette",
        blocks: [
          {
            kind: "steps",
            steps: [
              {
                title: "Sube tu PNG",
                body: "Añade tu diseño al [convertidor de PNG a SVG](/); un fondo transparente mantiene el trazado de corte limitado a tu ilustración.",
              },
              {
                title: "Elige tus ajustes",
                body: "El modo Blanco y Negro funciona bien para la mayoría de las calcomanías de vinilo de una sola capa; el modo Color completo es adecuado para diseños multicapa donde cada color se convierte en su propia capa de corte.",
              },
              {
                title: "Impórtalo en Silhouette Studio",
                body: "Descarga el SVG y usa Archivo > Abrir o Archivo > Importar en Silhouette Studio; se cargará como un trazado editable y cortable.",
              },
            ],
          },
        ],
      },
      {
        heading: "Mini proyecto: una calcomanía de vinilo por capas",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Elige un diseño PNG con un número reducido de colores diferenciados para un resultado multicapa limpio.",
              "Vectorízalo en modo Color completo, ajustando el número de colores al número de colores de vinilo que planeas usar.",
              "Impórtalo en Silhouette Studio y separa el diseño por color usando las herramientas integradas del software, si planeas cortar cada capa de un vinilo distinto.",
              "Corta cada capa de color por separado, retira el excedente y superpón las piezas sobre cinta de transferencia para su aplicación.",
            ],
          },
        ],
      },
      {
        heading: "Solución de problemas comunes",
        blocks: [
          {
            kind: "list",
            items: [
              "El diseño se importa con bordes dentados: aumenta el ajuste de suavizado/detalle antes de descargar para que las curvas se aproximen de forma más suave.",
              "Demasiados trazados de corte independientes: reduce el número de colores en el modo Color completo, o cambia al modo Blanco y Negro si solo necesitas un corte de un solo color.",
              "Aparecen pequeños puntos sueltos cerca del diseño: normalmente son restos de ruido del PNG de origen; una imagen de origen más limpia y con menos artefactos de compresión evita este problema.",
            ],
          },
        ],
      },
    ],
    howTo: {
      name: "Convertir PNG a SVG para Silhouette",
      steps: [
        { name: "Sube tu PNG", text: "Añade tu diseño al convertidor de PNG a SVG." },
        {
          name: "Elige tus ajustes",
          text: "Selecciona el modo Blanco y Negro o Color completo según tu proyecto.",
        },
        {
          name: "Impórtalo en Silhouette Studio",
          text: "Descarga el SVG y ábrelo en Silhouette Studio como un trazado cortable.",
        },
      ],
    },
    faqs: [
      {
        question: "¿Necesito la versión de pago de Silhouette Studio para usar un SVG?",
        answer:
          "No; importar un SVG ya vectorizado funciona en la versión gratuita de Silhouette Studio. La actualización de pago se necesita principalmente si quieres vectorizar imágenes rasterizadas dentro de la propia app.",
      },
      {
        question: "¿Cuál es el mejor modo para una calcomanía de vinilo de un solo color?",
        answer:
          "El modo Blanco y Negro, ya que produce un único trazado limpio en lugar de capas separadas por color.",
      },
      {
        question: "¿Silhouette Studio puede editar el SVG después de importarlo?",
        answer:
          "Sí; una vez importado, el diseño está hecho de trazados reales y editables, así que puedes redimensionarlo, remodelarlo o combinarlo con otras líneas de corte dentro de Silhouette Studio.",
      },
    ],
    related: [siblingLinks.cricut, siblingLinks.laserCutting, siblingLinks.embroidery],
    relatedHeading: "Casos de uso relacionados",
  },

  "embroidery-digitizing": {
    slug: "use-cases/embroidery-digitizing",
    keyword: "convertir png a svg para bordado",
    title: "Cómo convertir PNG a SVG para digitalización de bordados",
    metaDescription:
      "Convierte un logotipo PNG en un contorno SVG limpio para software de digitalización de bordados. Ajustes paso a paso, un proyecto guiado y solución de problemas.",
    h1: "Cómo convertir PNG a SVG para digitalización de bordados",
    intro:
      "El software de digitalización de bordados construye trazados de puntada a partir de contornos vectoriales, no de píxeles rasterizados; convertir primero un logotipo en PNG a SVG le da al digitalizador una forma limpia con la que trabajar.",
    breadcrumbLabel: "Bordado",
    sections: [
      {
        heading: "Por qué la digitalización de bordados necesita SVG, no PNG",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "El software de digitalización (como Wilcom, Hatch o Embrilliance) convierte un diseño en una secuencia de trazados de puntada, un proceso que parte de contornos vectoriales limpios, no de una cuadrícula rasterizada. Introducir un PNG directamente en la mayoría de los flujos de digitalización significa que alguien tiene que vectorizar el contorno manualmente primero; partir de un SVG elimina por completo ese paso manual.",
            ],
          },
        ],
      },
      {
        heading: "Paso a paso: de PNG a SVG listo para bordar",
        blocks: [
          {
            kind: "steps",
            steps: [
              {
                title: "Sube tu PNG",
                body: "Añade tu logotipo o diseño al [convertidor de PNG a SVG](/); un diseño de origen simple y de alto contraste se digitaliza de forma más limpia.",
              },
              {
                title: "Elige tus ajustes",
                body: "El modo Blanco y Negro suele ser el mejor para bordado, ya que los trazados de puntada siguen contornos limpios en lugar de detalle fotográfico; mantén el detalle moderado para evitar trazados demasiado complejos y difíciles de digitalizar.",
              },
              {
                title: "Impórtalo en tu software de digitalización",
                body: "Descarga el SVG e impórtalo en tu programa de digitalización como el contorno base para construir trazados de puntada y capas.",
              },
            ],
          },
        ],
      },
      {
        heading: "Mini proyecto: digitalizar un parche de logotipo sencillo",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Empieza con una versión simplificada de tu logotipo; el bordado no conserva bien el detalle fino, así que las formas simples y marcadas funcionan mejor.",
              "Vectorízalo en modo Blanco y Negro con el detalle en el extremo bajo, priorizando trazados más suaves y en menor número por encima de bordes perfectos pixel a pixel.",
              "Importa el SVG en tu software de digitalización y asigna tipos de puntada (satén, relleno, puntada corrida) a cada región delineada.",
              "Digitaliza y realiza una prueba de bordado en tela de descarte antes de comprometerte con tu material final.",
            ],
          },
        ],
      },
      {
        heading: "Solución de problemas comunes",
        blocks: [
          {
            kind: "list",
            items: [
              "El contorno tiene demasiados detalles pequeños para digitalizar limpiamente: simplifica el PNG de origen o aumenta el ajuste de suavizado para que el trazado produzca formas más marcadas y en menor número.",
              "Las líneas finas desaparecen o se fusionan: los trazos muy finos en la imagen de origen pueden desaparecer durante la cuantización; engrósalos en el PNG de origen antes de vectorizar si son esenciales.",
              "Los colores no se corresponden bien con los colores de hilo: usa el modo Color completo con un número de colores más bajo para que cada región se corresponda de forma más predecible con un único color de hilo.",
            ],
          },
        ],
      },
    ],
    howTo: {
      name: "Convertir PNG a SVG para digitalización de bordados",
      steps: [
        { name: "Sube tu PNG", text: "Añade tu logotipo al convertidor de PNG a SVG." },
        {
          name: "Elige tus ajustes",
          text: "Usa el modo Blanco y Negro con detalle moderado para obtener contornos limpios y digitalizables.",
        },
        {
          name: "Impórtalo en tu software de digitalización",
          text: "Descarga el SVG y úsalo como contorno base en tu programa de digitalización.",
        },
      ],
    },
    faqs: [
      {
        question: "¿Un SVG se convierte automáticamente en un archivo de bordado?",
        answer:
          "No; un SVG le da al software de digitalización un contorno vectorial limpio con el que trabajar, pero aún hace falta que una persona o un software asigne los tipos de puntada y construya el archivo de puntada real (como un DST o PES).",
      },
      {
        question: "¿Por qué debería evitar el modo Color completo para bordado?",
        answer:
          "El bordado suele funcionar mejor a partir de contornos simples y marcados. El modo Color completo puede introducir más regiones de color de las que resultan prácticas para los cambios de hilo, así que el modo Blanco y Negro suele ser el mejor punto de partida.",
      },
      {
        question: "¿Qué tipo de imagen de origen se digitaliza mejor?",
        answer:
          "Los diseños simples y marcados, con líneas gruesas y pocos detalles pequeños, se digitalizan de forma más limpia; el detalle fino que se ve bien en pantalla a menudo desaparece o se ve borroso al bordarse.",
      },
    ],
    related: [siblingLinks.cricut, siblingLinks.laserCutting, siblingLinks.silhouette],
    relatedHeading: "Casos de uso relacionados",
  },
};
