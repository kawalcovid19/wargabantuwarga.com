import React from "react";

import { render, screen } from "@testing-library/react";
import { ResponsiveImg } from "~/components/ui/responsive-img";

const CLOUDINARY_URL =
  "https://res.cloudinary.com/wargabantuwarga/image/upload/v1627049958/hero_banner_desktop_zat71c.png";

describe("esponsiveImg", () => {
  it("does not render incomplete data", () => {
    render(<ResponsiveImg />);

    expect(screen.queryByRole("img")).toBeNull();
  });

  it("renders non-Cloudinary image", () => {
    render(<ResponsiveImg src="/favicon-72x72.png" />);

    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      "/favicon-72x72.png",
    );
  });

  it("renders non-Cloudinary image with custom alt text", () => {
    render(<ResponsiveImg alt="icon logo WBW" src="/favicon-72x72.png" />);

    expect(screen.getByRole("img")).toHaveAttribute("alt", "icon logo WBW");
  });

  it("renders Cloudinary image responsively", () => {
    render(<ResponsiveImg src={CLOUDINARY_URL} />);

    expect(screen.getByRole("img")).toHaveAttribute("src", CLOUDINARY_URL);
  });
});
