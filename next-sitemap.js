module.exports = {
  siteUrl: "https://www.wargabantuwarga.com",
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
