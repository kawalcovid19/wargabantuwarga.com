/* eslint-disable @typescript-eslint/no-unnecessary-condition */
export const initializeGTM = () => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
};
