import telemedicineContacts from "~/_content/telemedicine/telemedicine-contacts.json";

export type Contacts = Contact[];

export type Contact = {
  readonly telemedicine_contacts: ContactDetail[];
};
export type ContactDetail = {
  readonly doctor_name: string;
  readonly ops_date: string;
  readonly ops_time: string;
  readonly platform: string;
  readonly contact: string;
};

export default telemedicineContacts as unknown as Contact;
