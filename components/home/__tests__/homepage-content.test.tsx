import React from "react";

import { render } from "@testing-library/react";
import { HomePageContent } from "../homepage-content";

describe("homepage content render correctly", () => {
  const { container } = render(<HomePageContent />);

  it("renders correctly", () => {
    expect(container.firstChild).toHaveClass("flex-1");
  });
});
