import React from "react";

import HomePage from "~/pages";

import { render, screen } from "@testing-library/react";

jest.mock("~/lib/home-page");

describe("HomePage", () => {
  it("renders the last updated time correctly", () => {
    render(<HomePage />);

    expect(
      screen.getByText(
        /Pembaruan terakhir pada Selasa, 27 Juli 2021 17.43 WIB/i,
      ),
    ).toBeVisible();
  });
});
