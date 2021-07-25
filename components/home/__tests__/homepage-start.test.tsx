import * as React from "react";

import { HomePageStart } from "../homepage-start";

import { render } from "@testing-library/react";

describe("HomePageStart", () => {
  it("renders correctly", () => {
    const { container } = render(<HomePageStart />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <section
        class="bg-white overflow-hidden"
      >
        <div
          class="px-4 py-6 text-center"
        >
          <h2
            class="text-lg sm:text-xl font-semibold sm:mx-6"
          >
            Cek database RS, Puskesmas, Ambulans, Oksigen, dan kontak penting lainnya
          </h2>
          <a
            class="flex px-4 py-2 text-base rounded-full items-center justify-center border border-transparent font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 text-white bg-brand-500 hover:bg-brand-600 focus:ring-brand-500 disabled:cursor-not-allowed disabled:opacity-75 mt-4"
            href="/provinces"
          >
            Cek sekarang
          </a>
        </div>
        <div
          class="px-4 py-6"
        >
          <ul
            class="grid grid-cols-2 gap-3 sm:gap-6 sm:grid-cols-4"
          >
            <li
              class="inline-flex flex-col items-center justify-center text-center relative shadow-lg rounded-lg py-3 px-2"
            >
              <div
                aria-hidden="true"
                class="flex items-center justify-center h-10 w-10 bg-blue-100 rounded-full"
              >
                <svg
                  class="h-6 w-6 text-brand-500"
                  fill="none"
                  viewBox="0 0 24 25"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    d="M13.157 1.857a1.157 1.157 0 10-2.314 0v.986h-.986a1.157 1.157 0 000 2.314h.986v.986a1.157 1.157 0 102.314 0v-.986h.986a1.157 1.157 0 000-2.314h-.986v-.986z"
                    fill="currentColor"
                    fill-rule="evenodd"
                  />
                  <path
                    d="M7.5 3.171c-1.087 0-2.025.859-2.025 1.986v.385c-.936.156-1.687.95-1.687 1.958v14.514h-.225c-.777 0-1.463.616-1.463 1.443 0 .828.686 1.443 1.463 1.443h16.875c.776 0 1.462-.615 1.462-1.443 0-.828-.686-1.443-1.462-1.443h-.225V7.5c0-1.008-.751-1.802-1.688-1.958v-.385c0-1.127-.938-1.986-2.025-1.986a.9.9 0 100 1.8c.151 0 .225.11.225.186v1.257a.9.9 0 00.9.9h.563c.151 0 .225.11.225.186v15.414c0 .064.006.126.019.186H14.25v-1.267c0-.598-.504-1.083-1.125-1.083h-2.25c-.621 0-1.125.485-1.125 1.083V23.1H5.568a.902.902 0 00.02-.186V7.5c0-.076.073-.186.225-.186h.562a.9.9 0 00.9-.9V5.157c0-.076.074-.186.225-.186a.9.9 0 000-1.8z"
                    fill="currentColor"
                  />
                  <path
                    d="M8.625 10c-.621 0-1.125.485-1.125 1.083v1.084c0 .598.504 1.083 1.125 1.083s1.125-.485 1.125-1.083v-1.084c0-.598-.504-1.083-1.125-1.083zM8.625 14.333c-.621 0-1.125.485-1.125 1.084V16.5c0 .598.504 1.083 1.125 1.083S9.75 17.098 9.75 16.5v-1.083c0-.599-.504-1.084-1.125-1.084zM10.875 11.083c0-.598.504-1.083 1.125-1.083s1.125.485 1.125 1.083v1.084c0 .598-.504 1.083-1.125 1.083s-1.125-.485-1.125-1.083v-1.084zM12 14.333c-.621 0-1.125.485-1.125 1.084V16.5c0 .598.504 1.083 1.125 1.083s1.125-.485 1.125-1.083v-1.083c0-.599-.504-1.084-1.125-1.084zM14.25 11.083c0-.598.504-1.083 1.125-1.083s1.125.485 1.125 1.083v1.084c0 .598-.504 1.083-1.125 1.083s-1.125-.485-1.125-1.083v-1.084zM15.375 14.333c-.621 0-1.125.485-1.125 1.084V16.5c0 .598.504 1.083 1.125 1.083S16.5 17.098 16.5 16.5v-1.083c0-.599-.504-1.084-1.125-1.084z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <a
                class="text-gray-900 font-semibold text-xs mt-3 helper-link-cover"
                href="/provinces?kebutuhan=Rumah%20sakit"
              >
                Rumah Sakit
              </a>
            </li>
            <li
              class="inline-flex flex-col items-center justify-center text-center relative shadow-lg rounded-lg py-3 px-2"
            >
              <div
                aria-hidden="true"
                class="flex items-center justify-center h-10 w-10 bg-blue-100 rounded-full"
              >
                <svg
                  class="h-6 w-6 text-brand-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                  <path
                    d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <a
                class="text-gray-900 font-semibold text-xs mt-3 helper-link-cover"
                href="/provinces?kebutuhan=Ambulans"
              >
                Ambulans
              </a>
            </li>
            <li
              class="inline-flex flex-col items-center justify-center text-center relative shadow-lg rounded-lg py-3 px-2"
            >
              <div
                aria-hidden="true"
                class="flex items-center justify-center h-10 w-10 bg-blue-100 rounded-full"
              >
                <svg
                  class="h-6 w-6 text-brand-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <a
                class="text-gray-900 font-semibold text-xs mt-3 helper-link-cover"
                href="/provinces?kebutuhan=Oksigen"
              >
                Info Oksigen
              </a>
            </li>
            <li
              class="inline-flex flex-col items-center justify-center text-center relative shadow-lg rounded-lg py-3 px-2"
            >
              <div
                aria-hidden="true"
                class="flex items-center justify-center h-10 w-10 bg-blue-100 rounded-full"
              >
                <svg
                  class="h-6 w-6 text-brand-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <a
                class="text-gray-900 font-semibold text-xs mt-3 helper-link-cover"
                href="/provinces?kebutuhan=Donor%20plasma"
              >
                Donor Plasma
              </a>
            </li>
          </ul>
        </div>
        <div
          class="px-4 py-6"
        >
          <a
            href="https://sembako.wargabantuwarga.com/"
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            <div
              style="display: block; overflow: hidden; position: relative; box-sizing: border-box; margin: 0px;"
            >
              <div
                style="display: block; box-sizing: border-box; padding-top: 35.97560975609756%;"
              />
              <img
                alt="Ajukan bantuan sembako jika positif Covid-19 - Daftar Sekarang"
                decoding="async"
                sizes="100vw"
                src="https://res.cloudinary.com/wargabantuwarga/image/upload/c_scale,w_3840,q_90,cs_tinysrgb,f_auto/v1627206408/sembako-cta-v1_gpmaxg"
                srcset="https://res.cloudinary.com/wargabantuwarga/image/upload/c_scale,w_640,q_90,cs_tinysrgb,f_auto/v1627206408/sembako-cta-v1_gpmaxg 640w, https://res.cloudinary.com/wargabantuwarga/image/upload/c_scale,w_750,q_90,cs_tinysrgb,f_auto/v1627206408/sembako-cta-v1_gpmaxg 750w, https://res.cloudinary.com/wargabantuwarga/image/upload/c_scale,w_828,q_90,cs_tinysrgb,f_auto/v1627206408/sembako-cta-v1_gpmaxg 828w, https://res.cloudinary.com/wargabantuwarga/image/upload/c_scale,w_1080,q_90,cs_tinysrgb,f_auto/v1627206408/sembako-cta-v1_gpmaxg 1080w, https://res.cloudinary.com/wargabantuwarga/image/upload/c_scale,w_1200,q_90,cs_tinysrgb,f_auto/v1627206408/sembako-cta-v1_gpmaxg 1200w, https://res.cloudinary.com/wargabantuwarga/image/upload/c_scale,w_1920,q_90,cs_tinysrgb,f_auto/v1627206408/sembako-cta-v1_gpmaxg 1920w, https://res.cloudinary.com/wargabantuwarga/image/upload/c_scale,w_2048,q_90,cs_tinysrgb,f_auto/v1627206408/sembako-cta-v1_gpmaxg 2048w, https://res.cloudinary.com/wargabantuwarga/image/upload/c_scale,w_3840,q_90,cs_tinysrgb,f_auto/v1627206408/sembako-cta-v1_gpmaxg 3840w"
                style="position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px; box-sizing: border-box; padding: 0px; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;"
              />
            </div>
          </a>
        </div>
      </section>
    `);
  });
});
