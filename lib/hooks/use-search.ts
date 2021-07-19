import { useEffect, useState } from "react";

import ItemsJS from "itemsjs";

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

  const [lastKeywords, setLastKeywords] = useState<string>("");
  const [filteredItems, setFilteredItems] = useState<T[]>(items);
  const [aggregationData, setAggregationData] = useState<any>({});

  const aggregate = (keywords?: string) => {
    if (aggregationSettings?.length) {
      const aggregateResult = itemsjs.search({
        per_page: 0, // only return aggregation data
        query: keywords,
      });
      const _aggregationData: { [key: string]: any } =
        aggregateResult.data.aggregations;
      Object.keys(_aggregationData).forEach((key) => {
        _aggregationData[key].buckets = _aggregationData[key].buckets.filter(
          (cur: { doc_count: number }) => cur.doc_count > 0,
        );
      });
      setAggregationData(_aggregationData);
    }
  };

  const search = (params?: any) => {
    const searchResult: any = itemsjs.search({
      sort: defaultSort ? defaultSort : "default",
      per_page: 10000, // return all data, assuming less than 10000
      ...params,
    });
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    setFilteredItems(searchResult.data.items);
  };

  useEffect(() => {
    aggregate();
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

  return [filteredItems, handleSubmitKeywords, aggregationData] as const;
}
