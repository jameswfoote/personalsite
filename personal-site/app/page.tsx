import Link from 'next/link';
import { SHOW_PUBLICATIONS } from './siteConfig';

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "James Foote",
    jobTitle: "Founder and CEO",
    description: "James Foote is a leading entrepreneur and researcher in health intelligence. He is the Founder and CEO of Meeds, a company pioneering safe, efficacious, and accessible health intelligence systems.",
    email: "mailto:james@meeds.com",
    knowsAbout: ["Health Intelligence", "Artificial Intelligence", "Healthcare Technology", "Research"],
    worksFor: {
      "@type": "Organization",
      name: "Meeds",
      url: "https://meeds.com"
    },
    url: "https://jamesfoote.org",
    sameAs: [
      "https://github.com/jameswfoote",
      "https://www.linkedin.com/in/jameswfoote",
      "https://twitter.com/jameswfoote"
    ]
  };

  return (
    <div style={{ backgroundColor: '#fff' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <style>{`@media (max-width: 768px) { .home-main { padding-bottom: 0 !important; } .home-footer { padding-top: 20px !important; } } @media (max-width: 600px) { nav { gap: 16px !important; } nav a { font-size: 13px !important; white-space: nowrap !important; } } .sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0; }`}</style>
      {/* Header */}
      <header style={{ padding: '20px 0', borderBottom: '1px solid #e5e5e5' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 30px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '24px', fontWeight: '600', margin: '0 0 15px 0' }}>
            <Link href="/" style={{ textDecoration: 'none', color: '#000' }}>James Foote</Link>
          </h1>
          <nav style={{ display: 'flex', gap: '30px', justifyContent: 'center' }}>
            <Link href="/" style={{ textDecoration: 'none', color: '#000', fontSize: '14px', borderBottom: '2px solid #000', paddingBottom: '2px' }}>Home</Link>
            {SHOW_PUBLICATIONS && (
              <Link href="/publications" style={{ textDecoration: 'none', color: '#000', fontSize: '14px' }}>Publications</Link>
            )}
            <Link href="/bookshelf" style={{ textDecoration: 'none', color: '#000', fontSize: '14px' }}>My Bookshelf</Link>
            <Link href="/contact" style={{ textDecoration: 'none', color: '#000', fontSize: '14px' }}>Contact</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="home-main" style={{ maxWidth: '600px', margin: '0 auto', padding: '60px 30px 20px' }}>
        {/* Bio Section */}
        <article>
          <h2 className="sr-only">About James Foote</h2>
          <div style={{ fontSize: '15px', lineHeight: '1.7', color: '#333' }}>
            <p style={{ marginBottom: '16px' }}>
              Born in New York City, James Foote is the founder and CEO of{' '}
              <a href="https://meeds.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: '#000' }}>Meeds</a>,
              a research company building safe, efficacious, and accessible health intelligence systems. His work is grounded in the belief that health intelligence should help people live with greater clarity, agency, and trust in their own judgment.
            </p>
            <p style={{ marginBottom: '16px' }}>
              He is especially interested in building technology that is not only advanced, but deeply useful to people in their everyday lives. His ambition is to help place powerful health intelligence directly in the hands of individuals.
            </p>
          </div>
        </article>

      </main>

      {/* Footer */}
      <footer className="home-footer" style={{ backgroundColor: '#ffffff', color: '#000', padding: '40px 0', width: '100%' }}>
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
            <a href="https://twitter.com/jameswfoote" target="_blank" rel="noopener noreferrer" style={{ color: '#000', textDecoration: 'none' }}>Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
