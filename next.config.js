/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.sanity.io'],
  },
  modularizeImports: {
    '@mui/material': {
      transform: '@mui/material/{{member}}',
    },
    '@mui/styles': {
      transform: '@mui/styles/{{member}}',
    },
    '@mui/icons-material': {
      transform: '@mui/icons-material/{{member}}',
    },
  },
}

const redirects = async () => {
  return [
    {
      source: '/frivillig',
      destination: '/joinUs',
      permanent: true,
    },
  ]
}

module.exports = {
  ...nextConfig,
  redirects,
}
