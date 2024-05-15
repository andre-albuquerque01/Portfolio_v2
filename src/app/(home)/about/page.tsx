import { Certification } from '@/components/certification'
import { Experience } from '@/components/experience'
import { Skills } from '@/components/skills'
import { Metadata } from 'next'

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
        <div className="w-20 h-1 rounded-sm bg-blue-600 mt-2 mx-auto"></div>
      </div>
      <div className="text-justify">
        <p className="text-white text-md text-center mt-7">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology.
        </p>
      </div>
      <div className="text-white text-justify space-x-4 space-y-2 mt-3">
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
