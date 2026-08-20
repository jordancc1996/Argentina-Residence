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
      "Two paths anticipated, subject to final regulation: a non-refundable $500,000 USD contribution to the Argentine Treasury, or a $1,000,000 USD investment in a 7-year, 0% interest Argentine government bond, with principal returned at maturity.",
  },
  {
    label: "Not anticipated paths",
    value:
      "Real estate, business ventures, investment funds, agriculture, renewable energy, and tourism projects are not anticipated qualifying paths.",
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
    label: "Application cap",
    value: "An initial cap near 5,000 applications is anticipated. Not officially confirmed.",
  },
  {
    label: "Biometrics",
    value: "A single biometrics visit after approval is anticipated. Not officially confirmed.",
  },
  {
    label: "Physical presence",
    value: "No residence or physical-presence requirement is anticipated.",
  },
  {
    label: "Program status",
    value:
      "Not yet open. Not published in the Official Gazette (Boletín Oficial). APCI is not processing applications.",
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
