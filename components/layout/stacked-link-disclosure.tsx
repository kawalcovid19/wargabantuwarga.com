import { Disclosure } from "@headlessui/react";

import { ChevronDownIcon } from "@heroicons/react/solid";
import clsx from "clsx";

interface DisclosureProps {
  children: React.ReactNode;
  title?: string;
  defaultOpen?: boolean;
}

const ChevronIconClass = (open: boolean) => {
  return [
    `h-8 w-8 ${
      open
        ? "transform rotate-180 duration-300 ease"
        : "transform rotate-0 duration-300 ease"
    }`,
  ];
};

export function StackedLinkDisclosure({
  children,
  title,
  defaultOpen = false,
}: DisclosureProps) {
  return (
    <Disclosure defaultOpen={defaultOpen}>
      {({ open }) => (
        <>
          <Disclosure.Button className="py-2 flex justify-between w-full">
            <p className="text-gray-800 text-md font-semibold">{title}</p>
            <span className="text-gray-600">
              <ChevronDownIcon
                className={clsx(ChevronIconClass(open))}
                data-testid="chevron-down-icon"
              />
            </span>
          </Disclosure.Button>
          <Disclosure.Panel>{children}</Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
