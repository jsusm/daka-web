"use client";
import Fondo from "@/assets/images/gana con daka fondo.png"
import Banner from "@/assets/images/gana con daka.png"
import Card from "@/assets/images/gana con daka card.png"
import SectionLayout from "@/components/layout/SectionLayout"
import Image from "next/image";
import * as motion from 'motion/react-client'
import { stagger, Variants } from "motion";

const containerVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 8,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
      delay: 0.2,
      delayChildren: stagger(0.1),
      when: 'beforeChildren'
    }
  }
}

const imgVariant: Variants = {
  hidden: {
    scale: 0.7,
  },
  visible: {
    scale: 1,
  }
}
const textVariant: Variants = {
  hidden: {
    scale: 0.8,
  },
  visible: {
    scale: 1,
  }
}

export default function SectionGanaConDaka() {
  return (
    <SectionLayout>
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView='visible'
        transition={{ delay: 1 }}
        viewport={{ once: true, amount: 0.7 }}
        className="bg-blue-950 rounded-2xl overflow-hidden  p-8 relative isolate shadow-2xl"
      >
        <Image alt="Gana con daka" src={Fondo} className="absolute top-0 left-0 inset-0 -z-10" />
        <div className="absolute top-0 left-0 inset-0 -z-10 bg-gradient-to-t from-blue-950/30 to-transparent" />
        <motion.div className="sm:grid-cols-2 grid items-center" variants={imgVariant}>
          <Image alt="Gana con Daka" src={Banner} className="" />
          <Image alt="Gana con Daka" src={Card} className="scale-90" />
        </motion.div>
        <motion.p className="text-center text-3xl sm:text-4xl font-extrabold text-white max-w-md mx-auto" variants={textVariant}>
          Llevate <span className="bg-gradient-to-r from-yellow-400 via-yellow-100 to-yellow-300 bg-clip-text text-transparent">$5000</span> En tus productos Favoritos
        </motion.p>
      </motion.div>
    </SectionLayout>
  )
}
