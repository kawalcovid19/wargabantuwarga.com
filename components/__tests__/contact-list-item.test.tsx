import { render, screen } from "@testing-library/react";
import React from "react";
import userEvent from "@testing-library/user-event";
import { perBuild } from "@jackfranklin/test-data-bot";
import { ContactListItem } from "../contact-list-item";
import { contactBuilder } from "~/lib/data/__mocks__/builders/provinces";

describe("ContactListItem", () => {
  const contact = contactBuilder();

  it("renders OpenMapButton correctly", () => {
    render(
      <ContactListItem
        contact={contact}
        provinceName="DKI Jakarta"
        provinceSlug="dki-jakarta"
      />,
    );

    jest.spyOn(window, "open").mockImplementation((url) => {
      expect(url).toEqual(
        `https://www.google.com/maps/search/?api=1&query=${contact.alamat}`,
      );
      return null;
    });
    userEvent.click(screen.getByText(/buka peta/i));
  });

  it("renders 'ketersediaan' badge if the property is not empty", () => {
    const contactWithKetersediaan = contactBuilder({
      overrides: {
        ketersediaan: "Tersedia",
      },
    });

    render(
      <ContactListItem
        contact={contactWithKetersediaan}
        provinceName="DKI Jakarta"
        provinceSlug="dki-jakarta"
      />,
    );

    const elem = screen.getByText((content, element) => {
      return (
        content == "Tersedia" &&
        element?.tagName.toLowerCase() == "span" &&
        element.classList.contains("bg-green-100") &&
        element.classList.contains("text-green-800")
      );
    });

    expect(elem).toBeVisible();
  });

  it("does not render 'ketersediaan' badge if the property is empty", () => {
    const contactWithoutKetersediaan = contactBuilder({
      overrides: {
        ketersediaan: perBuild(() => ""),
      },
    });

    render(
      <ContactListItem
        contact={contactWithoutKetersediaan}
        provinceName="DKI Jakarta"
        provinceSlug="dki-jakarta"
      />,
    );

    const elem = screen.queryByText((content, element) => {
      return (
        ["Tersedia", "Tidak Tersedia"].includes(content) &&
        element?.tagName.toLowerCase() == "span" &&
        (element.classList.contains("bg-green-100") ||
          element.classList.contains("bg-red-100")) &&
        (element.classList.contains("text-green-800") ||
          element.classList.contains("text-red-800"))
      );
    });

    expect(elem).toBeNull();
  });
});
