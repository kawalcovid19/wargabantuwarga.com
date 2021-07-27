import isoman from "~/_content/isoman-page.json";

export type Isoman = Iso[];

export type Iso = {
  readonly isoman_contents: Category[];
};

export type Category = {
  readonly category: string;
  readonly title: string;
  readonly description: string;
  readonly links: URL[];
};

export type URL = {
  readonly title: string;
  readonly url: string;
};

export default isoman as unknown as Iso;
