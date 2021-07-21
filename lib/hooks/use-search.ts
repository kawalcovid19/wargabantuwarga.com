import { useEffect, useState } from "react";

import { getQueryParams } from "../string-utils";

import ItemsJS from "itemsjs";
import Router from "next/router";

type AggregationSetting = {
  field: string;
  title: string;
};

export function useSearch<T = unknown[]>(
  items: T[],
  fieldNames: string[],
  aggregationSettings?: AggregationSetting[],
  sortSettings?: {},
  defaultSort?: string,
) {
  const configuration: any = {
    searchableFields: fieldNames,
    sortings: {
      default: {
        field: "id",
        order: "asc",
      },
      ...sortSettings,
    },
  };

  if (aggregationSettings?.length) {
    configuration.aggregations = aggregationSettings.reduce(
      (aggregations: any, cur) => {
        aggregations[cur.field] = {
          title: cur.title,
          size: 100,
          sort: "term",
          order: "asc",
        };
        return aggregations;
      },
      {},
    );
  }

  const itemsjs = ItemsJS(items, configuration);

  const [initialParams, setInitialParams] = useState<any>({});
  const [lastKeywords, setLastKeywords] = useState<string>("");
  const [filteredItems, setFilteredItems] = useState<T[]>([]);
  const [aggregationData, setAggregationData] = useState<any>({});
  const [isLoading, setLoading] = useState<boolean>(true);

  const aggregate = (keywords?: string) => {
    if (aggregationSettings?.length) {
      const aggregateResult = itemsjs.search({
        per_page: 0, // only return aggregation data
        query: keywords,
      });
      setAggregationData(aggregateResult.data.aggregations);
    }
  };

  const search = (params?: any, updateUrl: boolean = true) => {
    const searchParams = {
      sort: defaultSort ? defaultSort : "default",
      per_page: 10000, // return all data, assuming less than 10000
      ...params,
    };
    const searchResult: any = itemsjs.search(searchParams);
    setFilteredItems(searchResult.data.items as T[]);
    setLoading(false);

    if (updateUrl) {
      const queryParams = [];
      const { query, filters, sort } = searchParams;
      if (query) queryParams.push(`q=${query}`);
      if (filters) {
        Object.keys(filters as {}).forEach((filter) => {
          if (filters[filter].length) {
            const filterValue = filters[filter][0];
            queryParams.push(`${filter}=${filterValue}`);
          }
        });
      }
      if (sort && sort != defaultSort && sort != "default") {
        queryParams.push(`sort=${sort}`);
      }
      const newPath =
        window.location.pathname +
        (queryParams.length ? `?${queryParams.join("&")}` : "");
      void Router.push(newPath, undefined, { shallow: true });
    }
  };

  useEffect(() => {
    setLoading(true);
    const queryParams = getQueryParams(window.location.search);
    if (Object.keys(queryParams).length) {
      let keywordsParam: string = "";
      const filtersParam: any = {};
      const searchParams: any = {};
      const aggregationFields =
        aggregationSettings?.map((cur) => cur.field) ?? [];
      Object.entries(queryParams).forEach(([key, value]) => {
        if (key == "q") {
          keywordsParam = value as string;
          if (keywordsParam) {
            searchParams.query = keywordsParam;
            setLastKeywords(keywordsParam);
          }
        } else if (key == "sort") {
          const sortParam: string = value as string;
          if (sortParam) {
            searchParams.sort = sortParam;
          }
        } else if (aggregationFields.includes(key)) {
          filtersParam[key] = value ? [value] : [];
        }
      });
      if (Object.keys(filtersParam as {}).length) {
        searchParams.filters = filtersParam;
      }
      setInitialParams(searchParams);
      search(searchParams, false);
      aggregate(keywordsParam);
    } else {
      setInitialParams({});
      setFilteredItems(items);
      setLoading(false);
      aggregate();
    }
  }, [items]);

  const handleSubmitKeywords = (
    keywords: string,
    filters?: any,
    sort_by?: string,
  ) => {
    const params = {
      query: keywords,
      filters,
      ...(sort_by ? { sort: sort_by } : {}),
    };
    search(params);
    if (keywords != lastKeywords) {
      aggregate(keywords);
      setLastKeywords(keywords);
    }
  };

  return [
    filteredItems,
    handleSubmitKeywords,
    initialParams,
    aggregationData,
    isLoading,
  ] as const;
}
