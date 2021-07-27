/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ChangeEventHandler, useMemo } from "react";

import { FormLabel } from "./ui/forms/form-label";
import { InputSelect } from "./ui/forms/input-select";
import { SelectSkeleton } from "./ui/skeleton-loading";

export interface SortSetting {
  value: string;
  label: string;
}

export interface SearchFilterProps {
  checkDocSize?: boolean;
  filters: any;
  filterItems?: {};
  handleFilterChange: ChangeEventHandler<HTMLSelectElement>;
  handleSortChange: ChangeEventHandler<HTMLSelectElement>;
  isLoading?: boolean;
  sortBy: string;
  sortSettings?: SortSetting[];
}

export function SearchFilter({
  checkDocSize,
  filters,
  filterItems,
  handleFilterChange,
  handleSortChange,
  isLoading,
  sortBy,
  sortSettings,
}: SearchFilterProps) {
  const filterForms = useMemo(
    () =>
      filterItems && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {Object.entries(filterItems).map(([key, value], idx) => {
            const { title, buckets }: any = value;
            const noSelectedFilter =
              filters?.[key]?.length &&
              buckets.filter((bucket: any) => bucket.key == filters?.[key][0])
                .length == 0;
            return (
              <div key={`filter-${idx}`} className="space-y-1">
                <FormLabel htmlFor={`filter-${key}`}>{title}</FormLabel>
                <InputSelect
                  id={`filter-${key}`}
                  name={key}
                  onChange={handleFilterChange}
                  title={title}
                  value={filters?.[key]?.length ? filters[key][0] : ""}
                >
                  <option value="">Semua</option>
                  {noSelectedFilter ? (
                    <option value={filters?.[key][0]}>
                      {filters?.[key][0]}
                    </option>
                  ) : null}
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
      ),
    [filterItems, handleFilterChange, filters, checkDocSize],
  );

  const sortForms = useMemo(
    () =>
      sortSettings?.length && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
      ),
    [handleSortChange, sortBy, sortSettings],
  );

  const renderFilterForms = () => {
    if (isLoading) {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <SelectSkeleton />
          <SelectSkeleton />
        </div>
      );
    }

    return (
      <>
        {filterForms}
        {sortForms}
      </>
    );
  };

  return renderFilterForms();
}
