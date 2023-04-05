/** @type {import('next').NextConfig} */
// const webpack = require("webpack");

const nextConfig = {
  images: {
    domains: ["qiita-user-contents.imgix.net"],
  },
  experimental: {
    appDir: true,
  },
  compress: false,
  // webpack: (config) => {
  //   config.plugins = [
  //     ...config.plugins,
  //     new webpack.IgnorePlugin({
  //       resourceRegExp: /canvas/,
  //       contextRegExp: /jsdom$/,
  //     }),
  //   ];
  //   return config;
  // },
};

module.exports = nextConfig;
