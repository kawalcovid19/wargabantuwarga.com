import React from "react";

import { render, screen } from "@testing-library/react";
import entityGroup from "~/lib/data/law-firms";
import LawFirmPage, {
  getStaticPaths,
  getStaticProps,
} from "~/pages/lbh/[lawFirmSlug]";

jest.mock("~/lib/data/law-firms");

describe("LawFirmPage", () => {
  const [lawFirm] = entityGroup.data;

  it("renders the title and the breadcrumbs correctly", () => {
    render(<LawFirmPage lawFirm={lawFirm} />);

    const lawFirmListBreadcrumbs = screen.getByText(/^lembaga bantuan hukum$/i);
    expect(lawFirmListBreadcrumbs).toBeVisible();
    expect(lawFirmListBreadcrumbs).toHaveAttribute("href", `/lbh`);

    const [lawFirmBreadcrumbs, title] = screen.getAllByText(lawFirm.nama_lbh);
    expect(lawFirmBreadcrumbs).toBeVisible();
    expect(lawFirmBreadcrumbs).toHaveAttribute("href", `/lbh/${lawFirm.slug}`);

    expect(title).toBeVisible();
  });
});

describe("getStaticPaths", () => {
  it("returns the correct paths", () => {
    const paths = entityGroup.data.map((lawFirm) => ({
      params: {
        lawFirmSlug: lawFirm.slug,
      },
    }));
    expect(getStaticPaths({})).toEqual({
      fallback: false,
      paths,
    });
  });
});

describe("getStaticProps", () => {
  const [lawFirm] = entityGroup.data;

  it("gets the lawFirm from the lawFirmSlug params", () => {
    expect(
      getStaticProps({
        params: { lawFirmSlug: lawFirm.slug },
      }),
    ).toEqual({
      props: {
        lawFirm,
      },
    });
  });

  it("returns undefined only given an empty params", () => {
    expect(getStaticProps({})).toEqual({
      props: {
        lawFirm: undefined,
      },
    });
  });
});
