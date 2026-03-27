import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header style={{ padding: '20px 0', borderBottom: '1px solid #e5e5e5' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 30px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '24px', fontWeight: '600', margin: '0 0 15px 0' }}>
            <Link href="/" style={{ textDecoration: 'none', color: '#000' }}>James Foote</Link>
          </h1>
          <nav style={{ display: 'flex', gap: '30px', justifyContent: 'center' }}>
            <Link href="/" style={{ textDecoration: 'none', color: '#000', fontSize: '14px', borderBottom: '2px solid #000', paddingBottom: '2px' }}>Home</Link>
            <Link href="/publications" style={{ textDecoration: 'none', color: '#000', fontSize: '14px' }}>Publications</Link>
            <Link href="/bookshelf" style={{ textDecoration: 'none', color: '#000', fontSize: '14px' }}>My Bookshelf</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 30px' }}>
        {/* Bio Section */}
        <div style={{ marginBottom: '60px' }}>
          <div style={{ fontSize: '15px', lineHeight: '1.7', color: '#333' }}>
            <p style={{ marginBottom: '16px' }}>
              James Foote is CEO of{' '}
              <Link href="/meeds" style={{ textDecoration: 'underline', color: '#000' }}>Meeds</Link>,
              a research corporation with the mission of building safe, efficacious, accessible health intelligence systems.
            </p>
            <p style={{ marginBottom: '16px' }}>
              I&apos;m passionate about artificial intelligence, software development, and building innovative solutions
              to real-world problems. Currently focused on machine learning, distributed systems, and full-stack web development.
            </p>
            <p style={{ marginBottom: '16px' }}>
              I enjoy exploring the intersection of technology and creativity, building projects that make a meaningful impact.
              My work spans across various domains including natural language processing, computer vision, and human-computer interaction.
            </p>
            <p style={{ marginBottom: '16px' }}>
              When I&apos;m not coding, you can find me exploring Vancouver&apos;s beautiful trails, reading about emerging technologies,
              or contributing to open-source projects.
            </p>
            <p style={{ marginBottom: '16px' }}>
              For speaking engagements and press inquiries, please go{' '}
              <Link href="/contact" style={{ textDecoration: 'underline', color: '#000' }}>here</Link>.
            </p>
          </div>
        </div>

        {/* Horizontal Rule */}
        <hr style={{ border: 'none', borderTop: '1px solid #e5e5e5', margin: '40px 0' }} />

        {/* Additional Content Section */}
        <div style={{ display: 'grid', gridTemplateColumns: '7fr 5fr', gap: '40px' }}>
          <div>
            <h2 style={{ fontSize: '20px', fontWeight: '500', marginBottom: '20px', textAlign: 'center' }}>Projects</h2>
            <div style={{ fontSize: '15px', lineHeight: '1.7', color: '#333' }}>
              <p style={{ marginBottom: '16px' }}>
                <strong>AI Research Assistant</strong> - A machine learning-powered tool that helps researchers analyze and summarize academic papers using natural language processing.
              </p>
              <p style={{ marginBottom: '16px' }}>
                <strong>Campus Connect</strong> - A web application that connects UBC students for study groups, project collaborations, and campus events.
              </p>
              <p style={{ marginBottom: '16px' }}>
                <strong>EcoTrack</strong> - A mobile app that gamifies sustainable living by tracking carbon footprint and providing personalized recommendations.
              </p>
            </div>
          </div>

          <div>
            <h2 style={{ fontSize: '20px', fontWeight: '500', marginBottom: '20px', textAlign: 'center' }}>Contact</h2>
            <div style={{ fontSize: '15px', lineHeight: '1.7', color: '#333' }}>
              <p style={{ marginBottom: '8px' }}>Academic: jfoote01@student.ubc.ca</p>
              <p style={{ marginBottom: '8px' }}>Personal: jameswfoote@gmail.com</p>
              <p style={{ marginBottom: '8px' }}>Work: james@meeds.com</p>
            </div>
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