import { ExternalLinkIcon } from "@heroicons/react/solid";
import { TelekonselingDetail } from "~/lib/content/telekonseling";

export default function TelekonselingCard(konseling: TelekonselingDetail) {
  const openNewTab = (item: string): void => {
    window.open(item);
  };
  return (
    <div className="flex flex-col m-4 border-b border-gray-200">
      <div className="flex flex-row justify-between">
        <h1 className="text-base leading-6 font-medium mb-2">
          {`${konseling.jenislayanan} dari ${konseling.penyelenggara} ${
            konseling.kontak === "" ? "" : "Chat Whatsapp Ke Nomor"
          } ${konseling.kontak}`}
        </h1>
        <div
          aria-hidden
          className="text-brand-500 ml-4 cursor-pointer"
          onClick={() => openNewTab(konseling.url)}
        >
          <ExternalLinkIcon className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
}
