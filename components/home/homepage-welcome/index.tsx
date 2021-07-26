import { useEffect, useRef, useState } from "react";

import welcomeMessage from "~/constants/welcome-message";
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
        description={<p>{welcomeMessage.message_text}</p>}
        isOpen={isOpen}
        onToggle={handleToogle}
        title={welcomeMessage.title}
      />
    </div>
  );
}
