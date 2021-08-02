import React, { useRef, useState } from "react";

import { ChevronDownIcon } from "@heroicons/react/solid";

interface AccordionProps {
  children: React.ReactNode;
  title?: string;
}

export function Accordion({ children, title }: AccordionProps) {
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState("0");
  const [rotate, setRotate] = useState("transform duration-700 ease pt-2");

  const contentSpace = useRef<HTMLDivElement>(null);

  function toggleAccordion() {
    setActive(!active);
    setHeight(active ? "0px" : `${contentSpace.current?.scrollHeight}px`);
    setRotate(
      active
        ? "transform duration-700 ease"
        : "transform duration-700 ease rotate-180",
    );
  }
  return (
    <div className="space-y-4">
      <div>
        <button
          className="flex justify-between w-full"
          onClick={toggleAccordion}
        >
          <p className="text-gray-800 text-md font-semibold">{title}</p>
          <span className="text-gray-600">
            <ChevronDownIcon className={`h-8 w-8 ${rotate}`} />
          </span>
        </button>
      </div>
      <div
        className="overflow-auto overflow-y-hidden transition-max-height duration-700 ease-in-out"
        ref={contentSpace}
        style={{ maxHeight: `${height}` }}
      >
        {children}
      </div>
    </div>
  );
}
