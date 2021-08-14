import { render } from "@testing-library/react";
import { HomePageTelemedicineCTA } from "..//homepage-telemedicine-cta";

describe("HomePageTelemedicineCta", () => {
  it("renders correctly", () => {
    const { container } = render(<HomePageTelemedicineCTA />);

    expect(container.firstChild).toMatchInlineSnapshot(`
<section
  class="bg-white overflow-hidden px-4 py-6 space-y-4 text-center"
>
  <a
    href="/telemedicine"
  >
    <div
      style="display: block; overflow: hidden; position: relative; box-sizing: border-box; margin: 0px;"
    >
      <div
        style="display: block; box-sizing: border-box; padding-top: 35.97560975609756%;"
      />
      <noscript />
      <img
        alt="Telemedicine Gratis (Inisiatif Beberapa Dokter) - Cek Sekarang"
        decoding="async"
        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        style="position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px; box-sizing: border-box; padding: 0px; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;"
      />
    </div>
  </a>
</section>
`);
  });
});
