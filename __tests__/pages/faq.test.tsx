import React from "react";

import { faqBuilder } from "~/lib/__mocks__/builders/faq";
import faqs from "~/lib/faqs";

import FaqPage, { getStaticProps } from "../../pages/faq";

import { perBuild } from "@jackfranklin/test-data-bot";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

jest.mock("~/lib/faqs");
jest.mock("next/router", () => require("next-router-mock"));

describe("FaqPage", () => {
  const [faq] = faqs;

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

  it("performs the search functionality correctly", () => {
    const firstFaq = faqBuilder();
    const secondFaq = faqBuilder();

    render(<FaqPage faqSheets={[firstFaq, secondFaq]} />);

    expect(screen.getByText(firstFaq.jawaban)).toBeVisible();

    userEvent.type(
      screen.getByRole("textbox", {
        name: /cari pertanyaan:/i,
      }),
      secondFaq.jawaban,
    );
    userEvent.click(
      screen.getByRole("button", {
        name: /cari/i,
      }),
    );

    expect(screen.queryByText(firstFaq.jawaban)).not.toBeInTheDocument();
    expect(screen.getByText(secondFaq.jawaban)).toBeVisible();
  });

  it("performs the filter functionality correctly", () => {
    const firstFaq = faqBuilder();
    const secondFaq = faqBuilder();

    render(<FaqPage faqSheets={[firstFaq, secondFaq]} />);

    expect(screen.getByText(firstFaq.jawaban)).toBeVisible();

    userEvent.selectOptions(
      screen.getByRole("combobox", {
        name: /kategori pertanyaan/i,
      }),
      secondFaq.kategori_pertanyaan,
    );

    expect(screen.queryByText(firstFaq.jawaban)).not.toBeInTheDocument();
    expect(screen.getByText(secondFaq.jawaban)).toBeVisible();
  });
});

describe("getStaticProps", () => {
  it("returns the props from the faq-sheets correctly", () => {
    expect(getStaticProps({})).toEqual({
      props: { faqSheets: faqs },
    });
  });
});
