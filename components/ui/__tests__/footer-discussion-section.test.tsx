import { render } from "@testing-library/react";
import { FooterDiscussionSection } from "~/components/ui/footer-discussion-section";

describe("FooterDiscussionSection", () => {
  it("renders correctly", () => {
    const { container } = render(<FooterDiscussionSection />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="w-full sm:max-w-xl mx-auto"
      >
        <section
          class="bg-white overflow-hidden p-4 mt-2"
        >
          <span>
            Ada usulan atau laporan terkait website ini? 
          </span>
          <a
            class="underline text-blue-800"
            href="https://kcov.id/wbw-discuss"
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            Sampaikan masukan Anda di sini.
          </a>
        </section>
      </div>
    `);
  });
});
