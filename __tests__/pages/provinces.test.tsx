import provinces from "~/lib/provinces";
import { getInitial } from "~/lib/string-utils";
import { getStaticProps } from "~/pages/provinces";

describe("getStaticProps", () => {
  it("returns the props from sheets correctly", () => {
    const provincesList = provinces.map(({ name, slug, data }) => ({
      initials: getInitial(name),
      name,
      slug,
      count: data.length,
    }));

    expect(getStaticProps({})).toEqual({
      props: { provincesList },
    });
  });
});
