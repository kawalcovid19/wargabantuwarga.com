import React from "react";

import Image from "next/image";
import Link from "next/link";
import { PrimaryAnchorButton } from "../ui/button";
import { HomePageSection } from "./homepage-section";
import { HomePageMenu } from "./homepage-menu";
import { HomePageEmergencyContactCTA } from "./homepage-emergency-cta";
import { HOMEPAGE_START_CTA_URL } from "~/constants";
import { cloudinaryLoader } from "~/lib/image/cloudinary-loader";

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
      <div className="px-4 py-6">
        <a
          href={HOMEPAGE_START_CTA_URL}
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          <Image
            alt="Ajukan bantuan sembako jika positif Covid-19 - Daftar Sekarang"
            height={236}
            layout="responsive"
            loader={cloudinaryLoader}
            loading="lazy"
            quality={90}
            src="v1627319803/sembako-cta-v2_czojls.png"
            width={656}
          />
        </a>
      </div>
    </HomePageSection>
  );
}
