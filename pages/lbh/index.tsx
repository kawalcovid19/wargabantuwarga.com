/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { LawFirmList } from "~/components/law-firm-list";
import { BackButton } from "~/components/layout/back-button";
import { Page, PageContent, PageHeader } from "~/components/layout/page";
import { SearchForm } from "~/components/search-form";
import { SeoText } from "~/components/seo-text";
import entityGroup, { LawFirm } from "~/lib/data/law-firms";
import { useSearch } from "~/lib/hooks/use-search";

type LawFirmsPageProps = {
  lawFirmList: LawFirm[];
};

export default function LawFirmsPage(props: LawFirmsPageProps) {
  const { lawFirmList } = props;
  const [
    filteredContacts,
    handleSubmitKeywords,
    urlParams,
    filterItems,
    isLoading,
  ] = useSearch({
    items: lawFirmList,
    fieldNames: ["nama_lbh", "alamat"],
    sortSettings: {
      id_asc: {
        field: "nama_lbh",
        order: "asc",
      },
    },
    defaultSort: "id_asc",
  });

  const meta = {
    title: "Lembaga Bantuan Hukum",
    description: "Daftar Lembaga Bantuan Hukum (LBH) seluruh Indonesia",
  };

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
            name: "Lembaga Bantuan Hukum",
            href: "/lbh",
            current: true,
          },
        ]}
        description={meta.description}
        title={meta.title}
      />
      <PageContent>
        <SearchForm
          checkDocSize={true}
          filterItems={filterItems}
          initialValue={urlParams}
          isLoading={isLoading}
          itemName="Lembaga Bantuan Hukum"
          onSubmitKeywords={handleSubmitKeywords}
          placeholderText="Cari berdasarkan nama atau alamat"
        />
        <LawFirmList data={filteredContacts} isLoading={isLoading} />
        <SeoText
          textNode={<p>Daftar Informasi Lembaga Bantuan Hukum di Indonesia.</p>}
        />
      </PageContent>
    </Page>
  );
}

export const getStaticProps: GetStaticProps = () => {
  const lawFirmList = entityGroup.data;

  return {
    props: {
      lawFirmList,
    },
  };
};
