import { CopyButton } from "../components/copy-button";
import { anchorTransformer } from "../lib/htmr-transformers";
import { Contact } from "../lib/provinces";
import { isNotEmpty, stripTags } from "../lib/string-utils";

import htmr from "htmr";
import { HtmrOptions } from "htmr/src/types";

type ContactDetailsProps = {
  contact: Contact;
  provinceName: string;
};

type DescriptionItemProps = {
  label: string;
  value?: string;
  withCopyButton?: boolean;
};

const DescriptionItem = (props: DescriptionItemProps) => {
  const value = isNotEmpty(props.value) ? (props.value as string) : "";
  const htmrTransform: HtmrOptions["transform"] = {
    a: anchorTransformer,
  };

  return (
    <div className="py-4 px-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
      <dt className="text-sm font-medium text-gray-500">{props.label}</dt>
      <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
        <span className="flex-grow">
          {htmr(value, { transform: htmrTransform })}
        </span>
        {typeof value == "string" &&
          value.length > 0 &&
          props.withCopyButton && <CopyButton text={stripTags(value)} />}
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
        <DescriptionItem label="Kontak" value={contact.kontak} />
        <DescriptionItem label="Alamat" value={contact.alamat} />
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
