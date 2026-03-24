'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Layla Al Mansouri',
    role: 'Business Executive, Dubai',
    quote:
      'I\'ve visited aesthetic clinics across London, Paris, and Dubai. Noor Clinic is in a different league entirely. The results from my filler treatment were breathtakingly natural. I finally look like the best version of myself.',
    rating: 5,
    initials: 'LA',
  },
  {
    name: 'Sara J.',
    role: 'Media Personality, Abu Dhabi',
    quote:
      'The IV drip protocol they created for me has transformed my energy levels completely. And the clinic itself — the privacy, the ambience, the care — it\'s unlike anything I\'ve experienced. This is luxury healthcare, redefined.',
    rating: 5,
    initials: 'SJ',
  },
  {
    name: 'Mohammed A.',
    role: 'Entrepreneur, Dubai',
    quote:
      'I was skeptical about PRP hair restoration, but after six sessions at Noor Clinic, the results are undeniable. Dr. Khalid took time to understand my concerns and managed my expectations perfectly. Truly world-class.',
    rating: 5,
    initials: 'MA',
  },
  {
    name: 'Priya Sharma',
    role: 'Fashion Director, Dubai',
    quote:
      'Noor Clinic\'s laser resurfacing treatment gave me the skin I thought was only possible with filters. Three months post-treatment and my skin has never looked better. I recommend them to everyone I know in Dubai.',
    rating: 5,
    initials: 'PS',
  },
  {
    name: 'Hessa Al Falasi',
    role: 'Architect, Business Bay',
    quote:
      'What sets Noor apart is the attention to detail and genuine care. My Emsculpt results exceeded every expectation. I feel stronger and more confident. This team is exceptional — I won\'t go anywhere else.',
    rating: 5,
    initials: 'HA',
  },
  {
    name: 'Yasmine R.',
    role: 'Interior Designer, Dubai',
    quote:
      'I came in for a skin brightening consultation feeling self-conscious about pigmentation. I left with a comprehensive plan and the most hopeful I\'ve felt in years. Four months on, the transformation is real.',
    rating: 5,
    initials: 'YR',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#C9A96E">
          <path d="M7 1l1.5 4.5H13l-3.5 2.5 1.3 4.5L7 10 3.2 12.5l1.3-4.5L1 5.5h4.5L7 1z"/>
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-[#0A0A0F] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,110,0.04),transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="section-divider" />
            <span className="text-[11px] tracking-[0.2em] uppercase text-[#C9A96E]">Client Stories</span>
            <div className="section-divider rotate-180" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-[#F5F0E8] leading-tight">
            Transformations That{' '}
            <span className="gold-text italic">Speak for Themselves</span>
          </h2>
          <p className="text-[#F5F0E8]/55 mt-4 max-w-xl mx-auto text-lg font-light leading-relaxed">
            Real stories from the remarkable people who trust Noor Clinic with their most important asset — their confidence.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="card-dark p-7 flex flex-col"
            >
              <Stars count={t.rating} />
              <blockquote className="mt-5 text-[#F5F0E8]/70 text-sm leading-relaxed flex-1 italic font-light">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-6 pt-6 border-t border-[#C9A96E]/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C9A96E] to-[#8B6914] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#0A0A0F] text-xs font-bold">{t.initials}</span>
                </div>
                <div>
                  <p className="text-[#F5F0E8] text-sm font-medium">{t.name}</p>
                  <p className="text-[#F5F0E8]/45 text-xs mt-0.5">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom trust signal */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-[#F5F0E8]/40 text-sm">
            ★★★★★ Rated 4.9/5 · Based on 340+ verified Google reviews
          </p>
        </motion.div>
      </div>
    </section>
  )
}
