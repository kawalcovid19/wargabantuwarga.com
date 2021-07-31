import React from "react";

import { ExternalLinkIcon } from "@heroicons/react/solid";
import clsx from "clsx";
import Link from "next/link";

interface linkProps {
  title: string;
  url: string;
  uniqId: number;
}

const LinkClasses = (i: number) => {
  return [i > 0 ? "border-t" : undefined, "mx-2 py-4 flex justify-between"];
};

export default function StackedLink(link: linkProps) {
  return (
    <div>
      <Link href={link.url}>
        <a
          data-testid={`next-link-${link.title}`}
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          <div className={clsx(LinkClasses(link.uniqId))}>
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
    </div>
  );
}
