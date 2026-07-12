import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Excludes API/internal paths, anything with a file extension (sitemap.xml,
  // robots.txt, ...), and the root-level dynamic icon route — /icon has no
  // extension in its URL, so without this it would be misread as a locale.
  matcher: ["/((?!api|_next|_vercel|icon|.*\\..*).*)"],
};
