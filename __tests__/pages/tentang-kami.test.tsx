import React from "react";

import { render, screen } from "@testing-library/react";
import TentangKamiPage, { getStaticProps } from "../../pages/tentang-kami";
import { content, collaborators, videos } from "../../lib/content/about-page";

jest.mock("~/lib/content/about-page");
jest.mock("next/router", () => require("next-router-mock"));

describe("TentangKamiPage > UI", () => {
  it("renders the title, breadcrumbs and markdown content correctly", () => {
    render(
      <TentangKamiPage
        collaborators={collaborators}
        content={content}
        videos={videos}
      />,
    );

    const tentangKamiText = screen.getAllByText("Tentang Kami");
    expect(tentangKamiText[0]).toBeVisible();
    expect(tentangKamiText[1]).toBeVisible();

    expect(tentangKamiText[0]).toHaveAttribute("href", "/tentang-kami");

    expect(screen.getByText(content.attributes.title)).toBeVisible();
    expect(screen.getByText(content.attributes.description)).toBeVisible();
  });

  it("renders the videos & collaborators correctly", () => {
    render(
      <TentangKamiPage
        collaborators={collaborators}
        content={content}
        videos={videos}
      />,
    );

    expect(screen.getByTitle(videos.videos[0].title)).toBeVisible();
    expect(screen.getByAltText(videos.videos[0].title)).toBeVisible();

    expect(
      screen.getByTitle(collaborators.collaborators[0].title),
    ).toBeVisible();
    expect(
      screen.getByAltText(collaborators.collaborators[0].title),
    ).toBeVisible();
  });
});

describe("TentangKamiPage > getStaticProps", () => {
  it("returns the props from mock data correctly", () => {
    expect(getStaticProps({})).toEqual({
      props: { content, collaborators, videos },
    });
  });
});
