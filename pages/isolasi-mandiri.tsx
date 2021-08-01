import { BackButton } from "~/components/layout/back-button";
import { Page } from "~/components/layout/page";
import { PageContent } from "~/components/layout/page-content";
import { PageHeader } from "~/components/layout/page-header";
import StackedLink from "~/components/layout/stacked-link";
import isolasiMandiri, { IsolasiMandiri } from "~/lib/content/isolasi-mandiri";

import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";

const meta = {
  title: `Pedoman Isolasi Mandiri`,
};

type IsolasiMandiriPageProps = {
  isolasiMandiri: IsolasiMandiri;
};

export default function IsolasiMandiriPage(props: IsolasiMandiriPageProps) {
  return (
    <div>
      <Page>
        <NextSeo openGraph={{ title: meta.title }} title={meta.title} />
        <PageHeader
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
        <PageContent>
          <div className="p-4 bg-white shadow overflow-hidden rounded-md space-y-8">
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
          </div>
        </PageContent>
      </Page>
    </div>
  );
}

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      isolasiMandiri,
    },
  };
};
