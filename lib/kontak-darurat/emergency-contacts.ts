import emergencyContacts from "~/_content/emergency-contacts.json";

export type Contacts = Contact[];

export type Contact = {
  readonly emergency_contacts: ContactDetail[];
};
export type ContactDetail = {
  readonly name: string;
  readonly url: string;
  readonly image: string;
  readonly description: string;
};

export default emergencyContacts as unknown as Contact;
