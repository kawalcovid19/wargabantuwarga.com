import { useMemo } from "react";

import { ExclamationCircleIcon } from "@heroicons/react/solid";
import htmr from "htmr";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { BackButton } from "~/components/layout/back-button";
import { Page, PageContent, PageHeader } from "~/components/layout/page";
import { SearchForm } from "~/components/search-form";
import { EmptyState } from "~/components/ui/empty-state";
import { FaqListSkeleton } from "~/components/ui/skeleton-loading";
import faqs, { Faq } from "~/lib/data/faqs";
import { useSearch } from "~/lib/hooks/use-search";

type FaqPageProps = {
  faqs: Faq[];
};

function groupBy<T, U>(data: T[], key: U) {
  return data.reduce((acc: any, currentValue: any) => {
    const groupKey = currentValue[key];
    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }
    acc[groupKey].push(currentValue);
    return acc;
  }, {});
}

const meta = {
  title: "Pertanyaan yang sering ditanyakan",
};

export default function FaqPage(props: FaqPageProps) {
  const { faqs: faq } = props;
  const [
    filteredQuestions,
    handleSubmitKeywords,
    urlParams,
    filterItems,
    isLoading,
  ] = useSearch({
    items: faq,
    fieldNames: ["kategori_pertanyaan", "pertanyaan", "jawaban"],
    aggregationSettings: [
      { field: "kategori_pertanyaan", title: "Kategori Pertanyaan" },
    ],
  });

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const listFaqs = useMemo(() => {
    return groupBy<Faq | unknown, string>(
      filteredQuestions,
      "kategori_pertanyaan",
    );
  }, [filteredQuestions]);

  const listFaqsKeys = Object.keys(listFaqs as Record<string, unknown>);

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
        <SearchForm
          checkDocSize={false}
          filterItems={filterItems}
          initialValue={urlParams}
          itemName="pertanyaan"
          onSubmitKeywords={handleSubmitKeywords}
        />

        <div className="space-y-4">
          {listFaqsKeys.map((category: string) => (
            <div
              key={category}
              className="p-4 bg-white shadow overflow-hidden rounded-md"
            >
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 flex items-center"
                >
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex flex-row items-center justify-start">
                  <span className="pr-3 bg-white text-lg font-medium text-gray-900">
                    {category}
                  </span>
                </div>
              </div>
              <dl className="divide-y divide-gray-200">
                {listFaqs[category].map((question: Faq) => (
                  <div
                    key={question.pertanyaan}
                    className="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8"
                  >
                    <dt className="text-base font-semibold text-gray-900 md:col-span-5">
                      {question.pertanyaan}
                    </dt>
                    <dd className="space-y-4 mt-2 md:mt-0 md:col-span-7">
                      <p className="text-base text-gray-500">
                        {htmr(question.jawaban)}
                      </p>
                      <small className="block">
                        Sumber:{" "}
                        {question.link ? (
                          <a
                            className="underline text-blue-800"
                            href={question.link}
                            rel="noreferrer"
                            target="_blank"
                          >
                            {question.sumber}
                          </a>
                        ) : (
                          question.sumber
                        )}
                      </small>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}

          {listFaqsKeys.length === 0 && !isLoading && (
            <div className="px-4">
              <EmptyState
                description="Silakan gunakan kata kunci pencarian lainnya."
                icon={ExclamationCircleIcon}
                title="Pertanyaan tidak ditemukan"
              />
            </div>
          )}

          {isLoading && <FaqListSkeleton />}
        </div>
      </PageContent>
    </Page>
  );
}

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      faqs,
    },
  };
};
