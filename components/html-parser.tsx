import React from "react";

interface HtmlParserProps {
  children: string;
}

export function HtmlParser(props: HtmlParserProps) {
  const { children } = props;
  return (
    <span
      dangerouslySetInnerHTML={{
        __html: children.replace(/(?:\r\n|\r|\n)/g, "<br>"),
      }}
    ></span>
  );
}
