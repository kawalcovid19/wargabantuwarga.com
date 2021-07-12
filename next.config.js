const { withSentryConfig } = require("@sentry/nextjs");

const userNextConfig = {
  reactStrictMode: true,
  webpack: (configuration) => {
    configuration.module.rules.push({
      test: /\.md$/,
      use: {
        loader: "frontmatter-markdown-loader",
      },
    });
    return configuration;
  },
};

module.exports = withSentryConfig(userNextConfig);
