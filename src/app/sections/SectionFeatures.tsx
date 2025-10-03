export default function SectionFeatures() {
  return (
    <section id="section-categories" className="py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-6 mt-12 sm:grid-cols-2 md:grid-cols-3 lg:mt-16">
          <div className="overflow-hidden h-[480px] rounded-lg p-8 flex flex-col items-center text-center relative text-white justify-end">
            <img
              className="absolute inset-0 object-cover object-center w-full h-full -z-20"
              src="https://www.daewooelectronics.com/cdn/shop/files/TV_1250x1250_e9aa25a1-4aba-4712-ac11-25bcbf348657.jpg?v=1753940306&width=600%201280w"
            />
            <div className="inset-0 absolute bg-gradient-to-t from-stone-900/60 to-transparent -z-10" />
            <h3 className="mt-4 text-sm">TVs</h3>
            <p className="text-xl md:text-2xl font-bold ">Ultra HD</p>
          </div>
          <div className="overflow-hidden h-[480px] rounded-lg p-8 flex flex-col items-center text-center relative text-white justify-end">
            <img
              className="absolute inset-0 object-cover object-center w-full h-full -z-20"
              src="https://www.daewooelectronics.com/cdn/shop/files/LAUNDRY_1250x1250_6ef2a88b-267e-4389-ba8e-d9cf295c49fd.jpg?v=1753940178&width=345w"
            />
            <div className="inset-0 absolute bg-gradient-to-t from-stone-900/60 to-transparent -z-10" />
            <h3 className="mt-4 text-sm">Lavadoras y secadoras</h3>
            <p className="text-xl md:text-2xl font-bold ">Mas limpio</p>
          </div>
          <div className="overflow-hidden h-[480px] rounded-lg p-8 flex flex-col items-center text-center relative text-white justify-end">
            <img
              className="absolute inset-0 object-cover object-center w-full h-full -z-20"
              src="https://images.unsplash.com/photo-1547091267-6b2be403a763?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <div className="inset-0 absolute bg-gradient-to-t from-stone-900/60 to-transparent -z-10" />
            <h3 className="mt-4 text-sm">Linea blanca</h3>
            <p className="text-xl md:text-2xl font-bold ">Cocina Rapido</p>
          </div>
        </div>
      </div>
    </section>
  )
}
