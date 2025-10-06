import { LucideTvMinimal, LucideRefrigerator, LucideLampDesk, LucideMonitorSmartphone, LucideArrowRight } from "lucide-react";

const categories = [
  {
    img: 'https://img.freepik.com/free-photo/room-interior-design_23-2148899490.jpg?t=st=1759762674~exp=1759766274~hmac=3e947506ad830cf982eb441d23e3c28ef814eb034d15182424f57c9216b323dd&w=360',
    name: 'TV'
  },
  {
    img: "https://tiendasdaka.com/img/linea/TV%20-%20AUDIO.png",
    name: "Tv y Auido",
  },
  {
    img: 'https://images.unsplash.com/photo-1721613877687-c9099b698faa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: "Electrodomésticos",
  },
  {
    img: "https://tiendasdaka.com/img/linea/TECNOLOG%C3%8DA.png",
    name: "Tecnología",
  },
  {
    img: 'https://tiendasdaka.com/img/linea/HOGAR.png',
    name: "Cocina",
  },
  {
    img: 'https://images.unsplash.com/photo-1639298109207-5a9ccc254481?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fHRvYWxsYXN8ZW58MHx8MHx8fDA%3D',
    name: "Hogar",
  }
]

export default function SectionCategories() {
  return (
    <section className="py-12 sm:py-14 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 space-y-8">
        <div className="flex justify-between sm:items-center items-start flex-wrap gap-x-8 flex-col sm:flex-row">
          <p className="text-2xl text-stone-900 font-medium">Consulta Nuestas Categorias</p>
          <p className="text-lg font-medium text-blue-800 flex items-center gap-2">Ver todas las Categorias <LucideArrowRight size={18} /></p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 flex-wrap">
          {categories.map(c => (
            <div className="rounded-xl flex flex-col items-center gap-4 transition-colors group" key={c.name}>
              <img src={c.img} alt={c.name} className="aspect-square object-cover rounded-xl border border-stone-300 group-hover:shadow transition shadow-none" />
              <p className="md:text-xl font-semibold text-stone-900 group-hover:text-blue-700 transition">{c.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )

}
