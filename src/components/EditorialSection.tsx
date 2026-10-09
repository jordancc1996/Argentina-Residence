import { Children, isValidElement, type ReactNode } from "react";
import { motion } from "framer-motion";

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
  <hr className={`editorial-divider ${className}`} data-editorial-divider="" aria-hidden="true" />
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
  const continuous = /(?:^|\s)!?pt-/.test(` ${className} `);
  const showDivider = divider ?? !continuous;
  const chunks = chunksFor(children);

  return (
    <motion.section
      className={`editorial-section section-padding ${showDivider ? "" : "no-section-rule"} ${className}`}
      initial={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {chunks.map((chunk, index) =>
        chunk.kind === "rule" ? (
          <hr
            key={`rule-${index}`}
            className={`editorial-divider ${chunk.className}`}
            aria-hidden="true"
          />
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
