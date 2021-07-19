import { ChangeEvent, useState } from "react";

import { PrimaryButton, SecondaryButton } from "./ui/button";

interface FormElements extends HTMLFormControlsCollection {
  keywordsInput: HTMLInputElement;
}

interface UsernameFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

type SortSetting = {
  value: string;
  label: string;
};

export function SearchForm({
  itemName,
  onSubmitKeywords,
  filterItems,
  sortSettings,
  autoSearch,
}: {
  itemName: string;
  onSubmitKeywords: (keywords: string, filters?: any, sort_by?: string) => void;
  filterItems?: {};
  sortSettings?: SortSetting[];
  autoSearch?: boolean;
}) {
  const [keywords, setKeywords] = useState<string>("");
  const [filters, setFilters] = useState<any>({});
  const [sort_by, setSortBy] = useState<string>("");

  function handleSubmit(event: React.FormEvent<UsernameFormElement>) {
    event.preventDefault();
    onSubmitKeywords(keywords, filters, sort_by);
  }

  function handleReset() {
    setKeywords("");
    setFilters({});
    setSortBy("");
    onSubmitKeywords("");
  }

  function handleKeywordsChange(event: ChangeEvent<HTMLInputElement>) {
    const newKeywords = event.target.value;
    setKeywords(newKeywords);
    if (autoSearch) {
      onSubmitKeywords(newKeywords, filters, sort_by);
    }
  }
  function handleFilterChange(event: ChangeEvent<HTMLSelectElement>) {
    const newFilters = { ...filters };
    const filterName = event.target.name;
    const filterValue = event.target.value;
    if (filterValue) {
      newFilters[filterName] = [filterValue];
    } else {
      newFilters[filterName] = [];
    }
    setFilters(newFilters);
    onSubmitKeywords(keywords, newFilters, sort_by);
  }
  function handleSortChange(event: ChangeEvent<HTMLSelectElement>) {
    const sortValue = event.target.value;
    setSortBy(sortValue);
    onSubmitKeywords(keywords, filters, sortValue);
  }

  return (
    <form className="pb-4" onReset={handleReset} onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="keywordsInput"
        >
          Cari {itemName}:
        </label>
        <div className="flex items-center mt-1">
          <input
            autoComplete="off"
            className="outline-none focus:ring-blue-500 focus:border-blue-500 block w-full px-2 py-2 sm:text-sm border-gray-300 hover:border-gray-400 border-2 rounded-md"
            id="keywordsInput"
            onChange={handleKeywordsChange}
            type="text"
          />
          {!autoSearch && (
            <PrimaryButton className="ml-2" type="submit">
              Cari
            </PrimaryButton>
          )}
          <SecondaryButton className="ml-2" type="reset">
            Reset
          </SecondaryButton>
        </div>
      </div>
      {filterItems && Object.keys(filterItems).length ? (
        <div className="mt-3 text-sm">
          <span className="block mb-2 font-medium text-gray-700">Filter</span>
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(filterItems).map(([key, value], idx) => {
              const { title, buckets }: any = value;
              return (
                <div key={`filter-${idx}`}>
                  <label
                    className="block mb-1 font-medium text-gray-700"
                    htmlFor={`filter-${key}`}
                  >
                    {title}
                  </label>
                  <select
                    className="outline-none focus:ring-blue-500 focus:border-blue-500 block w-full px-2 py-2 sm:text-sm border-gray-300 hover:border-gray-400 border-2 rounded-md"
                    name={key}
                    onChange={handleFilterChange}
                  >
                    <option value="">Semua</option>
                    {buckets.map((bucket: any, bIdx: number) => {
                      return (
                        <option
                          key={`option-${key}-${bIdx + 1}`}
                          value={bucket.key}
                        >
                          {bucket.key}
                        </option>
                      );
                    })}
                  </select>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
      {sortSettings?.length ? (
        <>
          <div className="float-right mt-5 text-sm">
            <label className="font-medium text-gray-700 mr-2" htmlFor="sort-by">
              Urut berdasarkan
            </label>
            <select
              className="focus:ring-indigo-500 focus:border-indigo-500 px-2 py-2 sm:text-sm border-gray-300 border-2 rounded-md"
              name="sort-by"
              onChange={handleSortChange}
            >
              {sortSettings.map((cur, idx) => {
                return (
                  <option key={`sort-by-${idx}`} value={cur.value}>
                    {cur.label}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="clear-right" />
        </>
      ) : null}
    </form>
  );
}
