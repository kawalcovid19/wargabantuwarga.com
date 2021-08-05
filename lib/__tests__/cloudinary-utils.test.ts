import { getUniquePath, getCloudName } from "../image/cloudinary-utils";

const CLOUDINARY_URL_EXAMPLES = {
  basic:
    "https://res.cloudinary.com/wargabantuwarga/image/upload/v1627049958/hero_banner_desktop_zat71c.png",
  transformed:
    "https://res.cloudinary.com/wargabantuwarga/image/upload/c_scale,w_720,q_90,cs_tinysrgb,f_auto/v1627049958/hero_banner_desktop_zat71c.png",
  multiTransformed:
    "https://res.cloudinary.com/wargabantuwarga/image/upload/c_scale,w_720/w_900/v1627049958/hero_banner_desktop_zat71c.png",
  otherCloudName:
    "https://res.cloudinary.com/some-other-name/image/upload/c_scale,w_720/w_900/v1627049958/hero_banner_desktop_zat71c.png",
  invalid: "res.cloudinary.com/",
};

const CLOUDINARY_END_PATH = "v1627049958/hero_banner_desktop_zat71c.png";

describe("getUniquePath", () => {
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

describe("getCloudName", () => {
  it.each`
    input                                       | expected
    ${CLOUDINARY_URL_EXAMPLES.basic}            | ${"wargabantuwarga"}
    ${CLOUDINARY_URL_EXAMPLES.transformed}      | ${"wargabantuwarga"}
    ${CLOUDINARY_URL_EXAMPLES.multiTransformed} | ${"wargabantuwarga"}
    ${CLOUDINARY_URL_EXAMPLES.otherCloudName}   | ${"some-other-name"}
    ${CLOUDINARY_URL_EXAMPLES.invalid}          | ${null}
    ${null}                                     | ${null}
    ${123}                                      | ${null}
  `(
    "should return '$expected' when '$input' is provided",
    ({ input, expected }) => {
      expect(getCloudName(input as string)).toBe(expected);
    },
  );
});
