import { useEffect, useRef, useState } from "react";

import { attributes, html } from "~/_content/welcome-message.md";
import useIntersectionObserver from "~/lib/hooks/use-intersection";

import { BasicDialog } from "./dialog";

export function HomePageWelcome() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTriggered, setIsTriggered] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  const handleToogle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isVisible && !isTriggered) {
      setIsOpen(true);
      setIsTriggered(true);
    }
  }, [isVisible, isTriggered]);

  return (
    <div ref={ref}>
      <BasicDialog
        description={<p>{html}</p>}
        isOpen={isOpen}
        onToggle={handleToogle}
        title={attributes.title}
      />
    </div>
  );
}
