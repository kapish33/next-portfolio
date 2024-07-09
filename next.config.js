const createNextIntlPlugin = require('next-intl/plugin')

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ylattxmlytmyebyvkujl.supabase.co',
        port: ''
        // pathname: '/storage/v1/object/public/advocatehunt/**',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        port: ''
      }
    ]
  }
  // images: {
  //   domains: ['ylattxmlytmyebyvkujl.supabase.co'],
  // },
}

module.exports = withNextIntl(nextConfig)
