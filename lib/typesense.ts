import TypesenseInstantSearchAdapter from "typesense-instantsearch-adapter";

export function typesenseSearch({
  queryBy,
  defaultSort,
}: {
  queryBy: string[];
  defaultSort?: string;
}) {
  const searchAdapter = new TypesenseInstantSearchAdapter({
    server: {
      apiKey: "FByczfHEjsTCihgkkYlq2YbAgUKMoyVP", // Be sure to use the search-only-api-key
      nodes: [
        {
          host: "public-api.trustmedis.id",
          port: "443",
          protocol: "https",
        },
      ],
    },
    additionalSearchParameters: {
      queryBy: queryBy.join(),
      sortBy: defaultSort ? defaultSort : "",
    },
  });
  return searchAdapter.searchClient;
}
