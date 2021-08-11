import clsx from "clsx";
import { ComponentPropsWithoutRef, forwardRef } from "react";

export type InternalPageContentProps = ComponentPropsWithoutRef<"div">;

export const InternalPageContent = forwardRef<
  HTMLDivElement,
  InternalPageContentProps
>(({ children, className, ...rest }, ref) => {
  return (
    <div
      className={clsx("flex flex-col flex-1", className)}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  );
});

InternalPageContent.displayName = "InternalPageContent";
