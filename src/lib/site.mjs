// Page data: the CommonJS modules in src/data build one model per page (locale, SEO fields, ordered blocks); Astro components render it.
import { createRequire } from 'node:module';
import path from 'node:path';
const require = createRequire(path.join(process.cwd(), 'package.json'));
export const dataModule = (f) => require(path.join(process.cwd(), 'src', 'data', f));

export const collected = dataModule('page-model.js').pages;
export const layoutLib = dataModule('layout.js');
export const S = dataModule('site.js');

/** Map a generated file path to an Astro rest-route param ('' = site root). */
export const routeOf = (file) => file.replace(/(^|\/)index\.html$/, '').replace(/\/$/, '');
export const pageRoutes = collected.filter((p) => p.o && p.file !== '404.html');
export const notFound = collected.find((p) => p.file === '404.html');
export const textFile = (name) => collected.find((p) => p.file === name)?.text ?? '';
