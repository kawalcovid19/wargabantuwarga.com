import * as React from "react";

import { ChevronRightIcon, HomeIcon } from "@heroicons/react/solid";
import Link from "next/link";

export interface BreadcrumbItem {
  name: string;
  href: string;
  current?: boolean;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="hidden sm:flex">
      <ol className="flex items-center space-x-4">
        <li>
          <div>
            <Link href="/">
              <a className="text-gray-400 hover:text-gray-500">
                <HomeIcon
                  aria-hidden="true"
                  className="flex-shrink-0 h-5 w-5"
                />
                <span className="sr-only">Home</span>
              </a>
            </Link>
          </div>
        </li>
        {items.map(({ name, href, current }) => (
          <li key={name}>
            <div className="flex items-center">
              <ChevronRightIcon
                aria-hidden="true"
                className="flex-shrink-0 h-5 w-5 text-gray-400"
              />
              <Link href={href}>
                <a
                  aria-current={current ? "page" : undefined}
                  className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                >
                  {name}
                </a>
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
