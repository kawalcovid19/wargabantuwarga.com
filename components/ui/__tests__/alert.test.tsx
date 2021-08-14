import React from "react";

import { screen, fireEvent, render } from "@testing-library/react";
import { BellIcon } from "@heroicons/react/outline";
import { Alert } from "../alert";

describe("Alert", () => {
  it("renders correctly", () => {
    render(<Alert>Test Alert</Alert>);

    expect(screen.getByText("Test Alert")).toBeInTheDocument();
  });

  it("renders with correct customization", () => {
    const { container } = render(
      <Alert
        accentBorder
        className="babayaga"
        color="red"
        dismissible={true}
        icon={BellIcon}
        visible={true}
      >
        Test Customize Alert
      </Alert>,
    );
    expect(container.firstChild?.firstChild).toHaveClass(
      "bg-red-50",
      "text-red-700",
    );
    expect(container.firstChild?.firstChild).toHaveClass(
      "border-l-4",
      "border-red-400",
    );
    expect(container.firstChild?.firstChild).toHaveClass("p-4", "babayaga");

    expect(
      container.getElementsByClassName("flex-shrink-0 mr-3")[0].hasChildNodes(),
    ).toBeTruthy();

    expect(screen.getByRole("button")).toHaveClass(
      `close-button text-red-400 hover:text-red-500`,
    );

    fireEvent.click(screen.getByRole("button"));
  });
});
