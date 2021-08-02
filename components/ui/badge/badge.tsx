import * as React from "react";

import clsx from "clsx";
import {
  badgeColors,
  BadgeProps,
  badgeRoundedStyles,
  badgeSizes,
} from "./utils";

/**
 * Badge component.
 *
 * @link https://tailwindui.com/components/application-ui/elements/badges
 */
export const Badge = React.forwardRef<
  HTMLDivElement | HTMLSpanElement,
  BadgeProps
>(
  (
    {
      children,
      className,
      color,
      component: Component = "span",
      size,
      rounded,
      ...rest
    },
    ref,
  ) => {
    const _className = clsx(
      badgeRoundedStyles(rounded),
      badgeColors(color),
      badgeSizes(size),
      "inline-flex items-center font-medium",
      className,
    );

    return (
      <Component className={_className} {...rest} ref={ref}>
        {children}
      </Component>
    );
  },
);

Badge.displayName = "Badge";
