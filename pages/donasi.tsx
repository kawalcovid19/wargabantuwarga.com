import React from "react";

import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { DonationCard } from "~/components/donasi/donation-card";
import { BackButton } from "~/components/layout/back-button";
import {
  Page,
  InternalPageContent,
  InternalPageHeader,
  InternalPageSection,
} from "~/components/layout/page";
import { Container } from "~/components/ui/container";
import donasi, { Donation, DonationDetail } from "~/lib/content/donasi";

type InformasiDonasiProps = {
  donasi: Donation;
};

const meta = {
  title: `Donasi dan Penggalangan Dana`,
  description: `Kumpulan informasi mengenai donasi, nomor rekening, dan lainnya yang relevan dengan bantuan COVID-19.`,
};

export default function DonasiPage(props: InformasiDonasiProps) {
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
            name: "Donasi",
            href: "/donasi",
            current: true,
          },
        ]}
        description={meta.description}
        title={meta.title}
      />
      <InternalPageContent>
        <Container className="space-y-2">
          <InternalPageSection className="pb-24 space-y-6 sm:pb-6">
            <div className="grid grid-cols-2 gap-4">
              {props.donasi.donations.map(
                (donation: DonationDetail, i: number) => (
                  <DonationCard
                    key={i}
                    category={donation.category}
                    image={donation.image}
                    title={donation.title}
                    url={donation.url}
                  />
                ),
              )}
            </div>
          </InternalPageSection>
        </Container>
      </InternalPageContent>
    </Page>
  );
}

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      donasi,
    },
  };
};
