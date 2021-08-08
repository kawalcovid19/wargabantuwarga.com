import React from "react";

import Link from "next/link";
import { homepageMenus } from "~/lib/home/homepage-menus";

export function HomePageMenu() {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:gap-6 sm:grid-cols-4">
      {homepageMenus.map((item) => (
        <li
          key={item.name}
          className="inline-flex flex-col items-center justify-center text-center relative shadow-lg rounded-lg py-3 px-2"
        >
          <div
            aria-hidden
            className="flex items-center justify-center h-10 w-10 bg-blue-100 rounded-full"
          >
            {React.createElement(item.icon, {
              className: "h-6 w-6 text-brand-500",
            })}
          </div>
          <Link href={item.href}>
            <a className="text-gray-900 font-semibold text-xs mt-3 helper-link-cover">
              {item.name}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
