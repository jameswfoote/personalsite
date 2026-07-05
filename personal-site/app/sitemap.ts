import { MetadataRoute } from 'next'
import { SHOW_PUBLICATIONS } from './siteConfig'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    {
      url: 'https://jamesfoote.org',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: 'https://jamesfoote.org/bookshelf',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: 'https://jamesfoote.org/contact',
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
  ]

  if (SHOW_PUBLICATIONS) {
    routes.push({
      url: 'https://jamesfoote.org/publications',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })
  }

  return routes;
}
