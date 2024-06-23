/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import Link from 'next/link'

export default function TutuFood() {
  const pathName = '/workOut'
  return (
    <aside className="max-w-[1200px] mx-auto text-justify mt-10 max-sm:px-4 px-20 space-y-8 text-white mb-5">
      <div className="" id="ifome">
        <div className="">
          <div className="text-2xl">
            <h1>Work out</h1>
          </div>
          <div className="text-sobre">
            An app for training for personal use.
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
              <div className="font-semibold">RF01. Login do usuário:</div>
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
                      Cadastro novo usuário: para criar um novo cadastro de
                      usuário, o usuário deve fornecer um endereço de email e
                      uma senha. Após o cadastro, um email de confirmação será
                      enviado para o endereço de email fornecido, a fim de
                      validar o novo cadastro do usuário.
                    </li>
                    <li>
                      Esqueci a senha: o usuário esqueceu sua senha, logo é
                      enviado um e-mail um token.
                    </li>
                    <li>
                      Autenticação: O sistema deve verificar se as informações
                      de login do usuário, verificar se já é cadastrado, caso o
                      usuário já esteja cadastrado, mostra mensagem usuário
                      cadastrado, se não houver cadastro daquele usuário segue a
                      rotina normalmente.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            <div>
              <div className="font-semibold">
                RF02. Gerenciamento de treinos
              </div>
              <div className="">
                <div>
                  <p>
                    Informações: permitir que o usuário da aplicação gerencie
                    seu treino, fazendo o cadastro/excluindo os treinos...
                  </p>
                </div>
                <div>
                  <p>Regras:</p>
                  <ol className="list-decimal ml-10">
                    <li>
                      A aplicação deve permitir que o usuário cadastre novos
                      treinos;
                    </li>
                    <li>
                      A aplicação deve permitir que o usuário exclua treinos que
                      não estejam mais em uso;
                    </li>
                    <li>
                      A aplicação deve permitir que o usuário visualize todas as
                      treinos cadastradas, com suas respectivas informações;
                    </li>
                    <li>
                      A aplicação deve permitir que o usuário altere o treino de
                      acordo com sua disponibilidade;
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
                    visualizem o treino;
                  </p>
                </div>
                <div>
                  <p>Regras:</p>
                  <ol className="list-decimal ml-10">
                    <li>
                      Permitir que os usuários visualizem o treino completo de
                      forma digital;
                    </li>
                    <li>Fornecer imagens e descrições claras dos treinos;</li>
                    <li>
                      Permitir que os usuários visualizem os treinos e seja
                      atualizado a qualquer tempo;
                    </li>
                    <li>Será de fácil utilização;</li>
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
                <li>Frameworks: Laravel^11 e Next.Js;</li>
                <li>Banco de dados MySql;</li>
                <li>Arquitetura: MVC;</li>
              </ul>
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-xl">
              <h2 className="font-bold">Observação</h2>
            </div>
            <div className="">
              <p>
                O sistema utiliza filas (queues) no Laravel para enviar e-mails
                de forma assíncrona, funcionando em segundo plano.
              </p>
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
                  As telas de Dashboard, Treinos, Lista de exercícios, possuem
                  funcionalidades completas de CRUD.
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
                    </div>
                    <div className="">
                      <p className="mt-3 mb-1">Exercícios</p>
                      <Image
                        src={`${pathName}/exercicios.png`}
                        width={1200}
                        height={550}
                        alt="exercicios"
                      />
                      <Image
                        src={`${pathName}/exercicioOne.png`}
                        width={1200}
                        height={550}
                        alt="exercicios"
                      />
                    </div>
                    <div className="">
                      <p className="mt-3 mb-1">Treino</p>
                      <Image
                        src={`${pathName}/treino.png`}
                        width={1200}
                        height={550}
                        alt="treino"
                      />
                    </div>
                    <div className="">
                      <p className="mt-3 mb-1">Login</p>
                      <Image
                        src={`${pathName}/login.png`}
                        width={1200}
                        height={550}
                        alt="Login"
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
