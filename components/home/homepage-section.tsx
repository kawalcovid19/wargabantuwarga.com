import React from "react";

import clsx from "clsx";

export const HomePageSection = React.forwardRef<
  HTMLElement,
  React.ComponentProps<"section">
>(({ className, style, children, ...rest }, ref) => {
  return (
    <section
      className={clsx("bg-white overflow-hidden", className)}
      ref={ref}
      style={style}
      {...rest}
    >
      {children}
    </section>
  );
});

HomePageSection.displayName = "HomePageSection";
