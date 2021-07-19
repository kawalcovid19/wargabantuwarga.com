import { CopyButton } from "../components/copy-button";
import { anchorTransformer } from "../lib/htmr-transformers";
import { Contact } from "../lib/provinces";
import { isNotEmpty } from "../lib/string-utils";

import { BadgeCheckIcon as BadgeCheckIconUnverified } from "@heroicons/react/outline";
import {
  BadgeCheckIcon,
  LocationMarkerIcon,
  PhoneIcon,
} from "@heroicons/react/solid";
import htmr from "htmr";
import { HtmrOptions } from "htmr/src/types";
import Link from "next/link";

type ContactListProps = {
  data: Contact[];
  provinceSlug: string;
};

export function ContactList(props: ContactListProps) {
  const htmrTransform: HtmrOptions["transform"] = {
    a: anchorTransformer,
  };

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul className="divide-y divide-gray-200">
        {props.data.map((contact, index) => (
          <li key={index}>
            <div className="px-4 py-4 sm:px-6 relative hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <Link href={`/provinces/${props.provinceSlug}/${contact.slug}`}>
                  <a className="text-sm font-semibold text-blue-600 truncate block helper-link-cover">
                    {isNotEmpty(contact.penyedia)
                      ? contact.penyedia
                      : contact.keterangan}
                  </a>
                </Link>
                <div className="ml-2 flex-shrink-0 flex">
                  <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    {contact.kebutuhan}
                  </p>
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
                <div className="mt-2 sm:flex sm:justify-between">
                  <p className="flex items-center text-sm text-gray-500">
                    <PhoneIcon
                      aria-hidden="true"
                      className="flex-shrink-0 mr-2 h-4 w-4 text-gray-400"
                    />
                    {htmr(contact.kontak as string, {
                      transform: htmrTransform,
                    })}
                    <CopyButton text={contact.kontak} />
                    {/* {typeof contact.kontak == "string" && (
                    )} */}
                  </p>
                </div>
              )}
              {isNotEmpty(contact.alamat) && (
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                    <p className="mt-2 flex items-start text-sm text-gray-500 sm:mt-0">
                      <LocationMarkerIcon
                        aria-hidden="true"
                        className="flex-shrink-0 mr-2 h-4 w-4 text-gray-400"
                      />
                      {htmr(contact.alamat as string, {
                        transform: htmrTransform,
                      })}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
