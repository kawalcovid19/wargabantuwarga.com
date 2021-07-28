import * as React from "react";

import { Spinner } from "../spinner";

import {
  buttonBlockStyles,
  ButtonProps,
  buttonRoundedStyles,
  buttonSizes,
  disabledStyles,
  primaryButtonColors,
  renderButtonIcon,
} from "./utils";

import clsx from "clsx";

/**
 * Button component used for primary actions.
 *
 * @link https://tailwindui.com/components/application-ui/elements/buttons#component-80fd0d5ac7982f1a83b171bb0fb9e116
 */
export const PrimaryButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      style,
      type,
      block,
      size = "md",
      color = "blue",
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
        "items-center justify-center border border-transparent font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2",
        primaryButtonColors(color),
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

PrimaryButton.displayName = "PrimaryButton";
