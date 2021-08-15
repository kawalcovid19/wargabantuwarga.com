import { render } from "@testing-library/react";
import { InputTextarea } from "../input-textarea";

describe("InputText", () => {
  it("renders correctly", () => {
    const { container } = render(<InputTextarea />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <textarea
        class="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full text-sm border-gray-300 rounded-md"
        rows="4"
      />
    `);
  });
});
