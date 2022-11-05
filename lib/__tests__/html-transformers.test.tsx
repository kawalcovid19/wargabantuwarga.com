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

  it("styles bold, strong, and mark tags correctly", () => {
    expect(
      htmrRenderWithTransformer(
        `<main><b>Bold</b> and <strong>Strong</strong> with some <mark>Mark</mark></main>`,
      ),
    ).toMatchInlineSnapshot(`
      <main>
        <b
          className="font-bold text-gray-900"
        >
          Bold
        </b>
         and 
        <strong
          className="font-bold text-gray-900"
        >
          Strong
        </strong>
         with some 
        <span
          className="bg-yellow-200"
        >
          Mark
        </span>
      </main>
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
