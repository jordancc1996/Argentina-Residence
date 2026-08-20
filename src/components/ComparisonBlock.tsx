import ComparisonTable from "@/components/ComparisonTable";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import { cn } from "@/lib/utils";
import {
  comparisonTables,
  type ComparisonTableId,
} from "@/data/comparisonTables";

interface ComparisonBlockProps {
  id: ComparisonTableId;
  className?: string;
}

const ComparisonBlock = ({ id, className }: ComparisonBlockProps) => {
  const data = comparisonTables[id];

  return (
    <div className={cn("comparison-block not-prose my-8", className)}>
      {data.photos.length > 0 && (
        <div
          className={cn(
            "mb-6 grid gap-4",
            data.photos.length > 1 ? "sm:grid-cols-2" : "grid-cols-1",
          )}
        >
          {data.photos.map((photo) => (
            <PhotoPlaceholder
              key={photo.label}
              label={photo.label}
              alt={photo.alt}
              className="my-0"
            />
          ))}
        </div>
      )}
      <ComparisonTable columns={[...data.columns]} rows={[...data.rows]} label="Comparison" />
    </div>
  );
};

export default ComparisonBlock;
