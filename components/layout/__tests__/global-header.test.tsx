import { render, screen } from "@testing-library/react";
import { GlobalHeader } from "../global-header";

jest.mock("next/router", () => require("next-router-mock"));

describe("GlobalHeader", () => {
  it("renders correctly", () => {
    render(<GlobalHeader />);

    expect(screen.getByText("Warga Bantu Warga")).toBeInTheDocument();
  });
});
