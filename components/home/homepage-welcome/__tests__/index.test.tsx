import React from "react";

import { attributes } from "~/lib/welcome-message";

import { HomePageWelcome } from "..";

import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { mockAllIsIntersecting } from "react-intersection-observer/test-utils";

jest.mock("~/lib/welcome-message");

describe("HomePageWelcome", () => {
  const bodyRegexp =
    /Website ini adalah kumpulan berbagai informasi seputar COVID-19 di Indonesia yang didapatkan relawan melalui pencarian di internet atau media sosial./i;
  const { title } = attributes;

  afterEach(() => {
    localStorage.clear();
  });

  it("renders nothing initially and only shows when the component is intersecting", () => {
    render(<HomePageWelcome />);

    expect(screen.queryByText(title)).not.toBeInTheDocument();
    expect(screen.queryByText(bodyRegexp)).not.toBeInTheDocument();

    mockAllIsIntersecting(true);

    expect(screen.getByText(title)).toBeVisible();
    expect(screen.getByText(bodyRegexp)).toBeVisible();
  });

  it("hides everything and stores a value in the Local Storage when the close button is clicked", async () => {
    render(<HomePageWelcome />);

    mockAllIsIntersecting(true);

    expect(screen.getByText(title)).toBeVisible();
    expect(screen.getByText(bodyRegexp)).toBeVisible();
    expect(localStorage.getItem("wbw-wm")).toBeNull();

    userEvent.click(screen.getByLabelText(/tutup/i));

    await waitForElementToBeRemoved(() => screen.queryByText(title));

    expect(screen.queryByText(title)).not.toBeInTheDocument();
    expect(screen.queryByText(bodyRegexp)).not.toBeInTheDocument();
    expect(localStorage.getItem("wbw-wm")).toEqual("1");
  });

  it("renders nothing even when the component is intersecting if the Local Storage value exists", () => {
    localStorage.setItem("wbw-wm", "1");

    render(<HomePageWelcome />);

    mockAllIsIntersecting(true);

    expect(screen.queryByText(title)).not.toBeInTheDocument();
    expect(screen.queryByText(bodyRegexp)).not.toBeInTheDocument();
  });
});
