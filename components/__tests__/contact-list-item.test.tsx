import { render, screen } from "@testing-library/react";
import React from "react";
import userEvent from "@testing-library/user-event";
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
});
