import { Certification } from '@/components/certification'
import { Experience } from '@/components/experience'
import { Skills } from '@/components/skills'
import { Metadata } from 'next'
import Link from 'next/link'
import { GoDownload } from 'react-icons/go'

/* eslint-disable react/no-unescaped-entities */
export const metadata: Metadata = {
  title: 'Sobre',
}
export default function About() {
  return (
    <div
      style={{
        backgroundImage:
          'linear-gradient(to bottom, #00000076, #000000eb), url(/pages/backgroundAbout.jpg)',
        filter: 'brightness(150%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: 'calc(100vh - 80px)',
        minWidth: '100%',
      }}
      className="text-zinc-400"
    >
      <div className="max-w-[1200px] px-3 text-justify min-h-screen/5 mx-auto font-roboto">
        <div>
          <h1 className="uppercase text-2xl text-center pt-10">Sobre mim</h1>
          <div className="w-20 h-1 rounded-sm bg-blue-600 mt-1 mx-auto"></div>
        </div>
        <div className="text-justify">
          <p className=" text-md text-center mt-3">
            Aqui você encontrará mais informações sobre mim, o que eu faço e
            minhas habilidades atuais, principalmente em termos de programação e
            tecnologia.
          </p>
        </div>
        <div className="flex mt-2" title="Download do currículo">
          <Link
            href="/docs/Profile.pdf"
            passHref
            download="Profile.pdf"
            className="inline-block mx-auto"
          >
            <GoDownload className="w-5 h-5 " />
          </Link>
        </div>
        <div className=" text-justify space-x-4 space-y-2 mt-2">
          <h1 className="text-xl">Conheça-me!</h1>
          <p>
            Um desenvolvedor full stack focado em aplicações web, construindo
            aplicações para facilitar a vida.
          </p>
          <p>
            Atualmente estou estudando desenvolvimento full stack, buscando
            constantemente expandir meu conhecimento em aplicações web para
            aprimorar minhas habilidades.
          </p>
        </div>
        <Certification />
        <Experience />
        <Skills />
      </div>
    </div>
  )
}
