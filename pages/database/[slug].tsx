import { GetStaticPaths, GetStaticProps } from "next";
import database from "../../lib/database";

type DatabaseProps = {
  title: string;
};

export default function Database(props: DatabaseProps) {
  return (
    <main>
      <h1>Database for {props.title}</h1>
    </main>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  const paths = database.map((item) => ({
    params: { slug: item.name },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = ({ params = {} }) => {
  const { slug } = params;
  const title = slug;
  return {
    props: {
      title,
    },
  };
};
