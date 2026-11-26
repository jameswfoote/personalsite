import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SHOW_PUBLICATIONS } from '../siteConfig';

type Publication = {
  kind: string;
  date: string;
  title: string;
  summary: string;
  links: { label: string; href: string }[];
};

// Newest first.
const publications: Publication[] = [
  {
    kind: 'Paper',
    date: 'November 2026',
    title: 'A proof of bistability at all processivity levels in a model of ERK regulation',
    summary:
      'A proof of Conjecture 4.6 of Conradi, Obatake, Shiu and Tang. For every prescribed pair of kinase and phosphatase processivities, a single choice of rate constants and conserved totals gives two distinct positive equilibria, both exponentially stable on the same stoichiometric class. The main theorem is formally verified in Lean 4.',
    links: [
      { label: 'PDF', href: '/papers/ERK-Conjecture-4.6.pdf' },
      { label: 'Zenodo', href: 'https://doi.org/10.5281/zenodo.24556874' },
      { label: 'Code', href: 'https://github.com/jameswfoote/erk-conjecture-4.6' },
    ],
  },
];

export default function Publications() {
  if (!SHOW_PUBLICATIONS) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
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
              <article key={publication.title} style={{ borderTop: '1px solid #e5e5e5', paddingTop: '24px' }}>
                <p style={{ fontSize: '13px', color: '#999', marginBottom: '6px' }}>
                  {publication.kind}
                  <span style={{ color: '#999', margin: '0 8px' }}>·</span>
                  {publication.date}
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
