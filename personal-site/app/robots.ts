import { MetadataRoute } from 'next'
import { absoluteUrl } from './seo'

export const dynamic = 'force-static'

// Every crawler may read the whole site. The `*` rule already covers all bots;
// the named search and AI crawlers are listed so the permission is explicit.
const NAMED_CRAWLERS = [
  'Googlebot',
  'Google-Extended',
  'Bingbot',
  'Applebot',
  'Applebot-Extended',
  'DuckDuckBot',
  'DuckAssistBot',
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Meta-ExternalAgent',
  'Amazonbot',
  'CCBot',
  'MistralAI-User',
  'cohere-ai',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: NAMED_CRAWLERS, allow: '/' },
    ],
    sitemap: absoluteUrl('/sitemap.xml'),
  }
}
