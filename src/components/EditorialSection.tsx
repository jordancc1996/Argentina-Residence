import { Children, isValidElement, useLayoutEffect, useRef, type ReactNode } from "react";
import { motion } from "framer-motion";
import { bindEditorialSection } from "@/lib/editorialDividers";

interface EditorialSectionProps {
  children: ReactNode;
  className?: string;
  centered?: boolean;
  /** Inner max-width. Defaults to max-w-4xl. Use max-w-7xl for wide related-card rows. */
  innerClassName?: string;
  /**
   * Full-width rule when this section follows another.
   * Defaults off when className sets its own top padding.
   */
  divider?: boolean;
}

/** Major in-section rule. EditorialSection places it on the full-width section, not in the text column. */
export const EditorialDivider = ({ className = "" }: { className?: string }) => (
  <div className={`editorial-divider ${className}`} data-editorial-line="" aria-hidden="true">
    <span className="editorial-line-bar" />
  </div>
);

type ContentChunk = { kind: "content"; nodes: ReactNode[] };
type RuleChunk = { kind: "rule"; className: string };
type Chunk = ContentChunk | RuleChunk;

const chunksFor = (children: ReactNode): Chunk[] => {
  const chunks: Chunk[] = [];
  Children.forEach(children, (child) => {
    if (isValidElement<{ className?: string }>(child) && child.type === EditorialDivider) {
      chunks.push({ kind: "rule", className: child.props.className ?? "" });
      return;
    }
    const last = chunks[chunks.length - 1];
    if (last && last.kind === "content") last.nodes.push(child);
    else chunks.push({ kind: "content", nodes: [child] });
  });
  return chunks;
};

const EditorialSection = ({
  children,
  className = "",
  centered = true,
  innerClassName = "max-w-4xl",
  divider,
}: EditorialSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const continuous = /(?:^|\s)!?pt-/.test(` ${className} `);
  const showDivider = divider ?? !continuous;
  const chunks = chunksFor(children);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    return bindEditorialSection(section);
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      className={`editorial-section section-padding ${showDivider ? "" : "no-section-rule"} ${className}`}
      initial={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {showDivider && (
        <div className="editorial-line" data-editorial-line="" aria-hidden="true">
          <span className="editorial-line-bar" />
        </div>
      )}
      {chunks.map((chunk, index) =>
        chunk.kind === "rule" ? (
          <div
            key={`rule-${index}`}
            className={`editorial-divider ${chunk.className}`}
            data-editorial-line=""
            aria-hidden="true"
          >
            <span className="editorial-line-bar" />
          </div>
        ) : (
          <motion.div
            key={`content-${index}`}
            className={`${innerClassName} mx-auto px-4 md:px-8 ${centered ? "text-center" : ""}`}
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {chunk.nodes}
          </motion.div>
        ),
      )}
    </motion.section>
  );
};

export default EditorialSection;
