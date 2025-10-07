import Footer from "@/components/layout/Footer";
import SectionCategories from "./sections/SectionCategories";
import HeroSection from "./sections/SectionHero";
import Header from "@/components/layout/Header";
import SectionPartnerBrands from "./sections/SectionParnerBrands";
import SectionDakaBanners from "./sections/SectionDakaBanners";
import ProductsSectionPromo from "./sections/SectionProductsPromo";
import SectionGanaConDaka from './sections/SectionGanaConDaka';
import SectionSucursales from './sections/SectionSucursales';
import { SectionHowToBuy } from "./sections/SectionHowToBuy";


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

const productsPromo = [
  {
    "sap": "LM-00000938",
    "categoria": "TV 85 PULG",
    "promo": true,
    "precio": 2610,
    "descripcion": "TV 85 PULG QLED 4K SMART QN85Q60DA SAMSUNG",
    "marca": "SAMSUNG",
    "familia": "Linea Marron",
    "view": true
  },
  {
    "sap": "LM-00000937",
    "categoria": "TV 50 PULG",
    "promo": true,
    "precio": 785,
    "descripcion": "TV 50 PULG CRYSTAL 4K UHD SMART CNEGRO UN50DU8000 SAMSUNG",
    "marca": "SAMSUNG",
    "familia": "Linea Marron",
    "view": true
  },
  {
    "sap": "LM-00000880",
    "categoria": "TV 43 PULG",
    "promo": true,
    "precio": 220,
    "descripcion": "TV 43 PULG FULL HD SMART 43DA23FG DAEWOO",
    "marca": "DAEWOO",
    "familia": "Linea Marron",
    "view": true
  },
  {
    "sap": "LM-00000860",
    "categoria": "CORNETAS",
    "promo": true,
    "precio": 185,
    "descripcion": "PARTY SPEAKER CBLUETOOTH DOBLE DE 6.5 PULG. DA610P DAEWOO",
    "marca": "DAEWOO",
    "familia": "Linea Marron",
    "view": true
  },
];
export default function Home() {

  return (
    <>
      <Header />
      <main className="font-sans">
        <HeroSection />
        <SectionCategories />
        <SectionHowToBuy />
        <ProductsSectionPromo products={products} title="Productos Pensados para ti" />
        <SectionPartnerBrands />
        <SectionGanaConDaka />
        <ProductsSectionPromo products={productsPromo} title="Descuentos Imperdibles!" />
        <SectionSucursales />
        <SectionDakaBanners />
      </main>
      <Footer />
    </>
  );

}
