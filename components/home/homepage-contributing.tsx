import { createElement } from "react";

import { ChevronRightIcon } from "@heroicons/react/solid";
import { OutlineAnchorButton } from "../ui/button";
import { HomePageSection } from "./homepage-section";
import { contributingLinks } from "~/lib/home/contributing-links";

export function HomePageContributing() {
  return (
    <HomePageSection className="px-4 py-6 space-y-4">
      <h2 className="text-lg sm:text-xl font-semibold">Cara Berkontribusi</h2>
      <ul className="rounded-sm">
        {contributingLinks.map((item) => (
          <li
            key={item.title}
            className="flex flex-row relative py-4 border-b border-gray-100 last-of-type:border-b-0"
          >
            <div
              aria-hidden
              className="flex flex-none items-center justify-center w-12 h-12 bg-blue-50 rounded-full"
            >
              {createElement(item.icon, {
                className: "w-6 h-6 text-brand-500",
              })}
            </div>
            <div className="ml-4 space-y-1">
              <h3 className="text-base leading-5 font-semibold">
                <a
                  className="helper-link-cover"
                  href={item.link}
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                >
                  {item.title}
                </a>
              </h3>
              <p className="text-sm leading-4 text-gray-500">
                {item.description}
              </p>
            </div>
            <div
              aria-hidden
              className="flex flex-none items-center justify-center ml-2"
            >
              <ChevronRightIcon className="w-6 h-6 text-brand-500" />
            </div>
          </li>
        ))}
      </ul>
      <div className="p-4 bg-blue-50 text-center rounded-md space-y-3">
        <p className="text-base leading-6 font-semibold">Mau Upload Info?</p>
        <OutlineAnchorButton
          block
          href="https://docs.google.com/forms/d/e/1FAIpQLSc_m0WyokBk8xv9jBwYFN1zAt4_u-kE2TI9ZBrAokB4E08AGw/viewform"
          rel="nofollow noopener noreferrer"
          rounded
          size="lg"
          target="_blank"
        >
          Tambahkan info di sini
        </OutlineAnchorButton>
      </div>
    </HomePageSection>
  );
}
