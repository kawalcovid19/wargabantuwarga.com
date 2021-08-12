import { getContactLink } from "../get-contact-link";

type Platform = "instagram" | "telegram" | "twitter" | "whatsapp";

describe("getContactLinks", () => {
  it.each`
    platform       | contact         | expected
    ${"whatsapp"}  | ${"0812345678"} | ${`https://wa.me/62812345678`}
    ${"telegram"}  | ${"@username"}  | ${`https://t.me/@username`}
    ${"instagram"} | ${"@username"}  | ${`https://instagram.com/username`}
    ${"twitter"}   | ${"@username"}  | ${`https://twitter.com/username`}
  `(
    "returns $expected contact url when platform is $platform",
    ({ platform, contact, expected }) => {
      expect(getContactLink(platform as Platform, contact as string)).toEqual(
        expected,
      );
    },
  );
});
