import { createElement } from "react";

import { ContactIcon } from "~/components/ui/icons";

import { ChevronRightIcon } from "@heroicons/react/solid";
import Link from "next/link";

export function HomePageEmergencyContactCTA() {
  return (
    <div className="rounded-sm">
      <div className="flex flex-row relative py-5 px-4 border-gray-100 border-2 rounded-lg justify-between">
        <div className="flex flex-row">
          <div
            aria-hidden
            className="flex flex-none items-center justify-center w-12 h-12 bg-blue-50 rounded-full"
          >
            {createElement(ContactIcon, {
              className: "w-6 h-6 text-brand-500",
            })}
          </div>
          <div className="ml-4 space-y-1">
            <h3 className="text-base leading-5 font-semibold">
              <Link href="/kontak-darurat">
                <a className="helper-link-cover">Kontak Darurat</a>
              </Link>
            </h3>
            <p className="text-sm leading-4 text-gray-500">
              Situs dan kontak penting terkait COVID-19
            </p>
          </div>
        </div>

        <div
          aria-hidden
          className="flex flex-none items-center justify-center ml-2"
        >
          <ChevronRightIcon className="w-6 h-6 text-brand-500" />
        </div>
      </div>
    </div>
  );
}
