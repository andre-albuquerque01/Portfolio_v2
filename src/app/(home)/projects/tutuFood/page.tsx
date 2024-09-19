/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import Link from 'next/link'

export default function TutuFood() {
  const pathName = '/tutuFood/tutufood'
  return (
    <aside className="max-w-[1200px] mx-auto text-justify mt-10 max-sm:px-4 px-20 space-y-8 text-white mb-5">
      <div className="" id="ifome">
        <div className="">
          <div className="text-2xl">
            <h1>Tutu Food</h1>
          </div>
          <div className="text-sobre">
            O Cardápio Online é uma plataforma que permite aos clientes
            acompanhar facilmente os pedidos realizados através do garçom,
            verificar os itens selecionados, o valor total da conta e facilita o
            cadastro através de um identificador exclusivo para localizar os
            pedidos.
          </div>
        </div>
      </div>
      <div className="text-justify">
        <div className="space-y-8">
          <div className="space-y-5">
            <div className="text-xl">
              <h2 className="font-bold">Requisitos Funcionais</h2>
            </div>
            <ul className="list-disc ml-10">
              <li>Deve ser possível se cadastrar;</li>
              <li>Deve ser possível se autenticar;</li>
              <li>Deve ser possível obter o perfil de um usuário logado;</li>
              <li>
                Deve ser possível visualizar os produtos do estabelecimento;
              </li>
              <li>
                Deve ser possível o usuário obter seu histórico de pedidos;
              </li>
              <li>Deve ser possível o usuário buscar itens pelo nome;</li>
              <li>Deve ser possível o usuário buscar itens pela categoria;</li>
              <li>
                Deve ser possível o usuário realizar consulta ao seu histórico;
              </li>
              <li>
                Deve ser possível os administradores realizarem consultas ao
                histórico dos pedidos;
              </li>
              <li>
                Deve ser possível os administradores verem pedidos em aberto;
              </li>
              <li>Deve ser possível os administradores gerenciarem pedidos;</li>
              <li>Deve ser possível os administradores gerenciarem mesas;</li>
              <li>Deve ser possível os administradores gerenciarem itens;</li>
              <li>
                Deve ser possível os administradores gerenciarem categorias;
              </li>
              <li>
                Deve ser possível os administradores gerenciarem funcionários;
              </li>
              <li>
                Deve ser possível que a empresa utilize seus métodos de
                pagamento;
              </li>
            </ul>
          </div>
          <div className="space-y-5">
            <div className="text-xl">
              <h2 className="font-bold">Regras de negócio</h2>
            </div>
            <ul className="list-disc ml-10">
              <li>O usuário não deve se cadastrar com um e-mail duplicado;</li>
              <li>O usuário não deve se cadastrar com um CPF duplicado;</li>
              <li>O usuário não pode fazer pedidos;</li>
              <li>Os itens só podem ser cadastrados por administradores;</li>
              <li>Os pedidos só podem ser cadastrados por administradores;</li>
            </ul>
          </div>
          <div className="space-y-5">
            <div className="text-xl">
              <h2 className="font-bold">Requisitos não Funcionais</h2>
            </div>
            <ul className="list-disc ml-10">
              <li>A senha do usuário precisa estar criptografada;</li>
              <li>
                Os dados da aplicação precisam estar persistidos em um banco de
                dados;
              </li>
              <li>O usuário deve ser identificado por um token;</li>
            </ul>
          </div>
          <div className="space-y-2">
            <div className="text-xl">
              <h2 className="font-bold">Arquitetura do projeto</h2>
            </div>

            <div className="">
              <ul className="list-disc ml-10">
                <li>Linguagem: PHP e Typescript;</li>
                <li>Frameworks: Laravel 10 e Next.Js;</li>
                <li>Banco de dados: MySql;</li>
                <li>Arquitetura: MVC;</li>
              </ul>
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-xl">
              <h2 className="font-bold">MER Conceitual do Projeto</h2>
            </div>
            <div className="">
              <Image
                src={`${pathName}/mer.png`}
                width={800}
                height={550}
                alt="modelo de entidade relacional"
              />
            </div>
          </div>
          <div className="space-y-2 object-cover">
            <div className="text-xl">
              <h2 className="font-bold">Apresentação</h2>
            </div>
            <div className="">
              <div className="">
                <Link
                  href="https://github.com/andre-albuquerque01/literate-octo-potato"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500"
                >
                  Link para o código
                </Link>
              </div>
              <div className="text-lg">
                <h2 className="font-semibold">Exibição das telas</h2>
                <p>
                  As telas de Dashboard, Pedidos, Itens, Pesquisa e Cadastro do
                  usuário, possuem funcionalidades completas de CRUD.
                </p>
              </div>
              <div className="mt-2">
                <div className="space-y-2">
                  <div className="text-xl">
                    <h2 className="font-bold">Telas</h2>
                  </div>
                  <div className="object-cover">
                    <div className="space-y-4">
                      <p className="mt-3 mb-1">Início</p>
                      <Image
                        src={`${pathName}/index.png`}
                        width={1200}
                        height={550}
                        alt="inicio"
                      />
                    </div>
                    <div className="space-y-4">
                      <p className="mt-3 mb-1">Dashboard</p>
                      <Image
                        src={`${pathName}/dashboard.png`}
                        width={1200}
                        height={550}
                        alt="Dashboard"
                      />
                      <Image
                        src={`${pathName}/dashboardMobile.png`}
                        width={250}
                        height={150}
                        alt="Dashboard"
                        className="max-h-[550px] object-contain self-start"
                      />
                    </div>
                    <div className="space-y-4">
                      <p className="mt-3 mb-1">Pesquisa</p>
                      <Image
                        src={`${pathName}/search.png`}
                        width={1200}
                        height={550}
                        alt="pesquisa"
                      />
                      <Image
                        src={`${pathName}/searchMobile.png`}
                        width={250}
                        height={150}
                        alt="pesquisa"
                        className="max-h-[550px] object-contain self-start"
                      />
                      <Image
                        src={`${pathName}/searchItens.png`}
                        width={1200}
                        height={550}
                        alt="pesquisa"
                      />
                      <Image
                        src={`${pathName}/searchCategoria.png`}
                        width={1200}
                        height={550}
                        alt="pesquisa"
                      />
                    </div>
                    <div className="">
                      <p className="mt-3 mb-1">Comanda</p>
                      <Image
                        src={`${pathName}/comanda.png`}
                        width={1200}
                        height={550}
                        alt="comanda"
                      />
                    </div>
                    <div className="">
                      <p className="mt-3 mb-1">Menu do usuário</p>
                      <Image
                        src={`${pathName}/menu.png`}
                        width={1200}
                        height={550}
                        alt="menu"
                      />
                    </div>
                    <div className="">
                      <p className="mt-3 mb-1">Pedidos</p>
                      <Image
                        src={`${pathName}/pedido.png`}
                        width={1200}
                        height={550}
                        alt="Pedidos"
                      />
                      <p className="mt-3 mb-1">Apenas para os funcionários</p>
                      <Image
                        src={`${pathName}/menuListAll.png`}
                        width={1200}
                        height={550}
                        alt="Pedidos"
                      />
                    </div>
                    <div className="">
                      <p className="mt-3 mb-1">Categoria</p>
                      <Image
                        src={`${pathName}/listaCategoria.png`}
                        width={1200}
                        height={550}
                        alt="Opções"
                      />
                    </div>
                    <div className="">
                      <p className="mt-3 mb-1">Lista de itens</p>
                      <Image
                        src={`${pathName}/listItens.png`}
                        width={1200}
                        height={550}
                        alt="Lista de itens"
                      />
                    </div>
                    <div className="space-y-4">
                      <p className="mt-3 mb-1">Usuário</p>
                      <Image
                        src={`${pathName}/login.png`}
                        width={1200}
                        height={550}
                        alt="Entrar na conta"
                      />
                      <Image
                        src={`${pathName}/cadastroUser.png`}
                        width={1200}
                        height={550}
                        alt="Entrar na conta"
                      />
                    </div>
                    <div className="space-y-4">
                      <p className="mt-3 mb-1">Mesas</p>
                      <Image
                        src={`${pathName}/mesa.png`}
                        width={1200}
                        height={550}
                        alt="Mesa"
                      />
                      <Image
                        src={`${pathName}/listMesa.png`}
                        width={1200}
                        height={550}
                        alt="Lista de mesas"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}
