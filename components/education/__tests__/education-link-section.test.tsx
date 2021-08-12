import React from "react";

import { render, screen } from "@testing-library/react";
import { EducationSection } from "../education-link-section";
import educations from "~/lib/content/educations";

const { topics } = educations;
const [topic] = topics;

it("renders correctly", () => {
  render(<EducationSection educations={educations} />);

  expect(screen.getAllByRole("list").length).toBe(1);

  topics.forEach((topicSection) => {
    expect(
      screen.getByRole("button", { name: topicSection.topic }),
    ).toBeVisible();
  });

  topic.contents.forEach((content) => {
    const link = screen.getByRole("link", { name: content.title });

    expect(screen.getByText(content.title)).toBeVisible();
    expect(link).toBeVisible();
    expect(link).toHaveAttribute("href", content.url);
    expect(
      screen.getByTestId(`external-link-icon-${content.title}`),
    ).toBeVisible();
  });
});
