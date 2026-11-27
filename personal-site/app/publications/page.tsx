import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SHOW_PUBLICATIONS } from '../siteConfig';
import { absoluteUrl, PERSON_ID, ORCID_URL, SITE_URL } from '../seo';
import { publications, formatPublicationDate } from './data';

export default function Publications() {
  if (!SHOW_PUBLICATIONS) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Publications',
    description: 'Papers, essays, and other miscellaneous thoughts by James Foote.',
    url: absoluteUrl('/publications/'),
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: publications.map((publication, index) => {
        const pdf = publication.links.find((link) => link.href.endsWith('.pdf'));
        return {
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'ScholarlyArticle',
            headline: publication.title,
            name: publication.title,
            abstract: publication.summary,
            datePublished: publication.published,
            author: { '@type': 'Person', '@id': PERSON_ID, name: 'James Foote', url: SITE_URL, sameAs: ORCID_URL },
            url: publication.doi ? `https://doi.org/${publication.doi}` : absoluteUrl(publication.links[0].href),
            ...(publication.doi && {
              identifier: { '@type': 'PropertyValue', propertyID: 'DOI', value: publication.doi },
            }),
            ...(pdf && {
              encoding: { '@type': 'MediaObject', encodingFormat: 'application/pdf', contentUrl: absoluteUrl(pdf.href) },
            }),
            sameAs: publication.links.map((link) => absoluteUrl(link.href)),
          },
        };
      }),
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <style>{`@media (max-width: 600px) { nav { gap: 16px !important; } nav a { font-size: 13px !important; white-space: nowrap !important; } } .publication-link:hover { color: #666 !important; }`}</style>
      {/* Header */}
      <header style={{ padding: '20px 0', borderBottom: '1px solid #e5e5e5' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 30px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '24px', fontWeight: '600', margin: '0 0 15px 0' }}>
            <Link href="/" style={{ textDecoration: 'none', color: '#000' }}>James Foote</Link>
          </h1>
          <nav style={{ display: 'flex', gap: '30px', justifyContent: 'center' }}>
            <Link href="/" style={{ textDecoration: 'none', color: '#000', fontSize: '14px' }}>Home</Link>
            <Link href="/publications" style={{ textDecoration: 'none', color: '#000', fontSize: '14px', borderBottom: '2px solid #000', paddingBottom: '2px' }}>Publications</Link>
            <Link href="/bookshelf" style={{ textDecoration: 'none', color: '#000', fontSize: '14px' }}>My Bookshelf</Link>
            <Link href="/contact" style={{ textDecoration: 'none', color: '#000', fontSize: '14px' }}>Contact</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ maxWidth: '600px', margin: '0 auto', padding: '60px 30px 20px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '400', marginBottom: '40px', textAlign: 'center' }}>Publications</h2>

        <div style={{ fontSize: '15px', lineHeight: '1.7', color: '#333' }}>
          <p style={{ marginBottom: '32px' }}>
            Papers, essays, and other miscellaneous thoughts.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {publications.map((publication) => (
              <article key={publication.title}>
                <p style={{ fontSize: '13px', color: '#999', marginBottom: '6px' }}>
                  <time dateTime={publication.published}>{formatPublicationDate(publication.published)}</time>
                </p>
                <h3 style={{ fontSize: '17px', fontWeight: '500', lineHeight: '1.45', marginBottom: '10px' }}>
                  <a
                    href={publication.links[0].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="publication-link"
                    style={{ color: '#000', textDecoration: 'none' }}
                  >
                    {publication.title}
                  </a>
                </h3>
                <p style={{ color: '#333', marginBottom: '12px' }}>{publication.summary}</p>
                <div style={{ display: 'flex', gap: '20px', fontSize: '14px' }}>
                  {publication.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#000', textDecoration: 'underline' }}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#ffffff', color: '#000', padding: '40px 0', width: '100%' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 30px', textAlign: 'center' }}>
          <div style={{ marginBottom: '20px' }}>
            <p style={{ fontSize: '14px', color: '#999', marginBottom: '8px' }}>Vancouver, British Columbia</p>
            <p style={{ fontSize: '14px', color: '#999' }}>
              <a href="mailto:james@meeds.com" style={{ color: '#999', textDecoration: 'none' }}>james@meeds.com</a>
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', fontSize: '14px' }}>
            <a href="https://github.com/jameswfoote" target="_blank" rel="noopener noreferrer" style={{ color: '#000', textDecoration: 'none' }}>GitHub</a>
            <a href="https://www.linkedin.com/in/jameswfoote" target="_blank" rel="noopener noreferrer" style={{ color: '#000', textDecoration: 'none' }}>LinkedIn</a>
            <a href="https://twitter.com/jamesfoote" target="_blank" rel="noopener noreferrer" style={{ color: '#000', textDecoration: 'none' }}>Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
