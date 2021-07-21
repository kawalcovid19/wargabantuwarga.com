import * as React from "react";

export const PageContent: React.FC = ({ children }) => {
  return (
    <div className="flex-1 px-4 pt-4 pb-12">
      <div className="max-w-xl mx-auto">{children}</div>
    </div>
  );
};
