import React from "react";

import { REPORT_CONTACT_FORM } from "~/constants/report";
import { Contact } from "~/lib/provinces";
import { stripTags } from "~/lib/string-utils";

import { ReportButton } from "../report-button";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("ReportButton", () => {
  it("opens the form link with correct query params on click", () => {
    const contact: Contact = {
      id: "130",
      kebutuhan: "Oksigen",
      keterangan: "Isi ulang tabung oksigen",
      lokasi: "Jakarta Barat",
      penyedia: "3R Medika Gas",
      slug: "3rmedika-gas-130",
      kontak:
        '<a target="_blank" rel="noreferrer" href="https://www.google.com/url?q=http://wa.me/6281286109493&amp;sa=D&amp;source=editors&amp;ust=1626879109239000&amp;usg=AOvVaw3T-_Jo9dV9_9hPlU9op2uj">081286109493</a>',
      alamat:
        "Jln. Raya meruya selatan depan, Jl. H. Merin samping tol jorr No.7, RT.9/RW.4, Meruya Sel., Kec. Kembangan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11650",
      link: '<a target="_blank" rel="noreferrer" href="https://www.google.com/url?q=https://3r-medika-gas-isi-ulang-gas-oxygen-medis.business.site/?utm_source%3Dgmb%26utm_medium%3Dreferral&amp;sa=D&amp;source=editors&amp;ust=1626879109239000&amp;usg=AOvVaw37mrEXwJm9NzxXTyq4ssPW">https://3r-medika-gas-isi-ulang-gas-oxygen-medis.business.site/?utm_source=gmb&amp;utm_medium=referral</a>',
      tambahan_informasi:
        "Stok oksigen kosong per 14 Juli '21. Sudah seminggu belum dapat stok",
      terakhir_update: "14/7/2021",
      verifikasi: 1,
      bentuk_verifikasi: "Verifikasi via Telepon",
    };
    const provinceName = "DKI Jakarta";
    render(<ReportButton contact={contact} provinceName="DKI Jakarta" />);
    jest.spyOn(window, "open").mockImplementation((url, target) => {
      const formQuery = `&entry.346789668=${
        contact.kebutuhan
      }&entry.323081545=${provinceName}&entry.68818336=${
        contact.penyedia
      }&entry.217416134=${stripTags(contact.kontak ?? "")}`;
      expect(url).toEqual(REPORT_CONTACT_FORM.concat(encodeURI(formQuery)));
      expect(target).toEqual("_blank");
      return null;
    });
    userEvent.click(screen.getByText(/laporkan kesalahan/i));
  });
});
