import React from "react";

import Link from "next/link";
import { PrimaryAnchorButton } from "../ui/button";
import { HomePageSection } from "./homepage-section";
import { HomePageMenu } from "./homepage-menu";
import { HomePageEmergencyContactCTA } from "./homepage-emergency-cta";

export function HomePageStart() {
  return (
    <HomePageSection>
      <div className="px-4 py-6 text-center">
        <h2 className="text-lg sm:text-xl font-semibold sm:mx-6">
          Cek database RS, Puskesmas, Ambulans, Oksigen, dan kontak penting
          lainnya
        </h2>
        <Link href="/provinces" passHref>
          <PrimaryAnchorButton
            block
            className="mt-4"
            color="brand"
            rounded
            size="lg"
          >
            Telusuri sekarang
          </PrimaryAnchorButton>
        </Link>
      </div>
      <div className="px-4">
        <HomePageEmergencyContactCTA />
      </div>
      <div className="px-4 py-6">
        <HomePageMenu />
      </div>
    </HomePageSection>
  );
}
