import { buildUrl } from "cloudinary-build-url";
import type { ImageLoaderProps } from "next/image";

const CLOUDINARY_CLOUD_NAME = "wargabantuwarga";

const DEFAULT_QUALITY = "auto:eco";

export const cloudinaryLoader = ({ src, width, quality }: ImageLoaderProps) => {
  const url = buildUrl(src, {
    cloud: { cloudName: CLOUDINARY_CLOUD_NAME },
    transformations: {
      colorSpace: "tinysrgb",
      quality: quality ?? DEFAULT_QUALITY,
      resize: {
        width,
        type: "scale",
      },
    },
  });
  return url;
};

/** Programmatically get blurred image URL. Use as value of blurDataURL in Image component. */
export const getBlurred = (src: string, width: number) => {
  const url = buildUrl(src, {
    cloud: { cloudName: CLOUDINARY_CLOUD_NAME },
    transformations: {
      colorSpace: "tinysrgb",
      resize: {
        width,
        type: "scale",
      },
      effect: "blur:1000",
      quality: 2,
    },
  });
  return url;
};
