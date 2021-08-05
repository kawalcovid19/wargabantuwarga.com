import { render } from "@testing-library/react";
import ChatbotSection from "../chatbot-section";

describe("ChatbotSection", () => {
  it("renders section correctly", () => {
    const { container } = render(<ChatbotSection />);

    expect(container.firstChild).toMatchInlineSnapshot(`
<div
  class="space-y-4 px-4 py-6 text-center bg-white"
>
  <div
    class="space-y-2"
  >
    <h2
      class="text-gray-800 text-sm font-semibold"
    >
      CovidAsha Chatbot 24x7
    </h2>
    <p
      class="text-gray-600 text-sm"
    >
      Layanan berbasis chatbot untuk mencari semua informasi terkait COVID-19
    </p>
  </div>
  <a
    class="flex flex-row px-4 py-2 text-sm rounded-full items-center justify-center border border-transparent font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-75 text-white bg-[#25d366] focus:ring-[#25d366]"
    href="https://bit.ly/hotlinewarga"
    rel="nofollow noopener noreferrer"
    target="_blank"
  >
    <svg
      aria-hidden="true"
      class="-ml-1 mr-2 h-5 w-5"
      fill="none"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clip-rule="evenodd"
        d="M9.998 1.667h.004c4.595 0 8.331 3.738 8.331 8.333 0 4.595-3.736 8.333-8.33 8.333a8.261 8.261 0 01-4.585-1.377l-2.64.844a.3.3 0 01-.375-.381l.85-2.535A8.271 8.271 0 011.667 10c0-4.596 3.736-8.333 8.33-8.333zm3.218 12.943c.636-.137 1.434-.608 1.635-1.176.201-.568.201-1.053.143-1.156-.047-.082-.159-.135-.325-.215l-.14-.07c-.246-.121-1.436-.71-1.661-.788-.221-.083-.431-.054-.598.181l-.095.134c-.201.282-.395.555-.556.729-.147.156-.387.176-.588.093a8.376 8.376 0 00-.075-.031c-.318-.129-1.024-.414-1.879-1.175-.72-.641-1.21-1.44-1.352-1.68-.14-.24-.02-.381.092-.511l.006-.008c.071-.088.14-.162.21-.236.05-.053.101-.106.152-.166l.023-.025c.109-.126.174-.2.247-.357.084-.161.024-.328-.035-.451-.041-.086-.293-.698-.51-1.224l-.24-.58c-.16-.386-.284-.4-.528-.41l-.023-.002a4.924 4.924 0 00-.256-.008c-.32 0-.652.094-.853.299a22.89 22.89 0 01-.022.022c-.257.262-.83.845-.83 2.006 0 1.164.826 2.29.979 2.499.004.005.008.01.01.015.01.012.027.037.053.073.312.452 1.831 2.653 4.097 3.591 1.914.794 2.483.72 2.919.627z"
        fill="currentColor"
        fill-rule="evenodd"
      />
    </svg>
    Kirim chat sekarang
  </a>
</div>
`);
  });
});
