/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ChangeEvent, useCallback, useEffect, useState } from "react";

import { PrimaryButton, SecondaryButton } from "./ui/button";
import { Select } from "./ui/select";

import { debounce } from "lodash";

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
  initialValue,
}: {
  itemName: string;
  onSubmitKeywords: (keywords: string, filters?: any, sort_by?: string) => void;
  filterItems?: {};
  sortSettings?: SortSetting[];
  autoSearch?: boolean;
  initialValue?: {
    query?: string;
    filters?: {};
    sort?: string;
  };
}) {
  const [keywords, setKeywords] = useState<string>("");
  const [filters, setFilters] = useState<any>({});
  const [sort_by, setSortBy] = useState<string>(
    sortSettings?.length ? sortSettings[0].value : "",
  );

  function handleSubmit(event: React.FormEvent<UsernameFormElement>) {
    event.preventDefault();
    onSubmitKeywords(keywords, filters, sort_by);
  }

  function handleReset(event: React.FormEvent<UsernameFormElement>) {
    event.preventDefault();
    setKeywords("");
    setFilters({});
    setSortBy("");
    onSubmitKeywords("");
  }

  const debouncedSearch = useCallback(
    debounce(
      (keywordsValue: string, filtersValue?: any, sortValue?: string) =>
        onSubmitKeywords(keywordsValue, filtersValue, sortValue),
      300,
    ),
    [],
  );

  function handleKeywordsChange(event: ChangeEvent<HTMLInputElement>) {
    const newKeywords = event.target.value;
    setKeywords(newKeywords);
    if (autoSearch) {
      debouncedSearch(newKeywords, filters, sort_by);
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

  useEffect(() => {
    setKeywords(initialValue?.query ?? "");
    setFilters(initialValue?.filters ?? {});
    setSortBy(
      initialValue?.sort ||
        (sortSettings?.length && sortSettings[0].value) ||
        "",
    );
  }, [initialValue]);

  return (
    <form
      className="pb-8 space-y-4"
      onReset={handleReset}
      onSubmit={handleSubmit}
    >
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
            value={keywords}
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
        <>
          <span className="block mb-2 font-medium text-gray-700">Filter</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {Object.entries(filterItems).map(([key, value], idx) => {
              const { title, buckets }: any = value;
              return (
                <div key={`filter-${idx}`} className="space-y-1">
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor={`filter-${key}`}
                  >
                    {title}
                  </label>
                  <Select
                    name={key}
                    onChange={handleFilterChange}
                    title={title}
                    value={filters?.[key]?.length ? filters[key][0] : ""}
                  >
                    <option value="">Semua</option>
                    {buckets.map((bucket: any, bIdx: number) => {
                      return (
                        bucket.doc_count > 0 &&
                        bucket.key && (
                          <option
                            key={`option-${key}-${bIdx + 1}`}
                            value={bucket.key}
                          >
                            {bucket.key}
                          </option>
                        )
                      );
                    })}
                  </Select>
                </div>
              );
            })}
          </div>
        </>
      ) : null}
      {sortSettings?.length ? (
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <label
              className="font-medium text-sm text-gray-700 mr-2"
              htmlFor="sort-by"
            >
              Urut berdasarkan
            </label>
            <Select
              name="sort-by"
              onChange={handleSortChange}
              title="Urut berdasarkan"
              value={sort_by}
            >
              {sortSettings.map((cur, idx) => {
                return (
                  <option key={`sort-by-${idx}`} value={cur.value}>
                    {cur.label}
                  </option>
                );
              })}
            </Select>
          </div>
        </div>
      ) : null}
    </form>
  );
}
