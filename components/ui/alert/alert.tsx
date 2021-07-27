import * as React from "react";

import { accentBorderColors, alertColors, AlertProps } from "./utils";

import clsx from "clsx";

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ children, className, color = "yellow", accentBorder, ...rest }, ref) => {
    const _className = clsx(
      alertColors(color),
      accentBorderColors(accentBorder, color),
      "rounded-md p-4",
      className,
    );

    return (
      <div className={_className} role="alert" {...rest} ref={ref}>
        <div className="flex">{children}</div>
      </div>
    );
  },
);

Alert.displayName = "Alert";
