import * as React from "react";
import { GlobalHeader } from "./global-header";
import { Navigation } from "./navigation";

import { ScrollArrow } from "~/components/ui/scroll-arrow";
import { FooterDiscussionSection } from "~/components/ui/footer-discussion-section";

export const LayoutRoot: React.FC = ({ children }) => (
  <main className="flex flex-col w-full min-h-screen bg-gray-100">
    <GlobalHeader />
    {children}
    <FooterDiscussionSection />
    <ScrollArrow />
    <Navigation />
  </main>
);
