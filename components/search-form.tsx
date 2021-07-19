import React, { ChangeEvent, useCallback, useEffect, useState } from "react";

import { getQueryParams } from "../lib/string-utils";

import { debounce } from "lodash";
import Router from "next/router";

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

  function getSearchResult(
    keywordsValue: string,
    filtersValue?: any,
    sortValue?: string,
    updateUrlParams: boolean = true,
  ) {
    if (updateUrlParams) {
      const queryParams = [];
      if (keywordsValue) queryParams.push(`q=${keywordsValue}`);
      if (filtersValue) {
        Object.keys(filtersValue as {}).forEach((filter) => {
          if (filtersValue[filter].length) {
            const filterValue = filtersValue[filter][0];
            queryParams.push(`${filter}=${filterValue}`);
          }
        });
      }
      if (sortValue) {
        queryParams.push(`sort=${sortValue}`);
      }
      const newPath =
        window.location.pathname +
        (queryParams.length ? `?${queryParams.join("&")}` : "");
      void Router.push(newPath, undefined, { shallow: true });
    }
    onSubmitKeywords(keywordsValue, filtersValue, sortValue);
  }

  function handleSubmit(event: React.FormEvent<UsernameFormElement>) {
    event.preventDefault();
    getSearchResult(keywords, filters, sort_by);
  }

  function handleReset(event: React.FormEvent<UsernameFormElement>) {
    event.preventDefault();
    setKeywords("");
    setFilters({});
    setSortBy("");
    getSearchResult("");
  }

  const debouncedSearch = useCallback(
    debounce(
      (keywordsValue: string, filtersValue?: any, sortValue?: string) =>
        getSearchResult(keywordsValue, filtersValue, sortValue),
      100,
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
    getSearchResult(keywords, newFilters, sort_by);
  }

  function handleSortChange(event: ChangeEvent<HTMLSelectElement>) {
    const sortValue = event.target.value;
    setSortBy(sortValue);
    getSearchResult(keywords, filters, sortValue);
  }

  useEffect(() => {
    const queryParams = getQueryParams(window.location.search);
    if (Object.keys(queryParams).length) {
      let keywordsParam: string = "";
      let sortParam: string = "";
      const filtersParam: any = {};
      Object.entries(queryParams).forEach(([key, value]) => {
        if (key == "q") {
          keywordsParam = value as string;
          setKeywords(keywordsParam);
        } else if (key == "sort") {
          sortParam = value as string;
          setSortBy(sortParam);
        } else {
          filtersParam[key] = [value as string];
        }
      });
      setFilters(filtersParam);
      getSearchResult(keywordsParam, filtersParam, sortParam, false);
    }
  }, [itemName]);

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
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full px-2 py-2 sm:text-sm border-gray-300 border-2 rounded-md"
            id="keywordsInput"
            onChange={handleKeywordsChange}
            type="text"
            value={keywords}
          />
          {!autoSearch && (
            <button
              className="bg-blue-600 text-white ml-2 py-2 px-6 rounded"
              type="submit"
            >
              Cari
            </button>
          )}
          <button
            className="bg-gray-200 text-black ml-2 py-2 px-6 rounded"
            type="reset"
          >
            Reset
          </button>
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
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full px-2 py-2 sm:text-sm border-gray-300 border-2 rounded-md"
                    name={key}
                    onChange={handleFilterChange}
                    value={filters[key]?.length ? filters[key][0] : ""}
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
              value={sort_by}
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
