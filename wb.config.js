// Read more about next-pwa configuation
// https://github.com/shadowwalker/next-pwa
module.exports = {
  disable: process.env.NODE_ENV === "development",
  dest: "public",
  register: true,
  scope: "/",
  sw: "service-worker.js",
  publicExcludes: [
    "/robots.txt",
    "/sitemap.xml",
    "/sitemap-*.xml",
    "/google6feea491511f41d3.html",
    "/admin/**/*",
  ],
  fallback: {
    document: "/_error",
  },
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/res\.cloudinary\.com\/.*\/image\/upload\//,
      handler: "CacheFirst",
      options: {
        cacheName: "wbw-images",
        expiration: {
          maxAgeSeconds: 60 * 60 * 24 * 30,
          maxEntries: 200,
        },
      },
    },
    {
      urlPattern: /.(png|jpg|jpeg|webp|svg|woff|woff2)$/,
      handler: "CacheFirst",
      options: {
        cacheName: "wbw-assets",
        expiration: {
          maxAgeSeconds: 60 * 60 * 24 * 7,
          maxEntries: 50,
        },
      },
    },
    {
      urlPattern: /.(js|css)$/,
      handler: "StaleWhileRevalidate",
      options: {
        cacheName: "wbw-jscss",
      },
    },
  ],
};
