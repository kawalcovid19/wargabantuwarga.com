module.exports = {
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
  images: {
    deviceSizes: [360, 420, 720, 768, 1280],
    domains: ["firebase-kanvas.imgix.net"],
    loader: "imgix",
    path: "https://firebase-kanvas.imgix.net/warga_bantu_warga/",
  },
};
