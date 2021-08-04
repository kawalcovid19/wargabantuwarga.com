export const getUniquePath = (fullUrl: string = "") => {
  if (!fullUrl || typeof fullUrl !== "string") return null;
  const splitPath = fullUrl.split("/v")[1];
  return splitPath ? `v${splitPath}` : null;
};
