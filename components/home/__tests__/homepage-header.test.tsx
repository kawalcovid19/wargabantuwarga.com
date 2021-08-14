import React from "react";

import { render, screen } from "@testing-library/react";
import { HomepageHeader } from "../homepage-header";

describe("HomepageHeader", () => {
  it("renders the header image", () => {
    render(<HomepageHeader />);

    const headerImage = screen.getByAltText("WargaBantuWarga background");

    expect(headerImage).toBeInTheDocument();
    expect(headerImage).toHaveAttribute(
      "src",
      "https://res.cloudinary.com/wargabantuwarga/image/upload/c_scale,w_3840,q_90,cs_tinysrgb,f_auto/v1627049958/hero_banner_desktop_zat71c",
    );
  });

  it("renders the title and description text correctly", () => {
    render(<HomepageHeader />);

    const [titleText, descriptionText] = screen.getAllByText(/warga/i);

    expect(titleText).toHaveTextContent("WargaBantuWarga");
    expect(descriptionText).toHaveTextContent(
      "Inisiatif warga untuk berbagi informasi dan membantu warga yang terdampak Covid-19.",
    );
  });
});
