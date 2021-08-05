import {
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_DEFAULT_COLOR_SPACE,
  CLOUDINARY_DEFAULT_QUALITY,
  CLOUDINARY_DEFAULT_RESIZE_TYPE,
} from "~/constants/image";

export const getCloudName = (fullUrl: string = "") => {
  if (!fullUrl || typeof fullUrl !== "string") return null;
  const splitPath = fullUrl.split("res.cloudinary.com/")[1];
  return splitPath ? splitPath.split("/")[0] : null;
};

export const getDefaultCloudOptions = (cloudName = CLOUDINARY_CLOUD_NAME) => ({
  cloudName,
});

export const getDefaultTransformOptions = (width: number = 0) => {
  const noWidth = {
    colorSpace: CLOUDINARY_DEFAULT_COLOR_SPACE,
    quality: CLOUDINARY_DEFAULT_QUALITY,
    resize: {
      type: CLOUDINARY_DEFAULT_RESIZE_TYPE,
    },
  };
  return width
    ? {
        ...noWidth,
        resize: {
          ...noWidth.resize,
          width,
        },
      }
    : noWidth;
};

export const getDefaultOptions = (width = 0, cloudName?: string) => ({
  cloud: getDefaultCloudOptions(cloudName),
  transformations: getDefaultTransformOptions(width),
});

export const grayBlur =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=";
