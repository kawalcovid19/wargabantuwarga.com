import { PrimaryAnchorButton } from "../ui/button/primary-anchor-button";

import Link from "next/link";

export function HomePageStart() {
  return (
    <section className="bg-white overflow-hidden">
      <div className="px-4 py-5 text-center">
        <h2 className="text-lg sm:text-xl font-semibold sm:mx-6">
          Cek database RS, Puskesmas, Ambulans, Oksigen, dan kontak penting
          lainnya
        </h2>
        <Link href="/provinces" passHref>
          <PrimaryAnchorButton block className="mt-4" rounded size="lg">
            Cek sekarang
          </PrimaryAnchorButton>
        </Link>
      </div>
    </section>
  );
}
