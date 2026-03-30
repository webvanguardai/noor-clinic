import Image from 'next/image'

export default function Hero() {
  return (
    <section className="pt-16 min-h-screen flex flex-col lg:flex-row bg-bg">
      {/* LEFT — Editorial text */}
      <div className="flex-1 flex flex-col justify-center px-6 sm:px-10 lg:px-16 xl:px-24 py-16 lg:py-0 bg-bg">
        <div className="max-w-xl">
          {/* Label */}
          <p className="section-label mb-6">Aesthetic Medicine · Dubai</p>

          {/* Headline */}
          <h1 className="font-display text-[60px] sm:text-[72px] lg:text-[80px] xl:text-[88px] leading-[0.95] font-light text-text-primary mb-6 tracking-tight">
            Results that<br />
            <span className="italic text-gold">speak clearly.</span><br />
            Not loudly.
          </h1>

          {/* Subline */}
          <p className="text-[14px] text-text-secondary font-medium tracking-widest mb-10 uppercase">
            Board-Certified Physicians&nbsp;&nbsp;·&nbsp;&nbsp;Business Bay, Dubai&nbsp;&nbsp;·&nbsp;&nbsp;DHA Licensed
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#booking" className="btn-primary">
              Book a Consultation
            </a>
            <a href="#treatments" className="btn-outline">
              View Treatments
            </a>
          </div>

          {/* Stats row */}
          <div className="mt-14 flex gap-8 border-t border-border pt-8">
            <div>
              <p className="font-display text-[36px] font-semibold text-gold leading-none tracking-tight">2,400+</p>
              <p className="text-[11px] text-text-secondary mt-1.5 tracking-widest uppercase">Procedures performed</p>
            </div>
            <div className="w-px bg-border" />
            <div>
              <p className="font-display text-[36px] font-semibold text-gold leading-none tracking-tight">4.9★</p>
              <p className="text-[11px] text-text-secondary mt-1.5 tracking-widest uppercase">340 verified reviews</p>
            </div>
            <div className="w-px bg-border" />
            <div>
              <p className="font-display text-[36px] font-semibold text-gold leading-none tracking-tight">6+</p>
              <p className="text-[11px] text-text-secondary mt-1.5 tracking-widest uppercase">Years in Business Bay</p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT — Full-height image */}
      <div className="lg:w-[48%] xl:w-[52%] relative h-[55vw] lg:h-auto min-h-[320px]">
        <Image
          src="https://images.unsplash.com/photo-1612817288484-6f916006741a?w=1200&q=90&auto=format&fit=crop"
          alt="Noor Clinic — Luxury aesthetic treatment room, Business Bay Dubai"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 52vw"
        />
        {/* Dark gradient overlay for dark theme cohesion */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/20 via-transparent to-bg/60" />
        {/* DHA Badge */}
        <div className="absolute bottom-6 left-6 bg-surface/95 backdrop-blur-sm px-5 py-3 border border-border shadow-xl">
          <p className="text-[10px] text-text-secondary uppercase tracking-[0.2em] mb-1">ABHRS & DHA Certified</p>
          <p className="font-display text-[16px] font-semibold text-text-primary tracking-wide">Aesthetic Physicians</p>
        </div>
      </div>
    </section>
  )
}
