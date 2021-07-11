module.exports = {
  reactStrictMode: true,
  webpack: (configuration) => {
    configuration.module.rules.push({
      test: /\.md$/,
      use: {
        loader: "frontmatter-markdown-loader",
        options: { mode: ["react-component"] },
      }
    });
    return configuration;
  },
};
