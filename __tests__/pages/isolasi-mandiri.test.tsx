import React from "react";

import StackedLink from "~/components/layout/stacked-link";
import iso from "~/lib/isoman-contents";
import IsomanPage, { getStaticProps } from "~/pages/isolasi-mandiri";

import { render, screen } from "@testing-library/react";

jest.mock("next/router", () => require("next-router-mock"));

describe("IsomanPage", () => {
  const { isoman_contents } = iso;
  const [isoman_data] = isoman_contents;

  it("renders the title correctly", () => {
    render(<IsomanPage isoman={iso} />);

    expect(screen.getByText(/Pedoman Isolasi Mandiri/i)).toMatchInlineSnapshot(`
      <h2
        class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"
      >
        Pedoman Isolasi Mandiri
      </h2>
    `);
  });

  it("renders the category and it's description correctly", () => {
    render(<IsomanPage isoman={iso} />);
    expect(screen.getByText(isoman_data.title)).toBeVisible();
    expect(screen.getByText(isoman_data.description)).toBeVisible();
  });

  it("renders the stacked links correctly", () => {
    render(<StackedLink links={isoman_data.links} />);

    isoman_data.links.forEach((isoman) => {
      const link = screen.getByTestId(`next-link-${isoman.title}`);

      expect(screen.getByText(isoman.title)).toBeVisible();
      expect(link).toBeVisible();
      expect(link).toHaveAttribute("href", isoman.url);
      expect(
        screen.getByTestId(`external-link-icon-${isoman.title}`),
      ).toBeVisible();
    });
  });
});

describe("getStaticProps", () => {
  it("returns the props from the isoman-contents correctly", () => {
    expect(getStaticProps({})).toEqual({
      props: { isoman: iso },
    });
  });
});
