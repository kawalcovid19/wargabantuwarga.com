import { useEffect, useState } from "react";

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
          size: 10,
          sort: "term",
          order: "asc",
        };
        return aggregations;
      },
      {},
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const itemsjs = require("itemsjs")(items, configuration);

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
    search({ query: keywords, filters, sort: sort_by });
    if (keywords != lastKeywords) {
      aggregate(keywords);
      setLastKeywords(keywords);
    }
  };

  return [filteredItems, handleSubmitKeywords, aggregationData] as const;
}
