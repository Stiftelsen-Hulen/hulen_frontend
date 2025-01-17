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
    {
      source: '/kalender',
      destination: 'https://app.crescat.io/groups/aktive-interne',
      permanent: true,
      basePath: false
    },
    {
      source: '/billetter',
      destination: 'https://www.hulen.no/tickets',
      permanent: true,
      basePath: false
    },
    {
      source: '/info/verge',
      destination: 'https://www.hulen.no/info/guardian',
      permanent: true,
      basePath: false
    },
    {
      source: '/verge',
      destination: 'https://www.hulen.no/info/guardian',
      permanent: true,
      basePath: false
    },
    {
      source: '/tech',
      destination: 'https://www.hulen.no/info/tech',
      permanent: true,
      basePath: false
    },
    {
      source: '/ledsager',
      destination: 'https://www.hulen.no/info/accessibility',
      permanent: true,
      basePath: false
    },
    {
      source: '/tilgjengelighet',
      destination: 'https://www.hulen.no/info/accessibility',
      permanent: true,
      basePath: false
    },
    {
      source: '/kontakt',
      destination: 'https://www.hulen.no/kontakt',
      permanent: true,
      basePath: false
    },
    {
      source: '/om',
      destination: 'https://www.hulen.no/about',
      permanent: true,
      basePath: false
    }
  ]
}

module.exports = {
  ...nextConfig,
  redirects,
}
