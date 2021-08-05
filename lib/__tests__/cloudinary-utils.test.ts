import { getUniquePath } from "../image/cloudinary-utils";

const CLOUDINARY_URL_EXAMPLES = {
  basic:
    "https://res.cloudinary.com/wargabantuwarga/image/upload/v1627049958/hero_banner_desktop_zat71c.png",
  transformed:
    "https://res.cloudinary.com/wargabantuwarga/image/upload/c_scale,w_720,q_90,cs_tinysrgb,f_auto/v1627049958/hero_banner_desktop_zat71c.png",
  multiTransformed:
    "https://res.cloudinary.com/wargabantuwarga/image/upload/c_scale,w_720/w_900/v1627049958/hero_banner_desktop_zat71c.png",
  invalid: "res.cloudinary.com/",
};

const CLOUDINARY_END_PATH = "v1627049958/hero_banner_desktop_zat71c.png";

describe("cloudinary-utils", () => {
  it.each`
    input                                       | expected
    ${CLOUDINARY_URL_EXAMPLES.basic}            | ${CLOUDINARY_END_PATH}
    ${CLOUDINARY_URL_EXAMPLES.transformed}      | ${CLOUDINARY_END_PATH}
    ${CLOUDINARY_URL_EXAMPLES.multiTransformed} | ${CLOUDINARY_END_PATH}
    ${CLOUDINARY_URL_EXAMPLES.invalid}          | ${null}
    ${null}                                     | ${null}
    ${123}                                      | ${null}
  `(
    "should return '$expected' when '$input' is provided",
    ({ input, expected }) => {
      expect(getUniquePath(input as string)).toBe(expected);
    },
  );
});
