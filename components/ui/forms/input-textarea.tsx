import * as React from "react";

import clsx from "clsx";

type InputTextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const InputTextarea = React.forwardRef<
  HTMLTextAreaElement,
  InputTextareaProps
>(({ className, rows = 4, ...rest }, ref) => {
  return (
    <textarea
      className={clsx(
        "shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md",
        className,
      )}
      ref={ref}
      rows={rows}
      {...rest}
    />
  );
});

InputTextarea.displayName = "InputText";
