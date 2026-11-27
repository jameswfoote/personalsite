import { SHOW_PUBLICATIONS } from '../siteConfig'
import { absoluteUrl, HOME_DESCRIPTION, ORCID_URL } from '../seo'
import { publications, formatPublicationDate } from '../publications/data'

export const dynamic = 'force-static'

// A plain-text summary of the site for answer engines and LLM crawlers (https://llmstxt.org).
export function GET() {
  const pages = [
    `- [Home](${absoluteUrl('/')}): Biography of James Foote.`,
    ...(SHOW_PUBLICATIONS
      ? [`- [Publications](${absoluteUrl('/publications/')}): Papers, essays, and other miscellaneous thoughts.`]
      : []),
    `- [My Bookshelf](${absoluteUrl('/bookshelf/')}): Books he has read, with a short review of each.`,
    `- [Contact](${absoluteUrl('/contact/')}): Email and social profiles.`,
  ]

  const papers = SHOW_PUBLICATIONS
    ? [
        '',
        '## Publications',
        '',
        ...publications.map((publication) => {
          const links = publication.links
            .map((link) => `[${link.label}](${absoluteUrl(link.href)})`)
            .join(', ')
          return `- [${publication.title}](${absoluteUrl(publication.links[0].href)}) (${formatPublicationDate(publication.published)}): ${publication.summary} Links: ${links}.`
        }),
      ]
    : []

  const body = [
    '# James Foote',
    '',
    `> ${HOME_DESCRIPTION}`,
    '',
    'He is especially interested in building technology that is not only advanced, but deeply useful to people in their everyday lives. His ambition is to help place powerful health intelligence directly in the hands of individuals. He is based in Vancouver, British Columbia.',
    '',
    '## Pages',
    '',
    ...pages,
    ...papers,
    '',
    '## Contact',
    '',
    '- Email: james@meeds.com',
    '- Meeds: https://meeds.com',
    '- GitHub: https://github.com/jameswfoote',
    '- LinkedIn: https://www.linkedin.com/in/jameswfoote',
    '- Twitter: https://twitter.com/jamesfoote',
    `- ORCID: ${ORCID_URL}`,
    '',
  ].join('\n')

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
