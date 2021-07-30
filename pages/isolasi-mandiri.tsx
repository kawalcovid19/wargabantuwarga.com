import { BackButton } from "~/components/layout/back-button";
import { Page } from "~/components/layout/page";
import { PageContent } from "~/components/layout/page-content";
import { PageHeader } from "~/components/layout/page-header";
import StackedLink from "~/components/layout/stacked-link";
import config from "~/lib/config";
import isoman, { Category } from "~/lib/isoman-contents";

import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";

const meta = {
  title: `Pedoman Isolasi Mandiri | ${config.site_name}`,
};

type IsomanPageProps = {
  isoman: {
    isoman_contents: Category[];
  };
};

export default function IsomanPage(props: IsomanPageProps) {
  const isoman_contents = props.isoman;
  const isoman_data = isoman_contents.isoman_contents;
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
            {isoman_data.map((iso, i: number) => (
              <div key={i}>
                <div className="text-base font-semibold text-gray-900 my-4">
                  {iso.title}
                </div>
                <div className="text-sm text-gray-500 mb-4">
                  {iso.description}
                </div>
                <div className="p-2 bg-gray-50 rounded-md">
                  <StackedLink links={iso.links} />
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
      isoman,
    },
  };
};
