import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export interface ScrollyStep {
  /** Optional eyebrow label, e.g. "Step 1" or "Now" or "Q2 2026" */
  label?: string;
  title: string;
  description: string;
}

interface ScrollytellingStepsProps {
  /** Sticky-side eyebrow, e.g. "A Bespoke Process" */
  eyebrow?: string;
  /** Sticky-side heading */
  heading: string;
  /** Optional sticky-side intro paragraph */
  intro?: string;
  steps: ScrollyStep[];
  /** Optional className passthrough */
  className?: string;
}

/**
 * ScrollytellingSteps: sticky-left, scroll-highlight-right pattern.
 *
 * As the user scrolls, the heading stays fixed (sticky on desktop)
 * while each step card "lights up" (gold border, gold step number)
 * when it crosses the vertical center of the viewport.
 *
 * Falls back to a normal stacked layout on mobile, with the same
 * scroll-triggered highlight on each card.
 */
const ScrollytellingSteps = ({
  eyebrow,
  heading,
  intro,
  steps,
  className = "",
}: ScrollytellingStepsProps) => {
  const stepRefs = useRef<Array<HTMLLIElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const viewportCenter = window.innerHeight / 2;
      let closestIdx = 0;
      let closestDistance = Infinity;

      stepRefs.current.forEach((el, idx) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const distance = Math.abs(elementCenter - viewportCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIdx = idx;
        }
      });

      setActiveIndex(closestIdx);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [steps.length]);

  return (
    <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 text-left ${className}`}>
      {/* Sticky side */}
      <div className="lg:sticky lg:top-32 lg:self-start">
        {eyebrow && (
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-gold mb-4">
            {eyebrow}
          </p>
        )}
        <h2 className="font-serif text-xl-editorial mb-6 tracking-wide">
          {heading}
        </h2>
        {intro && (
          <p className="text-body text-text-secondary tracking-wide">{intro}</p>
        )}
        {/* Progress indicator (desktop only) */}
        <div className="hidden lg:flex flex-col gap-2 mt-10">
          {steps.map((_, idx) => (
            <div
              key={idx}
              className="h-[2px] w-12 transition-colors duration-500"
              style={{
                backgroundColor:
                  idx <= activeIndex
                    ? "hsl(var(--gold))"
                    : "hsl(var(--border))",
              }}
            />
          ))}
        </div>
      </div>

      {/* Steps */}
      <ol className="space-y-10 lg:space-y-16">
        {steps.map((step, idx) => {
          const isActive = idx === activeIndex;
          const isPassed = idx < activeIndex;
          const numberLabel = String(idx + 1).padStart(2, "0");

          return (
            <motion.li
              key={idx}
              ref={(el) => (stepRefs.current[idx] = el)}
              initial={{ opacity: 0.4, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-30% 0px -30% 0px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative pl-8 border-l-2 transition-colors duration-500"
              style={{
                borderColor:
                  isActive || isPassed
                    ? "hsl(var(--gold))"
                    : "hsl(var(--border))",
              }}
            >
              <div className="flex items-baseline gap-4 mb-2">
                <span
                  className="font-serif text-3xl md:text-4xl tracking-wide transition-colors duration-500"
                  style={{
                    color:
                      isActive
                        ? "hsl(var(--gold))"
                        : isPassed
                          ? "hsl(var(--foreground))"
                          : "hsl(var(--text-muted))",
                  }}
                >
                  {numberLabel}
                </span>
                {step.label && (
                  <span
                    className="font-sans text-xs tracking-[0.2em] uppercase transition-colors duration-500"
                    style={{
                      color: isActive
                        ? "hsl(var(--gold))"
                        : "hsl(var(--text-muted))",
                    }}
                  >
                    {step.label}
                  </span>
                )}
              </div>
              <h3
                className="font-serif text-lg-editorial mb-3 tracking-wide transition-colors duration-500"
                style={{
                  color: isActive
                    ? "hsl(var(--foreground))"
                    : "hsl(var(--text-secondary))",
                }}
              >
                {step.title}
              </h3>
              <p className="text-body text-text-secondary tracking-wide">
                {step.description}
              </p>
            </motion.li>
          );
        })}
      </ol>
    </div>
  );
};

export default ScrollytellingSteps;
