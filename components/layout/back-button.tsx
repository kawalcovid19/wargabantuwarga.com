import * as React from "react";

import { ChevronLeftIcon } from "@heroicons/react/solid";
import Link, { LinkProps } from "next/link";

type BackButtonProps = LinkProps;

export function BackButton(props: BackButtonProps) {
  return (
    <nav aria-label="Back" className="sm:hidden">
      <Link {...props}>
        <a className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700">
          <ChevronLeftIcon
            aria-hidden="true"
            className="flex-shrink-0 -ml-1 mr-1 h-5 w-5 text-gray-400"
          />
          Kembali
        </a>
      </Link>
    </nav>
  );
}
