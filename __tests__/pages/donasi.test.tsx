import React from "react";

import { render, screen } from "@testing-library/react";
import { DonationCard } from "~/components/donasi/donation-card";
import informasiDonasi from "~/lib/content/informasi-donasi";
import DonasiPage, { getStaticProps } from "~/pages/donasi";

jest.mock("~/lib/content/informasi-donasi");
jest.mock("next/router", () => require("next-router-mock"));

describe("DonasiPage", () => {
  const { donations } = informasiDonasi;
  const [donation] = donations;

  it("renders the title and the breadcrumbs correctly", () => {
    render(<DonasiPage informasiDonasi={informasiDonasi} />);

    const title = screen.getByText(/Donasi dan Penggalangan Dana/i);
    expect(title).toBeVisible();

    const breadcrumbs = screen.getByText(/^Donasi$/i);
    expect(breadcrumbs).toBeVisible();
    expect(breadcrumbs).toHaveAttribute("href", "/donasi");
  });

  it("renders the donation card correctly", () => {
    render(
      <DonationCard
        category={donation.category}
        image={donation.image}
        title={donation.title}
        url={donation.url}
      />,
    );
    const cardImage = screen.getByAltText(`donasi covid`);
    expect(cardImage).toBeVisible();
    const donation_category = screen.getByText(donation.category);
    expect(donation_category).toBeVisible();
    const donation_title = screen.getByText(donation.title);
    expect(donation_title).toBeVisible();
    const donation_button = screen.getByTestId(
      `donation-button-${donation.title}`,
    );
    expect(donation_button).toBeVisible();
    expect(donation_button).toHaveAttribute("href", donation.url);
  });
});

describe("getStaticProps", () => {
  it("returns the props from the donation information", () => {
    expect(getStaticProps({})).toEqual({
      props: {
        informasiDonasi,
      },
    });
  });
});
