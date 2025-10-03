import Image from "next/image";
import { LucideLampDesk, LucideMonitorSmartphone, LucideRefrigerator, LucideSearch, LucideShoppingCart, LucideTvMinimal, UserIcon } from 'lucide-react'
import Footer from "@/components/layout/Footer";
import ProductsSection from "./sections/SectionProducts";
import SectionFeatures from "./sections/SectionFeatures";
import SectionCategories from "./sections/SectionCategories";
import HeroSection from "./sections/SectionHero";
import Header from "@/components/layout/Header";
import SectionPartnerBrands from "./sections/SectionParnerBrands";
import SectionLayout from "@/components/layout/SectionLayout";

export default function Home() {
  return (
    <>
      <Header />
      <main className="font-sans">
        <HeroSection />
        <SectionCategories />
        <SectionFeatures />
        <SectionPartnerBrands />
        <SectionLayout>
          <p className="text-2xl text-blue-800/90 font-bold text-center md:text-3xl">Los Productos Favoritos</p>
          <div className="grid md:grid-cols-2 h-[1000px] md:h-[600px] gap-8">
            <div className="flex flex-col relative overflow-hidden h-full text-white justify-end rounded-xl group">
              <img
                className="absolute inset-0 object-cover object-center w-full h-full -z-20"
                src="https://tiendasdaka.com/img/producto/LM-00000937.webp"
              />
              <div className="inset-0 absolute bg-radial to-stone-900/10 from-transparent -z-10 group-hover:to-stone-900/20 transition" />
              <div className="bg-gradient-to-t from-stone-800/50 to-blue-800/0 p-4 rounded-lg">
                <h3 className="text-sm">TVs</h3>
                <p className="text-xl md:text-2xl font-bold line-clamp-1">
                  TV 50 PULG CRYSTAL 4K UHD SMART CNEGRO UN50DU8000 SAMSUNG
                </p>
                <p className="text-xl text-blue-50 font-bold">
                  300.00 US$
                </p>
              </div>
            </div>
            <div className="grid gap-8">
              <div className="flex flex-col relative overflow-hidden h-full text-white justify-end rounded-xl group">
                <img
                  className="absolute inset-0 object-cover object-center w-full h-full -z-20"
                  src="https://tiendasdaka.com/img/producto/LM-00000860.webp"
                />
                <div className="inset-0 absolute bg-radial to-stone-900/10 from-transparent -z-10 group-hover:to-stone-900/20 transition" />
                <div className="bg-gradient-to-t from-stone-800/50 to-blue-800/0 p-4 rounded-lg">
                  <h3 className="text-sm">TVs</h3>
                  <p className="text-xl md:text-2xl font-bold line-clamp-1">
                    TV 50 PULG CRYSTAL 4K UHD SMART CNEGRO UN50DU8000 SAMSUNG
                  </p>
                  <p className="text-xl text-blue-50 font-bold">
                    300.00 US$
                  </p>
                </div>
              </div>
              <div className="flex flex-col relative overflow-hidden group h-full text-white justify-end rounded-xl">
                <img
                  className="absolute inset-0 object-cover object-center w-full h-full -z-20"
                  src="https://tiendasdaka.com/img/producto/LM-00000818.webp"
                />
                <div className="inset-0 absolute bg-radial to-stone-900/10 from-transparent -z-10 group-hover:to-stone-900/20 transition" />
                <div className="bg-gradient-to-t from-stone-800/50 to-blue-800/0 p-4 rounded-lg">
                  <h3 className="mt-4 text-sm">TVs</h3>
                  <p className="text-xl md:text-2xl font-bold line-clamp-1">
                    TV 50 PULG CRYSTAL 4K UHD SMART CNEGRO UN50DU8000 SAMSUNG
                  </p>
                  <p className="text-xl text-blue-50 font-bold">
                    300.00 US$
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SectionLayout>
        <ProductsSection />
      </main>
      <Footer />
    </>
  );

}


