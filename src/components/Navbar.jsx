function Navbar({ carrito }) {
  return (
    <nav className="flex items-center justify-between bg-[#6f4e37] px-8 py-4 text-[#f5ebe0]">
      {/* logo */}
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d5bdaf] text-lg font-bold text-[#4a3728]">
          DG
        </span>
        <h1 className="text-xl font-semibold tracking-wide">MontDang</h1>
      </div>

      {/* links */}
      <ul className="hidden gap-8 md:flex">
        <li><a href="#inicio" className="hover:text-[#d5bdaf]">Inicio</a></li>
        <li><a href="#productos" className="hover:text-[#d5bdaf]">Productos</a></li>
        <li><a href="#contacto" className="hover:text-[#d5bdaf]">Contacto</a></li>
      </ul>

      {/* carrito */}
      <div className="rounded-full bg-[#d5bdaf] px-4 py-1 text-sm font-semibold text-[#4a3728]">
        Carrito: {carrito}
      </div>
    </nav>
  )
}

export default Navbar