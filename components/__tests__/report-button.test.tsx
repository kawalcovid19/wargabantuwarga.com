import React from "react";

import { REPORT_CONTACT_FORM } from "~/constants/report";
import { provinceBuilder } from "~/lib/builders/provinces";
import { Contact, Province } from "~/lib/provinces";
import { stripTags } from "~/lib/string-utils";

import { ReportButton } from "../report-button";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("ReportButton", () => {
  it("opens the form link with correct query params on click", () => {
    const province: Province = provinceBuilder();
    const contact: Contact = province.data[0];

    render(<ReportButton contact={contact} provinceName={province.name} />);

    jest.spyOn(window, "open").mockImplementation((url, target) => {
      const formQuery = `&entry.346789668=${
        contact.kebutuhan
      }&entry.323081545=${province.name}&entry.68818336=${
        contact.penyedia
      }&entry.217416134=${stripTags(contact.kontak ?? "")}`;
      expect(url).toEqual(REPORT_CONTACT_FORM.concat(encodeURI(formQuery)));
      expect(target).toEqual("_blank");
      return null;
    });
    userEvent.click(screen.getByText(/laporkan kesalahan/i));
  });
});
