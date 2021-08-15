import { render } from "@testing-library/react";
import { Badge } from "../badge/badge";

describe("Badge", () => {
  it("renders correctly", () => {
    const { container } = render(<Badge>test badge</Badge>);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <span
        class="rounded-full bg-gray-100 text-gray-800 px-2.5 py-0.5 text-xs inline-flex items-center font-medium"
      >
        test badge
      </span>
    `);
  });

  it("renders with correct colors", () => {
    const { container } = render(<Badge color="blue">test badge</Badge>);

    expect(container.firstChild).toHaveClass("bg-blue-100", "text-blue-800");
  });
});
