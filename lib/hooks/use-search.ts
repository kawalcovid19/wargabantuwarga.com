import { useEffect, useState } from "react";
import Router from "next/router";
import ItemsJS from "itemsjs";
import { getQueryParams } from "../string-utils";

type AggregationSetting = {
  field: string;
  title: string;
};

export function useSearch<T = unknown[]>({
  items,
  fieldNames,
  aggregationSettings,
  sortSettings,
  defaultSort,
}: {
  items: T[];
  fieldNames: string[];
  aggregationSettings?: AggregationSetting[];
  sortSettings?: {};
  defaultSort?: string;
}) {
  const configuration: any = {
    searchableFields: fieldNames,
    isExactSearch: true,
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
    if (searchParams.filter) {
      delete searchParams.filters;
    }
    const searchResult: any = itemsjs.search(searchParams);
    setFilteredItems(searchResult.data.items as T[]);
    setLoading(false);

    if (updateUrl) {
      const queryParams: string[] = [];
      const { query, filters, sort } = searchParams;
      const urlParams: { [key: string]: string } = getQueryParams(
        window.location.search,
      );
      Object.keys(urlParams).forEach((key) => {
        if (
          key !== "q" &&
          key !== "sort" &&
          !Object.keys(filters as {}).includes(key)
        ) {
          queryParams.push(`${key}=${urlParams[key]}`);
        }
      });
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
          keywordsParam = value;
          if (keywordsParam) {
            searchParams.query = keywordsParam;
            setLastKeywords(keywordsParam);
          }
        } else if (key == "sort") {
          const sortParam: string = value;
          if (sortParam) {
            searchParams.sort = sortParam;
          }
        } else if (aggregationFields.includes(key)) {
          filtersParam[key] = value ? [value] : [];
        }
      });
      if (Object.keys(filtersParam as {}).length) {
        searchParams.filters = filtersParam;
        searchParams.filter = (item: { [key: string]: string }) => {
          return Object.keys(filtersParam as {}).reduce((acc, key) => {
            acc = acc && item[key] == filtersParam[key];
            return acc;
          }, true);
        };
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
