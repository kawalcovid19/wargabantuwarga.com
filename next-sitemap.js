module.exports = {
  siteUrl: "https://www.wargabantuwarga.com",
  generateRobotsTxt: true,
  sitemapSize: 1000,
  exclude: [""],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
