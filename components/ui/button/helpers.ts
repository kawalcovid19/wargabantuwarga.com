import * as React from "react";

import { ButtonProps, ButtonSizes } from "./types";

export function buttonBlockStyles(block?: boolean) {
  if (block) {
    return "flex";
  }

  return "inline-flex";
}

export function buttonSizes(size?: ButtonSizes) {
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

export function buttonIconSizes(size?: ButtonSizes) {
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

export function renderIcon(icon?: ButtonProps["icon"], size?: ButtonSizes) {
  if (icon) {
    return React.createElement(icon, {
      className: buttonIconSizes(size),
      "aria-hidden": true,
    });
  }

  return null;
}
