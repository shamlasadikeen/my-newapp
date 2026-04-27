const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

export default function Navbar() {
  return (
    <header className="px-6 pt-6 md:px-10">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between rounded-[24px] border border-yellow-400/15 bg-[rgba(10,10,10,0.85)] px-6 py-4 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-yellow-400/30 bg-yellow-400/10 text-2xl font-bold text-yellow-400">
            S
          </div>
          <div>
            <h1 className="text-[18px] font-semibold leading-none">Shamla</h1>
            <p className="mt-1 text-sm text-gray-400">Web Developer Portfolio</p>
          </div>
        </div>

        <nav className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-gray-200 transition hover:text-yellow-400"
            >
              {item}
            </a>
          ))}
        </nav>

      </div>
    </header>
  );
}