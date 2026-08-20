import { resolveImageSrc, type ImageSrc } from "@/lib/resolveImageSrc";
import { cn } from "@/lib/utils";

type ImportedImage = string | (ImageSrc & { width?: number; height?: number });

interface SupportingImageProps {
  image: ImportedImage;
  alt: string;
  caption?: string;
  className?: string;
}

const SupportingImage = ({ image, alt, caption, className }: SupportingImageProps) => {
  const src = resolveImageSrc(image);
  const width = typeof image === "object" && "width" in image ? image.width : undefined;
  const height = typeof image === "object" && "height" in image ? image.height : undefined;

  return (
    <figure className={cn("not-prose max-w-xl mx-auto my-8 text-left", className)}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-auto"
      />
      {caption ? (
        <figcaption className="text-sm text-text-secondary tracking-wide mt-4 leading-relaxed">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
};

export default SupportingImage;
