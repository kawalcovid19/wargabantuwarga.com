import * as React from "react";

import clsx from "clsx";

type ContainerProps = React.ComponentProps<"div">;

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <div
        className={clsx("w-full sm:max-w-xl mx-auto", className)}
        ref={ref}
        {...rest}
      >
        {children}
      </div>
    );
  },
);

Container.displayName = "Container";
