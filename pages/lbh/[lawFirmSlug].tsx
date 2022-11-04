/* eslint-disable no-negated-condition */
import { GetStaticPaths, GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { LawFirmDetails } from "~/components/law-firm-details";
import { BackButton } from "~/components/layout/back-button";
import { Page, PageContent, PageHeader } from "~/components/layout/page";
import { getLawFirmsPaths } from "~/lib/data/helpers/law-firms";
import entityGroup, { LawFirm } from "~/lib/data/law-firms";
import { getLawFirmMeta } from "~/lib/meta";

type LawFirmPageProps = {
  lawFirm: LawFirm;
};

export default function LawFirmPage({ lawFirm }: LawFirmPageProps) {
  const meta = getLawFirmMeta(lawFirm);

  return (
    <Page>
      <NextSeo
        description={meta.description}
        openGraph={{ description: meta.description, title: meta.title }}
        title={meta.title}
      />
      <PageHeader
        backButton={<BackButton href="/lbh" />}
        breadcrumbs={[
          {
            name: "Lembaga Bantuan Hukum",
            href: "/lbh",
          },
          {
            name: meta.title,
            href: `/lbh/${lawFirm.slug}`,
            current: true,
          },
        ]}
        description={meta.description}
        title={lawFirm.nama_lbh}
      />
      <PageContent>
        <LawFirmDetails lawFirm={lawFirm} />
      </PageContent>
    </Page>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  const paths = getLawFirmsPaths();
  return {
    fallback: false,
    paths,
  };
};

export const getStaticProps: GetStaticProps = ({ params = {} }) => {
  const { lawFirmSlug } = params;
  const lawFirm = entityGroup.data.find((c) => c.slug === lawFirmSlug);
  return {
    props: {
      lawFirm,
    },
  };
};
