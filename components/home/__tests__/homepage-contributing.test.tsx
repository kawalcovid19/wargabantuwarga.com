import { render, screen } from "@testing-library/react";
import { HomePageContributing } from "../homepage-contributing";

describe("HomePageContributing", () => {
  it("renders correctly", () => {
    render(<HomePageContributing />);

    expect(screen.getByText(/cara berkontribusi/i)).toBeVisible();
    expect(screen.getByText(/Daftar Jadi Relawan/i)).toHaveAttribute(
      "href",
      "https://www.indorelawan.org/activity/60e2ed45164da80018b0e246",
    );
  });
});
