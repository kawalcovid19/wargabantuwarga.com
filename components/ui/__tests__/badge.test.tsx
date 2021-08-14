import { render, screen } from "@testing-library/react";
import { Badge } from "../badge/badge";

describe("Badge", () => {
  it("renders correctly", () => {
    render(<Badge>test badge</Badge>);

    expect(screen.getByText("test badge")).toBeInTheDocument();
  });

  it("renders with correct colors", () => {
    const { container } = render(<Badge color="blue">test badge</Badge>);

    expect(container.firstChild).toHaveClass("bg-blue-100", "text-blue-800");
  });
});
