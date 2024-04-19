import { Metadata } from 'next'

/* eslint-disable react/no-unescaped-entities */
export const metadata: Metadata = {
  title: 'About',
}
export default function About() {
  return (
    <div className="max-w-[1200px] min-h-screen/5 mx-auto font-roboto">
      <div>
        <h1 className="uppercase text-white text-2xl text-center mt-10">
          About me
        </h1>
        <div className="w-20 h-1 rounded-sm bg-blue-600 mt-2 mx-auto"></div>
      </div>
      <div>
        <p className="text-white text-md text-center mt-7">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology.
        </p>
      </div>
      <div className="text-white space-x-4 space-y-2 mt-3">
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
      <div className="text-white space-x-4 space-y-2 mt-3">
        <h1 className="text-xl">Certification</h1>
        {/* <p>
          Currently pursuing - Specialization in Information Technology with
          emphasis on mainframe - Senac - 04/2024 to 07/2025
        </p> */}
        <p>
          Graduated in Systems Analysis and Development - Senac - 2022 to 2023
        </p>
        <p>Graduated in Human resources - UniProjeção - 2019 to 2020</p>
        <p>Scrum - CertiProf - 2022</p>
      </div>

      <div className="text-white space-x-4 space-y-2 mt-3">
        <h1 className="text-xl">Experience</h1>
        <div className="space-x-8">
          <p>
            Internship at Public Defender's Office - Front-end Developer -
            08/2023 - 12/2023
          </p>
          <span>
            During my internship at the Public Defender's Office, I worked as a
            Front-end Developer, actively contributing to the development team.
          </span>
        </div>
        <div className="space-x-8">
          <p>
            Internship at Caixa Economica - Testing assistant - 12/2022 -
            08/2023
          </p>
          <span>
            During my internship at Caixa Econômica, I worked as a test
            assistant, actively contributing to the development team. My journey
            was from December 2022 to August 2023, during which I gained
            valuable insights and developed practical skills in the field of
            software testing and quality assurance.
          </span>
        </div>
      </div>
      <div className="text-white mt-3 space-y-3 mb-8">
        <h1 className="text-xl">My skills</h1>
        <div>
          <h3 className="">Front-end</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-4 py-2  bg-blue-500 text-white rounded-md">
              HTML
            </span>
            <span className="px-4 py-2  bg-blue-500 text-white rounded-md">
              CSS
            </span>
            <span className="px-4 py-2  bg-blue-500 text-white rounded-md">
              JavaScript
            </span>
            <span className="px-4 py-2  bg-blue-500 text-white rounded-md">
              Typescript
            </span>
            <span className="px-4 py-2  bg-blue-500 text-white rounded-md">
              React
            </span>
            <span className="px-4 py-2  bg-blue-500 text-white rounded-md">
              Next.Js
            </span>
            <span className="px-4 py-2  bg-blue-500 text-white rounded-md">
              Tailwind
            </span>
          </div>
        </div>
        <div>
          <h3 className="">Back-end</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-4 py-2  bg-blue-500 text-white rounded-md">
              PHP
            </span>
            <span className="px-4 py-2  bg-blue-500 text-white rounded-md">
              Laravel
            </span>
            <span className="px-4 py-2  bg-blue-500 text-white rounded-md">
              Java
            </span>
            <span className="px-4 py-2  bg-blue-500 text-white rounded-md">
              Spring Boot
            </span>
            <span className="px-4 py-2  bg-blue-500 text-white rounded-md">
              Python
            </span>
          </div>
        </div>
        <div>
          <h3 className="">Database</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-4 py-2  bg-blue-500 text-white rounded-md">
              SQL
            </span>
            <span className="px-4 py-2  bg-blue-500 text-white rounded-md">
              MySql
            </span>
            <span className="px-4 py-2  bg-blue-500 text-white rounded-md">
              MariaDB
            </span>
            <span className="px-4 py-2  bg-blue-500 text-white rounded-md">
              PostgreSQL
            </span>
          </div>
        </div>
        <div>
          <h3 className="">Others</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-4 py-2  bg-blue-500 text-white rounded-md">
              Figma
            </span>
            <span className="px-4 py-2  bg-blue-500 text-white rounded-md">
              VS code
            </span>
            <span className="px-4 py-2  bg-blue-500 text-white rounded-md">
              Linux
            </span>
            <span className="px-4 py-2  bg-blue-500 text-white rounded-md">
              Designer UX
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
