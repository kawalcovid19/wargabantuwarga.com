/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { GetStaticPaths, GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { ContactList } from "~/components/contact-list";
import { BackButton } from "~/components/layout/back-button";
import { Page, PageContent, PageHeader } from "~/components/layout/page";
import { SearchForm } from "~/components/search-form";
import { SeoText } from "~/components/seo-text";
import { getProvincesPaths } from "~/lib/data/helpers/provinces";
import provinces, { Contact } from "~/lib/data/provinces";
import vaccination from "~/lib/data/vaccination";
import { getCurrentLongDate } from "~/lib/date-utils";
import { useSearch } from "~/lib/hooks/use-search";
import { getProvinceMeta } from "~/lib/meta";

type ProvinceProps = {
  provinceName: string;
  provinceSlug: string;
  contactList: Contact[];
};

export default function ProvincePage(props: ProvinceProps) {
  const { provinceName, provinceSlug, contactList } = props;
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
      "informasi_2",
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

  const meta = getProvinceMeta(provinceName);

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
            href: `/provinces/${provinceSlug}`,
            current: true,
          },
        ]}
        description={meta.description}
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
          placeholderText="Cari berdasarkan kontak, alamat, provider, dan keterangan"
        />
        <ContactList
          data={filteredContacts}
          isLoading={isLoading}
          provinceName={provinceName}
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
}

export const getStaticPaths: GetStaticPaths = () => {
  const paths = getProvincesPaths(provinces);

  return {
    fallback: false,
    paths,
  };
};

export const getStaticProps: GetStaticProps = ({ params = {} }) => {
  const { provinceSlug } = params;
  const province = provinces.find((prov) => prov.slug === provinceSlug);
  const provinceName = province ? province.name : "";
  const contacts = province?.data.filter(
    (contact) => contact.kebutuhan !== "Tempat vaksin",
  );
  const contactList = contacts
    ? [...contacts, ...vaccination[provinceName]].sort((a, b) => {
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
