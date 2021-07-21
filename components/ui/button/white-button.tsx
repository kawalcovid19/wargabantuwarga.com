import * as React from "react";

import { Spinner } from "../spinner";

import {
  buttonBlockStyles,
  ButtonProps,
  buttonRoundedStyles,
  buttonSizes,
  disabledStyles,
  renderButtonIcon,
} from "./utils";

import clsx from "clsx";

export const WhiteButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      style,
      type,
      block,
      size = "md",
      icon,
      rounded,
      isLoading,
      loadingText = "Memuat...",
      disabled,
      children,
      ...rest
    },
    ref,
  ) => (
    <button
      className={clsx(
        buttonBlockStyles(block),
        buttonSizes(size),
        buttonRoundedStyles(rounded, size),
        "items-center border border-transparent font-medium shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
        "disabled:cursor-not-allowed",
        disabledStyles,
        className,
      )}
      disabled={isLoading ?? disabled}
      ref={ref}
      style={style}
      type={type ?? "button"}
      {...rest}
    >
      {renderButtonIcon(
        isLoading ? Spinner : icon,
        size,
        isLoading ? "animate-spin" : undefined,
      )}
      {isLoading ? loadingText : children}
    </button>
  ),
);

WhiteButton.displayName = "WhiteButton";
