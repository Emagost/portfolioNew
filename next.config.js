/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['scale.com'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'scale.com',

        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
