import { useMemo } from "react";

import { Layout } from "../components/layout";
import { SearchForm } from "../components/search-form";
import faqSheets, { FaqData } from "../lib/faq-databases";
import { useSearch } from "../lib/hooks/use-search";
import { bannerBlurData, imgixLoader } from "../lib/imgix-loader";

import htmr from "htmr";
import { GetStaticProps } from "next";
import Image from "next/image";

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

  const listFaqs = useMemo(() => {
    return groupBy<FaqData | unknown, string>(
      filteredQuestions,
      "kategori_pertanyaan",
    );
  }, [filteredQuestions]);

  return (
    <Layout>
      <header>
        <h1>
          <Image
            alt="Warga Bantu Warga"
            blurDataURL={bannerBlurData}
            height={287}
            layout="responsive"
            loader={imgixLoader}
            placeholder="blur"
            priority={true}
            quality={70}
            src="hero_banner.png"
            width={640}
          />
        </h1>
      </header>
      <div className="px-3">
        <div className="max-w-7xl mx-auto py-6">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Pertanyaan yang sering ditanyakan
          </h2>
          <SearchForm
            itemName="pertanyaan"
            onSubmitKeywords={handleSubmitKeywords}
          />
          {Object.keys(listFaqs as Record<string, unknown>).map(
            (category: string) => (
              <div key={category}>
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
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      faqSheets,
    },
  };
};
