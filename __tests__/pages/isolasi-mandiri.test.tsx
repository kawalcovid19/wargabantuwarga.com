import React from "react";

import StackedLink from "~/components/stacked-link";
import iso from "~/lib/isoman-contents";
import IsomanPage, { getStaticProps } from "~/pages/isolasi-mandiri";

import { render, screen } from "@testing-library/react";

jest.mock("next/router", () => require("next-router-mock"));

describe("IsomanPage", () => {
  const { isoman_contents } = iso;
  const [isoman_data] = isoman_contents;

  it("renders the title and the breadcrumbs correctly", () => {
    render(<IsomanPage isoman={iso} />);

    const title = screen.getByText(/Pedoman Isolasi Mandiri/i);
    expect(title).toBeVisible();

    const breadcrumbs = screen.getByText(/^Isolasi Mandiri$/i);
    expect(breadcrumbs).toBeVisible();
    expect(breadcrumbs).toHaveAttribute("href", "/isolasi-mandiri");
  });

  it("renders the category and it's description correctly", () => {
    render(<IsomanPage isoman={iso} />);
    expect(screen.getByText(isoman_data.title)).toBeVisible();
    expect(screen.getByText(isoman_data.description)).toBeVisible();
  });

  it("renders the stacked links correctly", () => {
    // eslint-disable-next-line no-lone-blocks
    {
      isoman_data.links.forEach((link, i) => {
        render(
          <StackedLink key={i} title={link.title} uniqId={i} url={link.url} />,
        );
        const linkItem = screen.getByTestId(`next-link-${link.title}`);
        expect(screen.getByText(link.title)).toBeVisible();
        expect(linkItem).toBeVisible();
        expect(linkItem).toHaveAttribute("href", link.url);
        expect(
          screen.getByTestId(`external-link-icon-${link.url}`),
        ).toBeVisible();
      });
    }

    // isoman_data.links.forEach((isoman) => {
    //   const link = screen.getByTestId(`next-link-${isoman.title}`);

    //   });
    // });
  });
});

describe("getStaticProps", () => {
  it("returns the props from the isoman-contents correctly", () => {
    expect(getStaticProps({})).toEqual({
      props: { isoman: iso },
    });
  });
});
