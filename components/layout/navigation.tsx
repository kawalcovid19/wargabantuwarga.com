import * as React from "react";

import {
  bottomNavigation,
  BottomNavigationItem,
} from "~/lib/layout/navigation-data";

import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";

export function Navigation() {
  const router = useRouter();

  const menuClasses = (isActive: boolean) => {
    return [
      "inline-flex flex-col items-center justify-center h-12 rounded-md",
      isActive ? "text-blue-600 font-semibold" : "text-gray-600",
      "hover:text-blue-600",
    ];
  };

  const renderItem = (item: BottomNavigationItem) => {
    return (
      <>
        {React.createElement(item.icon, {
          className: "w-8 h-8",
          "aria-hidden": true,
        })}
        <span className="text-xs">{item.name}</span>
      </>
    );
  };

  return (
    <nav className="flex items-center justify-center fixed bottom-0 w-full h-16 px-4 bg-white border-t border-gray-300 z-40">
      <div className="flex items-center justify-center w-full max-w-xl mx-auto">
        <ul className="flex items-center justify-evenly w-full">
          {bottomNavigation.map((item) => {
            const isActive = item.exact
              ? item.href === router.asPath
              : router.asPath.startsWith(item.href);

            return (
              <li key={item.name} className="relative">
                {item.external ? (
                  <a
                    className={clsx(...menuClasses(isActive))}
                    href={item.href}
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                  >
                    {renderItem(item)}
                  </a>
                ) : (
                  <Link href={item.href}>
                    <a className={clsx(...menuClasses(isActive))}>
                      {renderItem(item)}
                    </a>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
