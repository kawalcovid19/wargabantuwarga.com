import React from "react";

import { ExternalLinkIcon } from "@heroicons/react/solid";
import { TelekonselingDetail } from "~/lib/content/telekonseling";

export function TelekonselingCard(konseling: TelekonselingDetail) {
  return (
    <div className="flex flex-col m-4 border-b border-gray-200">
      <div className="flex flex-row justify-between">
        <h1 className="text-base leading-6 font-medium mb-2">
          {`${konseling.jenislayanan} dari ${konseling.penyelenggara} ${
            konseling.kontak === "" ? "" : "Chat Whatsapp Ke Nomor"
          } ${konseling.kontak}`}
        </h1>
        <a href={konseling.url} rel="noreferrer" target="_blank">
          <ExternalLinkIcon className="h-6 w-6 text-blue-500" />
        </a>
      </div>
    </div>
  );
}
