/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['social.webestica.com'],
},
compiler: {
  // Enables the styled-components SWC transform
  styledComponents: true
}
}

module.exports = nextConfig
