import { useCallback, useEffect, useState } from "react";

import { ArrowCircleUpIcon } from "@heroicons/react/solid";
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
    <button onClick={scrollTop}>
      <ArrowCircleUpIcon
        className={clsx(
          "fixed text-blue-600 cursor-pointer bottom-20 right-10 h-16 opacity-60 hover:opacity-100 transition duration-300 ease-in-out z-50",
          showScroll ? "flex" : "hidden",
        )}
      />
    </button>
  );
};
