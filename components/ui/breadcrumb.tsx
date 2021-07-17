import * as React from "react";

import { ChevronRightIcon } from "@heroicons/react/solid";
import Link from "next/link";

export interface BreadcrumbItem {
  name: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="hidden sm:flex">
      <ol className="flex items-center space-x-4">
        {items.map(({ name, href }, index) => (
          <li key={name}>
            <div className="flex items-center space-x-4">
              {index !== 0 && (
                <ChevronRightIcon
                  aria-hidden="true"
                  className="flex-shrink-0 h-5 w-5 text-gray-400"
                />
              )}
              {href ? (
                <Link href={href}>
                  <a className="text-sm font-medium text-gray-500 hover:text-gray-700">
                    {name}
                  </a>
                </Link>
              ) : (
                <span className="text-sm font-medium text-gray-500 hover:text-gray-700">
                  {name}
                </span>
              )}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
