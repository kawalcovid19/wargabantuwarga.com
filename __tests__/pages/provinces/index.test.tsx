import React from "react";

import {
  render,
  screen,
  waitForElementToBeRemoved,
  within,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import router from "next/router";
import { provinceListItemBuilder } from "~/components/__mocks__/builders/province-list";
import { dateMockBuilder } from "~/lib/__mocks__/builders/date-mock";
import provinces from "~/lib/data/provinces";
import { getInitial } from "~/lib/string-utils";
import ProvincesPage, { getStaticProps } from "~/pages/provinces";

jest.mock("~/lib/data/provinces");
jest.mock("next/router", () => require("next-router-mock"));

describe("ProvincesPage", () => {
  const provinceListItem = provinceListItemBuilder();
  const provinceList = [provinceListItem];

  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it("renders the title and the breadcrumbs correctly", () => {
    render(<ProvincesPage provincesList={provinceList} />);

    const [breadcrumbs, title] = screen.getAllByText("Provinsi");

    expect(breadcrumbs).toBeVisible();
    expect(breadcrumbs).toHaveAttribute("href", "/provinces");
    expect(title).toBeVisible();
  });

  it("renders the provinces list correctly", () => {
    render(<ProvincesPage provincesList={provinceList} />);

    expect(screen.getByText(provinceListItem.initials)).toBeVisible();

    const provinceLink = screen.getByRole("link", {
      name: /informasi faskes & alkes untuk covid-19 di provinsi/i,
    });
    expect(provinceLink).toHaveAttribute(
      "href",
      `/provinces/${provinceListItem.slug}`,
    );

    expect(within(provinceLink).getByText(provinceListItem.name)).toBeVisible();
    expect(
      within(provinceLink).getByText(`${provinceListItem.count} Entri`),
    ).toBeVisible();
  });

  it("renders the provinces list kebutuhan entry count correctly", async () => {
    const checkRenderKebutuhanEntryCount = async (
      kebutuhan: string,
      entryCount: number,
    ) => {
      await router.push(`/provinces?kebutuhan=${kebutuhan}`);
      const { unmount } = render(
        <ProvincesPage provincesList={provinceList} />,
      );

      const provinceLink = screen.getByRole("link", {
        name: /informasi faskes & alkes untuk covid-19 di provinsi/i,
      });

      expect(
        within(provinceLink).getByText(`${entryCount} Entri`),
      ).toBeVisible();

      unmount();
    };

    await checkRenderKebutuhanEntryCount(
      "Ambulans",
      provinceListItem.ambulansCount,
    );
    await checkRenderKebutuhanEntryCount(
      "Rumah%20sakit",
      provinceListItem.rsCount,
    );
    await checkRenderKebutuhanEntryCount(
      "Oksigen",
      provinceListItem.oksigenCount,
    );
    await checkRenderKebutuhanEntryCount(
      "Donor%20plasma",
      provinceListItem.donorPlasmaCount,
    );
  });

  it("renders the SEO text correctly", () => {
    const { date, monthStr } = dateMockBuilder();

    jest.setSystemTime(date);

    render(<ProvincesPage provincesList={provinceList} />);

    const seoText = screen.getByText(monthStr as string, { exact: false });
    expect(seoText).toBeVisible();
    expect(seoText).toHaveTextContent(
      `Cari & Temukan Informasi Fasilitas Kesehatan (Faskes) & Alat Kesehatan (Alkes) untuk COVID-19 di seluruh Indonesia per ${monthStr}`,
    );
  });

  it("performs the search functionality correctly", async () => {
    const dkiJakarta = provinceListItemBuilder({
      overrides: {
        name: "DKI Jakarta",
      },
    });
    const jawaTimur = provinceListItemBuilder({
      overrides: {
        name: "Jawa Timur",
      },
    });

    render(<ProvincesPage provincesList={[dkiJakarta, jawaTimur]} />);

    expect(screen.getByText(dkiJakarta.name)).toBeVisible();

    userEvent.type(
      screen.getByRole("textbox", {
        name: /cari provinsi:/i,
      }),
      jawaTimur.name,
    );

    await waitForElementToBeRemoved(() => screen.queryByText(dkiJakarta.name));

    expect(screen.queryByText(dkiJakarta.name)).not.toBeInTheDocument();
    expect(screen.getByText(jawaTimur.name)).toBeVisible();
  });
});

describe("getStaticProps", () => {
  it("transforms provinces into provinceList props correctly", () => {
    // TODO: Do a better test because this test is merely a copy of the implementation
    const provinceList = provinces.map(({ name, data, slug }) => ({
      initials: getInitial(name),
      name,
      slug,
      count: data.length,
      ambulansCount: data.filter((contact) => contact.kebutuhan === "Ambulans")
        .length,
      rsCount: data.filter((contact) => contact.kebutuhan === "Rumah sakit")
        .length,
      donorPlasmaCount: data.filter(
        (contact) => contact.kebutuhan === "Donor plasma",
      ).length,
      oksigenCount: data.filter((contact) => contact.kebutuhan === "Oksigen")
        .length,
    }));
    expect(getStaticProps({})).toEqual({
      props: {
        provincesList: provinceList,
      },
    });
  });
});
