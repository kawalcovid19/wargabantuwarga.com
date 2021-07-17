import { GetStaticPaths, GetStaticProps } from "next";
import { ContactList } from "../../../components/contact-list";
import { SearchForm } from "../../../components/search-form";
import provinces, { getProvincesPaths, Province } from "../../../lib/provinces";
import { getTheLastSegmentFromKebabCase } from "../../../lib/string-utils";

type ProvinceProps = {
  province: Province;
  provinceSlug: string;
};

export default function ProvincePage(props: ProvinceProps) {
  const { province, provinceSlug } = props;

  if (province) {
    return (
      <main>
        <h1>Database for {province.name}</h1>
        <SearchForm itemName="kontak" onSubmitKeywords={() => {}} />
        <ContactList data={province.data} provinceSlug={provinceSlug} />
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
