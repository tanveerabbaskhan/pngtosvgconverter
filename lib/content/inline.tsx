import { Fragment, type ReactNode } from "react";
import { Link } from "@/i18n/navigation";

const LINK_PATTERN = /\[([^\]]+)\]\(([^)]+)\)/g;

/**
 * Content bodies author internal links as `[label](/path)` so guides,
 * use-cases, and blog posts can cross-link with descriptive anchors
 * (Section 9 of the brief) without hand-writing JSX per paragraph.
 */
export function renderInline(text: string): ReactNode {
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  LINK_PATTERN.lastIndex = 0;
  while ((match = LINK_PATTERN.exec(text)) !== null) {
    const [full, label, href] = match;
    if (match.index > lastIndex) {
      parts.push(
        <Fragment key={key++}>{text.slice(lastIndex, match.index)}</Fragment>,
      );
    }
    parts.push(
      <Link key={key++} href={href} className="text-brand-600 hover:underline">
        {label}
      </Link>,
    );
    lastIndex = match.index + full.length;
  }
  if (lastIndex < text.length) {
    parts.push(<Fragment key={key++}>{text.slice(lastIndex)}</Fragment>);
  }
  return parts;
}
