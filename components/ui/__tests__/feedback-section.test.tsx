import { render } from "@testing-library/react";
import { FeedbackSection } from "~/components/ui/feedback-section";

describe("FooterDiscussionSection", () => {
  it("renders correctly", () => {
    const { container } = render(<FeedbackSection />);

    expect(container.firstChild).toMatchInlineSnapshot(`
<div
  class="flex-1 px-4 pt-4 pb-12"
>
  <div
    class="w-full sm:max-w-xl mx-auto"
  >
    <div
      class="p-4 bg-white overflow-hidden shadow rounded-md"
    >
      <h2
        class="text-center font-semibold text-gray-700 text-lg"
      >
        Ada usulan / laporan terkait website ini?
      </h2>
      <div
        class="flex justify-center"
      >
        <a
          aria-label="Sampaikan masukan Anda"
          class="inline-flex flex-row px-4 py-2 text-sm rounded-full items-center justify-center border border-transparent font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-75 mt-2"
          href="https://kcov.id/wbw-discuss"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          <svg
            aria-hidden="true"
            class="-ml-1 mr-2 h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            />
          </svg>
          Sampaikan masukan Anda
        </a>
      </div>
    </div>
  </div>
</div>
`);
  });
});
