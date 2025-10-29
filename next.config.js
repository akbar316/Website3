/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    runtime: 'edge'
  },
  images: {
    formats: ['image/avif','image/webp'],
    remotePatterns: []
  },
  reactStrictMode: true,
}
module.exports = nextConfig
