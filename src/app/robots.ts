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
    sitemap: 'https://leadersnetwork.africa/sitemap.xml',
    host: 'https://leadersnetwork.africa/',
  }
}