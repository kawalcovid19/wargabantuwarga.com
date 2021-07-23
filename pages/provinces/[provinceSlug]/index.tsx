/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ContactList } from "~/components/contact-list";
import { BackButton } from "~/components/layout/back-button";
import { Page } from "~/components/layout/page";
import { PageContent } from "~/components/layout/page-content";
import { PageHeader } from "~/components/layout/page-header";
import { SearchForm } from "~/components/search-form";
import { SeoText } from "~/components/seo-text";
import { getCurrentLongDate } from "~/lib/date-utils";
import { useSearch } from "~/lib/hooks/use-search";
import provinces, { Contact, getProvincesPaths } from "~/lib/provinces";
import { getTheLastSegmentFromKebabCase } from "~/lib/string-utils";

import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";

type ProvinceProps = {
  provinceName: string;
  provinceSlug: string;
  contactList: Contact[];
};

const getMeta = (provinceName: string) => {
  return {
    // @TODO: change this after got a better title
    title: `Informasi Faskes & Alkes untuk COVID-19 di Provinsi ${provinceName}`,
    description: `Informasi seputar COVID-19 dan kontak fasilitas/alat kesehatan di Provinsi ${provinceName} yang dikumpulkan relawan melalui pencarian di internet atau media sosial.`,
  };
};

export default function ProvincePage(props: ProvinceProps) {
  const { provinceName, provinceSlug, contactList } = props;
  const router = useRouter();
  const [
    filteredContacts,
    handleSubmitKeywords,
    urlParams,
    filterItems,
    isLoading,
  ] = useSearch({
    items: contactList,
    fieldNames: [
      "kebutuhan",
      "penyedia",
      "lokasi",
      "alamat",
      "keterangan",
      "kontak",
      "link",
      "tambahan_informasi",
      "bentuk_verifikasi",
    ],
    aggregationSettings: [
      { field: "kebutuhan", title: "Kategori" },
      { field: "lokasi", title: "Lokasi" },
    ],
    sortSettings: {
      penyedia_asc: {
        field: "penyedia",
        order: "asc",
      },
      verified_first: {
        field: ["verifikasi", "penyedia"],
        order: ["desc", "asc"],
      },
    },
    defaultSort: "verified_first",
  });

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (provinceName) {
    const meta = getMeta(provinceName);

    return (
      <Page>
        <NextSeo
          description={meta.description}
          openGraph={{ description: meta.description, title: meta.title }}
          title={meta.title}
        />
        <PageHeader
          backButton={<BackButton href="/provinces" />}
          breadcrumbs={[
            {
              name: "Provinsi",
              href: "/provinces",
            },
            {
              name: provinceName,
              href: `/provinces/${router.query.provinceSlug}`,
              current: true,
            },
          ]}
          title={provinceName}
        />
        <PageContent>
          <SearchForm
            checkDocSize={true}
            filterItems={filterItems}
            initialValue={urlParams}
            isLoading={isLoading}
            itemName="kontak"
            onSubmitKeywords={handleSubmitKeywords}
            sortSettings={[
              { value: "verified_first", label: "Terverifikasi" },
              { value: "penyedia_asc", label: "Nama" },
            ]}
          />
          <ContactList
            data={filteredContacts}
            isLoading={isLoading}
            provinceSlug={provinceSlug}
          />
          <SeoText
            textNode={
              <p>
                Daftar Informasi Fasilitas Kesehatan (Faskes) & Alat Kesehatan
                (Alkes) untuk COVID-19 di {provinceName} per{" "}
                {getCurrentLongDate()}.
              </p>
            }
          />
        </PageContent>
      </Page>
    );
  } else {
    return (
      <Page>
        <h1>Database not found</h1>
      </Page>
    );
  }
}

export const getStaticPaths: GetStaticPaths = () => {
  const paths = getProvincesPaths();

  return {
    fallback: false,
    paths,
  };
};

export const getStaticProps: GetStaticProps = ({ params = {} }) => {
  const { provinceSlug } = params;
  const index = getTheLastSegmentFromKebabCase(provinceSlug as string);
  const province = index ? provinces[index as unknown as number] : null;
  const provinceName = province ? province.name : "";
  const contactList = province
    ? [...province.data].sort((a, b) => {
        return (
          b.verifikasi - a.verifikasi ||
          (a.penyedia ?? "").localeCompare(b.penyedia ?? "")
        );
      })
    : null;

  return {
    props: {
      provinceName,
      provinceSlug,
      contactList,
    },
  };
};
