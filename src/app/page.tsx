import { LucideArrowRight, LucideLampDesk, LucideMonitorSmartphone, LucideRefrigerator, LucideSearch, LucideShoppingCart, LucideTvMinimal, Section, UserIcon } from 'lucide-react'
import Footer from "@/components/layout/Footer";
import ProductsSection from "./sections/SectionProducts";
import SectionFeatures from "./sections/SectionFeatures";
import SectionCategories from "./sections/SectionCategories";
import HeroSection from "./sections/SectionHero";
import Header from "@/components/layout/Header";
import SectionPartnerBrands from "./sections/SectionParnerBrands";
import SectionDakaBanners from "./sections/SectionDakaBanners";
import ProductsSectionPromo from "./sections/SectionProductsPromo";
import SectionCashea from "./sections/SectionCashea";
import SectionGanaConDaka from './sections/SectionGanaConDaka';
import SectionSucursales from './sections/SectionSucursales';


export default function Home() {

  return (
    <>
      <Header />
      <main className="font-sans">
        <HeroSection />
        <SectionCategories />
        <ProductsSection />
        <SectionPartnerBrands />
        <SectionFeatures />
        <SectionGanaConDaka />
        <SectionCashea />
        <ProductsSectionPromo />
        <SectionSucursales />
        <SectionDakaBanners />
      </main>
      <Footer />
    </>
  );

}
