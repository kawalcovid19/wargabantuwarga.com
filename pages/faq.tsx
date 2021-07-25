import { BackButton } from "~/components/layout/back-button";
import { Page } from "~/components/layout/page";
import { PageContent } from "~/components/layout/page-content";
import { PageHeader } from "~/components/layout/page-header";
import { CustomInstantSearch } from "~/components/search/custom-instant-search";
import { typesenseSearch } from "~/lib/typesense";

import { NextSeo } from "next-seo";

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
        <CustomInstantSearch
          filterSettings={[
            { field: "kategori_pertanyaan", title: "Kategori Pertanyaan" },
          ]}
          indexName="wbw-gsheets-faq"
          itemName="pertanyaan"
          searchClient={searchClient}
        />
      </PageContent>
    </Page>
  );
}
