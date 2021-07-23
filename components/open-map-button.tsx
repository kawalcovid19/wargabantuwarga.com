import { SecondaryButton } from "./ui/button";

import { MapIcon } from "@heroicons/react/outline";

export function OpenMapButton({ address }: { address: string }) {
  function btnClick(e: React.FormEvent<HTMLButtonElement>) {
    e.currentTarget.blur();
    window.open(`https://www.google.com/maps/search/?api=1&query=${address}`);
  }

  return (
    <div className="flex items-start">
      <SecondaryButton
        aria-label="Buka Peta"
        className="relative z-10"
        icon={MapIcon}
        onClick={btnClick}
        size="xs"
        type="button"
      >
        Buka Peta
      </SecondaryButton>
    </div>
  );
}
