export type FAQItem = {
  question: string;
  answer: string;
};

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  return (
    <div className="divide-y divide-border rounded-xl border border-border bg-surface">
      {items.map((item) => (
        <details key={item.question} className="group p-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-text marker:content-none">
            {item.question}
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              className="h-5 w-5 shrink-0 text-text-muted transition-transform group-open:rotate-180"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.75}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m5 7.5 5 5 5-5"
              />
            </svg>
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-text-muted">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
