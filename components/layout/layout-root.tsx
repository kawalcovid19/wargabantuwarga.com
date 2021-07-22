import * as React from "react";

import { ScrollArrow } from "~/components/ui/scroll-arrow";

import { GlobalHeader } from "./global-header";
import { Navigation } from "./navigation";

export const LayoutRoot: React.FC = ({ children }) => (
  <main className="flex flex-col w-full min-h-screen bg-gray-100">
    <GlobalHeader />
    {children}
    <ScrollArrow />
    <Navigation />
  </main>
);
