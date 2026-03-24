'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&q=85&auto=format&fit=crop"
          alt="Noor Clinic — Premium Aesthetic Medicine Dubai"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F]/80 via-[#0A0A0F]/60 to-[#0A0A0F]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0F]/70 via-transparent to-[#0A0A0F]/40" />
      </div>

      {/* Decorative gold line */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-40 bg-gradient-to-b from-transparent via-[#C9A96E]/50 to-transparent hidden lg:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="section-divider" />
            <span className="text-[11px] tracking-[0.2em] uppercase text-[#C9A96E] font-medium">
              Business Bay, Dubai
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#F5F0E8] leading-[1.1] mb-6"
          >
            Your Most{' '}
            <span className="gold-text italic">Radiant</span>
            <br />
            Self, Realized.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[#F5F0E8]/70 text-lg md:text-xl leading-relaxed mb-10 max-w-xl font-light"
          >
            Where medical precision meets aesthetic artistry. Dubai&apos;s premier destination
            for transformative beauty treatments — crafted for those who demand excellence.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#contact" className="btn-gold">
              Book a Consultation
            </a>
            <a href="#services" className="btn-outline">
              Explore Treatments
            </a>
          </motion.div>

          {/* Trust metrics */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap gap-8 mt-14 pt-8 border-t border-[#C9A96E]/15"
          >
            {[
              { value: '5,000+', label: 'Treatments Performed' },
              { value: '98%', label: 'Patient Satisfaction' },
              { value: '10+', label: 'Years of Excellence' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="font-serif text-2xl text-[#C9A96E] font-semibold">{stat.value}</span>
                <span className="text-[12px] tracking-[0.08em] text-[#F5F0E8]/50 uppercase mt-0.5">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase text-[#C9A96E]/60">Scroll</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-[#C9A96E]/60 to-transparent animate-pulse" />
      </motion.div>
    </section>
  )
}
