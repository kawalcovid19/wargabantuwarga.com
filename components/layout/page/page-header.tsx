import * as React from "react";

import Head from "next/head";
import { Container } from "../../ui/container";
import { Breadcrumb, BreadcrumbItem } from "~/components/ui/breadcrumb";
import { makeBreadcrumbJsonLd } from "~/lib/jsonld-generator";

export interface PageHeaderProps {
  title: string;
  description?: string;
  backButton?: React.ReactNode;
  breadcrumbs?: BreadcrumbItem[];
  actions?: React.ReactNode;
}

export function PageHeader({
  title,
  description,
  backButton,
  breadcrumbs,
  actions,
}: PageHeaderProps) {
  return (
    <>
      <Head>
        {breadcrumbs ? (
          <script
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(makeBreadcrumbJsonLd(breadcrumbs)),
            }}
            type="application/ld+json"
          />
        ) : null}
      </Head>

      <header className="px-4 py-4">
        <Container>
          <div>
            {backButton}
            {breadcrumbs && <Breadcrumb items={breadcrumbs} />}
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
        </Container>
      </header>
    </>
  );
}
