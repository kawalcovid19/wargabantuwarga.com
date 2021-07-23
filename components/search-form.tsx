/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from "react";

import { PrimaryButton, SecondaryButton } from "./ui/button";
import { FormLabel } from "./ui/forms/form-label";
import { InputSelect } from "./ui/forms/input-select";
import { InputText } from "./ui/forms/input-text";
import { SelectSkeleton } from "./ui/skeleton-loading";

import { debounce } from "ts-debounce";

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
  placeholderText,
  checkDocSize,
  onSubmitKeywords,
  filterItems,
  sortSettings,
  autoSearch,
  initialValue,
  isLoading,
}: {
  itemName: string;
  placeholderText: string;
  checkDocSize: boolean;
  onSubmitKeywords: (keywords: string, filters?: any, sort_by?: string) => void;
  filterItems?: {};
  sortSettings?: SortSetting[];
  autoSearch?: boolean;
  initialValue?: {
    query?: string;
    filters?: {};
    sort?: string;
  };
  isLoading?: boolean;
}) {
  const defaultSort = sortSettings?.length ? sortSettings[0].value : "";
  const [keywords, setKeywords] = useState<string>("");
  const [filters, setFilters] = useState<any>({});
  const [sortBy, setSortBy] = useState<string>(defaultSort);

  function handleSubmit(event: FormEvent<UsernameFormElement>) {
    event.preventDefault();
    setFilters({});
    onSubmitKeywords(keywords, {}, sortBy);
  }

  function handleReset(event: FormEvent<UsernameFormElement>) {
    event.preventDefault();
    setKeywords("");
    setFilters({});
    setSortBy(defaultSort);
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
      void debouncedSearch(newKeywords, filters, sortBy);
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
    onSubmitKeywords(keywords, newFilters, sortBy);
  }

  function handleSortChange(event: ChangeEvent<HTMLSelectElement>) {
    const sortValue = event.target.value;
    setSortBy(sortValue);
    onSubmitKeywords(keywords, filters, sortValue);
  }

  useEffect(() => {
    setKeywords(initialValue?.query ?? "");
    setFilters(initialValue?.filters ?? {});
    setSortBy(initialValue?.sort ?? defaultSort);
  }, [initialValue]);

  return (
    <form
      className="pb-8 space-y-4"
      onReset={handleReset}
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col">
        <FormLabel htmlFor="keywordsInput">Cari {itemName}:</FormLabel>
        <div className="flex items-center mt-1">
          <InputText
            autoComplete="off"
            id="keywordsInput"
            onChange={handleKeywordsChange}
            placeholder={placeholderText}
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

      {isLoading ? (
        <SelectSkeleton />
      ) : filterItems && Object.keys(filterItems).length ? (
        <>
          <span className="block mb-2 font-medium text-gray-700">Filter</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {Object.entries(filterItems).map(([key, value], idx) => {
              const { title, buckets }: any = value;
              return (
                <div key={`filter-${idx}`} className="space-y-1">
                  <FormLabel htmlFor={`filter-${key}`}>{title}</FormLabel>
                  <InputSelect
                    name={key}
                    onChange={handleFilterChange}
                    title={title}
                    value={filters?.[key]?.length ? filters[key][0] : ""}
                  >
                    <option value="">Semua</option>
                    {buckets.map((bucket: any, bIdx: number) => {
                      if (bucket.key) {
                        if (checkDocSize) {
                          if (bucket.doc_count > 0) {
                            return (
                              <option
                                key={`option-${key}-${bIdx + 1}`}
                                value={bucket.key}
                              >
                                {bucket.key}
                              </option>
                            );
                          }
                          // Do not print, when doc_count = 0 and checkDocSize set to true
                          return null;
                        } else {
                          // FAQ page doesn't check the doc_count
                          // just pass checkDocSize props to false
                          return (
                            <option
                              key={`option-${key}-${bIdx + 1}`}
                              value={bucket.key}
                            >
                              {bucket.key}
                            </option>
                          );
                        }
                      }
                      return null;
                    })}
                  </InputSelect>
                </div>
              );
            })}
          </div>
        </>
      ) : null}

      {isLoading ? (
        <SelectSkeleton />
      ) : sortSettings?.length ? (
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <FormLabel htmlFor="sort-by">Urut berdasarkan</FormLabel>
            <InputSelect
              name="sort-by"
              onChange={handleSortChange}
              title="Urut berdasarkan"
              value={sortBy}
            >
              {sortSettings.map((cur, idx) => {
                return (
                  <option key={`sort-by-${idx}`} value={cur.value}>
                    {cur.label}
                  </option>
                );
              })}
            </InputSelect>
          </div>
        </div>
      ) : null}
    </form>
  );
}
