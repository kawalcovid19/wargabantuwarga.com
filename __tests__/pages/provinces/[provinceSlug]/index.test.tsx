import React from "react";

import provinces from "~/lib/provinces";
import ProvincePage, {
  getStaticPaths,
  getStaticProps,
} from "~/pages/provinces/[provinceSlug]";

import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

jest.mock("~/lib/provinces");
jest.mock("next/router", () => require("next-router-mock"));

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
      search: `?q=Medika&kebutuhan=${province.data[0].kebutuhan}&lokasi=${province.data[0].lokasi}`,
    };
    Object.defineProperty(window, "location", {
      writable: true,
      value: location,
    });
    setTimeout(() => {
      const input = wrapper.getByLabelText("Cari kontak:");
      expect(input).toHaveValue("Medika");
      const select1 = wrapper.getByLabelText("Kategori");
      expect(select1).toHaveValue(province.data[0].kebutuhan);
      const select2 = wrapper.getByLabelText("Lokasi");
      expect(select2).toHaveValue(province.data[0].lokasi);
    }, 200);
  });

  it("preserve additional url parameters", () => {
    const location = {
      ...window.location,
      search: `?q=Medika&kebutuhan=${province.data[0].kebutuhan}&utm_campaign=sdtt&utm_medium=message`,
    };
    Object.defineProperty(window, "location", {
      writable: true,
      value: location,
    });
    const wrapper = render(
      <ProvincePage
        contactList={province.data}
        provinceName={province.name}
        provinceSlug={province.slug}
      />,
    );
    const input = wrapper.getByLabelText("Cari kontak:");
    fireEvent.change(input, { target: { value: "keyword" } });
    userEvent.click(screen.getByText("Cari"));
    setTimeout(() => {
      expect(window.location.search).toEqual(
        "?q=keyword&utm_campaign=sdtt&utm_medium=message",
      );
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
