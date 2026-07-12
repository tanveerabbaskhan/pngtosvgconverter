import { Link } from "@/i18n/navigation";
import { SchemaScript } from "./SchemaScript";
import { buildBreadcrumbSchema, type BreadcrumbEntry } from "@/lib/seo";
import type { Locale } from "@/i18n/routing";

export function Breadcrumbs({
  items,
  locale,
}: {
  items: BreadcrumbEntry[];
  locale: Locale;
}) {
  return (
    <>
      <SchemaScript schema={buildBreadcrumbSchema(items, locale)} />
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-text-muted">
        <ol className="flex flex-wrap items-center gap-1.5">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.path} className="flex items-center gap-1.5">
                {index > 0 && (
                  <span aria-hidden="true" className="text-border">
                    /
                  </span>
                )}
                {isLast ? (
                  <span aria-current="page" className="font-medium text-text">
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.path} className="hover:text-brand-600">
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
