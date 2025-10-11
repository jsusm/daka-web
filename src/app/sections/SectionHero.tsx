import * as motion from 'motion/react-client'
import HeroImg from '@/assets/images/hero-background.jpg'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className='relative'>
      <div className="w-full h-[380px] sm:h-[500px] relative overflow-hidden">
        <Image
          alt="Cocina amueblada"
          src={HeroImg}
          className="absolute top-1/2 -translate-y-1/2 h-full w-full inset-0 object-cover object-center -z-20"
        />
        <div className="absolute w-full inset-0 bg-gradient-to-b md:bg-gradient-to-r from-blue-900/90 to-blue-900/20 sm:to-blue-900/20 -z-10" />
        <div className="mx-auto max-w-6xl flex items-center h-full">
          <motion.div className="flex flex-col px-4 text-white font-sans max-w-3xl gap-2">
            <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-3xl sm:text-4xl md:text-5xl font-bold">
              La tienda número 1 en venta de electrodomésticos en Venezuela
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }} className="sm:text-xl font-medium sm:font-normal">
              Con marcas de respaldo internacional, calidad, variedad y precios insuperables en: tecnología, hogar, casa, lencería y más.¡Entra y descubre lo que tenemos para ti!
            </motion.p>
          </motion.div>
        </div>
      </div>
      <div className='right-0 left-0 bottom-0 h-[32px] bg-gradient-to-t from-gray-100 to-transparent absolute sm:hidden' />
    </section>
  )

}
