import { useEffect, useRef, useState } from "react";

import useIntersectionObserver from "~/lib/hooks/use-intersection";
import siteConfig from "~/lib/site-config";
import { attributes, html } from "~/lib/welcome-message";

import { BasicDialog } from "./dialog";

const LOCAL_STORAGE_KEY = "wbw-wm";
const canUseDOM = typeof window !== "undefined";
const getLocalStorage = (key: string) => canUseDOM && localStorage.getItem(key);
const setLocalStorage = (key: string, value: string) =>
  canUseDOM && localStorage.setItem(key, value);

export function HomePageWelcome() {
  const existingStorage = getLocalStorage(LOCAL_STORAGE_KEY);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isTriggered, setIsTriggered] = useState<boolean>(false);
  const [isHaveStorage, setIsHaveStorage] = useState<boolean>(
    Boolean(existingStorage && existingStorage === "1"),
  );

  const ref = useRef<HTMLDivElement | null>(null);

  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  const setCloseStateToStorage = () => {
    setLocalStorage(LOCAL_STORAGE_KEY, "1");
    setIsHaveStorage(true);
  };

  const handleToogle = () => {
    setIsOpen(!isOpen);
    setCloseStateToStorage();
  };

  const handleClickShare = () => {
    const isSupportNativeShare: boolean =
      canUseDOM && typeof navigator.share !== "undefined";

    if (isSupportNativeShare) {
      const shareObj = {
        title: "WargaBantuWarga.com",
        text: "Inisiatif warga untuk berbagi informasi dan membantu warga yang terdampak Covid-19",
        url: "https://www.wargabantuwarga.com/",
      };

      navigator
        .share(shareObj)
        // call the close fn manually
        .then(() => handleToogle())
        .catch((error) => {
          console.error("Error sharing", error, shareObj);
        });
    } else {
      // just share to twitter when it' not support native share
      const safeUrl = encodeURIComponent(siteConfig.site_url);
      const safeText = encodeURIComponent(siteConfig.site_description);

      window.open(
        `https://twitter.com/intent/tweet?text=${safeText}+%0A+${safeUrl}`,
      );

      handleToogle();
    }
  };

  useEffect(() => {
    // Only open the dialog when intersecting
    // and have not been triggered before
    // and doesn't have a local storage "wbw-wm"
    if (isVisible && !isTriggered && !isHaveStorage) {
      setIsOpen(true);
      setIsTriggered(true);
    }
  }, [isVisible, isTriggered, isHaveStorage]);

  return (
    <div id="welcome-message-trigger" ref={ref}>
      <BasicDialog
        description={html}
        isOpen={isOpen}
        onCtaClick={handleClickShare}
        onToggle={handleToogle}
        title={attributes.title}
      />
    </div>
  );
}
