import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://hulen.no',
    },
    {
      url: 'https://www.hulen.no/joinUs',
    },
    {
      url: 'https://www.hulen.no/tickets',
    },
    {
      url: 'https://www.hulen.no/info/tech',
    },
    {
      url: 'https://www.hulen.no/info/guardian',
    },
    {
      url: 'https://www.hulen.no/info/accessibility',
    },
    {
      url: 'https://www.hulen.no/about',
    },
    {
      url: 'https://www.hulen.no/contact',
    },
  ]
}
