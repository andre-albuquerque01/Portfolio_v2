/* eslint-disable react/no-unescaped-entities */
import { CardProject } from '@/components/cardProjects'

export default function Contact() {
  return (
    <div
      style={{
        backgroundImage:
          'linear-gradient(to bottom, #00000076, #000000eb), url(/pages/backgroundProject.jpg)',
        filter: 'brightness(150%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: 'calc(100vh - 80px)',
        minWidth: '100%',
      }}
    >
      <div className="max-w-[1200px] min-h-screen mx-auto pb-5">
        <div>
          <h1 className="uppercase text-white text-2xl text-center pt-10">
            PROJECTS
          </h1>
          <div className="w-20 h-1 rounded-sm bg-blue-600 mt-2 mx-auto"></div>
        </div>
        <div>
          <p className="text-white text-md text-center mt-7">
            {/* Here you will find some of the principal personal projects that I
            have created */}
            Aqui encontrará alguns dos principais projetos que foram feitos
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 mt-10">
          <CardProject
            pathLink={'imobiliaria'}
            titleLink={'Imobiliária'}
            pathImage={'/imobiliaria/capa.png'}
            title={'Imobiliária'}
            text={
              'Um sistema para imobiliária, onde pode publicar seus anúncios'
            }
          />
          <CardProject
            pathLink={'class'}
            titleLink={'Sistema de gerenciamento de classe'}
            pathImage={'/class/home.png'}
            title={'Sistema de gerenciamento de classe'}
            text={'Sistema com objetivo de gerenciamento de alunos nas turmas'}
          />
          <CardProject
            pathLink={'workOut'}
            titleLink={'Treino'}
            pathImage={'/workOut/home.png'}
            title={'Treino'}
            text={'Sistema para anotar os exercícios'}
          />
          <CardProject
            pathLink={'techCraft'}
            titleLink={'Landing Page'}
            pathImage={'/techCraft/home.png'}
            title={'Landing Page'}
            text={'Landing page para empresa'}
          />
          <CardProject
            pathLink={'socialMedia'}
            titleLink={'Social media'}
            pathImage={'/socialMedia/login.jpg'}
            title={'Social media'}
            text={
              'Rede social para empresa, para melhorar a interação dos funcionários'
            }
          />
          <CardProject
            pathLink={'tutuFood'}
            titleLink={'Sistema de cardápio'}
            pathImage={'/tutuFood/tutufoodCapa.png'}
            title={'Sistema de cardápio'}
            text={
              'Sistema de gerenciamento de pedidos, para controle da empresa e do cliente'
            }
          />
          <CardProject
            pathLink={'event'}
            titleLink={'Sistema de eventos'}
            pathImage={'/event/event.png'}
            title={'Events'}
            text={
              'Eventos website, para uma específica organização, para promover eventos.'
            }
          />
          <CardProject
            pathLink={'operationalManagement'}
            titleLink={'Sistema de gerenciamento de escalas'}
            pathImage={'/managemenSystem/Gerenciamento.png'}
            title={'Sistema de gerenciamento de escalas'}
            text={
              'Sistema para gerenciamento de escalas de funcionários de uma determinda organização'
            }
          />
          <CardProject
            pathLink={'takeThePhone'}
            titleLink={'E-commerce para restaurantes'}
            pathImage={'/e-commerceRestaurants/takeThePhone.jpg'}
            title={'E-commerce para restaurantes'}
            text={'Digital menu with online ordering.'}
          />

          <CardProject
            pathLink={'apiUser'}
            titleLink={'Api User'}
            pathImage={'/api-spring/ApiUser.png'}
            title={'Api User'}
            text={
              'A study on how to consume APIs and create an API using Spring Boot with MongoDB.'
            }
          />
        </div>
      </div>
    </div>
  )
}
