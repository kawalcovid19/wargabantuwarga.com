import * as React from "react";

import clsx from "clsx";
import { BaseColors } from "../../types";
import { AlertProps } from "./types";

export function accentBorderColors(accentBorder?: boolean, color?: BaseColors) {
  if (accentBorder) {
    switch (color) {
      case "blue": {
        return "border-l-4 border-blue-400";
      }
      case "gray": {
        return "border-l-4 border-gray-400";
      }
      case "green": {
        return "border-l-4 border-green-400";
      }
      case "indigo": {
        return "border-l-4 border-indigo-400";
      }
      case "light-blue": {
        return "border-l-4 border-light-blue-400";
      }
      case "pink": {
        return "border-l-4 border-pink-400";
      }
      case "purple": {
        return "border-l-4 border-purple-400";
      }
      case "red": {
        return "border-l-4 border-red-400";
      }
      case "yellow": {
        return "border-l-4 border-yellow-400";
      }
      default: {
        return "border-l-4 border-yellow-400";
      }
    }
  }
}

export function alertColors(color?: BaseColors) {
  switch (color) {
    case "blue": {
      return "bg-blue-50 text-blue-700";
    }
    case "gray": {
      return "bg-gray-50 text-gray-700";
    }
    case "green": {
      return "bg-green-50 text-green-700";
    }
    case "indigo": {
      return "bg-indigo-50 text-indigo-700";
    }
    case "pink": {
      return "bg-pink-50 text-pink-700";
    }
    case "light-blue": {
      return "bg-light-blue-50 text-light-blue-700";
    }
    case "purple": {
      return "bg-purple-50 text-purple-700";
    }
    case "red": {
      return "bg-red-50 text-red-700";
    }
    case "yellow": {
      return "bg-yellow-50 text-yellow-700";
    }
    default: {
      return "bg-yellow-50 text-yellow-700";
    }
  }
}

export function renderAlertIcon(
  icon?: AlertProps["icon"],
  additionalClasses?: string,
) {
  if (icon) {
    return React.createElement(icon, {
      className: clsx("h-5 w-5", additionalClasses),
      "aria-hidden": true,
    });
  }

  return null;
}
