/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { debounce } from "ts-debounce";
import React, {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import { FilterIcon } from "@heroicons/react/outline";
import { PrimaryButton } from "./ui/button";
import { FormLabel } from "./ui/forms/form-label";
import { InputText } from "./ui/forms/input-text";

import { SearchFilterModal, SortSetting } from "./search-filter-modal";
import { FormGroup } from "./ui/forms/form-group";
import { SearchFilter } from "~/components/search-filter";

interface FormElements extends HTMLFormControlsCollection {
  keywordsInput: HTMLInputElement;
}

interface UsernameFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

interface SearchFormProps {
  itemName: string;
  placeholderText?: string;
  checkDocSize: boolean;
  onSubmitKeywords: (keywords: string, filters?: any, sort_by?: string) => void;
  autoSearch?: boolean;
  filterItems?: {};
  initialValue?: {
    query?: string;
    filters?: {};
    sort?: string;
  };
  isLoading?: boolean;
  sortSettings?: SortSetting[];
  withFilterModal?: boolean;
}

export function SearchForm({
  itemName,
  placeholderText,
  checkDocSize,
  onSubmitKeywords,
  autoSearch,
  filterItems,
  initialValue,
  isLoading,
  sortSettings,
  withFilterModal = false,
}: SearchFormProps) {
  const defaultSort = sortSettings?.length ? sortSettings[0].value : "";
  const [keywords, setKeywords] = useState<string>("");
  const [filters, setFilters] = useState<any>({});
  const [sortBy, setSortBy] = useState<string>(defaultSort);
  const [isFilterModalOpen, setFilterModalOpen] = useState<boolean>(false);

  function handleSubmit(event: FormEvent<UsernameFormElement>) {
    event.preventDefault();
    setFilters({});
    onSubmitKeywords(keywords, {}, sortBy);
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
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
  }, [defaultSort, initialValue]);

  return (
    <form className="pb-8 space-y-4" onSubmit={handleSubmit}>
      <div className="flex flex-row items-end">
        <div className="flex flex-1 items-center mt-1">
          <div className="space-y-1 flex-1">
            <FormLabel htmlFor="keywordsInput">Cari {itemName}:</FormLabel>
            <FormGroup className="w-full">
              <InputText
                autoComplete="off"
                className="focus:z-10"
                id="keywordsInput"
                isGroupItem
                onChange={handleKeywordsChange}
                placeholder={placeholderText}
                type="text"
                value={keywords}
              />
              {withFilterModal &&
                !isLoading &&
                (filterItems || sortSettings?.length) && (
                  <button
                    className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    onClick={() => setFilterModalOpen(true)}
                  >
                    <FilterIcon
                      aria-hidden="true"
                      className="h-5 w-5 text-gray-400"
                    />
                    <span>Filter</span>
                  </button>
                )}
            </FormGroup>
          </div>
        </div>
        {!autoSearch && (
          <div className="flex flex-row mt-0 ml-2">
            <PrimaryButton block className="flex-1" type="submit">
              Cari
            </PrimaryButton>
          </div>
        )}
      </div>

      {withFilterModal ? (
        <SearchFilterModal
          checkDocSize={checkDocSize}
          filterItems={filterItems}
          filters={filters}
          handleFilterChange={handleFilterChange}
          handleSortChange={handleSortChange}
          isLoading={isLoading}
          isOpen={isFilterModalOpen}
          onToggle={setFilterModalOpen}
          sortBy={sortBy}
          sortSettings={sortSettings}
        />
      ) : (
        <SearchFilter
          checkDocSize={checkDocSize}
          filterItems={filterItems}
          filters={filters}
          handleFilterChange={handleFilterChange}
          handleSortChange={handleSortChange}
          isLoading={isLoading}
          sortBy={sortBy}
          sortSettings={sortSettings}
        />
      )}
    </form>
  );
}
