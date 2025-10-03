import { LucideTvMinimal, LucideRefrigerator, LucideLampDesk, LucideMonitorSmartphone } from "lucide-react";

const categories = [
  {
    name: "Tv y Auido",
    Icon: LucideTvMinimal,
  },
  {
    name: "Electrodomésticos",
    Icon: LucideRefrigerator,
  },
  {
    name: "Tecnología",
    Icon: LucideMonitorSmartphone,
  },
  {
    name: "Hogar",
    Icon: LucideLampDesk,
  },
]

export default function SectionCategories() {
  return (
    <section className="py-12 sm:py-14 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 space-y-8">
        <p className="text-2xl text-stone-600 font-medium">Consulta Nuestas Categorias</p>
        <div className="grid grid-cols-4 gap-8 flex-wrap">
          {categories.map(c => (
            <div className="bg-stone-200 hover:bg-yellow-300 rounded-xl flex flex-col items-center p-6 gap-4 transition-colors">
              <c.Icon size={64} strokeWidth={2.1} className=" text-blue-800" />
              <p className="text-xl  font-semibold">{c.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )

}
