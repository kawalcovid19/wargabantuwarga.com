import isolasiMandiri from "~/_content/isolasi-mandiri.json";

export type Isoman = IsolasiMandiri[];

export type IsolasiMandiri = {
  readonly content_items: ContentItem[];
};

export type ContentItem = {
  readonly category: string;
  readonly title: string;
  readonly description: string;
  readonly links: URL[];
};

export type URL = {
  readonly title: string;
  readonly url: string;
};

export default isolasiMandiri as unknown as IsolasiMandiri;
