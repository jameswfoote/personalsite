import Link from 'next/link';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <style>{`@media (max-width: 600px) { nav { gap: 16px !important; } nav a { font-size: 13px !important; white-space: nowrap !important; } }`}</style>
      {/* Header */}
      <header style={{ padding: '20px 0', borderBottom: '1px solid #e5e5e5' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 30px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '24px', fontWeight: '600', margin: '0 0 15px 0' }}>
            <Link href="/" style={{ textDecoration: 'none', color: '#000' }}>James Foote</Link>
          </h1>
          <nav style={{ display: 'flex', gap: '30px', justifyContent: 'center' }}>
            <Link href="/" style={{ textDecoration: 'none', color: '#000', fontSize: '14px' }}>Home</Link>
            <Link href="/publications" style={{ textDecoration: 'none', color: '#000', fontSize: '14px' }}>Publications</Link>
            <Link href="/bookshelf" style={{ textDecoration: 'none', color: '#000', fontSize: '14px' }}>My Bookshelf</Link>
            <Link href="/contact" style={{ textDecoration: 'none', color: '#000', fontSize: '14px', borderBottom: '2px solid #000', paddingBottom: '2px' }}>Contact</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ maxWidth: '600px', margin: '0 auto', padding: '60px 30px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '400', marginBottom: '40px', textAlign: 'center' }}>Contact</h2>

        <div style={{ fontSize: '15px', lineHeight: '1.7', color: '#333' }}>
          <p style={{ marginBottom: '32px' }}>
            The best way to reach me is by email. I&apos;m also on a few social platforms if you&apos;d prefer to connect there.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <span style={{ fontWeight: '500' }}>Email</span>
              <span style={{ color: '#999', margin: '0 12px' }}>—</span>
              <a href="mailto:jameswfoote@gmail.com" style={{ color: '#000', textDecoration: 'underline' }}>jameswfoote@gmail.com</a>
            </div>
            <div>
              <span style={{ fontWeight: '500' }}>LinkedIn</span>
              <span style={{ color: '#999', margin: '0 12px' }}>—</span>
              <a href="https://linkedin.com/in/jamesfoote" target="_blank" rel="noopener noreferrer" style={{ color: '#000', textDecoration: 'underline' }}>linkedin.com/in/jamesfoote</a>
            </div>
            <div>
              <span style={{ fontWeight: '500' }}>Twitter</span>
              <span style={{ color: '#999', margin: '0 12px' }}>—</span>
              <a href="https://twitter.com/jameswfoote" target="_blank" rel="noopener noreferrer" style={{ color: '#000', textDecoration: 'underline' }}>@jameswfoote</a>
            </div>
            <div>
              <span style={{ fontWeight: '500' }}>GitHub</span>
              <span style={{ color: '#999', margin: '0 12px' }}>—</span>
              <a href="https://github.com/jameswfoote" target="_blank" rel="noopener noreferrer" style={{ color: '#000', textDecoration: 'underline' }}>github.com/jameswfoote</a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#ffffff', color: '#000', marginTop: '80px', padding: '40px 0', width: '100%' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 30px', textAlign: 'center' }}>
          <div style={{ marginBottom: '20px' }}>
            <p style={{ fontSize: '14px', color: '#999', marginBottom: '8px' }}>Vancouver, British Columbia</p>
            <p style={{ fontSize: '14px', color: '#999' }}>
              <a href="mailto:jameswfoote@gmail.com" style={{ color: '#999', textDecoration: 'none' }}>jameswfoote@gmail.com</a>
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', fontSize: '14px' }}>
            <a href="https://github.com/jameswfoote" target="_blank" rel="noopener noreferrer" style={{ color: '#000', textDecoration: 'none' }}>GitHub</a>
            <a href="https://linkedin.com/in/jamesfoote" target="_blank" rel="noopener noreferrer" style={{ color: '#000', textDecoration: 'none' }}>LinkedIn</a>
            <a href="https://twitter.com/jameswfoote" target="_blank" rel="noopener noreferrer" style={{ color: '#000', textDecoration: 'none' }}>Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
