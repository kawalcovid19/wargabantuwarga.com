import { useEffect, useState } from "react";

import { CheckIcon, ClipboardCopyIcon } from "@heroicons/react/outline";
import { SecondaryButton } from "./ui/button";

export function CopyButton({ text }: { text: string }) {
  const [isCopied, setCopied] = useState<boolean>(false);
  const [canCopy, setCanCopy] = useState<boolean>(false);

  useEffect(() => {
    if (
      typeof window === "object" &&
      typeof navigator.clipboard === "object" &&
      typeof navigator.clipboard.writeText === "function"
    ) {
      setCanCopy(true);
    }
  }, []);

  if (!canCopy) return null;

  function handleCopy(e: React.FormEvent<HTMLButtonElement>) {
    e.currentTarget.blur();
    return navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 1000);
      })
      .catch((err) => console.error(err));
  }

  return (
    <div className="flex items-start">
      <SecondaryButton
        aria-label="Salin"
        className="relative z-10"
        icon={isCopied ? CheckIcon : ClipboardCopyIcon}
        onClick={handleCopy}
        size="xs"
        type="button"
      >
        {isCopied ? "Tersalin" : "Salin"}
      </SecondaryButton>
    </div>
  );
}
