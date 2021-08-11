import * as React from "react";
import { FeedbackSection } from "~/components/ui/feedback-section";

export const Page: React.FC = ({ children }) => {
  return (
    <section className="flex flex-col flex-1 py-16">
      {children}
      <FeedbackSection />
    </section>
  );
};
