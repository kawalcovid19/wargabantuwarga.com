import { render, screen } from "@testing-library/react";
import React from "react";
import { OutlineAnchorButton } from "../outline-anchor-button";

describe("OutlineAnchorButton", () => {
  it("defaults the color to 'blue' when no color props is provided", () => {
    render(<OutlineAnchorButton>Text</OutlineAnchorButton>);

    expect(screen.getByText("Text").closest("a")).toHaveClass(
      "text-blue-500 border-blue-500 hover:bg-blue-100 focus:ring-blue-500",
    );
  });
});
