import { useCallback, useEffect, useState } from "react";

import { ArrowUpIcon } from "@heroicons/react/outline";
import clsx from "clsx";
import { useRouter } from "next/router";

type ScrollArrowProps = {
  heightThreshold?: number;
  /**
   * pages/routes where we don't want the button to appear. i.e. ['/faq', '/province']
   */
  pagesExcluded?: string[];
};

export const ScrollArrow = ({
  heightThreshold = 400,
  pagesExcluded,
}: ScrollArrowProps) => {
  const [showScroll, setShowScroll] = useState(false);
  const { route } = useRouter();

  const checkScrollTop = useCallback(() => {
    if (!showScroll && window.pageYOffset > heightThreshold) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= heightThreshold) {
      setShowScroll(false);
    }
  }, [showScroll, heightThreshold]);

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [checkScrollTop]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (pagesExcluded?.includes(route)) return null;

  return (
    <button
      className={clsx(
        showScroll ? "inline-flex" : "hidden",
        "fixed bottom-20 right-5 h-12 w-12 items-center justify-center p-2 border border-transparent rounded-full shadow-lg text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ease-in-out z-30",
      )}
      onClick={scrollTop}
    >
      <ArrowUpIcon className="h-6 w-6" />
    </button>
  );
};
