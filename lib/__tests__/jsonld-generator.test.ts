import { makeBreadcrumbJsonLd } from "../jsonld-generator";

describe("jsonLdGenerator", () => {
  it("should return correct schema", () => {
    const param = [
      {
        name: "Province",
        href: "/provinces/",
      },
    ];
    const result = makeBreadcrumbJsonLd(param);
    const expectedResult = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          item: "https://www.wargabantuwarga.com/",
          name: "Home",
          position: 1,
        },
        {
          "@type": "ListItem",
          item: "https://www.wargabantuwarga.com/provinces/",
          name: "Province",
          position: 2,
        },
      ],
    };

    expect(result).toStrictEqual(expectedResult);
  });
});
