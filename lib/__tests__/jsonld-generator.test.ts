import { makeBreadcrumbJsonLd } from "../jsonld-generator";

describe("jsonLdGenerator", () => {
  it("should return correct schema", () => {
    const param = [
      {
        name: "Province",
        href: "/provinces",
        current: true,
      },
    ];
    const result = makeBreadcrumbJsonLd(param);
    const expectedResult = {
      "@id": "https://www.wargabantuwarga.id/provinces/#breadcrumb",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          item: "https://www.wargabantuwarga.id/",
          name: "Home",
          position: 1,
        },
        {
          "@type": "ListItem",
          item: "https://www.wargabantuwarga.id/provinces",
          name: "Province",
          position: 2,
        },
      ],
    };
    expect(result).toStrictEqual(expectedResult);
  });
});
