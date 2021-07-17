import { GetStaticProps } from "next";
import provinces from "../../lib/provinces";
import { getInitial, getSlug } from "../../lib/string-utils";
import { SearchForm } from "../../components/search-form";
import { useState } from "react";
import { ProvinceList, ProvinceListItem } from "../../components/province-list";

type ProvincesPageProps = {
  provincesList: ProvinceListItem[];
};

const useSearch = (items: ProvinceListItem[]) => {
  const [filteredItems, setFilteredItems] = useState<ProvinceListItem[]>(items);
  const handleSubmitKeywords = (keywords: string) => {
    setFilteredItems(
      items.filter((item) => {
        return item.name.toLowerCase().includes(keywords.toLowerCase());
      })
    );
  };
  return [filteredItems, handleSubmitKeywords] as const;
};

export default function ProvincesPage(props: ProvincesPageProps) {
  const [filteredProvinces, handleSubmitKeywords] = useSearch(
    props.provincesList
  );
  return (
    <div>
      <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">
        Daftar Provinsi
      </h2>
      <SearchForm itemName="provinsi" onSubmitKeywords={handleSubmitKeywords} />
      <ProvinceList data={filteredProvinces} />
    </div>
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
