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
 * Similar to `SecondaryButton`, but acts as a link.
 *
 * @link https://tailwindui.com/components/application-ui/elements/buttons#component-9fc8ac3ded8cb313876bfa01742a0570
 */
export const SecondaryAnchorButton = React.forwardRef<
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
        "items-center justify-center border border-transparent font-medium text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
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

SecondaryAnchorButton.displayName = "SecondaryAnchorButton";
