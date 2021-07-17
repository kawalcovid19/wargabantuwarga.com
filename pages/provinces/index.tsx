import { Layout } from "../../components/layout";
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
    <Layout>
      <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">
        Daftar Provinsi
      </h2>
      <SearchForm itemName="provinsi" onSubmitKeywords={handleSubmitKeywords} />
      <ProvinceList data={filteredProvinces} />
    </Layout>
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
