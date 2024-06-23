/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import Link from 'next/link'

export default function TutuFood() {
  const pathName = '/class'
  return (
    <aside className="max-w-[1200px] mx-auto text-justify mt-10 max-sm:px-4 px-20 space-y-8 text-white mb-5">
      <div className="" id="ifome">
        <div className="">
          <div className="text-2xl">
            <h1>Classroom Management</h1>
          </div>
          <div className="text-sobre">
            Sistema de cadastramento de aluno, turma e sala
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
              <div className="font-semibold">
                RF01. Cadastro sala, aluno e turma:
              </div>
              <div className="">
                <div>
                  <p>
                    O sistema é capaz de gerenciar salas de aula, alocando o
                    aluno nas turmas e mostrando em qual turma o aluno está. É
                    possível fazer a alteração do aluno e a exclusão da alocação
                    do aluno a determinada sala.
                  </p>
                </div>
                <div>
                  <p>Regras:</p>
                  <ol className="list-decimal ml-10">
                    <li>
                      Todos os que tiverem acesso ao sistema deverão ter acesso
                      a todas as informações do sistema.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            <div>
              <div className="font-semibold">RF02. Cadastro de aluno</div>
              <div className="">
                <div>
                  <p>Regras:</p>
                  <ol className="list-decimal ml-10">
                    <li>
                      Alunos: Nome, campo: Obrigatório, CPF (o campo CPF não
                      pode se repetir), campo: Obrigatório, sexo (Masculino ou
                      Feminino), campo: Obrigatório, data de nascimento (maior
                      que 01/01/1900), campo: Obrigatório, e-mail (o campo
                      e-mail não pode se repetir), campo: Obrigatório, renda
                      mensal (Valor monetário maior que zero), campo: Opcional
                      (Não obrigatório).
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            <div>
              <div className="font-semibold">RF03. Cadastro da turma</div>
              <div className="">
                <div>
                  <p>Regras:</p>
                  <ol className="list-decimal ml-10">
                    <li>
                      Turmas: Código da turma. Caracteres livre informado pelo
                      usuário, campo: Obrigatório, Data de Início (maior ou
                      igual a Data Atual), campo: Obrigatório, Data de Fim
                      (Maior que a data de início da turma), campo: Obrigatório,
                      Quantidade máxima de alunos na Turma. Número inteiro maior
                      que zero, campo: Obrigatório. Esse campo limita o máximo
                      de alunos que a Turma pode ter.
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
                  href="https://github.com/andre-albuquerque01/UpgradeGestaoAluno"
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
                  As telas de Dashboard, Aluno, Turma e Sala, possuem
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
                      <p className="mt-3 mb-1">Aluno</p>
                      <Image
                        src={`${pathName}/aluno.png`}
                        width={1200}
                        height={550}
                        alt="aluno"
                      />
                    </div>
                    <div className="">
                      <p className="mt-3 mb-1">Turma</p>
                      <Image
                        src={`${pathName}/turma.png`}
                        width={1200}
                        height={550}
                        alt="turma"
                      />
                    </div>
                    <div className="">
                      <p className="mt-3 mb-1">Sala</p>
                      <Image
                        src={`${pathName}/sala.png`}
                        width={1200}
                        height={550}
                        alt="salas"
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
