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
import { htmrTransform } from "~/lib/htmr-transformers";
import { LawFirm } from "~/lib/data/law-firms";

interface LawFirmListItemProps {
  lawFirm: LawFirm;
}

function LawFirmListItem({ lawFirm }: LawFirmListItemProps) {
  return (
    <li>
      <div className="px-4 py-4 sm:px-6 relative hover:bg-gray-50">
        <div className="flex items-center justify-between">
          <Link href={`/lbh/${lawFirm.slug}`}>
            <a
              className="text-sm font-semibold text-blue-600 truncate block helper-link-cover"
              title={lawFirm.nama_lbh}
            >
              {lawFirm.nama_lbh}
            </a>
          </Link>
          <div className="flex-shrink-0 flex space-x-2">
            <Badge color="yellow">Lembaga Bantuan Hukum</Badge>
          </div>
        </div>
        <div className="mt-2 sm:flex sm:justify-between">
          <p className="text-sm font-medium text-gray-600 truncate">
            {lawFirm.email}
          </p>
          {lawFirm.verifikasi ? (
            <div className="mt-2 mb-3 flex items-center text-xs text-gray-500 sm:my-0">
              <BadgeCheckIcon
                aria-hidden="true"
                className="flex-shrink-0 h-4 w-4 sm:order-2 text-green-400"
              />
              <p className="ml-2 mr-1">Terverifikasi</p>
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
        {isNotEmpty(lawFirm.nomor_kontak) && (
          <div className="mt-2 flex justify-between w-full">
            <p className="flex items-center text-sm text-gray-500">
              <PhoneIcon
                aria-hidden="true"
                className="flex-shrink-0 mr-2 h-4 w-4 text-gray-400"
              />
              {htmr(lawFirm.nomor_kontak as string, {
                transform: htmrTransform,
              })}
            </p>
            {typeof lawFirm.nomor_kontak == "string" && (
              <CopyButton text={stripTags(lawFirm.nomor_kontak)} />
            )}
          </div>
        )}
        {isNotEmpty(lawFirm.alamat) && (
          <div className="mt-2 flex justify-between w-full">
            <p className="mt-2 flex items-start text-sm text-gray-500 sm:mt-0">
              <LocationMarkerIcon
                aria-hidden="true"
                className="flex-shrink-0 mr-2 h-4 w-4 text-gray-400"
              />
              {htmr(lawFirm.alamat as string, {
                transform: htmrTransform,
              })}
            </p>
            <div className="flex flex-col items-end space-y-1 flex-none ml-2">
              {typeof lawFirm.alamat == "string" && (
                <CopyButton text={stripTags(lawFirm.alamat)} />
              )}
              {typeof lawFirm.alamat == "string" && (
                <OpenMapButton address={stripTags(lawFirm.alamat)} />
              )}
            </div>
          </div>
        )}
      </div>
    </li>
  );
}

const _LawFirmListItem = React.memo(LawFirmListItem);

export { _LawFirmListItem as LawFirmListItem };
