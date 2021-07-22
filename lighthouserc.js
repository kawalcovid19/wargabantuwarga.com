module.exports = {
  ci: {
    assert: {
      preset: "lighthouse:recommended",
      /* Note
      // Read more assertions on:
      // https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/configuration.md#assert
      */
      assertions: {
        "categories:performance": ["warn", { minScore: 0.7 }],
        "categories:seo": ["warn", { minScore: 0.7 }],
        "categories:accessibility": ["error", { minScore: 1 }],
        "uses-rel-preload": "off",
        "uses-rel-preconnect": "off",
      },
    },
  },
};
