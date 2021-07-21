/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import * as React from "react";

import { buttonBlockStyles, buttonSizes, renderIcon } from "./helpers";
import { ButtonProps } from "./types";

import clsx from "clsx";

export const PrimaryButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, style, type, block, size = "md", icon, children, ...rest },
    ref,
  ) => (
    <button
      className={clsx(
        buttonBlockStyles(block),
        buttonSizes(size),
        "items-center border border-transparent font-medium shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
        className,
      )}
      ref={ref}
      style={style}
      type={type ?? "button"}
      {...rest}
    >
      {renderIcon(icon, size)}
      {children}
    </button>
  ),
);

PrimaryButton.displayName = "PrimaryButton";

export const SecondaryButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, style, type, children, block, size = "md", icon, ...rest },
    ref,
  ) => (
    <button
      className={clsx(
        buttonBlockStyles(block),
        buttonSizes(size),
        "items-center border border-transparent font-medium text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
        className,
      )}
      ref={ref}
      style={style}
      type={type ?? "button"}
      {...rest}
    >
      {renderIcon(icon, size)}
      {children}
    </button>
  ),
);

SecondaryButton.displayName = "SecondaryButton";

export const WhiteButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, style, type, children, block, size = "md", icon, ...rest },
    ref,
  ) => (
    <button
      className={clsx(
        buttonBlockStyles(block),
        buttonSizes(size),
        "items-center border border-transparent font-medium shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
        className,
      )}
      ref={ref}
      style={style}
      type={type ?? "button"}
      {...rest}
    >
      {renderIcon(icon, size)}
      {children}
    </button>
  ),
);

WhiteButton.displayName = "WhiteButton";
