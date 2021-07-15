/* This example requires Tailwind CSS v2.0+ */
import {
  BadgeCheckIcon,
  LocationMarkerIcon,
  PhoneIcon,
} from "@heroicons/react/solid";
import { BadgeCheckIcon as BadgeCheckIconUnverified } from "@heroicons/react/outline";
import { ProvinceData } from "../lib/database";

type ContactListProps = {
  data: ProvinceData[];
};

export function ContactList(props: ContactListProps) {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul className="divide-y divide-gray-200">
        {props.data.map((contact, index) => (
          <li key={index}>
            <a href="#" className="block hover:bg-gray-50">
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
                    <div className="mt-2 flex items-center text-xs text-gray-500 sm:mt-0">
                      <p>
                        Terverifikasi pada{" "}
                        <time dateTime={contact.tanggal_verifikasi}>
                          {contact.tanggal_verifikasi}
                        </time>
                      </p>
                      <BadgeCheckIcon
                        className="flex-shrink-0 ml-1.5 h-5 w-5 text-green-400"
                        aria-hidden="true"
                      />
                    </div>
                  ) : (
                    <div className="mt-2 flex items-center text-xs text-gray-400 sm:mt-0">
                      <p>Belum terverifkasi</p>
                      <BadgeCheckIconUnverified
                        className="flex-shrink-0 ml-1.5 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                  )}
                </div>
                <div className="mt-2 sm:flex sm:justify-between">
                  <p className="flex items-center text-sm text-gray-500">
                    <PhoneIcon
                      className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    {contact.kontak}
                  </p>
                </div>
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                    {contact.alamat !== "" && (
                      <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                        <LocationMarkerIcon
                          className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        {contact.alamat}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
