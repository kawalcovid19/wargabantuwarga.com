import * as React from "react";

import {
  accentBorderColors,
  alertColors,
  AlertProps,
  renderAlertIcon,
} from "./utils";

import { XIcon } from "@heroicons/react/outline";
import clsx from "clsx";
import { CSSTransition } from "react-transition-group";

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      children,
      className,
      color = "yellow",
      dismissible,
      accentBorder = false,
      icon,
      visible = true,
      onDismiss,
      onDismissed,
      ...rest
    },
    ref,
  ) => {
    const [_visible, setVisible] = React.useState(visible);

    const _className = clsx(
      alertColors(color),
      accentBorderColors(accentBorder, color),
      "rounded-md p-4",
      className,
    );

    return (
      <CSSTransition
        in={_visible}
        onExit={onDismiss}
        onExited={onDismissed}
        timeout={150}
        unmountOnExit
      >
        <div className={_className} role="alert" {...rest} ref={ref}>
          <div className="flex justify-between">
            <div className="flex">
              {icon && (
                <div className="flex-shrink-0 mr-3">
                  {renderAlertIcon(icon)}
                </div>
              )}
              <div>{children}</div>
            </div>
            {dismissible && (
              <button
                className={`text-${color}-400 hover:text-${color}-500`}
                onClick={() => setVisible(false)}
              >
                <XIcon aria-hidden="true" className="flex-shrink-0 h-5 w-5" />
                <span className="sr-only">Close</span>
              </button>
            )}
          </div>
        </div>
      </CSSTransition>
    );
  },
);

Alert.displayName = "Alert";
