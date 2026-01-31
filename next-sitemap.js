module.exports = {
  siteUrl: "https://www.wargabantuwarga.id",
  generateRobotsTxt: true,
  sitemapSize: 1000,
  exclude: ["/provinces/tentang-database-0"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
