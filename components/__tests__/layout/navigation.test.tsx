import { Navigation } from "~/components/layout/navigation";

import { render } from "@testing-library/react";

jest.mock("next/router", () => require("next-router-mock"));

describe("Navigation", () => {
  it("renders correctly", () => {
    const { container } = render(<Navigation />);

    expect(container.firstChild).toMatchInlineSnapshot();
  });
});
