import { GetStaticPaths, GetStaticProps } from "next";
import { ContactDetails } from "../../../components/contact-details";
import database, { getContactsPaths, Contact } from "../../../lib/database";
import { getTheLastSegmentFromKebabCase } from "../../../lib/string-utils";

type ContactPageProps = {
  provinceName: string;
  provinceSlug: string;
  contact: Contact;
};

export default function ContactPage(props: ContactPageProps) {
  return (
    <ContactDetails contact={props.contact} provinceName={props.provinceName} />
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  const paths = getContactsPaths();
  return {
    fallback: false,
    paths,
  };
};

export const getStaticProps: GetStaticProps = ({ params = {} }) => {
  const { provinceSlug, contactSlug } = params;
  const index = getTheLastSegmentFromKebabCase(provinceSlug as string);
  const province = index ? database[index as unknown as number] : null;
  const provinceName = province ? province.name : "";
  const contact =
    province !== null ? province.data[contactSlug as unknown as number] : null;
  return {
    props: {
      provinceSlug,
      provinceName,
      contact,
    },
  };
};
