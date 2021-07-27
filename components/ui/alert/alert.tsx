import * as React from "react";

import {
  accentBorderColors,
  alertColors,
  AlertProps,
  renderAlertIcon,
} from "./utils";

import clsx from "clsx";

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      children,
      className,
      color = "yellow",
      accentBorder = false,
      icon,
      ...rest
    },
    ref,
  ) => {
    const _className = clsx(
      alertColors(color),
      accentBorderColors(accentBorder, color),
      "rounded-md p-4",
      className,
    );

    return (
      <div className={_className} role="alert" {...rest} ref={ref}>
        <div className="flex">
          {icon && (
            <div className="flex-shrink-0 mr-3">{renderAlertIcon(icon)}</div>
          )}
          <div>{children}</div>
        </div>
      </div>
    );
  },
);

Alert.displayName = "Alert";
