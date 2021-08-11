import * as React from "react";

import clsx from "clsx";

export type ContainerProps = React.ComponentProps<"div">;

export const containerStyles = "w-full sm:max-w-xl mx-auto";

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <div className={clsx(containerStyles, className)} ref={ref} {...rest}>
        {children}
      </div>
    );
  },
);

Container.displayName = "Container";
