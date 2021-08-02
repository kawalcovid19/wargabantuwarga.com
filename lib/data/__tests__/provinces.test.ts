import provinces from "../provinces";
import { getKebabCase, stripTags } from "~/lib/string-utils";

describe("provinces", () => {
  it("should returns a list of provinces with the correct province slug", () => {
    const [province1, province2] = provinces;

    expect(province1.slug).toEqual(getKebabCase(province1.name));
    expect(province2.slug).toEqual(getKebabCase(province2.name));
  });

  it("should returns lists of contacts within provinces with the correct contact slug", () => {
    const [province1] = provinces;
    const [contact1, contact2] = province1.data;

    expect(contact1.slug).toEqual(
      [
        getKebabCase(contact1.kebutuhan as string),
        getKebabCase(contact1.keterangan as string),
        getKebabCase(contact1.lokasi as string),
        getKebabCase(contact1.penyedia as string),
        getKebabCase(stripTags(contact1.kontak as string)),
      ].join("-"),
    );
    expect(contact2.slug).toEqual(
      [
        getKebabCase(contact2.kebutuhan as string),
        getKebabCase(contact2.keterangan as string),
        getKebabCase(contact2.lokasi as string),
        getKebabCase(contact2.penyedia as string),
        getKebabCase(stripTags(contact2.kontak as string)),
      ].join("-"),
    );
  });
});
