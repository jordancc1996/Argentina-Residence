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
    label: "Investment amount",
    value:
      "The October 2, 2026 announcement states a $350,000 non-refundable National Treasury contribution or an $800,000 public-bond subscription. These announced terms are not a guarantee of approval.",
  },
  {
    label: "Qualifying assets",
    value:
      "The October 2, 2026 announcement states a Treasury contribution or a program-specific public bond. Decree 524/2025 itself does not identify real estate, a business, or a fund.",
  },
  {
    label: "Family inclusion",
    value:
      "The October 2, 2026 announcement states an additional $100,000 Treasury contribution for a spouse, $100,000 for a qualifying child age 18 to 25, and $25,000 for a child under 18. The 18-to-25 category has announced conditions.",
  },
  {
    label: "Processing time",
    value:
      "DNM has 30 business days to decide after it receives APCI's report. That is not total or guaranteed processing time.",
  },
  {
    label: "Application cap",
    value:
      "No enacted application cap is stated here. Gazette publication of a resolution cancelling a consultancy tender was not located.",
  },
  {
    label: "Biometrics",
    value: "The decrees do not specify a biometrics rule for investor applicants.",
  },
  {
    label: "Physical presence",
    value:
      "The investment-naturalization provision is distinct from temporary or permanent residence. The decrees do not specify a physical-presence rule for investor applicants.",
  },
  {
    label: "Program status",
    value:
      "DNU 366/2025 created APCI. Decree 524/2025 established a basic review procedure. Government applications are not yet confirmed as open. The government expects the application process to become operational during Q4 2026. No exact filing date has been announced.",
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
