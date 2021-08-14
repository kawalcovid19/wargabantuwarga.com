/* eslint-disable jsx-a11y/click-events-have-key-events */
import { RefObject, useEffect } from "react";

import { Popover } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { navMenu } from "~/lib/layout/navigation-data";

const navMenuClasses = (isActive?: boolean) => {
  return [
    "block py-2 px-3 font-semibold rounded-md hover:bg-gray-100",
    isActive ? "bg-gray-100" : undefined,
  ];
};

export const navMenuButtonIcon = (isOpen?: boolean) => {
  if (isOpen) {
    return XIcon;
  }

  return MenuIcon;
};

interface NavigationMenuPopoverProps {
  open?: boolean;
  popoverButtonRef?: RefObject<HTMLButtonElement>;
}

export function NavigationMenuPopover({
  open,
  popoverButtonRef,
}: NavigationMenuPopoverProps) {
  const router = useRouter();

  // Fake a click event on the popover button when the route changes
  // since we can't programatically control the `Popover` state.
  useEffect(() => {
    const handleRouteChange = () => {
      if (open && popoverButtonRef?.current) {
        popoverButtonRef.current.click();
      }
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events, open, popoverButtonRef]);

  return (
    <Popover.Panel
      className="fixed top-16 bottom-16 left-1/2 transform -translate-x-1/2 w-full max-w-xl z-10"
      unmount
    >
      <nav className="flex flex-col w-full h-full flex-1 p-2 bg-white text-gray-900 overflow-auto">
        <ul className="space-y-2">
          {navMenu.map((item) => {
            const isActive = item.exact
              ? item.href === router.asPath
              : router.asPath.startsWith(item.href);

            return (
              <li key={item.name}>
                {item.external ? (
                  <a
                    className={clsx(...navMenuClasses(isActive))}
                    href={item.href}
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link href={item.href}>
                    <a className={clsx(...navMenuClasses(isActive))}>
                      {item.name}
                    </a>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </Popover.Panel>
  );
}
