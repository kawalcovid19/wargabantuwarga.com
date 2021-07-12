import { GetStaticPaths, GetStaticProps } from "next";
import database, { ProvinceData } from "../../lib/database";
import {
  composeFunctions,
  convertToKebabCase,
  getTheLastSegmentFromKebabCase,
  removeSpaces,
  replaceSpacesWithCamelCase,
} from "../../lib/string-utils";

type DatabaseProps = {
  title: string;
  provinceData: ProvinceData;
};

export default function Database(props: DatabaseProps) {
  const { provinceData, title } = props;

  if (provinceData) {
    return (
      <main>
        <h1>Database for {title}</h1>
        <code>{JSON.stringify(provinceData)}</code>
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
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = ({ params = {} }) => {
  const { slug } = params;
  const index = getTheLastSegmentFromKebabCase(slug as string);
  const provinceData = index ? database[index as unknown as number] : null;

  return {
    props: {
      title: slug,
      provinceData,
    },
  };
};
