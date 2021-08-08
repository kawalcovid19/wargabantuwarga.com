import * as React from "react";
import { GlobalHeader } from "./global-header";
import { Navigation } from "./navigation";

import { ScrollArrow } from "~/components/ui/scroll-arrow";

export const LayoutRoot: React.FC = ({ children }) => (
  <main className="flex flex-col w-full min-h-screen bg-gray-100">
    <GlobalHeader />
    {children}
    <ScrollArrow />
    <Navigation />
  </main>
);
