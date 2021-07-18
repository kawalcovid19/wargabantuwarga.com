import { useMemo, useState } from "react";

import { BackButton } from "../components/layout/back-button";
import { Page } from "../components/layout/page";
import { PageContent } from "../components/layout/page-content";
import { PageHeader } from "../components/layout/page-header";
import { SearchForm } from "../components/search-form";
import { SelectDropdown } from "../components/select-dropdown";
import faqSheets, { FaqData } from "../lib/faq-databases";
import { useSearch } from "../lib/hooks/use-search";

import htmr from "htmr";
import { GetStaticProps } from "next";

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

export default function Faqs(props: FaqsProps) {
  const { faqSheets: faq } = props;
  const [filteredQuestions, handleSubmitKeywords] = useSearch(faq, [
    "pertanyaan",
    "jawaban",
  ]);
  const [selectedCategory, setSelectedCategory] = useState("");

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  const selectedQuestions = filteredQuestions.filter((f) => {
    // eslint-disable-next-line no-negated-condition
    if (selectedCategory !== "") {
      return f.kategori_pertanyaan == selectedCategory;
    } else {
      return filteredQuestions;
    }
  });

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const listFaqs = useMemo(() => {
    // eslint-disable-next-line no-negated-condition
    if (selectedCategory !== "") {
      return groupBy<FaqData | unknown, string>(
        selectedQuestions,
        "kategori_pertanyaan",
      );
    } else {
      return groupBy<FaqData | unknown, string>(
        filteredQuestions,
        "kategori_pertanyaan",
      );
    }
  }, [selectedQuestions]);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const listOptions = groupBy<FaqData | unknown, string>(
    faqSheets,
    "kategori_pertanyaan",
  );

  return (
    <Page>
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
          itemName="pertanyaan"
          onSubmitKeywords={handleSubmitKeywords}
        />
        <SelectDropdown
          listOptions={listOptions}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
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
