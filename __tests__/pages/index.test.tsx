import { getStaticProps } from "~/pages";

jest.mock("~/lib/content/home-page");
jest.mock("~/lib/content/welcome-message");

describe("getStaticProps", () => {
  // TODO: (ZF) Find a way to load the markdown files in Jest so that we can test the successful case.
  it("returns an empty array when failing to load the markdown files", async () => {
    expect(await getStaticProps({})).toEqual({
      props: {
        latestNews: [],
      },
    });
  });
});
