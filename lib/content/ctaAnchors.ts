// Rotating anchor text for links back to the homepage/tool (Section 9):
// never repeat the same anchor across every page. Picked deterministically
// per-slug so a given page's anchor doesn't change between builds.
const ANCHOR_POOL = [
  "try the free PNG to SVG converter",
  "try the tool free",
  "PNGtoSVG",
  "convert your PNG to SVG now",
  "png to svg converter",
] as const;

export function pickCtaAnchor(seed: string): string {
  const sum = Array.from(seed).reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  return ANCHOR_POOL[sum % ANCHOR_POOL.length];
}
