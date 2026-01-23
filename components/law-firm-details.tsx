import clsx from "clsx";
import htmr from "htmr";
import { CopyButton } from "~/components/copy-button";
import { OpenMapButton } from "~/components/open-map-button";
import { LawFirm } from "~/lib/data/law-firms";
import { htmrTransform } from "~/lib/htmr-transformers";
import { autoLinkUrls, isNotEmpty, stripTags } from "~/lib/string-utils";

type LawFirmDetailsProps = {
  lawFirm: LawFirm;
};

type DescriptionItemProps = {
  label: string;
  value?: string;
  withCopyButton?: boolean;
  withOpenMapButton?: boolean;
  withTruncation?: boolean;
};

const DescriptionItem = (props: DescriptionItemProps) => {
  let value = isNotEmpty(props.value) ? (props.value as string) : "";
  // Auto-link URLs for fields that use truncation (typically link fields)
  if (props.withTruncation) {
    value = autoLinkUrls(value);
  }

  return (
    <div className="py-4 px-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
      <dt className="text-sm font-medium text-gray-500">{props.label}</dt>
      <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
        <span
          className={clsx("flex-grow", props.withTruncation ? "truncate" : "")}
        >
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

export function LawFirmDetails({ lawFirm }: LawFirmDetailsProps) {
  return (
    <div className="bg-white shadow overflow-hidden rounded-md">
      <dl className="divide-y divide-gray-200">
        <DescriptionItem label="Nama LBH" value={lawFirm.nama_lbh} />
        <DescriptionItem
          label="Alamat"
          value={lawFirm.alamat}
          withCopyButton
          withOpenMapButton
        />
        <DescriptionItem
          label="Kontak"
          value={lawFirm.nomor_kontak}
          withCopyButton
        />
        <DescriptionItem label="Email" value={lawFirm.email} />
        <DescriptionItem
          label="Website"
          value={lawFirm.website}
          withTruncation
        />
        <DescriptionItem label="Instagram" value={lawFirm.ig} withTruncation />
        <DescriptionItem
          label="Twitter"
          value={lawFirm.twitter}
          withTruncation
        />
        <DescriptionItem
          label="Facebook"
          value={lawFirm.facebook}
          withTruncation
        />
        <DescriptionItem
          label="Link Donasi"
          value={lawFirm.link_donasi}
          withTruncation
        />
        <DescriptionItem
          label="Status Verifikasi"
          value={lawFirm.verifikasi ? "Terverifikasi" : "Belum terverifikasi"}
        />
      </dl>
    </div>
  );
}
