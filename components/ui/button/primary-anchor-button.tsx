import * as React from "react";

import {
  AnchorButtonProps,
  buttonBlockStyles,
  buttonRoundedStyles,
  buttonSizes,
  disabledStyles,
  primaryButtonColors,
  renderButtonIcon,
} from "./utils";

import clsx from "clsx";

/**
 * Similar to `PrimaryButton`, but acts as a link.
 *
 * @link https://tailwindui.com/components/application-ui/elements/buttons#component-80fd0d5ac7982f1a83b171bb0fb9e116
 */
export const PrimaryAnchorButton = React.forwardRef<
  HTMLAnchorElement,
  AnchorButtonProps
>(
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
      children,
      ...rest
    },
    ref,
  ) => (
    <a
      className={clsx(
        buttonBlockStyles(block),
        buttonSizes(size),
        buttonRoundedStyles(rounded, size),
        "items-center justify-center border border-transparent font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2",
        primaryButtonColors(color),
        disabledStyles,
        className,
      )}
      ref={ref}
      style={style}
      {...rest}
    >
      {renderButtonIcon(icon, size)}
      {children}
    </a>
  ),
);

PrimaryAnchorButton.displayName = "PrimaryAnchorButton";
