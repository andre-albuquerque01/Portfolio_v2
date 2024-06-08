import { Certification } from '@/components/certification'
import { Experience } from '@/components/experience'
import { Skills } from '@/components/skills'
import { Metadata } from 'next'
import Link from 'next/link'
import { GoDownload } from 'react-icons/go'

/* eslint-disable react/no-unescaped-entities */
export const metadata: Metadata = {
  title: 'About',
}
export default function About() {
  return (
    <div className="max-w-[1200px] w-[90%] text-justify min-h-screen/5 mx-auto font-roboto">
      <div>
        <h1 className="uppercase text-white text-2xl text-center mt-10">
          About me
        </h1>
        <div className="w-20 h-1 rounded-sm bg-blue-600 mt-1 mx-auto"></div>
      </div>
      <div className="text-justify">
        <p className="text-white text-md text-center mt-3">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology.
        </p>
      </div>
      <div className="flex mt-2" title="Download do currículo">
        <Link
          href="/docs/Profile.pdf"
          passHref
          download="Profile.pdf"
          className="inline-block mx-auto"
        >
          <GoDownload className="w-5 h-5 text-white" />
        </Link>
      </div>
      <div className="text-white text-justify space-x-4 space-y-2 mt-2">
        <h1 className="text-xl">Get to know me!</h1>
        <p>
          A full-stack developer focused on web applications, building web
          applications to facilitate life.
        </p>
        <p>
          I am currently studying full stack development, constantly seeking to
          expand my knowledge in web applications to enhance my skills. I find
          great joy in being a developer.
        </p>
      </div>
      <Certification />
      <Experience />
      <Skills />
    </div>
  )
}
