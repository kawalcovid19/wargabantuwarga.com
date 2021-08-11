import { render, screen } from "@testing-library/react";
import React from "react";
import FallbackError from "~/pages/_error";

jest.mock("next/router", () => require("next-router-mock"));

describe("FallbackError", () => {
  it("renders the correct contents", () => {
    render(<FallbackError />);

    const title = screen.getByText(/Ups!/i);
    expect(title).toBeVisible();

    const subtitle = screen.getByText(/Terjadi kesalahan/i);
    expect(subtitle).toBeVisible();

    const reloadLink = screen.getByText(/Muat ulang halaman/i);
    expect(reloadLink).toBeVisible();
  });
});
