import React from "react";

import { render, screen } from "@testing-library/react";
import { LinksWell } from "~/components/links-well";

describe("LinksWell", () => {
  it("does not render incomplete data", () => {
    // @ts-expect-error testing incomplete data
    const { container } = render(<LinksWell />);

    expect(container.firstChild).toBeNull();
  });

  it("renders a title and at least one link", () => {
    render(
      <LinksWell
        links={[{ href: "/", text: "sample link" }]}
        title="sample title"
      />,
    );

    expect(screen.getByText("sample title")).toBeVisible();
    expect(screen.getByText("sample link")).toBeVisible();
  });

  it("renders a title and all links", () => {
    render(
      <LinksWell
        links={[
          { href: "/one", text: "sample link 1" },
          { href: "/two", text: "sample link 2" },
        ]}
        title="sample title"
      />,
    );

    expect(screen.getByText("sample title")).toBeVisible();
    expect(screen.getByText("sample link 1")).toBeVisible();
    expect(screen.getByText("sample link 2")).toBeVisible();
  });

  it("renders external links correctly", () => {
    render(
      <LinksWell
        links={[
          {
            href: "https://docs.google.com/spreadsheets/xxxx",
            text: "Database Layanan Donor Plasma",
          },
        ]}
        title="sample title"
      />,
    );

    const link = screen.getByRole("link", {
      name: "Database Layanan Donor Plasma",
    });

    expect(link).toHaveAttribute(
      "href",
      "https://docs.google.com/spreadsheets/xxxx",
    );
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute(
      "rel",
      "external nofollow noopener noreferrer",
    );
  });

  it("renders internal links correctly", () => {
    render(
      <LinksWell
        links={[
          { href: "/faq", text: "Info Umum A" },
          {
            href: "https://www.wargabantuwarga.com/faq",
            text: "Info Umum B",
            internal: true,
          },
        ]}
        title="sample title"
      />,
    );

    const linkA = screen.getByRole("link", {
      name: "Info Umum A",
    });

    expect(linkA).toHaveAttribute("href", "/faq");
    expect(linkA).not.toHaveAttribute("target");
    expect(linkA).not.toHaveAttribute("rel");

    const linkB = screen.getByRole("link", {
      name: "Info Umum B",
    });

    expect(linkB).toHaveAttribute(
      "href",
      "https://www.wargabantuwarga.com/faq",
    );
    expect(linkB).not.toHaveAttribute("target");
    expect(linkB).not.toHaveAttribute("rel");
  });

  it("renders phone links correctly", () => {
    render(
      <LinksWell
        links={[
          { href: "tel:+117", text: "Contact Center BNPB Donor Konvalesen" },
        ]}
        title="sample title"
      />,
    );

    const link = screen.getByRole("link", {
      name: "Contact Center BNPB Donor Konvalesen",
    });

    expect(link).toHaveAttribute("href", "tel:+117");
    expect(link).not.toHaveAttribute("target");
    expect(link).not.toHaveAttribute("rel");
  });

  it("renders a properly labelled section", () => {
    render(
      <LinksWell
        links={[{ href: "/", text: "sample link" }]}
        title="sample title"
      />,
    );

    expect(screen.getByRole("region", { name: "sample title" })).toBeVisible();
  });
});
