import Link from 'next/link';

export default function Publications() {
  return (
    <div className="min-h-screen bg-white">
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
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 30px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '400', marginBottom: '12px', textAlign: 'center' }}>Publications</h2>
        <p style={{ fontSize: '15px', color: '#666', textAlign: 'center', marginBottom: '40px' }}>Writing, notes, papers and half-formed ideas that are worth keeping around.</p>

        <div style={{ fontSize: '15px', lineHeight: '1.7', color: '#333' }}>

          {/* Placeholder for future publications */}
          <div>
            {/* Example publication entry - uncomment and duplicate when adding real publications
            <div style={{ borderLeft: '2px solid #e5e5e5', paddingLeft: '16px', marginBottom: '24px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '500', marginBottom: '8px' }}>Paper Title</h3>
              <p style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }}>Authors, Journal/Conference, Year</p>
              <p style={{ marginBottom: '12px' }}>
                Brief description of the paper and its contributions...
              </p>
              <a href="#" style={{ fontSize: '14px', textDecoration: 'underline', color: '#000' }}>View Paper</a>
            </div>
            */}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#ffffff', color: '#000', marginTop: '80px', padding: '40px 0', width: '100%' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 30px', textAlign: 'center' }}>
          <div style={{ marginBottom: '20px' }}>
            <p style={{ fontSize: '14px', color: '#999', marginBottom: '8px' }}>Vancouver, British Columbia</p>
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