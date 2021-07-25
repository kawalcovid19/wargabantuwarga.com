import { Faq } from "~/lib/faqs";

import htmr from "htmr";

type FaqListProps = {
  data: Faq[];
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

export function FAQList(props: FaqListProps) {
  const listFaqs = groupBy(props.data, "kategori_pertanyaan");
  return (
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
              {listFaqs[category].map((question: Faq) => (
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
  );
}
