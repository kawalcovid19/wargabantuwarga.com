import { Colors } from "~/components/ui/types";

import { accentBorderColors, alertColors } from "../helpers";

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

describe("alertColors", () => {
  it.each`
    color       | expected
    ${"blue"}   | ${"bg-blue-50 text-blue-700"}
    ${"gray"}   | ${"bg-gray-50 text-gray-700"}
    ${"green"}  | ${"bg-green-50 text-green-700"}
    ${"indigo"} | ${"bg-indigo-50 text-indigo-700"}
    ${"pink"}   | ${"bg-pink-50 text-pink-700"}
    ${"purple"} | ${"bg-purple-50 text-purple-700"}
    ${"red"}    | ${"bg-red-50 text-red-700"}
    ${"yellow"} | ${"bg-yellow-50 text-yellow-700"}
  `("returns $expected classes when color is $color", ({ color, expected }) => {
    expect(alertColors(color as Colors)).toEqual(expected);
  });

  it(`returns gray color when color is not defined`, () => {
    expect(alertColors()).toEqual("bg-gray-50 text-gray-700");
  });
});
