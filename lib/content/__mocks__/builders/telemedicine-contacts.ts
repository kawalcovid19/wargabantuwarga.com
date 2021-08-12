import { build, fake } from "@jackfranklin/test-data-bot";
import { Contact, ContactDetail } from "~/lib/content/telemedicine-contacts";

export const contactDetailBuilder = build<ContactDetail>({
  fields: {
    doctor_name: fake((f) => f.lorem.words()),
    ops_date: fake((f) => f.lorem.words()),
    ops_time: fake((f) => f.lorem.words()),
    platform: fake((f) => f.lorem.word()),
    contact: fake((f) => f.lorem.word()),
  },
});

export const contactBuilder = build<Contact>({
  fields: {
    telemedicine_contacts: [contactDetailBuilder()],
  },
});
