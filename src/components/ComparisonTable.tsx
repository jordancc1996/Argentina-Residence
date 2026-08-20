import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type ComparisonRow = {
  label: string;
  values: ReactNode[];
};

export interface ComparisonTableProps {
  columns: string[];
  rows: ComparisonRow[];
  /** Small-caps kicker. Omit to hide. */
  label?: string;
  /** Optional visible table caption / heading. */
  caption?: string;
  className?: string;
}

export const comparisonRowLabels = [
  "Legal structure",
  "Program status",
  "Investment floor",
  "Hold period",
  "Family inclusion",
  "Processing time",
  "Physical presence",
  "Mobility / passport",
] as const;

const ComparisonTable = ({
  columns,
  rows,
  label,
  caption,
  className,
}: ComparisonTableProps) => {
  return (
    <div
      className={cn(
        "bg-card border border-border rounded-lg p-6 md:p-8 text-left",
        className,
      )}
    >
      {label && (
        <div className="text-[11px] uppercase tracking-widest font-semibold text-text-secondary mb-4">
          {label}
        </div>
      )}
      {caption && (
        <h2 className="font-serif text-lg-editorial mb-6 tracking-wide text-foreground">
          {caption}
        </h2>
      )}
      <div className="overflow-x-auto -mx-6 px-6 md:-mx-8 md:px-8">
        <table className="w-full min-w-[36rem] border-collapse text-left">
          <thead>
            <tr className="border-b border-border">
              <th
                scope="col"
                className="sticky left-0 z-10 bg-card py-3 pr-6 text-sm font-medium text-text-secondary tracking-wide whitespace-nowrap"
              >
                <span className="sr-only">Criterion</span>
              </th>
              {columns.map((column) => (
                <th
                  key={column}
                  scope="col"
                  className="py-3 px-4 first:pl-0 font-serif text-base tracking-wide text-foreground font-normal min-w-[10rem]"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label} className="border-b border-border last:border-b-0">
                <th
                  scope="row"
                  className="sticky left-0 z-10 bg-card py-4 pr-6 text-sm font-medium text-foreground tracking-wide align-top whitespace-nowrap"
                >
                  {row.label}
                </th>
                {row.values.map((value, index) => {
                  const unstated =
                    typeof value === "string" && /not stated on page/i.test(value);
                  return (
                    <td
                      key={`${row.label}-${columns[index] ?? index}`}
                      className={cn(
                        "py-4 px-4 first:pl-0 text-sm tracking-wide leading-relaxed align-top",
                        unstated ? "text-text-muted" : "text-text-secondary",
                      )}
                    >
                      {value}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparisonTable;
