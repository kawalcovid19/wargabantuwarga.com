import { render } from "@testing-library/react";
import { HomePageContributing } from "../homepage-contributing";

describe("HomePageContributing", () => {
  it("renders correctly", () => {
    const { container } = render(<HomePageContributing />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <section
        class="bg-white overflow-hidden px-4 py-6 space-y-4"
      >
        <h2
          class="text-lg sm:text-xl font-semibold"
        >
          Cara Berkontribusi
        </h2>
        <ul
          class="rounded-sm"
        >
          <li
            class="flex flex-row relative py-4 border-b border-gray-100 last-of-type:border-b-0"
          >
            <div
              aria-hidden="true"
              class="flex flex-none items-center justify-center w-12 h-12 bg-blue-50 rounded-full"
            >
              <svg
                class="w-6 h-6 text-brand-500"
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  d="M16.609 15.12a4.094 4.094 0 100-8.189 4.094 4.094 0 000 8.188zm0 1.754a5.849 5.849 0 100-11.697 5.849 5.849 0 000 11.697z"
                  fill="currentColor"
                  fill-rule="evenodd"
                />
                <path
                  d="M9.785 23c3.677 0 6.794-2.113 7.878-5.038a.476.476 0 00-.459-.601h-.62a.949.949 0 00-.909.677l-.02.07c-1.028 1.797-3.172 3.137-5.87 3.137-3.82 0-6.53-2.687-6.53-5.556 0-.12.004-.239.013-.356l.115-1.55c.285-1.655 1.026-3.499 2.063-5.315 1.302-2.28 2.962-4.33 4.404-5.66 1.217 1.029 2.487 2.541 3.583 4.274a5.807 5.807 0 011.71-.571c-1.255-2.061-2.777-3.905-4.285-5.148a1.594 1.594 0 00-2.096.062c-2.843 2.58-6.32 7.567-7.101 12.022-.07.4-.119.796-.143 1.185a9.142 9.142 0 00-.018.569v.001h.018a6.55 6.55 0 000 .975C1.802 19.987 5.395 23 9.785 23z"
                  fill="currentColor"
                />
                <path
                  d="M17.73 9.495a.877.877 0 00-1.755 0v.585h-.585a.877.877 0 100 1.754h.585v.585a.877.877 0 001.754 0v-.585h.585a.877.877 0 100-1.755h-.585v-.584z"
                  fill="currentColor"
                />
                <path
                  clip-rule="evenodd"
                  d="M5.887 13.282c.484 0 .877.393.877.877v.975c0 1.4 1.134 2.534 2.534 2.534h.488a.877.877 0 010 1.755h-.488a4.289 4.289 0 01-4.289-4.29v-.974c0-.484.393-.877.878-.877z"
                  fill="currentColor"
                  fill-rule="evenodd"
                />
              </svg>
            </div>
            <div
              class="ml-4 space-y-1"
            >
              <h3
                class="text-base leading-5 font-semibold"
              >
                <a
                  class="helper-link-cover"
                  href="https://docs.google.com/forms/d/e/1FAIpQLScDShI4BtBcA3dgMJhCJPs2fBl5wXoaR7kMspapNZdYKFOugA/viewform"
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                >
                  Daftar Donor Darah
                </a>
              </h3>
              <p
                class="text-sm leading-4 text-gray-500"
              >
                Berdonor darah plasma konvalesen (hanya diisi oleh calon pendonor)
              </p>
            </div>
            <div
              aria-hidden="true"
              class="flex flex-none items-center justify-center ml-2"
            >
              <svg
                class="w-6 h-6 text-brand-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  fill-rule="evenodd"
                />
              </svg>
            </div>
          </li>
          <li
            class="flex flex-row relative py-4 border-b border-gray-100 last-of-type:border-b-0"
          >
            <div
              aria-hidden="true"
              class="flex flex-none items-center justify-center w-12 h-12 bg-blue-50 rounded-full"
            >
              <svg
                class="w-6 h-6 text-brand-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </svg>
            </div>
            <div
              class="ml-4 space-y-1"
            >
              <h3
                class="text-base leading-5 font-semibold"
              >
                <a
                  class="helper-link-cover"
                  href="https://www.indorelawan.org/activity/60e2ed45164da80018b0e246"
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                >
                  Daftar Jadi Relawan
                </a>
              </h3>
              <p
                class="text-sm leading-4 text-gray-500"
              >
                Gabung jadi relawan untuk mengumpulkan data dan menjawab pertanyaan warga via hotline
              </p>
            </div>
            <div
              aria-hidden="true"
              class="flex flex-none items-center justify-center ml-2"
            >
              <svg
                class="w-6 h-6 text-brand-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  fill-rule="evenodd"
                />
              </svg>
            </div>
          </li>
        </ul>
        <div
          class="p-4 bg-blue-50 text-center rounded-md space-y-3"
        >
          <p
            class="text-base leading-6 font-semibold"
          >
            Mau Upload Info?
          </p>
          <a
            class="flex flex-row px-4 py-2 text-base rounded-full items-center justify-center border border-transparent font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 text-brand-500 border-brand-500 hover:bg-blue-100 focus:ring-brand-500 disabled:cursor-not-allowed disabled:opacity-75"
            href="https://docs.google.com/forms/d/e/1FAIpQLSc_m0WyokBk8xv9jBwYFN1zAt4_u-kE2TI9ZBrAokB4E08AGw/viewform"
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            Tambahkan info di sini
          </a>
        </div>
      </section>
    `);
  });
});
