import { render, screen } from "@testing-library/react";
import { HomepageSupportedApps } from "../homepage-supported-apps";
import supportedApps from "~/lib/content/officially-supported-apps";

describe("HomepageSupportedApps", () => {
  it("render homepage donation widget correctly", () => {
    render(<HomepageSupportedApps />);

    const section_title_1 = screen.getByText(
      /Download aplikasi telemedicine yang/i,
    );
    const section_title_2 = screen.getByText(/didukung Kemenkes:/i);
    expect(section_title_1).toBeVisible();
    expect(section_title_2).toBeVisible();
  });

  it("render supported apps correctly", () => {
    render(<HomepageSupportedApps />);

    const list_supported_apps = screen.getAllByRole("link");
    expect(list_supported_apps).toHaveLength(
      supportedApps.application.length + 1,
    );
  });
});
