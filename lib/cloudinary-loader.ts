import type { ImageLoaderProps } from "next/image";

export const cloudinaryLoader = ({ src, width, quality }: ImageLoaderProps) => {
  console.log(src, width, quality);
  return null; // TODO
};
