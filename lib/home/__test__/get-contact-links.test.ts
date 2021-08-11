import { getContactLink } from "../get-contact-link";

type Platform = "instagram" | "telegram" | "twitter" | "whatsapp";

describe("getContactLinks", () => {
  it.each`
    platform       | contact         | expected
    ${"whatsapp"}  | ${"0812345678"} | ${`https://wa.me/${new RegExp(/^628/, "i")}`}
    ${"telegram"}  | ${"@username"}  | ${`https://t.me/${new RegExp(/^[a-zA-Z][0-9]{4}$/)}`}
    ${"instagram"} | ${"@username"}  | ${`https://instagram.com/${new RegExp(/[a-zA-Z&&[^@]]+/)}`}
    ${"twitter"}   | ${"@username"}  | ${`https://twitter.com/${new RegExp(/[a-zA-Z&&[^@]]+/)}`}
  `(
    "returns $expected contact url when platform is $platform",
    ({ platform, contact, expected }) => {
      expect(getContactLink(platform as Platform, contact as string)).toEqual(
        expected,
      );
    },
  );
});
