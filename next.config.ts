import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: process.cwd(), // Prevent Next from inferring a wrong root when multiple lockfiles exist.
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/**',
      },
    ],
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
  redirects: async () => {
    return [
      {
        source: '/joinUs',
        destination: '/frivillig',
        permanent: true,
      },
      {
        source: '/kalender',
        destination: 'https://app.crescat.io/groups/aktive-interne',
        permanent: true,
        basePath: false,
      },
      {
        source: '/tickets',
        destination: '/billetter',
        permanent: true,
        basePath: false,
      },
      {
        source: '/guardian',
        destination: '/info/verge',
        permanent: true,
        basePath: false,
      },
      {
        source: '/info/guardian',
        destination: '/info/verge',
        permanent: true,
        basePath: false,
      },
      {
        source: '/tech',
        destination: '/info/tech',
        permanent: true,
        basePath: false,
      },
      {
        source: '/companion',
        destination: '/info/tilgjengelighet',
        permanent: true,
        basePath: false,
      },
      {
        source: '/info/companion',
        destination: '/info/tilgjengelighet',
        permanent: true,
        basePath: false,
      },
      {
        source: '/accessibility',
        destination: '/info/tilgjengelighet',
        permanent: true,
        basePath: false,
      },
      {
        source: '/info/accessibility',
        destination: '/info/tilgjengelighet',
        permanent: true,
        basePath: false,
      },
      {
        source: '/contact',
        destination: '/kontakt',
        permanent: true,
        basePath: false,
      },
      {
        source: '/about',
        destination: '/om',
        permanent: true,
        basePath: false,
      },
    ]
  },
}

export default nextConfig
