import React from "react";

import ChatbotSection from "~/components/kontak-darurat/chatbot-section";
import { EmergencyContactCard } from "~/components/kontak-darurat/emergency-contact-card";
import EmergencyContactSection from "~/components/kontak-darurat/emergency-contact-section";
import OxygenSection from "~/components/kontak-darurat/oxygen-section";
import VaccineSection from "~/components/kontak-darurat/vaccine-section";
import StackedLink from "~/components/stacked-link";
import contacts from "~/lib/kontak-darurat/emergency-contacts";
import oxygen from "~/lib/kontak-darurat/oxygen-information";
import vaccine from "~/lib/kontak-darurat/vaccine-information";
import KontakDaruratPage, { getStaticProps } from "~/pages/kontak-darurat";

import { render, screen } from "@testing-library/react";

jest.mock("next/router", () => require("next-router-mock"));

describe("KontakDaruratPage", () => {
  const { emergency_contacts } = contacts;
  const { vaccine_section } = vaccine;
  const { oxygen_section } = oxygen;

  it("renders the title and the breadcrumbs correctly", () => {
    render(
      <KontakDaruratPage
        emergencyContacts={contacts}
        oxygenInformation={oxygen}
        vaccineInformation={vaccine}
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
    // eslint-disable-next-line no-lone-blocks
    {
      emergency_contacts.forEach((contact, i) => {
        render(
          <EmergencyContactCard
            key={i}
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
        const contact_button = screen.getByTestId(
          `contact-button-${contact.name}`,
        );
        expect(contact_button).toBeVisible();
        expect(contact_button).toHaveAttribute("href", contact.url);
      });
    }
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

  it("renders the vaccine accordion correctly", () => {
    render(<VaccineSection vaccine_section={vaccine_section} />);
    const accordion_title = screen.getByText(/Mau Vaksin COVID-19?/i);
    expect(accordion_title).toBeVisible();
  });

  it("render the stacked vaccine links correctly", () => {
    // eslint-disable-next-line no-lone-blocks
    {
      // eslint-disable-next-line array-callback-return
      vaccine_section.map((link, i) => {
        render(
          <StackedLink key={i} title={link.title} uniqId={i} url={link.url} />,
        );
        const linkItem = screen.getByTestId(`next-link-${link.title}`);
        expect(screen.getByText(link.title)).toBeVisible();
        expect(linkItem).toBeVisible();
        expect(linkItem).toHaveAttribute("href", link.url);
        expect(
          screen.getByTestId(`external-link-icon-${link.url}`),
        ).toBeVisible();
      });
    }
  });

  it("renders the oxygen accordion correctly", () => {
    render(<OxygenSection oxygen_section={oxygen_section} />);
    const accordion_title = screen.getByText(/Oksigen Untuk Pasien COVID?/i);
    expect(accordion_title).toBeVisible();
  });

  it("render the stacked oxygen links correctly", () => {
    // eslint-disable-next-line no-lone-blocks
    {
      // eslint-disable-next-line array-callback-return
      oxygen_section.map((link, i) => {
        render(
          <StackedLink key={i} title={link.title} uniqId={i} url={link.url} />,
        );
        const linkItem = screen.getByTestId(`next-link-${link.title}`);
        expect(screen.getByText(link.title)).toBeVisible();
        expect(linkItem).toBeVisible();
        expect(linkItem).toHaveAttribute("href", link.url);
        expect(
          screen.getByTestId(`external-link-icon-${link.url}`),
        ).toBeVisible();
      });
    }
  });
});

describe("getStaticProps", () => {
  it("returns the props from the emergency contacts, vaccines, and oxygen correctly", () => {
    expect(getStaticProps({})).toEqual({
      props: {
        emergencyContacts: contacts,
        vaccineInformation: vaccine,
        oxygenInformation: oxygen,
      },
    });
  });
});
