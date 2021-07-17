import { bannerBlurData, imgixLoader } from "../../lib/imgix-loader";

import Image from "next/image";
import Link from "next/link";

// TODO: Replace with a more suitable global navbar.
export function GlobalHeader() {
  return (
    <header>
      <div className="max-w-xl mx-auto">
        <h1>
          <Link href="/">
            <a>
              <Image
                alt="Warga Bantu Warga"
                blurDataURL={bannerBlurData}
                height={287}
                layout="responsive"
                loader={imgixLoader}
                placeholder="blur"
                priority={true}
                quality={70}
                src="hero_banner.png"
                width={640}
              />
            </a>
          </Link>
        </h1>
      </div>
    </header>
  );
}
