import { createElement, useRef, useState } from "react";

import { Popover } from "@headlessui/react";
import Link from "next/link";
import { Container } from "../ui/container";
import useDocumentScrollThrottled from "../ui/scroll-throttled";
import { NavigationMenuPopover, navMenuButtonIcon } from "./navigation-menu";
import { WBWLogoWhite } from "~/components/ui/wbw-logo";

export function GlobalHeader() {
  const popoverButtonRef = useRef<HTMLButtonElement>(null);

  const [shouldHideHeader, setShouldHideHeader] = useState(false);
  const [shouldShowShadow, setShouldShowShadow] = useState(false);

  const MINIMUM_SCROLL = 80;
  const TIMEOUT_DELAY = 400;

  useDocumentScrollThrottled(
    (callbackData: { previousScrollTop: Number; currentScrollTop: Number }) => {
      const { previousScrollTop, currentScrollTop } = callbackData;
      const isScrolledDown = previousScrollTop < currentScrollTop;
      const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

      setShouldShowShadow(currentScrollTop > 2);

      setTimeout(() => {
        setShouldHideHeader(isScrolledDown && isMinimumScrolled);
      }, TIMEOUT_DELAY);
    },
  );

  const shadowStyle = shouldShowShadow ? "translate-y-0" : "";
  const hiddenStyle = shouldHideHeader ? "-translate-y-full" : "";

  return (
    <header
      className={`flex items-center justify-center fixed w-full h-16 px-4 z-40 bg-brand-500 shadow-md transform duration-200 ${shadowStyle} ${hiddenStyle}`}
    >
      <Container className="flex items-center justify-between h-full">
        <Link href="/">
          <a className="align-middle">
            <h1 className="sr-only">Warga Bantu Warga</h1>
            <WBWLogoWhite aria-hidden height={32} />
          </a>
        </Link>
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className="flex items-center justify-center rounded-md h-10 w-10 ml-4 hover:bg-gray-100 hover:bg-opacity-10 focus:bg-gray-100 focus:bg-opacity-10 focus:outline-none appearance-none"
                ref={popoverButtonRef}
              >
                {createElement(navMenuButtonIcon(open), {
                  "aria-hidden": true,
                  className: "text-white h-6 w-6",
                })}
                <span className="sr-only">Menu</span>
              </Popover.Button>
              <NavigationMenuPopover
                open={open}
                popoverButtonRef={popoverButtonRef}
              />
            </>
          )}
        </Popover>
      </Container>
    </header>
  );
}
