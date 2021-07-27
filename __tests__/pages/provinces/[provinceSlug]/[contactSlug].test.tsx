import React from "react";

import provinces from "~/lib/provinces";
import ContactPage, {
  getStaticPaths,
} from "~/pages/provinces/[provinceSlug]/[contactSlug]";

import { render, screen } from "@testing-library/react";

jest.mock("~/lib/provinces");

describe("ContactPage", () => {
  const [province] = provinces;
  const [contact] = province.data;

  it("renders the title and the breadcrumbs correctly", () => {
    render(
      <ContactPage
        contact={contact}
        provinceName={province.name}
        provinceSlug={province.slug}
      />,
    );

    const provinceBreadcrumbs = screen.getByText(province.name);
    expect(provinceBreadcrumbs).toBeVisible();
    expect(provinceBreadcrumbs).toHaveAttribute(
      "href",
      `/provinces/${province.slug}`,
    );

    const [contactBreadcrumbs, title] = screen.getAllByText(
      contact.penyedia as string,
    );
    expect(contactBreadcrumbs).toBeVisible();
    expect(contactBreadcrumbs).toHaveAttribute(
      "href",
      `/provinces/${province.slug}/${contact.slug}`,
    );
    expect(title).toBeVisible();
  });
});

describe("getStaticPaths", () => {
  it("returns the correct paths", () => {
    const paths = provinces.flatMap((province) =>
      province.data.map((contact) => ({
        params: {
          provinceSlug: province.slug,
          contactSlug: contact.slug,
        },
      })),
    );
    expect(getStaticPaths({})).toEqual({
      fallback: false,
      paths,
    });
  });
});
