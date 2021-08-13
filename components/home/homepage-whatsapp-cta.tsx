import { PrimaryAnchorButton } from "../ui/button";
import { WhatsAppIcon } from "../ui/icons";
import { HomePageSection } from "./homepage-section";
import siteConfig from "~/lib/content/site-config";

export function HomePageWhatsAppCTA() {
  return (
    <HomePageSection className="px-4 py-6 space-y-4 text-center">
      <h2 className="font-semibold">Masih belum dapat info yang kamu cari?</h2>
      <PrimaryAnchorButton
        block
        className="text-white bg-[#25d366] focus:ring-[#25d366]"
        color="none"
        href={siteConfig.whatsapp_contact_url}
        icon={WhatsAppIcon}
        rel="nofollow noopener noreferrer"
        rounded
        target="_blank"
      >
        Hubungi hotline sekarang
      </PrimaryAnchorButton>
      <p className="text-sm text-gray-500">
        Hanya bisa chat, tidak bisa ditelepon
      </p>
    </HomePageSection>
  );
}
