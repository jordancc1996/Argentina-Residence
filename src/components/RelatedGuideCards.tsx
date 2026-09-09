import type { RelatedGuide } from "@/data/relatedGuides";
import { resolveImageSrc } from "@/lib/resolveImageSrc";

const RelatedGuideCards = ({ related }: { related: RelatedGuide[] }) => {
  if (related.length === 0) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
      {related.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="border border-border rounded-lg overflow-hidden hover:border-gold/50 hover:bg-secondary/20 transition-all group text-left"
        >
          {item.heroImage && (
            <div className="h-[180px] overflow-hidden">
              <img
                src={resolveImageSrc(item.heroImage)}
                alt={item.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div className="p-6">
            <h3 className="font-serif text-lg mb-2 group-hover:text-gold transition-colors">
              {item.title}
            </h3>
            <p className="text-sm text-text-secondary">{item.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default RelatedGuideCards;
