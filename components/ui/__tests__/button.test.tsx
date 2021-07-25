import React from "react";

import { PrimaryButton, SecondaryButton } from "../button";

import { render } from "@testing-library/react";

describe("Button", () => {
  describe("PrimaryButton", () => {
    it("renders correctly", () => {
      const { container } = render(<PrimaryButton>test button</PrimaryButton>);

      expect(container.firstChild).toMatchInlineSnapshot(`
        <button
          class="inline-flex px-4 py-2 text-sm rounded-md items-center justify-center border border-transparent font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-75"
          type="button"
        >
          test button
        </button>
      `);
    });

    it("renders with correct colors", () => {
      const { container } = render(
        <PrimaryButton color="brand">test button</PrimaryButton>,
      );

      expect(container.firstChild).toHaveClass(
        "bg-brand-500",
        "hover:bg-brand-600",
        "focus:ring-brand-500",
      );
    });
  });

  describe("SecondaryButton", () => {
    it("renders correctly", () => {
      const { container } = render(
        <SecondaryButton>test button</SecondaryButton>,
      );

      expect(container.firstChild).toMatchInlineSnapshot(`
        <button
          class="inline-flex px-4 py-2 text-sm rounded-md items-center justify-center border border-transparent font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 text-blue-700 bg-blue-100 hover:bg-blue-200 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-75"
          type="button"
        >
          test button
        </button>
      `);
    });

    it("renders with correct colors", () => {
      const { container } = render(
        <SecondaryButton color="brand">test button</SecondaryButton>,
      );

      expect(container.firstChild).toHaveClass(
        "text-brand-700",
        "bg-brand-100",
        "hover:bg-brand-200",
        "focus:ring-brand-500",
      );
    });
  });
});
