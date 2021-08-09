import React from "react";

import { render } from "@testing-library/react";
import { latestNewsItemBuilder } from "~/lib/content/__mocks__/builders/informasi-terbaru";
import HomePage, { getStaticProps } from "~/pages";

jest.mock("~/lib/content/home-page");
jest.mock("~/lib/content/welcome-message");

describe("HomePage", () => {
  it("home page content rendered properly", () => {
    const { container } = render(
      <HomePage latestNews={[latestNewsItemBuilder()]} />,
    );

    expect(container.firstChild?.hasChildNodes()).toBeTruthy();
  });
});

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
