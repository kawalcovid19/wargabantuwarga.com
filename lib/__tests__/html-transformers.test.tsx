import htmr from "htmr";
import { render } from "@testing-library/react";
import { htmrTransform } from "../htmr-transformers";

describe("htmrTransform", () => {
  it("transforms a URL starting with http into an external link correctly", () => {
    expect(htmrRenderWithTransformer('<a href="http://localhost">local</a>'))
      .toMatchInlineSnapshot(`
      <div>
        <a
          class="text-indigo-600 hover:text-indigo-500 relative"
          href="http://localhost"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          local
        </a>
      </div>
    `);
  });

  it("transforms a URL not starting with http into an external link correctly", () => {
    expect(htmrRenderWithTransformer('<a href="/lbh">LBH</a>'))
      .toMatchInlineSnapshot(`
      <div>
        <a
          class="text-indigo-600 hover:text-indigo-500"
          href="/lbh"
        >
          LBH
        </a>
      </div>
    `);
  });

  it("transform an anchor tag without href property", () => {
    expect(htmrRenderWithTransformer("<a>LBH</a>")).toMatchInlineSnapshot(`
      <div>
        <a
          class="text-indigo-600 hover:text-indigo-500"
        >
          LBH
        </a>
      </div>
    `);
  });

  it("adds kebab-case id to headings correctly", () => {
    expect(
      htmrRenderWithTransformer(
        `<main><h1>Heading 1</h1><h2>Heading 2</h2><h3>Heading 3</h3><h4>Heading 4</h4><h5>Heading 5</h5><h6>Heading 6</h6></main>`,
      ),
    ).toMatchInlineSnapshot(`
      <div>
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
      </div>
    `);
  });

  it("styles bold tags correctly", () => {
    expect(htmrRenderWithTransformer(`<b>bold</b>`)).toMatchInlineSnapshot(`
      <div>
        <b
          class="font-bold text-gray-900"
        >
          bold
        </b>
      </div>
    `);
  });
  it("styles strong tags correctly", () => {
    expect(htmrRenderWithTransformer(`<strong>strong</strong>`))
      .toMatchInlineSnapshot(`
      <div>
        <strong
          class="font-bold text-gray-900"
        >
          strong
        </strong>
      </div>
    `);
  });
  it("styles mark tags correctly", () => {
    expect(htmrRenderWithTransformer(`<mark>mark</mark>`))
      .toMatchInlineSnapshot(`
      <div>
        <span
          class="bg-yellow-200"
        >
          mark
        </span>
      </div>
    `);
  });

  it("renders image tag correctly when src is provided", () => {
    expect(htmrRenderWithTransformer(`<img src="/logo" alt="Logo" />`))
      .toMatchInlineSnapshot(`
      <div>
        <img
          alt="Logo"
          loading="lazy"
          src="/logo"
        />
      </div>
    `);
  });

  it("renders image tag correctly when alt is not provided", () => {
    expect(htmrRenderWithTransformer(`<img src="/logo" />`))
      .toMatchInlineSnapshot(`
      <div>
        <img
          alt=""
          loading="lazy"
          src="/logo"
        />
      </div>
    `);
  });

  it("renders nothing when the image tag doesn't have src props", () => {
    expect(
      htmrRenderWithTransformer(`<img alt="Logo" />`),
    ).toMatchInlineSnapshot(`<div />`);
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
  return render(transformedNode).container;
}
