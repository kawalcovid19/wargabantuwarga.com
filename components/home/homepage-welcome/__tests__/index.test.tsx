import React from "react";

import { HomePageWelcome } from "..";

import { render } from "@testing-library/react";

jest.mock("~/lib/welcome-message");

describe("HomePageWelcome", () => {
  it("renders nothing initially", () => {
    const { container } = render(<HomePageWelcome />);

    expect(container.firstChild).toMatchInlineSnapshot(`
<div
  id="welcome-message-trigger"
/>
`);
  });
});
