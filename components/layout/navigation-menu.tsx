import { Container } from "../ui/container";
import { WBWLogoWhite } from "../ui/wbw-logo";

import { Popover } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";

export const navigationMenuClasses = (isActive?: boolean) => {
  return [
    "inline-flex flex-col items-center justify-center text-center h-12 px-2 rounded-md",
    isActive ? "text-blue-600 font-semibold" : "text-gray-600",
    "hover:text-blue-600",
  ];
};

export function NavigationMenuPopover() {
  return (
    <Popover.Panel className="flex flex-col fixed top-0 left-0 w-full h-full pb-16 z-40">
      <header className="flex items-center justify-center w-full h-16 px-4 bg-brand-500 text-white shadow-md">
        <Container className="flex items-center justify-between h-full">
          <WBWLogoWhite aria-hidden height={32} />
          <Popover.Button className="flex items-center justify-center rounded-md h-10 w-10 hover:bg-gray-100 hover:bg-opacity-10">
            <XIcon aria-hidden className="text-white h-6 w-6" />
          </Popover.Button>
        </Container>
      </header>
      <nav className="grid grid-cols-2 flex-1 w-full max-w-xl mx-auto p-2 bg-white text-gray-900">
        <a href="/analytics">Analytics</a>
        <a href="/engagement">Engagement</a>
        <a href="/security">Security</a>
        <a href="/integrations">Integrations</a>
      </nav>
    </Popover.Panel>
  );
}
