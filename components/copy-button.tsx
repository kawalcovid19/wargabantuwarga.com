import { useEffect, useState } from "react";

import { ClipboardCopyIcon } from "@heroicons/react/outline";

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
    <button
      aria-label="salin"
      className="relative z-10 px-2 h-6 ml-2 bg-gray-100 text-gray-600 hover:bg-blue-600 hover:text-white flex-none flex items-center justify-center rounded text-xs"
      onClick={handleCopy}
      type="button"
    >
      {isCopied ? (
        <span>✓&nbsp;Tersalin</span>
      ) : (
        <>
          <ClipboardCopyIcon className="h-4 w-4" />
          <span className="ml-1">Salin</span>
        </>
      )}
    </button>
  );
}
