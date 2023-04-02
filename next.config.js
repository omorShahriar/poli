/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["poli.vercel.app", "localhost"],
  },
};

module.exports = nextConfig;
