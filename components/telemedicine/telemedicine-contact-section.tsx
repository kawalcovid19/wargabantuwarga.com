import React from "react";

import { InternalPageSection } from "../layout/page";
import { TelemedicineContactCard } from "./telemedicine-contact-card";
import { ContactDetail } from "~/lib/content/telemedicine-contacts";

type TelemedicineProps = {
  telemedicine_contacts: ContactDetail[];
};

export default function TelemedicineContactSection(data: TelemedicineProps) {
  const { telemedicine_contacts } = data;
  return (
    <InternalPageSection className="pb-6 space-y-6">
      <div className="flex-1 min-w-0 mb-5">
        <h1 className="text-xl font-bold leading-7 text-gray-900 sm:text-2xl sm:truncate">
          Jadwal & kontak dokter
        </h1>
      </div>
      <div className="grid grid-cols-none gap-4">
        {telemedicine_contacts.map((contact: ContactDetail, i: number) => (
          <TelemedicineContactCard
            key={i}
            contact={contact.contact}
            doctor_name={contact.doctor_name}
            ops_date={contact.ops_date}
            ops_time={contact.ops_time}
            platform={contact.platform}
          />
        ))}
      </div>
    </InternalPageSection>
  );
}
