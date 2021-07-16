import { Contact } from "../lib/database";

type ContactDetailsProps = {
  contact: Contact;
  provinceName: string;
};

const ReportButton = () => (
  <span className="ml-4 flex-shrink-0">
    <button
      type="button"
      className="bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Laporkan kesalahan
    </button>
  </span>
);

type DescriptionItemProps = {
  label: string;
  value?: string;
};

const DescriptionItem = (props: DescriptionItemProps) => (
  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-4 sm:gap-4">
    <dt className="text-sm font-medium text-gray-500">{props.label}</dt>
    <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-3">
      <span className="flex-grow">{props.value}</span>
      <ReportButton />
    </dd>
  </div>
);

type DescriptionLinkProps = {
  label: string;
  value?: string;
};

const DescriptionLink = (props: DescriptionLinkProps) =>
  props.value ? (
    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-4 sm:gap-4">
      <dt className="text-sm font-medium text-gray-500">{props.label}</dt>
      <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-3">
        <a
          href={props.value}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-grow"
        >
          {props.value}
        </a>
        <ReportButton />
      </dd>
    </div>
  ) : null;

export function ContactDetails({ contact, provinceName }: ContactDetailsProps) {
  return (
    <>
      <div>
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          {provinceName}
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          {contact.kebutuhan}
        </p>
      </div>
      <div className="mt-5 border-t border-gray-200">
        <dl className="divide-y divide-gray-200">
          <DescriptionItem label="Penyedia" value={contact.penyedia} />
          <DescriptionItem label="Keterangan" value={contact.keterangan} />
          <DescriptionItem label="Lokasi" value={contact.lokasi} />
          <DescriptionItem label="Kontak" value={contact.kontak} />
          <DescriptionItem label="Alamat" value={contact.alamat} />
          <DescriptionLink label="Tautan" value={contact.tautan} />
          <DescriptionItem
            label="Tanggal Verifikasi"
            value={contact.tanggal_verifikasi}
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
    </>
  );
}
