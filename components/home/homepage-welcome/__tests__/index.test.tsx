import React from "react";

import { attributes } from "~/lib/welcome-message";

import { HomePageWelcome } from "..";

import { render, screen } from "@testing-library/react";
import { mockAllIsIntersecting } from "react-intersection-observer/test-utils";

jest.mock("~/lib/welcome-message");

describe("HomePageWelcome", () => {
  const bodyRegexp =
    /Website ini adalah kumpulan berbagai informasi seputar COVID-19 di Indonesia yang didapatkan relawan melalui pencarian di internet atau media sosial./i;
  const { title } = attributes;

  it("renders nothing initially and only shows when HomePageWelcome is intersecting", () => {
    render(<HomePageWelcome />);

    expect(screen.queryByText(title)).not.toBeInTheDocument();
    expect(screen.queryByText(bodyRegexp)).not.toBeInTheDocument();

    mockAllIsIntersecting(true);

    expect(screen.getByText(title)).toBeVisible();
    expect(screen.getByText(bodyRegexp)).toBeVisible();
  });
});
