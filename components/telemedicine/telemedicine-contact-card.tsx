import React from "react";

import { PrimaryAnchorButton } from "~/components/ui/button";
import { ContactDetail } from "~/lib/content/emergency-contacts";

export function TelemedicineContactCard(contact: ContactDetail) {
  return (
    <div className="flex flex-col shadow-md rounded-md overflow-hidden">
      <div className="flex-shrink-0 py-2 px-3 md:p-4">
        <img
          alt={`kontak darurat covid ${contact.name}`}
          className="h-24 object-scale-down w-full"
          src={contact.image}
        />
      </div>
      <div className="p-3 text-xs space-y-1 h-0 flex-1">
        <p className="text-gray-500">{contact.name}</p>
        <h3 className="font-semibold text-gray-700 text-xs">
          {contact.description}
        </h3>
      </div>
      <div className="p-3 justify-center">
        <PrimaryAnchorButton
          block
          className="bg-light-blue-400 font-normal focus:bg-light-blue hover:bg-light-blue-600 text-white"
          color="none"
          data-testid={`contact-button-${contact.name}`}
          href={contact.url}
          rel="nofollow noopener noreferrer"
          rounded
          size="xs"
          target="_blank"
        >
          Cek Sekarang
        </PrimaryAnchorButton>
      </div>
    </div>
  );
}
