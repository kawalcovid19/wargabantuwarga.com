import React from "react";

import { SearchFilter } from "../search-filter";

import { render } from "@testing-library/react";

describe("SearchFilter", () => {
  const handleFilterChange = jest.fn();
  const handleSortChange = jest.fn();

  it("renders correctly", () => {
    const { container } = render(
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

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        <div
          class="space-y-1"
        >
          <label
            class="block text-sm font-medium text-gray-700"
            for="filter-kebutuhan"
          >
            Kategori
          </label>
          <select
            class="inline-block shadow-sm focus:ring-blue-500 focus:border-blue-500 w-full text-sm border-gray-300 rounded-md"
            id="filter-kebutuhan"
            name="kebutuhan"
            title="Kategori"
          >
            <option
              value=""
            >
              Semua
            </option>
            <option
              value="Ambulans"
            >
              Ambulans
            </option>
            <option
              value="Donor plasma"
            >
              Donor plasma
            </option>
            <option
              value="Kontak penting"
            >
              Kontak penting
            </option>
            <option
              value="Rumah sakit"
            >
              Rumah sakit
            </option>
          </select>
        </div>
      </div>
    `);
  });

  it("renders non existing filter correctly", () => {
    const { container } = render(
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

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        <div
          class="space-y-1"
        >
          <label
            class="block text-sm font-medium text-gray-700"
            for="filter-kebutuhan"
          >
            Kategori
          </label>
          <select
            class="inline-block shadow-sm focus:ring-blue-500 focus:border-blue-500 w-full text-sm border-gray-300 rounded-md"
            id="filter-kebutuhan"
            name="kebutuhan"
            title="Kategori"
          >
            <option
              value=""
            >
              Semua
            </option>
            <option
              value="Oksigen"
            >
              Oksigen
            </option>
            <option
              value="Ambulans"
            >
              Ambulans
            </option>
            <option
              value="Donor plasma"
            >
              Donor plasma
            </option>
            <option
              value="Kontak penting"
            >
              Kontak penting
            </option>
            <option
              value="Rumah sakit"
            >
              Rumah sakit
            </option>
          </select>
        </div>
      </div>
    `);
  });
});
