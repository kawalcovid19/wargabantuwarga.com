import React from "react";

import { BadgeCheckIcon as BadgeCheckIconUnverified } from "@heroicons/react/outline";
import {
  BadgeCheckIcon,
  LocationMarkerIcon,
  PhoneIcon,
} from "@heroicons/react/solid";
import htmr from "htmr";
import Link from "next/link";
import { CopyButton } from "./copy-button";
import { Badge } from "./ui/badge";
import { OpenMapButton } from "./open-map-button";
import { isNotEmpty, stripTags } from "~/lib/string-utils";
import { getContactMetaTitle } from "~/lib/meta";
import { Contact } from "~/lib/data/provinces";
import { htmrTransform } from "~/lib/htmr-transformers";

interface ContactListItemProps {
  contact: Contact;
  provinceSlug: string;
  provinceName: string;
}

function ContactListItem({
  contact,
  provinceName,
  provinceSlug,
}: ContactListItemProps) {
  return (
    <li>
      <div className="px-4 py-4 sm:px-6 relative hover:bg-gray-50">
        <div className="flex items-center justify-between">
          <Link href={`/provinces/${provinceSlug}/${contact.slug}`}>
            <a
              className="text-sm font-semibold text-blue-600 truncate block helper-link-cover"
              title={getContactMetaTitle(provinceName, contact)}
            >
              {isNotEmpty(contact.penyedia)
                ? contact.penyedia
                : contact.keterangan}
            </a>
          </Link>
          <div className="flex-shrink-0 flex space-x-2">
            {isNotEmpty(contact.ketersediaan) && (
              <Badge
                color={contact.ketersediaan === "Tersedia" ? "green" : "red"}
              >
                {contact.ketersediaan}
              </Badge>
            )}
            <Badge color="yellow">{contact.kebutuhan}</Badge>
          </div>
        </div>
        <div className="mt-2 sm:flex sm:justify-between">
          <p className="text-sm font-medium text-gray-600 truncate">
            {contact.keterangan}
          </p>
          {isNotEmpty(contact.terakhir_update) ? (
            <div className="mt-2 mb-3 flex items-center text-xs text-gray-500 sm:my-0">
              <BadgeCheckIcon
                aria-hidden="true"
                className="flex-shrink-0 h-4 w-4 sm:order-2 text-green-400"
              />
              <p className="ml-2 mr-1">
                Terverifikasi{" "}
                {contact.terakhir_update && (
                  <time dateTime={contact.terakhir_update}>
                    {contact.terakhir_update}
                  </time>
                )}
              </p>
            </div>
          ) : (
            <div className="mt-2 mb-3 flex items-center text-xs text-gray-400 sm:my-0">
              <BadgeCheckIconUnverified
                aria-hidden="true"
                className="flex-shrink-0 h-4 w-4 sm:order-2 text-gray-400"
              />
              <p className="ml-2 mr-1">Belum terverifkasi</p>
            </div>
          )}
        </div>
        {isNotEmpty(contact.kontak) && (
          <div className="mt-2 flex justify-between w-full">
            <p className="flex items-center text-sm text-gray-500">
              <PhoneIcon
                aria-hidden="true"
                className="flex-shrink-0 mr-2 h-4 w-4 text-gray-400"
              />
              {htmr(contact.kontak as string, {
                transform: htmrTransform,
              })}
            </p>
            {typeof contact.kontak == "string" && (
              <CopyButton text={stripTags(contact.kontak)} />
            )}
          </div>
        )}
        {isNotEmpty(contact.alamat) && (
          <div className="mt-2 flex justify-between w-full">
            <p className="mt-2 flex items-start text-sm text-gray-500 sm:mt-0">
              <LocationMarkerIcon
                aria-hidden="true"
                className="flex-shrink-0 mr-2 h-4 w-4 text-gray-400"
              />
              {htmr(contact.alamat as string, {
                transform: htmrTransform,
              })}
            </p>
            <div className="flex flex-col items-end space-y-1 flex-none ml-2">
              {typeof contact.alamat == "string" && (
                <CopyButton text={stripTags(contact.alamat)} />
              )}
              {typeof contact.alamat == "string" && (
                <OpenMapButton address={stripTags(contact.alamat)} />
              )}
            </div>
          </div>
        )}
      </div>
    </li>
  );
}

const _ContactListItem = React.memo(ContactListItem);

export { _ContactListItem as ContactListItem };
