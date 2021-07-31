export type LatestNewsItemAttributes = {
  title: string;
  date: string;
  link: string;
  link_text: string;
};

export interface LatestNewsItem {
  attributes: LatestNewsItemAttributes;
  html: string;
}
