import * as React from "react";

interface EmptyStateProps {
  title: string;
  description?: string;
  actions?: React.ReactNode;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export function EmptyState({
  title,
  description,
  actions,
  icon,
}: EmptyStateProps) {
  return (
    <div className="text-center">
      {icon &&
        React.createElement(icon, {
          "aria-hidden": true,
          className: "mx-auto h-12 w-12 text-gray-400",
        })}
      <h3 className="mt-2 text-sm font-semibold text-gray-900">{title}</h3>
      {description && (
        <p className="mt-1 text-sm text-gray-500">{description}</p>
      )}
      {actions && <div className="mt-6">{actions}</div>}
    </div>
  );
}
