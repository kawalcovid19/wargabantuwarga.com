import React from "react";

import { ExternalLinkIcon } from "@heroicons/react/solid";
import Link from "next/link";

interface StackedListProps {
  links: [
    {
      title: string;
      url: string;
    },
  ];
}

export default function StackedLink(list: StackedListProps) {
  const { links } = list;
  return (
    <div>
      {links.map((link, i) => (
        <Link key={i} href={link.url}>
          <a target="_blank">
            <div
              className={`${
                i > 0 ? "border-t" : ""
              }  mx-2 py-4 flex justify-between`}
            >
              <div className="text-base text-gray-900">{link.title}</div>

              <span className="text-brand-500 ml-4">
                <ExternalLinkIcon className="h-6 w-6" />
              </span>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
}
