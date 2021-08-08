import * as React from "react";
import { FooterDiscussionSection } from "~/components/ui/footer-discussion-section";

export const Page: React.FC = ({ children }) => {
  return (
    <section className="flex flex-col flex-1 pb-16 pt-16">
      {children}
      <FooterDiscussionSection />
    </section>
  );
};
