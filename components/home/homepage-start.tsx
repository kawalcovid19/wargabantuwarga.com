import React from "react";

import { cloudinaryLoader } from "~/lib/cloudinary-loader";

import { PrimaryAnchorButton } from "../ui/button/primary-anchor-button";

import { HomePageMenu } from "./homepage-menu";

import Image from "next/image";
import Link from "next/link";

export function HomePageStart() {
  return (
    <section className="bg-white overflow-hidden">
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
            height={236}
            layout="responsive"
            loader={cloudinaryLoader}
            priority={true}
            quality={90}
            src="v1627206408/sembako-cta-v1_gpmaxg.png"
            width={656}
          />
        </a>
      </div>
    </section>
  );
}
