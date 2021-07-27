import { useEffect, useState } from "react";

import { useRouter } from "next/router";

export function useHeaderVisibility() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    if (router.asPath === "/") {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }, [router.asPath]);

  return isVisible;
}
