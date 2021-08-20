import React from "react";

import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { BackButton } from "~/components/layout/back-button";
import {
  Page,
  InternalPageContent,
  InternalPageHeader,
  InternalPageSection,
} from "~/components/layout/page";
import { TelekonselingCard } from "~/components/telekonseling/telekonseling-card";
import { Container } from "~/components/ui/container";
import telekonseling, {
  Konseling,
  TelekonselingDetail,
} from "~/lib/content/telekonseling";

type InformasiTelekonselingProps = {
  telekonseling: Konseling;
};

const meta = {
  title: `Curhat/telekonseling Bagi Pasien, Keluarga Pasien, Maupun Tenaga Kesehatan Terdampak COVID-19`,
  description: `Kumpulan informasi mengenai donasi, nomor rekening, dan lainnya yang relevan dengan bantuan COVID-19.`,
};

export default function TelekonselingPage(props: InformasiTelekonselingProps) {
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
            name: "Telekonseling",
            href: "/telekonseling",
            current: true,
          },
        ]}
        description={meta.description}
        title={meta.title}
      />
      <InternalPageContent>
        <Container className="space-y-2">
          <InternalPageSection className="pb-24 space-y-6 sm:pb-6">
            <div className="flex flex-col bg-gray-50">
              {props.telekonseling.telekonselings.map(
                (konseling: TelekonselingDetail, i: number) => (
                  <TelekonselingCard
                    key={i}
                    jenislayanan={konseling.jenislayanan}
                    kontak={konseling.kontak}
                    penyelenggara={konseling.penyelenggara}
                    url={konseling.url}
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
      telekonseling,
    },
  };
};
