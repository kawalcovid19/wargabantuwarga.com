import Image from "next/image";
import Link from "next/link";
import { HomePageSection } from "./homepage-section";
import { cloudinaryLoader, getBlurred } from "~/lib/image/cloudinary-loader";

export function HomePageTelemedicineCTA() {
  return (
    <HomePageSection className="px-4 py-6 space-y-4 text-center">
      <Link
        href="https://docs.google.com/spreadsheets/d/1gGnIiXmCcGpMkB_h98FiHW99uVdwcdTBq_GhIEl_4eM/edit?usp=sharing"
        passHref
      >
        <a target="_blank">
          <Image
            alt="Telemedicine Gratis (Inisiatif Beberapa Dokter) - Cek Sekarang"
            blurDataURL={getBlurred(
              "v1628431903/telemedicine-banner_2x_gonhgo.png",
              656,
            )}
            height={236}
            layout="responsive"
            loader={cloudinaryLoader}
            loading="lazy"
            placeholder="blur"
            quality={90}
            src="v1628431903/telemedicine-banner_2x_gonhgo.png"
            width={656}
          />
        </a>
      </Link>
    </HomePageSection>
  );
}
