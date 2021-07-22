import { useCallback, useEffect, useState } from "react";

import { ArrowUpIcon } from "@heroicons/react/outline";
import clsx from "clsx";

type ScrollArrowProps = {
  heightThreshold?: number;
};

export const ScrollArrow = ({ heightThreshold = 400 }: ScrollArrowProps) => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = useCallback(() => {
    if (!showScroll && window.pageYOffset > heightThreshold) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= heightThreshold) {
      setShowScroll(false);
    }
  }, [showScroll]);

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [checkScrollTop]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={clsx(
        showScroll ? "inline-flex" : "hidden",
        "fixed bottom-20 right-10 h-12 w-12 items-center justify-center p-2 border border-transparent rounded-full shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ease-in-out z-50",
      )}
      onClick={scrollTop}
    >
      <ArrowUpIcon className="h-6 w-6" />
    </button>
  );
};
