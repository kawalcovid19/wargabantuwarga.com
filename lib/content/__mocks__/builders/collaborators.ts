import { build, fake } from "@jackfranklin/test-data-bot";
import { Collaborators, Collaborator } from "~/lib/content/about-page";

export const collaboratorBuilder = build<Collaborator>({
  fields: {
    title: fake((f) => f.lorem.sentence()),
    link_url: fake((f) => f.internet.url()),
    thumbnail_image: fake((f) => f.image.imageUrl()),
  },
});

export const collaboratorsBuilder = build<Collaborators>({
  fields: {
    collaborators: [collaboratorBuilder()],
  },
});
