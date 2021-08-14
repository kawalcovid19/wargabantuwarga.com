import * as React from "react";
import clsx from "clsx";
import { containerStyles } from "../../ui/container";
import { PageHeaderProps } from ".";
import { Breadcrumb } from "~/components/ui/breadcrumb";
import { WebpageJsonLd } from "~/components/jsonld-webpage";

interface AboutPageHeaderProps extends PageHeaderProps {
  subtitle?: string;
}

export function AboutPageHeader({
  title,
  subtitle,
  description,
  backButton,
  breadcrumbs,
  actions,
}: AboutPageHeaderProps) {
  return (
    <>
      <WebpageJsonLd
        breadcrumbs={breadcrumbs}
        description={description}
        title={title}
      />
      <header className={clsx("px-4 py-4 bg-white", containerStyles)}>
        <div>
          {backButton}
          <Breadcrumb items={breadcrumbs} />
        </div>
        <div className="mt-4 md:flex md:items-center md:justify-between">
          <div className="flex-1 min-w-0 space-y-2">
            {subtitle && (
              <span className="text-sm leading-6 text-gray-500 sm:text-base sm:truncate">
                {subtitle}
              </span>
            )}
            <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:text-4xl sm:truncate">
              {title}
            </h1>
            {description && (
              <p className="flex items-center text-sm leading-5 text-gray-700 sm:text-base">
                {description}
              </p>
            )}
          </div>
          {actions && (
            <div className="mt-4 flex-shrink-0 flex md:mt-0 md:ml-4">
              {actions}
            </div>
          )}
        </div>
      </header>
    </>
  );
}
