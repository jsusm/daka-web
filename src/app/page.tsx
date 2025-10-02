import Image from "next/image";
import { LucideLampDesk, LucideMonitorSmartphone, LucideRefrigerator, LucideSearch, LucideShoppingCart, LucideTvMinimal, UserIcon } from 'lucide-react'

const marcas = [
  "https://tiendasdaka.com/img/marca/ANKER.webp",
  "https://tiendasdaka.com/img/marca/HYUNDAI.webp",
  "https://tiendasdaka.com/img/marca/KITCHENAID.webp",
  "https://tiendasdaka.com/img/marca/OSTER.webp",
  "https://tiendasdaka.com/img/marca/RIBELLE.webp",
  "https://tiendasdaka.com/img/marca/SAMSUNG.webp",
  "https://tiendasdaka.com/img/marca/WHIRLPOOL.webp",
  "https://tiendasdaka.com/img/marca/XIAOMI.webp",
  "https://tiendasdaka.com/img/marca/ANKER.webp",
]

export default function Home() {
  return (
    <div>
      <header className="bg-[#ffdd00]">
        <div className="flex items-center h-20 justify-between mx-auto max-w-6xl px-4">
          <div>
            <img className="h-16" src="https://tiendasdaka.com/img/logoF.webp" />
          </div>
          <div className="justify-end hidden sm:flex">
            <label htmlFor="search" className="w-lg h-11 bg-stone-50 flex items-center px-4 rounded-sm gap-4 border border-transparent">
              <input id="search" className="w-full outline-none text-base placeholder:text-stone-800/50" placeholder="Neveras, Lavadoras, Televisores ..." type="text" />
              <LucideSearch strokeWidth={3} className="text-blue-800" />
            </label>
          </div>
          <div className="flex items-center gap-4">
            <button className="h-12 flex items-center">
              <LucideShoppingCart className="text-blue-800" strokeWidth={3} />
            </button>
            <button className="h-12 flex items-center">
              <UserIcon className="text-blue-800" strokeWidth={3} />
            </button>
          </div>
        </div>
        <div className="flex justify-center px-4 sm:hidden">
          <label htmlFor="search" className="w-lg h-11 bg-stone-50 flex items-center px-4 rounded-sm gap-4 border border-transparent">
            <input id="search" className="w-full outline-none text-base placeholder:text-stone-800/50" placeholder="Neveras, Lavadoras, Televisores ..." type="text" />
            <LucideSearch strokeWidth={3} className="text-blue-800" />
          </label>
        </div>
        <nav className="flex justify-center py-2">
          <ul className="flex gap-4 text-blue-800 font-medium font-sans flex-wrap sm:flex-nowrap justify-center px-4 text-sm sm:text-base">
            <li>
              Categorias
            </li>
            <li>
              Promociones
            </li>
            <li>
              Nuestras tiendas
            </li>
            <li>
              Contactanos
            </li>
          </ul>
        </nav>
      </header>
      <main className="font-sans">
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

        <SectionCategories />
        <section className="py-12 sm:py-14 lg:py-16">
          <div className="max-w-6xl mx-auto px-4 space-y-8">
            <p className="text-2xl text-stone-600 font-medium">Consulta Nuestas Categorias</p>
            <div className="grid grid-cols-4 gap-8 flex-wrap">
              <div className="bg-stone-200 rounded-xl flex flex-col items-center p-6 gap-4">
                <LucideTvMinimal size={64} strokeWidth={2.1} className=" text-blue-800" />
                <p className="text-xl  font-semibold">Tv y Video</p>
              </div>
              <div className="bg-stone-200 rounded-xl flex flex-col items-center p-6 gap-4">
                <LucideRefrigerator size={64} strokeWidth={2.1} className=" text-blue-800" />
                <p className="text-xl font-semibold">Electrodomésticos</p>
              </div>
              <div className="bg-stone-200 rounded-xl flex flex-col items-center p-6 gap-4">
                <LucideMonitorSmartphone size={64} strokeWidth={2.1} className=" text-blue-800" />
                <p className="text-xl font-semibold">Tecnología</p>
              </div>
              <div className="bg-stone-200 rounded-xl flex flex-col items-center p-6 gap-4">
                <LucideLampDesk size={64} strokeWidth={2.1} className=" text-blue-800" />
                <p className="text-xl font-semibold">Tecnología</p>
              </div>
            </div>
          </div>
        </section>
        <ProductsSection />
        <section className="py-12 sm:py-14 lg:py-16 max-w-6xl mx-auto px-4 space-y-8">
          <div className="grid grid-cols-2 gap-8">
            <img src="https://tiendasdaka.com/img/s1/1.png" className="rounded-xl shadow-lg" />
            <img src="https://tiendasdaka.com/img/s1/2.png" className="rounded-xl shadow-lg" />
          </div>
        </section>
        <section className="py-12 sm:py-14 lg:py-16">
          <div className="max-w-6xl mx-auto px-4 space-y-8">
            Marcas Aliadas
          </div>
          <p className="flex space-x-4 grayscale overflow-hidden">
            {marcas.map(m => (<img src={m} className="h-32" />))}
          </p>
        </section>
      </main>
    </div>
  );

  function SectionCategories() {
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
}

type Product = {
  sap: string;
  categoria: string;
  promo: boolean;
  precio: number;
  descripcion: string;
  marca: string;
  familia: string;
  view: boolean;
}

const products = [
  {
    "sap": "LM-00000938",
    "categoria": "TV 85 PULG",
    "promo": false,
    "precio": 2610,
    "descripcion": "TV 85 PULG QLED 4K SMART QN85Q60DA SAMSUNG",
    "marca": "SAMSUNG",
    "familia": "Linea Marron",
    "view": true
  },
  {
    "sap": "LM-00000937",
    "categoria": "TV 50 PULG",
    "promo": false,
    "precio": 785,
    "descripcion": "TV 50 PULG CRYSTAL 4K UHD SMART CNEGRO UN50DU8000 SAMSUNG",
    "marca": "SAMSUNG",
    "familia": "Linea Marron",
    "view": true
  },
  {
    "sap": "LM-00000880",
    "categoria": "TV 43 PULG",
    "promo": false,
    "precio": 220,
    "descripcion": "TV 43 PULG FULL HD SMART 43DA23FG DAEWOO",
    "marca": "DAEWOO",
    "familia": "Linea Marron",
    "view": true
  },
  {
    "sap": "LM-00000860",
    "categoria": "CORNETAS",
    "promo": false,
    "precio": 185,
    "descripcion": "PARTY SPEAKER CBLUETOOTH DOBLE DE 6.5 PULG. DA610P DAEWOO",
    "marca": "DAEWOO",
    "familia": "Linea Marron",
    "view": true
  },
];

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="relative overflow-hidden rounded-xl shadow-sm font-sans bg-white">
      {product.promo && (
        <div className="absolute top-2 right-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-lg">
          Oferta
        </div>
      )}
      <img className="object-cover w-full h-64" src={`https://tiendasdaka.com/img/producto/${product.sap}.webp`} alt={product.descripcion} />
      <div className="p-4">
        <h3 className="font-medium text-stone-900 line-clamp-2">{product.descripcion}</h3>
        <div className="flex items-center justify-between mt-4">
          {product.promo ? (
            <div className="flex gap-2 items-center">
              <p className="text-lg font-bold text-blue-800">${product.precio}</p>
              <p className="text-sm text-red-600/80 line-through">${product.precio}</p>
            </div>
          ) : (
            <p className="text-lg font-bold text-gray-900">${product.precio}</p>
          )}
        </div>
      </div>
    </div>
  );
}

function ProductsSection() {
  return (
    <section className="py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-2xl text-stone-600 font-medium">Explora nuestros productos</p>

        <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:mt-8">
          {products.map((product) => (
            <ProductCard key={product.sap} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
