import { useMemo } from "react";
import { GetStaticProps } from "next";
import Image from "next/image";
import { Layout } from "../components/layout";
import faqSheets, { FaqData } from "../lib/faq-databases";
import { SearchForm } from "../components/search-form";
import { useSearch } from "../lib/hooks/use-search";
import htmr from "htmr";
import { imgixLoader, bannerBlurData } from "../lib/imgix-loader";

type FaqsProps = {
  faqSheets: FaqData[];
};

function groupBy<T, U>(data: T[], key: U) {
  return data.reduce((acc: any, currentValue: any) => {
    let groupKey = currentValue[key];
    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }
    acc[groupKey].push(currentValue);
    return acc;
  }, {});
}

export default function Faqs(props: FaqsProps) {
  const { faqSheets } = props;
  const [filteredQuestions, handleSubmitKeywords] = useSearch(faqSheets, [
    "pertanyaan",
    "jawaban",
  ]);

  const listFaqs = useMemo(() => {
    return groupBy<FaqData | unknown, string>(
      filteredQuestions,
      "kategori_pertanyaan"
    );
  }, [filteredQuestions]);

  return (
    <Layout>
      <header>
        <h1>
          <Image
            loader={imgixLoader}
            src="hero_banner.png"
            alt="Warga Bantu Warga"
            layout="responsive"
            width={640}
            height={287}
            blurDataURL={bannerBlurData}
            placeholder="blur"
            priority={true}
            quality={70}
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
          {Object.keys(listFaqs).map((category: string) => (
            <div key={category}>
              <div className="relative">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
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
                            href={question.link}
                            target="_blank"
                            className="underline text-blue-800"
                            rel="noreferrer"
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
