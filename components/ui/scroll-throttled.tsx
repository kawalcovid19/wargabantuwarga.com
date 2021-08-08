import { useState, useEffect } from "react";
import { throttle } from "lodash";

function useDocumentScrollThrottled(callback: {
  (callbackData: { previousScrollTop: Number; currentScrollTop: Number }): void;
  (arg0: { previousScrollTop: number; currentScrollTop: number }): void;
}) {
  const [, setScrollPosition] = useState(0);
  let previousScrollTop = 0;

  function handleDocumentScroll() {
    const { scrollTop: currentScrollTop } = document.documentElement;

    setScrollPosition((previousPosition) => {
      previousScrollTop = previousPosition;
      return currentScrollTop;
    });

    callback({ previousScrollTop, currentScrollTop });
  }

  const handleDocumentScrollThrottled = throttle(handleDocumentScroll, 250);

  useEffect(() => {
    window.addEventListener("scroll", handleDocumentScrollThrottled);

    return () =>
      window.removeEventListener("scroll", handleDocumentScrollThrottled);
  }, []);
}

export default useDocumentScrollThrottled;
