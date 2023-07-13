/** @type {import('next').NextConfig} */
const nextConfig = {}

// module.exports = nextConfig
      domains: ['*.cdninstagram.com'],

      module.exports = {
        images: {
          remotePatterns: [
            {
              protocol: 'https',
              hostname: '**',
            },
          ],
        },
      }