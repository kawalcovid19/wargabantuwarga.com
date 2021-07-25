import React from "react";

import { SearchForm } from "../search-form";

import { render } from "@testing-library/react";

describe("SearchForm", () => {
  const handleSubmitKeyword = jest.fn();

  it("renders correctly", () => {
    const { container } = render(
      <SearchForm
        checkDocSize={true}
        itemName="provinsi"
        onSubmitKeywords={handleSubmitKeyword}
      />,
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
      <form
        class="pb-8 space-y-4"
      >
        <div
          class="flex flex-col sm:flex-row sm:items-end"
        >
          <div
            class="flex flex-1 items-center mt-1"
          >
            <div
              class="space-y-1 flex-1"
            >
              <label
                class="block text-sm font-medium text-gray-700"
                for="keywordsInput"
              >
                Cari 
                provinsi
                :
              </label>
              <div
                class="flex rounded-md shadow-sm w-full"
              >
                <input
                  autocomplete="off"
                  class="first:rounded-l-md last:rounded-r-md focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 focus:z-10"
                  id="keywordsInput"
                  type="text"
                  value=""
                />
              </div>
            </div>
          </div>
          <div
            class="flex flex-row mt-2 ml-0 sm:mt-0 sm:ml-2"
          >
            <button
              class="flex px-4 py-2 text-sm rounded-md items-center justify-center border border-transparent font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-75 flex-1"
              type="submit"
            >
              Cari
            </button>
            <button
              class="flex px-4 py-2 text-sm rounded-md items-center justify-center border border-transparent font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 text-blue-700 bg-blue-100 hover:bg-blue-200 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-75 flex-1 ml-2"
              type="reset"
            >
              Reset
            </button>
          </div>
        </div>
      </form>
    `);
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
});
