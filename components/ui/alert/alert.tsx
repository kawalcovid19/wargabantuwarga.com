import * as React from "react";

import { Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import clsx from "clsx";
import {
  accentBorderColors,
  alertColors,
  AlertProps,
  renderAlertIcon,
} from "./utils";

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
      ...rest
    },
    ref,
  ) => {
    const [_visible, setVisible] = React.useState(visible);

    const _className = clsx(
      alertColors(color),
      accentBorderColors(accentBorder, color),
      "p-4",
      className,
    );

    return (
      <Transition
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        show={_visible}
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
                className={`close-button text-${color}-400 hover:text-${color}-500`}
                onClick={() => setVisible(false)}
              >
                <XIcon aria-hidden="true" className="flex-shrink-0 h-6 w-5" />
                <span className="sr-only">Close</span>
              </button>
            )}
          </div>
        </div>
      </Transition>
    );
  },
);

Alert.displayName = "Alert";
