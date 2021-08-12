import React from "react";

import { render, screen } from "@testing-library/react";
import EducationPage, { getStaticProps } from "~/pages/edukasi";
import educations from "~/lib/content/educations";

jest.mock("~/lib/content/educations");
jest.mock("next/router", () => require("next-router-mock"));

describe("EducationPage", () => {
  const { topics } = educations;

  it("renders the title, description and breadcrumbs correctly", async () => {
    render(<EducationPage educations={educations} />);

    const title = screen.getByRole("heading", {
      name: /Laman Edukasi Covid-19/i,
    });
    expect(title).toBeVisible();

    const description = screen.getByText(
      /Kumpulan informasi terbaru COVID-19, tips menjaga kesehatan selama pandemi, vaksinasi, hingga penanganan jika Anda terkonfirmasi positif COVID-19./i,
    );
    expect(description).toBeVisible();

    const breadcrumbs = screen.getByRole("link", {
      name: /Laman Edukasi Covid-19/i,
    });
    expect(breadcrumbs).toBeVisible();
    expect(breadcrumbs).toHaveAttribute("href", "/edukasi");
  });

  it("renders the topics correctly", () => {
    render(<EducationPage educations={educations} />);

    topics.forEach((topic) => {
      expect(screen.getByText(topic.topic)).toBeVisible();

      topic.contents.forEach((content) => {
        const link = screen.getByTestId(`next-link-${content.title}`);

        expect(screen.getByText(content.title)).toBeVisible();
        expect(link).toBeVisible();
        expect(link).toHaveAttribute("href", content.url);
        expect(
          screen.getByTestId(`external-link-icon-${content.title}`),
        ).toBeVisible();
      });
    });
  });
});

describe("getStaticProps", () => {
  it("returns the props from the education contents correctly", () => {
    expect(getStaticProps({})).toEqual({
      props: { educations },
    });
  });
});
