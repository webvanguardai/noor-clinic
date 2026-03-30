export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-off-white scroll-mt-16 border-t border-border">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        {/* Header */}
        <div className="mb-12">
          <p className="section-label mb-3">Find Us</p>
          <h2 className="font-display text-[48px] sm:text-[56px] font-light text-text-primary leading-tight tracking-tight">
            Visit Noor Clinic
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="overflow-hidden border border-border h-[380px] lg:h-full min-h-[300px]">
            <iframe
              title="Noor Clinic — Business Bay, Dubai"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178!2d55.2617!3d25.1865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69a7b2b0b0b1%3A0x0!2sBusiness%20Bay%2C%20Dubai!5e0!3m2!1sen!2sae!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '300px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Contact details */}
          <div className="bg-surface border border-border p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <h3 className="font-display text-[28px] font-light text-text-primary mb-7 tracking-wide">Contact Details</h3>

              <div className="space-y-5">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 border border-border bg-bg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] text-text-secondary uppercase tracking-[0.18em] mb-1">Address</p>
                    <p className="text-[15px] text-text-primary/80">The Binary Tower, Business Bay<br />Dubai, UAE</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 border border-border bg-bg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] text-text-secondary uppercase tracking-[0.18em] mb-1">Phone</p>
                    <a href="tel:+971501234567" className="text-[15px] text-text-primary/80 hover:text-gold transition-colors">
                      +971 50 123 4567
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 border border-border bg-bg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] text-text-secondary uppercase tracking-[0.18em] mb-1">Email</p>
                    <a href="mailto:hello@noorclinic.ae" className="text-[15px] text-text-primary/80 hover:text-gold transition-colors">
                      hello@noorclinic.ae
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 border border-border bg-bg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] text-text-secondary uppercase tracking-[0.18em] mb-1">WhatsApp</p>
                    <a href="https://wa.me/971585324519" target="_blank" rel="noopener noreferrer" className="text-[15px] text-text-primary/80 hover:text-gold transition-colors">
                      +971 50 123 4567
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-[11px] text-text-secondary uppercase tracking-[0.18em] mb-3">Opening Hours</p>
              <div className="space-y-1.5 text-[14px] text-text-secondary">
                <p>Mon – Thu, Sat &nbsp;&nbsp; 9:00 am – 8:00 pm</p>
                <p>Friday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2:00 pm – 8:00 pm</p>
                <p className="text-text-secondary/40">Sunday — Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
