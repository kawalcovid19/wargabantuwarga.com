import React from "react";

import { PrimaryAnchorButton } from "~/components/ui/button";
import { WhatsAppIcon } from "~/components/ui/icons";

export default function ChatbotSection() {
  return (
    <div className="space-y-4 px-4 py-6 text-center bg-white">
      <div className="space-y-2">
        <h2 className="text-gray-800 text-lg font-semibold">
          CovidAsha Chatbot 24x7
        </h2>
        <p className="text-gray-600 text-sm">
          Layanan berbasis chatbot untuk mencari semua informasi terkait
          COVID-19
        </p>
      </div>
      <PrimaryAnchorButton
        block
        className="text-white bg-[#25d366] focus:ring-[#25d366]"
        color="none"
        href="https://bit.ly/hotlinewarga"
        icon={WhatsAppIcon}
        rel="nofollow noopener noreferrer"
        rounded
        target="_blank"
      >
        Kirim chat sekarang
      </PrimaryAnchorButton>
    </div>
  );
}
