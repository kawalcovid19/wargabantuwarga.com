import { act, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import router from "next/router";
import App, { progress } from "~/pages/_app";
import siteConfig from "~/lib/content/site-config";

jest.mock("next/router", () => require("next-router-mock"));

describe("App", () => {
  const onSpy = jest.spyOn(router.events, "on");
  const offSpy = jest.spyOn(router.events, "on");
  const progressStartSpy = jest.spyOn(progress, "start");
  const progressDoneSpy = jest.spyOn(progress, "done");

  beforeEach(() => {
    onSpy.mockClear();
    offSpy.mockClear();
    progressStartSpy.mockClear();
    progressDoneSpy.mockClear();
  });

  it("calls NProgress events correctly", async () => {
    render(
      // @ts-expect-error Router mock is incomprehensive
      <App Component={() => <div />} pageProps={{}} router={router} />,
    );

    expect(screen.getByText(siteConfig.site_name).closest("a")).toHaveAttribute(
      "href",
      "/",
    );

    await waitFor(() =>
      expect(onSpy).toHaveBeenCalledWith(
        "routeChangeStart",
        expect.any(Function),
      ),
    );

    await waitFor(() =>
      expect(offSpy).toHaveBeenCalledWith(
        "routeChangeStart",
        expect.any(Function),
      ),
    );
    await waitFor(() => expect(progressStartSpy).toHaveBeenCalledTimes(0));
    await waitFor(() => expect(progressDoneSpy).toHaveBeenCalledTimes(0));

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    await act(async () => {
      await router.push("/provinces");
    });

    // TODO: find a way to trigger the handleStart callback
    await waitFor(() => expect(progressStartSpy).toHaveBeenCalledTimes(0));
    await waitFor(() => expect(progressDoneSpy).toHaveBeenCalledTimes(1));

    await waitFor(() => {
      const provincesNav = screen.getByText(/pusat data/i).closest("a");
      expect(provincesNav).toHaveClass("font-semibold");
    });
  });
});
