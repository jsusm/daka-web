"use client";
import { SectionTitle, SectionTitleLabel, SectionTitleLink } from "@/components/layout/SectionTitle";
import { LucideTvMinimal, LucideRefrigerator, LucideLampDesk, LucideMonitorSmartphone, LucideArrowRight } from "lucide-react";
import { stagger, Variants } from "motion";
import * as motion from 'motion/react-client'

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

const enterVariant: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1, y: 0, transition: {
      delayChildren: stagger(0.1),
      when: 'beforeChildren'
    }
  },
}

const categoriesVariant: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, },
}
export default function SectionCategories() {
  return (
    <section
      className="py-12 sm:py-14 lg:py-16"
    >
      <motion.div
        variants={enterVariant}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 space-y-8">
        <SectionTitle>
          <SectionTitleLabel>Consulta Nuestas Categorias</SectionTitleLabel>
          <SectionTitleLink>Ver todas las Categorias </SectionTitleLink>
        </SectionTitle>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-8 flex-wrap"
        >
          {categories.map((c) => (
            <motion.div
              variants={categoriesVariant}
              className="rounded-xl flex flex-col items-center gap-2 transition-colors group"
              key={c.name}
            >
              <img src={c.img} alt={c.name} className="aspect-square object-cover rounded-xl border border-stone-300 group-hover:shadow transition shadow-none w-full" />
              <p className="md:text-lg font-medium text-stone-600 group-hover:text-blue-700 transition">{c.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )

}
