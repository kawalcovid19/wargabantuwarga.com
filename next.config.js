const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import("next/dist/lib/config-shared").Header['headers']} */

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' *.googletagmanager.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' blob: data: https:;
`;

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy.replace(/\n/g, ""),
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
];

/** @type {import("next/dist/next-server/server/config-shared").NextConfig} */
module.exports = withBundleAnalyzer({
  // https://github.com/vercel/next.js/blob/v11.0.1/packages/next/next-server/server/config-shared.ts#L42-L65
  experimental: {
    optimizeCss: true,
    optimizeImages: true,
    workerThreads: true,
  },

  future: {
    // @nibraswastaken told me to add this - @resir014
    strictPostcssConfiguration: true,
  },

  // This config won't be loaded until Netlify supports the `headers` option on `next.config.js`.
  // For now, when you make changes here, also make the necessary changes on `netlify.toml`.
  // https://github.com/netlify/netlify-plugin-nextjs/issues/150
  headers: async () => {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },

  images: {
    deviceSizes: [360, 420, 720],
    domains: ["firebase-kanvas.imgix.net", "res.cloudinary.com"],
    loader: "cloudinary",
    path: "https://res.cloudinary.com/wargabantuwarga/image/upload/",
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
