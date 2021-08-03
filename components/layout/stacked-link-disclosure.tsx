import { Disclosure } from "@headlessui/react";

import { ChevronDownIcon } from "@heroicons/react/solid";

interface DisclosureProps {
  children: React.ReactNode;
  title?: string;
}

export function StackedLinkDisclosure({ children, title }: DisclosureProps) {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="py-2 flex justify-between w-full">
            <p className="text-gray-800 text-md font-semibold">{title}</p>
            <span className="text-gray-600">
              <ChevronDownIcon
                className={`h-8 w-8 ${
                  open
                    ? "transform rotate-180 duration-300 ease"
                    : "transform rotate-0 duration-300 ease"
                }`}
              />
            </span>
          </Disclosure.Button>
          <Disclosure.Panel>{children}</Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
