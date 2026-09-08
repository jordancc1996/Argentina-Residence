import type { ReactNode } from "react";
import EditorialSection from "@/components/EditorialSection";
import { getPageFaqs, type PageFaqItem } from "@/data/pageFaqs";

const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;

export function renderFaqAnswer(answer: string): ReactNode {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  const pattern = new RegExp(linkPattern.source, "g");

  while ((match = pattern.exec(answer)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(answer.slice(lastIndex, match.index));
    }
    nodes.push(
      <a key={`${match.index}-${match[2]}`} href={match[2]} className="text-primary hover:underline">
        {match[1]}
      </a>,
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < answer.length) {
    nodes.push(answer.slice(lastIndex));
  }

  return nodes;
}

interface PageFAQProps {
  path?: string;
  items?: PageFaqItem[];
  /** When false, render without the editorial section wrapper (blog/news article column). */
  wrapped?: boolean;
}

const PageFAQ = ({ path, items, wrapped = true }: PageFAQProps) => {
  const faqs = items ?? (path ? getPageFaqs(path) : []);
  if (faqs.length === 0) return null;

  const body = (
    <div className="text-left">
      <h2 className="font-serif text-xl-editorial mb-8 tracking-wide">
        Frequently Asked Questions
      </h2>
      <dl className="border-t border-border">
        {faqs.map((item) => (
          <div key={item.question} className="border-b border-border py-6">
            <dt>
              <h3 className="font-serif text-lg mb-3 tracking-wide text-foreground">
                {item.question}
              </h3>
            </dt>
            <dd className="text-editorial text-text-secondary tracking-wide leading-relaxed m-0">
              {renderFaqAnswer(item.answer)}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );

  if (!wrapped) return body;

  return <EditorialSection centered={false}>{body}</EditorialSection>;
};

export default PageFAQ;
