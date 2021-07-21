import * as React from "react";

import clsx from "clsx";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  block?: boolean;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, style, children, block, ...rest }, ref) => (
    <select
      className={clsx(
        block ? "block" : "inline-block",
        "outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full px-2 py-2 sm:text-sm border-gray-300 hover:border-gray-400 border rounded-md",
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

Select.displayName = "Select";
