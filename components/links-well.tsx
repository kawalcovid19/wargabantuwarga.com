import * as React from "react";

type Link = { href: string; text: string; internal?: boolean };

export interface LinksWellProps {
  title: string;
  links: Link[];
}

function LinkInWell(props: { link: Link }) {
  const { href, text, internal } = props.link;
  const css = "underline text-gray-900 hover:text-gray-600";

  if (internal || href.startsWith("tel:"))
    return (
      <a className={css} href={href}>
        {text}
      </a>
    );
  return (
    <a
      className={css}
      href={href}
      rel="external nofollow noopener noreferrer"
      target="_blank"
    >
      {text}
    </a>
  );
}

export function LinksWell(props: LinksWellProps) {
  const { title, links } = props;
  return (
    <section
      aria-label={title}
      className="bg-gray-200 p-4 mb-4 -mx-4 md:mx-0 text-sm"
    >
      <p className="mb-2 font-medium text-gray-600">{title}</p>
      <ul>
        {links.map((link) => (
          <li key={link.href} className="text-blue-500 mb-1">
            <LinkInWell link={link} />
          </li>
        ))}
      </ul>
      <style jsx>{`
        li {
          --custom-bullet-size: 1.5rem;
          padding-left: var(--custom-bullet-size);
        }
        li::before {
          content: "→";
          display: inline-block;
          width: var(--custom-bullet-size);
          margin-left: calc(var(--custom-bullet-size) * -1);
        }
      `}</style>
    </section>
  );
}
