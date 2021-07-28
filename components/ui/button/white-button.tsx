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

/**
 * A white-canvas button as an alternative to the secondary variant button, or for other lesser-important actions.
 *
 * @link https://tailwindui.com/components/application-ui/elements/buttons#component-109c4104d58d9fedfa8650dbe24c1ae8
 */
export const WhiteButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      style,
      type,
      block,
      size = "md",
      icon,
      iconPosition = "left",
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
        buttonBlockStyles(block, iconPosition),
        buttonSizes(size),
        buttonRoundedStyles(rounded, size),
        "items-center justify-center border border-transparent font-medium shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
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
      {renderButtonIcon({
        icon: isLoading ? Spinner : icon,
        size,
        additionalClasses: isLoading ? "animate-spin" : undefined,
        iconPosition,
      })}
      {isLoading ? loadingText : children}
    </button>
  ),
);

WhiteButton.displayName = "WhiteButton";
