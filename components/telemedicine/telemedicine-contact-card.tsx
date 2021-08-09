import { ChatAlt2Icon, ClockIcon } from "@heroicons/react/solid";
import React from "react";

import { PrimaryAnchorButton } from "~/components/ui/button";
import { ContactDetail } from "~/lib/content/telemedicine-contacts";
import { getContactLink } from "~/lib/home/get-contact-link";

export function TelemedicineContactCard(contact: ContactDetail) {
  return (
    <div className="flex flex-col shadow-md rounded-md overflow-hidden">
      <div className="flex justify-content-between">
        <div className="flex-shrink-0 py-2 px-3 md:p-4">
          <img
            alt={`kontak dokter ${contact.doctor_name}`}
            className="h-24 w-24 rounded-full"
            src="https://i.pravatar.cc"
          />
        </div>
        <div className="p-3 text-xs space-y-1 h-0 flex-1">
          <p className="font-semibold text-gray-700">{contact.doctor_name}</p>
          <div className="mt-2 flex justify-between w-full">
            <p className="flex items-center text-sm text-gray-500">
              <ClockIcon
                aria-hidden="true"
                className="flex-shrink-0 mr-2 h-4 w-4 text-gray-400"
              />
              {`${contact.ops_date} • ${contact.ops_time}`}
            </p>
          </div>
          <div className="mt-2 flex justify-between w-full">
            <p className="flex items-center text-sm text-gray-500">
              <ChatAlt2Icon
                aria-hidden="true"
                className="flex-shrink-0 mr-2 h-4 w-4 text-gray-400"
              />
              {contact.platform}
            </p>
          </div>
        </div>
      </div>
      <div className="p-3 justify-center">
        <PrimaryAnchorButton
          block
          className="bg-light-blue-400 font-normal focus:bg-light-blue hover:bg-light-blue-600 text-white"
          color="none"
          data-testid={`contact-button-${contact.doctor_name}`}
          href={getContactLink(contact.platform, contact.contact)}
          rel="nofollow noopener noreferrer"
          rounded
          size="xs"
          target="_blank"
        >
          Hubungi
        </PrimaryAnchorButton>
      </div>
    </div>
  );
}
