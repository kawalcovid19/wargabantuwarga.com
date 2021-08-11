declare module "typesense-instantsearch-adapter" {
  type SearchClient = object;

  export interface TypesenseNode {
    host: string;
    port: string;
    protocol: string;
  }

  export interface TypesenseSearchParameters {
    queryBy: string;
    sortBy?: string;
    highlightFullFields?: string;
  }

  export interface TypesenseServer {
    apiKey: string;
    nodes: TypesenseNode[];
  }

  export interface TypesenseInstantsearchAdapterOptions {
    server?: TypesenseServer;
    additionalSearchParameters: TypesenseSearchParameters;
  }

  export default class TypesenseInstantsearchAdapter {
    readonly searchClient: SearchClient;

    constructor(options: TypesenseInstantsearchAdapterOptions);
  }
}
