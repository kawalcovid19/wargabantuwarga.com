import React, { useCallback, useEffect, useState } from "react";

import { ArrowCircleUpIcon } from "@heroicons/react/solid";
import clsx from "clsx";

export const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = useCallback(() => {
    const heightThreshold = 400;

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
    <ArrowCircleUpIcon
      className={clsx(
        "fixed cursor-pointer bottom-20 right-10 h-16",
        showScroll ? "flex" : "hidden",
      )}
      onClick={scrollTop}
    />
  );
};
