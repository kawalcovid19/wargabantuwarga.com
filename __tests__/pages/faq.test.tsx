import React from "react";

import { perBuild } from "@jackfranklin/test-data-bot";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FaqPage, { getStaticProps } from "../../pages/faq";
import { faqBuilder } from "~/lib/data/__mocks__/builders/faqs";
import faqs from "~/lib/data/faqs";

jest.mock("~/lib/data/faqs");
jest.mock("next/router", () => require("next-router-mock"));

describe("FaqPage", () => {
  const [faq] = faqs;

  it("renders the title and breadcrumbs correctly", () => {
    render(<FaqPage faqs={faqs} />);

    const title = screen.getByText(/pertanyaan yang sering ditanyakan/i);
    expect(title).toBeVisible();

    const breadcrumbs = screen.getByText(/faq/i);
    expect(breadcrumbs).toBeVisible();
    expect(breadcrumbs).toHaveAttribute("href", "/faq");
  });

  it("renders the questions and answers correctly", () => {
    render(<FaqPage faqs={faqs} />);

    expect(screen.getByText(faq.pertanyaan)).toBeVisible();
    expect(screen.getByText(faq.jawaban)).toBeVisible();
  });

  it("renders the links correctly", () => {
    render(<FaqPage faqs={faqs} />);

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

    render(<FaqPage faqs={[faqWithoutSourceLink]} />);

    expect(
      screen.getByText(`Sumber: ${faqWithoutSourceLink.sumber}`),
    ).toBeVisible();
  });

  it("performs the search functionality correctly", () => {
    const firstFaq = faqBuilder();
    const secondFaq = faqBuilder();

    render(<FaqPage faqs={[firstFaq, secondFaq]} />);

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

    render(<FaqPage faqs={[firstFaq, secondFaq]} />);

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

  it("performs empty state correctly", () => {
    const firstFaq = faqBuilder();
    const secondFaq = faqBuilder();

    render(<FaqPage faqs={[firstFaq]} />);

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
    expect(screen.getByText(/Pertanyaan tidak ditemukan/i)).toBeVisible();
  });
});

describe("getStaticProps", () => {
  it("returns the props from the faq-sheets correctly", () => {
    expect(getStaticProps({})).toEqual({
      props: { faqs },
    });
  });
});
