import { useMemo } from "react";

import { LatestNewsItem } from "~/lib/content/informasi-terbaru";
import { htmrTransform } from "~/lib/htmr-transformers";

import { OutlineAnchorButton } from "../ui/button";

import { HomePageSection } from "./homepage-section";

import { ExternalLinkIcon } from "@heroicons/react/outline";
import htmr from "htmr";

interface HomePageLatestNewsProps {
  latestNews: LatestNewsItem[];
}

export function HomePageLatestNews(props: HomePageLatestNewsProps) {
  const sortedNews = useMemo(
    () =>
      props.latestNews
        .slice(0, 3)
        .sort(
          (a, b) =>
            new Date(b.attributes.date).getTime() -
            new Date(a.attributes.date).getTime(),
        ),
    [],
  );

  return (
    <HomePageSection className="px-4 py-6 space-y-4">
      <h2 className="text-lg sm:text-xl font-semibold">Informasi Terbaru</h2>
      {sortedNews.map(({ attributes, html }) => (
        <article
          key={attributes.title}
          className="border border-gray-200 rounded-md p-4 space-y-4"
        >
          <div className="space-y-2">
            <div className="flex flex-row text-base">
              <h3 className="flex-1 font-semibold text-gray-700 truncate">
                {attributes.title}
              </h3>
              <span className="inline-block flex-none text-gray-400 ml-4">
                {new Intl.DateTimeFormat("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                }).format(new Date(attributes.date))}
              </span>
            </div>
            <div className="text-gray-600 text-sm">
              {htmr(html, { transform: htmrTransform })}
            </div>
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
