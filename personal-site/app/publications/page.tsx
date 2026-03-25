import { SiteHeader } from '../components/SiteHeader';

export default function Publications() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-full max-w-3xl" style={{ minHeight: '100vh', padding: '40px 30px' }}>
        <SiteHeader title="James W. Foote" />

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
