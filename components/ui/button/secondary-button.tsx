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
 * A secondary button variant for actions that complement the primary button action.
 *
 * @link https://tailwindui.com/components/application-ui/elements/buttons#component-9fc8ac3ded8cb313876bfa01742a0570
 */
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
        "items-center justify-center border border-transparent font-medium text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
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

SecondaryButton.displayName = "SecondaryButton";
