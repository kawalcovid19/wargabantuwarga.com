import "@testing-library/jest-dom/extend-expect";

import React from "react";

import { Alert } from "../alert";

import { fireEvent, render } from "@testing-library/react";

test("loads and displays Alert component", async () => {
  const { container } = render(<Alert>Test Alert</Alert>);
  expect(container).toMatchInlineSnapshot(`
<div>
  <div
    class="bg-yellow-50 text-yellow-700 rounded-md p-4"
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

test("Alert customize", async () => {
  const { container } = render(
    <Alert accentBorder className="newclass" color="red" visible={true}>
      Test
    </Alert>,
  );
  expect(container).toMatchInlineSnapshot(`
<div>
  <div
    class="bg-red-50 text-red-700 border-l-4 border-red-400 rounded-md p-4 newclass"
    role="alert"
  >
    <div
      class="flex justify-between"
    >
      <div
        class="flex"
      >
        <div>
          Test
        </div>
      </div>
    </div>
  </div>
</div>
`);
  expect(container.firstChild).toHaveClass("newclass");
  expect(container.firstChild).toHaveClass("border-l-4 border-red-400");
  expect(container.firstChild).toHaveClass("bg-red-50 text-red-700");
});

test("Alert click close button", async () => {
  jest.useFakeTimers();
  const onDismiss = jest.fn();
  const onDismissed = jest.fn();
  render(
    <Alert dismissible onDismiss={onDismiss} onDismissed={onDismissed}>
      Test
    </Alert>,
  );
  expect(onDismiss).toHaveBeenCalledTimes(0);
  expect(onDismissed).toHaveBeenCalledTimes(0);
  const btn = document.querySelector(".close-button");
  if (btn !== null) {
    fireEvent.click(btn);
  }
  expect(onDismiss).toHaveBeenCalledTimes(1);
  expect(onDismissed).toHaveBeenCalledTimes(0);
  jest.runAllTimers();
  expect(onDismiss).toHaveBeenCalledTimes(1);
  expect(onDismissed).toHaveBeenCalledTimes(1);
  jest.useRealTimers();
});
