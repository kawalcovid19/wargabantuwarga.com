import { render, screen } from "@testing-library/react";
import { FeedbackSection } from "~/components/ui/feedback-section";

describe("FooterDiscussionSection", () => {
  it("renders correctly", () => {
    render(<FeedbackSection />);
    const textSection = screen.getByText("Sampaikan masukan Anda");
    const anchorTextSection = textSection.closest("a");

    expect(textSection).toBeInTheDocument();
    expect(anchorTextSection).toHaveAttribute(
      "href",
      "https://kcov.id/wbw-discuss",
    );
  });
});
