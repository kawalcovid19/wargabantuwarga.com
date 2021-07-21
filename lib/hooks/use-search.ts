import { useEffect, useState } from "react";

import { getQueryParams } from "../string-utils";

import Fuse from "fuse.js";
import Router from "next/router";

type AggregationData = {
  [key: string]: {
    title: string;
    buckets: {
      key: string;
      doc_count: number;
    }[];
  };
};

type AggregationSetting = {
  field: string;
  title: string;
};

type SortSettings = {
  [key: string]: {
    field: string;
    order: string;
  };
};

export function useSearch<T = unknown[]>(
  items: T[],
  fieldNames: string[],
  aggregationSettings?: AggregationSetting[],
  sortSettings?: SortSettings,
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

  const itemsIndex = Fuse.createIndex(fieldNames, items);
  const fuse = new Fuse(
    items,
    { shouldSort: false, keys: fieldNames, useExtendedSearch: true },
    itemsIndex,
  );

  const [initialParams, setInitialParams] = useState<any>({});
  const [lastKeywords, setLastKeywords] = useState<string>("");
  const [filteredItems, setFilteredItems] = useState<T[]>([]);
  const [aggregationData, setAggregationData] = useState<any>({});

  const sortResult = (result_items: T[], sort_by: string) => {
    // TODO: fix ordering
    console.log(sort_by);
    /*
    const sortFields = sortSettings ? Object.keys(sortSettings) : [];

    if (sortSettings) {
      if (sortFields.includes(sort_by)) {
        const sortSetting = sortSettings[sort_by];
        const { field, order } = sortSetting;
        return result_items.sort((a, b) => {
          if (order == "desc") {
            return (a[field]).localCompare(b[field]);
          } else {
            return b[field].localCompare(a[field]);
          }
        });
      }
    }
    */
    return result_items;
  };

  const fuseSearch = (params?: any): T[] => {
    const { query, filters, sort } = params;
    const searchParams = [];
    if (query) searchParams.push(query);
    if (filters && Object.keys(filters as {}).length) {
      Object.keys(filters as {}).forEach((filter) => {
        if (filters[filter][0]) {
          searchParams.push({ [filter]: `=${filters[filter][0]}` });
        }
      });
    }
    let result;
    // TODO: fix query
    if (searchParams.length) {
      const searchQuery =
        searchParams.length > 1
          ? { $and: searchParams }
          : (searchParams[0] as string | {});
      console.log(searchQuery);
      result = fuse.search(searchQuery).map((row) => row.item);
    } else {
      result = items;
    }
    console.log(result);
    return sortResult(result, sort as string);
  };

  const aggregate = (keywords?: string) => {
    if (aggregationSettings?.length) {
      /*
      const aggregateResult = itemsjs.search({
        per_page: 0, // only return aggregation data
        query: keywords,
      });
      setAggregationData(aggregateResult.data.aggregations);
      */
      // TODO: optimize logic, ordering
      const aggregationFields: string[] = [];
      const aggregateResult = fuseSearch({ query: keywords });
      const _aggregationData: AggregationData = {};
      aggregationSettings.forEach((setting) => {
        const { title, field } = setting;
        aggregationFields.push(field);
        _aggregationData[field] = { title, buckets: [] };
      });
      const _temp = aggregateResult.reduce(
        (acc: { [key: string]: { [key: string]: number } }, row: any) => {
          aggregationFields.forEach((field) => {
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
            if (!acc[field]) {
              acc[field] = {};
            }
            if (!acc[field][row[field]]) {
              acc[field][row[field]] = 0;
            }
            acc[field][row[field]] += 1;
          });
          return acc;
        },
        {},
      );
      const aggData = Object.entries(_temp).reduce((acc, [field, counter]) => {
        Object.entries(counter).forEach(([value, count]) => {
          acc[field].buckets.push({ key: value, doc_count: count });
        });
        return acc;
      }, _aggregationData);
      console.log(aggData);
      setAggregationData(aggData);
    }
  };

  const search = (params?: any, updateUrl: boolean = true) => {
    const searchParams = {
      sort: defaultSort ? defaultSort : "default",
      per_page: 10000, // return all data, assuming less than 10000
      ...params,
    };
    //const searchResult: any = itemsjs.search(searchParams);
    //setFilteredItems(searchResult.data.items as T[]);
    const searchResult = fuseSearch(searchParams);
    setFilteredItems(searchResult);

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
  ] as const;
}
