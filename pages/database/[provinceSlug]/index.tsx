import { GetStaticPaths, GetStaticProps } from "next";
import { ContactList } from "../../../components/contact-list";
import database, { getProvincesPaths, Province } from "../../../lib/database";
import { getTheLastSegmentFromKebabCase } from "../../../lib/string-utils";

type ProvinceDatabaseProps = {
  province: Province;
};

export default function ProvinceDatabase(props: ProvinceDatabaseProps) {
  const { province } = props;

  if (province) {
    return (
      <main>
        <h1>Database for {province.name}</h1>
        <ContactList data={province.data} />
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
  const province = index ? database[index as unknown as number] : null;

  return {
    props: {
      province,
    },
  };
};
