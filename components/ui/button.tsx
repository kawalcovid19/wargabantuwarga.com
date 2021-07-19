import * as React from "react";

import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const PrimaryButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, style, type, children, ...rest }, ref) => (
    <button
      className={clsx(
        "inline-flex items-center px-4 py-2 text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
        className,
      )}
      ref={ref}
      style={style}
      type={type ?? "button"}
      {...rest}
    >
      {children}
    </button>
  ),
);

PrimaryButton.displayName = "PrimaryButton";

export const SecondaryButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, style, type, children, ...rest }, ref) => (
    <button
      className={clsx(
        "inline-flex items-center px-4 py-2 text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
        className,
      )}
      ref={ref}
      style={style}
      type={type ?? "button"}
      {...rest}
    >
      {children}
    </button>
  ),
);

SecondaryButton.displayName = "SecondaryButton";
