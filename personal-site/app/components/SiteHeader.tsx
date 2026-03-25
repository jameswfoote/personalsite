import Link from 'next/link';

type SiteHeaderProps = {
  title: string;
};

export function SiteHeader({ title }: SiteHeaderProps) {
  return (
    <div className="mb-5">
      <div className="mb-3 flex items-start justify-between">
        <h1 className="text-xl font-bold text-black sm:text-2xl">{title}</h1>
        <nav className="flex gap-4 text-sm sm:text-base">
          <Link className="text-black underline underline-offset-2" href="/">
            Home
          </Link>
          <Link className="text-black underline underline-offset-2" href="/publications">
            Publications
          </Link>
          <Link className="text-black underline underline-offset-2" href="/bookshelf">
            My Bookshelf
          </Link>
        </nav>
      </div>
    </div>
  );
}
