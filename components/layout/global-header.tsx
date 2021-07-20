import WBWLogo from "@components/ui/wbw-logo";
import Link from "next/link";

export function GlobalHeader() {
  return (
    <header className="flex items-center justify-center fixed w-full h-20 px-4 z-40 bg-brand-500 text-white shadow-md">
      <Link href="/">
        <a className="align-middle">
          <h1 className="sr-only">Warga Bantu Warga</h1>
          <WBWLogo aria-hidden height={40} />
        </a>
      </Link>
    </header>
  );
}
