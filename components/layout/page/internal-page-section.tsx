import clsx from "clsx";
import { ComponentPropsWithoutRef, forwardRef } from "react";

export type InternalPageSectionProps = ComponentPropsWithoutRef<"div">;

export const InternalPageSection = forwardRef<
  HTMLDivElement,
  InternalPageSectionProps
>(({ children, className, ...rest }, ref) => {
  return (
    <div
      className={clsx("px-4 overflow-hidden bg-white", className)}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  );
});

InternalPageSection.displayName = "InternalPageSection";
