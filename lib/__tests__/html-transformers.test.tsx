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
