import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type KeyFact = {
  label: string;
  value: ReactNode;
};

export interface KeyFactsTableProps {
  facts?: KeyFact[];
  /** Appended after `facts` (or after `programKeyFacts` when `facts` is omitted). */
  extraFacts?: KeyFact[];
  /** Small-caps kicker. Defaults to "At a Glance". */
  label?: string;
  /** Optional serif heading under the kicker. */
  heading?: string;
  className?: string;
}

export const programKeyFacts: KeyFact[] = [
  {
    label: "Investment paths",
    value:
      "Decree 524/2025 does not set a dollar amount. Reported figures of $500,000 USD and $1,000,000 USD were not found in an enacted regulation. They are not current qualifying requirements.",
  },
  {
    label: "Qualifying assets",
    value:
      "The Ministry of Economy has not published a definition of a relevant investment. Real estate, a business, and a fund are not named, and they are not excluded, by Decree 524/2025.",
  },
  {
    label: "Family inclusion",
    value: "Spouse and children under 18 expected to be includable. Status of dependents 18 and older is unknown.",
  },
  {
    label: "Processing time",
    value: "Not yet officially confirmed.",
  },
  {
    label: "5,000 figure",
    value: "A cancelled consultancy tender described four years or 5,000 APCI recommendation reports, whichever came first. That is not a statutory citizenship cap.",
  },
  {
    label: "Biometrics",
    value: "Decree 524/2025 does not require a biometrics visit.",
  },
  {
    label: "Physical presence",
    value: "Decree 366/2025 amended ordinary naturalization. The National Electoral Chamber declared that decree null on 30 June 2026, and the executive appealed. No separate stay rule for an investment route has been published.",
  },
  {
    label: "Program status",
    value:
      "Decrees 366/2025 and 524/2025 are in the Boletín Oficial. Complementary APCI rules and a dollar amount are not. APCI is not processing citizenship applications.",
  },
];

const KeyFactsTable = ({
  facts,
  extraFacts,
  label = "At a Glance",
  heading,
  className,
}: KeyFactsTableProps) => {
  const resolvedFacts = [...(facts ?? programKeyFacts), ...(extraFacts ?? [])];

  return (
    <div
      className={cn(
        "bg-card border border-border rounded-lg p-6 md:p-8 text-left not-prose",
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
      <dl className="divide-y divide-border">
        {resolvedFacts.map((fact) => (
          <div
            key={fact.label}
            className="grid sm:grid-cols-[11rem_1fr] gap-1 sm:gap-6 py-4 first:pt-0 last:pb-0"
          >
            <dt className="text-sm font-medium text-foreground tracking-wide">
              {fact.label}
            </dt>
            <dd className="text-sm text-text-secondary tracking-wide leading-relaxed m-0">
              {fact.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default KeyFactsTable;
