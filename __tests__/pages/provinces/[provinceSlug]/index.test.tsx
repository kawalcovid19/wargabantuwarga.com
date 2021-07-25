import React from "react";

import provinces from "~/lib/provinces";
import ProvincePage from "~/pages/provinces/[provinceSlug]";

import { render, screen } from "@testing-library/react";

jest.mock("~/lib/provinces");

describe("ProvincePage", () => {
  const [province] = provinces;

  it("renders the title and the breadcrumbs correctly", () => {
    render(
      <ProvincePage
        contactList={province.data}
        provinceName={province.name}
        provinceSlug={province.slug}
      />,
    );

    const [breadcrumbs, title] = screen.getAllByText(province.name);

    expect(breadcrumbs).toBeVisible();
    expect(breadcrumbs).toHaveAttribute("href", `/provinces/${province.slug}`);
    expect(title).toBeVisible();
  });
});
