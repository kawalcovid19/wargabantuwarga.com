import { GetStaticPaths, GetStaticProps } from "next";
import { ContactList } from "../../components/contact-list";
import database, { Province } from "../../lib/database";
import {
  composeFunctions,
  convertToKebabCase,
  getTheLastSegmentFromKebabCase,
  removeSpaces,
  replaceSpacesWithCamelCase,
} from "../../lib/string-utils";

type DatabaseProps = {
  province: Province;
};

export default function Database(props: DatabaseProps) {
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
  const paths = database.map((item, index) => {
    const name = composeFunctions(
      replaceSpacesWithCamelCase,
      removeSpaces,
      convertToKebabCase
    )(item.name);
    const slug = `${name}-${index}`;
    console.log(slug);
    return {
      params: { slug },
    };
  });

  return {
    fallback: false,
    paths,
  };
};

export const getStaticProps: GetStaticProps = ({ params = {} }) => {
  const { slug } = params;
  const index = getTheLastSegmentFromKebabCase(slug as string);
  const province = index ? database[index as unknown as number] : null;

  return {
    props: {
      province,
    },
  };
};
