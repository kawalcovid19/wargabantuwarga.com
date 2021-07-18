import { useEffect, useState } from "react";

type AggregationSetting = {
  field: string;
  title: string;
};

export function useSearch<T = unknown[]>(
  items: T[],
  fieldNames: string[],
  aggregationSettings?: AggregationSetting[],
  sortSettings?: any,
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
  if (aggregationSettings) {
    configuration.aggregations = aggregationSettings.reduce(
      (aggregations: any, cur) => {
        aggregations[cur.field] = {
          title: cur.title,
          size: 10,
        };
        return aggregations;
      },
      {},
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const itemsjs = require("itemsjs")(items, configuration);

  const [filteredItems, setFilteredItems] = useState<T[]>(items);
  const [aggregationData, setAggregationData] = useState<any>({});

  const search = (params?: any) => {
    const searchResult: any = itemsjs.search({
      sort: defaultSort ? defaultSort : "default",
      per_page: 10000, // return all data, assuming less than 10000
      ...params,
    });
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    setFilteredItems(searchResult.data.items);
    if (aggregationSettings) {
      const query = params?.query || "";
      const aggregateResult = itemsjs.search({
        sort: defaultSort ? defaultSort : "default",
        per_page: 0, // only return aggregation data
        query,
      });
      const _aggregationData: { [key: string]: any } =
        aggregateResult.data.aggregations;
      Object.keys(_aggregationData).forEach((key) => {
        _aggregationData[key].buckets = _aggregationData[key].buckets
          .filter((cur: { doc_count: number }) => cur.doc_count > 0)
          .sort((a: { key: string }, b: { key: string }) =>
            a.key.localeCompare(b.key),
          );
      });
      setAggregationData(_aggregationData);
    }
  };

  useEffect(() => {
    search();
  }, [items]);

  const handleSubmitKeywords = (keywords: string, filters?: any) => {
    search({ query: keywords, filters });
  };

  return [filteredItems, handleSubmitKeywords, aggregationData] as const;
}
