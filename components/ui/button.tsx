/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import * as React from "react";

import clsx from "clsx";

type ButtonSizes = "lg" | "md" | "sm" | "xl" | "xs";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Make the button expand the width of the container. */
  block?: boolean;
  /** The size of the button. Available sizes: `"xs" | "sm" | "md" | "lg" | "xl"` */
  size?: ButtonSizes;
  /** The icon component (from Heroicons) to use in the button. `icon={PlusIcon}` */
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

function buttonBlockStyles(block?: boolean) {
  if (block) {
    return "flex";
  }

  return "inline-flex";
}

function buttonSizes(size?: ButtonSizes) {
  switch (size) {
    case "xs": {
      return "px-2.5 py-1.5 text-xs rounded";
    }
    case "sm": {
      return "px-3 py-2 text-sm leading-4 rounded-md";
    }
    case "md": {
      return "px-4 py-2 text-sm rounded-md";
    }
    case "lg": {
      return "px-4 py-2 text-base rounded-md";
    }
    case "xl": {
      return "px-6 py-3 text-base rounded-md";
    }
    default: {
      return "px-4 py-2 text-sm rounded-md";
    }
  }
}

function buttonIconSizes(size?: ButtonSizes) {
  switch (size) {
    case "xs": {
      return "-ml-0.5 mr-2 h-4 w-4";
    }
    case "sm": {
      return "-ml-0.5 mr-2 h-4 w-4";
    }
    case "md": {
      return "-ml-1 mr-2 h-5 w-5";
    }
    case "lg": {
      return "-ml-1 mr-3 h-5 w-5";
    }
    case "xl": {
      return "-ml-1 mr-3 h-5 w-5";
    }
    default: {
      return "-ml-1 mr-2 h-5 w-5";
    }
  }
}

function renderIcon(icon?: ButtonProps["icon"], size?: ButtonSizes) {
  if (icon) {
    return React.createElement(icon, {
      className: buttonIconSizes(size),
      "aria-hidden": true,
    });
  }

  return null;
}

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
