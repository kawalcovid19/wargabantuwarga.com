import React from "react";

import { faqBuilder } from "~/lib/__mocks__/builders/faq";
import faqSheets from "~/lib/faqs";

import FaqPage, { getStaticProps } from "../../pages/faq";

import { perBuild } from "@jackfranklin/test-data-bot";
import { render, screen } from "@testing-library/react";

describe("FaqPage", () => {
  const faq = faqBuilder();
  const faqs = [faq];

  it("renders the title correctly", () => {
    render(<FaqPage faqSheets={faqs} />);

    expect(screen.getByText(/pertanyaan yang sering ditanyakan/i))
      .toMatchInlineSnapshot(`
      <h2
        class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"
      >
        Pertanyaan yang sering ditanyakan
      </h2>
    `);
  });

  it("renders the questions and answers correctly", () => {
    render(<FaqPage faqSheets={faqs} />);

    expect(screen.getByText(faq.pertanyaan)).toBeVisible();
    expect(screen.getByText(faq.jawaban)).toBeVisible();
  });

  it("renders the links correctly", () => {
    render(<FaqPage faqSheets={faqs} />);

    const link = screen.getByText(faq.sumber as string);

    expect(screen.getByText(/sumber:/i)).toBeVisible();
    expect(link).toBeVisible();
    expect(link).toHaveAttribute("href", faq.link);
  });

  it("renders the source without link correctly", () => {
    const faqWithoutSourceLink = faqBuilder({
      overrides: {
        link: perBuild(() => undefined),
      },
    });

    render(<FaqPage faqSheets={[faqWithoutSourceLink]} />);

    expect(
      screen.getByText(`Sumber: ${faqWithoutSourceLink.sumber}`),
    ).toBeVisible();
  });
});

describe("getStaticProps", () => {
  it("returns the props from the faq-sheets correctly", () => {
    expect(getStaticProps({})).toEqual({
      props: { faqSheets },
    });
  });
});
