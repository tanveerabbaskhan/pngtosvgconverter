import type { APIRoute } from 'astro';
import { textFile } from '../lib/site.mjs';

export function getStaticPaths() {
  return [{ params: { file: 'robots' } }, { params: { file: 'llms' } }];
}
export const GET: APIRoute = ({ params }) =>
  new Response(textFile(`${params.file}.txt`), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
