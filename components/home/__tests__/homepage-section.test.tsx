import * as React from "react";

import { render } from "@testing-library/react";
import { HomePageSection } from "../homepage-section";

describe("HomePageSection", () => {
  it("renders correctly", () => {
    const { container } = render(<HomePageSection>test</HomePageSection>);

    expect(container.firstChild).toBeInTheDocument();
  });
});
