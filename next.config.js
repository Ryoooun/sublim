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
    // domains: [
    //   "qiita-user-contents.imgix.net",
    //   "qiita-image-store.s3.ap-northeast-1.amazonaws.com",
    //   "avatars3.githubusercontent.com",
    //   "s3-ap-northeast-1.amazonaws.com",
    //   "lh3.googleusercontent.com",
    // ],
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
