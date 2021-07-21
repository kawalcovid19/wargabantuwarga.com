import * as React from "react";

import { Spinner } from "../spinner";

import {
  buttonBlockStyles,
  buttonRoundedStyles,
  buttonSizes,
  disabledStyles,
  renderIcon,
} from "./helpers";
import { ButtonProps } from "./types";

import clsx from "clsx";

export const PrimaryButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      style,
      type,
      block,
      size = "md",
      rounded,
      icon,
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
        "items-center border border-transparent font-medium shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
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
      {renderIcon(
        isLoading ? Spinner : icon,
        size,
        isLoading ? "animate-spin" : undefined,
      )}
      {isLoading ? loadingText : children}
    </button>
  ),
);

PrimaryButton.displayName = "PrimaryButton";

export const SecondaryButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      style,
      type,
      block,
      size = "md",
      rounded,
      icon,
      children,
      isLoading,
      loadingText = "Memuat...",
      disabled,
      ...rest
    },
    ref,
  ) => (
    <button
      className={clsx(
        buttonBlockStyles(block),
        buttonSizes(size),
        buttonRoundedStyles(rounded, size),
        "items-center border border-transparent font-medium text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
        disabledStyles,
        className,
      )}
      disabled={isLoading ?? disabled}
      ref={ref}
      style={style}
      type={type ?? "button"}
      {...rest}
    >
      {renderIcon(
        isLoading ? Spinner : icon,
        size,
        isLoading ? "animate-spin" : undefined,
      )}
      {isLoading ? loadingText : children}
    </button>
  ),
);

SecondaryButton.displayName = "SecondaryButton";

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
      {renderIcon(
        isLoading ? Spinner : icon,
        size,
        isLoading ? "animate-spin" : undefined,
      )}
      {isLoading ? loadingText : children}
    </button>
  ),
);

WhiteButton.displayName = "WhiteButton";
