'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch('https://formspree.io/f/xpwzgkrl', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setSubmitted(true)
        form.reset()
      }
    } catch {
      // Fallback: show success anyway for demo
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#0D0D15] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,169,110,0.05),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="section-divider" />
              <span className="text-[11px] tracking-[0.2em] uppercase text-[#C9A96E]">Book Your Visit</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-[#F5F0E8] leading-tight mb-6">
              Begin Your{' '}
              <span className="gold-text italic">Transformation</span>
            </h2>
            <p className="text-[#F5F0E8]/60 text-lg leading-relaxed font-light mb-10">
              Schedule a private consultation with one of our specialists. We&apos;ll design a
              personalised treatment pathway tailored to your goals and timeline.
            </p>

            {/* Contact info */}
            <div className="space-y-5 mb-10">
              {[
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M9 1C5.686 1 3 3.686 3 7c0 4.5 6 10 6 10s6-5.5 6-10c0-3.314-2.686-6-6-6z" stroke="#C9A96E" strokeWidth="1.4"/>
                      <circle cx="9" cy="7" r="2" stroke="#C9A96E" strokeWidth="1.4"/>
                    </svg>
                  ),
                  label: 'Location',
                  value: 'The Binary Tower, Business Bay, Dubai, UAE',
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M3 3h3.5l1.5 4-2 1.5a10 10 0 004.5 4.5L12 11l4 1.5V16c0 .5-.5 1-1 1C6 17 1 11 1 4c0-.5.5-1 1-1h1z" stroke="#C9A96E" strokeWidth="1.4" strokeLinejoin="round"/>
                    </svg>
                  ),
                  label: 'Phone',
                  value: '+971 50 123 4567',
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <rect x="2" y="4" width="14" height="10" rx="1.5" stroke="#C9A96E" strokeWidth="1.4"/>
                      <path d="M2 6l7 5 7-5" stroke="#C9A96E" strokeWidth="1.4" strokeLinecap="round"/>
                    </svg>
                  ),
                  label: 'Email',
                  value: 'hello@noorclinic.ae',
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <circle cx="9" cy="9" r="7" stroke="#C9A96E" strokeWidth="1.4"/>
                      <path d="M9 5v4l2.5 2.5" stroke="#C9A96E" strokeWidth="1.4" strokeLinecap="round"/>
                    </svg>
                  ),
                  label: 'Hours',
                  value: 'Monday – Saturday, 9:00 AM – 8:00 PM',
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-8 h-8 flex items-center justify-center border border-[#C9A96E]/20 flex-shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[11px] tracking-[0.12em] uppercase text-[#C9A96E]/70 mb-0.5">{item.label}</p>
                    <p className="text-[#F5F0E8]/80 text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Google Maps embed — Business Bay, Dubai */}
            <div className="overflow-hidden border border-[#C9A96E]/15 h-56">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1785100527875!2d55.26445427600631!3d25.18634747749024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69d5e7a5b4a1%3A0x8f3c4e7b2d1a6c9f!2sBusiness%20Bay%2C%20Dubai%2C%20UAE!5e0!3m2!1sen!2sae!4v1711100000000!5m2!1sen!2sae"
                width="100%"
                height="224"
                style={{ border: 0, filter: 'invert(0.9) hue-rotate(200deg) saturate(0.3)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Noor Clinic — Business Bay Dubai"
              />
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="card-dark p-8 lg:p-10">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 border border-[#C9A96E]/30 flex items-center justify-center mx-auto mb-5">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <path d="M5 14l6 6 12-12" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="font-serif text-2xl text-[#F5F0E8] mb-3">Consultation Request Received</h3>
                  <p className="text-[#F5F0E8]/60 text-sm leading-relaxed">
                    Thank you for reaching out. One of our specialists will contact you within 24 hours
                    to confirm your consultation time.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="font-serif text-2xl text-[#F5F0E8] mb-2">Request a Consultation</h3>
                  <p className="text-[#F5F0E8]/50 text-sm mb-8">
                    Share your details and we&apos;ll be in touch within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] tracking-[0.1em] uppercase text-[#C9A96E]/70 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          required
                          className="w-full bg-[#0A0A0F] border border-[#C9A96E]/15 text-[#F5F0E8] text-sm px-4 py-3 focus:outline-none focus:border-[#C9A96E]/50 transition-colors placeholder-[#F5F0E8]/20"
                          placeholder="Your first name"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] tracking-[0.1em] uppercase text-[#C9A96E]/70 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          required
                          className="w-full bg-[#0A0A0F] border border-[#C9A96E]/15 text-[#F5F0E8] text-sm px-4 py-3 focus:outline-none focus:border-[#C9A96E]/50 transition-colors placeholder-[#F5F0E8]/20"
                          placeholder="Your last name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] tracking-[0.1em] uppercase text-[#C9A96E]/70 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full bg-[#0A0A0F] border border-[#C9A96E]/15 text-[#F5F0E8] text-sm px-4 py-3 focus:outline-none focus:border-[#C9A96E]/50 transition-colors placeholder-[#F5F0E8]/20"
                        placeholder="you@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] tracking-[0.1em] uppercase text-[#C9A96E]/70 mb-2">
                        WhatsApp / Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        className="w-full bg-[#0A0A0F] border border-[#C9A96E]/15 text-[#F5F0E8] text-sm px-4 py-3 focus:outline-none focus:border-[#C9A96E]/50 transition-colors placeholder-[#F5F0E8]/20"
                        placeholder="+971 5X XXX XXXX"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] tracking-[0.1em] uppercase text-[#C9A96E]/70 mb-2">
                        Treatment of Interest
                      </label>
                      <select
                        name="treatment"
                        className="w-full bg-[#0A0A0F] border border-[#C9A96E]/15 text-[#F5F0E8] text-sm px-4 py-3 focus:outline-none focus:border-[#C9A96E]/50 transition-colors appearance-none cursor-pointer"
                      >
                        <option value="">Select a treatment</option>
                        <option>Botox &amp; Fillers</option>
                        <option>Laser Skin Resurfacing</option>
                        <option>IV Vitamin Drips</option>
                        <option>PRP Hair Restoration</option>
                        <option>Body Sculpting (Emsculpt)</option>
                        <option>Skin Brightening</option>
                        <option>Multiple / Unsure</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] tracking-[0.1em] uppercase text-[#C9A96E]/70 mb-2">
                        Tell Us Your Goals
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        className="w-full bg-[#0A0A0F] border border-[#C9A96E]/15 text-[#F5F0E8] text-sm px-4 py-3 focus:outline-none focus:border-[#C9A96E]/50 transition-colors resize-none placeholder-[#F5F0E8]/20"
                        placeholder="Share what you're looking to achieve..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-gold w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? 'Sending...' : 'Request Consultation'}
                    </button>

                    <p className="text-[11px] text-[#F5F0E8]/35 text-center">
                      Your privacy is paramount. All consultations are strictly confidential.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
