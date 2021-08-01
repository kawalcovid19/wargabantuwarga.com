import { REPORT_CONTACT_FORM } from "~/constants/report";
import { Contact } from "~/lib/data/provinces";
import { stripTags } from "~/lib/string-utils";

import { SecondaryButton } from "./ui/button";

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
    const formQuery = `&entry.346789668=${kebutuhan}&entry.323081545=${provinceName}&entry.68818336=${penyedia}&entry.217416134=${stripTags(
      kontak ?? "",
    )}`;

    // delete this comment

    return window.open(
      REPORT_CONTACT_FORM.concat(encodeURI(formQuery)),
      "_blank",
    );
  };

  return (
    <div className="flex justify-center mt-4">
      <SecondaryButton
        aria-label="Laporkan kesalahan"
        className="relative z-10"
        icon={ExclamationCircleIcon}
        onClick={reportButtonHandler}
        type="button"
      >
        <span>Laporkan kesalahan</span>
      </SecondaryButton>
    </div>
  );
};
