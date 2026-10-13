import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/adminn/', '/api/'],
      },
    ],
    sitemap: 'https://www.eleadersnetwork.net/sitemap.xml',
    host: 'https://www.eleadersnetwork.net/',
  }
}