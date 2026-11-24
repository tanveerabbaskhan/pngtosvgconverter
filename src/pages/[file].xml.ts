import type { APIRoute } from 'astro';
import { textFile } from '../lib/site.mjs';

export function getStaticPaths() {
  return ['sitemap', 'sitemap-index', 'sitemap-pages', 'sitemap-tools'].map((file) => ({ params: { file } }));
}
export const GET: APIRoute = ({ params }) =>
  new Response(textFile(`${params.file}.xml`), { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
