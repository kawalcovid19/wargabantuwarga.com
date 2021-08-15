import { render, screen } from "@testing-library/react";
import { Navigation } from "../navigation";

import { bottomNavigation } from "~/lib/layout/navigation-data";

jest.mock("next/router", () => require("next-router-mock"));

const navigations = bottomNavigation.map((item) => [
  item.name,
  item.href,
  Boolean(item.external),
]);

describe("Navigation", () => {
  it.each(navigations)(
    "should render %s and link it to %s correctly",
    (name, href, external) => {
      render(<Navigation />);
      const navigationItem = screen.getByText(name as string);
      const navigationLink = navigationItem.closest("a");

      expect(navigationItem).toBeVisible();

      if (external) {
        expect(navigationLink).toHaveAttribute("target", "_blank");
        expect(navigationLink).toHaveAttribute(
          "rel",
          "nofollow noopener noreferrer",
        );
      } else expect(navigationLink).toHaveAttribute("href", href);
    },
  );

  it.each(
    bottomNavigation.map((item) => [item.name, item.href, item.external]),
  )(
    "renders the %s item at the bottom navigation and link it to %s correctly",
    (name, href, external) => {
      render(<Navigation />);

      const navigationItem = screen.getByText(name as string).closest("a");
      expect(navigationItem).toHaveAttribute("href", href);
      if (external) {
        expect(navigationItem).toHaveAttribute("target", "_blank");
        expect(navigationItem).toHaveAttribute(
          "rel",
          "nofollow noopener noreferrer",
        );
      }
    },
  );
});
