import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="page-wrap flex min-h-screen items-center justify-center py-28">
      <div className="surface-card max-w-2xl rounded-[2rem] p-8 text-center md:p-10">
        <p className="section-label">404</p>
        <h1 className="mt-4 text-[clamp(3rem,10vw,6rem)] font-bold tracking-[-0.08em] text-[color:var(--foreground)]">
          Page not found
        </h1>
        <p className="mt-4 text-[1rem] leading-8 text-[color:var(--muted)]">
          The page you&apos;re looking for doesn&apos;t exist, or the route has moved.
        </p>
        <Link href="/" className="button-primary mt-8">
          <ArrowLeft size={16} />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
