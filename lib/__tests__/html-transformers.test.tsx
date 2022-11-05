import renderer from "react-test-renderer";
import htmr from "htmr";
import { htmrTransform } from "../htmr-transformers";

describe("htmrTransform", () => {
  it("transforms a URL starting with http into an external link correctly", () => {
    expect(htmrRenderWithTransformer('<a href="http://localhost">local</a>'))
      .toMatchInlineSnapshot(`
      <a
        className="text-indigo-600 hover:text-indigo-500 relative"
        href="http://localhost"
        rel="nofollow noopener noreferrer"
        target="_blank"
      >
        local
      </a>
    `);
  });

  it("transforms a URL not starting with http into an external link correctly", () => {
    expect(htmrRenderWithTransformer('<a href="/lbh">LBH</a>'))
      .toMatchInlineSnapshot(`
      <a
        className="text-indigo-600 hover:text-indigo-500"
        href="/lbh"
        onClick={[Function]}
        onMouseEnter={[Function]}
      >
        LBH
      </a>
    `);
  });

  it("transform an anchor tag without href property", () => {
    expect(htmrRenderWithTransformer("<a>LBH</a>")).toMatchInlineSnapshot(`
      <a
        className="text-indigo-600 hover:text-indigo-500"
      >
        LBH
      </a>
    `);
  });

  it("adds kebab-case id to headings correctly", () => {
    expect(
      htmrRenderWithTransformer(
        `<main><h1>Heading 1</h1><h2>Heading 2</h2><h3>Heading 3</h3><h4>Heading 4</h4><h5>Heading 5</h5><h6>Heading 6</h6></main>`,
      ),
    ).toMatchInlineSnapshot(`
      <main>
        <h1
          id="heading-1"
        >
          Heading 1
        </h1>
        <h2
          id="heading-2"
        >
          Heading 2
        </h2>
        <h3
          id="heading-3"
        >
          Heading 3
        </h3>
        <h4
          id="heading-4"
        >
          Heading 4
        </h4>
        <h5
          id="heading-5"
        >
          Heading 5
        </h5>
        <h6
          id="heading-6"
        >
          Heading 6
        </h6>
      </main>
    `);
  });

  it("styles bold tags correctly", () => {
    expect(htmrRenderWithTransformer(`<b>bold</b>`)).toMatchInlineSnapshot(`
      <b
        className="font-bold text-gray-900"
      >
        bold
      </b>
    `);
  });
  it("styles strong tags correctly", () => {
    expect(htmrRenderWithTransformer(`<strong>strong</strong>`))
      .toMatchInlineSnapshot(`
      <strong
        className="font-bold text-gray-900"
      >
        strong
      </strong>
    `);
  });
  it("styles mark tags correctly", () => {
    expect(htmrRenderWithTransformer(`<mark>mark</mark>`))
      .toMatchInlineSnapshot(`
      <span
        className="bg-yellow-200"
      >
        mark
      </span>
    `);
  });

  it("renders image tag correctly when src is provided", () => {
    expect(htmrRenderWithTransformer(`<img src="/logo" alt="Logo" />`))
      .toMatchInlineSnapshot(`
      <img
        alt="Logo"
        loading="lazy"
        src="/logo"
      />
    `);
  });

  it("renders image tag correctly when alt is not provided", () => {
    expect(htmrRenderWithTransformer(`<img src="/logo" />`))
      .toMatchInlineSnapshot(`
      <img
        alt=""
        loading="lazy"
        src="/logo"
      />
    `);
  });

  it("renders nothing when the image tag doesn't have src props", () => {
    expect(
      htmrRenderWithTransformer(`<img alt="Logo" />`),
    ).toMatchInlineSnapshot(`null`);
  });
});

/**
 * Test utilities
 */

function htmrRenderWithTransformer(html: string) {
  const transformedNode = htmr(html, {
    transform: htmrTransform,
  });
  expect(transformedNode).toBeDefined();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  return renderer.create(transformedNode);
}
