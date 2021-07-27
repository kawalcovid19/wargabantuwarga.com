import { createElement, useRef } from "react";

import { WBWLogoWhite } from "~/components/ui/wbw-logo";

import { Container } from "../ui/container";

import { NavigationMenuPopover, navMenuButtonIcon } from "./navigation-menu";

import { Popover } from "@headlessui/react";
import Link from "next/link";

export function GlobalHeader() {
  const popoverButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <header className="flex items-center justify-center fixed w-full h-16 px-4 z-40 bg-brand-500 shadow-md">
      <Container className="flex items-center justify-center sm:justify-between h-full">
        <Link href="/">
          <a className="align-middle">
            <h1 className="sr-only">Warga Bantu Warga</h1>
            <WBWLogoWhite aria-hidden height={32} />
          </a>
        </Link>
        <Popover>
          {({ open }) => (
            <>
              <Popover.Button
                className="hidden sm:flex items-center justify-center rounded-md h-10 w-10 ml-4 hover:bg-gray-100 hover:bg-opacity-10 focus:bg-gray-100 focus:bg-opacity-10"
                ref={popoverButtonRef}
              >
                {createElement(navMenuButtonIcon(open), {
                  "aria-hidden": true,
                  className: "text-white h-6 w-6",
                })}
                <span className="sr-only">Menu</span>
              </Popover.Button>
              <NavigationMenuPopover popoverButtonRef={popoverButtonRef} />
            </>
          )}
        </Popover>
      </Container>
    </header>
  );
}
