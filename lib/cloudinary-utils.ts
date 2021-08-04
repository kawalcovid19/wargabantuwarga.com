export const getUniquePath = (fullUrl: string = "") => {
  if (!fullUrl || typeof fullUrl !== "string") return null;
  const splitPath = fullUrl.split("/v")[1];
  return splitPath ? `v${splitPath}` : null;
};

export const grayBlur =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=";
