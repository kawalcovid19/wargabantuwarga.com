import { ContactList, ContactListItem } from "../../../components/contact-list";
import { BackButton } from "../../../components/layout/back-button";
import { Page } from "../../../components/layout/page";
import { PageContent } from "../../../components/layout/page-content";
import { PageHeader } from "../../../components/layout/page-header";
import { SearchForm } from "../../../components/search-form";
import { useSearch } from "../../../lib/hooks/use-search";
import provinces, { getProvincesPaths } from "../../../lib/provinces";
import {
  convertToTitleCase,
  getSlug,
  getTheLastSegmentFromKebabCase,
} from "../../../lib/string-utils";

import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

type ProvinceProps = {
  provinceName: string;
  provinceSlug: string;
  contactsList: ContactListItem[];
};

export default function ProvincePage(props: ProvinceProps) {
  const { provinceName, provinceSlug, contactsList } = props;
  const router = useRouter();
  const [filteredContacts, handleSubmitKeywords, filterItems] = useSearch(
    contactsList,
    [
      "kebutuhan",
      "penyedia",
      "lokasi",
      "alamat",
      "keterangan",
      "kontak",
      "tautan",
      "tambahan_informasi",
      "bentuk_verifikasi",
    ],
    [
      { field: "kebutuhan", title: "Kategori" },
      { field: "lokasi", title: "Lokasi" },
    ],
    {
      penyedia_asc: {
        field: "penyedia",
        order: "asc",
      },
    },
    "penyedia_asc",
  );

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (provinceName) {
    return (
      <Page>
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
          title={`Database for ${provinceName}`}
        />
        <PageContent>
          <SearchForm
            filterItems={filterItems}
            itemName="kontak"
            onSubmitKeywords={handleSubmitKeywords}
          />
          <ContactList data={filteredContacts} provinceSlug={provinceSlug} />
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
  const provinceName = province?.name ?? null;
  const contactsList = province
    ? province.data
        .map((contact, contactIndex) => {
          return {
            ...contact,
            id: contactIndex,
            slug: getSlug(
              (contact.penyedia == ""
                ? contact.keterangan
                : contact.penyedia) ?? "",
              contactIndex,
            ),
            lokasi: contact.lokasi ? convertToTitleCase(contact.lokasi) : "",
          };
        })
        .sort((a: ContactListItem, b: ContactListItem) =>
          (a.penyedia ?? "").localeCompare(b.penyedia ?? ""),
        )
    : [];

  return {
    props: {
      provinceName,
      provinceSlug,
      contactsList,
    },
  };
};
