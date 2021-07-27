import React from "react";

import { URL } from "~/lib/isoman-contents";

import { ExternalLinkIcon } from "@heroicons/react/solid";
import clsx from "clsx";
import Link from "next/link";

interface StackedListProps {
  links: URL[];
}

const LinkClasses = (i: number) => {
  return [i > 0 ? "border-t" : undefined, "mx-2 py-4 flex justify-between"];
};

export default function StackedLink(list: StackedListProps) {
  const { links } = list;
  return (
    <div>
      {links.map((link, i) => (
        <Link key={i} href={link.url}>
          <a data-testid={`next-link-${link.title}`} target="_blank">
            <div className={clsx(LinkClasses(i))}>
              <div className="text-base text-gray-900 hover:text-gray-700">
                {link.title}
              </div>

              <span className="text-brand-500 ml-4">
                <ExternalLinkIcon
                  className="h-6 w-6"
                  data-testid={`external-link-icon-${link.title}`}
                />
              </span>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
}
