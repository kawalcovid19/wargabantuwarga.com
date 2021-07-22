const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import("next/dist/next-server/server/config-shared").NextConfig} */
module.exports = withBundleAnalyzer({
  // https://github.com/vercel/next.js/blob/canary/packages/next/server/config-shared.ts#L42-L65
  experimental: {
    optimizeCss: true,
    optimizeImages: true,
    workerThreads: true,
  },

  future: {
    // @nibraswastaken told me to add this - @resir014
    strictPostcssConfiguration: true,
  },

  images: {
    deviceSizes: [360, 420, 720],
    domains: ["firebase-kanvas.imgix.net", "res.cloudinary.com"],
    loader: "cloudinary",
    path: "https://res.cloudinary.com/ekafyi/image/upload/", // TODO replace with WBW username
  },

  // https://nextjs.org/docs/api-reference/next.config.js/react-strict-mode
  reactStrictMode: true,

  // https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
  webpack(config, { dev, isServer }) {
    // https://github.com/leerob/leerob.io/blob/9adc510cbfb3da88c3b0ad15632eb876ca91b607/next.config.js#L27-L33
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat",
      });
    }

    config.module.rules.push({
      test: /\.md$/,
      use: {
        loader: "frontmatter-markdown-loader",
      },
    });

    return config;
  },
});
