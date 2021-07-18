import { BackButton } from "../../components/layout/back-button";
import { Page } from "../../components/layout/page";
import { PageContent } from "../../components/layout/page-content";
import { PageHeader } from "../../components/layout/page-header";
import { ProvinceList, ProvinceListItem } from "../../components/province-list";
import { SearchForm } from "../../components/search-form";
import { useSearch } from "../../lib/hooks/use-search";
import provinces from "../../lib/provinces";
import { getInitial, getSlug } from "../../lib/string-utils";

import { GetStaticProps } from "next";

type ProvincesPageProps = {
  provincesList: ProvinceListItem[];
};

export default function ProvincesPage(props: ProvincesPageProps) {
  const [filteredProvinces, handleSubmitKeywords] = useSearch(
    props.provincesList,
    ["name"],
  );
  return (
    <Page>
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
          itemName="provinsi"
          onSubmitKeywords={handleSubmitKeywords}
        />
        <ProvinceList data={filteredProvinces} />
      </PageContent>
    </Page>
  );
}

export const getStaticProps: GetStaticProps = () => {
  const provincesList = provinces.map(({ name, data }, index) => ({
    initials: getInitial(name),
    name,
    slug: getSlug(name, index),
    count: data.length,
  }));
  provincesList.shift();
  return {
    props: {
      provincesList,
    },
  };
};
