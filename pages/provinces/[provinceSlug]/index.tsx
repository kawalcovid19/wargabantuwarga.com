import { GetStaticPaths, GetStaticProps } from "next";
import { useState } from "react";
import { ContactList } from "../../../components/contact-list";
import { SearchForm } from "../../../components/search-form";
import provinces, {
  Contact,
  getProvincesPaths,
  Province,
} from "../../../lib/provinces";
import { getTheLastSegmentFromKebabCase } from "../../../lib/string-utils";

type ProvinceProps = {
  province: Province;
  provinceSlug: string;
};

const useSearch = (items: Contact[]) => {
  const [filteredItems, setFilteredItems] = useState<Contact[]>(items);
  const handleSubmitKeywords = (keywords: string) => {
    const lowerKeywords = keywords.toLowerCase();
    setFilteredItems(
      items.filter((item) => {
        const filterBy = (fieldName: "lokasi" | "penyedia" | "kontak") =>
          item[fieldName]?.toLowerCase().includes(lowerKeywords) ?? false;
        return filterBy("lokasi") || filterBy("penyedia") || filterBy("kontak");
      })
    );
  };
  return [filteredItems, handleSubmitKeywords] as const;
};

export default function ProvincePage(props: ProvinceProps) {
  const { province, provinceSlug } = props;
  const [filteredContacts, handleSubmitKeywords] = useSearch(
    props.province.data
  );

  if (province) {
    return (
      <main>
        <h1>Database for {province.name}</h1>
        <SearchForm itemName="kontak" onSubmitKeywords={handleSubmitKeywords} />
        <ContactList data={filteredContacts} provinceSlug={provinceSlug} />
      </main>
    );
  } else {
    return (
      <main>
        <h1>Database not found</h1>
      </main>
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

  return {
    props: {
      province,
      provinceSlug,
    },
  };
};
