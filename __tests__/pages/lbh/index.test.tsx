import React from "react";

import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LawFirmsPage, { getStaticProps } from "~/pages/lbh";
import { lawFirmBuilder } from "~/lib/data/__mocks__/builders/law-firms";
import entityGroup from "~/lib/data/law-firms";

jest.mock("~/lib/data/law-firms");
jest.mock("next/router", () => require("next-router-mock"));

describe("LawFirmsPage", () => {
  const lawFirm1 = lawFirmBuilder();
  const lawFirm2 = lawFirmBuilder();
  const lawFirmList = [lawFirm1, lawFirm2];

  it("renders the title and the breadcrumbs correctly", () => {
    render(<LawFirmsPage lawFirmList={lawFirmList} />);

    const [breadcrumbs, title] = screen.getAllByText("Lembaga Bantuan Hukum");

    expect(breadcrumbs).toBeVisible();
    expect(breadcrumbs).toHaveAttribute("href", "/lbh");
    expect(title).toBeVisible();
  });

  it("renders the law firms list correctly", () => {
    render(<LawFirmsPage lawFirmList={lawFirmList} />);

    expect(screen.getByText(lawFirm1.nama_lbh)).toBeVisible();

    const lbhFirmLink = screen.getByRole("link", {
      name: lawFirm1.nama_lbh,
    });
    expect(lbhFirmLink).toHaveAttribute("href", `/lbh/${lawFirm1.slug}`);

    expect(within(lbhFirmLink).getByText(lawFirm1.nama_lbh)).toBeVisible();
  });

  it("performs the search functionality correctly", async () => {
    const aceh = lawFirmBuilder({
      overrides: {
        nama_lbh: "LBH Aceh",
      },
    });
    const medan = lawFirmBuilder({
      overrides: {
        nama_lbh: "LBH Medan",
      },
    });

    render(<LawFirmsPage lawFirmList={[aceh, medan]} />);

    expect(screen.getByText(aceh.nama_lbh)).toBeVisible();

    userEvent.type(
      screen.getByRole("textbox", {
        name: /cari lembaga bantuan hukum:/i,
      }),
      medan.nama_lbh,
    );
    userEvent.click(screen.getByRole("button", { name: /cari/i }));

    expect(screen.queryByText(aceh.nama_lbh)).not.toBeInTheDocument();
    expect(screen.getByText(medan.nama_lbh)).toBeVisible();
  });
});

describe("getStaticProps", () => {
  it("transforms entityGroup into lawFirmList props correctly", () => {
    // TODO: Do a better test because this test is merely a copy of the implementation
    const lawFirmList = entityGroup.data;
    expect(getStaticProps({})).toEqual({
      props: {
        lawFirmList,
      },
    });
  });
});
