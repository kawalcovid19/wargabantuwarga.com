import { bannerBlurData, cloudinaryLoader } from "~/lib/cloudinary-loader";

import { WBWLogoBlack } from "../ui/wbw-logo";

import Image from "next/image";

export function HomepageHeader() {
  return (
    <header>
      <div className="max-w-xl mx-auto">
        <div className="relative">
          <div aria-hidden className="select-none">
            <Image
              alt="Background"
              blurDataURL={bannerBlurData}
              height={288}
              layout="responsive"
              loader={cloudinaryLoader}
              placeholder="blur"
              priority={true}
              quality={90}
              src="v1627049958/hero_banner_desktop_zat71c.png"
              width={640}
            />
          </div>
          <div className="flex flex-col absolute top-0 left-0 w-full h-full p-4">
            <div className="flex flex-col flex-1 items-start justify-between">
              <WBWLogoBlack className="h-8 md:h-10" />
              <div className="w-[60%] sm:w-[55%] space-y-1">
                <h1 className="text-brand-500 text-lg sm:text-2xl">
                  Warga<span className="font-semibold">Bantu</span>Warga
                </h1>
                <p className="text-xs sm:text-sm">
                  Inisiatif warga untuk berbagi informasi dan membantu warga
                  yang terdampak Covid-19.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
