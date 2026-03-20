import Link from 'next/link';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="glass-card p-12 rounded-3xl text-center max-w-2xl">
        <h1 className="text-8xl font-bold text-white mb-4">404</h1>
        <h2 className="text-3xl font-bold text-white mb-4">Page Not Found</h2>
        <p className="text-white/70 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/">
          <button className="px-8 py-4 bg-gradient-to-r from-[#c5ffb8] to-[#f2b8ff] text-gray-900 font-semibold rounded-lg flex items-center gap-2 mx-auto hover:scale-105 transition-transform">
            <Home size={20} />
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
