import { render, screen } from "@testing-library/react";
import { InputText } from "../input-text";

describe("InputText", () => {
  it("renders correctly", () => {
    render(<InputText />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
});
