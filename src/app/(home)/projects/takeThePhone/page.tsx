/* eslint-disable react/no-unescaped-entities */
import { Obs } from '@/components/obs'
import Image from 'next/image'
import Link from 'next/link'

export default function TakeThePhone() {
  const pathName = '/e-commerceRestaurants/imgTakeThePhone'
  return (
    <aside className="max-w-[1200px] mx-auto text-justify mt-10 max-sm:px-4 px-20 space-y-8 text-white mb-5">
      <div className="">
        <div className="">
          <div className="text-2xl">
            <h1>E-commerce for restaurants</h1>
          </div>
          <div className="text-sobre">
            Aplicatico para restaurante, tendo cardápio que consta o pagamento e
            podendo fazer pedidos do restaurante.
          </div>
        </div>
      </div>
      <div className="">
        <div className="space-y-8">
          <div className="space-y-2">
            <div className="text-xl">
              <h2 className="font-bold">Visão Geral do Projeto</h2>
            </div>
            <div className="font-semibold">O produto:</div>
            <div className="">
              Projete um aplicativo de vendas móvel para um restaurante.
            </div>
            <div className="font-semibold">Duração do projeto:</div>
            <div className="">3 meses</div>
            <div className="font-semibold">O objetivo:</div>
            <div className="">
              Ajudar os clientes ter uma experiência melhor no estabelecimento e
              mais fácilmente na sua forma de fazer o pedido.
            </div>
            <div className="font-semibold">Minha função:</div>
            <div className="">
              Gerenciar o projeto, sendo que estarei em todas as funções.
            </div>
            <div className="font-semibold">Responsabilidades:</div>
            <div className="">
              Construir protótipo; realizar o desenvolvimento; e, modelar o
              banco de dados.
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-xl">
              <h2 className="font-bold">Arquitetura do sistema</h2>
            </div>
            <div className="">Baseado em microserviços.</div>
            <div className="">
              Utilizando Java e Spring Boot para a construção da API's RESTFULL.
            </div>
            <div className="">
              Utilizando Next.Js; React; e, Typescript, para consumir as API's.
            </div>
            <div className="">
              Utilizando MongoDB para a persistência dos dados.
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-xl">
              <h2 className="font-bold">Iniciando o design</h2>
            </div>

            <div className="">
              <Image
                src={`${pathName}/lo-fiTakeThePhone.png`}
                width={1200}
                height={550}
                alt="Wireframes digital"
                className="w-auto h-auto object-cover"
              />
            </div>
            <div className="font-semibold">Wireframes digital:</div>
            <div className="">
              A lo-fi, tinha a ideia de mostrar onde ficariam os elementos,
              então apenas para identificar o que seria em cada espaço.
            </div>
            <div className="font-semibold">Protótipo de baixa fidelidade:</div>
            <div className="">
              O lo-fi, serve para ter uma ideia das posições e de como irá ficar
              o sistema.
            </div>
            <div className="">
              <Link
                href="https://www.figma.com/file/bSd8T4fGk0Ovy4v0mIXpwl/Take-The-Phone?type=design&node-id=0%3A1&mode=design&t=8UHDvtPbCHdGvorK-1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500"
              >
                Link para o Figma do low-fi
              </Link>
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-xl">
              <h2 className="font-bold">Refino o design</h2>
            </div>

            <div className="">
              <Image
                src={`${pathName}/hi-fiTakeThePhone.png`}
                width={1200}
                height={350}
                alt="Mockups"
                className="w-auto h-auto object-cover"
              />
            </div>
            <div className="font-semibold">Mockups:</div>
            <div className="">
              O nosso mockups serviu para o desenvolvedor se orientar como
              ficará a tela quando pronta, tomando de base, de forma que
              facilita a vida de quem desenvolve, depois de ter feito o estudo
              do caso com o usuário.
            </div>

            <div className="font-semibold">Alta fidelidade protótipo:</div>
            <div className="">
              O hi-fi, apresenta uma estrutura simples onde o usuário usa de
              forma simples e rápida, sem que tenha o problema de falta de
              função.
            </div>
            <div className="">
              <Link
                href="https://www.figma.com/file/bSd8T4fGk0Ovy4v0mIXpwl/Take-The-Phone?type=design&node-id=0%3A1&mode=design&t=8UHDvtPbCHdGvorK-1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500"
              >
                Link para o Figma do Hi-Fi
              </Link>
            </div>

            <div className="font-semibold">
              Considerações de acessibilidade:
            </div>
            <div className="">
              1 - Com a estruturação adequada do App, o leitor pode ler sem
              muitos problemas, pois terá um sequência seguindo a WCAG 3. 2 - Ao
              desenvolver com o modelo minimalista, para facilitar pessoas com
              deficiência, em relação a claridade. 3 - Ao usar poucas animações,
              ajudamos pessoas que têm problemas com a tremedeira em suas mãos,
              para evitar toques acidentais e ativar função sem querer.
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-xl">
              <h2 className="font-bold">Telas finais</h2>
            </div>
            <Image
              src={`${pathName}/TakeThePhone.png`}
              width={1200}
              height={350}
              alt="telas finais"
              className="w-auto h-auto object-cover"
            />
          </div>
          <div className="space-y-2">
            <div className="text-xl">
              <h2 className="font-bold">Desenvolvimento</h2>
            </div>

            <div className="font-semibold">Sobre:</div>
            <div className="">
              Utilizando a estrutura MVC, para estrutura as API's, de forma que
              fica mais legível o código, para futuras alterações.
            </div>
            <div className="">
              Usando Spring Security para fazer a parte de segurança da
              aplicação, onde foi feita toda a parte de autenticação e
              autorização para determinadas rotas.
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-xl">
              <h2 className="font-bold">Código</h2>
            </div>
            <div className="font-semibold">
              O código está alocado no github.
            </div>
            <div className="">
              <Link
                href="https://github.com/andre-albuquerque01/Process-menu-front"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500"
              >
                Link do código Front-end
              </Link>
              <br />
              <Link
                href="https://github.com/andre-albuquerque01/Process-Menu-Back"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500"
              >
                Link do código Back-end
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Obs />
    </aside>
  )
}
