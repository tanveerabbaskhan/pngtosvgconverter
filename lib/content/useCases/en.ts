import type { ContentPage } from "../types";

const siblingLinks = {
  cricut: { href: "/use-cases/cricut", label: "PNG to SVG for Cricut" },
  laserCutting: { href: "/use-cases/laser-cutting", label: "PNG to SVG for Laser Cutting" },
  silhouette: {
    href: "/use-cases/silhouette-vinyl-cutting",
    label: "PNG to SVG for Silhouette",
  },
  embroidery: {
    href: "/use-cases/embroidery-digitizing",
    label: "PNG to SVG for Embroidery",
  },
};

export const useCases: Record<string, ContentPage> = {
  cricut: {
    slug: "use-cases/cricut",
    keyword: "png to svg for cricut",
    title: "How to Convert PNG to SVG for Cricut",
    metaDescription:
      "Convert a PNG design into a cut-ready SVG for Cricut Design Space. Step-by-step settings, a mini project walkthrough, and troubleshooting tips.",
    h1: "How to Convert PNG to SVG for Cricut",
    intro:
      "Cricut Design Space works with cut paths, not pixels — so before your Cricut machine can cut a PNG design, it needs to become an SVG with real vector nodes Design Space can read directly.",
    breadcrumbLabel: "Cricut",
    sections: [
      {
        heading: "Why Cricut Needs SVG, Not PNG",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Design Space can technically import a PNG, but it only has two things it can do with a flat raster image: use it as a Print Then Cut project, where the machine prints the design on your home printer and the blade simply cuts a border around it, or hand it to Design Space's built-in image trace tool so you can manually click around the outline yourself. Neither of those gives you a true cut path automatically. An SVG already contains real vector path data — closed shapes with defined nodes and curves — so Design Space reads those paths directly as cut lines the moment you upload it, with no manual tracing and no Print Then Cut ink required.",
              "This distinction also matters once the design is inside Design Space. Vector layers imported from an SVG respond properly to Ungroup, Slice, and Weld — the tools you'd use to separate colors, cut a stencil bridge, or combine two shapes into one path. A flattened PNG can't be ungrouped into anything, because it was never made of separate paths to begin with. If you want the deeper technical reason a browser or app treats these two formats so differently, [PNG vs SVG, explained simply](/guides/png-vs-svg) walks through the pixel-grid-versus-path distinction in plain language.",
            ],
          },
        ],
      },
      {
        heading: "Before You Start: A Quick Checklist",
        blocks: [
          {
            kind: "list",
            intro: "A few minutes of prep before you convert saves a lot of cleanup after import:",
            items: [
              "Confirm your source file is a single design — not a screenshot with browser chrome, a watermark, or a stray white rectangle behind the artwork.",
              "Check contrast between the design and its background. Tracers (this one included) separate shapes based on tone and color, so a design that already reads clearly against its background will convert far more cleanly than a low-contrast photo.",
              "Decide up front whether the project needs one cut color or several. That single decision determines whether you'll use Black & White or Full Color mode later, so it's worth settling before you touch any settings.",
              "If you're converting a logo for a decal or patch, simplify it first where you can — [turning a logo into a clean SVG](/guides/convert-logo-to-svg) covers how to prep text-heavy or detailed logo art specifically.",
              "Have your material and blade on hand before you import. Fine Point suits most vinyl and cardstock, Deep Point handles thicker or more intricate cuts, and Rotary is for fabric — knowing which one you're using tells you how much fine detail is actually worth keeping.",
              "Budget a few minutes after import for node cleanup inside Design Space. Even a well-traced SVG occasionally needs a stray anchor point nudged or a tiny fragment deleted before it's truly cut-ready.",
            ],
          },
        ],
      },
      {
        heading: "Step-by-Step: PNG to Cricut-Ready SVG",
        blocks: [
          {
            kind: "steps",
            steps: [
              {
                title: "Upload your PNG",
                body: "Drag your design into the [free PNG to SVG converter](/) — a PNG with a transparent background works best for cut projects, since it keeps the trace focused on your artwork instead of the canvas around it.",
              },
              {
                title: "Choose your settings",
                body: "Use Black & White mode for a single clean cut path (right for most vinyl and paper projects), or Full Color mode if you're building a layered, multi-color design where each color needs its own path. Keep the transparent background toggle on so only your design cuts, not the background, and adjust the detail level based on how intricate the artwork is — lower for bold, simple shapes; higher for fine linework you want preserved.",
              },
              {
                title: "Import into Cricut Design Space",
                body: "Download the SVG, then in Design Space choose Upload > Upload Image, select your SVG, and save it to your library. It appears as a fully vector, cut-ready file — resize it, recolor layers, weld it to other shapes, or combine it with library images exactly like any other Design Space asset.",
              },
            ],
          },
        ],
      },
      {
        heading: "Recommended Settings by Project Type",
        blocks: [
          {
            kind: "table",
            headers: ["Project Type", "Mode", "Detail Level", "Why"],
            rows: [
              [
                "Single-color sticker or decal",
                "Black & White",
                "Low–Medium",
                "One continuous cut path with clean edges; low detail avoids jagged micro-curves",
              ],
              [
                "Layered vinyl design",
                "Full Color",
                "Medium, few colors",
                "Each color becomes its own layer — fewer colors means fewer paths to weed and align",
              ],
              [
                "Mandala or fine-line illustration",
                "Black & White",
                "Medium–High",
                "More nodes preserve thin interior lines, at the cost of a slower, more delicate cut",
              ],
              [
                "Text or lettering decal",
                "Black & White",
                "Low",
                "Simple shapes cut cleanly even at low detail and keep serifs sharp rather than rounded",
              ],
            ],
          },
        ],
      },
      {
        heading: "Mini Project: A Single-Color Vinyl Decal",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Start with a high-contrast PNG (dark design on a light or transparent background) — silhouette-style artwork with solid shapes works especially well for a first project.",
              "Trace it in Black & White mode with detail set low-to-medium so edges stay clean rather than jagged; a transparent background keeps the cut path limited to the design itself.",
              "Import the SVG into Design Space and resize it to fit your project using the Canvas panel's exact measurements rather than eyeballing it — vinyl decals are unforgiving of small scale mistakes.",
              "Load your material into the mat, select the matching material setting in Design Space (or set the Smart Dial if your machine has one), and attach the correct blade — Fine Point for standard adhesive vinyl.",
              "Cut, then weed the excess vinyl away from the design using a weeding hook, working from the largest scraps to the smallest interior details.",
              "Apply transfer tape over the weeded design, burnish it down, and move the decal to its final surface before slowly peeling the tape away at a low angle.",
            ],
          },
        ],
      },
      {
        heading: "Material and Blade Compatibility Notes",
        blocks: [
          {
            kind: "table",
            headers: ["Material", "Recommended Blade", "Notes"],
            rows: [
              [
                "Adhesive vinyl / permanent vinyl",
                "Fine Point",
                "The default choice for most decals; works well straight out of the box",
              ],
              [
                "Iron-on (HTV)",
                "Fine Point",
                "Remember to mirror the design in Design Space before cutting, since HTV cuts on the back of the material",
              ],
              [
                "Cardstock / paper",
                "Fine Point",
                "Lower cut pressure than vinyl; watch for tearing on very fine detail",
              ],
              [
                "Chipboard / thin balsa wood",
                "Deep Point or Knife Blade",
                "Needs multiple passes on most machines; keep traced detail simple to reduce cut time",
              ],
              [
                "Fabric (with fusible stabilizer)",
                "Rotary Blade",
                "Simplify curves before cutting — the rotary blade struggles with very sharp interior corners",
              ],
            ],
          },
        ],
      },
      {
        heading: "Troubleshooting Common Issues",
        blocks: [
          {
            kind: "list",
            items: [
              "Extra tiny shapes after import: this usually means the source PNG had background noise or JPEG-style compression artifacts around the edges — increase the detail/smoothing setting, or clean up the source image, before re-exporting.",
              "Design Space shows disconnected pieces you didn't expect: for a single-color cut, make sure you used Black & White mode rather than Full Color, which intentionally creates a separate path per color region.",
              "Cut lines look rounded when you wanted sharp corners: lower the smoothing setting so paths hug the original pixel edges more closely instead of averaging them into curves.",
              "The whole design cuts as one solid block instead of showing detail: this usually points to low contrast in the source PNG — the tracer couldn't distinguish the design from its background, so check that the artwork stands out clearly in tone before converting.",
              "Design Space seems slow or laggy after import: an SVG with an unusually high node count (from a very high detail setting on an intricate image) can bog down Design Space's canvas — re-convert at a lower detail level if the artwork doesn't need every fine curve.",
              "You're also cutting on a Silhouette machine and want the same artwork there: the same converted SVG works for both — see [PNG to SVG for Silhouette](/use-cases/silhouette-vinyl-cutting) for Cameo-specific blade and settings guidance.",
            ],
          },
        ],
      },
    ],
    howTo: {
      name: "Convert PNG to SVG for Cricut",
      steps: [
        {
          name: "Upload your PNG",
          text: "Drag your design into the PNG to SVG converter — a transparent background works best for cut projects.",
        },
        {
          name: "Choose your settings",
          text: "Select Black & White or Full Color mode, keep the background transparent, and set detail to match your artwork's complexity.",
        },
        {
          name: "Import into Cricut Design Space",
          text: "Download the SVG and upload it in Design Space via Upload > Upload Image, then use it like any other cut-ready file.",
        },
      ],
    },
    faqs: [
      {
        question: "Does Cricut Design Space accept SVG files?",
        answer:
          "Yes — Design Space accepts SVG alongside PNG, JPG, GIF, BMP, and DXF, but SVG is the one that preserves real cut lines on import. Use Upload > Upload Image, select your file, and it's added to your library as a vector asset rather than a flat picture.",
      },
      {
        question: "Should I use Black & White or Full Color mode for Cricut?",
        answer:
          "Black & White mode is right for most single-material vinyl or paper cuts, since it produces one clean continuous path. Use Full Color mode only if you're intentionally building a multi-layer, multi-color design where each color needs to be cut from a different sheet of material.",
      },
      {
        question: "Why does my SVG have a background rectangle I don't want cut?",
        answer:
          "Make sure the transparent background toggle was enabled before converting — otherwise the tool treats the background as an opaque color and traces it as a shape, which shows up in Design Space as an unwanted rectangle behind your design.",
      },
      {
        question: "Should I use a Fine Point, Deep Point, or Rotary blade for my project?",
        answer:
          "Fine Point is the standard blade for most adhesive vinyl, iron-on, and cardstock projects. Deep Point is better for thicker or more textured materials like chipboard. Rotary is designed specifically for fabric and can cut without a stiff backing stabilizer in many cases.",
      },
      {
        question: "What's the difference between Print Then Cut and importing a converted SVG?",
        answer:
          "Print Then Cut prints your design as a flat image on your home printer and only cuts a simple outline around it using registration marks — the interior detail is ink, not a cut path. A converted SVG gives Design Space real vector cut lines throughout the design, so the blade follows the actual shape rather than just its border.",
      },
      {
        question: "Can I resize my imported SVG without losing quality?",
        answer:
          "Yes — that's one of the main advantages of vector artwork. Because the file is made of mathematical paths rather than a pixel grid, you can scale it up or down freely in Design Space without introducing blur or jagged edges the way you would with a resized raster image.",
      },
      {
        question: "Why did my design import as several separate layers I didn't expect?",
        answer:
          "This happens when Full Color mode is used on artwork with more color variation than intended — antialiasing or slight color drift in the source PNG can get split into extra layers. Try Black & White mode for a single-path result, or lower the color count if you want to keep some color separation but with fewer layers.",
      },
      {
        question: "Is there a size or complexity limit for SVGs in Design Space?",
        answer:
          "Design Space doesn't publish a hard node limit, but extremely complex, high-node-count files can slow the app down and take noticeably longer to cut. If a design feels sluggish after import, re-convert the original PNG at a lower detail setting rather than trying to simplify hundreds of nodes by hand.",
      },
      {
        question: "Can I combine a converted SVG with images from the Cricut Design Space library?",
        answer:
          "Yes — once your PNG is converted and imported, it behaves like any other vector asset in your library. You can layer it with Design Space's built-in images and fonts, weld shapes together, or use Slice to cut one design with another.",
      },
    ],
    related: [siblingLinks.laserCutting, siblingLinks.silhouette, siblingLinks.embroidery],
    relatedHeading: "Related Use Cases",
  },

  "laser-cutting": {
    slug: "use-cases/laser-cutting",
    keyword: "png to svg for laser cutting",
    title: "How to Convert PNG to SVG for Laser Cutting",
    metaDescription:
      "Turn PNG artwork into a clean SVG cut path for laser cutting software. Settings guidance, a mini project, and fixes for common laser-cutting import issues.",
    h1: "How to Convert PNG to SVG for Laser Cutting",
    intro:
      "Laser cutters and engravers follow vector paths, not pixel grids — converting your artwork to SVG first is what turns a picture into a set of instructions the laser head can actually move along.",
    breadcrumbLabel: "Laser Cutting",
    sections: [
      {
        heading: "Why Laser Cutters Need SVG, Not PNG",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Laser cutting and engraving software — LightBurn, LaserGRBL, Glowforge's app, xTool Creative Space, and most machine-specific tools — reads vector paths to know precisely where the laser head should travel and where the beam should fire. A PNG has no path information at all; every pixel is just a color value with no notion of an edge or a line to follow. The software can still use a PNG for raster engraving, where the laser scans line by line to shade an image, but that's fundamentally different from cutting or vector-engraving along a defined outline.",
              "That difference matters because most projects mix both: a photo or texture that should be engraved as a raster, and an outline that should be cut all the way through. Getting the outline into a real vector format is what lets your software tell those two jobs apart and assign different power and speed settings to each. For a broader look at why software treats these two image types so differently in the first place, see [how image tracing actually works](/guides/how-image-tracing-works).",
            ],
          },
        ],
      },
      {
        heading: "Before You Start: A Quick Checklist",
        blocks: [
          {
            kind: "list",
            intro: "A little prep before conversion avoids most of the rework later:",
            items: [
              "Know your material and its thickness before you finalize the design — cut settings and even how much fine detail is practical depend heavily on both.",
              "Start from high-contrast source art. A laser cares about a clean, unambiguous outline far more than it cares about color, so simplify photographic or gradient-heavy PNGs before tracing.",
              "Decide which parts of the design are cuts and which are engraves before you convert, so you know whether you need one simple path or several separated shapes.",
              "Check your software's unit settings (mm vs. inches vs. px) before importing — a correctly traced SVG can still cut at the wrong physical size if the import units don't match your expectations.",
              "If you're new to vector formats generally, [raster vs. vector, explained](/guides/raster-vs-vector) is worth a quick read before you start converting production files.",
            ],
          },
        ],
      },
      {
        heading: "Step-by-Step: PNG to Laser-Ready SVG",
        blocks: [
          {
            kind: "steps",
            steps: [
              {
                title: "Upload your PNG",
                body: "Bring your artwork into the [PNG to SVG converter](/) — clean, high-contrast source art with a clear outline gives the cleanest, most efficient cut lines.",
              },
              {
                title: "Choose your settings",
                body: "Black & White mode is typically what you want for a cut outline, since laser software generally reads paths rather than fill colors. Increase detail for intricate designs where fine curves matter, or reduce it for a simpler path that cuts faster and puts less strain on the machine.",
              },
              {
                title: "Import into your laser software",
                body: "Download the SVG and import it into LightBurn, LaserGRBL, or your machine's software, then assign cut vs. engrave settings to the appropriate layers or line colors before running a job.",
              },
            ],
          },
        ],
      },
      {
        heading: "Recommended Settings by Material",
        blocks: [
          {
            kind: "table",
            headers: ["Material", "Mode", "Detail Level", "Notes"],
            rows: [
              [
                "Thin plywood / MDF (cut outline)",
                "Black & White",
                "Low–Medium",
                "Simpler paths cut faster and reduce the risk of charring along slow, detailed curves",
              ],
              [
                "Acrylic (cut outline)",
                "Black & White",
                "Low–Medium",
                "Acrylic melts at edges under slow, complex cuts — favor fewer nodes and smoother curves",
              ],
              [
                "Cardboard / chipboard prototypes",
                "Black & White",
                "Low",
                "Fast iteration matters more than fine detail at the prototyping stage",
              ],
              [
                "Leather or fabric (cut outline)",
                "Black & White",
                "Medium",
                "Slightly higher detail preserves curved edges common in leather goods patterns",
              ],
              [
                "Engraved artwork or photo layer",
                "Full Color, if using color to separate regions",
                "Medium",
                "Vector conversion is for the cut outline only — engraving detail usually comes from the raster image itself, not the trace",
              ],
            ],
          },
        ],
      },
      {
        heading: "Mini Project: A Laser-Cut Wooden Sign",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Start with a high-contrast PNG of your text or design (dark on light, or vice versa) — a clean silhouette shape is easiest to work with for a first sign.",
              "Trace it in Black & White mode, keeping detail moderate so curves stay smooth without excessive tiny nodes that slow the laser down and increase the risk of scorched edges.",
              "Import into your laser software, scale it to your material size using real-world units, and separate any interior cutouts (like letter counters in an 'O' or 'A') onto their own layer if your software needs that distinction.",
              "Assign a cut layer to the outline and, if you want lettering that's engraved rather than cut all the way through, assign a separate engrave layer with lower power and higher speed.",
              "Run a test cut on scrap material of the same type and thickness at low power first to confirm the path, speed, and focus settings before committing to your final piece.",
              "Once dialed in, cut the final sign, then lightly sand cut edges if the material shows any char from the beam.",
            ],
          },
        ],
      },
      {
        heading: "Software Compatibility Notes",
        blocks: [
          {
            kind: "list",
            items: [
              "LightBurn: imports SVG directly and lets you assign cut, engrave, or fill behavior per layer based on stroke color — one of the most common ways to organize a multi-operation job.",
              "LaserGRBL: accepts vector files but is primarily built around raster engraving; for cut jobs, many users still convert through LightBurn or a CAM step first.",
              "Glowforge app: accepts SVG, PNG, JPG, and PDF through its browser-based interface, and automatically treats vector shapes as cut/score lines versus raster fills as engraves.",
              "xTool Creative Space and similar bundled apps: generally support SVG import with per-layer power and speed assignment, similar in spirit to LightBurn.",
              "Inkscape with a G-code extension: a common free-software route for hobbyists, using Inkscape purely to organize and export vector paths that a separate sender program then runs.",
            ],
          },
        ],
      },
      {
        heading: "Understanding Kerf and Cut Line Placement",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "A laser beam isn't infinitely thin — it removes a small width of material as it cuts, known as kerf, typically somewhere around 0.1–0.3mm depending on the machine, power, and material. Kerf usually isn't something you need to bake into the traced SVG itself, but it does explain why two parts meant to fit together snugly (like a box joint) sometimes come out slightly loose after cutting: the beam removed a sliver of material along every cut line. Most laser software includes a kerf offset setting for exactly this reason, applied at cut time rather than in the artwork.",
              "In LightBurn and similar programs, stroke color is typically what tells the software which operation to run on a given path — for example, pure red strokes might mean 'cut' while blue means 'engrave' and black means 'score.' If you plan to assign different operations to different parts of your design, it's worth keeping that in mind when preparing your source artwork, since the trace preserves whatever regions and shapes were distinguishable in the original PNG.",
            ],
          },
        ],
      },
      {
        heading: "Troubleshooting Common Issues",
        blocks: [
          {
            kind: "list",
            items: [
              "Path has too many tiny segments, slowing the laser down: increase the smoothing/detail setting before exporting so the trace uses fewer, longer curves instead of many short ones.",
              "Interior holes aren't cutting out correctly: check that your source PNG had clear, closed interior shapes — noisy or antialiased edges around small holes can confuse the trace into merging or dropping them.",
              "Design looks mirrored or rotated after import: this is almost always a software import setting in your laser program rather than the SVG itself — check its orientation and origin options.",
              "The laser scorches or chars along slow curves: this is often a sign the path has more detail (and therefore more direction changes) than the material and power setting can handle cleanly — simplify the trace or adjust speed and power for that specific material.",
              "Two parts that should fit together are too tight or too loose: this is a kerf issue, not a tracing issue — adjust your laser software's kerf offset rather than re-converting the artwork.",
              "Cut only partially goes through the material: this points to power, speed, or focus settings on the laser itself rather than anything in the SVG — a properly closed vector path will still fail to fully cut if the beam settings are wrong for that material's thickness.",
            ],
          },
        ],
      },
    ],
    howTo: {
      name: "Convert PNG to SVG for Laser Cutting",
      steps: [
        {
          name: "Upload your PNG",
          text: "Bring your artwork into the PNG to SVG converter — high-contrast source art gives the cleanest cut lines.",
        },
        {
          name: "Choose your settings",
          text: "Use Black & White mode and adjust detail to match your design's complexity and your material's tolerance for fine detail.",
        },
        {
          name: "Import into your laser software",
          text: "Download the SVG and import it into LightBurn, LaserGRBL, or similar, then assign cut and engrave operations to the right layers.",
        },
      ],
    },
    faqs: [
      {
        question: "What laser software accepts SVG files?",
        answer:
          "Most laser cutting software — including LightBurn, the Glowforge app, xTool Creative Space, and Inkscape-based G-code workflows — imports SVG directly as vector cut paths. LaserGRBL supports vector import too, though it's more commonly used for raster engraving.",
      },
      {
        question: "Should the SVG have a fill or just an outline?",
        answer:
          "For cutting, only the path outline matters — fill color is generally ignored by laser software when determining the cut line itself, though many programs use stroke or fill color to decide which operation (cut, engrave, score) to apply to a given layer.",
      },
      {
        question: "Can I laser-engrave a photo instead of cutting it?",
        answer:
          "Yes, but engraving a photo typically uses the raster image directly, scanned line by line, rather than a vector trace. Vector conversion is specifically useful for cut paths and clean line art, not photographic shading.",
      },
      {
        question: "How do I tell my laser software which lines to cut versus engrave?",
        answer:
          "Most programs, LightBurn especially, use layer or stroke color to separate operations — for example, one color might be mapped to a fast, low-power engrave pass and another to a slower, higher-power cut pass. Organize your source artwork with this in mind if your project needs both.",
      },
      {
        question: "Does the converted SVG account for kerf?",
        answer:
          "No — kerf, the small width of material the beam removes, is handled by your laser software at cut time (often as a kerf offset setting), not by the vector file itself. If interlocking parts fit too tightly or loosely, adjust that setting rather than re-tracing the artwork.",
      },
      {
        question: "What materials should I avoid feeding into a laser cutter?",
        answer:
          "PVC and vinyl release chlorine gas when cut, which is both hazardous and corrosive to the machine; other materials like ABS and polystyrene foam also cut poorly or unsafely. This is a laser safety consideration independent of file format, but worth knowing before you plan a cut project around a given material.",
      },
      {
        question: "What resolution or size should my source PNG be for the cleanest laser path?",
        answer:
          "A reasonably high-resolution, high-contrast source image — sharp edges rather than a blurry or heavily compressed photo — produces the cleanest trace. Exact pixel dimensions matter less than clarity of the outline, since the vector path is ultimately scaled to your real-world cut size in the laser software anyway.",
      },
      {
        question: "Can I laser cut directly from a PNG without converting it?",
        answer:
          "Not for cutting — laser software needs vector path data to know where to cut, and a PNG doesn't contain that. You can use a PNG for raster engraving, but a true cut job needs an SVG or similar vector format first.",
      },
      {
        question: "Why does my design cut at the wrong size even though the SVG looks correct?",
        answer:
          "This is almost always a units mismatch on import — your laser software may be interpreting the file in millimeters when you intended inches, or vice versa. Check the import or job size settings in your specific laser program rather than re-converting the file.",
      },
    ],
    related: [siblingLinks.cricut, siblingLinks.silhouette, siblingLinks.embroidery],
    relatedHeading: "Related Use Cases",
  },

  "silhouette-vinyl-cutting": {
    slug: "use-cases/silhouette-vinyl-cutting",
    keyword: "png to svg for silhouette",
    title: "How to Convert PNG to SVG for Silhouette",
    metaDescription:
      "Prepare a PNG design as an SVG for Silhouette Studio and vinyl cutting. Settings guidance, a decal project walkthrough, and troubleshooting tips.",
    h1: "How to Convert PNG to SVG for Silhouette",
    intro:
      "Silhouette Studio cuts along vector paths, so a PNG design needs to become an SVG before your Cameo, Portrait, or Curio can cut vinyl, cardstock, or fabric from it.",
    breadcrumbLabel: "Silhouette",
    sections: [
      {
        heading: "Why Silhouette Studio Needs SVG, Not PNG",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Silhouette Studio's core function is following cut lines — vector paths that tell the blade exactly where to move on the mat. A PNG has no such path data, so importing one directly only gives you a printable, draggable image, not a cuttable design, unless you trace it manually inside Studio itself using the Trace panel — a feature that requires the paid Designer Edition upgrade to use freely. Converting to SVG beforehand sidesteps that entirely: you get cut-ready paths in Silhouette Studio Basic, the free version that ships with every Cameo, Portrait, and Curio.",
              "This also affects what you can do with the design once it's on the mat. A traced or converted SVG behaves like native Studio artwork — you can use Offset to add a border, Modify > Weld to merge shapes, or Release Compound Path to separate a Full Color trace into individually selectable regions. A flattened PNG image sitting on the canvas can't be touched by any of these path-editing tools, since it has no path structure to edit in the first place. [How image tracing actually works](/guides/how-image-tracing-works) goes deeper into what separates a real vector trace from simply displaying a picture.",
            ],
          },
        ],
      },
      {
        heading: "Before You Start: A Quick Checklist",
        blocks: [
          {
            kind: "list",
            intro: "Set yourself up before you convert, and Silhouette Studio import goes smoothly:",
            items: [
              "Know which Silhouette machine you're using — Cameo, Portrait, and Curio all read the same SVG files, but blade depth and cutting mat size vary between them.",
              "Choose a source PNG with a transparent or clearly distinguishable background so the trace doesn't pick up unwanted background shapes.",
              "Decide whether this is a single-color cut or a multi-layer design before converting — it determines Black & White vs. Full Color mode and saves you from re-converting later.",
              "If your project is Print & Cut (printing the design first, then cutting around it), remember that workflow needs registration marks added inside Silhouette Studio itself — the SVG conversion step doesn't add those.",
              "Have your vinyl type and blade depth settings ready. Adhesive vinyl, permanent outdoor vinyl, and heat transfer vinyl (HTV) all cut best at slightly different blade depth and force settings on a Cameo.",
            ],
          },
        ],
      },
      {
        heading: "Step-by-Step: PNG to Silhouette-Ready SVG",
        blocks: [
          {
            kind: "steps",
            steps: [
              {
                title: "Upload your PNG",
                body: "Add your design to the [browser-based PNG to SVG converter](/) — a transparent background keeps the cut path limited to your artwork rather than including the canvas around it.",
              },
              {
                title: "Choose your settings",
                body: "Black & White mode works well for most single-layer vinyl decals, producing one clean path; Full Color mode suits multi-layer designs where each distinct color becomes its own cut layer, with the color count setting controlling how many separate regions you get.",
              },
              {
                title: "Import into Silhouette Studio",
                body: "Download the SVG and use File > Open or File > Import in Silhouette Studio — it loads as fully editable, cuttable vector paths, ready to resize, recolor, or combine with other cut lines on your workspace.",
              },
            ],
          },
        ],
      },
      {
        heading: "Recommended Settings by Project Type",
        blocks: [
          {
            kind: "table",
            headers: ["Project Type", "Mode", "Detail Level", "Notes"],
            rows: [
              [
                "Single-color adhesive vinyl decal",
                "Black & White",
                "Low–Medium",
                "One clean path is easiest to weed and apply",
              ],
              [
                "Multi-layer vinyl design",
                "Full Color",
                "Medium, low color count",
                "Match color count to the number of vinyl colors you actually plan to cut",
              ],
              [
                "Stencil with bridges",
                "Black & White",
                "Low",
                "Simpler shapes make it easier to manually add bridges afterward in Studio",
              ],
              [
                "Fine detail cardstock design",
                "Black & White",
                "Medium–High",
                "Higher detail preserves delicate cut lines, but expect a slower, more careful cut",
              ],
            ],
          },
        ],
      },
      {
        heading: "Mini Project: A Layered Vinyl Decal",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Choose a PNG design with a small number of distinct colors for a clean multi-layer result — three or four colors is a manageable starting point.",
              "Trace it in Full Color mode, setting the color count to match the number of vinyl colors you plan to use, so each intended color becomes exactly one layer.",
              "Import into Silhouette Studio, and use Release Compound Path or the software's color-separation tools if you need to isolate each layer for cutting from different vinyl sheets.",
              "Set blade depth and cutting force to match your vinyl type in the Send panel — lighter force for standard adhesive vinyl, slightly more for permanent or textured vinyl.",
              "Cut each color layer separately from its own sheet of vinyl, weeding the excess from each before moving to the next.",
              "Layer the pieces together using transfer tape, aligning each color in order before applying the finished decal to its final surface.",
            ],
          },
        ],
      },
      {
        heading: "Machine and Material Compatibility Notes",
        blocks: [
          {
            kind: "list",
            items: [
              "Silhouette Studio Basic (free): opens and cuts converted SVGs with no restriction — the paid Designer Edition upgrade is only needed for the software's own internal image-tracing feature, not for importing already-vectorized files.",
              "Cameo (3/4/5): the standard machine for vinyl, cardstock, and light fabric work, with adjustable blade depth and cutting force to match material thickness.",
              "Portrait: a narrower-format machine aimed at similar materials to the Cameo, useful for smaller decals and cardstock projects.",
              "Curio: designed for cutting, embossing, and etching on rigid or specialty materials rather than long rolls of vinyl — the same SVG workflow applies, but material settings differ substantially.",
              "Heat transfer vinyl (HTV): remember to mirror your design before cutting, since HTV is cut from the back (the plastic-backing side faces up on the mat) so it applies correctly with a heat press.",
            ],
          },
        ],
      },
      {
        heading: "Troubleshooting Common Issues",
        blocks: [
          {
            kind: "list",
            items: [
              "Design imports with jagged edges: increase the smoothing/detail setting before downloading so curves are approximated more smoothly rather than as short, angular segments.",
              "Too many separate cut paths: reduce the color count in Full Color mode, or switch to Black & White mode entirely if you only need a single-color cut.",
              "Small stray dots appear near the design: these are usually leftover noise from the source PNG, often from JPEG-style compression artifacts — a cleaner, higher-quality source image avoids this.",
              "Imported design shows as one solid rectangle: check that the transparent background toggle was on during conversion — otherwise the background was traced as an opaque shape along with your design.",
              "Blade drags or tears delicate cut lines: this is typically a blade depth or cutting force setting mismatched to your material rather than an issue with the SVG itself — run a test cut on a scrap piece first.",
              "You also want to cut the same artwork on a Cricut: the same converted SVG imports fine there too — see [PNG to SVG for Cricut](/use-cases/cricut) for Design Space-specific blade and material notes.",
            ],
          },
        ],
      },
    ],
    howTo: {
      name: "Convert PNG to SVG for Silhouette",
      steps: [
        {
          name: "Upload your PNG",
          text: "Add your design to the PNG to SVG converter — a transparent background keeps the trace focused on the artwork.",
        },
        {
          name: "Choose your settings",
          text: "Select Black & White or Full Color mode depending on whether your project needs one path or several layered colors.",
        },
        {
          name: "Import into Silhouette Studio",
          text: "Download the SVG and open it in Silhouette Studio via File > Open or Import as a fully editable, cuttable path.",
        },
      ],
    },
    faqs: [
      {
        question: "Do I need Silhouette Studio's paid version to use an SVG?",
        answer:
          "No — importing an already-vectorized SVG works fine in the free Basic version of Silhouette Studio. The Designer Edition upgrade is mainly needed if you want to trace raster images inside the app itself, using its built-in Trace feature.",
      },
      {
        question: "What's the best mode for a single-color vinyl decal?",
        answer:
          "Black & White mode, since it produces one clean continuous path rather than separate layers per color — the simplest and cleanest result for a one-material cut.",
      },
      {
        question: "Can Silhouette Studio edit the SVG after I import it?",
        answer:
          "Yes — once imported, the design is made of real editable paths, so you can resize, reshape, weld it with other shapes, or add offsets and bridges directly inside Silhouette Studio.",
      },
      {
        question: "What blade depth should I use for my material?",
        answer:
          "Blade depth depends heavily on material thickness and type — adhesive vinyl needs a shallow setting, while cardstock or thicker specialty media needs more. Silhouette Studio's Send panel typically offers material presets as a starting point; running a test cut on scrap is the safest way to confirm the setting.",
      },
      {
        question: "Do I need registration marks to import a converted SVG?",
        answer:
          "No — registration marks are only needed for Print & Cut projects, where you print the design first and the machine reads printed marks to align its cut. A straightforward vector cut from a converted SVG doesn't need them.",
      },
      {
        question: "Which Silhouette machines support SVG import?",
        answer:
          "All current Silhouette machines — Cameo, Portrait, and Curio — use the same Silhouette Studio software, and SVG import works identically across all of them; only blade depth, cutting force, and mat size differ between models.",
      },
      {
        question: "Can I separate colors after importing a Full Color SVG?",
        answer:
          "Yes — use Release Compound Path or the software's ungroup tools to split a multi-color trace into individually selectable regions, which you can then assign to different cuts or vinyl sheets.",
      },
      {
        question: "Why does my imported design show as one big rectangle?",
        answer:
          "This means the transparent background toggle wasn't enabled before conversion, so the tool traced the background as a solid opaque shape along with your design — re-convert with that toggle on.",
      },
      {
        question: "Can I use a converted SVG for stencil, sketch, or emboss projects, not just cutting?",
        answer:
          "Yes — because the file is a genuine vector path once imported, it works the same way for Silhouette's Sketch (pen) tool, stencil cutting, and Curio embossing or etching, not just standard blade cutting.",
      },
    ],
    related: [siblingLinks.cricut, siblingLinks.laserCutting, siblingLinks.embroidery],
    relatedHeading: "Related Use Cases",
  },

  "embroidery-digitizing": {
    slug: "use-cases/embroidery-digitizing",
    keyword: "png to svg for embroidery",
    title: "How to Convert PNG to SVG for Embroidery Digitizing",
    metaDescription:
      "Convert a PNG logo into a clean SVG outline for embroidery digitizing software. Step-by-step settings, a project walkthrough, and troubleshooting.",
    h1: "How to Convert PNG to SVG for Embroidery Digitizing",
    intro:
      "Embroidery digitizing software builds stitch paths from vector outlines, not raster pixels — converting a PNG logo to SVG first gives digitizers a clean shape to build satin, fill, and running stitches from.",
    breadcrumbLabel: "Embroidery",
    sections: [
      {
        heading: "Why Embroidery Digitizing Needs SVG, Not PNG",
        blocks: [
          {
            kind: "paragraph",
            body: [
              "Digitizing software — Wilcom, Hatch, Embrilliance, or the free Ink/Stitch extension for Inkscape — converts a design into a sequence of stitch instructions that ultimately gets saved as a machine format like DST, PES, EXP, JEF, or VP3. That process starts from clean, closed vector regions, since each region typically becomes one area of stitching with its own stitch type. A PNG has no such region data; it's just a grid of colored pixels, so feeding one directly into most digitizing workflows means a human has to manually trace the outline by eye before any stitch planning can begin.",
              "Starting from an already-converted SVG skips that manual outlining step. The digitizer (or auto-digitizing software) can select existing closed shapes and immediately assign stitch types and sequencing, rather than reconstructing the outline from scratch. It's still a separate step from finished embroidery — no vector file becomes a stitch file automatically — but it removes the slowest, most tedious part of manual digitizing prep. For background on how a trace produces those clean regions in the first place, see [how image tracing actually works](/guides/how-image-tracing-works).",
            ],
          },
        ],
      },
      {
        heading: "Before You Start: A Quick Checklist",
        blocks: [
          {
            kind: "list",
            intro: "Embroidery is unforgiving of fine detail, so preparation matters more here than almost anywhere else:",
            items: [
              "Simplify your logo before converting if it has fine gradients, thin script fonts, or small enclosed details — [turning a logo into a clean SVG](/guides/convert-logo-to-svg) covers exactly this kind of simplification.",
              "Know your finished embroidery size before you start. A design that looks fine at 6 inches on screen can lose all its detail stitched at 2 inches — decide on final size early, since it affects how much detail is worth keeping.",
              "Think about hoop size and fabric type up front. A stretchy knit fabric needs a different stabilizer approach than a stable woven fabric, and that can influence how bold you make thin design elements.",
              "Decide how many thread colors the project realistically needs — every color usually means a thread change, so fewer, deliberate colors keep both digitizing and stitching simpler.",
              "If any part of the design will be appliqué (fabric cut to shape and stitched down rather than fully filled with thread), plan for that region to be a distinct, clearly closed shape in the source art.",
            ],
          },
        ],
      },
      {
        heading: "Step-by-Step: PNG to Embroidery-Ready SVG",
        blocks: [
          {
            kind: "steps",
            steps: [
              {
                title: "Upload your PNG",
                body: "Add your logo or design to the [PNG to SVG converter](/) — a simple, high-contrast source design with bold shapes digitizes far more cleanly than fine detail or photographic art.",
              },
              {
                title: "Choose your settings",
                body: "Black & White mode is usually best for embroidery, since stitch paths follow clean outlines rather than photographic detail; keep detail moderate so you get smooth, bold shapes rather than an overly complex path with more nodes than any stitch type can realistically follow.",
              },
              {
                title: "Import into your digitizing software",
                body: "Download the SVG and import it into your digitizing program (Wilcom, Hatch, Embrilliance, or Ink/Stitch) as the base outline, then assign stitch types — satin, fill, or running stitch — and stitch order to each region.",
              },
            ],
          },
        ],
      },
      {
        heading: "Recommended Settings by Design Type",
        blocks: [
          {
            kind: "table",
            headers: ["Design Type", "Mode", "Detail Level", "Notes"],
            rows: [
              [
                "Simple logo or emblem",
                "Black & White",
                "Low–Medium",
                "Bold shapes digitize predictably and stitch out cleanly at small sizes",
              ],
              [
                "Text-only design",
                "Black & White",
                "Low",
                "Simplify thin script fonts first; embroidery holds block lettering far better than fine script",
              ],
              [
                "Mascot or multi-color illustration",
                "Full Color",
                "Medium, low color count",
                "Keep color count close to your realistic thread change count",
              ],
              [
                "Appliqué design",
                "Black & White",
                "Low",
                "Simple, clearly closed shapes are essential since appliqué regions are cut from fabric, not filled with thread",
              ],
            ],
          },
        ],
      },
      {
        heading: "Mini Project: Digitizing a Simple Logo Patch",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Start with a simplified version of your logo — embroidery doesn't hold fine detail well, so bold, simple shapes with thicker lines work best.",
              "Trace it in Black & White mode with detail on the lower end, favoring fewer, smoother paths over pixel-perfect edges that no needle could actually follow anyway.",
              "Import the SVG into your digitizing software and assign stitch types to each outlined region: satin stitch for narrow letters and borders, fill stitch for larger solid areas, and running stitch for fine linework or underlay.",
              "Set stitch density and pull compensation appropriate to your fabric — denser stitching and more compensation for stretchy knits, lighter settings for stable wovens.",
              "Digitize the full sequence, then run a test stitch-out on the same type of scrap fabric and stabilizer you'll use for the final piece.",
              "Check the test piece for puckering, thread breaks, or gaps, adjust density or underlay as needed, and only then commit to your final material.",
            ],
          },
        ],
      },
      {
        heading: "Stitch Types and Software Notes",
        blocks: [
          {
            kind: "list",
            items: [
              "Satin stitch: best for narrow shapes like letters, borders, and thin lines — generally suited to widths up to roughly 10-12mm before it should switch to a fill stitch instead.",
              "Fill stitch (tatami): used for larger solid areas, built from rows of running stitches in a pattern that resists distortion better than a single long satin stitch would at that width.",
              "Running stitch: a simple line stitch, often used for fine detail, underlay, or lightweight outlining where a full satin or fill would be too heavy.",
              "Wilcom and Hatch: professional-grade digitizing suites with the most manual control over stitch types, sequencing, and underlay — the industry standard for commercial digitizing.",
              "Embrilliance: a popular option for small studios and hobbyists, with both manual digitizing tools and semi-automatic assistance.",
              "Ink/Stitch: a free, open-source extension for Inkscape that can work directly with SVG paths, making it a natural fit for a vector file that just came out of a PNG-to-SVG conversion.",
            ],
          },
        ],
      },
      {
        heading: "Troubleshooting Common Issues",
        blocks: [
          {
            kind: "list",
            items: [
              "Outline has too many small details to digitize cleanly: simplify the source PNG or increase the smoothing setting so the trace produces fewer, bolder shapes that map to real stitch regions.",
              "Thin lines disappear or merge: very thin strokes in the source image can vanish during tracing or later get lost under stitch density — thicken them in the source PNG before converting if they're essential to the design.",
              "Colors don't map cleanly to thread colors: use Full Color mode with a lower color count so each region maps more predictably to a single thread color rather than dozens of near-identical shades.",
              "Test stitch-out shows puckering around dense areas: this is usually a stabilizer or density issue on the digitizing side rather than the source artwork — add a firmer stabilizer or reduce stitch density in that region.",
              "Small text becomes an illegible blob when stitched: text below roughly 5-6mm tall rarely embroiders legibly in standard stitch types — enlarge the text or simplify the font before digitizing rather than trying to preserve a small script exactly.",
              "You're preparing the same logo for a cut vinyl version too: the same simplified, converted SVG works well as a starting point — see [PNG to SVG for Cricut](/use-cases/cricut) or [PNG to SVG for Silhouette](/use-cases/silhouette-vinyl-cutting) for the cutting-specific settings.",
            ],
          },
        ],
      },
    ],
    howTo: {
      name: "Convert PNG to SVG for Embroidery Digitizing",
      steps: [
        {
          name: "Upload your PNG",
          text: "Add your logo to the PNG to SVG converter — simplify fine detail first, since embroidery favors bold, clean shapes.",
        },
        {
          name: "Choose your settings",
          text: "Use Black & White mode with moderate detail for clean, digitizable outlines that map well to real stitch types.",
        },
        {
          name: "Import into your digitizing software",
          text: "Download the SVG and use it as the base outline in your digitizing program to assign stitch types and build the final stitch file.",
        },
      ],
    },
    faqs: [
      {
        question: "Does an SVG automatically become an embroidery file?",
        answer:
          "No — an SVG gives digitizing software a clean vector outline to work from, but a person or auto-digitizing tool still needs to assign stitch types, density, and sequencing to actually build a stitch file like a DST or PES.",
      },
      {
        question: "Why should I avoid Full Color mode for embroidery?",
        answer:
          "Embroidery generally works best from simple, bold outlines. Full Color mode can introduce more color regions than are practical for thread changes, so Black & White mode — or Full Color with a deliberately low color count — is usually the better starting point.",
      },
      {
        question: "What kind of source image digitizes best?",
        answer:
          "Bold, simple designs with thick lines and few small details digitize most cleanly — fine detail that looks fine on screen often disappears entirely or looks muddy once it's actually stitched out in thread.",
      },
      {
        question: "What embroidery file formats will my digitizing software export to?",
        answer:
          "Common machine formats include DST (widely supported across brands), PES (Brother), EXP (Melco/Bernina), JEF (Janome), and VP3 (Husqvarna/Pfaff). Your SVG is only the starting outline — the digitizing software converts that outline into one of these machine-specific stitch formats.",
      },
      {
        question: "What's the difference between satin, fill, and running stitch?",
        answer:
          "Satin stitch is a dense zigzag best suited to narrow shapes like letters and borders. Fill (tatami) stitch covers larger solid areas with rows of stitching that resist distortion. Running stitch is a simple single line, often used for fine detail or as underlay beneath other stitch types.",
      },
      {
        question: "How small can text be and still embroider legibly?",
        answer:
          "As a general guideline, text much smaller than about 5-6mm tall tends to lose legibility in standard stitch types, since the needle and thread can't resolve detail finer than that. Simplifying or enlarging small text before digitizing avoids an illegible blob on the finished piece.",
      },
      {
        question: "Do I need a special SVG for appliqué designs?",
        answer:
          "Appliqué needs clearly closed, simple shapes, since that region will be cut from fabric and tacked down rather than filled entirely with stitching. Keep appliqué regions bold and unambiguous when converting, since the digitizer needs a clean outline to place a placement stitch and tack-down line.",
      },
      {
        question: "What stabilizer should I use, and does that affect my digitizing choices?",
        answer:
          "Stabilizer choice depends on fabric stretch and stitch density — stretchy knits typically need a cutaway stabilizer and often benefit from lower stitch density or added underlay, while stable wovens can often use a lighter tear-away stabilizer. This is a digitizing and stitching decision made after your SVG is ready, not something the conversion step handles.",
      },
      {
        question: "Can free digitizing software use my converted SVG directly?",
        answer:
          "Yes — Ink/Stitch, a free open-source extension for Inkscape, works directly with SVG paths, making it a natural next step for a vector file that just came out of a PNG-to-SVG conversion, without needing a paid digitizing suite.",
      },
    ],
    related: [siblingLinks.cricut, siblingLinks.laserCutting, siblingLinks.silhouette],
    relatedHeading: "Related Use Cases",
  },
};
