import { cn } from "@/lib/utils";
import { resolveImageSrc, type ImageSrc } from "@/lib/resolveImageSrc";

interface PhotoPlaceholderProps {
  label: string;
  alt: string;
  src?: ImageSrc;
  className?: string;
  variant?: "inline" | "card" | "hero";
}

const PhotoPlaceholder = ({
  label,
  alt,
  src,
  className,
  variant = "inline",
}: PhotoPlaceholderProps) => {
  const resolvedSrc = src ? resolveImageSrc(src) : undefined;
  const filled = typeof resolvedSrc === "string";

  return (
    <>
      <div
        className="contents"
        dangerouslySetInnerHTML={{
          __html: `<!-- TODO: replace placeholder with real photo of ${label} -->`,
        }}
      />
      <figure
        className={cn(
          "photo-placeholder w-full",
          variant === "hero" ? "my-0 h-full" : variant === "inline" ? "my-8" : "my-0",
          className,
        )}
      >
        <div
          className={cn(
            "w-full flex items-center justify-center",
            variant === "hero" ? "h-full min-h-full aspect-auto" : "aspect-[16/9]",
            filled ? "bg-transparent p-0" : "bg-secondary/30 p-6",
            variant === "inline"
              ? "border border-border rounded-lg"
              : variant === "hero"
                ? "border-0 rounded-none"
                : "border-0 border-b border-border rounded-none",
          )}
          role={filled ? undefined : "img"}
          aria-label={filled ? undefined : alt}
        >
          <img
            {...(resolvedSrc ? { src: resolvedSrc } : {})}
            alt={alt}
            width={1600}
            height={900}
            className={cn("w-full h-full object-cover", filled ? "block" : "hidden")}
          />
          {!filled && (
            <span
              className={cn(
                "text-sm tracking-wide text-center",
                variant === "hero" ? "text-white/70" : "text-text-muted",
              )}
            >
              Photo: {label} — coming soon
            </span>
          )}
        </div>
      </figure>
    </>
  );
};

export default PhotoPlaceholder;
