/** Reversed engineerd from next/script
 * https://github.com/vercel/next.js/blob/9f1d5d7fca55f909a3c1b60b1996e6c2124702a5/packages/next/client/script.tsx#L31
 */

import { ScriptHTMLAttributes, useEffect } from "react";
import { requestIdleCallback } from "../lib/request-idle-callback";

const loadScript = (props: ScriptHTMLAttributes<HTMLScriptElement>): void => {
  const { dangerouslySetInnerHTML } = props;

  const el = document.createElement("script");

  if (dangerouslySetInnerHTML) {
    el.innerHTML = dangerouslySetInnerHTML.__html || "";
  }

  document.body.appendChild(el);
};

type RequestIdleCallbackHandle = any;
type RequestIdleCallbackOptions = {
  timeout: number;
};
type RequestIdleCallbackDeadline = {
  readonly didTimeout: boolean;
  timeRemaining: () => number;
};

declare global {
  interface Window {
    requestIdleCallback: (
      callback: (deadline: RequestIdleCallbackDeadline) => void,
      opts?: RequestIdleCallbackOptions
    ) => RequestIdleCallbackHandle;
    cancelIdleCallback: (handle: RequestIdleCallbackHandle) => void;
  }
}

function loadLazyScript(props: ScriptHTMLAttributes<HTMLScriptElement>) {
  if (document.readyState === "complete") {
    requestIdleCallback(() => loadScript(props));
  } else {
    window.addEventListener("load", () => {
      requestIdleCallback(() => loadScript(props));
    });
  }
}

export function Script(
  props: ScriptHTMLAttributes<HTMLScriptElement>
): JSX.Element | null {
  useEffect(() => {
    loadLazyScript(props);
  }, [props]);

  return null;
}
