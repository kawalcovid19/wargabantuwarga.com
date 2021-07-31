import { BaseColors } from "~/components/ui/types";

import { badgeColors, badgeRoundedStyles, badgeSizes } from "../helpers";
import { BadgeSizes } from "../types";

describe("badgeRoundedStyles", () => {
  it(`returns medium rounded when badgeRoundedStyles is true`, () => {
    expect(badgeRoundedStyles(true)).toEqual("rounded-md");
  });

  it(`returns full rounded when badgeRoundedStyles is false`, () => {
    expect(badgeRoundedStyles(false)).toEqual("rounded-full");
  });
});

describe("badgeColors", () => {
  it.each`
    color           | expected
    ${"blue"}       | ${"bg-blue-100 text-blue-800"}
    ${"gray"}       | ${"bg-gray-100 text-gray-800"}
    ${"green"}      | ${"bg-green-100 text-green-800"}
    ${"indigo"}     | ${"bg-indigo-100 text-indigo-800"}
    ${"light-blue"} | ${"bg-light-blue-100 text-light-blue-800"}
    ${"pink"}       | ${"bg-pink-100 text-pink-800"}
    ${"purple"}     | ${"bg-purple-100 text-purple-800"}
    ${"red"}        | ${"bg-red-100 text-red-800"}
    ${"yellow"}     | ${"bg-yellow-100 text-yellow-800"}
  `("returns $expected classes when color is $color", ({ color, expected }) => {
    expect(badgeColors(color as BaseColors)).toEqual(expected);
  });

  it(`returns gray color when color is not defined`, () => {
    expect(badgeColors()).toEqual("bg-gray-100 text-gray-800");
  });
});

describe("badgeSizes", () => {
  it.each`
    size       | expected
    ${"basic"} | ${"px-2.5 py-0.5 text-xs"}
    ${"large"} | ${"px-3 py-0.5 text-sm"}
  `("returns $expected classes when size is $size", ({ size, expected }) => {
    expect(badgeSizes(size as BadgeSizes)).toEqual(expected);
  });

  it(`returns basic size when size is not defined`, () => {
    expect(badgeSizes()).toEqual("px-2.5 py-0.5 text-xs");
  });
});
