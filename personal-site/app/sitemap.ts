import { MetadataRoute } from 'next'
import { SHOW_PUBLICATIONS } from './siteConfig'
import { absoluteUrl } from './seo'
import { publications } from './publications/data'

export const dynamic = 'force-static'

// URLs end in a slash because the static export serves /page/index.html,
// and GitHub Pages redirects /page to /page/.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const routes: MetadataRoute.Sitemap = [
    { url: absoluteUrl('/'), lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: absoluteUrl('/bookshelf/'), lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: absoluteUrl('/contact/'), lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
  ]

  if (SHOW_PUBLICATIONS) {
    routes.push({ url: absoluteUrl('/publications/'), lastModified: now, changeFrequency: 'monthly', priority: 0.8 })

    for (const publication of publications) {
      for (const link of publication.links) {
        if (link.href.startsWith('/') && link.href.endsWith('.pdf')) {
          routes.push({
            url: absoluteUrl(link.href),
            lastModified: new Date(`${publication.published}T00:00:00Z`),
            changeFrequency: 'yearly',
            priority: 0.7,
          })
        }
      }
    }
  }

  return routes
}
