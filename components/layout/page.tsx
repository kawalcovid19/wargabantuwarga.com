import * as React from "react";

export const Page: React.FC = ({ children }) => {
  return <section className="flex-1 pt-20">{children}</section>;
};
