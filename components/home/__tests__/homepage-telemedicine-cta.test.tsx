import { render, screen } from "@testing-library/react";
import { HomePageTelemedicineCTA } from "..//homepage-telemedicine-cta";

describe("HomePageTelemedicineCta", () => {
  it("renders correctly", () => {
    render(<HomePageTelemedicineCTA />);
    const imgTelemedicine = screen.getByAltText(
      "Telemedicine Gratis (Inisiatif Beberapa Dokter) - Cek Sekarang",
    );

    expect(imgTelemedicine).toBeInTheDocument();
    expect(imgTelemedicine).toHaveAttribute(
      "src",
      "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    );
  });
});
