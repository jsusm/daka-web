import Fondo from "@/assets/images/gana con daka fondo.png"
import Banner from "@/assets/images/gana con daka.png"
import Card from "@/assets/images/gana con daka card.png"
import SectionLayout from "@/components/layout/SectionLayout"
import Image from "next/image";

export default function SectionGanaConDaka() {
  return (
    <SectionLayout>
      <div className="bg-blue-950 rounded-2xl overflow-hidden  p-8 relative isolate shadow-2xl">
        <Image alt="Gana con daka" src={Fondo} className="absolute top-0 left-0 inset-0 -z-10" />
        <div className="absolute top-0 left-0 inset-0 -z-10 bg-gradient-to-t from-blue-950/30 to-transparent" />
        <div className="sm:grid-cols-2 grid items-center">
          <Image alt="Gana con Daka" src={Banner} className="" />
          <Image alt="Gana con Daka" src={Card} className="scale-90" />
        </div>
        <p className="text-center text-3xl sm:text-4xl font-extrabold text-white max-w-md mx-auto">
          Llevate <span className="bg-gradient-to-r from-yellow-400 via-yellow-100 to-yellow-300 bg-clip-text text-transparent">$5000</span> En tus productos Favoritos
        </p>
      </div>
    </SectionLayout>
  )
}
