import * as React from "react";

import clsx from "clsx";

type InputTextProps = React.InputHTMLAttributes<HTMLInputElement>;

export const InputText = React.forwardRef<HTMLInputElement, InputTextProps>(
  ({ className, type = "text", ...rest }, ref) => {
    return (
      <input
        className={clsx(
          "shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md",
          className,
        )}
        ref={ref}
        type={type}
        {...rest}
      />
    );
  },
);

InputText.displayName = "InputText";
