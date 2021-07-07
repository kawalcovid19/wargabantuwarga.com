/** @type {import("next/dist/next-server/server/config-shared").NextConfig} */
module.exports = {
  // https://github.com/vercel/next.js/blob/canary/packages/next/server/config-shared.ts#L42-L65
  experimental: {
    optimizeCss: true,
    optimizeImages: true,
    scrollRestoration: true,
    workerThreads: true,
  },

  // https://nextjs.org/docs/api-reference/next.config.js/react-strict-mode
  reactStrictMode: true,
};
