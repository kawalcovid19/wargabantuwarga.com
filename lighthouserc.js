module.exports = {
  ci: {
    assert: {
      // preset: "lighthouse:no-pwa",
      /* Note
      // Read more assertions on:
      // https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/configuration.md#assert
      */
      assertions: {
        "categories:performance": ["error", { minScore: 0.5 }],
        "categories:accessibility": ["error", { minScore: 0.9 }],
        "categories:seo": ["warn", { minScore: 0.7 }],

        // Core Web Vitals
        "cumulative-layout-shift": ["warn", { minScore: 0.5 }],
        "largest-contentful-paint": ["warn", { minScore: 0.5 }],
        "total-blocking-time": ["warn", { minScore: 0.5 }],

        // disable assertion
        canonical: "off",
        "crawlable-anchors": "off",
        "csp-xss": "off",
        interactive: "off",
        "is-crawlable": "off",
        "legacy-javascript": "off",
        "mainthread-work-breakdown": "off",
        "max-potential-fid": "off",
        "no-vulnerable-libraries": "off",
        "uses-rel-preload": "off",
        "uses-rel-preconnect": "off",
        "unused-css-rules": "off",
        "unused-javascript": "off",
        "tap-targets": ["warn", { minScore: 0.3 }],
        "dom-size": ["warn", { minScore: 0.5 }],
      },
    },
  },
};
