import Image from "next/image";
import Link from "next/link";
import { cloudinaryLoader } from "~/lib/image/cloudinary-loader";

export function TelemedicineCTA() {
  return (
    <Link href="/telemedicine" passHref>
      <a>
        <Image
          alt="Telemedicine Gratis (Inisiatif Beberapa Dokter) - Cek Sekarang"
          height={236}
          layout="responsive"
          loader={cloudinaryLoader}
          loading="lazy"
          quality={90}
          src="v1628431903/telemedicine-banner_2x_gonhgo.png"
          width={656}
        />
      </a>
    </Link>
  );
}
