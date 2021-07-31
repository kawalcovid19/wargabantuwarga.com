import React from "react";

import { latestNewsItemBuilder } from "~/lib/content/__mocks__/builders/informasi-terbaru";
import HomePage, { getStaticProps } from "~/pages";

import { render, screen } from "@testing-library/react";

jest.mock("~/lib/content/home-page");
jest.mock("~/lib/content/welcome-message");

describe("HomePage", () => {
  it("renders the last updated time correctly", () => {
    render(<HomePage latestNews={[latestNewsItemBuilder()]} />);

    expect(
      screen.getByText(
        /Pembaruan terakhir pada Selasa, 27 Juli 2021 17.43 WIB/i,
      ),
    ).toBeVisible();
  });
});

describe("getStaticProps", () => {
  it("gets latestNews props from the markdown files correctly", async () => {
    expect(await getStaticProps({})).toEqual({
      props: {
        // TODO: (ZF) Mock the file system to simulate the markdown file
        latestNews: undefined,
      },
    });
  });
});
