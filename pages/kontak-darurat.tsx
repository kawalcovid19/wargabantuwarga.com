import React from "react";

import ChatbotSection from "~/components/kontak-darurat/chatbot-section";
import { EmergencyContactContent } from "~/components/kontak-darurat/emergency-contact-content";
import EmergencyContactSection from "~/components/kontak-darurat/emergency-contact-section";
import OxygenSection from "~/components/kontak-darurat/oxygen-section";
import VaccineSection from "~/components/kontak-darurat/vaccine-section";
import { BackButton } from "~/components/layout/back-button";
import { Page } from "~/components/layout/page";
import { PageHeader } from "~/components/layout/page-header";
import { Container } from "~/components/ui/container";
import config from "~/lib/config";
import emergencyContacts, { ContactDetail } from "~/lib/emergency-contacts";
import oxygenInformation, { OxygenDetail } from "~/lib/oxygen-information";
import vaccineInformation, { VaccineDetail } from "~/lib/vaccine-information";

import { GetStaticProps } from "next";
// import Image from "next/image";
import { NextSeo } from "next-seo";

type KontakDaruratProps = {
  emergencyContacts: {
    emergency_contacts: ContactDetail[];
  };
  vaccineInformation: {
    vaccine_section: VaccineDetail[];
  };
  oxygenInformation: {
    oxygen_section: OxygenDetail[];
  };
};

const meta = {
  title: `Situs dan Kontak Penting Terkait COVID-19 | ${config.site_name}`,
};

export default function KontakDaruratPage(props: KontakDaruratProps) {
  const { emergency_contacts } = props.emergencyContacts;
  const { vaccine_section } = props.vaccineInformation;
  const { oxygen_section } = props.oxygenInformation;

  return (
    <div>
      <Page>
        <NextSeo openGraph={{ title: meta.title }} title={meta.title} />
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
            <EmergencyContactSection emergency_contacts={emergency_contacts} />
            <ChatbotSection />
            <div className="space-y-4 px-4 py-6 bg-white">
              <VaccineSection vaccine_section={vaccine_section} />
              <OxygenSection oxygen_section={oxygen_section} />
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
      vaccineInformation,
      oxygenInformation,
    },
  };
};
