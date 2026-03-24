import Image from 'next/image'

const results = [
  {
    name: 'Sarah M.',
    treatment: 'Botox & Fillers',
    quote: "I walked out looking like myself — just refreshed and rested. No one could tell I'd had anything done. That's exactly what I wanted.",
    image: 'https://images.unsplash.com/photo-1519817650390-64a93db51149?w=600&q=80&auto=format&fit=crop',
    alt: 'Glowing skin result',
  },
  {
    name: 'Layla R.',
    treatment: 'Laser Resurfacing',
    quote: 'Three sessions in and my skin texture is completely transformed. The pigmentation I had for years is gone. The team is incredibly professional.',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=600&q=80&auto=format&fit=crop',
    alt: 'Skin brightening result',
  },
  {
    name: 'Ahmed K.',
    treatment: 'PRP Hair Restoration',
    quote: 'I was skeptical but the results speak for themselves. My hair is noticeably thicker after just four sessions. Highly recommend Noor Clinic.',
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&q=80&auto=format&fit=crop',
    alt: 'Hair restoration result',
  },
]

export default function Results() {
  return (
    <section id="results" className="py-20 bg-off-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        {/* Header */}
        <div className="mb-12">
          <p className="section-label mb-3">Patient Stories</p>
          <h2 className="font-display text-[48px] sm:text-[60px] font-light text-charcoal leading-tight">
            Real results.<br />
            <span className="italic text-rose-gold">Real people.</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {results.map((r) => (
            <div
              key={r.name}
              className="bg-white border border-border overflow-hidden group hover:shadow-lg transition-shadow duration-300"
            >
              {/* Abstract gradient image representing result */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={r.image}
                  alt={r.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Treatment badge */}
                <div className="absolute top-4 left-4 bg-rose-gold px-3 py-1">
                  <span className="text-[10px] text-white font-medium tracking-widest uppercase">
                    {r.treatment}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-[14px] text-charcoal/70 leading-relaxed mb-5 italic">
                  &ldquo;{r.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-rose-gold/20 flex items-center justify-center">
                    <span className="font-display text-rose-gold text-sm font-semibold">
                      {r.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-[13px] text-charcoal">{r.name}</p>
                    <div className="flex gap-0.5 mt-0.5">
                      {'★★★★★'.split('').map((s, i) => (
                        <span key={i} className="text-rose-gold text-[11px]">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
