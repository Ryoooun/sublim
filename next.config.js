/** @type {import('next').NextConfig} */
// const webpack = require("webpack");

const nextConfig = {
  images: {
    domains: ["qiita-user-contents.imgix.net"],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
