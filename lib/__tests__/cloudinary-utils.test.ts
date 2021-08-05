import {
  getCloudName,
  getDefaultCloudOptions,
  getDefaultOptions,
  getDefaultTransformOptions,
  getUniquePath,
} from "~/lib/image/cloudinary-utils";
import {
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_DEFAULT_COLOR_SPACE,
  CLOUDINARY_DEFAULT_QUALITY,
  CLOUDINARY_DEFAULT_RESIZE_TYPE,
} from "~/constants/image";

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

const CLOUDINARY_DEFAULT_OPTIONS = {
  cloud: { cloudName: CLOUDINARY_CLOUD_NAME },
  transformations: {
    colorSpace: CLOUDINARY_DEFAULT_COLOR_SPACE,
    quality: CLOUDINARY_DEFAULT_QUALITY,
    resize: {
      type: CLOUDINARY_DEFAULT_RESIZE_TYPE,
    },
  },
};

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

describe("getDefaultCloudOptions", () => {
  it("should return default `cloud` options object", () => {
    expect(getDefaultCloudOptions()).toEqual(CLOUDINARY_DEFAULT_OPTIONS.cloud);
  });

  it("should return custom `cloud` options object", () => {
    expect(getDefaultCloudOptions("some-other-name")).toEqual({
      cloudName: "some-other-name",
    });
  });
});

describe("getDefaultTransformOptions", () => {
  it("should return default `transformations` options object", () => {
    expect(getDefaultTransformOptions()).toEqual(
      CLOUDINARY_DEFAULT_OPTIONS.transformations,
    );
  });

  it("should return custom `transformations` options object", () => {
    expect(getDefaultTransformOptions(555)).toEqual({
      ...CLOUDINARY_DEFAULT_OPTIONS.transformations,
      resize: {
        ...CLOUDINARY_DEFAULT_OPTIONS.transformations.resize,
        width: 555,
      },
    });
  });
});

describe("getDefaultOptions", () => {
  it("should return default options without width", () => {
    expect(getDefaultOptions()).toEqual(CLOUDINARY_DEFAULT_OPTIONS);
  });

  it("should return default options with custom width", () => {
    const customOptions = CLOUDINARY_DEFAULT_OPTIONS;
    // @ts-expect-error width is optional field; no ready-to-use type definitions for transformations from Cloudinary
    customOptions.transformations.resize.width = 123;

    expect(getDefaultOptions(123)).toEqual(customOptions);
  });

  it("should return default options with custom width & cloud name", () => {
    const customOptions = CLOUDINARY_DEFAULT_OPTIONS;
    // @ts-expect-error width is optional field; no ready-to-use type definitions for transformations from Cloudinary
    customOptions.transformations.resize.width = 123;
    customOptions.cloud.cloudName = "some-other-user";

    expect(getDefaultOptions(123, "some-other-user")).toEqual(customOptions);
  });
});
