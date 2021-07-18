import * as React from "react";

import { GlobalHeader } from "./global-header";

export const LayoutRoot: React.FC = ({ children }) => (
  <main className="flex flex-col w-full min-h-screen">
    <GlobalHeader />
    {children}
  </main>
);
