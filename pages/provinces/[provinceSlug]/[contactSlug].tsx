/* eslint-disable no-negated-condition */
import { ContactDetails } from "~/components/contact-details";
import { BackButton } from "~/components/layout/back-button";
import { Page } from "~/components/layout/page";
import { PageContent } from "~/components/layout/page-content";
import { PageHeader } from "~/components/layout/page-header";
import { ReportButton } from "~/components/report-button";
import provinces, { Contact, getContactsPaths } from "~/lib/provinces";
import { getTheLastSegmentFromKebabCase } from "~/lib/string-utils";

import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/dist/client/router";
import { NextSeo } from "next-seo";

type ContactPageProps = {
  provinceName: string;
  provinceSlug: string;
  contact: Contact;
};

const getMeta = (provinceName: string, contact: Contact) => {
  const providerWithSeparator = !!contact.penyedia
    ? `${contact.penyedia} - `
    : "";

  const location = contact.lokasi
    ? `${contact.lokasi}, ${provinceName}`
    : `${provinceName}`;

  const title = `${providerWithSeparator}${contact.keterangan} di ${location}`;

  return {
    title,
    description: `Informasi ${title} yang dikumpulkan relawan melalui pencarian di internet atau media sosial.`,
  };
};

export default function ContactPage({
  contact,
  provinceName,
}: ContactPageProps) {
  const router = useRouter();
  const meta = getMeta(provinceName, contact);

  return (
    <Page>
      <NextSeo
        description={meta.description}
        openGraph={{ description: meta.description, title: meta.title }}
        title={meta.title}
      />
      <PageHeader
        backButton={
          <BackButton href={`/provinces/${router.query.provinceSlug}`} />
        }
        breadcrumbs={[
          {
            name: "Provinsi",
            href: "/provinces",
          },
          {
            name: provinceName,
            href: `/provinces/${router.query.provinceSlug}`,
          },
          {
            name: contact.penyedia
              ? contact.penyedia
              : contact.keterangan ?? "",
            href: `/provinces/${router.query.provinceSlug}/${router.query.contactSlug}`,
            current: true,
          },
        ]}
        title={contact.penyedia ?? "N/A"}
      />
      <PageContent>
        <ContactDetails contact={contact} provinceName={provinceName} />
        <ReportButton contact={contact} provinceName={provinceName} />
      </PageContent>
    </Page>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  const paths = getContactsPaths();
  return {
    fallback: false,
    paths,
  };
};

export const getStaticProps: GetStaticProps = ({ params = {} }) => {
  const { provinceSlug, contactSlug } = params;
  const index = getTheLastSegmentFromKebabCase(provinceSlug as string);
  const province = index ? provinces[index as unknown as number] : null;
  const provinceName = province ? province.name : "";
  const contactIndex = getTheLastSegmentFromKebabCase(contactSlug as string);
  const contact = province
    ? province.data[contactIndex as unknown as number]
    : null;
  return {
    props: {
      provinceSlug,
      provinceName,
      contact,
    },
  };
};
