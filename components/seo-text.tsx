import * as React from "react";

interface SeoTextProps {
  textNode?: React.ReactNode;
}

export function SeoText({ textNode }: SeoTextProps) {
  return (
    <div className="text-center block text-sm font-medium text-gray-700 mx-4 mt-6 seo-text">
      {textNode}
    </div>
  );
}
