import * as React from "react";

import clsx from "clsx";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  block?: boolean;
}

export const InputSelect = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, style, children, block, ...rest }, ref) => (
    <select
      className={clsx(
        block ? "block" : "inline-block",
        "shadow-sm focus:ring-blue-500 focus:border-blue-500 w-full sm:text-sm border-gray-300 rounded-md",
        className,
      )}
      ref={ref}
      style={style}
      {...rest}
    >
      {children}
    </select>
  ),
);

InputSelect.displayName = "InputSelect";
