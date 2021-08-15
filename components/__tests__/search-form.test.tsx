import React from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SearchForm } from "../search-form";

describe("SearchForm", () => {
  const handleSubmitKeyword = jest.fn();

  it("renders correctly", () => {
    render(
      <SearchForm
        checkDocSize={true}
        itemName="provinsi"
        onSubmitKeywords={handleSubmitKeyword}
      />,
    );

    const searchForm = screen.getByRole("textbox", { name: /cari provinsi/i });
    expect(searchForm).toBeVisible();
  });

  it("has the correct form label based on type", () => {
    const { getByText } = render(
      <SearchForm
        checkDocSize={true}
        itemName="provinsi"
        onSubmitKeywords={handleSubmitKeyword}
      />,
    );

    expect(getByText("Cari provinsi:")).not.toBeNull();
  });

  it("preserve url param on search", () => {
    render(
      <SearchForm
        checkDocSize={true}
        itemName="provinsi"
        onSubmitKeywords={handleSubmitKeyword}
      />,
    );
    const location = {
      ...window.location,
      search: "?kebutuhan=Oksigen",
    };
    Object.defineProperty(window, "location", {
      writable: true,
      value: location,
    });
    const input = screen.getByLabelText("Cari provinsi:");
    userEvent.type(input, "keyword");
    userEvent.click(screen.getByText("Cari"));
    setTimeout(() => {
      expect(window.location.search).toEqual("?kebutuhan=Oksigen&q=keyword");
    }, 200);
  });

  it("render filter button if filter as modal", () => {
    render(
      <SearchForm
        checkDocSize={true}
        filterItems={{ kebutuhan: [], lokasi: [] }}
        itemName="kontak"
        onSubmitKeywords={handleSubmitKeyword}
        withFilterModal={true}
      />,
    );
    const button = screen.getByText("Filter");
    expect(button).toBeVisible();
  });
});
