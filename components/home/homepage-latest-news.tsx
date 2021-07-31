import { useMemo } from "react";

import { latestNews } from "~/lib/home/latest-news";

import { OutlineAnchorButton } from "../ui/button";

import { HomePageSection } from "./homepage-section";

import { ExternalLinkIcon } from "@heroicons/react/outline";
import htmr from "htmr";

export function HomePageLatestNews() {
  const sortedNews = useMemo(
    () =>
      latestNews
        .slice(0, 3)
        .sort(
          (a, b) => b.attributes.date.getTime() - a.attributes.date.getTime(),
        ),
    [],
  );

  return (
    <HomePageSection className="px-4 py-6 space-y-4">
      <h2 className="text-lg sm:text-xl font-semibold">Informasi Terbaru</h2>
      {sortedNews.map(({ attributes, html }) => (
        <article
          key={attributes.date.toISOString()}
          className="border border-gray-200 rounded-md p-4 space-y-4"
        >
          <div className="space-y-2">
            <div className="flex flex-row">
              <h3 className="flex-1 text-base font-semibold text-gray-700 truncate">
                {attributes.source}
              </h3>
              <span className="inline-block flex-none text-gray-400 ml-4">
                {new Intl.DateTimeFormat("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                }).format(attributes.date)}
              </span>
            </div>
            <div className="text-gray-600 text-sm">{htmr(html)}</div>
          </div>
          {attributes.link && (
            <OutlineAnchorButton
              block
              color="light-blue"
              href={attributes.link}
              icon={ExternalLinkIcon}
              iconPosition="right"
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              {attributes.link_text}
            </OutlineAnchorButton>
          )}
        </article>
      ))}
    </HomePageSection>
  );
}
