import { CopyButton } from "~/components/copy-button";
import { OpenMapButton } from "~/components/open-map-button";
import { Contact } from "~/lib/data/provinces";
import { htmrTransform } from "~/lib/htmr-transformers";
import { isNotEmpty, stripTags } from "~/lib/string-utils";

import htmr from "htmr";

type ContactDetailsProps = {
  contact: Contact;
  provinceName: string;
};

// ? please don't remove this ReportButton until issue is resolved. - @kalwabed
// reference: https://github.com/kawalcovid19/wargabantuwarga.com/pull/171
// const ReportButton = (props: ReportButtonProps) => (
//   <span className="ml-4 flex-shrink-0">
//     <button
//       className="bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//       onClick={props.onClick}
//       type="button"
//     >
//       Koreksi
//     </button>
//   </span>
// );

type DescriptionItemProps = {
  label: string;
  value?: string;
  withCopyButton?: boolean;
  withOpenMapButton?: boolean;
};

const DescriptionItem = (props: DescriptionItemProps) => {
  const value = isNotEmpty(props.value) ? (props.value as string) : "";

  return (
    <div className="py-4 px-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
      <dt className="text-sm font-medium text-gray-500">{props.label}</dt>
      <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
        <span className="flex-grow">
          {htmr(value, { transform: htmrTransform })}
        </span>
        <div className="flex flex-col items-end space-y-1 flex-none ml-2">
          {typeof value == "string" &&
            value.length > 0 &&
            props.withCopyButton && <CopyButton text={stripTags(value)} />}
          {typeof value == "string" &&
            value.length > 0 &&
            props.withOpenMapButton && (
              <OpenMapButton address={stripTags(value)} />
            )}
        </div>
      </dd>
    </div>
  );
};

export function ContactDetails({ contact }: ContactDetailsProps) {
  return (
    <div className="bg-white shadow overflow-hidden rounded-md">
      <dl className="divide-y divide-gray-200">
        <DescriptionItem label="Penyedia" value={contact.penyedia} />
        <DescriptionItem label="Keterangan" value={contact.keterangan} />
        <DescriptionItem label="Lokasi" value={contact.lokasi} />
        <DescriptionItem label="Kontak" value={contact.kontak} withCopyButton />
        <DescriptionItem
          label="Alamat"
          value={contact.alamat}
          withCopyButton
          withOpenMapButton
        />
        <DescriptionItem label="Tautan" value={contact.link} />
        <DescriptionItem
          label="Terakhir Update"
          value={contact.terakhir_update}
        />
        <DescriptionItem
          label="Bentuk Verifikasi"
          value={contact.bentuk_verifikasi}
        />
        <DescriptionItem
          label="Tambahan Informasi"
          value={contact.tambahan_informasi}
        />
      </dl>
    </div>
  );
}
