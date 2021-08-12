import React from "react";

import { NextSeo } from "next-seo";
import { GetStaticProps } from "next";
import {
  InternalPageHeader,
  InternalPageContent,
  Page,
} from "~/components/layout/page";
import { BackButton } from "~/components/layout/back-button";
import TelemedicineContactSection from "~/components/telemedicine/telemedicine-contact-section";
import { Container } from "~/components/ui/container";
import telemedicineContacts, {
  Contact,
} from "~/lib/content/telemedicine-contacts";

type TelemedicineProps = {
  telemedicineContacts: Contact;
};

const meta = {
  title: `Telemedicine Gratis (Inisiatif Beberapa Dokter)`,
  description: `Konsultasi medis KHUSUS PASIEN COVID-19 yang sedang ISOLASI MANDIRI. Konsultasi yang diberikan hanya konsultasi medis, TIDAK MENYEDIAKAN AMBULANS atau TEMPAT di RUMAH SAKIT. Informasi ini didapat dari sosial media @floraacii. Contact person: dr. Riyo Pungki Irawan (081902835039)`,
};

export default function TelemedicinePage(props: TelemedicineProps) {
  return (
    <Page>
      <NextSeo
        description={meta.description}
        openGraph={{ title: meta.title, description: meta.description }}
        title={meta.title}
      />
      <InternalPageHeader
        backButton={<BackButton href="/" />}
        breadcrumbs={[
          {
            name: "Telemedicine Gratis",
            href: "/telemedicine",
            current: true,
          },
        ]}
        description={meta.description}
        title={meta.title}
      />
      <InternalPageContent>
        <Container className="space-y-2">
          <TelemedicineContactSection
            telemedicine_contacts={
              props.telemedicineContacts.telemedicine_contacts
            }
          />
        </Container>
      </InternalPageContent>
    </Page>
  );
}

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      telemedicineContacts,
    },
  };
};
