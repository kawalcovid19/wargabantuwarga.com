import { GetStaticPaths, GetStaticProps } from "next";
import database from "../../lib/database";
import {
  composeFunctions,
  convertToKebabCase,
  removeSpaces,
  replaceSpacesWithCamelCase,
} from "../../lib/string-utils";

type DatabaseProps = {
  title: string;
};

export default function Database(props: DatabaseProps) {
  const title = composeFunctions(
    replaceSpacesWithCamelCase,
    removeSpaces,
    convertToKebabCase
  )(props.title);

  return (
    <main>
      <h1>Database for {title}</h1>
    </main>
  );
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
  return {
    props: {
      title: slug,
    },
  };
};
