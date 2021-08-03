import React from "react";

import { render, screen, fireEvent } from "@testing-library/react";
import ChatbotSection from "~/components/kontak-darurat/chatbot-section";
import { EmergencyContactCard } from "~/components/kontak-darurat/emergency-contact-card";
import EmergencyContactSection from "~/components/kontak-darurat/emergency-contact-section";
import OxygenSection from "~/components/kontak-darurat/oxygen-section";
import VaccineSection from "~/components/kontak-darurat/vaccine-section";
import StackedLink from "~/components/layout/stacked-link";
import emergencyContacts from "~/lib/content/emergency-contacts";
import oxygenSection from "~/lib/content/oxygen-section";
import vaccineSection from "~/lib/content/vaccine-section";
import KontakDaruratPage, { getStaticProps } from "~/pages/kontak-darurat";

jest.mock("next/router", () => require("next-router-mock"));

describe("KontakDaruratPage", () => {
  const { emergency_contacts } = emergencyContacts;
  const { oxygen_section } = oxygenSection;
  const { vaccine_section } = vaccineSection;

  const [contact] = emergency_contacts;
  const [oxygen] = oxygen_section;
  const [vaccine] = vaccine_section;

  it("renders the title and the breadcrumbs correctly", () => {
    render(
      <KontakDaruratPage
        emergencyContacts={emergencyContacts}
        oxygenSection={oxygenSection}
        vaccineSection={vaccineSection}
      />,
    );

    const title = screen.getByText(
      /Situs dan Kontak Penting Terkait COVID-19/i,
    );
    expect(title).toBeVisible();

    const breadcrumbs = screen.getByText(/^Kontak Darurat$/i);
    expect(breadcrumbs).toBeVisible();
    expect(breadcrumbs).toHaveAttribute("href", "/kontak-darurat");
  });

  it("renders the emergency contact sections correctly", () => {
    render(<EmergencyContactSection emergency_contacts={emergency_contacts} />);
    const description = screen.getByText(
      /Kumpulan informasi situs dan kontak penting terkait fasilitas serta alat kesehatan untuk COVID-19 di level nasional./i,
    );
    expect(description).toBeVisible();
    const faskes_title = screen.getByText(
      /Cari kontak penyedia faskes secara detail perprovinsi se-Indonesia/i,
    );
    expect(faskes_title).toBeVisible();
    const faskes_button = screen.getByText(/Telusuri Sekarang/i);
    expect(faskes_button).toBeVisible();
    const hotline_button = screen.getByText(/Hubungi 119 ext. 9/i);
    expect(hotline_button).toBeVisible();
    const hotline_title = screen.getByText(/Hotline Kementerian Kesehatan/i);
    expect(hotline_title).toBeVisible();
  });

  it("renders the emergency contact card correctly", () => {
    render(
      <EmergencyContactCard
        description={contact.description}
        image={contact.image}
        name={contact.name}
        url={contact.url}
      />,
    );
    const cardImage = screen.getByAltText(
      `kontak darurat covid ${contact.name}`,
    );
    expect(cardImage).toBeVisible();
    const contact_name = screen.getByText(contact.name);
    expect(contact_name).toBeVisible();
    const contact_description = screen.getByText(contact.description);
    expect(contact_description).toBeVisible();
    const contact_button = screen.getByTestId(`contact-button-${contact.name}`);
    expect(contact_button).toBeVisible();
    expect(contact_button).toHaveAttribute("href", contact.url);
  });

  it("renders the chatbot section correctly", () => {
    render(<ChatbotSection />);
    const chatbot_title = screen.getByText(/CovidAsha Chatbot 24x7/i);
    expect(chatbot_title).toBeVisible();
    const chatbot_description = screen.getByText(
      /Layanan berbasis chatbot untuk mencari semua informasi terkait COVID-19/i,
    );
    expect(chatbot_description).toBeVisible();
    const chatbot_button = screen.getByText(/Kirim chat sekarang/i);
    expect(chatbot_button).toBeVisible();
    expect(chatbot_button).toHaveAttribute(
      "href",
      "https://bit.ly/hotlinewarga",
    );
  });

  it("renders the vaccine disclosure correctly", () => {
    render(<VaccineSection vaccine_section={vaccine_section} />);
    const disclosure_title = screen.getByText(/Mau Vaksin COVID-19?/i);
    expect(disclosure_title).toBeVisible();

    expect(screen.queryByText(vaccine.title)).toBeNull();
    fireEvent.click(screen.getByTestId("chevron-down-icon"));
    expect(screen.queryByText(vaccine.title)).toBeVisible();
  });

  it("render the stacked vaccine links correctly", () => {
    render(<StackedLink links={vaccine_section} />);

    vaccine_section.forEach((url) => {
      const linkItem = screen.getByTestId(`next-link-${url.title}`);
      expect(screen.getByText(url.title)).toBeVisible();
      expect(linkItem).toBeVisible();
      expect(linkItem).toHaveAttribute("href", url.url);
      expect(
        screen.getByTestId(`external-link-icon-${url.title}`),
      ).toBeVisible();
    });
  });

  it("renders the oxygen disclosure correctly", () => {
    render(<OxygenSection oxygen_section={oxygen_section} />);
    const disclosure_title = screen.getByText(/Oksigen Untuk Pasien COVID?/i);
    expect(disclosure_title).toBeVisible();

    expect(screen.queryByText(oxygen.title)).toBeNull();
    fireEvent.click(screen.getByTestId("chevron-down-icon"));
    expect(screen.queryByText(oxygen.title)).toBeVisible();
  });

  it("render the stacked oxygen links correctly", () => {
    render(<StackedLink links={oxygen_section} />);

    oxygen_section.forEach((url) => {
      const linkItem = screen.getByTestId(`next-link-${url.title}`);
      expect(screen.getByText(url.title)).toBeVisible();
      expect(linkItem).toBeVisible();
      expect(linkItem).toHaveAttribute("href", url.url);
      expect(
        screen.getByTestId(`external-link-icon-${url.title}`),
      ).toBeVisible();
    });
  });
});

describe("getStaticProps", () => {
  it("returns the props from the emergency contacts, vaccines, and oxygen correctly", () => {
    expect(getStaticProps({})).toEqual({
      props: {
        emergencyContacts,
        oxygenSection,
        vaccineSection,
      },
    });
  });
});
