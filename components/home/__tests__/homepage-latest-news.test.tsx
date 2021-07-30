import { HomePageLatestNews } from "../homepage-latest-news";

import { render } from "@testing-library/react";

describe("HomePageLatestNews", () => {
  it("doesn't render more than 3 news items", () => {
    const { container } = render(<HomePageLatestNews />);

    const articles = container.querySelectorAll("article");

    expect(articles.length).not.toBeGreaterThan(3);
  });
});
