/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["qiita-user-contents.imgix.net"],
  },
  experimental: {
    appDir: true,
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
};

module.exports = nextConfig;
