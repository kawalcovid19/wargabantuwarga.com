import videosJson from "~/_content/about/videos.json";

export type Video = {
  readonly title: string;
  readonly video_url: string;
  readonly thumbnail_image: string;
};

export type Videos = {
  readonly videos: Video[];
};

export default videosJson as unknown as Videos;
