import Image from 'next/image'
import Link from 'next/link'

export default function SocialMidia() {
  const pathName = '/socialMedia'
  return (
    <aside className="max-w-[1200px] mx-auto text-justify mt-10 max-sm:px-4 px-20 space-y-8 text-white mb-5">
      <div className="" id="ifome">
        <div className="">
          <div className="text-2xl">
            <h1>Rede social</h1>
          </div>
          <div className="text-sobre">
            A rede social interna da empresa serve para que as pessoas sejam
            mais colaborativas e se divirtam no ambiente de trabalho. Dessa
            forma, é possível que os colaboradores tenham uma postura mais
            informal e interajam mais com colegas de toda a empresa.
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
              <div className="font-semibold">RF02. Gerenciamento de posts</div>
              <div className="">
                <div>
                  <p>
                    Informações: permitir que o usuário faça posts, edite e
                    remova suas publicações.
                  </p>
                </div>
                <div>
                  <p>Regras:</p>
                  <ol className="list-decimal ml-10">
                    <li>
                      A aplicação deve permitir que o usuário publicações.
                    </li>
                    <li>
                      A aplicação deve permitir que o usuário edite a suas
                      publicações.
                    </li>
                    <li>
                      A aplicação deve permitir que o usuário visualizem as suas
                      e as publicações de outras pessoas.
                    </li>
                    <li>
                      A aplicação deve permitir que o usuário exclua a suas
                      publicações.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            <div>
              <div className="font-semibold">
                RF03. Gerenciamento de comentários
              </div>
              <div className="">
                <div>
                  <p>
                    Informações: permitir que o usuário faça comentários e
                    remova seus comentários.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="font-semibold">RF03. Dashboard</div>
              <div className="">
                <div>
                  <p>
                    Informações: permitir que os usuários da aplicação
                    visualizem o Dashboard, que contará com as publicações mais
                    recentes.
                  </p>
                </div>
                <div>
                  <p>Regras:</p>
                  <ol className="list-decimal ml-10">
                    <li>
                      Permitir que os usuários visualizem o perfil de outros
                      usuários para ver suas publicações.
                    </li>
                    <li>
                      Permitir que os usuários visualizem comentários dos outros
                      usuários.
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
                <li>Frameworks: Laravel 11 e Next.Js;</li>
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
                  href="https://github.com/andre-albuquerque01/SocialMedia.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500"
                >
                  Link para o código
                </Link>
              </div>
              <div className="text-lg">
                <h2 className="font-semibold">Apresentação das telas</h2>
                <p>As telas de Dashboard, Login e Perfis.</p>
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
                        src={`${pathName}/dashboard.jpg`}
                        width={1200}
                        height={550}
                        alt="inicio"
                      />
                      <Image
                        src={`${pathName}/otherDashboard.jpg`}
                        width={1200}
                        height={550}
                        alt="inicio"
                      />
                      <Image
                        src={`${pathName}/dashboardWithComment.jpg`}
                        width={1200}
                        height={550}
                        alt="inicio"
                      />
                      <Image
                        src={`${pathName}/dashboardMobile.jpg`}
                        width={250}
                        height={150}
                        alt="Inicio"
                        className="max-h-[550px] object-contain self-start"
                      />
                    </div>
                    <div className="space-y-4">
                      <p className="mt-3 mb-1">Login</p>
                      <Image
                        src={`${pathName}/login.jpg`}
                        width={1200}
                        height={550}
                        alt="login"
                      />
                    </div>
                    <div className="space-y-4">
                      <p className="mt-3 mb-1">Perfil</p>
                      <Image
                        src={`${pathName}/myProfile.jpg`}
                        width={1200}
                        height={550}
                        alt="meu perfil"
                      />
                      <Image
                        src={`${pathName}/myProfileMobile.jpg`}
                        width={250}
                        height={150}
                        alt="my Profile mobile"
                        className="max-h-[550px] object-contain self-start"
                      />
                    </div>
                    <div className="space-y-4">
                      <p className="mt-3 mb-1">Perfil de outros usuários</p>
                      <Image
                        src={`${pathName}/otherProfileWithComment.jpg`}
                        width={1200}
                        height={550}
                        alt="outro perfil"
                      />
                      <Image
                        src={`${pathName}/otherProfile.jpg`}
                        width={250}
                        height={150}
                        alt="my Profile mobile"
                        className="max-h-[550px] object-contain self-start"
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
