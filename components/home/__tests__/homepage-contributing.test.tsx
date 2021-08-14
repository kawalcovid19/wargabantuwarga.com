import { render, screen } from "@testing-library/react";
import { HomePageContributing } from "../homepage-contributing";

describe("HomePageContributing", () => {
  it("renders correctly", () => {
    render(<HomePageContributing />);

    expect(screen.getByText(/cara berkontribusi/gi)).toBeInTheDocument();
  });
});
