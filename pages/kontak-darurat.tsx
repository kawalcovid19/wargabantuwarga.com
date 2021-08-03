import React from "react";

import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import ChatbotSection from "~/components/kontak-darurat/chatbot-section";
import { EmergencyContactContent } from "~/components/kontak-darurat/emergency-contact-content";
import EmergencyContactSection from "~/components/kontak-darurat/emergency-contact-section";
import OxygenSection from "~/components/kontak-darurat/oxygen-section";
import VaccineSection from "~/components/kontak-darurat/vaccine-section";
import { BackButton } from "~/components/layout/back-button";
import { Page } from "~/components/layout/page";
import { PageHeader } from "~/components/layout/page-header";
import { Container } from "~/components/ui/container";
import emergencyContacts, { Contact } from "~/lib/content/emergency-contacts";
import oxygenSection, { Oxygen } from "~/lib/content/oxygen-section";
import vaccineSection, { Vaccine } from "~/lib/content/vaccine-section";

// import Image from "next/image";

type KontakDaruratProps = {
  emergencyContacts: Contact;
  vaccineSection: Vaccine;
  oxygenSection: Oxygen;
};

const meta = {
  title: `Kontak Penting Terkait COVID-19`,
  description: `Kumpulan informasi situs dan kontak penting terkait fasilitas serta alat kesehatan untuk COVID-19 di level nasional.`,
};

export default function KontakDaruratPage(props: KontakDaruratProps) {
  return (
    <div>
      <Page>
        <NextSeo
          description={meta.description}
          openGraph={{ title: meta.title, description: meta.description }}
          title={meta.title}
        />
        <EmergencyContactContent>
          <Container className="space-y-2">
            <PageHeader
              backButton={<BackButton href="/" />}
              breadcrumbs={[
                {
                  name: "Kontak Darurat",
                  href: "/kontak-darurat",
                  current: true,
                },
              ]}
              title="Situs dan Kontak Penting Terkait COVID-19"
            />
            <EmergencyContactSection
              emergency_contacts={props.emergencyContacts.emergency_contacts}
            />
            <ChatbotSection />
            <div className="space-y-4 px-4 py-6 bg-white">
              <VaccineSection
                vaccine_section={props.vaccineSection.vaccine_section}
              />
              <OxygenSection
                oxygen_section={props.oxygenSection.oxygen_section}
              />
            </div>
          </Container>
        </EmergencyContactContent>
      </Page>
    </div>
  );
}

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      emergencyContacts,
      vaccineSection,
      oxygenSection,
    },
  };
};
