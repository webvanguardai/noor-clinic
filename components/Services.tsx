'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const services = [
  {
    title: 'Botox & Fillers',
    description:
      'Precision injectables that restore youthful volume, smooth lines, and sculpt your features — with results so natural, only you will know.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80&auto=format&fit=crop',
    tag: 'Most Popular',
  },
  {
    title: 'Laser Skin Resurfacing',
    description:
      'Advanced fractional laser technology that erases scars, sun damage, and uneven texture — revealing smoother, luminous skin beneath.',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80&auto=format&fit=crop',
    tag: 'Advanced',
  },
  {
    title: 'IV Vitamin Drips',
    description:
      'Medical-grade IV therapy formulated to hydrate, energize, and elevate your wellness — from glow boosters to immunity protocols.',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&q=80&auto=format&fit=crop',
    tag: 'Wellness',
  },
  {
    title: 'PRP Hair Restoration',
    description:
      'Harness your body\'s own regenerative power. Platelet-rich plasma injections stimulate follicle growth for naturally thicker, fuller hair.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80&auto=format&fit=crop',
    tag: 'Regenerative',
  },
  {
    title: 'Body Sculpting (Emsculpt)',
    description:
      'The non-surgical body transformation. Emsculpt simultaneously burns fat and builds muscle through high-intensity focused electromagnetic energy.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80&auto=format&fit=crop',
    tag: 'Body',
  },
  {
    title: 'Skin Brightening',
    description:
      'Bespoke protocols targeting pigmentation, dullness, and uneven tone — leaving you with the lit-from-within radiance Dubai demands.',
    image: 'https://images.unsplash.com/photo-1619451334792-150fd785ee74?w=800&q=80&auto=format&fit=crop',
    tag: 'Glow',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-[#0A0A0F]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 lg:mb-20"
        >
          <div className="flex items-center gap-4 mb-5">
            <div className="section-divider" />
            <span className="text-[11px] tracking-[0.2em] uppercase text-[#C9A96E]">Our Treatments</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-[#F5F0E8] leading-tight max-w-xl">
            Precision Treatments,{' '}
            <span className="gold-text italic">Transformative</span>{' '}
            Results
          </h2>
          <p className="text-[#F5F0E8]/60 mt-4 max-w-2xl text-lg leading-relaxed font-light">
            Each treatment at Noor Clinic is tailored to your unique anatomy and aesthetic goals,
            delivered by internationally trained medical professionals.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="card-dark group cursor-pointer overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12121A] via-transparent to-transparent" />
                <span className="absolute top-4 left-4 text-[10px] tracking-[0.15em] uppercase text-[#0A0A0F] bg-[#C9A96E] px-3 py-1 font-semibold">
                  {service.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl text-[#F5F0E8] mb-3 group-hover:text-[#C9A96E] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-[#F5F0E8]/55 text-sm leading-relaxed">{service.description}</p>
                <div className="mt-5 flex items-center gap-2 text-[#C9A96E] text-[12px] tracking-[0.08em] uppercase">
                  <span>Learn More</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
