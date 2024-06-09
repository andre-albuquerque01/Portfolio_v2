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
            <div>
              <div className="font-semibold">RF01. Login de Cliente:</div>
              <div className="">
                <div>
                  <p>
                    Informações: permitir que os usuários do aplicativo façam
                    login com seus dados pessoais, e-mail e senha.
                  </p>
                </div>
                <div>
                  <p>Regras:</p>
                  <ol className="list-decimal ml-10">
                    <li>
                      Cadastro novo Cliente: para criar um novo cadastro de
                      cliente, o cliente deve fornecer um endereço de email e
                      uma senha. Após o cadastro, um email de confirmação será
                      enviado para o endereço de email fornecido, a fim de
                      validar o novo cadastro do cliente.
                    </li>
                    <li>
                      Esqueci a senha: o cliente esqueceu sua senha, logo é
                      enviado um e-mail um token.
                    </li>
                    <li>
                      Autenticação: O sistema deve verificar se as informações
                      de login do cliente, verificar se já é cadastrado, caso o
                      cliente já esteja cadastrado, mostra mensagem cliente
                      cadastrado, se não houver cadastro daquele cliente segue a
                      rotina normalmente.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            <div>
              <div className="font-semibold">RF02. Gerenciamento de mesas</div>
              <div className="">
                <div>
                  <p>
                    Informações: permitir que o usuário (Administrador) da
                    aplicação gerencie mesas do estabelecimento, verificando
                    status e cadastrando/excluindo mesas..
                  </p>
                </div>
                <div>
                  <p>Regras:</p>
                  <ol className="list-decimal ml-10">
                    <li>
                      A aplicação deve permitir que o usuário (Administrador)
                      cadastre novas mesas no estabelecimentos, informando o
                      número da mesa;
                    </li>
                    <li>
                      A aplicação deve permitir que o usuário (Administrador)
                      exclua mesas que não estejam mais em uso nos restaurantes
                      e bares cadastrados;
                    </li>
                    <li>
                      A aplicação deve permitir que o usuário (Administrador)
                      visualize todas as mesas cadastradas do estabelecimento,
                      com suas respectivas informações como número da mesa e
                      status;
                    </li>
                    <li>
                      A aplicação deve permitir que o usuário (Administrador)
                      altere o status de uma mesa de acordo com sua
                      disponibilidade, podendo ser "disponível" ou "ocupada";
                    </li>
                    <li>
                      A aplicação deve permitir que o usuário (Administrador)
                      filtre as mesas por status e por estabelecimento
                      cadastrado, facilitando a visualização e gerenciamento das
                      mesas.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            <div>
              <div className="font-semibold">RF03. Menu digital</div>
              <div className="">
                <div>
                  <p>
                    Informações: permitir que os usuários da aplicação
                    visualizem o menu do estabelecimento, com descrições dos
                    pratos, preços, fotos, disponibilidade e categoria.
                  </p>
                </div>
                <div>
                  <p>Regras:</p>
                  <ol className="list-decimal ml-10">
                    <li>
                      Permitir que os clientes visualizem o menu completo de
                      forma digital;
                    </li>
                    <li>Fornecer imagens e descrições claras dos produtos;</li>
                    <li>
                      Permitir que os clientes visualizem os preços dos itens e
                      seja atualizado o subtotal do pedido em tempo real, após
                      inseri-lo no comanda;
                    </li>
                    <li>
                      Será de fácil utilização, tanto para a clientela quanto
                      para os responsáveis pela gestão do estabelecimento;
                    </li>
                    <li>
                      Os produtos designados como indisponíveis na base de dados
                      deverão ficar indisponíveis para fazer a sua seleção no
                      cardápio.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-xl">
              <h2 className="font-bold">Arquitetura do projeto</h2>
            </div>

            <div className="">
              <ul className="list-disc ml-10">
                <li>Linguagem: PHP e Typescript;</li>
                <li>Frameworks: Laravel e Next.Js;</li>
                <li>Banco de dados MySql;</li>
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
                <h2 className="font-semibold">Apresentação das telas</h2>
                <p>
                  As telas de Dashboard, Pedidos, Itens, Pesquisa e Cadastro do
                  usuário funcionalidades completas de CRUD.
                </p>
              </div>
              <div className="mt-2">
                <div className="space-y-2">
                  <div className="text-xl">
                    <h2 className="font-bold">Telas</h2>
                  </div>
                  <div className="object-cover">
                    <div className="space-y-4">
                      <p className="mt-3 mb-1">Dashboard</p>
                      <Image
                        src={`${pathName}/dashboard.png`}
                        width={1200}
                        height={550}
                        alt="inicio"
                      />
                      <Image
                        src={`${pathName}/dashboardMobile.png`}
                        width={250}
                        height={150}
                        alt="Inicio"
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
