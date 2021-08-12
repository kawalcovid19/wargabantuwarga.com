import { perBuild } from "@jackfranklin/test-data-bot";
import { render, screen } from "@testing-library/react";
import React from "react";
import { ContactDetails } from "~/components/contact-details";
import { contactBuilder } from "~/lib/data/__mocks__/builders/provinces";

describe("ContactDetails", () => {
  it("renders 'ketersediaan' row when the property is not empty", () => {
    const contactWithKetersediaan = contactBuilder({
      overrides: {
        ketersediaan: "Tersedia",
      },
    });

    render(
      <ContactDetails
        contact={contactWithKetersediaan}
        provinceName="DKI Jakarta"
      />,
    );

    expect(screen.getByText("Tersedia")).toBeVisible();
  });

  it("does not render 'ketersediaan' row when the property is empty", () => {
    const contactWithKetersediaan = contactBuilder({
      overrides: {
        ketersediaan: perBuild(() => ""),
      },
    });

    render(
      <ContactDetails
        contact={contactWithKetersediaan}
        provinceName="DKI Jakarta"
      />,
    );

    expect(screen.queryByText("Tersedia")).toBeNull();
  });
});
