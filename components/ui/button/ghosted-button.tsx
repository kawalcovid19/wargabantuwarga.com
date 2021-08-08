import * as React from "react";

import clsx from "clsx";
import { Spinner } from "../spinner";
import {
  buttonBlockStyles,
  ButtonProps,
  buttonRoundedStyles,
  buttonSizes,
  disabledStyles,
  renderButtonIcon,
} from "./utils";

/**
 * A ghosted button with no background when not hovered.
 */
export const GhostedButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      style,
      type,
      block,
      size = "md",
      rounded,
      icon,
      iconPosition = "left",
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
        buttonBlockStyles(block, iconPosition),
        buttonSizes(size),
        buttonRoundedStyles(rounded, size),
        "items-center border border-transparent font-medium text-blue-700 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
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

GhostedButton.displayName = "GhostedButton";
