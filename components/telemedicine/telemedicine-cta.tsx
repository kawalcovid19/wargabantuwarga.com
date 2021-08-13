import Image from "next/image";
import Link from "next/link";
import { cloudinaryLoader, getBlurred } from "~/lib/image/cloudinary-loader";

export function TelemedicineCTA() {
  return (
    <Link href="/telemedicine" passHref>
      <a>
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
  );
}
