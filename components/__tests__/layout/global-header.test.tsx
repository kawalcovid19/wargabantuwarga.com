import { GlobalHeader } from "~/components/layout/global-header";

import { render } from "@testing-library/react";

jest.mock("next/router", () => require("next-router-mock"));

describe("GlobalHeader", () => {
  it("renders correctly", () => {
    const { container } = render(<GlobalHeader />);

    expect(container.firstChild).toMatchInlineSnapshot();
  });
});
