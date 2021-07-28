import {
  buttonBlockStyles,
  outlineButtonColors,
  primaryButtonColors,
  secondaryButtonColors,
} from "../helpers";
import { ButtonColors, ButtonIconPositions } from "../types";

describe("buttonBlockStyles", () => {
  it.each`
    iconPosition | expected
    ${"left"}    | ${["inline-flex", "flex-row"]}
    ${"right"}   | ${["inline-flex", "flex-row-reverse"]}
  `(
    "returns $expected classes when iconPosition is $iconPosition",
    ({ iconPosition, expected }) => {
      expect(
        buttonBlockStyles(false, iconPosition as ButtonIconPositions),
      ).toEqual(expected);
    },
  );
});

describe("primaryButtonColors", () => {
  it.each`
    color           | expected
    ${"brand"}      | ${"text-white bg-brand-500 hover:bg-brand-600 focus:ring-brand-500"}
    ${"blue"}       | ${"text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-500"}
    ${"gray"}       | ${"text-white bg-gray-600 hover:bg-gray-700 focus:ring-gray-500"}
    ${"green"}      | ${"text-white bg-green-600 hover:bg-green-700 focus:ring-green-500"}
    ${"indigo"}     | ${"text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500"}
    ${"light-blue"} | ${"text-white bg-light-blue-400 hover:bg-light-blue-500 focus:ring-light-blue-500"}
    ${"pink"}       | ${"text-white bg-pink-600 hover:bg-pink-700 focus:ring-pink-500"}
    ${"purple"}     | ${"text-white bg-purple-600 hover:bg-purple-700 focus:ring-purple-500"}
    ${"red"}        | ${"text-white bg-red-600 hover:bg-red-700 focus:ring-red-500"}
    ${"yellow"}     | ${"text-white bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-500"}
  `("returns $expected classes when color is $color", ({ color, expected }) => {
    expect(primaryButtonColors(color as ButtonColors)).toEqual(expected);
  });

  it(`returns gray when color is not defined`, () => {
    expect(primaryButtonColors()).toEqual(
      "text-white bg-gray-600 hover:bg-gray-700 focus:ring-gray-500",
    );
  });
});

describe("secondaryButtonColors", () => {
  it.each`
    color           | expected
    ${"brand"}      | ${"text-brand-700 bg-brand-100 hover:bg-brand-200 focus:ring-brand-500"}
    ${"blue"}       | ${"text-blue-700 bg-blue-100 hover:bg-blue-200 focus:ring-blue-500"}
    ${"gray"}       | ${"text-gray-700 bg-gray-100 hover:bg-gray-200 focus:ring-gray-500"}
    ${"green"}      | ${"text-green-700 bg-green-100 hover:bg-green-200 focus:ring-green-500"}
    ${"indigo"}     | ${"text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:ring-indigo-500"}
    ${"light-blue"} | ${"text-light-blue-700 bg-light-blue-100 hover:bg-light-blue-200 focus:ring-light-blue-500"}
    ${"pink"}       | ${"text-pink-700 bg-pink-100 hover:bg-pink-200 focus:ring-pink-500"}
    ${"purple"}     | ${"text-purple-700 bg-purple-100 hover:bg-purple-200 focus:ring-purple-500"}
    ${"red"}        | ${"text-red-700 bg-red-100 hover:bg-red-200 focus:ring-red-500"}
    ${"yellow"}     | ${"text-yellow-700 bg-yellow-100 hover:bg-yellow-200 focus:ring-yellow-500"}
  `("returns $expected classes when color is $color", ({ color, expected }) => {
    expect(secondaryButtonColors(color as ButtonColors)).toEqual(expected);
  });

  it(`returns gray when color is not defined`, () => {
    expect(secondaryButtonColors()).toEqual(
      "text-gray-700 bg-gray-100 hover:bg-gray-200 focus:ring-gray-500",
    );
  });
});

describe("outlineButtonColors", () => {
  it.each`
    color           | expected
    ${"brand"}      | ${"text-brand-500 border-brand-500 hover:bg-blue-100 focus:ring-brand-500"}
    ${"blue"}       | ${"text-blue-500 border-blue-500 hover:bg-blue-100 focus:ring-blue-500"}
    ${"gray"}       | ${"text-gray-700 border-gray-700 hover:bg-gray-100 focus:ring-gray-500"}
    ${"green"}      | ${"text-green-500 border-green-500 hover:bg-green-100 focus:ring-green-500"}
    ${"indigo"}     | ${"text-indigo-500 border-indigo-500 hover:bg-indigo-100 focus:ring-indigo-500"}
    ${"light-blue"} | ${"text-light-blue-400 border-light-blue-400 hover:bg-light-blue-100 focus:ring-light-blue-500"}
    ${"pink"}       | ${"text-pink-500 border-pink-500 hover:bg-pink-100 focus:ring-pink-500"}
    ${"purple"}     | ${"text-purple-500 border-purple-500 hover:bg-purple-100 focus:ring-purple-500"}
    ${"red"}        | ${"text-red-500 border-red-500 hover:bg-red-100 focus:ring-red-500"}
    ${"yellow"}     | ${"text-yellow-500 border-yellow-500 hover:bg-yellow-100 focus:ring-yellow-500"}
  `("returns $expected classes when color is $color", ({ color, expected }) => {
    expect(outlineButtonColors(color as ButtonColors)).toEqual(expected);
  });

  it(`returns gray when color is not defined`, () => {
    expect(outlineButtonColors()).toEqual(
      "text-gray-700 border-gray-700 hover:bg-gray-100 focus:ring-gray-500",
    );
  });
});
