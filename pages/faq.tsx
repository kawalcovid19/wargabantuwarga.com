import { BackButton } from "~/components/layout/back-button";
import { Page } from "~/components/layout/page";
import { PageContent } from "~/components/layout/page-content";
import { PageHeader } from "~/components/layout/page-header";
import CustomHits from "~/components/search/custom-hits";
import CustomRefinementList from "~/components/search/custom-refinement-list";
import CustomSearchBox from "~/components/search/custom-search-box";
import { typesenseSearch } from "~/lib/typesense";

import { NextSeo } from "next-seo";
import { InstantSearch, RefinementItem } from "react-instantsearch-dom";

const meta = {
  title: "Pertanyaan yang sering ditanyakan",
};

export default function Faqs() {
  const searchClient = typesenseSearch({
    queryBy: ["kategori_pertanyaan", "pertanyaan", "jawaban"],
  });

  return (
    <Page>
      <NextSeo openGraph={{ title: meta.title }} title={meta.title} />
      <PageHeader
        backButton={<BackButton href="/" />}
        breadcrumbs={[
          {
            name: "FAQ",
            href: "/faq",
            current: true,
          },
        ]}
        title="Pertanyaan yang sering ditanyakan"
      />
      <PageContent>
        <InstantSearch indexName="wbw-gsheets-faq" searchClient={searchClient}>
          <CustomSearchBox itemName="pertanyaan" />
          <div className="pb-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <CustomRefinementList
              attribute="kategori_pertanyaan"
              title="Kategori Pertanyaan"
              transformItems={(items: RefinementItem<string>[]) =>
                items.sort((a, b) => a.label.localeCompare(b.label))
              }
            />
          </div>
          <CustomHits />
        </InstantSearch>
      </PageContent>
    </Page>
  );
}
