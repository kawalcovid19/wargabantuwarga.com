import * as React from "react";

import {
  AnchorButtonProps,
  buttonBlockStyles,
  buttonRoundedStyles,
  buttonSizes,
  disabledStyles,
  renderButtonIcon,
} from "./utils";

import clsx from "clsx";

/**
 * A ghosted button with no background when not hovered.
 */
export const GhostedAnchorButton = React.forwardRef<
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
        "items-center border border-transparent font-medium text-blue-700 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
        disabledStyles,
        className,
      )}
      ref={ref}
      style={style}
      type={type ?? "button"}
      {...rest}
    >
      {renderButtonIcon(icon, size)}
      {children}
    </a>
  ),
);

GhostedAnchorButton.displayName = "GhostedAnchorButton";
