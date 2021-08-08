import { HtmrOptions } from "htmr";
import Link from "next/link";
import { getKebabCase } from "./string-utils";
import { ResponsiveImg } from "~/components/ui/responsive-img";

const a = (node: JSX.IntrinsicElements["a"]) => {
  const { href, children } = node;

  if (href) {
    // TODO: Strip Google's URL prefix
    if (href.substr(0, 4) === "http") {
      return (
        <a
          className="text-indigo-600 hover:text-indigo-500 relative"
          href={href}
          rel="nofollow noopener noreferrer"
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

const h1 = (node: JSX.IntrinsicElements["h1"]) => {
  const { children } = node;

  return <h1 id={getKebabCase(children?.toString())}>{children}</h1>;
};

const h2 = (node: JSX.IntrinsicElements["h2"]) => {
  const { children } = node;

  return <h2 id={getKebabCase(children?.toString())}>{children}</h2>;
};

const h3 = (node: JSX.IntrinsicElements["h3"]) => {
  const { children } = node;

  return <h3 id={getKebabCase(children?.toString())}>{children}</h3>;
};

const h4 = (node: JSX.IntrinsicElements["h4"]) => {
  const { children } = node;

  return <h4 id={getKebabCase(children?.toString())}>{children}</h4>;
};

const h5 = (node: JSX.IntrinsicElements["h5"]) => {
  const { children } = node;

  return <h5 id={getKebabCase(children?.toString())}>{children}</h5>;
};

const h6 = (node: JSX.IntrinsicElements["h6"]) => {
  const { children } = node;

  return <h6 id={getKebabCase(children?.toString())}>{children}</h6>;
};

const b = (node: JSX.IntrinsicElements["b"]) => {
  const { children } = node;

  return <b className="font-bold text-gray-900">{children}</b>;
};

const strong = (node: JSX.IntrinsicElements["strong"]) => {
  const { children } = node;

  return <strong className="font-bold text-gray-900">{children}</strong>;
};

const img = (node: JSX.IntrinsicElements["img"]) => {
  const { alt, src } = node;
  if (!src || typeof src !== "string") return null;

  return <ResponsiveImg alt={alt ?? ""} src={src} />;
};

export const htmrTransform: HtmrOptions["transform"] = {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  b,
  strong,
  img,
};
