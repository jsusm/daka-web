"use client";

import SectionLayout from "@/components/layout/SectionLayout"
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll"
import { SectionTitleLabel } from "@/components/layout/SectionTitle";

const marcas = [
  "https://tiendasdaka.com/img/marca/ANKER.webp",
  "https://tiendasdaka.com/img/marca/HYUNDAI.webp",
  "https://tiendasdaka.com/img/marca/KITCHENAID.webp",
  "https://tiendasdaka.com/img/marca/OSTER.webp",
  "https://tiendasdaka.com/img/marca/RIBELLE.webp",
  "https://tiendasdaka.com/img/marca/SAMSUNG.webp",
  "https://tiendasdaka.com/img/marca/WHIRLPOOL.webp",
  "https://tiendasdaka.com/img/marca/XIAOMI.webp",
]

export default function SectionPartnerBrands() {
  const [emblaRef] = useEmblaCarousel({
    dragFree: true,
    loop: true,
    duration: 10000,
  }, [
    AutoScroll({ playOnInit: true, speed: 1 })
  ])
  return (
    <SectionLayout>
      <SectionTitleLabel className="text-center text-2xl sm:text-3xl">Trabajamos con las mejores marcas</SectionTitleLabel>
      <div className="relative">
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {marcas.map(m => <img className="h-24 rounded-xl embla__slide min-w-0 flex-[0_0_auto] shadow mr-4" src={m} key={m} />)}
          </div>
        </div>
        <div className="absolute inset-0 right-auto w-16 bg-gradient-to-r from-stone-100 to-transparent" />
        <div className="absolute inset-0 left-auto w-16 bg-gradient-to-l from-stone-100 to-transparent" />
      </div>
    </SectionLayout>
  )
}
