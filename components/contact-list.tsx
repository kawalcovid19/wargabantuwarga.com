/* This example requires Tailwind CSS v2.0+ */
import {
  BadgeCheckIcon,
  LocationMarkerIcon,
  PhoneIcon,
} from "@heroicons/react/solid";
import { BadgeCheckIcon as BadgeCheckIconUnverified } from "@heroicons/react/outline";
import { Contact } from "../lib/provinces";
import Link from "next/link";

type ContactListProps = {
  data: Contact[];
  provinceSlug: string;
};

export function ContactList(props: ContactListProps) {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul className="divide-y divide-gray-200">
        {props.data.map((contact, index) => (
          <li key={index}>
            <Link href={`/provinces/${props.provinceSlug}/${index}`}>
              <a className="block hover:bg-gray-50">
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-blue-600 truncate">
                      {contact.penyedia || contact.keterangan}
                    </p>
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
                    {contact.tanggal_verifikasi !== "" ? (
                      <div className="mt-2 mb-3 flex items-center text-xs text-gray-500 sm:my-0">
                        <BadgeCheckIcon
                          className="flex-shrink-0 h-4 w-4 sm:order-2 text-green-400"
                          aria-hidden="true"
                        />
                        <p className="ml-2 mr-1">
                          Terverifikasi{" "}
                          {contact.tanggal_verifikasi && (
                            <time dateTime={contact.tanggal_verifikasi}>
                              {contact.tanggal_verifikasi}
                            </time>
                          )}
                        </p>
                      </div>
                    ) : (
                      <div className="mt-2 mb-3 flex items-center text-xs text-gray-400 sm:my-0">
                        <BadgeCheckIconUnverified
                          className="flex-shrink-0 h-4 w-4 sm:order-2 text-gray-400"
                          aria-hidden="true"
                        />
                        <p className="ml-2 mr-1">Belum terverifkasi</p>
                      </div>
                    )}
                  </div>
                  <div className="mt-2 sm:flex sm:justify-between">
                    <p className="flex items-center text-sm text-gray-500">
                      <PhoneIcon
                        className="flex-shrink-0 mr-2 h-4 w-4 text-gray-400"
                        aria-hidden="true"
                      />
                      {contact.kontak}
                    </p>
                  </div>
                  <div className="mt-2 sm:flex sm:justify-between">
                    <div className="sm:flex">
                      {contact.alamat !== "" && (
                        <p className="mt-2 flex items-start text-sm text-gray-500 sm:mt-0">
                          <LocationMarkerIcon
                            className="flex-shrink-0 mr-2 h-4 w-4 text-gray-400"
                            aria-hidden="true"
                          />
                          {contact.alamat}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
