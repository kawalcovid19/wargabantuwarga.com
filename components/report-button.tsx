import { Contact } from "../lib/provinces";

import { ExclamationCircleIcon } from "@heroicons/react/outline";

type ReportButtonProps = {
  contact: Contact;
  provinceName: string;
};

export const ReportButton = (props: ReportButtonProps) => {
  const {
    provinceName,
    contact: { penyedia, kontak, kebutuhan },
  } = props;

  const reportButtonHandler = () => {
    const formBaseUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSeDdZLMD9RTfOiKMItNb8542KAO5w3x9O2ZFQmNyff1rYRZvQ/viewform?usp=pp_url";

    const formQuery = `&entry.346789668=${kebutuhan}&entry.323081545=${provinceName}&entry.68818336=${penyedia}&entry.217416134=${kontak}`;

    return window.open(formBaseUrl.concat(encodeURI(formQuery)), "_blank");
  };

  return (
    <div className="flex justify-center">
      <button
        aria-label="Laporkan kesalahan"
        className="relative z-10 px-2 h-8 mt-2 bg-gray-100 text-gray-600 hover:bg-blue-600 hover:text-white flex items-center justify-center rounded text-xs space-x-1"
        onClick={reportButtonHandler}
        type="button"
      >
        <ExclamationCircleIcon aria-hidden="true" className="w-5 h-5" />{" "}
        <span>Laporkan kesalahan</span>
      </button>
    </div>
  );
};
