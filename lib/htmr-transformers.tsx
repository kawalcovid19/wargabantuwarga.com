import { getKebabCase } from "./string-utils";

import Link from "next/link";

export const anchorTransformer = (node: JSX.IntrinsicElements["a"]) => {
  const { href, children } = node;

  if (href) {
    // TODO: Strip Google's URL prefix
    if (href.substr(0, 4) === "http") {
      return (
        <a
          className="text-indigo-600 hover:text-indigo-500 relative"
          href={href}
          rel="noopener noreferrer"
          target="_blank"
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href}>
        <a className="text-indigo-600 hover:text-indigo-500">{children}</a>
      </Link>
    );
  }

  return (
    <a className="text-indigo-600 hover:text-indigo-500" href={href}>
      {children}
    </a>
  );
};

// TODO: Unify these headings transformers into a single generic function
export const heading1Transformer = (node: JSX.IntrinsicElements["h1"]) => {
  const { children } = node;

  return <h1 id={getKebabCase(children?.toString())}>{children}</h1>;
};

export const heading2Transformer = (node: JSX.IntrinsicElements["h2"]) => {
  const { children } = node;

  return <h2 id={getKebabCase(children?.toString())}>{children}</h2>;
};

export const heading3Transformer = (node: JSX.IntrinsicElements["h3"]) => {
  const { children } = node;

  return <h3 id={getKebabCase(children?.toString())}>{children}</h3>;
};

export const heading4Transformer = (node: JSX.IntrinsicElements["h4"]) => {
  const { children } = node;

  return <h4 id={getKebabCase(children?.toString())}>{children}</h4>;
};

export const heading5Transformer = (node: JSX.IntrinsicElements["h5"]) => {
  const { children } = node;

  return <h5 id={getKebabCase(children?.toString())}>{children}</h5>;
};

export const heading6Transformer = (node: JSX.IntrinsicElements["h6"]) => {
  const { children } = node;

  return <h6 id={getKebabCase(children?.toString())}>{children}</h6>;
};
