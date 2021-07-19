import Link from "next/link";

export const anchorTransformer = (node: JSX.IntrinsicElements["a"]) => {
  const { href, children } = node;

  if (href) {
    // TODO: Strip Google's URL prefix
    if (href.substr(0, 4) === "http") {
      return (
        <a
          className="text-indigo-600 hover:text-indigo-500"
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
