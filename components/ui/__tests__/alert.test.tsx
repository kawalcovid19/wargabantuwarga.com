import React from "react";

import { screen, fireEvent, render } from "@testing-library/react";
import { BellIcon } from "@heroicons/react/outline";
import { Alert } from "../alert";

describe("Alert", () => {
  it("renders correctly", () => {
    const { container } = render(<Alert>Test Alert</Alert>);

    expect(container.firstChild).toMatchInlineSnapshot(`
  <div>
    <div
      class="bg-yellow-50 text-yellow-700 p-4"
      role="alert"
    >
      <div
        class="flex justify-between"
      >
        <div
          class="flex"
        >
          <div>
            Test Alert
          </div>
        </div>
      </div>
    </div>
  </div>
    `);
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
      container.firstChild?.firstChild?.firstChild?.firstChild?.firstChild,
    ).toHaveClass("flex-shrink-0 mr-3");
    expect(
      container.firstChild?.firstChild?.firstChild?.childNodes[1],
    ).toHaveClass(`close-button text-red-400 hover:text-red-500`);
    fireEvent.click(screen.getByRole("button"));
  });
});
