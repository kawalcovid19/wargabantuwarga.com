import React from "react";

import StackedLink from "~/components/layout/stacked-link";
import isolasiMandiri from "~/lib/content/isolasi-mandiri";
import IsolasiMandiriPage, { getStaticProps } from "~/pages/isolasi-mandiri";

import { render, screen } from "@testing-library/react";

jest.mock("~/lib/content/isolasi-mandiri");
jest.mock("next/router", () => require("next-router-mock"));

describe("IsomanPage", () => {
  const { categories } = isolasiMandiri;
  const [category] = categories;

  it("renders the title and the breadcrumbs correctly", () => {
    render(<IsolasiMandiriPage isolasiMandiri={isolasiMandiri} />);

    const title = screen.getByText(/Pedoman Isolasi Mandiri/i);
    expect(title).toBeVisible();

    const breadcrumbs = screen.getByText(/^Isolasi Mandiri$/i);
    expect(breadcrumbs).toBeVisible();
    expect(breadcrumbs).toHaveAttribute("href", "/isolasi-mandiri");
  });

  it("renders the category and it's description correctly", () => {
    render(<IsolasiMandiriPage isolasiMandiri={isolasiMandiri} />);
    expect(screen.getByText(category.title)).toBeVisible();
    expect(screen.getByText(category.description)).toBeVisible();
  });

  it("renders the stacked links correctly", () => {
    render(<StackedLink links={category.links} />);

    category.links.forEach((url) => {
      const link = screen.getByTestId(`next-link-${url.title}`);

      expect(screen.getByText(url.title)).toBeVisible();
      expect(link).toBeVisible();
      expect(link).toHaveAttribute("href", url.url);
      expect(
        screen.getByTestId(`external-link-icon-${url.title}`),
      ).toBeVisible();
    });
  });
});

describe("getStaticProps", () => {
  it("returns the props from the isoman-contents correctly", () => {
    expect(getStaticProps({})).toEqual({
      props: { isolasiMandiri },
    });
  });
});
