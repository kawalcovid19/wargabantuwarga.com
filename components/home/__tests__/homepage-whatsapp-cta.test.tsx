import { render, screen } from "@testing-library/react";
import { HomePageWhatsAppCTA } from "../homepage-whatsapp-cta";
import siteConfig from "~/lib/content/site-config";

describe("HomePageContributing", () => {
  it("renders correctly", () => {
    render(<HomePageWhatsAppCTA />);

    const infoText = screen.getByText("Hubungi hotline sekarang");
    expect(infoText).toBeVisible();
    expect(infoText.closest("a")).toHaveAttribute(
      "href",
      "https://bit.ly/hotlinewarga",
    );
  });

  it("navigates to the configured WhatsApp contact URL", () => {
    render(<HomePageWhatsAppCTA />);

    const link = screen.getByText("Hubungi hotline sekarang").closest("a");

    expect(link).toHaveAttribute("href", siteConfig.whatsapp_contact_url);
  });
});
