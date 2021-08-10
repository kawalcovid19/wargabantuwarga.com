import videosJson from "~/_content/about/videos.json";
import collaboratorsJson from "~/_content/about/collaborators.json";

import { attributes, html } from "~/_content/about/content.md";

export type Video = {
  readonly title: string;
  readonly video_url: string;
  readonly thumbnail_image: string;
};

export type Videos = {
  readonly videos: Video[];
};

export type Collaborator = {
  readonly title: string;
  readonly link_url: string;
  readonly thumbnail_image: string;
};

export type Collaborators = {
  readonly collaborators: Collaborator[];
};

export const videos = videosJson as unknown as Videos;
export const collaborators = collaboratorsJson as unknown as Collaborators;
export const content = { attributes, html };
