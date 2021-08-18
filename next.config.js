const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const withPWA = require("next-pwa");
const workboxConfig = require("./wb.config");

const ContentSecurityPolicy = `
  default-src 'self';
  connect-src 'self' analytics.google.com stats.g.doubleclick.net res.cloudinary.com;
  script-src 'self' 'unsafe-inline' 'unsafe-eval' *.googletagmanager.com *.netlify.com unpkg.com media-library.cloudinary.com analytics.google.com *.google-analytics.com;
  style-src 'self' 'unsafe-inline';
  frame-src 'self' cloudinary.com;
  img-src 'self' blob: data: https:;
  frame-ancestors 'none';
`;

/** @type {import("next/dist/lib/config-shared").Header['headers']} */
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
  // Disables camera, microphone, and geolocation.
  // `interest-cohort=()` opts the website out of Google's FLoC: https://amifloced.org/
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
];

/** @type {import("next/dist/next-server/server/config-shared").NextConfig} */
module.exports = withPWA(
  withBundleAnalyzer({
    pwa: workboxConfig,

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
  }),
);
