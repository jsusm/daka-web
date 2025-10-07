"use client";
import SectionLayout from "@/components/layout/SectionLayout";
import { SectionTitle, SectionTitleLabel } from "@/components/layout/SectionTitle";
import { Check, ShoppingCart, User } from "lucide-react";
import { stagger, Variants } from "motion";
import * as motion from 'motion/react-client'

const steps = [
  {
    icon: <ShoppingCart size={32} className="text-blue-900" />,
    title: "Selecciona tus productos",
    subtitle: "Explora y elige lo que necesites",
  },
  {
    icon: <User size={32} className="text-blue-900" />,
    title: "Completa tus datos",
    subtitle: "Llena el formulario para tu pedido",
  },
  {
    icon: <Check size={32} className="text-blue-900" />,
    title: "Finaliza tu compra",
    subtitle: "Un asesor de ventas te contactará",
  },
];

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
      delayChildren: stagger(0.2),
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

export const SectionHowToBuy = () => {
  return (
    <SectionLayout>
      <motion.div
        variants={containerVariant}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
        initial="hidden"
        whileInView='visible'
      >
        <SectionTitle >
          <div>
            <SectionTitleLabel> Cómo comprar? </SectionTitleLabel>
            <p className="text-stone-600">Sigue estos simples pasos para completar tu compra atravez de la web de Daka.</p>
          </div>
        </SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row md:items-center">
              <motion.div
                variants={productVariant}
                className="flex items-center gap-4 p-2"
              >
                <div className="bg-blue-100 text-white rounded-full p-3">
                  {step.icon}
                </div>
                <div>
                  <p className="font-semibold text-lg text-stone-800">{step.title}</p>
                  <p className="text-stone-600">{step.subtitle}</p>
                </div>
              </motion.div>
              {index < steps.length - 1 && <div className=" md:w-auto md:h-16 mx-4 border-b my-4 md:border-b-0 md:border-l border-stone-300" />}
            </div>
          ))}
        </div>
      </motion.div>
    </SectionLayout>
  );
};
