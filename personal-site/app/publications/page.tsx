import Link from 'next/link';

export default function Publications() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-full max-w-3xl" style={{ minHeight: '100vh', padding: '40px 30px' }}>
        <div style={{ marginBottom: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
            <h1 className="text-xl sm:text-2xl font-bold" style={{ color: '#000000' }}>James W. Foote</h1>
            <div className="text-sm sm:text-base" style={{ display: 'flex', gap: '15px' }}>
              <Link href="/" style={{ textDecoration: 'underline', textUnderlineOffset: '2px', color: '#000000' }}>Home</Link>
              <Link href="/publications" style={{ textDecoration: 'underline', textUnderlineOffset: '2px', color: '#000000' }}>Publications</Link>
              <Link href="/bookshelf" style={{ textDecoration: 'underline', textUnderlineOffset: '2px', color: '#000000' }}>My Bookshelf</Link>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-lg font-bold" style={{ color: '#000000' }}>Publications</h2>
          <p className="text-sm sm:text-base" style={{ color: '#000000' }}>
            Coming soon...
          </p>
        </div>
      </div>
    </div>
  );
}