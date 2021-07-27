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

  it("renders keyword input & filter value selected based on url parameter", () => {
    const wrapper = render(
      <ProvincePage
        contactList={province.data}
        provinceName={province.name}
        provinceSlug={province.slug}
      />,
    );
    const location = {
      ...window.location,
      search: `?q=Medika&kebutuhan=${province.data[0].kebutuhan}`,
    };
    Object.defineProperty(window, "location", {
      writable: true,
      value: location,
    });
    setTimeout(() => {
      const input = wrapper.getByLabelText("Cari kontak:");
      expect(input).toHaveValue("Medika");
      const select = wrapper.getByLabelText("Kategori");
      expect(select).toHaveValue(province.data[0].kebutuhan);
    }, 200);
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
  const [unverifiedContact, verifiedContactBravo, verifiedContactAlpha] =
    province.data;

  it("gets the provinceName and sorted contactList from the provinceSlug params", () => {
    expect(
      getStaticProps({
        params: { provinceSlug: province.slug },
      }),
    ).toEqual({
      props: {
        provinceSlug: province.slug,
        provinceName: province.name,
        contactList: [
          verifiedContactAlpha,
          verifiedContactBravo,
          unverifiedContact,
        ],
      },
    });
  });

  it("returns an empty provinceName and null contactList given a non-existent provinceSlug", () => {
    expect(getStaticProps({ params: { provinceSlug: "foo" } })).toEqual({
      props: {
        provinceSlug: "foo",
        provinceName: "",
        contactList: null,
      },
    });
  });

  it("returns an empty provinceName and null contactList given an empty params", () => {
    expect(getStaticProps({})).toEqual({
      props: {
        provinceName: "",
        contactList: null,
      },
    });
  });
});
