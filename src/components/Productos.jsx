import Card from './Card'

//datos
const productos = [
  { id: 1, nombre: 'Base Beige Natural', precio: 45000, img: '/imagenes/base.jpg' },
  { id: 2, nombre: 'Labial Cacao', precio: 28000, img: '/imagenes/labial.jpg' },
  { id: 3, nombre: 'Rubor Durazno', precio: 32000, img: '/imagenes/rubor.jpg' },
  { id: 4, nombre: 'Sombras Tierra', precio: 55000, img: '/imagenes/sombras.jpg' },
  { id: 5, nombre: 'Corrector Arena', precio: 30000, img: '/imagenes/corrector.jpg' },
  { id: 6, nombre: 'Delineador Café', precio: 22000, img: '/imagenes/delineador.jpg' },
]

function Productos({ agregar }) {
  return (
    <section id="productos" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="mb-10 text-center text-3xl font-bold text-[#6f4e37]">
        Nuestros productos
      </h2>

      {/* lista */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {productos.map((p) => (
          <Card
            key={p.id}
            nombre={p.nombre}
            precio={p.precio}
            img={p.img}
            agregar={agregar}
          />
        ))}
      </div>
    </section>
  )
}

export default Productos