/* eslint-disable no-negated-condition */
import { ContactDetails } from "../../../components/contact-details";
import { Layout } from "../../../components/layout";
import provinces, { Contact, getContactsPaths } from "../../../lib/provinces";
import { getTheLastSegmentFromKebabCase } from "../../../lib/string-utils";

import { GetStaticPaths, GetStaticProps } from "next";

type ContactPageProps = {
  provinceName: string;
  provinceSlug: string;
  contact: Contact;
};

export default function ContactPage(props: ContactPageProps) {
  return (
    <Layout>
      <ContactDetails
        contact={props.contact}
        provinceName={props.provinceName}
      />
    </Layout>
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
  const province = index ? provinces[index as unknown as number] : null;
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
