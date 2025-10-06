import { LucideArrowLeft, LucideArrowRight } from "lucide-react";

export type Product = {
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

export function ProductCard({ product }: { product: Product }) {
  const currencyFormatter = new Intl.NumberFormat('es', { currency: 'USD', style: "currency", currencyDisplay: "narrowSymbol", })
  const price = currencyFormatter.format(product.precio)
  return (
    <div className="relative overflow-hidden font-sans rounded-xl hover:shadow-lg transition group bg-white">
      {product.promo && (
        <div className="absolute top-2 right-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-lg">
          Oferta
        </div>
      )}
      <div className="relative w-full h-64">
        <img className="object-cover w-full h-full transition-all" src={`https://tiendasdaka.com/img/producto/${product.sap}.webp`} alt={product.descripcion} />
      </div>
      <div className="p-4">
        <p className="text-stone-500 line-clamp-2 text-sm mb-2">{product.marca}</p>
        <h3 className="font-medium text-stone-900 line-clamp-2">{product.descripcion}</h3>
        <div className="flex items-center justify-between mt-4">
          {product.promo ? (
            <div className="flex gap-2 items-center">
              <p className="text-lg font-bold text-blue-800">${product.precio}</p>
              <p className="text-sm text-red-600/80 line-through">${product.precio}</p>
            </div>
          ) : (
            <p className="text-neutral-900">{price}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProductsSection() {
  return (
    <section className="py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex justify-between sm:items-center items-start flex-wrap gap-x-8 flex-col sm:flex-row">
          <p className="text-2xl text-stone-600 font-medium text-center lg:text-3xl">Productos pensados para ti</p>
          <p className="text-lg font-medium text-blue-800 flex items-center gap-2">Ver Mas Productos <LucideArrowRight size={18} /></p>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-4 lg:mt-8">
          {products.map((product) => (
            <ProductCard key={product.sap} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
