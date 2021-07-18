import { Contact } from "../lib/provinces";

type ContactDetailsProps = {
  contact: Contact;
  provinceName: string;
};

type ReportButtonProps = {
  onClick: () => void;
};

//  TODO: Integrate this button with a pre-filled Google Forms URL
const ReportButton = (props: ReportButtonProps) => (
  <span className="ml-4 flex-shrink-0">
    <button
      className="bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      onClick={props.onClick}
      type="button"
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
    </dd>
  </div>
);

type DescriptionLinkProps = {
  label: string;
  value?: string;
  contact: Contact;
};

const DescriptionLink = (props: DescriptionLinkProps) => {
  const { lokasi, keterangan, penyedia, kontak } = props.contact;
  const baseFormUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSeDdZLMD9RTfOiKMItNb8542KAO5w3x9O2ZFQmNyff1rYRZvQ/viewform?usp=pp_url";
  const formValue = `&entry.346789668=${keterangan}&entry.323081545=${lokasi}&entry.68818336=${penyedia}&entry.217416134=${kontak}&entry.11952303=`;

  const reportButtonHandler = () => {
    window.open(baseFormUrl.concat(encodeURI(formValue)), "_blank");
  };

  return props.value ? (
    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-4 sm:gap-4">
      <dt className="text-sm font-medium text-gray-500">{props.label}</dt>
      <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-3">
        <a
          className="flex-grow"
          href={props.value}
          rel="noopener noreferrer"
          target="_blank"
        >
          {props.value}
        </a>
        <ReportButton onClick={reportButtonHandler} />
      </dd>
    </div>
  ) : null;
};

export function ContactDetails({ contact }: ContactDetailsProps) {
  return (
    <div className="mt-5 border-t border-gray-200">
      <dl className="divide-y divide-gray-200">
        <DescriptionItem label="Penyedia" value={contact.penyedia} />
        <DescriptionItem label="Keterangan" value={contact.keterangan} />
        <DescriptionItem label="Lokasi" value={contact.lokasi} />
        <DescriptionItem label="Kontak" value={contact.kontak} />
        <DescriptionItem label="Alamat" value={contact.alamat} />
        <DescriptionLink
          contact={contact}
          label="Tautan"
          value={contact.tautan}
        />
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
  );
}
