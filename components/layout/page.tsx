import * as React from "react";

export const Page: React.FC = ({ children }) => {
  return <main className="w-full min-h-screen">{children}</main>;
};
