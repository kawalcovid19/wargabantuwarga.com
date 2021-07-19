import { Contact } from "../lib/provinces";

type ContactDetailsProps = {
  contact: Contact;
  provinceName: string;
};

type ReportButtonProps = {
  onClick: () => void;
};

type ReportButtonHandlerProps = {
  contact: Contact;
  provinceName: string;
};

const reportButtonHandler = (props: ReportButtonHandlerProps) => {
  const {
    provinceName,
    contact: { keterangan, penyedia, kontak },
  } = props;

  const formBaseUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSeDdZLMD9RTfOiKMItNb8542KAO5w3x9O2ZFQmNyff1rYRZvQ/viewform?usp=pp_url";

  const formQuery = `&entry.346789668=__other_option__&entry.346789668.other_option_response=${keterangan}&entry.323081545=${provinceName}&entry.68818336=${penyedia}&entry.217416134=${kontak}`;

  return window.open(formBaseUrl.concat(encodeURI(formQuery)), "_blank");
};

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
  onClick: () => void;
};

const DescriptionItem = (props: DescriptionItemProps) => (
  <div className="py-4 px-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
    <dt className="text-sm font-medium text-gray-500">{props.label}</dt>
    <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
      <span className="flex-grow">{props.value}</span>
      <ReportButton onClick={props.onClick} />
    </dd>
  </div>
);

type DescriptionLinkProps = {
  label: string;
  value?: string;
  contact: Contact;
  onClick: () => void;
};

const DescriptionLink = (props: DescriptionLinkProps) => {
  console.log(props);
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
        <ReportButton onClick={props.onClick} />
      </dd>
    </div>
  ) : null;
};

export function ContactDetails({ contact, provinceName }: ContactDetailsProps) {
  const _reportButtonHandler = () => {
    reportButtonHandler({ contact, provinceName });
  };

  return (
    <div className="bg-white shadow overflow-hidden rounded-md">
      <dl className="divide-y divide-gray-200">
        <DescriptionItem
          label="Penyedia"
          onClick={_reportButtonHandler}
          value={contact.penyedia}
        />
        <DescriptionItem
          label="Keterangan"
          onClick={_reportButtonHandler}
          value={contact.keterangan}
        />
        <DescriptionItem
          label="Lokasi"
          onClick={_reportButtonHandler}
          value={contact.lokasi}
        />
        <DescriptionItem
          label="Kontak"
          onClick={_reportButtonHandler}
          value={contact.kontak}
        />
        <DescriptionItem
          label="Alamat"
          onClick={_reportButtonHandler}
          value={contact.alamat}
        />
        <DescriptionLink
          contact={contact}
          label="Tautan"
          onClick={_reportButtonHandler}
          value={contact.link}
        />
        <DescriptionItem
          label="Terakhir Update"
          onClick={_reportButtonHandler}
          value={contact.terakhir_update}
        />
        <DescriptionItem
          label="Bentuk Verifikasi"
          onClick={_reportButtonHandler}
          value={contact.bentuk_verifikasi}
        />
        <DescriptionItem
          label="Tambahan Informasi"
          onClick={_reportButtonHandler}
          value={contact.tambahan_informasi}
        />
      </dl>
    </div>
  );
}
