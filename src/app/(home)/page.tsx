import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main
      style={{
        backgroundImage:
          'linear-gradient(to bottom, #00000076, #000000eb), url(/pages/backgroundIndex.jpg)',
        filter: 'brightness(150%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: 'calc(100vh - 80px)',
        minWidth: '100%',
      }}
    >
      <div className="flex justify-center items-center text-center flex-col gap-5 text-white p-2 ">
        <div className="flex flex-col items-center justify-center">
          <Image
            src={'/home/home.png'}
            width={500}
            height={500}
            alt="cover"
            className="max-h-[500px]"
          />
          <div className="flex justify-center items-center text-center flex-col gap-5 z-10">
            <h1 className="text-4xl font-black">HEY, I AM ANDRÉ ALBUQUERQUE</h1>
            <p className="px-4 md:max-w-[50%] font-roboto text-zinc-400">
              Bem-vindo ao meu portfólio! Aqui, você terá a oportunidade de
              explorar quem eu sou, minhas habilidades, conhecimentos e
              projetos. Sinta-se à vontade para explorar e fazer parte desta
              jornada comigo.
            </p>
            <Link
              href="/about"
              className="px-4 py-2 bg-blue-900 opacity-80 rounded-md transition-all hover:opacity-20"
            >
              Sobre mim
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
