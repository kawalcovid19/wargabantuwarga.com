import { render, screen } from "@testing-library/react";
import { HomePageTelemedicineCTA } from "..//homepage-telemedicine-cta";

describe("HomePageTelemedicineCta", () => {
  it("renders correctly", () => {
    render(<HomePageTelemedicineCTA />);
    const imgTelemedicine = screen.getByAltText(
      "Telemedicine Gratis (Inisiatif Beberapa Dokter) - Cek Sekarang",
    );

    const navigationImg = imgTelemedicine.closest("a");

    expect(imgTelemedicine).toBeVisible();
    expect(navigationImg).toHaveAttribute("href", "/telemedicine");
  });
});
