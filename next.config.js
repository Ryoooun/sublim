/** @type {import('next').NextConfig} */
// const webpack = require("webpack");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

// const nextConfig = {
//   images: {
//     domains: ["qiita-user-contents.imgix.net"],
//   },
//   experimental: {
//     appDir: true,
//   },
// };

// module.exports = nextConfig;

module.exports = withBundleAnalyzer({
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  experimental: {
    appDir: true,
  },
});
