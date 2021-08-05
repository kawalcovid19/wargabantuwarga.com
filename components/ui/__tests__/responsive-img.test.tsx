import React from "react";

import { render } from "@testing-library/react";
import { ResponsiveImg } from "~/components/ui/responsive-img";

const CLOUDINARY_URL =
  "https://res.cloudinary.com/wargabantuwarga/image/upload/v1627049958/hero_banner_desktop_zat71c.png";

describe("esponsiveImg", () => {
  it("does not render incomplete data", () => {
    const { container } = render(<ResponsiveImg />);

    expect(container.firstChild).toBeNull();
  });

  it("renders non-Cloudinary image", () => {
    const { container } = render(<ResponsiveImg src="/favicon-72x72.png" />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <img
        alt=""
        loading="lazy"
        src="/favicon-72x72.png"
      />
    `);
  });

  it("renders non-Cloudinary image with custom alt text", () => {
    const { container } = render(
      <ResponsiveImg alt="icon logo WBW" src="/favicon-72x72.png" />,
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      <img
        alt="icon logo WBW"
        loading="lazy"
        src="/favicon-72x72.png"
      />
    `);
  });

  it("renders Cloudinary image responsively", () => {
    const { container } = render(<ResponsiveImg src={CLOUDINARY_URL} />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <img
        alt=""
        loading="lazy"
        sizes="(min-width: 36rem) 34rem, 100vw"
        src="${CLOUDINARY_URL}"
        srcset="https://res.cloudinary.com/wargabantuwarga/image/upload/c_scale,w_420,q_auto:eco,cs_tinysrgb,f_auto/hero_banner_desktop_zat71c 420w, https://res.cloudinary.com/wargabantuwarga/image/upload/c_scale,w_720,q_auto:eco,cs_tinysrgb,f_auto/hero_banner_desktop_zat71c 720w"
      />
    `);
  });
});
