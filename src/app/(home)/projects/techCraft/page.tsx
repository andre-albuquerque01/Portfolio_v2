import Image from 'next/image'
import Link from 'next/link'

export default function TechCraft() {
  const pathName = '/techCraft'
  return (
    <aside className="max-w-[1200px] mx-auto text-justify mt-10 mb-5 text-white max-sm:px-4 px-20 space-y-4">
      <div className="" id="apiUser">
        <div className="sobre">
          <div className="text-2xl">
            <h1>Landing Page</h1>
          </div>
          <div className="text-justify">
            Uma landing page que introduza a nova marca digital da empresa,
            facilitando a realização de campanhas publicitárias e o
            redirecionamento dos usuários. A página foi projetada para otimizar
            a captação de clientes, oferecendo uma interface atraente e
            funcional que incentiva o engajamento e a conversão.
          </div>
        </div>
      </div>
      <div className="">
        <div className="space-y-8">
          <div className="space-y-2">
            <div className="text-xl">
              <h2 className="font-bold">Visão Geral</h2>
            </div>
            <div className="font-semibold">O produto:</div>
            <div className="text-justify">
              A landing page foi criada com o objetivo de apresentar a marca da
              empresa aos seus clientes, possibilitando que eles a analisem e
              entrem em contato caso estejam interessados.
            </div>
            <div className="font-semibold">O objetivo:</div>
            <div className="text-justify">
              Criar uma landing page para a empresa, com o objetivo de
              introduzir sua nova marca digital. Esta página é projetada para
              facilitar a realização de anúncios e o redirecionamento dos
              usuários, otimizando a captação de clientes.
            </div>
            <div className="font-semibold">Minha função:</div>
            <div className="text-justify">Desenvolvedor</div>
          </div>

          <div className="space-y-2">
            <div className="text-xl">
              <h2 className="font-bold">Visão</h2>
            </div>
            <div className="font-semibold">Imagens do resultado:</div>
            <div className="flex flex-wrap space-y-4">
              <Image
                src={`${pathName}/service.gif`}
                width={1500}
                height={1500}
                alt="tela do projeto"
              />
            </div>
            <div className="descriacao">
              <Link
                href="https://service-provider-xi.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500"
              >
                Link para a landing page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}
