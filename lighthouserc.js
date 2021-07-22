module.exports = {
  ci: {
    assert: {
      preset: "lighthouse:no-pwa",
      /* Note
      // Read more assertions on:
      // https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/configuration.md#assert
      */
      assertions: {
        "categories:performance": ["warn", { minScore: 0.6 }],
        "categories:seo": ["warn", { minScore: 0.7 }],
        "categories:accessibility": ["error", { minScore: 1 }],

        // User Timing
        interactive: ["warn", { minScore: 0.7 }],
        "largest-contentful-paint": ["warn", { minScore: 0.7 }],
        "max-potential-fid": ["warn", { minScore: 0.01 }],

        canonical: "off",
        "crawlable-anchors": "off",
        "csp-xss": "off",
        "is-crawlable": "off",
        "legacy-javascript": "off",
        "no-vulnerable-libraries": "off",
        "uses-rel-preload": "off",
        "uses-rel-preconnect": "off",
        "unused-css-rules": "off",
        "unused-javascript": "off",
        "tap-targets": ["warn", { minScore: 0.3 }],
        "dom-size": ["warn", { minScore: 0.5 }],
        "mainthread-work-breakdown": ["warn", { minScore: 0.5 }],
      },
    },
  },
};
