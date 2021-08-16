import React from "react";

import { render, screen } from "@testing-library/react";
import { SearchFilter } from "../search-filter";

describe("SearchFilter", () => {
  const handleFilterChange = jest.fn();
  const handleSortChange = jest.fn();

  it("renders correctly", () => {
    render(
      <SearchFilter
        filterItems={{
          kebutuhan: {
            title: "Kategori",
            buckets: [
              {
                key: "Ambulans",
                doc_count: 6,
                selected: false,
              },
              { key: "Donor plasma", doc_count: 1, selected: false },
              { key: "Kontak penting", doc_count: 3, selected: false },
              { key: "Rumah sakit", doc_count: 15, selected: false },
            ],
          },
        }}
        filters={{ kebutuhan: [], lokasi: [] }}
        handleFilterChange={handleFilterChange}
        handleSortChange={handleSortChange}
        sortBy="default"
      />,
    );

    expect(screen.getByText(/kategori/i)).toBeVisible();
  });

  it("renders non existing filter correctly", () => {
    render(
      <SearchFilter
        filterItems={{
          kebutuhan: {
            title: "Kategori",
            buckets: [
              {
                key: "Ambulans",
                doc_count: 6,
                selected: false,
              },
              { key: "Donor plasma", doc_count: 1, selected: false },
              { key: "Kontak penting", doc_count: 3, selected: false },
              { key: "Rumah sakit", doc_count: 15, selected: false },
            ],
          },
        }}
        filters={{ kebutuhan: ["Oksigen"], lokasi: [] }}
        handleFilterChange={handleFilterChange}
        handleSortChange={handleSortChange}
        sortBy="default"
      />,
    );

    expect(screen.getByText(/kategori/i)).toBeVisible();
    expect(screen.getAllByRole("option")).toHaveLength(6);
  });
});
