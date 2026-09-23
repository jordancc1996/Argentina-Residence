import ComparisonTable from "@/components/ComparisonTable";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import { cn } from "@/lib/utils";
import { resolveImageSrc } from "@/lib/resolveImageSrc";
import turkeyRealEstatePhoto from "@/assets/turkey-citizenship-by-investment-real-estate.webp";
import panamaQualifiedInvestorPhoto from "@/assets/argentina-citizenship-vs-panama-qualified-investor.webp";
import paraguayInvestorPassPhoto from "@/assets/argentina-citizenship-vs-paraguay-investor-pass.webp";
import greeceAthensPhoto from "@/assets/argentina-citizenship-vs-greece-athens.webp";
import dominicaRoseauPhoto from "@/assets/dominica-citizenship-by-investment-roseau.webp";
import grenadaStGeorgesPhoto from "@/assets/grenada-citizenship-by-investment-st-georges.webp";
import {
  comparisonTables,
  type ComparisonTableId,
} from "@/data/comparisonTables";

type ComparisonPhotoSrc = string | Partial<Record<string, string>>;

const comparisonPhotoSrc: Partial<Record<ComparisonTableId, ComparisonPhotoSrc>> = {
  turkey: resolveImageSrc(turkeyRealEstatePhoto),
  panama: resolveImageSrc(panamaQualifiedInvestorPhoto),
  paraguay: resolveImageSrc(paraguayInvestorPassPhoto),
  greece: resolveImageSrc(greeceAthensPhoto),
  caribbean: {
    Dominica: resolveImageSrc(dominicaRoseauPhoto),
    Grenada: resolveImageSrc(grenadaStGeorgesPhoto),
  },
};

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
          {data.photos.map((photo) => {
            const tableSrc = comparisonPhotoSrc[id];
            const src =
              typeof tableSrc === "string" ? tableSrc : tableSrc?.[photo.label];
            return (
              <PhotoPlaceholder
                key={photo.label}
                label={photo.label}
                alt={photo.alt}
                src={src}
                className="my-0"
              />
            );
          })}
        </div>
      )}
      <ComparisonTable columns={[...data.columns]} rows={[...data.rows]} label="Comparison" />
    </div>
  );
};

export default ComparisonBlock;
