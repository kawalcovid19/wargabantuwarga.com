import * as React from "react";

import { bottomNavigation, NavigationItem } from "~/lib/layout/navigation-data";

import {
  navigationMenuClasses,
  NavigationMenuPopover,
} from "./navigation-menu";

import { Popover } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/outline";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";

export function Navigation() {
  const router = useRouter();

  const renderItem = (item: Pick<NavigationItem, "icon" | "name">) => {
    return (
      <>
        {React.createElement(item.icon, {
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
                    className={clsx(...navigationMenuClasses(isActive))}
                    href={item.href}
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                  >
                    {renderItem(item)}
                  </a>
                ) : (
                  <Link href={item.href}>
                    <a className={clsx(...navigationMenuClasses(isActive))}>
                      {renderItem(item)}
                    </a>
                  </Link>
                )}
              </li>
            );
          })}
          <li className="relative sm:hidden">
            <Popover>
              <Popover.Button
                className={clsx(...navigationMenuClasses())}
                type="button"
              >
                <MenuIcon aria-hidden className="w-8 h-8" />
                <span className="text-xs truncate">Menu</span>
              </Popover.Button>
              <NavigationMenuPopover />
            </Popover>
          </li>
        </ul>
      </div>
    </nav>
  );
}
