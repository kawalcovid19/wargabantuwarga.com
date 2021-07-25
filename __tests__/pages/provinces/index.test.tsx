import React from "react";

import { provinceListItemBuilder } from "~/components/__mocks__/builders/province-list";
import ProvincesPage from "~/pages/provinces";

import { render, screen } from "@testing-library/react";

describe("ProvincesPage", () => {
  const provinceListItem = provinceListItemBuilder();
  const provinceList = [provinceListItem];

  it("renders the title and the breadcrumbs correctly", () => {
    render(<ProvincesPage provincesList={provinceList} />);

    const [breadcrumbs, title] = screen.getAllByText("Provinsi");

    expect(breadcrumbs).toBeVisible();
    expect(breadcrumbs).toHaveAttribute("href", "/provinces");
    expect(title).toBeVisible();
  });
});
