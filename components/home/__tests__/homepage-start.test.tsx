import * as React from "react";

import { render, screen } from "@testing-library/react";
import { HomePageStart } from "../homepage-start";

describe("HomePageStart", () => {
  it("renders correctly", () => {
    render(<HomePageStart />);
    const anchorLinkToProvinces = screen.getByText(/telusuri sekarang/gi);

    expect(anchorLinkToProvinces).toBeInTheDocument();
    expect(anchorLinkToProvinces).toHaveAttribute("href", "/provinces");
  });
});
