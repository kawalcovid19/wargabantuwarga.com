/* eslint-disable @next/next/no-img-element */
import * as React from "react";

import { buildUrl, extractPublicId } from "cloudinary-build-url";
import { getDefaultOptions } from "~/lib/image/cloudinary-utils";

/**
 * Use this instead of Next.js `Image` for images with unknown or varying dimensions.
 * It returns responsive image with default transformations if on Cloudinary, or else renders it as it is.
 */
export function ResponsiveImg({
  alt,
  src,
  ...rest
}: React.ImgHTMLAttributes<HTMLImageElement>) {
  if (typeof src !== "string") return null;

  alt = typeof alt === "string" ? alt : ""; // alt can be empty string but cannot be missing, falsy, or truthy

  // If non-Cloudinary image, render as it is.
  if (!src.startsWith("https://res.cloudinary.com"))
    return <img alt={alt} loading="lazy" src={src} {...rest} />;

  const url420 = buildUrl(extractPublicId(src), getDefaultOptions(420));
  const url720 = buildUrl(extractPublicId(src), getDefaultOptions(720));

  return (
    <img
      alt={alt}
      loading="lazy"
      sizes="(min-width: 36rem) 34rem, 100vw"
      src={src}
      srcSet={`${url420} 420w, ${url720} 720w`}
      {...rest}
    />
  );
}
