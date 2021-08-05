import * as React from "react";

import { render } from "@testing-library/react";
import { HomePageStart } from "../homepage-start";

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
            class="flex flex-row px-4 py-2 text-base rounded-full items-center justify-center border border-transparent font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 text-white bg-brand-500 hover:bg-brand-600 focus:ring-brand-500 disabled:cursor-not-allowed disabled:opacity-75 mt-4"
            href="/provinces"
          >
            Cek sekarang
          </a>
        </div>
        <div
          class="px-4"
        >
          <div
            class="rounded-sm"
          >
            <div
              class="flex flex-row relative py-5 px-4 border-gray-100 border-2 rounded-lg justify-between"
            >
              <div
                class="flex flex-row"
              >
                <div
                  aria-hidden="true"
                  class="flex flex-none items-center justify-center w-12 h-12 bg-blue-50 rounded-full"
                >
                  <svg
                    class="w-6 h-6 text-brand-500"
                    fill="none"
                    height="18"
                    viewBox="0 0 20 18"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 4H3C1.89543 4 1 4.89543 1 6V15C1 16.1046 1.89543 17 3 17H17C18.1046 17 19 16.1046 19 15V6C19 4.89543 18.1046 4 17 4H12M8 4V3C8 1.89543 8.89543 1 10 1C11.1046 1 12 1.89543 12 3V4M8 4C8 5.10457 8.89543 6 10 6C11.1046 6 12 5.10457 12 4M7 12C8.10457 12 9 11.1046 9 10C9 8.89543 8.10457 8 7 8C5.89543 8 5 8.89543 5 10C5 11.1046 5.89543 12 7 12ZM7 12C8.30622 12 9.41741 12.8348 9.82924 14M7 12C5.69378 12 4.58249 12.8348 4.17065 14M13 9H16M13 13H15"
                      fill="none"
                      stroke="currentColor"
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
                      href="/kontak-darurat"
                    >
                      Kontak Darurat
                    </a>
                  </h3>
                  <p
                    class="text-sm leading-4 text-gray-500"
                  >
                    Situs dan kontak penting terkait COVID-19
                  </p>
                </div>
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
            </div>
          </div>
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
                  viewBox="0 0 26 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="18.2583"
                    cy="18.4"
                    r="1.85"
                    stroke="currentColor"
                    stroke-width="1.8"
                  />
                  <path
                    clip-rule="evenodd"
                    d="M20.458 6.33V5.292a2.292 2.292 0 10-4.583 0v.916l-.456-1.139a1.833 1.833 0 00-1.702-1.152H3.958c-1.012 0-1.833.82-1.833 1.833v11c0 1.012.82 1.833 1.833 1.833H5.34a2.75 2.75 0 005.488 0h3.306c.031 0 .062-.001.092-.005a.824.824 0 00.917-.82V8.095c0-.13.106-.237.237-.237h4.423c.069 0 .131.038.163.1l2.49 4.8c.013.027.02.056.02.085v3.907a.183.183 0 01-.183.183H22.2a.825.825 0 000 1.65h.092c1.012 0 1.833-.82 1.833-1.833v-3.907c0-.294-.07-.583-.206-.844l-2.49-4.801c-.21-.405-.558-.71-.97-.868zm-2.291-1.955a.917.917 0 00-.917.917v.916h1.833v-.916a.917.917 0 00-.916-.917zM10.41 16.933h3.082V6.483a.917.917 0 00-.917-.916H3.958a.183.183 0 00-.183.183v11c0 .101.082.183.183.183h1.799a2.748 2.748 0 014.653 0zM8.083 19.5a1.1 1.1 0 100-2.2 1.1 1.1 0 000 2.2z"
                    fill="currentColor"
                    fill-rule="evenodd"
                  />
                  <path
                    clip-rule="evenodd"
                    d="M8.633 8.042c.456 0 .825.369.825.825v3.666a.825.825 0 01-1.65 0V8.867c0-.456.37-.825.825-.825z"
                    fill="currentColor"
                    fill-rule="evenodd"
                  />
                  <path
                    clip-rule="evenodd"
                    d="M5.975 10.7c0-.456.37-.825.825-.825h3.667a.825.825 0 110 1.65H6.8a.825.825 0 01-.825-.825z"
                    fill="currentColor"
                    fill-rule="evenodd"
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
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="8.98281"
                    cy="17.0626"
                    fill="currentColor"
                    rx="1.38076"
                    ry="1.38076"
                  />
                  <ellipse
                    cx="10.3642"
                    cy="13.3346"
                    fill="currentColor"
                    rx="1.38076"
                    ry="1.38076"
                  />
                  <circle
                    cx="7.14219"
                    cy="13.795"
                    fill="currentColor"
                    r="0.920506"
                  />
                  <path
                    clip-rule="evenodd"
                    d="M17.268 7.535a1.565 1.565 0 100-3.13 1.565 1.565 0 000 3.13zm0 1.657a3.222 3.222 0 100-6.443 3.222 3.222 0 000 6.443z"
                    fill="currentColor"
                    fill-rule="evenodd"
                  />
                  <path
                    clip-rule="evenodd"
                    d="M5.67 2.841v-.552a.828.828 0 10-1.657 0V5.05a.828.828 0 001.656 0v-.552h1.105v2.354A5.985 5.985 0 003 12.414v9.665c0 .509.412.921.92.921h10.126a.92.92 0 00.92-.92v-9.666a5.985 5.985 0 00-3.773-5.562V4.498h.092c1.077 0 2.038.228 2.87.64a3.218 3.218 0 01.827-1.438c-1.073-.551-2.315-.859-3.697-.859h-.123a2.21 2.21 0 00-4.357 0H5.669zM8.43 6.456a6.058 6.058 0 011.105 0V3.209a.552.552 0 00-1.105 0v3.247zm3.879 14.887a1 1 0 001-1v-7.929a4.326 4.326 0 00-8.653 0v7.93a1 1 0 001 1h6.653z"
                    fill="currentColor"
                    fill-rule="evenodd"
                  />
                  <path
                    d="M18.997 8.69c-.459.292-.997.472-1.576.499a9.43 9.43 0 01.4 2.765v10.218a.829.829 0 001.656 0V11.954c0-1.15-.165-2.251-.48-3.265z"
                    fill="currentColor"
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
            href="https://sembako.wargabantuwarga.com"
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            <div
              style="display: block; overflow: hidden; position: relative; box-sizing: border-box; margin: 0px;"
            >
              <div
                style="display: block; box-sizing: border-box; padding-top: 35.97560975609756%;"
              />
              <noscript />
              <img
                alt="Ajukan bantuan sembako jika positif Covid-19 - Daftar Sekarang"
                decoding="async"
                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                style="position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px; box-sizing: border-box; padding: 0px; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; filter: blur(20px); background-size: cover; background-image: url(https://res.cloudinary.com/wargabantuwarga/image/upload/c_scale,w_656,q_2,cs_tinysrgb,f_auto,e_blur:1000/v1627319803/sembako-cta-v2_czojls);"
              />
            </div>
          </a>
        </div>
      </section>
    `);
  });
});
