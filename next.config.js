const { withSentryConfig } = require("@sentry/nextjs");

const userNextConfig = { reactStrictMode: true };

module.exports = withSentryConfig(userNextConfig);
