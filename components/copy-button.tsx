import { useEffect, useState } from "react";

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
      })
      .catch((err) => console.error(err));
  }

  return (
    <button onClick={handleCopy} type="button">
      {isCopied ? "✓ copy" : "copy"}
    </button>
  );
}
