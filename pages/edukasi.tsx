import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { BackButton } from "~/components/layout/back-button";
import {
  Page,
  InternalPageContent,
  InternalPageHeader,
  InternalPageSection,
} from "~/components/layout/page";
import { Container } from "~/components/ui/container";
import { TelemedicineCTA } from "~/components/telemedicine/telemedicine-cta";
import { EducationSection } from "~/components/education/education-link-section";
import educations, { Education } from "~/lib/content/educations";

interface EducationPageProps {
  educations: Education;
}

const meta = {
  title: `Laman Edukasi COVID-19`,
  description: `Kumpulan informasi terbaru COVID-19, tips menjaga kesehatan selama pandemi, vaksinasi, hingga penanganan jika Anda terkonfirmasi positif COVID-19.`,
};

export default function EducationPage(props: EducationPageProps) {
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
            name: "Laman Edukasi COVID-19",
            href: "/edukasi",
            current: true,
          },
        ]}
        description={meta.description}
        title={meta.title}
      />
      <InternalPageContent>
        <Container>
          <InternalPageSection className="pb-8">
            <TelemedicineCTA />
          </InternalPageSection>
          <EducationSection educations={props.educations} />
        </Container>
      </InternalPageContent>
    </Page>
  );
}

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      educations,
    },
  };
};
