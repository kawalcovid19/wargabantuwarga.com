import { initializeGTM } from "../gtm";

describe("initializeGTM", () => {
  it("is called correctly", () => {
    initializeGTM();

    expect(window.dataLayer.length).toBe(1);
  });
});
