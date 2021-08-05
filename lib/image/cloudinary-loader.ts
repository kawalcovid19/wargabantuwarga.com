import { buildUrl } from "cloudinary-build-url";
import type { ImageLoaderProps } from "next/image";
import {
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_DEFAULT_QUALITY,
  CLOUDINARY_DEFAULT_COLOR_SPACE,
  CLOUDINARY_DEFAULT_RESIZE_TYPE,
} from "~/constants/image";

export const cloudinaryLoader = ({ src, width, quality }: ImageLoaderProps) => {
  const url = buildUrl(src, {
    cloud: { cloudName: CLOUDINARY_CLOUD_NAME },
    transformations: {
      colorSpace: CLOUDINARY_DEFAULT_COLOR_SPACE,
      quality: quality ?? CLOUDINARY_DEFAULT_QUALITY,
      resize: {
        width,
        type: CLOUDINARY_DEFAULT_RESIZE_TYPE,
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
      colorSpace: CLOUDINARY_DEFAULT_COLOR_SPACE,
      effect: "blur:1000",
      quality: 2,
      resize: {
        width,
        type: CLOUDINARY_DEFAULT_RESIZE_TYPE,
      },
    },
  });
  return url;
};
