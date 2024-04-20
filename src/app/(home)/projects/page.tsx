/* eslint-disable react/no-unescaped-entities */
import { CardProject } from '@/components/cardProjects'

export default function Contact() {
  return (
    <div className="max-w-[1200px] min-h-screen mx-auto mb-5">
      <div>
        <h1 className="uppercase text-white text-2xl text-center mt-10">
          PROJECTS
        </h1>
        <div className="w-20 h-1 rounded-sm bg-blue-600 mt-2 mx-auto"></div>
      </div>
      <div>
        <p className="text-white text-md text-center mt-7">
          Here you will find some of the principal personal projects that I have
          created
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-5 mt-10">
        <CardProject
          pathLink={'tutuFood'}
          titleLink={'Operational Management for restaurants'}
          pathImage={'/tutuFood/tutufoodCapa.png'}
          title={'Operational Management for restaurants'}
          text={
            'Menu system with order management, table management, item management, and category management.'
          }
        />
        <CardProject
          pathLink={'event'}
          titleLink={'Sistema de eventos'}
          pathImage={'/event/event.png'}
          title={'Events'}
          text={
            'Events website, for a specific organization, to promote its events.'
          }
        />
        <CardProject
          pathLink={'operationalManagement'}
          titleLink={'Operational Management'}
          pathImage={'/managemenSystem/Gerenciamento.png'}
          title={'Operational Management'}
          text={
            'Operational Management of companies providing outsourced labor services.'
          }
        />
        <CardProject
          pathLink={'takeThePhone'}
          titleLink={'E-commerce for restaurants'}
          pathImage={'/e-commerceRestaurants/takeThePhone.jpg'}
          title={'E-commerce for restaurants'}
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
  )
}
