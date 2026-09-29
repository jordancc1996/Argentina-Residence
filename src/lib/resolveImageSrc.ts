export type ImageSrc = string | { src: string | ImageSrc };

const MAX_DEPTH = 4;

export const resolveImageSrc = (
  image: ImageSrc | null | undefined,
  depth = 0,
): string | undefined => {
  if (image == null || depth > MAX_DEPTH) return undefined;
  if (typeof image === "string") {
    return image.length > 0 && image !== "[object Object]" ? image : undefined;
  }
  if (typeof image !== "object") return undefined;

  const record = image as { src?: ImageSrc; default?: ImageSrc };
  if (record.src != null) return resolveImageSrc(record.src, depth + 1);
  if (record.default != null) return resolveImageSrc(record.default, depth + 1);
  return undefined;
};
