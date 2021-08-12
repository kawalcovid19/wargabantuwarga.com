import * as React from "react";

export const Page: React.FC = ({ children }) => {
  return <section className="flex flex-col flex-1 py-16">{children}</section>;
};
