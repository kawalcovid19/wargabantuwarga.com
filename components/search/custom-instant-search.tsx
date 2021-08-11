import React, { useCallback, useState } from "react";

import { useRouter } from "next/router";
import {
  Configure,
  connectRefinementList,
  SearchState,
} from "react-instantsearch-core";
import {
  InstantSearch,
  InstantSearchProps,
  RefinementItem,
} from "react-instantsearch-dom";
import { debounce } from "ts-debounce";
import CustomHits from "~/components/search/custom-hits";
import CustomRefinementList from "~/components/search/custom-refinement-list";
import CustomSearchBox from "~/components/search/custom-search-box";
import { RefinementModal } from "~/components/search/refinement-modal";
import { getQueryParams } from "~/lib/string-utils";

type FilterSetting = {
  field: string;
  title: string;
};

interface CustomInstantSearchProps extends InstantSearchProps {
  itemName: string;
  filterSettings?: FilterSetting[];
  withFilterModal?: boolean;
}

const DEBOUNCE_TIME = 300;
const VirtualRefinementList = connectRefinementList(() => null);

export function CustomInstantSearch({
  itemName,
  filterSettings,
  indexName,
  searchClient,
  withFilterModal = false,
}: CustomInstantSearchProps) {
  const router = useRouter();
  const urlToSearchState = () => {
    const searchParams: SearchState = {};
    if (typeof window !== "undefined") {
      const queryParams: {} = getQueryParams(window.location.search);
      if (Object.keys(queryParams).length) {
        let keywordsParam: string = "";
        const filtersParam: { [key: string]: string[] } = {};
        const filterFields = filterSettings?.map((cur) => cur.field) ?? [];
        Object.entries(queryParams).forEach(([key, value]) => {
          if (key == "q") {
            keywordsParam = value as string;
            if (keywordsParam) {
              searchParams.query = keywordsParam;
            }
          } else if (key == "sort") {
            const sortParam: string = value as string;
            if (sortParam) {
              searchParams.sort = sortParam;
            }
          } else if (filterFields.includes(key)) {
            if (value) {
              filtersParam[key] = [value as string];
            }
          }
        });
        if (Object.keys(filtersParam as {}).length) {
          searchParams.refinementList = filtersParam;
        }
      }
    }
    return searchParams;
  };

  const [searchState, setSearchState] = useState(urlToSearchState());
  const [refinementList, setRefinementList] = useState<{
    [key: string]: string[];
  }>({});
  const [isFilterModalOpen, setFilterModalOpen] = useState<boolean>(false);

  const createURL = (state: SearchState) => {
    let isDefaultRoute: boolean = !state.query && state.page === 1;
    if (filterSettings?.length) {
      filterSettings.forEach((filterSetting) => {
        isDefaultRoute =
          isDefaultRoute &&
          state.refinementList?.[filterSetting.field].length === 0;
      });
    }

    if (isDefaultRoute) {
      return "";
    }

    const queryParameters: string[] = [];

    if (state.query) {
      queryParameters.push(`q=${encodeURIComponent(state.query)}`);
    }
    if (filterSettings?.length) {
      filterSettings.forEach((filterSetting) => {
        if (state.refinementList?.[filterSetting.field]) {
          queryParameters.push(
            `${filterSetting.field}=${encodeURIComponent(
              state.refinementList[filterSetting.field][0],
            )}`,
          );
        }
      });
    }

    return `${window.location.pathname}${
      queryParameters.length ? `?${queryParameters.join("&")}` : ``
    }`;
  };

  const searchStateToUrl = (searchStateParam: SearchState) =>
    createURL(searchStateParam);

  const debouncedUpdateUrlParams = useCallback(
    debounce(
      (updatedSearchState: SearchState) =>
        router.push(searchStateToUrl(updatedSearchState), undefined, {
          shallow: true,
        }),
      DEBOUNCE_TIME,
    ),
    [],
  );

  const onSearchStateChange = (updatedSearchState: SearchState) => {
    if (withFilterModal) {
      if (isFilterModalOpen && updatedSearchState.refinementList) {
        setRefinementList(
          updatedSearchState.refinementList as { [key: string]: string[] },
        );
      } else {
        updatedSearchState.refinementList = refinementList;
      }
    }
    void debouncedUpdateUrlParams(updatedSearchState);
    setSearchState(updatedSearchState);
  };

  return (
    <InstantSearch
      createURL={createURL}
      indexName={indexName}
      onSearchStateChange={onSearchStateChange}
      searchClient={searchClient}
      searchState={searchState}
    >
      <Configure hitsPerPage={250} />
      <form className="pb-8 space-y-4">
        <div className="flex flex-row items-end">
          <div className="flex flex-1 items-center mt-1">
            <CustomSearchBox
              hasFilter={
                withFilterModal && filterSettings && filterSettings.length > 0
              }
              itemName={itemName}
              onFilterButtonClick={() => setFilterModalOpen(true)}
            />
          </div>
        </div>
        {withFilterModal ? (
          <>
            {filterSettings?.length &&
              filterSettings.map((filter, idx) => {
                return (
                  <VirtualRefinementList
                    key={`virtual-${idx}`}
                    attribute={filter.field}
                    defaultRefinement={refinementList[filter.field]}
                  />
                );
              })}
            <RefinementModal
              defaultRefinementList={refinementList}
              filterSettings={filterSettings}
              isOpen={isFilterModalOpen}
              onToggle={setFilterModalOpen}
            />
          </>
        ) : (
          filterSettings?.length && (
            <div className="grid grid-cols-2 gap-4">
              {filterSettings.map((filterSetting, idx) => (
                <CustomRefinementList
                  key={`filter-${idx}`}
                  attribute={filterSetting.field}
                  title={filterSetting.title}
                  transformItems={(items: RefinementItem<string>[]) =>
                    items.sort((a, b) => a.label.localeCompare(b.label))
                  }
                />
              ))}
            </div>
          )
        )}
      </form>
      <CustomHits />
    </InstantSearch>
  );
}
