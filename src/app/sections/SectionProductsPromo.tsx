"use client";
import * as motion from 'motion/react-client'
import { SectionTitle, SectionTitleLabel, SectionTitleLink } from "@/components/layout/SectionTitle";
import { Product } from "@/types";
import { LucideArrowLeft, LucideArrowRight } from "lucide-react";
import { stagger, Variants } from 'motion';

const containerVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 8,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      delay: 0.2,
      delayChildren: stagger(0.1),
      when: 'beforeChildren'
    }
  }
}
const productVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 12
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
    }
  }
}

export function ProductCard({ product }: { product: Product }) {
  const currencyFormatter = new Intl.NumberFormat('es', { currency: 'USD', style: "currency", currencyDisplay: "narrowSymbol", })
  const price = currencyFormatter.format(product.precio)
  return (
    <motion.div
      variants={productVariant}
      viewport={{ once: true }}
      className="overflow-hidden font-sans rounded-xl bg-white hover:shadow-lg group"
    >
      <div className="relative w-full h-64">
        <img className="object-cover w-full h-full rounded-xl group-hover:scale-105 transition-all" src={`https://tiendasdaka.com/img/producto/${product.sap}.webp`} alt={product.descripcion} />
        <div className="bg-radial from-transparent to-transparent hover:to-stone-950/10 absolute inset-0 transition-colors pointer-events-none" />
        {product.promo && (
          <p className="absolute top-2 right-2 bg-yellow-300 text-blue-800 rounded px-2 py-0.5 font-medium">-30%</p>
        )}
      </div>
      <div className="p-4">
        <p className="text-stone-500 line-clamp-2 text-sm mb-2">{product.marca}</p>
        <h3 className="font-medium text-stone-900 line-clamp-2 text-sm sm:text-base">{product.descripcion}</h3>
        <div className="flex items-center justify-between mt-4">
          {product.promo ? (
            <div className="flex gap-2 items-center">
              <p className="font-medium text-stone-900">${price}</p>
              <p className="text-sm text-red-900/80 line-through">${price}</p>
            </div>
          ) : (
            <p className="text-neutral-900">{price}</p>
          )}
        </div>
      </div>
    </motion.div >
  );
}

export default function ProductsSectionPromo(props: { products: Product[], title: string }) {
  return (
    <section className="py-12 sm:py-14 lg:py-16">
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto max-w-7xl px-4"
      >
        <SectionTitle>
          <SectionTitleLabel className="sm:text-3xl">{props.title}</SectionTitleLabel>
          <SectionTitleLink>Ver Mas Productos</SectionTitleLink>
        </SectionTitle>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delayChildren: stagger(2) }}
          className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-4 lg:mt-8">
          {props.products.map(product => (
            <ProductCard key={product.sap} product={product} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
