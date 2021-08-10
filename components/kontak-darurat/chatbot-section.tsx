import React from "react";

import { InternalPageSection } from "../layout/page";
import { PrimaryAnchorButton } from "~/components/ui/button";
import { WhatsAppIcon } from "~/components/ui/icons";

export default function ChatbotSection() {
  return (
    <InternalPageSection className="py-6 space-y-4 text-center">
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
    </InternalPageSection>
  );
}
