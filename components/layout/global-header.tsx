import { createElement, useRef, useState, useEffect } from "react";

import { Popover } from "@headlessui/react";
import Link from "next/link";
import clsx from "clsx";
import { throttle } from "@martinstark/throttle-ts";
import { Container } from "../ui/container";
import { NavigationMenuPopover, navMenuButtonIcon } from "./navigation-menu";
import { WBWLogoWhite } from "~/components/ui/wbw-logo";

const MINIMUM_SCROLL = 200; // 64 height header
const TIMEOUT_DELAY = 150;

export function GlobalHeader() {
  const popoverButtonRef = useRef<HTMLButtonElement>(null);

  const [shouldHideHeader, setShouldHideHeader] = useState(false);
  const [, setScrollPosition] = useState(0);
  let previousScrollTop = 0;

  const handleDocumentScroll = () => {
    const { scrollTop: currentScrollTop } = document.documentElement;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    setScrollPosition((previousPosition) => {
      previousScrollTop = previousPosition;
      return currentScrollTop;
    });

    setTimeout(() => {
      setShouldHideHeader(isScrolledDown && isMinimumScrolled);
    }, TIMEOUT_DELAY);
  };

  const [handleDocumentScrollThrottled] = throttle(handleDocumentScroll, 200);

  useEffect(() => {
    window.addEventListener("scroll", handleDocumentScrollThrottled);

    return () =>
      window.removeEventListener("scroll", handleDocumentScrollThrottled);
  }, []);

  const hiddenStyle = shouldHideHeader
    ? "-translate-y-full overflow-y-hidden"
    : "";

  return (
    <header
      className={clsx(
        "flex items-center justify-center fixed w-full h-16 z-40 bg-brand-500 shadow-md transition duration-200",
        hiddenStyle,
      )}
    >
      <Container className="flex items-center justify-between h-full px-4">
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
