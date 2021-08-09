import { render } from "@testing-library/react";
import { GlobalHeader } from "../global-header";

jest.mock("next/router", () => require("next-router-mock"));

describe("GlobalHeader", () => {
  it("renders correctly", () => {
    const { container } = render(<GlobalHeader />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <header
        class="flex items-center justify-center fixed w-full h-16 px-4 z-40 bg-brand-500 transition duration-200"
      >
        <div
          class="w-full sm:max-w-xl mx-auto flex items-center justify-between h-full"
        >
          <a
            class="align-middle"
            href="/"
          >
            <h1
              class="sr-only"
            >
              Warga Bantu Warga
            </h1>
            <svg
              aria-hidden="true"
              height="32"
              viewBox="0 0 542.652 199.832"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                data-name="Layer"
              >
                <path
                  d="M330.333 11.677l-16.44 49.607h-9.78l-12.26-36.71-12.474 36.71h-9.85l-16.442-49.607h9.567l12.331 37.702 12.827-37.702h8.504L308.86 49.59l12.685-37.914zm35.08 30.898L356.06 20.89l-9.284 21.686zm3.048 7.23h-24.804l-4.89 11.48h-9.497l22.324-49.608h9.071l22.394 49.607h-9.638z"
                  fill="#fff"
                />
                <clippath
                  id="a"
                >
                  <path
                    d="M0 199.832h542.651V0H0z"
                    transform="matrix(1 0 0 -1 0 199.832)"
                  />
                </clippath>
                <g
                  clip-path="url(#a)"
                  fill="#fff"
                >
                  <path
                    d="M418.492 22.023c-2.079-1.7-5.127-2.55-9.142-2.55h-10.772v19.771h10.772c4.015 0 7.063-.862 9.142-2.586 2.078-1.725 3.118-4.169 3.118-7.335 0-3.165-1.04-5.599-3.118-7.3m3.331 39.261l-10.135-14.528c-.425.047-1.062.071-1.913.071h-11.197v14.457h-9.213V11.676h20.41c4.3 0 8.044.71 11.233 2.126 3.19 1.418 5.633 3.45 7.335 6.095 1.701 2.647 2.551 5.788 2.551 9.426 0 3.732-.91 6.945-2.728 9.637-1.82 2.694-4.43 4.703-7.83 6.025l11.408 16.3zm53.221-25.37h8.717v19.771c-2.55 2.033-5.528 3.592-8.93 4.678a34.278 34.278 0 01-10.488 1.63c-5.056 0-9.614-1.099-13.677-3.295-4.064-2.197-7.253-5.232-9.567-9.107-2.316-3.873-3.473-8.243-3.473-13.11 0-4.866 1.157-9.236 3.473-13.11 2.314-3.874 5.515-6.91 9.602-9.107 4.086-2.198 8.682-3.295 13.783-3.295 4.158 0 7.938.685 11.34 2.054 3.402 1.371 6.26 3.38 8.574 6.024l-5.81 5.67c-3.78-3.78-8.34-5.67-13.678-5.67-3.497 0-6.602.733-9.319 2.197-2.717 1.465-4.843 3.521-6.378 6.166-1.536 2.647-2.304 5.67-2.304 9.07 0 3.308.768 6.285 2.304 8.93 1.535 2.647 3.661 4.725 6.378 6.236 2.717 1.513 5.8 2.268 9.248 2.268 3.874 0 7.275-.85 10.205-2.55zm49.961 6.661l-9.354-21.686-9.284 21.686zm3.048 7.23H503.25l-4.89 11.48h-9.497l22.324-49.608h9.071l22.394 49.607h-9.638zm-197.72 95.278l-16.44 49.607h-9.78l-12.26-36.709-12.474 36.71h-9.85l-16.442-49.608h9.567l12.331 37.701 12.827-37.7h8.504l12.544 37.913 12.685-37.914zm35.08 30.899l-9.354-21.686-9.284 21.686zm3.048 7.229h-24.804l-4.89 11.48h-9.497l22.324-49.607h9.071l22.394 49.607h-9.638zm50.031-27.781c-2.079-1.701-5.127-2.551-9.142-2.551h-10.772v19.772h10.772c4.015 0 7.063-.862 9.142-2.587 2.078-1.724 3.118-4.17 3.118-7.334 0-3.165-1.04-5.6-3.118-7.3m3.331 39.26l-10.135-14.528c-.425.048-1.062.072-1.913.072h-11.197v14.457h-9.213v-49.608h20.41c4.3 0 8.044.709 11.233 2.126 3.19 1.418 5.633 3.45 7.335 6.095 1.701 2.647 2.551 5.788 2.551 9.426 0 3.732-.91 6.944-2.728 9.637-1.82 2.694-4.43 4.702-7.83 6.024l11.408 16.3zm53.221-25.37h8.717v19.771c-2.55 2.033-5.528 3.591-8.93 4.678a34.278 34.278 0 01-10.488 1.63c-5.056 0-9.614-1.099-13.677-3.296-4.064-2.196-7.253-5.23-9.567-9.106-2.316-3.873-3.473-8.244-3.473-13.11s1.157-9.237 3.473-13.11c2.314-3.874 5.515-6.91 9.602-9.107 4.086-2.198 8.682-3.296 13.783-3.296 4.158 0 7.938.685 11.34 2.055 3.402 1.371 6.26 3.378 8.574 6.024l-5.81 5.67c-3.78-3.78-8.34-5.67-13.678-5.67-3.497 0-6.602.733-9.319 2.197-2.717 1.465-4.843 3.52-6.378 6.165-1.536 2.647-2.304 5.67-2.304 9.071 0 3.308.768 6.285 2.304 8.93 1.535 2.647 3.661 4.725 6.378 6.236 2.717 1.513 5.8 2.268 9.248 2.268 3.874 0 7.275-.85 10.205-2.552zm49.961 6.662l-9.354-21.686-9.284 21.686zm3.048 7.229H503.25l-4.89 11.48h-9.497l22.324-49.607h9.071l22.394 49.607h-9.638zm-238.897-69.042c0-3.401-2.552-5.031-7.37-5.031h-11.763V119.2h11.763c4.818 0 7.37-1.63 7.37-5.031m-19.133-24.306v9.567h9.637c4.677 0 7.086-1.63 7.086-4.819 0-3.118-2.409-4.748-7.086-4.748zm33.305 25.865c0 8.574-7.086 13.605-20.408 13.605h-26.786V79.73h25.37c13.037 0 19.415 5.315 19.415 12.967 0 4.748-2.409 8.575-6.66 10.772 5.596 1.984 9.07 6.235 9.07 12.259m42.238-6.378l-6.378-15.872-6.378 15.873zm4.11 10.347h-20.975l-3.898 9.636H310.49l21.896-49.603h13.82l21.965 49.603h-14.597zM425.15 79.73v49.604h-11.551l-21.895-26.432v26.432h-13.748V79.73h11.55l21.897 26.432V79.73zm26.293 11.126h-15.235V79.73h44.43v11.126h-15.164v38.478h-14.03zm39.05 16.369V79.73h14.03v27.069c0 8.504 3.543 11.905 9.425 11.905 5.811 0 9.354-3.401 9.354-11.905v-27.07h13.818v27.496c0 14.81-8.646 23.1-23.313 23.1-14.668 0-23.314-8.29-23.314-23.1m-397.74 52.952c1.563-.666 3.13-1.326 4.705-1.966.441-.18.894-.326 1.35-.467"
                  />
                  <path
                    d="M102.876 156.453c4.786-1.278 9.893-1.653 13.928 2.156 4.257 4.018 2.668 7.067 2.554 7.953-.477 1.001-1.6 1.53-3.018 1.828-3.1.652-5.899 2.568-8.693 4.01-3.13 1.615-6.29 3.167-9.299 5.004-5.504 3.361-10.573 7.371-15.705 11.26-5.109 3.868-10.488 7.336-15.619 11.168h116.478a12.51 12.51 0 008.883-3.699l2.381-2.398a17.449 17.449 0 005.066-12.294V49.958c-.274-.849-.98-.708-1.316.6-.253.813-.393 2.713-.478 3.92-.057 1.707-.815 10.695-.97 12.858-.072 1.571-.4 4.644-.424 4.98-.347 4.91.253 11.593-2.872 15.697a2.63 2.63 0 01-.223.247c-.023.043-.038.09-.062.131-.357.636-1.999 1.208-2.648.912-3.315-1.515-5.58-6.877-4.732-10.582.13-.564 1.07-4.78.426-13.002-1.876.975-2.299 2.983-2.643 4.69-.898 4.44-1.535 8.941-2.107 13.44-.508 4.004-.736 8.044-1.176 12.06-.656 5.996-1.2 12.017-2.203 17.958-.307 1.826-.742 4.528-3.739 4.466-2.204-.046-5.369-2.996-5.41-5.139-.127-6.627-.182-13.256-.193-19.885-.01-5.032.213-10.069.061-15.096-.02-.668-.226-1.33-.497-1.99-.493-1.207-2.172-1.333-2.853-.222-.405.66-.756 1.342-.902 1.845-1.032 3.557-1.943 7.15-2.952 10.714-.97 3.425-4.396 19.664-5.877 24.225-1.626 5.007-3.832 9.811-5.7 14.726-.935 2.46-1.885 4.668-4.434 5.521-1.453.736-3.188.565-4.438-1.074-.83-1.087-1.23-2.516-1.323-3.973-.912-6.138 3.937-23.87 4.703-27.064.952-3.972 2.284-7.853 3.238-11.823 1.063-4.424 1.975-8.884 2.904-13.34.28-2.377-1.487-3.493-3.136-2.958-.498.161-1.324.674-1.82 1.658-3.178 6.3-6.343 12.841-10.847 18.131-5.166 6.064-15.638 24.142-16.612 26.61-1.039 2.633-3.179 3.19-5.097 2.605-1.932-.587-4.116-1.695-3.945-4.749.29-5.19 1.323-9.946 3.02-15.026 2.824-8.455 7.56-15.759 11.986-23.215.144-.395.278-.795.438-1.183 2.707-6.608 5.767-12.642 7.45-19.648 1.737-7.24 4.302-15.659 3.633-23.128a11.175 11.175 0 00-.092-.71 38.59 38.59 0 00-.537-1.854c-.828-1.813-2.379-2.58-4.444-2.524-5.152 1.972-10.157 4.347-15.342 6.222-5.752 2.08-11.456 5.5-17.66 4.587a8.808 8.808 0 01-1.3-.298c-3.693-.529-8.126-1.887-8.597-5.362-.014-.01-.364-2.039 1.406-3.94.26-.38.537-.702.818-.89 3.603-2.41 7.65-4.15 11.491-6.21 2.372-1.274 4.705-2.618 7.062-3.917.666-.415 1.333-.827 2.002-1.232 4.167-2.52 8.68-4.472 12.797-7.047 2.124-1.328 4.07-2.77 6.051-4.175l.138-.122c2.347-2.513 5.288-3.697 8.26-4.879 1.004-.488 2.056-1.014 3.053-1.597.307-.303.604-.629.92-.907H17.958A16.781 16.781 0 006.11 4.9L4.89 6.116A16.66 16.66 0 000 17.907L.312 175.6c1.367 3.045 3.995-3.656 4.843-8.694.115-.68.255-1.358.392-2.036.358-4.085.625-8.182.922-12.31.653-9.07 2.28-18.02 2.4-27.133.008-.674 1.34-11.908 2.264-16.977.383-2.1 2.038-3.372 3.653-3.053 1.078-.227 2.257.558 3.07 1.501 4.25 4.932 2.192 13.27 2.426 19.52l.515.113c.66-1.33 1.45-2.642 1.644-4.038 1.03-7.375 1.823-14.783 2.684-22.18.493-4.236.823-8.495 1.481-12.704.388-2.478 1.012-4.994 2.024-7.274.558-1.26 1.841-1.874 2.953-2.047 2.36-.69 5.125.674 6.15 3.583.373 1.057.944 12.674.542 16.913.053.178.085.353.066.523-.357 3.254-.762 6.503-1.16 9.752-.017.226-.04.452-.053.677-.036.732-.269 4.908.534 7.541a2.49 2.49 0 001.561 1.622c.18.062.344.09.488.021.487-.363.91-.972 1.274-1.655.745-1.88 1.077-4.066 1.508-5.797.753-3.025 1.474-6.046 2.47-9.002 1.634-4.85 2.932-9.868 4.775-14.65 1.663-5.652 3.2-11.467 5.31-16.95.55-1.426 2.082-6.085 5.974-7.504 1.331-.485 4.016 1.598 4.416 3.104 2.11 7.96-1.397 21.788-2.598 26.386-1.267 4.847-3.163 9.528-4.458 14.37-1 3.736-1.79 7.528-2.57 11.328-.292 1.416-.482 2.874-.887 4.265-.746 2.56 1.097 2.331 1.631 2.201.792-.196 1.731-.558 2.205-1.165 3.386-4.332 7.078-8.359 9.78-13.295 6.466-11.82 13.49-23.333 20.21-35.016 2.451-4.263 7.081-1.129 7.98 4.152.647 3.802-2.426 10.352-5.5 18.52-.876 2.332-2.91 7.601-4.932 11.645-12.032 23.812-14.326 37.03-15.566 43.257-.178.901-.383 1.88-.575 2.901a8.233 8.233 0 01-.319 2.287c.098.38.138.8.073 1.285-.959 7.305 8.04 5.028 12.275 3.794 2.5-.729 5.14-1.44 7.763-2.24"
                  />
                  <path
                    d="M199.834 44.763s-1.34 5.562-1.44 6.383c-.1.82.56.92.72.82.16-.1.76-.82.76-.82z"
                  />
                </g>
              </g>
            </svg>
          </a>
          <div
            class="relative"
          >
            <button
              aria-expanded="false"
              class="flex items-center justify-center rounded-md h-10 w-10 ml-4 hover:bg-gray-100 hover:bg-opacity-10 focus:bg-gray-100 focus:bg-opacity-10 focus:outline-none appearance-none"
              id="headlessui-popover-button-1"
              type="button"
            >
              <svg
                aria-hidden="true"
                class="text-white h-6 w-6"
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
                class="sr-only"
              >
                Menu
              </span>
            </button>
          </div>
        </div>
      </header>
    `);
  });
});
