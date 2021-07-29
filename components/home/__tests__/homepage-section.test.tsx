import * as React from "react";

import { HomePageSection } from "../homepage-section";

import { render } from "@testing-library/react";

describe("HomePageSection", () => {
  it("renders correctly", () => {
    const { container } = render(<HomePageSection>test</HomePageSection>);

    expect(container.firstChild).toBeInTheDocument();
  });
});
