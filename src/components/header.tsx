'use client'
import { fontJersey } from '@/fonts/fonts'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export const Header = () => {
  const [navbar, setNavBar] = useState<boolean>(false)

  useEffect(() => {
    const closeHeader = () => setNavBar(false)
    window.addEventListener('resize', closeHeader)
    return () => window.removeEventListener('resize', closeHeader)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) setNavBar(false)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  return (
    <header className="bg-zinc-900">
      <div className="max-w-[1200px] mx-auto px-5 flex justify-between items-center h-20 text-white ">
        {/* <h1 className="font-jersey uppercase">{'<André Albuquerque/>'}</h1> */}
        <h1 className={`${fontJersey.className} uppercase text-2xl`}>
          {'< André Albuquerque />'}
        </h1>
        <nav>
          <button
            className="md:hidden h-[25px] m-auto z-30 w-8 flex items-center flex-col gap-1 p-1 relative"
            onClick={() => setNavBar((e) => !e)}
          >
            <hr
              className={`bg-white h-1 w-full rounded border-none transition-all transform absolute ${navbar ? 'rotate-[50deg] top-2 ' : 'top-0 '}`}
            />
            <hr
              className={`h-1 w-full rounded border-none transition-all transform absolute ${navbar ? 'bg-transparent top-1 ' : 'bg-white top-2'}`}
            />
            <hr
              className={`bg-white h-1 w-full rounded border-none transition-all transform absolute ${navbar ? 'rotate-[-50deg] top-2 ' : 'top-4'}`}
            />
          </button>
          <div
            className={`z-50 transition-all w-full flex-col md:w-auto md:flex-row md:visible md:flex md:gap-1 text-white font-[700] items-center flex duration-1000 overflow-hidden top-[80px] right-0 left-0 justify-start gap-9 fixed h-0 md:h-auto md:static ${navbar ? 'w-full t h-screen pt-12 bg-black' : 'invisible flex transition-all duration-1000'}`}
          >
            <Link
              href="/"
              className="transform duration-500 rounded-md hover:bg-zinc-600 p-2"
            >
              <span onClick={() => setNavBar(false)}>HOME</span>
            </Link>
            <Link
              href="/about"
              className="transform duration-500 rounded-md hover:bg-zinc-600 p-2"
            >
              <span onClick={() => setNavBar(false)}>ABOUT</span>
            </Link>
            <Link
              href="/projects"
              className="transform duration-500 rounded-md hover:bg-zinc-600 p-2"
            >
              <span onClick={() => setNavBar(false)}>PROJECTS</span>
            </Link>
            <Link
              href="/contact"
              className="transform duration-500 rounded-md hover:bg-zinc-600 p-2"
            >
              <span onClick={() => setNavBar(false)}>CONTACT</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
