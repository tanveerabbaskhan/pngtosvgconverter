export type Paragraph = { kind: "paragraph"; body: string[] };
export type BulletList = {
  kind: "list";
  ordered?: boolean;
  intro?: string;
  items: string[];
};
export type ComparisonTable = {
  kind: "table";
  headers: string[];
  rows: string[][];
};
export type StepList = {
  kind: "steps";
  steps: { title: string; body: string }[];
};

export type ContentBlock = Paragraph | BulletList | ComparisonTable | StepList;

export type ContentSection = {
  heading: string;
  level?: 2 | 3;
  blocks: ContentBlock[];
};

export type FAQItem = { question: string; answer: string };

export type RelatedLink = { href: string; label: string; description?: string };

export type HowTo = {
  name: string;
  steps: { name: string; text: string }[];
};

export type ContentPage = {
  slug: string;
  keyword: string;
  title: string;
  metaDescription: string;
  h1: string;
  intro?: string;
  sections: ContentSection[];
  faqs?: FAQItem[];
  related: RelatedLink[];
  relatedHeading: string;
  howTo?: HowTo;
  breadcrumbLabel: string;
  publishedAt?: string;
};
