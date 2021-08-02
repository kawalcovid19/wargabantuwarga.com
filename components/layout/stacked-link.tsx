import React from "react";

import { ExternalLinkIcon } from "@heroicons/react/solid";
import clsx from "clsx";
import Link from "next/link";
import { isInternalLink } from "~/lib/string-utils";
import { URL } from "~/lib/content/isolasi-mandiri";

interface StackedListProps {
  links: URL[];
}

const LinkClasses = (i: number) => {
  return [
    i > 0 ? "border-t" : undefined,
    "mx-2 py-4 flex justify-between relative",
  ];
};

export default function StackedLink(list: StackedListProps) {
  const { links } = list;

  return (
    <ul>
      {links.map((link, i) => (
        <li key={i} className={clsx(LinkClasses(i))}>
          <p className="text-base text-gray-900 hover:text-gray-700">
            {isInternalLink(link.url) ? (
              <Link href={link.url}>
                <a
                  className="helper-link-cover"
                  data-testid={`next-link-${link.title}`}
                >
                  {link.title}
                </a>
              </Link>
            ) : (
              <a
                className="helper-link-cover"
                data-testid={`next-link-${link.title}`}
                href={link.url}
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                {link.title}
              </a>
            )}
          </p>

          <div aria-hidden className="text-brand-500 ml-4">
            <ExternalLinkIcon
              className="h-6 w-6"
              data-testid={`external-link-icon-${link.title}`}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
