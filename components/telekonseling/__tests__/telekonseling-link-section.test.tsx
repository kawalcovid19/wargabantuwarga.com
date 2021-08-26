import React from "react";

import { render, screen } from "@testing-library/react";
import { TelecounselingSection } from "../telekonseling-link-section";
import telekonseling from "~/lib/content/telekonseling";

jest.mock("~/lib/content/telekonseling");

const { supports } = telekonseling;
const [support] = supports;

it("renders correctly and the first list should be shown", () => {
  render(<TelecounselingSection telekonseling={telekonseling} />);

  expect(screen.getAllByRole("list").length).toBe(1);

  supports.forEach((supportSection) => {
    expect(
      screen.getByRole("heading", { name: supportSection.support }),
    ).toBeVisible();
  });

  support.contents.forEach((content) => {
    const link = screen.getByRole("link", { name: content.title });

    expect(screen.getByText(content.title)).toBeVisible();
    expect(link).toBeVisible();
    expect(link).toHaveAttribute("href", content.url);
    expect(screen.getByRole("link", { name: content.title })).toBeVisible();
  });
});
