import { buildUrl } from "cloudinary-build-url";
import type { ImageLoaderProps } from "next/image";
import {
  CLOUDINARY_DEFAULT_QUALITY,
  CLOUDINARY_DEFAULT_RESIZE_TYPE,
} from "~/constants/image";
import {
  getDefaultCloudOptions,
  getDefaultTransformOptions,
} from "~/lib/image/cloudinary-utils";

export const cloudinaryLoader = ({ src, width, quality }: ImageLoaderProps) => {
  const url = buildUrl(src, {
    cloud: getDefaultCloudOptions(),
    transformations: {
      ...getDefaultTransformOptions(width),
      quality: quality ?? CLOUDINARY_DEFAULT_QUALITY,
    },
  });
  return url;
};

/** Programmatically get blurred image URL. Use as value of blurDataURL in Image component. */
export const getBlurred = (src: string, width: number) => {
  const url = buildUrl(src, {
    cloud: getDefaultCloudOptions(),
    transformations: {
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
