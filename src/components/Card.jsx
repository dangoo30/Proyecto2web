function Card({ nombre, precio, img, agregar }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-lg">
      {/* imagen */}
      <img src={img} alt={nombre} className="h-48 w-full object-cover" />

      {/* info */}
      <div className="p-5">
        <h3 className="mb-1 text-lg font-semibold text-[#4a3728]">{nombre}</h3>
        <p className="mb-4 text-[#7a5c45]">${precio.toLocaleString('es-CO')}</p>
        <button
          onClick={agregar}
          className="w-full rounded-full bg-[#6f4e37] py-2 text-[#f5ebe0] transition hover:bg-[#4a3728]"
        >
          Agregar
        </button>
      </div>
    </div>
  )
}

export default Card