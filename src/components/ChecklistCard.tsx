import type { ReactNode } from "react";
import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export type ChecklistItem = ReactNode | { label: ReactNode; detail?: ReactNode };

export interface ChecklistCardProps {
  heading?: string;
  items: ChecklistItem[];
  /** Small-caps kicker. Omit to hide. */
  label?: string;
  className?: string;
}

function isLabeledItem(
  item: ChecklistItem,
): item is { label: ReactNode; detail?: ReactNode } {
  return (
    typeof item === "object" &&
    item !== null &&
    !Array.isArray(item) &&
    !("$$typeof" in item) &&
    "label" in item
  );
}

const ChecklistCard = ({ heading, items, label, className }: ChecklistCardProps) => {
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
      <ul className="divide-y divide-border m-0 p-0 list-none">
        {items.map((item, index) => {
          const labeled = isLabeledItem(item);
          const body = labeled ? item.label : item;
          const detail = labeled ? item.detail : undefined;
          const key = typeof body === "string" ? body : index;

          return (
            <li
              key={key}
              className="flex items-start gap-3 py-4 first:pt-0 last:pb-0"
            >
              <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
              <div className="min-w-0">
                <div className="text-sm tracking-wide leading-relaxed text-foreground">
                  {body}
                </div>
                {detail != null && detail !== "" && (
                  <div className="text-sm text-text-secondary tracking-wide leading-relaxed mt-1">
                    {detail}
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ChecklistCard;
