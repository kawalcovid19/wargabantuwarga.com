import { render, screen } from "@testing-library/react";
import React from "react";
import FourOhFour from "~/pages/404";

jest.mock("next/router", () => require("next-router-mock"));

describe("FourOhFour", () => {
  it("renders the correct contents", () => {
    render(<FourOhFour />);

    const title = screen.getByText(/Halaman tidak ditemukan/i);
    expect(title).toBeVisible();

    const helpText = screen.getByText(
      /Coba periksa kembali URL yang dimasukkan dan coba lagi/i,
    );
    expect(helpText).toBeVisible();
  });
});
