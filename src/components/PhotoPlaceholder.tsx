import { cn } from "@/lib/utils";

interface PhotoPlaceholderProps {
  label: string;
  alt: string;
  src?: string;
  className?: string;
  variant?: "inline" | "card";
}

const PhotoPlaceholder = ({
  label,
  alt,
  src,
  className,
  variant = "inline",
}: PhotoPlaceholderProps) => {
  const filled = Boolean(src);

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
          variant === "inline" ? "my-8" : "my-0",
          className,
        )}
      >
        <div
          className={cn(
            "aspect-[16/9] w-full flex items-center justify-center",
            filled ? "bg-transparent p-0" : "bg-secondary/30 p-6",
            variant === "inline"
              ? "border border-border rounded-lg"
              : "border-0 border-b border-border rounded-none",
          )}
          role={filled ? undefined : "img"}
          aria-label={filled ? undefined : alt}
        >
          <img
            {...(src ? { src } : {})}
            alt={alt}
            width={1600}
            height={900}
            className={cn("w-full h-full object-cover", filled ? "block" : "hidden")}
          />
          {!filled && (
            <span className="text-sm text-text-muted tracking-wide text-center">
              Photo: {label} — coming soon
            </span>
          )}
        </div>
      </figure>
    </>
  );
};

export default PhotoPlaceholder;
