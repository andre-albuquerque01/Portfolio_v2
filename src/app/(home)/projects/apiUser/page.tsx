import Image from 'next/image'
import Link from 'next/link'

export default function ApiUser() {
  const pathName = '/api-spring/imgApi_V1'
  return (
    <aside className="max-w-[1200px] mx-auto text-justify mt-10 mb-5 text-white max-sm:px-4 px-20 space-y-8">
      <div className="" id="apiUser">
        <div className="sobre">
          <div className="text-2xl">
            <h1>Api User</h1>
          </div>
          <div className="text-justify">
            Um sistema eficiente para consumir API, desenvolvido utilizando o
            framework Spring Boot em conjunto com o MongoDB. Este sistema foi
            cuidadosamente construído para oferecer uma fluidez, permitindo a
            interação com diversas API por meio da poderosa tecnologia Spring
            Boot, combinada com a flexibilidade e escalabilidade do MongoDB.
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
              API desenvolvida utilizando Spring Boot e MongoDB, prontamente
              consumida no ambiente React com TypeScript.
            </div>
            <div className="font-semibold">O objetivo:</div>
            <div className="text-justify">
              O objetivo é proporcionar uma experiência de aprendizado
              abrangente sobre como consumir APIs, oferecendo insights valiosos
              e conhecimentos práticos nesse processo essencial para o
              desenvolvimento de software.
            </div>
            <div className="font-semibold">Minha função:</div>
            <div className="text-justify">Desenvolvedor Full Stack</div>
          </div>

          <div className="space-y-2">
            <div className="text-xl">
              <h2 className="font-bold">Visão</h2>
            </div>
            <div className="font-semibold">Imagens do resultado:</div>
            <div className="flex flex-wrap space-y-4">
              <Image
                src={`${pathName}/index.png`}
                width={1020}
                height={700}
                alt="tela do projeto"
              />
              <Image
                src={`${pathName}/Cad.png`}
                width={820}
                height={550}
                alt="tela do projeto"
              />
              <Image
                src={`${pathName}/Alt.png`}
                width={820}
                height={550}
                alt="tela do projeto"
              />
            </div>

            <div className="font-semibold">Sobre:</div>
            <div className="descriacao">
              O sistema utiliza uma API para registrar usuários, solicitando
              informações como nome e email. Esses dados são então inseridos no
              banco de dados por meio da API local.
            </div>

            <div className="font-semibold">Repositório:</div>
            <div className="descriacao">
              O repositório está alocado no GitHub.
            </div>
            <div className="descriacao">
              <Link
                href="https://github.com/andre-albuquerque01/learn_SpringBoot/tree/main/ReactTs_Api_SpringBoot_User"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500"
              >
                Link para o repositório
              </Link>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}
