const trust = [
  { icon: '✦', label: 'DHA License No. 4721-001' },
  { icon: '★', label: '4.9★ · 340 Google Reviews' },
  { icon: '◈', label: '2,400+ Procedures Performed' },
  { icon: '✦', label: 'ABHRS Board-Certified Physicians' },
  { icon: '◈', label: 'Members: ISAPS · DASIL' },
]

export default function TrustBar() {
  return (
    <div className="bg-charcoal text-white overflow-hidden">
      <div className="flex flex-wrap justify-center sm:justify-between items-center px-6 sm:px-10 lg:px-16">
        {trust.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 py-4 px-4 sm:px-6 border-r border-white/10 last:border-r-0"
          >
            <span className="text-rose-gold text-xs">{item.icon}</span>
            <span className="text-[12px] font-medium tracking-widest uppercase text-white/80 whitespace-nowrap">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
