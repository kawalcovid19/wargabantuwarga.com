import { Navigation } from "../navigation";

import { render } from "@testing-library/react";

jest.mock("next/router", () => require("next-router-mock"));

describe("Navigation", () => {
  it("renders correctly", () => {
    const { container } = render(<Navigation />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <nav
        class="flex items-center justify-center fixed bottom-0 w-full h-16 px-2 bg-white border-t border-gray-300 z-30"
      >
        <div
          class="flex items-center justify-center w-full max-w-xl mx-auto"
        >
          <ul
            class="flex items-center justify-evenly w-full"
          >
            <li
              class="relative"
            >
              <a
                class="inline-flex flex-col items-center justify-center text-center h-12 px-2 rounded-md text-gray-600 hover:text-blue-600"
                href="/"
              >
                <svg
                  aria-hidden="true"
                  class="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                </svg>
                <span
                  class="text-xs truncate"
                >
                  Beranda
                </span>
              </a>
            </li>
            <li
              class="relative"
            >
              <a
                class="inline-flex flex-col items-center justify-center text-center h-12 px-2 rounded-md text-gray-600 hover:text-blue-600"
                href="https://wa.me/6281257579812"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                <svg
                  aria-hidden="true"
                  class="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                </svg>
                <span
                  class="text-xs truncate"
                >
                  Hubungi Kami
                </span>
              </a>
            </li>
            <li
              class="relative"
            >
              <a
                class="inline-flex flex-col items-center justify-center text-center h-12 px-2 rounded-md text-gray-600 hover:text-blue-600"
                href="/provinces"
              >
                <svg
                  aria-hidden="true"
                  class="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                </svg>
                <span
                  class="text-xs truncate"
                >
                  Pusat Data
                </span>
              </a>
            </li>
            <li
              class="relative"
            >
              <a
                class="inline-flex flex-col items-center justify-center text-center h-12 px-2 rounded-md text-gray-600 hover:text-blue-600"
                href="/faq"
              >
                <svg
                  aria-hidden="true"
                  class="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                </svg>
                <span
                  class="text-xs truncate"
                >
                  Info Umum
                </span>
              </a>
            </li>
            <li
              class="relative"
            >
              <div
                class="relative sm:hidden"
              >
                <button
                  aria-expanded="false"
                  class="inline-flex flex-col items-center justify-center text-center h-12 px-2 rounded-md text-gray-600 hover:text-blue-600"
                  id="headlessui-popover-button-1"
                  type="button"
                >
                  <svg
                    aria-hidden="true"
                    class="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 6h16M4 12h16M4 18h16"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                  </svg>
                  <span
                    class="text-xs truncate"
                  >
                    Menu
                  </span>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    `);
  });
});
