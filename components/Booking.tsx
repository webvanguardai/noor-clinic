'use client'

import { useState } from 'react'

const treatments = [
  'Botox & Fillers',
  'Laser Resurfacing',
  'IV Drips',
  'PRP Hair Restoration',
  'Body Sculpting',
  'Skin Brightening',
  'Other / Not Sure Yet',
]

export default function Booking() {
  const [form, setForm] = useState({ name: '', phone: '', treatment: '', date: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Send to Formspree
    try {
      await fetch('https://formspree.io/f/xpwzgkrl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
    } catch {}

    // WhatsApp redirect
    const msg = encodeURIComponent(
      `Hello Noor Clinic 👋\n\nI'd like to book a consultation.\n\nName: ${form.name}\nPhone: ${form.phone}\nTreatment: ${form.treatment}\nPreferred Date: ${form.date}`
    )
    window.open(`https://wa.me/971585324519?text=${msg}`, '_blank')
    setSubmitted(true)
    setLoading(false)
  }

  return (
    <section id="booking" className="py-20 lg:py-28 bg-charcoal scroll-mt-16">
      <div className="max-w-5xl mx-auto px-5 lg:px-10">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="section-label mb-3 text-rose-gold/70">Get Started</p>
          <h2 className="font-display text-[52px] sm:text-[68px] font-light text-white leading-tight">
            Ready to start?
          </h2>
          <p className="text-white/50 text-[15px] mt-4 max-w-md mx-auto">
            Fill in your details below and we&apos;ll reach out within the hour — or chat with us directly on WhatsApp.
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-16">
            <div className="w-14 h-14 rounded-full bg-rose-gold mx-auto flex items-center justify-center mb-5">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-display text-[32px] text-white font-light mb-3">Request received</h3>
            <p className="text-white/50 text-[15px]">Check your WhatsApp — we&apos;ll confirm your appointment shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name */}
            <div>
              <label className="text-[11px] text-white/40 uppercase tracking-widest block mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full bg-white/5 border border-white/10 text-white placeholder-white/30 px-4 py-3.5 text-[14px] focus:outline-none focus:border-rose-gold transition-colors"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="text-[11px] text-white/40 uppercase tracking-widest block mb-2">WhatsApp Number</label>
              <input
                type="tel"
                name="phone"
                required
                value={form.phone}
                onChange={handleChange}
                placeholder="+971 50 000 0000"
                className="w-full bg-white/5 border border-white/10 text-white placeholder-white/30 px-4 py-3.5 text-[14px] focus:outline-none focus:border-rose-gold transition-colors"
              />
            </div>

            {/* Treatment */}
            <div>
              <label className="text-[11px] text-white/40 uppercase tracking-widest block mb-2">Treatment</label>
              <select
                name="treatment"
                required
                value={form.treatment}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 text-white px-4 py-3.5 text-[14px] focus:outline-none focus:border-rose-gold transition-colors appearance-none"
              >
                <option value="" disabled className="bg-charcoal text-white/50">Select treatment</option>
                {treatments.map((t) => (
                  <option key={t} value={t} className="bg-charcoal text-white">{t}</option>
                ))}
              </select>
            </div>

            {/* Date */}
            <div>
              <label className="text-[11px] text-white/40 uppercase tracking-widest block mb-2">Preferred Date</label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 text-white px-4 py-3.5 text-[14px] focus:outline-none focus:border-rose-gold transition-colors [color-scheme:dark]"
              />
            </div>

            {/* Submit */}
            <div className="sm:col-span-2 flex flex-col sm:flex-row gap-4 items-center mt-2">
              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full sm:w-auto sm:min-w-[240px] justify-center disabled:opacity-60"
              >
                {loading ? 'Sending…' : 'Book via WhatsApp →'}
              </button>
              <p className="text-white/30 text-[12px]">
                We&apos;ll confirm your slot within 60 minutes.
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
