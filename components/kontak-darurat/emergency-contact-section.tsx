import React from "react";

import {
  PrimaryAnchorButton,
  SecondaryAnchorButton,
} from "~/components/ui/button";
import { PhoneIcon } from "~/components/ui/icons";
import { ContactDetail } from "~/lib/kontak-darurat/emergency-contacts";

import { EmergencyContactCard } from "./emergency-contact-card";

type KontakDaruratProps = {
  emergency_contacts: ContactDetail[];
};

export default function EmergencyContactSection(data: KontakDaruratProps) {
  const { emergency_contacts } = data;
  return (
    <div className="p-4 overflow-hidden rounded-md space-y-6 bg-white">
      <div>
        <div className="text-sm text-gray-600 mb-4">
          Kumpulan informasi situs dan kontak penting terkait fasilitas serta
          alat kesehatan untuk COVID-19 di level nasional.
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {emergency_contacts.map((contact: ContactDetail, i: number) => (
          <EmergencyContactCard
            key={i}
            description={contact.description}
            image={contact.image}
            name={contact.name}
            url={contact.url}
          />
        ))}
      </div>
      <div className="space-y-4 text-center">
        <h2 className="text-gray-800 text-sm font-semibold">
          Cari kontak penyedia faskes secara detail perprovinsi se-Indonesia
        </h2>
        <div className="space-y-3.5">
          <PrimaryAnchorButton
            block
            className="bg-brand hover:bg-brand-600 text-white"
            color="none"
            href="/provinces"
            rel="nofollow noopener noreferrer"
            rounded
            size="lg"
            target="_blank"
          >
            Telusuri Sekarang
          </PrimaryAnchorButton>
          <SecondaryAnchorButton
            block
            className="text-brand"
            href="tel:119"
            icon={PhoneIcon}
            rel="nofollow noopener noreferrer"
            rounded
            size="lg"
            target="_blank"
          >
            Hubungi 119 ext. 9
          </SecondaryAnchorButton>
        </div>
        <div>
          <p className="text-gray-500 text-xs">Hotline Kementerian Kesehatan</p>
        </div>
      </div>
    </div>
  );
}
