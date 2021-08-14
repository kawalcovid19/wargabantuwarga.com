import * as React from "react";
import clsx from "clsx";
import { containerStyles } from "../../ui/container";
import { PageHeaderProps } from "../page";
import { Breadcrumb } from "~/components/ui/breadcrumb";
import { WebpageJsonLd } from "~/components/jsonld-webpage";

type InternalPageHeaderProps = PageHeaderProps;

export function InternalPageHeader({
  title,
  description,
  backButton,
  breadcrumbs,
  actions,
}: InternalPageHeaderProps) {
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
          <div className="flex-1 min-w-0">
            <h1 className="text-xl font-bold leading-7 text-gray-900 sm:text-2xl sm:truncate">
              {title}
            </h1>
            {description && (
              <p className="flex items-center mt-2 text-sm text-gray-600">
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
