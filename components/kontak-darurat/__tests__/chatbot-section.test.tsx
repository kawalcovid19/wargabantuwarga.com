import { render, screen } from "@testing-library/react";
import ChatbotSection from "../chatbot-section";

describe("ChatbotSection", () => {
  it("renders section correctly", () => {
    render(<ChatbotSection />);

    expect(screen.getByText("CovidAsha Chatbot 24x7")).toBeVisible();
    expect(
      screen.getByRole("link", { name: /kirim chat sekarang/i }),
    ).toHaveAttribute("href", "https://bit.ly/hotlinewarga");
  });
});
