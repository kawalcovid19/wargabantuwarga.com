import { InputText } from "../input-text";

import { render } from "@testing-library/react";

describe("InputText", () => {
  it("renders correctly", () => {
    const { container } = render(<InputText />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <input
        class="shadow-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-sm border-gray-300"
        type="text"
      />
    `);
  });
});
