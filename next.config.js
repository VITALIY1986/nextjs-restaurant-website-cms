/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
        formats: ['image/avif', 'image/webp'],
        domains: [ 'nextjs-restaurant-website-cms.vercel.app' ],
    },
}

module.exports = nextConfig
