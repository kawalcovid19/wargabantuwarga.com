import { render, screen } from "@testing-library/react";
import { HomePageDonation } from "../homepage-donation";
import { DonationCard } from "~/components/donasi/donation-card";
import informasiDonasi from "~/lib/content/informasi-donasi";

describe("HomePageDonation", () => {
  const { donations } = informasiDonasi;
  const [donation] = donations;
  it("render homepage donation widget correctly", () => {
    render(<HomePageDonation />);

    const section_title = screen.getByText(/Donasi Warga Terdampak/i);
    expect(section_title).toBeVisible();

    const donation_page_link = screen.getByText(/Lihat Selengkapnya/i);
    expect(donation_page_link).toBeVisible();
    expect(donation_page_link).toHaveAttribute("href", "/donasi");
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

  it("renders only two donation cards", () => {
    render(<HomePageDonation />);

    const cards = screen.getAllByAltText(`donasi covid`);

    expect(cards.length).not.toBeGreaterThan(2);
  });
});
