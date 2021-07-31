import React from "react";

import FakeIntersectionObserver from "~/__mocks__/intersection-observer";
import { attributes, html } from "~/lib/welcome-message";

import { BasicDialog } from "../dialog";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

jest.mock("~/lib/welcome-message");

// https://stackoverflow.com/a/64122902/3187014
global.IntersectionObserver = FakeIntersectionObserver;

describe("BasicDialog", () => {
  const handleToggle = jest.fn();
  const handleCtaClick = jest.fn();

  const setup = (isOpen: boolean = true) =>
    render(
      <BasicDialog
        description={html}
        isOpen={isOpen}
        onCtaClick={handleCtaClick}
        onToggle={handleToggle}
        title={attributes.title}
      />,
    );

  beforeEach(() => {});

  afterEach(() => {
    handleToggle.mockClear();
    handleCtaClick.mockClear();
  });

  it("renders the title and the dialog body", () => {
    setup();

    expect(screen.getByText(attributes.title)).toBeVisible();
    expect(
      screen.getByText(
        /Website ini adalah kumpulan berbagai informasi seputar COVID-19 di Indonesia yang didapatkan relawan melalui pencarian di internet atau media sosial./i,
      ),
    ).toBeVisible();
  });

  it("renders nothing when isOpen is false", () => {
    setup(false);

    expect(screen.queryByText(attributes.title)).not.toBeInTheDocument();
    expect(screen.queryByText(html)).not.toBeInTheDocument();
  });

  it("triggers onToggle props when the close button is clicked", () => {
    setup();

    expect(handleToggle).toHaveBeenCalledTimes(0);
    userEvent.click(screen.getByLabelText(/tutup/i));
    expect(handleToggle).toHaveBeenCalledTimes(1);
  });

  it("triggers onToggle props when the a click is happening outside of the Dialog", () => {
    const { container } = setup();

    expect(handleToggle).toHaveBeenCalledTimes(0);
    userEvent.click(container);
    expect(handleToggle).toHaveBeenCalledTimes(1);
  });

  it("triggers onCtaClick props when the close button is clicked", () => {
    setup();

    expect(handleCtaClick).toHaveBeenCalledTimes(0);
    userEvent.click(screen.getByLabelText(/sebarkan sekarang/i));
    expect(handleCtaClick).toHaveBeenCalledTimes(1);
  });
});
