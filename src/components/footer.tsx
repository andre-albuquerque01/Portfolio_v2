export const Footer = () => {
  const data = new Date()
  const currents = data.getFullYear()
  return (
    <footer className="text-white h-8 flex items-center justify-center text-sm w-full bg-zinc-900">
      <p>©Copyright - {currents} - Todos os direitos reservados</p>
    </footer>
  )
}
