import React from "react";

import siteConfig from "~/lib/content/site-config";
import { attributes } from "~/lib/content/welcome-message";

import { HomePageWelcome } from "..";

import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { mockAllIsIntersecting } from "react-intersection-observer/test-utils";

jest.mock("~/lib/content/welcome-message");

describe("HomePageWelcome", () => {
  const bodyRegexp =
    /Website ini adalah kumpulan berbagai informasi seputar COVID-19 di Indonesia yang didapatkan relawan melalui pencarian di internet atau media sosial./i;
  const { title } = attributes;
  const shareObject = {
    title: siteConfig.site_name,
    text: siteConfig.site_description,
    url: siteConfig.site_url,
  };

  beforeAll(() => {
    jest.spyOn(window, "open").mockImplementation(() => window);
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  beforeEach(() => {
    localStorage.clear();
    jest.spyOn(window, "open").mockClear();
    jest.spyOn(console, "error").mockClear();
  });

  afterAll(() => {
    jest.restoreAllMocks();
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

  it("shares to Twitter when the browser doesn't support native share", () => {
    render(<HomePageWelcome />);

    mockAllIsIntersecting(true);

    userEvent.click(screen.getByText(/sebarkan sekarang/i));

    const safeUrl = encodeURIComponent(siteConfig.site_url);
    const safeText = encodeURIComponent(siteConfig.site_description);
    expect(window.open).toHaveBeenCalledWith(
      `https://twitter.com/intent/tweet?text=${safeText}+%0A+${safeUrl}`,
    );
  });

  it("invokes the native sharing mechanism when the browser supports it", async () => {
    render(<HomePageWelcome />);

    mockAllIsIntersecting(true);

    Object.defineProperty(global.navigator, "share", {
      writable: true,
      value: jest.fn().mockImplementation(
        (shareObj) =>
          new Promise((resolve) => {
            expect(shareObj).toEqual(shareObject);
            resolve(null);
          }),
      ),
    });

    userEvent.click(screen.getByText(/sebarkan sekarang/i));

    await waitForElementToBeRemoved(() => screen.queryByText(title));

    expect(window.open).not.toHaveBeenCalled();
  });

  it("logs an error to the console when the native sharing mechanism throws an error", async () => {
    const errorMessage = "Native sharing is unavailable at the moment";

    render(<HomePageWelcome />);

    mockAllIsIntersecting(true);

    Object.defineProperty(global.navigator, "share", {
      writable: true,
      value: jest.fn().mockImplementation(
        (shareObj) =>
          new Promise((_, reject) => {
            expect(shareObj).toEqual(shareObject);
            reject(errorMessage);
          }),
      ),
    });

    jest.spyOn(console, "error").mockImplementation(() => {});

    userEvent.click(screen.getByText(/sebarkan sekarang/i));

    await waitFor(() =>
      expect(console.error).toHaveBeenCalledWith(
        "Error sharing",
        errorMessage,
        shareObject,
      ),
    );
    expect(window.open).not.toHaveBeenCalled();
  });
});
