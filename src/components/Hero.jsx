function Hero() {
  return (
    <section
      id="inicio"
      className="flex flex-col items-center justify-center bg-[#e3d5ca] px-6 py-24 text-center"
    >
      <h2 className="mb-4 text-4xl font-bold text-[#fbf2ed] md:text-6xl">
        Realza tu belleza natural
      </h2>
      <p className="mb-8 max-w-xl text-lg text-[#7a5c45]">
        Maquillaje en tonos tierra, pensado para todos los días.
      </p>
      <a
        href="#productos"
        className="rounded-full bg-[#6f4e37] px-8 py-3 text-[#f5ebe0] transition hover:bg-[#4a3728]"
      >
        Ver productos
      </a>
    </section>
  )
}

export default Hero