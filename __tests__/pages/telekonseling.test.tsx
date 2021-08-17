import React from "react";

import { render, screen } from "@testing-library/react";
import TelecounselingPage, { getStaticProps } from "~/pages/telekonseling";
import telekonseling from "~/lib/content/telekonseling";

jest.mock("~/lib/content/telekonseling");
jest.mock("next/router", () => require("next-router-mock"));

describe("TelecounselingPage", () => {
  const { supports } = telekonseling;

  it("renders the title, description and breadcrumbs correctly", async () => {
    render(<TelecounselingPage telekonseling={telekonseling} />);

    const title = screen.getByRole("heading", {
      name: /Curhat atau Telekonseling/i,
    });
    expect(title).toBeVisible();

    const description = screen.getByText(
      /Informasi mengenai relawan COVID-19 yang memberikan bantuan berupa layanan konsultasi psikologi, kesehatan, agama, dan lainnya yang relevan untuk membantu kesehatan mental terdampak COVID-19.$/i,
    );
    expect(description).toBeVisible();

    const breadcrumbs = screen.getByRole("link", {
      name: "Curhat/Telekonseling",
    });
    expect(breadcrumbs).toBeVisible();
    expect(breadcrumbs).toHaveAttribute("href", "/telekonseling");
  });

  it("renders the supports correctly", () => {
    render(<TelecounselingPage telekonseling={telekonseling} />);

    supports.forEach((support) => {
      expect(screen.getByText(support.support)).toBeVisible();

      support.contents.forEach((content) => {
        const link = screen.getByRole("link", { name: /{content.title}/i });

        expect(screen.getByText(content.title)).toBeVisible();
        expect(link).toBeVisible();
        expect(link).toHaveAttribute("href", content.url);
        expect(
          screen.getByRole("link", { name: /{content.title}/i }),
        ).toBeVisible();
      });
    });
  });
});

describe("getStaticProps", () => {
  it("returns the props from the telecounseling contents correctly", () => {
    expect(getStaticProps({})).toEqual({
      props: { telekonseling },
    });
  });
});
