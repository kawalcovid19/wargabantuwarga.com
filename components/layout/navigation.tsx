import { createElement } from "react";

import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { bottomNavigation, NavigationItem } from "~/lib/layout/navigation-data";

const navigationClasses = (isActive?: boolean) => {
  return [
    "inline-flex flex-col items-center justify-center text-center h-12 px-2 rounded-md",
    isActive ? "text-blue-600 font-semibold" : "text-gray-600",
    "hover:text-blue-600",
  ];
};

export function Navigation() {
  const router = useRouter();

  const renderItem = (item: Pick<NavigationItem, "icon" | "name">) => {
    return (
      <>
        {createElement(item.icon, {
          className: "w-8 h-8",
          "aria-hidden": true,
        })}
        <span className="text-xs truncate">{item.name}</span>
      </>
    );
  };

  return (
    <nav className="flex items-center justify-center fixed bottom-0 w-full h-16 px-2 bg-white border-t border-gray-300 z-40">
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
                    className={clsx(...navigationClasses(isActive))}
                    href={item.href}
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                  >
                    {renderItem(item)}
                  </a>
                ) : (
                  <Link href={item.href}>
                    <a className={clsx(...navigationClasses(isActive))}>
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
