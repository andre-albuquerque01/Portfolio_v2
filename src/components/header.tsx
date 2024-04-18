import Link from 'next/link'

export const Header = () => {
  return (
    <header className="bg-zinc-900">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center h-20 text-white ">
        <h1 className="font-roboto uppercase">{'<André Albuquerque/>'}</h1>
        <nav>
          <div className="flex items-center gap-7">
            <Link
              href="/"
              className="transform duration-500 rounded-md hover:bg-zinc-600 p-2"
            >
              <span>HOME</span>
            </Link>
            <Link
              href="/about"
              className="transform duration-500 rounded-md hover:bg-zinc-600 p-2"
            >
              <span>ABOUT</span>
            </Link>
            <Link
              href="/projects"
              className="transform duration-500 rounded-md hover:bg-zinc-600 p-2"
            >
              <span>PROJECTS</span>
            </Link>
            <Link
              href="/conctat"
              className="transform duration-500 rounded-md hover:bg-zinc-600 p-2"
            >
              <span>CONTACT</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
