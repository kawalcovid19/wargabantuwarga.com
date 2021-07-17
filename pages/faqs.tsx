import { useState, useRef, MouseEvent } from "react";
import Image from "next/image";
import { Layout } from "../components/layout";
import database, { FaqData } from "../lib/faq-databases";
import { imgixLoader, bannerBlurData } from "../lib/imgix-loader";
import htmr from "htmr";

type FaqsProps = {
  questionList: FaqsList;
};

type FaqsList = {
  [key: string]: FaqData[];
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
  const { questionList } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const [questionData, setQuestionData] = useState(questionList);

  const onSearchQuestion = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!inputRef.current!.value) {
      return setQuestionData(questionList);
    }

    const searchResult: FaqsList = {};
    Object.keys(questionList).map((category: string) => {
      const questionCategory = questionList[category];
      for (let i = 0; i < questionCategory.length; i++) {
        const pertanyaan = questionCategory[i].pertanyaan.toLowerCase();
        const keyword = inputRef.current!.value.toLowerCase();
        if (pertanyaan.includes(keyword)) {
          if (!searchResult[category]) {
            searchResult[category] = [];
          }
          searchResult[category].push(questionCategory[i]);
        }
      }
    });
    setQuestionData(searchResult);
  };

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
          <form className="flex items-center">
            <input
              type="text"
              placeholder="Cari pertanyaan kamu"
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full px-2 py-2 sm:text-sm border-gray-300 border-2 rounded-md mt-5 mb-5"
              ref={inputRef}
            />
            <button
              type="submit"
              className="bg-blue-600 text-white ml-2 py-2 px-6 rounded"
              onClick={onSearchQuestion}
            >
              Cari
            </button>
          </form>
          {Object.keys(questionData).map((category: string) => (
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
                {questionData[category].map((question: FaqData) => (
                  <div
                    key={question.pertanyaan}
                    className="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8"
                  >
                    <dt className="text-base font-medium text-gray-900 md:col-span-5">
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

export async function getStaticProps() {
  const questionList: Object = groupBy<FaqData, string>(
    database,
    "kategori_pertanyaan"
  );
  return {
    props: {
      questionList,
    },
  };
}
