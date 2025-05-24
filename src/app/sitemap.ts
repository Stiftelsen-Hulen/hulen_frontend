import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://hulen.no',
    },
    {
      url: 'https://www.hulen.no/frivillig',
    },
    {
      url: 'https://www.hulen.no/billetter',
    },
    {
      url: 'https://www.hulen.no/info/tech',
    },
    {
      url: 'https://www.hulen.no/info/verge',
    },
    {
      url: 'https://www.hulen.no/info/tilgjengelighet',
    },
    {
      url: 'https://www.hulen.no/om',
    },
    {
      url: 'https://www.hulen.no/kontakt',
    },
  ]
}
