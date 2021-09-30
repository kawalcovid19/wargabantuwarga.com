import { perBuild } from "@jackfranklin/test-data-bot";
import { render, screen } from "@testing-library/react";
import React from "react";
import { ContactDetails } from "~/components/contact-details";
import { contactBuilder } from "~/lib/data/__mocks__/builders/provinces";

describe("ContactDetails", () => {
  it("renders 'Catatan Ketersediaan' row when the property is not empty", () => {
    const contactWithCatatanKetersediaan = contactBuilder({
      overrides: {
        catatan_ketersediaan: "Harus membayar uang muka",
      },
    });

    render(
      <ContactDetails
        contact={contactWithCatatanKetersediaan}
        provinceName="DKI Jakarta"
      />,
    );

    expect(screen.getByText("Harus membayar uang muka")).toBeVisible();
  });

  it("does not render 'Catatan Ketersediaan' row when the property is empty", () => {
    const contactWithKetersediaan = contactBuilder({
      overrides: {
        catatan_ketersediaan: perBuild(() => ""),
      },
    });

    render(
      <ContactDetails
        contact={contactWithKetersediaan}
        provinceName="DKI Jakarta"
      />,
    );

    expect(
      screen.queryByText("Harus membayar uang muka"),
    ).not.toBeInTheDocument();
  });
});
