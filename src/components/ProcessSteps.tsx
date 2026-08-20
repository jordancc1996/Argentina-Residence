import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type ProcessStep = {
  title: string;
  description: ReactNode;
};

export interface ProcessStepsProps {
  steps: ProcessStep[];
  /** Small-caps kicker. Omit to hide. */
  label?: string;
  heading?: string;
  className?: string;
}

/**
 * Numbered sequence for in-article processes.
 * Visual language matches ScrollytellingSteps (serif numbers + connecting
 * left border) inside the KeyFactsTable / ComparisonTable card shell, so it
 * can sit in markdown without the sticky two-column scrolly layout.
 */
const ProcessSteps = ({ steps, label, heading, className }: ProcessStepsProps) => {
  return (
    <div
      className={cn(
        "bg-card border border-border rounded-lg p-6 md:p-8 text-left not-prose my-8",
        className,
      )}
    >
      {label && (
        <div className="text-[11px] uppercase tracking-widest font-semibold text-text-secondary mb-4">
          {label}
        </div>
      )}
      {heading && (
        <div className="font-serif text-lg-editorial mb-6 tracking-wide text-foreground">
          {heading}
        </div>
      )}
      <ol className="m-0 p-0 list-none">
        {steps.map((step, idx) => {
          const numberLabel = String(idx + 1).padStart(2, "0");
          const isLast = idx === steps.length - 1;

          return (
            <li
              key={`${numberLabel}-${step.title}`}
              className={cn("relative pl-8 border-l-2 border-border", !isLast && "pb-8")}
            >
              <div className="flex items-baseline gap-4 mb-2">
                <span className="font-serif text-2xl md:text-3xl tracking-wide text-gold">
                  {numberLabel}
                </span>
                <span className="font-serif text-lg tracking-wide text-foreground">
                  {step.title}
                </span>
              </div>
              <div className="text-sm text-text-secondary tracking-wide leading-relaxed">
                {step.description}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default ProcessSteps;
