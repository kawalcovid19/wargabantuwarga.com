import Image, { ImageLoaderProps } from "next/image";
import Link from "next/link";
import { OutlineAnchorButton } from "../ui/button";
import { HomePageSection } from "./homepage-section";
import supportedApps from "~/lib/content/officially-supported-apps";
import { cloudinaryLoader } from "~/lib/image/cloudinary-loader";
import { replaceCloudinaryPrefix } from "~/lib/image/cloudinary-utils";

export function HomepageSupportedApps() {
  return (
    <HomePageSection className="px-4 py-6 space-y-4 text-center">
      <h2 className="font-semibold">
        Download aplikasi telemedicine yang
        <br />
        didukung Kemenkes:
      </h2>
      <ul className="grid grid-cols-2 gap-2 sm:gap-4 sm:grid-cols-4">
        {supportedApps.application.map((app, index) => (
          <li
            key={index}
            className="inline-flex flex-col items-center justify-center text-center relative"
          >
            <a
              className="border-solid border-2 border-gray-300 border-opacity-75 rounded-lg hover:border-light-blue-700 min-w-full h-20 relative"
              href={app.link}
              rel="nofollow noopener noreferrer"
              target="_blank"
              title={app.name}
            >
              <Image
                alt={app.name}
                className="rounded-md"
                height={72}
                layout="intrinsic"
                loader={({ src, width, quality }: ImageLoaderProps) => {
                  return cloudinaryLoader({
                    src,
                    width,
                    quality,
                  });
                }}
                loading="lazy"
                objectFit="contain"
                quality={90}
                src={replaceCloudinaryPrefix(app.logo)}
                width={72}
              />
            </a>
          </li>
        ))}
      </ul>
      <div className="p-4 bg-blue-50 text-center rounded-md space-y-3">
        <p className="text-base leading-6 font-semibold">
          Butuh Konseling Bagi Pasien, Keluarga Pasien, atau Tenaga Kesehatan
          Terdampak COVID-19?
        </p>
        <Link href="/telekonseling" passHref>
          <OutlineAnchorButton block color="brand" rounded size="lg">
            Lihat daftar di sini
          </OutlineAnchorButton>
        </Link>
      </div>
    </HomePageSection>
  );
}
