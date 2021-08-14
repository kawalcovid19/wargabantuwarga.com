import { render, screen } from "@testing-library/react";
import { Navigation } from "../navigation";

import { bottomNavigation } from "~/lib/layout/navigation-data";

jest.mock("next/router", () => require("next-router-mock"));

describe("Navigation", () => {
  it("renders the styling correctly", () => {
    render(<Navigation />);

    const homeText = screen.getByText("Beranda");
    const anchorHome = homeText.closest("a");

    expect(homeText).toBeInTheDocument();
    expect(anchorHome).toHaveAttribute("href", "/");
  });

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
