import Link from "next/link";

export const Header = () => {
  return (
    <header className="container mx-auto px-5 flex flex-row justify-between">
      <div>
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter mb-20 mt-8">
          <Link href="/" className="hover:underline">
            Jordan.
          </Link>
        </h2>
      </div>
      <div className="flex flex-row items-end mb-20 mt-8">
        <h3 className="text-xl md:text-2xl font-bold tracking-tight md:tracking-tighter px-2">
          <Link href="/posts" className="hover:underline">
            Blog
          </Link>
        </h3>
        <h3 className="text-xl md:text-2xl font-bold tracking-tight md:tracking-tighter px-2">
          <Link href="/about" className="hover:underline">
            About
          </Link>
        </h3>
      </div>
    </header>
  );
};
