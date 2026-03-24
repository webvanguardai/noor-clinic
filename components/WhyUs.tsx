'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const pillars = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3l2.5 7.5H24l-6.2 4.5 2.4 7.5L14 18l-6.2 4.5 2.4-7.5L4 10.5h7.5L14 3z" stroke="#C9A96E" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Board-Certified Physicians',
    description:
      'Every treatment is performed by internationally accredited doctors with advanced training in aesthetic medicine — never delegated to unqualified staff.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="6" width="20" height="16" rx="2" stroke="#C9A96E" strokeWidth="1.5"/>
        <path d="M4 11h20M9 6V4M19 6V4" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M8 16h3v2H8v-2zM12.5 16h3v2h-3v-2zM17 16h3v2h-3v-2z" fill="#C9A96E"/>
      </svg>
    ),
    title: 'Bespoke Treatment Plans',
    description:
      'No two faces are the same. We craft personalised protocols based on in-depth consultation, skin analysis, and your unique aesthetic vision.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4C8.477 4 4 8.477 4 14s4.477 10 10 10 10-4.477 10-10S19.523 4 14 4z" stroke="#C9A96E" strokeWidth="1.5"/>
        <path d="M9 14l3.5 3.5L20 10" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Clinically Proven Protocols',
    description:
      'We exclusively use FDA-cleared devices and globally approved injectables. Safety and efficacy are non-negotiable at Noor Clinic.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4s-8 4-8 10a8 8 0 0016 0c0-6-8-10-8-10z" stroke="#C9A96E" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M14 12v4M12 14h4" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Results That Speak',
    description:
      'Our outcomes are measured not just in before-and-afters, but in the confidence and transformation our clients carry with them every day.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M5 14h5l3-8 4 16 3-8h3" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Luxury Clinical Environment',
    description:
      'Step into a sanctuary designed for privacy and comfort. Our Business Bay clinic blends five-star hospitality with Swiss-level medical standards.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="#C9A96E" strokeWidth="1.5"/>
        <path d="M14 9v5l3 3" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Continuous Care & Follow-Up',
    description:
      'Your journey doesn&apos;t end after the treatment. We provide dedicated aftercare, progress monitoring, and ongoing support for every patient.',
  },
]

export default function WhyUs() {
  return (
    <section id="why" className="py-24 lg:py-32 bg-[#0D0D15] relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,169,110,0.05),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(201,169,110,0.04),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text + Image */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="section-divider" />
                <span className="text-[11px] tracking-[0.2em] uppercase text-[#C9A96E]">The Noor Difference</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-[#F5F0E8] leading-tight mb-6">
                Why Dubai&apos;s Most Discerning Clients{' '}
                <span className="gold-text italic">Choose Noor</span>
              </h2>
              <p className="text-[#F5F0E8]/60 text-lg leading-relaxed font-light mb-10">
                Excellence isn&apos;t a standard we aspire to — it&apos;s the minimum we accept. At Noor Clinic,
                every detail of your experience has been engineered to deliver results and a feeling
                unlike any other clinic in Dubai.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative h-72 lg:h-80 overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=900&q=80&auto=format&fit=crop"
                alt="Noor Clinic — luxury aesthetic clinic interior Dubai"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D15]/60 to-transparent" />
              {/* Floating stat */}
              <div className="absolute bottom-6 left-6 bg-[#0A0A0F]/90 backdrop-blur-sm border border-[#C9A96E]/20 px-6 py-4">
                <p className="font-serif text-2xl text-[#C9A96E]">5,000+</p>
                <p className="text-[11px] tracking-[0.1em] uppercase text-[#F5F0E8]/60 mt-0.5">Satisfied Clients</p>
              </div>
            </motion.div>
          </div>

          {/* Right: Pillars grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="card-dark p-5 group"
              >
                <div className="mb-4">{pillar.icon}</div>
                <h3 className="font-serif text-base text-[#F5F0E8] mb-2 leading-snug">{pillar.title}</h3>
                <p className="text-[#F5F0E8]/50 text-[13px] leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
