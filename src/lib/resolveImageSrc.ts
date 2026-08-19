export type ImageSrc = string | { src: string };

export const resolveImageSrc = (image: ImageSrc) =>
  typeof image === "string" ? image : image.src;
