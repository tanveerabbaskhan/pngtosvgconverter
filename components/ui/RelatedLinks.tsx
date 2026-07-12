import { Link } from "@/i18n/navigation";
import { Card } from "./Card";

export type RelatedLink = {
  label: string;
  href: string;
  description?: string;
};

export function RelatedLinks({
  title,
  items,
}: {
  title: string;
  items: RelatedLink[];
}) {
  return (
    <section aria-labelledby="related-links-heading">
      <h2
        id="related-links-heading"
        className="mb-4 text-xl font-semibold text-text"
      >
        {title}
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <Card key={item.href} className="transition-shadow hover:shadow-md">
            <Link
              href={item.href}
              className="font-medium text-brand-600 hover:underline"
            >
              {item.label}
            </Link>
            {item.description && (
              <p className="mt-1.5 text-sm text-text-muted">
                {item.description}
              </p>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
}
