import { build, fake } from "@jackfranklin/test-data-bot";
import { Contact, ContactDetail } from "~/lib/content/emergency-contacts";

export const contactDetailBuilder = build<ContactDetail>({
  fields: {
    name: fake((f) => f.lorem.sentence()),
    url: fake((f) => f.internet.url()),
    image: fake((f) => f.image.imageUrl()),
    description: fake((f) => f.lorem.paragraph()),
  },
});

export const contactBuilder = build<Contact>({
  fields: {
    emergency_contacts: [contactDetailBuilder()],
  },
});
