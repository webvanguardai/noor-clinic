'use client'

import { motion } from 'framer-motion'

const footerLinks = {
  Treatments: [
    'Botox & Fillers',
    'Laser Skin Resurfacing',
    'IV Vitamin Drips',
    'PRP Hair Restoration',
    'Body Sculpting',
    'Skin Brightening',
  ],
  Clinic: ['About Noor', 'Our Team', 'Why Choose Us', 'FAQ', 'Careers'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Accessibility'],
}

export default function Footer() {
  return (
    <footer className="bg-[#060609] border-t border-[#C9A96E]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14"
        >
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-gradient-to-br from-[#C9A96E] to-[#E8D5B0] flex items-center justify-center">
                <span className="font-serif text-[#0A0A0F] text-lg font-bold">N</span>
              </div>
              <div>
                <p className="font-serif text-[#F5F0E8] text-lg leading-tight">Noor Clinic</p>
                <p className="text-[10px] text-[#C9A96E] tracking-[0.15em] uppercase">Dubai</p>
              </div>
            </div>
            <p className="text-[#F5F0E8]/50 text-sm leading-relaxed max-w-xs mb-6">
              Premium aesthetic medicine and wellness in the heart of Business Bay, Dubai.
              Where science meets artistry and every outcome is exceptional.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {[
                {
                  label: 'Instagram',
                  href: '#',
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5"/>
                      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
                      <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
                    </svg>
                  ),
                },
                {
                  label: 'Facebook',
                  href: '#',
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                    </svg>
                  ),
                },
                {
                  label: 'TikTok',
                  href: '#',
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M9 12a4 4 0 104 4V4a5 5 0 005 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ),
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 border border-[#C9A96E]/20 flex items-center justify-center text-[#C9A96E]/60 hover:text-[#C9A96E] hover:border-[#C9A96E]/50 transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <p className="text-[11px] tracking-[0.15em] uppercase text-[#C9A96E] mb-5 font-medium">{section}</p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[#F5F0E8]/45 text-sm hover:text-[#C9A96E] transition-colors duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Bottom bar */}
        <div className="border-t border-[#C9A96E]/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#F5F0E8]/30 text-xs tracking-wide">
            © {new Date().getFullYear()} Noor Clinic Dubai. All rights reserved. DHA Licensed Facility.
          </p>
          <p className="text-[#F5F0E8]/20 text-xs">
            The Binary Tower, Business Bay, Dubai, UAE
          </p>
        </div>
      </div>
    </footer>
  )
}
