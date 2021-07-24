import { BackButton } from "~/components/layout/back-button";
import { Page } from "~/components/layout/page";
import { PageContent } from "~/components/layout/page-content";
import { PageHeader } from "~/components/layout/page-header";
import { ProvinceList, ProvinceListItem } from "~/components/province-list";
import { SearchForm } from "~/components/search-form";
import { SeoText } from "~/components/seo-text";
import { getCurrentMonthAndYear } from "~/lib/date-utils";
import { useSearch } from "~/lib/hooks/use-search";
import provinces from "~/lib/provinces";
import { getInitial } from "~/lib/string-utils";

import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";

type ProvincesPageProps = {
  provincesList: ProvinceListItem[];
};

const meta = {
  // @TODO: change this after got a better title
  title: "Informasi Faskes & Alkes untuk COVID-19 di semua provinsi Indonesia",
};

export default function ProvincesPage(props: ProvincesPageProps) {
  const [filteredProvinces, handleSubmitKeywords, urlParams] = useSearch({
    items: props.provincesList,
    fieldNames: ["name"],
  });
  return (
    <Page>
      <NextSeo openGraph={{ title: meta.title }} title={meta.title} />
      <PageHeader
        backButton={<BackButton href="/" />}
        breadcrumbs={[
          {
            name: "Provinsi",
            href: "/provinces",
            current: true,
          },
        ]}
        title="Provinsi"
      />
      <PageContent>
        <SearchForm
          autoSearch={true}
          checkDocSize={true}
          initialValue={urlParams}
          itemName="provinsi"
          onSubmitKeywords={handleSubmitKeywords}
        />
        <ProvinceList data={filteredProvinces} />
        <SeoText
          textNode={
            <p>
              Cari & Temukan Informasi Fasilitas Kesehatan (Faskes) & Alat
              Kesehatan (Alkes) untuk COVID-19 di seluruh Indonesia per{" "}
              {getCurrentMonthAndYear()}.
            </p>
          }
        />
      </PageContent>
    </Page>
  );
}

export const getStaticProps: GetStaticProps = () => {
  const provincesList = provinces.map(({ name, slug, data }) => ({
    initials: getInitial(name),
    name,
    slug,
    count: data.length,
  }));

  return {
    props: {
      provincesList,
    },
  };
};
