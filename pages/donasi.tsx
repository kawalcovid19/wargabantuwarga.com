import React from "react";

import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { InternalPageContent } from "~/components/layout/internal-page-content";
import { DonationCard } from "~/components/donasi/donation-card";
import { BackButton } from "~/components/layout/back-button";
import { Page } from "~/components/layout/page";
import { PageHeader } from "~/components/layout/page-header";
import { Container } from "~/components/ui/container";
import informasiDonasi, {
  Donation,
  DonationDetail,
} from "~/lib/content/informasi-donasi";

type InformasiDonasiProps = {
  informasiDonasi: Donation;
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
      <PageHeader
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
          <div className="p-4 overflow-hidden rounded-md space-y-6 bg-white">
            <div className="grid grid-cols-2 gap-4">
              {props.informasiDonasi.donations.map(
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
          </div>
        </Container>
      </InternalPageContent>
    </Page>
  );
}

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      informasiDonasi,
    },
  };
};
