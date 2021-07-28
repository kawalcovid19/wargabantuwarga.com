import { Colors } from "~/components/ui/types";

import { accentBorderColors } from "../helpers";

describe("accentBorderColors", () => {
  it.each`
    color       | expected
    ${"blue"}   | ${"border-l-4 border-blue-400"}
    ${"gray"}   | ${"border-l-4 border-gray-400"}
    ${"green"}  | ${"border-l-4 border-green-400"}
    ${"indigo"} | ${"border-l-4 border-indigo-400"}
    ${"pink"}   | ${"border-l-4 border-pink-400"}
    ${"purple"} | ${"border-l-4 border-purple-400"}
    ${"red"}    | ${"border-l-4 border-red-400"}
    ${"yellow"} | ${"border-l-4 border-yellow-400"}
  `("returns $expected classes when color is $color", ({ color, expected }) => {
    expect(accentBorderColors(true, color as Colors)).toEqual(expected);
  });

  it(`returns yellow color when color is not defined`, () => {
    expect(accentBorderColors(true)).toEqual("border-l-4 border-yellow-400");
  });

  it(`returns nothing when accentBorder is false`, () => {
    expect(accentBorderColors(false)).toBeUndefined();
  });
});
