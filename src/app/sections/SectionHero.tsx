export default function HeroSection() {
  return (
    <section>
      <div className="w-full h-[500px] relative overflow-hidden">
        <img
          className="absolute top-1/2 -translate-y-1/2 h-full w-full inset-0 object-cover object-center -z-20"
          src="https://images.unsplash.com/photo-1588854337115-1c67d9247e4d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <div className="absolute w-full inset-0 bg-gradient-to-r from-blue-800 to-blue-800/20 -z-10" />
        <div className="mx-auto max-w-6xl flex items-center h-full">
          <div className="flex flex-col px-4 text-white font-sans max-w-3xl gap-2">
            <p className="text-3xl md:text-5xl font-bold">
              La tienda número 1 en venta de electrodomésticos en Venezuela
            </p>
            <p className="text-lg">
              con marcas de respaldo internacional, calidad, variedad y precios insuperables en: tecnología, hogar, casa, lencería y más.¡Entra y descubre lo que tenemos para ti!
            </p>
          </div>
        </div>
      </div>
    </section>
  )

}
