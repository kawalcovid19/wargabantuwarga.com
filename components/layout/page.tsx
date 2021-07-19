import * as React from "react";

export const Page: React.FC = ({ children }) => {
  return (
    <section className="flex flex-col flex-1 pt-20 pb-16">{children}</section>
  );
};
