import Image from 'next/image'

const treatments = [
  {
    name: 'Botox & Fillers',
    tagline: 'Smooth lines, restore volume, and sculpt natural-looking facial contours — zero downtime.',
    duration: '30–60 min',
    price: 'from AED 800',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=900&q=85&auto=format&fit=crop',
    alt: 'Botox and filler treatment close-up',
  },
  {
    name: 'Laser Resurfacing',
    tagline: 'Resurface your skin at the cellular level — erasing texture, pigmentation, and signs of ageing.',
    duration: '45–90 min',
    price: 'from AED 1,200',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=900&q=85&auto=format&fit=crop',
    alt: 'Advanced laser skin treatment',
  },
  {
    name: 'IV Drips',
    tagline: 'Targeted vitamin infusions delivered directly into your bloodstream for instant radiance and energy.',
    duration: '45–60 min',
    price: 'from AED 500',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=900&q=85&auto=format&fit=crop',
    alt: 'IV vitamin drip treatment',
  },
  {
    name: 'PRP Hair Restoration',
    tagline: 'Your own platelet-rich plasma reactivates dormant follicles — clinically proven hair regrowth.',
    duration: '60–75 min',
    price: 'from AED 1,500',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&q=85&auto=format&fit=crop',
    alt: 'PRP hair restoration treatment',
  },
  {
    name: 'Body Sculpting',
    tagline: 'Eliminate stubborn fat and build muscle simultaneously with non-invasive Emsculpt technology.',
    duration: '30 min / session',
    price: 'from AED 2,000',
    image: 'https://images.unsplash.com/photo-1551763163-adb9b6a26a94?w=900&q=85&auto=format&fit=crop',
    alt: 'Body sculpting treatment',
  },
  {
    name: 'Skin Brightening',
    tagline: 'Medical-grade brightening protocols that target hyperpigmentation and deliver visible luminosity.',
    duration: '45–60 min',
    price: 'from AED 700',
    image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=900&q=85&auto=format&fit=crop',
    alt: 'Skin brightening and glow treatment',
  },
]

export default function Treatments() {
  return (
    <section id="treatments" className="py-20 bg-white scroll-mt-16">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-5 lg:px-10 mb-14">
        <p className="section-label mb-3">Our Treatments</p>
        <h2 className="font-display text-[48px] sm:text-[60px] font-light text-charcoal leading-tight max-w-xl">
          Every treatment.<br />
          <span className="italic text-rose-gold">Expertly delivered.</span>
        </h2>
      </div>

      {/* Alternating rows */}
      <div className="space-y-0">
        {treatments.map((t, i) => {
          const isEven = i % 2 === 0
          return (
            <div
              key={t.name}
              className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} border-t border-border`}
            >
              {/* Image */}
              <div className="lg:w-1/2 relative h-[260px] sm:h-[320px] lg:h-[400px]">
                <Image
                  src={t.image}
                  alt={t.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Details */}
              <div
                className={`lg:w-1/2 flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-10 lg:py-0 ${
                  isEven ? 'bg-white' : 'bg-off-white'
                }`}
              >
                <p className="section-label mb-3">{t.duration}</p>
                <h3 className="font-display text-[36px] sm:text-[44px] font-light text-charcoal leading-tight mb-3">
                  {t.name}
                </h3>
                <p className="text-[15px] text-charcoal/65 leading-relaxed mb-5 max-w-sm">
                  {t.tagline}
                </p>
                <p className="font-display text-[24px] text-rose-gold font-semibold mb-7">
                  {t.price}
                </p>
                <a
                  href="#booking"
                  className="btn-primary self-start"
                >
                  Book This Treatment
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
