import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { BackButton } from "~/components/layout/back-button";
import {
  Page,
  InternalPageContent,
  InternalPageHeader,
  InternalPageSection,
} from "~/components/layout/page";
import StackedLink from "~/components/layout/stacked-link";
import { Container } from "~/components/ui/container";
import isolasiMandiri, { IsolasiMandiri } from "~/lib/content/isolasi-mandiri";

const meta = {
  title: `Pedoman Isolasi Mandiri`,
  description: `Kumpulan informasi mengenai hal yang perlu Anda ketahui dan langkah penting yang perlu Anda lakukan untuk melakukan isolasi mandiri.`,
};

type IsolasiMandiriPageProps = {
  isolasiMandiri: IsolasiMandiri;
};

export default function IsolasiMandiriPage(props: IsolasiMandiriPageProps) {
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
            name: "Isolasi Mandiri",
            href: "/isolasi-mandiri",
            current: true,
          },
        ]}
        title="Pedoman Isolasi Mandiri"
      />
      <InternalPageContent>
        <Container className="flex flex-col flex-1">
          <InternalPageSection className="flex-1 pb-6 space-y-8">
            {props.isolasiMandiri.categories.map((category, i: number) => (
              <div key={i} className="space-y-4">
                <h2 className="text-base font-semibold text-gray-900">
                  {category.title}
                </h2>
                <p className="text-sm text-gray-500">{category.description}</p>
                <div className="p-2 bg-gray-50 rounded-md">
                  <StackedLink links={category.links} />
                </div>
              </div>
            ))}
          </InternalPageSection>
        </Container>
      </InternalPageContent>
    </Page>
  );
}

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      isolasiMandiri,
    },
  };
};
