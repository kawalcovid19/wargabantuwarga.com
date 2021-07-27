import { Colors } from "../../types";

import { BadgeSizes } from "./types";

export function badgeRoundedStyles(rounded?: boolean) {
  if (rounded) {
    return "rounded-md";
  }

  return "rounded-full";
}

export function badgeSizes(size?: BadgeSizes) {
  switch (size) {
    case "basic": {
      return "px-2.5 py-0.5 text-xs";
    }
    case "large": {
      return "px-3 py-0.5 text-sm";
    }
    default: {
      return "px-2.5 py-0.5 text-xs";
    }
  }
}

export function badgeColors(color?: Colors) {
  switch (color) {
    case "blue": {
      return "bg-blue-100 text-blue-800";
    }
    case "gray": {
      return "bg-gray-100 text-gray-800";
    }
    case "green": {
      return "bg-green-100 text-green-800";
    }
    case "indigo": {
      return "bg-indigo-100 text-indigo-800";
    }
    case "pink": {
      return "bg-pink-100 text-pink-800";
    }
    case "purple": {
      return "bg-purple-100 text-purple-800";
    }
    case "red": {
      return "bg-red-100 text-red-800";
    }
    case "yellow": {
      return "bg-yellow-100 text-yellow-800";
    }
    default: {
      return "bg-gray-100 text-gray-800";
    }
  }
}
