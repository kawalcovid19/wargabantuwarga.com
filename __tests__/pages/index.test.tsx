import React from "react";

import { latestNews } from "~/lib/home/latest-news";
import HomePage from "~/pages";

import { render, screen } from "@testing-library/react";

jest.mock("~/lib/content/home-page");
jest.mock("~/lib/content/welcome-message");

describe("HomePage", () => {
  it("renders the last updated time correctly", () => {
    render(<HomePage latestNews={latestNews} />);

    expect(
      screen.getByText(
        /Pembaruan terakhir pada Selasa, 27 Juli 2021 17.43 WIB/i,
      ),
    ).toBeVisible();
  });
});
