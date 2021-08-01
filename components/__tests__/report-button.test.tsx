import React from "react";

import { REPORT_CONTACT_FORM } from "~/constants/report";
import { provinceBuilder } from "~/lib/data/__mocks__/builders/provinces";
import { Contact, Province } from "~/lib/data/provinces";
import { stripTags } from "~/lib/string-utils";

import { ReportButton } from "../report-button";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("ReportButton", () => {
  const province: Province = provinceBuilder();
  const contact: Contact = province.data[0];
  it("renders correctly", () => {
    const { container } = render(
      <ReportButton contact={contact} provinceName={province.name} />,
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="flex justify-center mt-4"
      >
        <button
          aria-label="Laporkan kesalahan"
          class="inline-flex flex-row px-4 py-2 text-sm rounded-md items-center justify-center border border-transparent font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 text-blue-700 bg-blue-100 hover:bg-blue-200 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-75 relative z-10"
          type="button"
        >
          <svg
            aria-hidden="true"
            class="-ml-1 mr-2 h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            />
          </svg>
          <span>
            Laporkan kesalahan
          </span>
        </button>
      </div>
    `);
  });

  it("opens the form link with correct query params on click", () => {
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
