import { useEffect, useState } from "react";

// import { ClipboardCopyIcon } from "@heroicons/react/outline";

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

  function handleCopy() {
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
      className="relative z-10 py-1 px-2 ml-2 bg-gray-100"
      onClick={handleCopy}
      type="button"
    >
      {isCopied ? "✓ copy" : "copy"}
      {/* <ClipboardCopyIcon /> */}
    </button>
  );
}
