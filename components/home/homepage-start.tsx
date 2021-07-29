import React from "react";

import { cloudinaryLoader, getBlurred } from "~/lib/cloudinary-loader";

import { PrimaryAnchorButton } from "../ui/button";

import { HomePageMenu } from "./homepage-menu";
import { HomePageSection } from "./homepage-section";

import Image from "next/image";
import Link from "next/link";

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
            Cek sekarang
          </PrimaryAnchorButton>
        </Link>
      </div>
      <div className="px-4 py-6">
        <HomePageMenu />
      </div>
      <div className="px-4 py-6">
        <a
          href="https://sembako.wargabantuwarga.com/"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          <Image
            alt="Ajukan bantuan sembako jika positif Covid-19 - Daftar Sekarang"
            blurDataURL={getBlurred(
              "v1627319803/sembako-cta-v2_czojls.png",
              656,
            )}
            height={236}
            layout="responsive"
            loader={cloudinaryLoader}
            loading="lazy"
            placeholder="blur"
            quality={90}
            src="v1627319803/sembako-cta-v2_czojls.png"
            width={656}
          />
        </a>
      </div>
    </HomePageSection>
  );
}
