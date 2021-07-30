import React from "react";

import HomePage from "~/pages";

import { render, screen } from "@testing-library/react";

jest.mock("~/lib/home-page");

describe("HomePage", () => {
  it("renders the last updated time correctly", () => {
    render(<HomePage />);

    expect(
      screen.getByText(
        "Pembaruan terakhir pada Tuesday, July 27, 2021, 05:43 PM GMT+7",
      ),
    ).toBeVisible();
  });
});
