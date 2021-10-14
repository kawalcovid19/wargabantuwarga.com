import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { BackButton } from "~/components/layout/back-button";
import {
  Page,
  InternalPageContent,
  InternalPageHeader,
} from "~/components/layout/page";
import { Container } from "~/components/ui/container";
import { TelecounselingSection } from "~/components/telekonseling/telekonseling-link-section";
import telekonseling, { Telecounseling } from "~/lib/content/telekonseling";

interface TelecounselingPageProps {
  telekonseling: Telecounseling;
}

const meta = {
  title: "Curhat atau Telekonseling",
  description:
    "Informasi mengenai relawan COVID-19 yang memberikan bantuan berupa layanan konsultasi psikologi, kesehatan, agama, dan lainnya yang relevan untuk membantu kesehatan mental terdampak COVID-19.",
};

export default function TelecounselingPage(props: TelecounselingPageProps) {
  return (
    <Page>
      <NextSeo
        description={meta.description}
        openGraph={{ title: meta.title, description: meta.description }}
        title={meta.title}
      />
      <InternalPageHeader
        backButton={<BackButton href="/" />}
        breadcrumbs={[
          {
            name: "Curhat/Telekonseling",
            href: "/telekonseling",
            current: true,
          },
        ]}
        description={meta.description}
        title={meta.title}
      />
      <InternalPageContent>
        <Container className="flex flex-col flex-1">
          <TelecounselingSection telekonseling={props.telekonseling} />
        </Container>
      </InternalPageContent>
    </Page>
  );
}

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      telekonseling,
    },
  };
};
