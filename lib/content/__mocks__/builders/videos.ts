import { build, fake } from "@jackfranklin/test-data-bot";
import { Videos, Video } from "~/lib/content/about-page";

export const videoBuilder = build<Video>({
  fields: {
    title: fake((f) => f.lorem.sentence()),
    video_url: fake((f) => f.internet.url()),
    thumbnail_image: fake((f) => f.image.imageUrl()),
  },
});

export const videosBuilder = build<Videos>({
  fields: {
    videos: [videoBuilder()],
  },
});
