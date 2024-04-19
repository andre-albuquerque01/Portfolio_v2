import Image from 'next/image'
import Link from 'next/link'

type PropsCard = {
  pathLink: string
  titleLink: string
  pathImage: string
  title: string
  text: string
}

export const CardProject = ({
  pathLink,
  titleLink,
  pathImage,
  title,
  text,
}: PropsCard) => {
  return (
    <Link
      href={`/projects/${pathLink}`}
      className="w-full h-52 flex items-center justify-around gap-5 text-white border border-white rounded-xl transform duration-700 hover:bg-zinc-700 hover:scale-110"
      title={titleLink}
    >
      <Image
        src={pathImage}
        width={1200}
        height={900}
        alt="Capa"
        className=" h-52 object-contain w-[45%] py-2"
      />
      <div className="flex flex-col items-center gap-6 w-[50%]">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p>{text}</p>
      </div>
    </Link>
  )
}
