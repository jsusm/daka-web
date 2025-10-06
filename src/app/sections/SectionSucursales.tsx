"use client";
import SucursalImg1 from '@/assets/images/daka-sucursal.jpg'
import SucursalImg2 from '@/assets/images/sucursal1.jpg'
import SucursalImg3 from '@/assets/images/sucursal2.jpg'
import Image from "next/image";
import { cn } from '@/lib/cn';
import { useState } from 'react';
import SectionLayout from "@/components/layout/SectionLayout"
import { LucideArrowRight } from 'lucide-react';
import { SectionTitle, SectionTitleLabel, SectionTitleLink } from '@/components/layout/SectionTitle';

export default function SectionSucursales() {

  const [sucursales, setSucursales] = useState([
    {
      title: 'Sucursal San Martin',
      desc: 'A pocos minutos de la estación del metro, diagonal a la estación de servicio Royal, municipio Libertador en Caracas.',
      selected: true,
      img: SucursalImg1,
    },
    {
      title: 'Sucursal San Cristobal',
      desc: '5ta. Av Francisco García de Hevia, con calle 12, San Cristóbal, estado Táchira.',
      selected: false,
      img: SucursalImg3,
    },
    {
      title: 'Sucursal El Recreo',
      desc: 'Av. Casanova, Centro Comercial El Recreo, nivel comercio C3, local LC3-C23A.',
      selected: false,
      img: SucursalImg2,
    },
  ])

  function handleSelectSucursal(selectedIdx: number) {
    setSucursales(sucursales.map((s, idx) => {
      if (idx == selectedIdx) return { ...s, selected: true }
      return { ...s, selected: false }
    }))
  }

  const selectedSucursalImg = sucursales.find(s => s.selected)?.img

  return (
    <SectionLayout>
      <SectionTitle>
        <div>
          <SectionTitleLabel>
            Encuentranos Mas Cerca de Ti
          </SectionTitleLabel>
          <p className='text-stone-600'>
            Explora nuestras sucursales repartidas a los largo del pais
          </p>
        </div>
        <SectionTitleLink>Ver Todas Las Sucursales</SectionTitleLink>
      </SectionTitle>
      <div className='grid lg:grid-cols-5 gap-8 items-center'>
        <div className='lg:col-span-3'>
          <Image
            alt="Sucursal daka"
            src={selectedSucursalImg ?? ''}
            className='rounded-xl shadow-lg h-[300px] md:h-[500px] object-cover'
          />
        </div>
        <ul className='lg:col-span-2 text-stone-900 space-y-4'>
          {sucursales.map((s, idx) => (
            <li key={s.title} >
              <button
                className={cn(' text-left py-4 px-4 rounded-xl space-y-2 border w-full', s.selected ? 'bg-white shadow-lg border-transparent' : 'border-stone-300')}
                onClick={() => handleSelectSucursal(idx)}
              >
                <p className='md:text-xl font-medium'>{s.title}</p>
                <p className='text-stone-600 text-sm md:text-base'>{s.desc} </p>
                <p className='text-right text-blue-800'>Ver en Google Maps</p>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </SectionLayout>
  )
}
