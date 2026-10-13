import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.eleadersnetwork.net/'
  const lastModified = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/ourservices`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/careers`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/blogs`, lastModified, changeFrequency: 'daily', priority: 0.8 },
    { url: `${baseUrl}/contactus`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/privacy-policy`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terms-of-service`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
  ]

  // Service sub-pages based on found directories
  const serviceRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/ourservices/data-analysis`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/ourservices/it-consulting`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/ourservices/sdlc`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/ourservices/social-media-advert`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
  ]

  return [...staticRoutes, ...serviceRoutes]
}