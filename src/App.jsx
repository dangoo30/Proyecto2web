import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Productos from './components/Productos'
import Footer from './components/Footer'

function App() {
  const [carrito, setCarrito] = useState(0)

  return (
    <>
      <Navbar carrito={carrito} />
      <Hero />
      <Productos agregar={() => setCarrito(carrito + 1)} />
      <Footer />
    </>
  )
}

export default App