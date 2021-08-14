// import Link from "next/link";
import { HomePageSection } from "./homepage-section";
// import { DonationCard } from "~/components/donasi/donation-card";
// import donasi from "~/lib/content/donasi";

export function HomepageSupportedApps() {
  return (
    <HomePageSection className="px-4 py-6 space-y-4 text-center">
      <h2 className="font-semibold">
        Download aplikasi telemedicine yang
        <br />
        didukung Kemenkes:
      </h2>
    </HomePageSection>
  );
}
