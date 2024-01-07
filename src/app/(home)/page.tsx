import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col gap-5 text-white h-[700px]">
      <h1 className="text-2xl font-bold">HEY, I AM ANDRÉ ALBUQUERQUE</h1>
      <p>
        A full-stack developer focused on web Applications, building web
        Applications to facilitate life
      </p>
      <Link href="/about" className="px-4 py-2 bg-blue-500 rounded-md">
        About me
      </Link>
    </main>
  )
}
