import { getContactLink } from "../get-contact-link";

type Platform = "instagram" | "telegram" | "twitter" | "whatsapp";

const getContact = (platform: Platform) => {
  switch (platform) {
    case "whatsapp":
      return "0812345678";
    default:
      return "@username";
  }
};

describe("getContactLinks", () => {
  it.each`
    platform       | expected
    ${"whatsapp"}  | ${`https://wa.me/${new RegExp(/^628/, "i")}`}
    ${"telegram"}  | ${`https://t.me/${new RegExp(/^[a-zA-Z][0-9]{4}$/)}`}
    ${"instagram"} | ${`https://instagram.com/${new RegExp(/[a-zA-Z&&[^@]]+/)}`}
    ${"twitter"}   | ${`https://twitter.com/${new RegExp(/[a-zA-Z&&[^@]]+/)}`}
  `(
    "returns $expected contact url when platform is $platform",
    ({ platform, expected }) => {
      expect(
        getContactLink(platform as Platform, getContact(platform as Platform)),
      ).toEqual(expected);
    },
  );
});
