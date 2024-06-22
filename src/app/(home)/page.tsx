import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex justify-center items-center text-center flex-col gap-5 text-white p-2 h-screen mt-[-80px]">
      <div className="flex flex-col items-center justify-center">
        <Image
          src={'/home/home.png'}
          width={500}
          height={500}
          alt="cover"
          className="max-h-[500px]"
        />
        <div className="flex justify-center items-center text-center flex-col gap-5 z-10">
          <h1 className="text-2xl font-bold">HEY, I AM ANDRÉ ALBUQUERQUE</h1>
          <p className="px-4">
            A full-stack developer focused on web Applications, building web
            Applications to facilitate life.
          </p>
          <Link href="/about" className="px-4 py-2 bg-blue-500 rounded-md">
            About me
          </Link>
        </div>
      </div>
    </main>
  )
}
