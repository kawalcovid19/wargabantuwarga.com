import { render, screen } from "@testing-library/react";
import { GlobalHeader } from "../global-header";

jest.mock("next/router", () => require("next-router-mock"));

describe("GlobalHeader", () => {
  it("renders correctly", () => {
    render(<GlobalHeader />);

    const homeText = screen.getByText("Warga Bantu Warga");
    expect(homeText).toBeVisible();
    expect(homeText.closest("a")).toHaveAttribute("href", "/");
  });
});
