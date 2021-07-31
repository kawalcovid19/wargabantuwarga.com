import isolasiMandiri from "~/_content/isolasi-mandiri.json";

export type Isoman = IsolasiMandiri[];

export type IsolasiMandiri = {
  readonly categories: Category[];
};

export type Category = {
  readonly title: string;
  readonly description: string;
  readonly links: URL[];
};

export type URL = {
  readonly title: string;
  readonly url: string;
};

export default isolasiMandiri as unknown as IsolasiMandiri;
