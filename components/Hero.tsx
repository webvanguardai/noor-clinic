import Image from 'next/image'

export default function Hero() {
  return (
    <section className="pt-16 min-h-screen flex flex-col lg:flex-row">
      {/* LEFT — Editorial text */}
      <div className="flex-1 flex flex-col justify-center px-6 sm:px-10 lg:px-16 xl:px-24 py-16 lg:py-0 bg-white">
        <div className="max-w-xl">
          {/* Label */}
          <p className="section-label mb-6">Aesthetic Medicine · Dubai</p>

          {/* Headline */}
          <h1 className="font-display text-[52px] sm:text-[64px] lg:text-[72px] xl:text-[80px] leading-[1.0] font-light text-charcoal mb-5">
            Precision<br />
            <span className="italic text-rose-gold">aesthetics.</span><br />
            Visible results.
          </h1>

          {/* Subline */}
          <p className="text-[15px] text-charcoal/60 font-medium tracking-wide mb-10">
            DHA Licensed Clinic&nbsp;&nbsp;·&nbsp;&nbsp;Business Bay, Dubai
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#booking" className="btn-primary">
              Book Now
            </a>
            <a href="#treatments" className="btn-outline">
              View Treatments
            </a>
          </div>

          {/* Stats row */}
          <div className="mt-14 flex gap-8 border-t border-border pt-8">
            <div>
              <p className="font-display text-[32px] font-semibold text-charcoal leading-none">2,400+</p>
              <p className="text-[12px] text-charcoal/50 mt-1 tracking-wide uppercase">Treatments done</p>
            </div>
            <div className="w-px bg-border" />
            <div>
              <p className="font-display text-[32px] font-semibold text-charcoal leading-none">4.9★</p>
              <p className="text-[12px] text-charcoal/50 mt-1 tracking-wide uppercase">Google Rating</p>
            </div>
            <div className="w-px bg-border" />
            <div>
              <p className="font-display text-[32px] font-semibold text-charcoal leading-none">DHA</p>
              <p className="text-[12px] text-charcoal/50 mt-1 tracking-wide uppercase">Licensed</p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT — Full-height image */}
      <div className="lg:w-[48%] xl:w-[52%] relative h-[55vw] lg:h-auto min-h-[320px]">
        <Image
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=90&auto=format&fit=crop"
          alt="Noor Clinic — Precision aesthetic treatment room"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 52vw"
        />
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/5 to-transparent" />
        {/* Badge */}
        <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-5 py-3 border border-border shadow-md">
          <p className="text-[11px] text-charcoal/50 uppercase tracking-widest mb-0.5">Board-Certified</p>
          <p className="font-display text-[16px] font-semibold text-charcoal">Aesthetic Physicians</p>
        </div>
      </div>
    </section>
  )
}
