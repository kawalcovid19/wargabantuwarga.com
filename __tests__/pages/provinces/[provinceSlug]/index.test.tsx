import React from "react";

import provinces from "~/lib/provinces";
import ProvincePage, {
  getStaticPaths,
  getStaticProps,
} from "~/pages/provinces/[provinceSlug]";

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

describe("getStaticPaths", () => {
  // TODO: Do a better test because this test is merely a copy of the implementation
  it("returns the correct paths", () => {
    const paths = provinces.map((province) => {
      const provinceSlug = province.slug;

      return {
        params: { provinceSlug },
      };
    });
    expect(getStaticPaths({})).toEqual({
      fallback: false,
      paths,
    });
  });
});

describe("getStaticProps", () => {
  const [province] = provinces;
  const [unverifiedContact, verifiedContact] = province.data;
  it("gets the provinceName and sorted contactList from the provinceSlug params", () => {
    expect(
      getStaticProps({
        params: { provinceSlug: province.slug },
      }),
    ).toEqual({
      props: {
        provinceSlug: province.slug,
        provinceName: province.name,
        contactList: [verifiedContact, unverifiedContact],
      },
    });
  });
});
