import { render, screen } from "@testing-library/react";
import { InputTextarea } from "../input-textarea";

describe("InputText", () => {
  it("renders correctly", () => {
    render(<InputTextarea />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
});
