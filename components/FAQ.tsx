'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'Is it painful?',
    a: 'Most treatments at Noor Clinic involve minimal discomfort. We use topical numbing creams before needle-based procedures, and our practitioners are trained to make your experience as comfortable as possible. Clients typically describe a mild pinching sensation at most.',
  },
  {
    q: 'How long do results last?',
    a: 'Results vary by treatment. Botox typically lasts 3–4 months; fillers 9–18 months depending on the product and area. Laser resurfacing offers long-lasting skin improvements with proper care. IV drips provide an immediate boost lasting several days. PRP hair results improve progressively over 3–6 months.',
  },
  {
    q: 'Are you DHA licensed?',
    a: 'Yes. Noor Clinic is fully licensed by the Dubai Health Authority (DHA). All our physicians and practitioners hold valid DHA licences. Our licence number is available in our footer and upon request at the clinic.',
  },
  {
    q: "What's the price range?",
    a: 'Treatments start from AED 500 for IV drips, AED 700 for skin brightening, AED 800 for Botox, and up to AED 5,000+ for full body sculpting packages. We offer personalised treatment plans after a complimentary consultation — pricing is always transparent with no hidden fees.',
  },
  {
    q: 'Can I book same day?',
    a: 'Yes — same-day appointments are available subject to availability. Simply message us on WhatsApp (+971 50 123 4567) or use the booking form above, and we\'ll do our best to accommodate you. We typically confirm within 60 minutes.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 bg-white scroll-mt-16">
      <div className="max-w-3xl mx-auto px-5 lg:px-10">
        {/* Header */}
        <div className="mb-12">
          <p className="section-label mb-3">FAQ</p>
          <h2 className="font-display text-[48px] sm:text-[56px] font-light text-charcoal leading-tight">
            Questions<br />
            <span className="italic text-rose-gold">answered.</span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <div key={i} className="border-t border-border last:border-b">
              <button
                className="w-full flex items-center justify-between py-5 text-left group"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-display text-[20px] sm:text-[22px] font-medium text-charcoal group-hover:text-rose-gold transition-colors pr-4">
                  {faq.q}
                </span>
                <span className={`text-rose-gold text-xl flex-shrink-0 transition-transform duration-200 ${open === i ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>

              {open === i && (
                <div className="pb-5">
                  <p className="text-[15px] text-charcoal/65 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
