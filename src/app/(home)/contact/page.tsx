/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import { CgMail } from 'react-icons/cg'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io'

export default function Contact() {
  return (
    <div className="max-w-[1200px]  mx-auto">
      <div>
        <h1 className="uppercase text-white text-2xl text-center mt-10">
          Let's connect.
        </h1>
        <div className="w-20 h-1 rounded-sm bg-blue-600 mt-2 mx-auto"></div>
      </div>
      <div className="flex flex-col items-center justify-center gap-5 mt-10">
        <Link
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          className="w-72 h-20 flex items-center justify-center gap-5 text-white border border-white rounded-xl transform duration-700 hover:bg-zinc-700 hover:scale-110"
        >
          <IoLogoGithub className=" w-10 h-10" />
          GitHub
        </Link>
        <Link
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          className="w-72 h-20 flex items-center justify-center gap-5 text-white border border-white rounded-xl transform duration-700 hover:bg-zinc-700 hover:scale-110"
        >
          <IoLogoLinkedin className=" w-10 h-10" />
          Linkedin
        </Link>
        <Link
          href="mailto:andregonsalves2011@gmail.com?subject=Dúvidas sobre o portfolio"
          rel="noopener noreferrer"
          className="w-72 h-20 flex items-center justify-center gap-5 text-white border border-white rounded-xl transform duration-700 hover:bg-zinc-700 hover:scale-110"
        >
          <CgMail className=" w-10 h-10" />
          E-mail
        </Link>
      </div>
    </div>
  )
}
