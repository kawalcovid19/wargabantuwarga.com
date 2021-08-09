import React from "react";

import { render, screen } from "@testing-library/react";
import { TelemedicineContactCard } from "~/components/telemedicine/telemedicine-contact-card";
import TelemedicineContactSection from "~/components/telemedicine/telemedicine-contact-section";
import telemedicineContacts from "~/lib/content/telemedicine-contacts";
import TelemedicinePage, { getStaticProps } from "~/pages/telemedicine";

jest.mock("~/lib/content/telemedicine-contacts");
jest.mock("next/router", () => require("next-router-mock"));

describe("TelemedicinePage", () => {
  const { telemedicine_contacts } = telemedicineContacts;

  const [contact] = telemedicine_contacts;

  it("renders the title and the breadcrumbs correctly", () => {
    render(<TelemedicinePage telemedicineContacts={telemedicineContacts} />);

    const title = screen.getByText(
      "Telemedicine Gratis (Inisiatif Beberapa Dokter)",
    );
    expect(title).toBeVisible();

    const description = screen.getByText(
      "Konsultasi medis KHUSUS PASIEN COVID-19 yang sedang ISOLASI MANDIRI. Konsultasi yang diberikan hanya konsultasi medis, TIDAK MENYEDIAKAN AMBULANS atau TEMPAT di RUMAH SAKIT. Informasi ini didapat dari sosial media @floraacii. Contact person: dr. Riyo Pungki Irawan (081902835039)",
    );
    expect(description).toBeVisible();

    const breadcrumbs = screen.getByText(/^Telemedicine Gratis$/i);
    expect(breadcrumbs).toBeVisible();

    expect(breadcrumbs).toHaveAttribute("href", "/telemedicine");
  });

  it("renders the telemedicine contact sections correctly", () => {
    render(
      <TelemedicineContactSection
        telemedicine_contacts={telemedicine_contacts}
      />,
    );

    const kontak_title = screen.getByText(/Jadwal & kontak dokter/i);
    expect(kontak_title).toBeVisible();
  });

  it("renders the telemedicine contact card correctly", () => {
    render(
      <TelemedicineContactCard
        contact={contact.contact}
        doctor_name={contact.doctor_name}
        ops_date={contact.ops_date}
        ops_time={contact.ops_time}
        platform={contact.platform}
      />,
    );
    const cardImage = screen.getByAltText(
      `kontak dokter ${contact.doctor_name}`,
    );
    expect(cardImage).toBeVisible();
    const contact_name = screen.getByText(contact.doctor_name);
    expect(contact_name).toBeVisible();
    const contact_ops = screen.getByText(
      `${contact.ops_date} • ${contact.ops_time}`,
    );
    expect(contact_ops).toBeVisible();
    const contact_platform = screen.getByText(contact.platform);
    expect(contact_platform).toBeVisible();
  });
});

describe("getStaticProps", () => {
  it("returns the props from the telemdicine contacts correctly", () => {
    expect(getStaticProps({})).toEqual({
      props: {
        telemedicineContacts,
      },
    });
  });
});
