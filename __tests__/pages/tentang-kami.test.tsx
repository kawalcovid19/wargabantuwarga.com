import React from "react";

import { render, screen } from "@testing-library/react";

import TentangKamiPage from "../../pages/tentang-kami";

import { attributes } from "../../lib/content/about/content";
import videosData from "../../lib/content/about/videos";
import collaboratorsData from "../../lib/content/about/collaborators";

jest.mock("~/lib/content/about/content");
jest.mock("next/router", () => require("next-router-mock"));

describe("TentangKamiPage > UI", () => {
  it("renders the title, breadcrumbs and markdown content correctly", () => {
    render(<TentangKamiPage />);

    const tentangKamiText = screen.getAllByText("Tentang Kami");
    expect(tentangKamiText[0]).toBeVisible();
    expect(tentangKamiText[1]).toBeVisible();

    expect(tentangKamiText[0]).toHaveAttribute("href", "/tentang-kami");

    expect(screen.getByText(attributes.title)).toBeVisible();
    expect(screen.getByText(attributes.description)).toBeVisible();

    const collaboratorTitle = screen.getByText(
      "Terima kasih kepada para kolaborator inisiatif #WargaBantuWarga",
    );
    expect(collaboratorTitle).toBeVisible();

    const feedbackTitle = screen.getByText(
      "Ada usulan / laporan terkait website ini?",
    );
    expect(feedbackTitle).toBeVisible();

    const buttonFeedback = screen.getByText("Sampaikan masukan Anda");
    expect(buttonFeedback).toHaveAttribute(
      "href",
      "https://kcov.id/wbw-discuss",
    );
  });

  it("renders the videos & collaborators correctly", () => {
    render(<TentangKamiPage />);

    expect(screen.getByTitle(videosData.videos[0].title)).toBeVisible();
    expect(screen.getByAltText(videosData.videos[0].title)).toBeVisible();

    expect(
      screen.getByTitle(collaboratorsData.collaborators[0].name),
    ).toBeVisible();

    expect(
      screen.getByAltText(collaboratorsData.collaborators[0].name),
    ).toBeVisible();
  });
});
