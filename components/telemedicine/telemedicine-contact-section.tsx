import React from "react";

import { TelemedicineContactCard } from "./telemedicine-contact-card";
import { ContactDetail } from "~/lib/content/emergency-contacts";

type KontakDaruratProps = {
  emergency_contacts: ContactDetail[];
};

export default function TelemedicineContactSection(data: KontakDaruratProps) {
  const { emergency_contacts } = data;
  return (
    <div className="p-4 overflow-hidden space-y-6 bg-white">
      <div className="flex-1 min-w-0">
        <h1 className="text-xl font-bold leading-7 text-gray-900 sm:text-2xl sm:truncate">
          Jadwal & kontak dokter
        </h1>
      </div>
      <div className="grid grid-cols-none gap-4">
        {emergency_contacts.map((contact: ContactDetail, i: number) => (
          <TelemedicineContactCard
            key={i}
            description={contact.description}
            image={contact.image}
            name={contact.name}
            url={contact.url}
          />
        ))}
      </div>
    </div>
  );
}
