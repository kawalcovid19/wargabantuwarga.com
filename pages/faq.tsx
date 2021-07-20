import { useMemo } from "react";

import { BackButton } from "../components/layout/back-button";
import { Page } from "../components/layout/page";
import { PageContent } from "../components/layout/page-content";
import { PageHeader } from "../components/layout/page-header";
import { SearchForm } from "../components/search-form";
import faqSheets, { FaqData } from "../lib/faq-databases";
import { useSearch } from "../lib/hooks/use-search";

import htmr from "htmr";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";

type FaqsProps = {
  faqSheets: FaqData[];
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

export default function Faqs(props: FaqsProps) {
  const { faqSheets: faq } = props;
  const [filteredQuestions, handleSubmitKeywords, urlParams, filterItems] =
    useSearch(
      faq,
      ["pertanyaan", "jawaban"],
      [{ field: "kategori_pertanyaan", title: "Kategori Pertanyaan" }],
    );

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const listFaqs = useMemo(() => {
    return groupBy<FaqData | unknown, string>(
      filteredQuestions,
      "kategori_pertanyaan",
    );
  }, [filteredQuestions]);

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
          filterItems={filterItems}
          initialValue={urlParams}
          itemName="pertanyaan"
          onSubmitKeywords={handleSubmitKeywords}
        />

        <div className="space-y-4">
          {Object.keys(listFaqs as Record<string, unknown>).map(
            (category: string) => (
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
                  {listFaqs[category].map((question: FaqData) => (
                    <div
                      key={question.pertanyaan}
                      className="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8"
                    >
                      <dt className="text-base font-semibold text-gray-900 md:col-span-5">
                        {question.pertanyaan}
                      </dt>
                      <dd className="mt-2 md:mt-0 md:col-span-7">
                        <p className="text-base text-gray-500">
                          {htmr(question.jawaban)}
                        </p>
                        <small>
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
            ),
          )}
        </div>
      </PageContent>
    </Page>
  );
}

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      faqSheets,
    },
  };
};
