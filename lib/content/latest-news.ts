type LatestNewsItemAttributes = {
  title: string;
  date: string;
  description?: string;
} & ({ link: string; link_text: string } | { link?: never });

export interface LatestNewsItem {
  attributes: LatestNewsItemAttributes;
  html: string;
}
