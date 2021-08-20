import React from "react";
import Image from "next/image";

import { PrimaryAnchorButton } from "~/components/ui/button";
import { DonationDetail } from "~/lib/content/donasi";
import { cloudinaryLoader } from "~/lib/image/cloudinary-loader";
import { replaceCloudinaryPrefix } from "~/lib/image/cloudinary-utils";

export function DonationCard(donation: DonationDetail) {
  return (
    <div className="flex flex-col shadow-md rounded-md overflow-hidden max-w-xs">
      <div className="flex-shrink-0">
        <Image
          alt="donasi covid"
          className="shadow rounded-t-md"
          height={397}
          layout="intrinsic"
          loader={cloudinaryLoader}
          loading="lazy"
          quality={90}
          src={replaceCloudinaryPrefix(donation.image)}
          width={720}
        />
      </div>
      <div className="p-3 space-y-1 h-0 flex-1">
        <p className="text-gray-500 text-xs sm:text-sm">{donation.category}</p>
        <h3 className="font-semibold text-gray-700 text-sm sm:text-base">
          {donation.title}
        </h3>
      </div>
      <div className="p-3 justify-center">
        <PrimaryAnchorButton
          block
          className="font-normal"
          color="brand"
          data-testid={`donation-button-${donation.title}`}
          href={donation.url}
          rel="nofollow noopener noreferrer"
          rounded
          size="xs"
          target="_blank"
        >
          Donasi Sekarang
        </PrimaryAnchorButton>
      </div>
    </div>
  );
}
